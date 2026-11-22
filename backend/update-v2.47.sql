-- v2.47: লাইভনেস এখন ৩ ধাপ (আগে ৫), তাই "toofast" সীমা ৩.৫ সেকেন্ড থেকে ১.২ সেকেন্ডে নামানো হলো (না নামালে দ্রুত ইউজার সবাই ম্যানুয়াল রিভিউতে যাবে)
-- Supabase SQL Editor এ একবার চালান

create or replace function public.submit_kyc2(
  p_name text, p_father text, p_dob text, p_nid text, p_addr text,
  p_front text, p_back text, p_selfie text,
  p_card_desc double precision[], p_selfie_desc double precision[], p_live jsonb, p_tries int, p_mismatch boolean
) returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  me public.profiles; nid text; rid bigint; pre text;
  d double precision; pct numeric; fl text[] := '{}'::text[]; auto boolean; live boolean; swap boolean; tr int;
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  select * into me from public.profiles where id = auth.uid() for update;
  if not found then raise exception 'AUTH'; end if;
  if me.kyc_status not in ('none', 'rejected') then raise exception 'KYCSTATE'; end if;
  if (select count(*) from public.kyc_requests where user_id = auth.uid() and created_at > now() - interval '1 day') >= 6 then raise exception 'KYCLIMIT'; end if;
  nid := regexp_replace(coalesce(p_nid, ''), '\D', '', 'g');
  if length(nid) not in (10, 13, 17) then raise exception 'BADNID'; end if;
  if length(trim(coalesce(p_name, ''))) < 2 or length(trim(coalesce(p_father, ''))) < 2
     or length(trim(coalesce(p_dob, ''))) < 6 or length(trim(coalesce(p_addr, ''))) < 4 then
    raise exception 'BADDATA';
  end if;
  pre := auth.uid()::text || '/';
  if left(coalesce(p_front, ''), length(pre)) <> pre or left(coalesce(p_back, ''), length(pre)) <> pre
     or left(coalesce(p_selfie, ''), length(pre)) <> pre then
    raise exception 'BADDATA';
  end if;
  if (select count(*) from storage.objects where bucket_id = 'kyc' and name in (p_front, p_back, p_selfie)) < 3 then
    raise exception 'UPLOAD';
  end if;
  if exists(select 1 from public.kyc_requests where nid_no = nid and status in ('pending', 'approved') and user_id <> auth.uid()) then
    raise exception 'NIDUSED';
  end if;

  d := public._face_dist(p_card_desc, p_selfie_desc);
  pct := public._face_pct(d);
  live := coalesce((p_live ->> 'ok')::boolean, false);
  swap := coalesce((p_live ->> 'swap_ok')::boolean, false);
  tr := least(greatest(coalesce(p_tries, 1), 1), 9);

  if pct is null then
    fl := array_append(fl, 'nodesc');
    if tr >= 3 then fl := array_append(fl, 'fail3'); end if;
  else
    if d < 0.02 then fl := array_append(fl, 'identical'); end if;
    if pct < 85 then fl := array_append(fl, 'lowmatch'); end if;
    if pct >= 70 and pct < 85 then fl := array_append(fl, 'review70'); end if;
    if pct < 70 and tr >= 3 then fl := array_append(fl, 'fail3'); end if;
    if pct < 30 then fl := array_append(fl, 'suspect'); end if;
  end if;
  if not live then fl := array_append(fl, 'nolive'); end if;
  if live and not swap then fl := array_append(fl, 'swap'); end if;
  if coalesce((p_live ->> 'mode'), '') = 'manual' then fl := array_append(fl, 'manual'); end if;
  if coalesce((p_live ->> 'rs')::int, 0) >= 2 then fl := array_append(fl, 'livetimeout'); end if;
  if coalesce((p_live ->> 'ms')::int, 0) between 1 and 1200 then fl := array_append(fl, 'toofast'); end if;
  if coalesce(array_length(p_selfie_desc, 1), 0) = 128 and exists(
       select 1 from public.kyc_requests x
        where x.user_id <> auth.uid() and x.status in ('pending', 'approved') and x.selfie_desc is not null
          and public._face_dist(x.selfie_desc, p_selfie_desc) < 0.45) then
    fl := array_append(fl, 'dupface');
    fl := array_append(fl, 'suspect');
  end if;
  fl := (select coalesce(array_agg(distinct f), '{}'::text[]) from unnest(fl) as f);
  auto := cardinality(fl) = 0;

  insert into public.kyc_requests(user_id, phone, name, father_name, dob, nid_no, address, front_path, back_path, selfie_path,
                                  status, match_pct, face_dist, live_ok, auto_approved, tries, flags, liveness, card_desc, selfie_desc,
                                  reviewed_at)
  values (auth.uid(), me.phone, left(trim(p_name), 80), left(trim(p_father), 80), left(trim(p_dob), 30), nid, left(trim(p_addr), 250), p_front, p_back, p_selfie,
          case when auto then 'approved' else 'pending' end, pct, d, live and swap, auto, tr, fl,
          jsonb_build_object('ord', p_live -> 'ord', 'ms', p_live -> 'ms', 'rs', p_live -> 'rs', 'mode', p_live -> 'mode',
                             'swap_n', p_live -> 'swap_n', 'swap_max', p_live -> 'swap_max', 'app_pct', p_live -> 'pct', 'app_state', p_live -> 'st'),
          case when coalesce(array_length(p_card_desc, 1), 0) = 128 then p_card_desc end,
          case when coalesce(array_length(p_selfie_desc, 1), 0) = 128 then p_selfie_desc end,
          case when auto then now() end)
  returning id into rid;

  update public.profiles set kyc_status = case when auto then 'approved' else 'pending' end, kyc_reason = null where id = auth.uid();

  if auto then
    insert into public.notices(target_id, audience, kind, title, body)
    values (auth.uid(), 'all', 'kyc_ok', 'KYC verified', 'Your identity is verified. Your account is now active.');
    perform public._audit('kyc auto-approve', me.phone, jsonb_build_object('id', rid, 'pct', pct, 'dist', d));
  end if;
  return jsonb_build_object('id', rid, 'status', case when auto then 'approved' else 'pending' end, 'pct', pct, 'auto', auto, 'flags', to_jsonb(fl));
end $$;

revoke execute on function public.submit_kyc2(text, text, text, text, text, text, text, text, double precision[], double precision[], jsonb, int, boolean) from public, anon;
grant execute on function public.submit_kyc2(text, text, text, text, text, text, text, text, double precision[], double precision[], jsonb, int, boolean) to authenticated;

notify pgrst, 'reload schema';
