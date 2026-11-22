-- FuNPaY v2.57 (ভাগ ২) — Supabase SQL Editor এ একবার চালান
-- ১) অ্যাডমিন অ্যাপের "অ্যাকাউন্ট লিস্ট": শুধু KYC সম্পন্ন (approved) অ্যাকাউন্ট আসবে। KYC ছাড়া নম্বর আসবে না।
--    অ্যাডমিন অ্যাপে অ্যাকাউন্ট তালিকার ডাক এই ফাংশনে বদলান:  POST /rest/v1/rpc/admin_accounts_list  {p_q, p_limit, p_offset}
--    (সরাসরি profiles টেবিল থেকে পড়লে সেখানে ফিল্টার দিন: kyc_status=eq.approved)
create or replace function public.admin_accounts_list(p_q text default null, p_limit int default 50, p_offset int default 0)
returns table(id uuid, phone text, name text, role text, balance numeric, created_at timestamptz, kyc_status text)
language plpgsql security definer set search_path = public as $$
declare q text := nullif(trim(coalesce(p_q, '')), '');
begin
  if not public._is_admin() then raise exception 'NOADMIN'; end if;
  return query
    select p.id, p.phone, p.name, p.role, p.balance, p.created_at, p.kyc_status
      from public.profiles p
     where p.kyc_status = 'approved'
       and (q is null or p.phone like '%' || q || '%' or p.name ilike '%' || q || '%')
     order by p.created_at desc
     limit least(greatest(coalesce(p_limit, 50), 1), 200) offset greatest(coalesce(p_offset, 0), 0);
end $$;
revoke execute on function public.admin_accounts_list(text, int, int) from public, anon;
grant execute on function public.admin_accounts_list(text, int, int) to authenticated;

-- ২) কোড দিয়ে অ্যাকাউন্ট খুলে ২ ঘণ্টায়ও KYC না করলে অ্যাকাউন্ট নিজে সরে যায় (টাকা/লেনদেন নেই এমন অ্যাকাউন্টই শুধু)
create or replace function public.purge_unverified() returns int
language plpgsql security definer set search_path = public, auth as $$
declare n int := 0;
begin
  with d as (
    delete from auth.users u using public.profiles p
     where p.id = u.id and p.kyc_status = 'none'
       and p.created_at < now() - interval '2 hours'
       and p.balance = 0
       and not exists (select 1 from public.kyc_requests k where k.user_id = p.id)
       and not exists (select 1 from public.transactions t where t.from_id = p.id or t.to_id = p.id)
    returning u.id)
  select count(*) into n from d;
  return n;
end $$;
revoke execute on function public.purge_unverified() from public, anon, authenticated;

-- প্রতি ১০ মিনিটে চলবে। আগে Dashboard → Database → Extensions এ "pg_cron" চালু করুন (না থাকলে নিচের অংশ চুপচাপ বাদ যায়)
do $$ begin
  create extension if not exists pg_cron;
  begin perform cron.unschedule('funpay-purge-unverified'); exception when others then null; end;
  perform cron.schedule('funpay-purge-unverified', '*/10 * * * *', 'select public.purge_unverified()');
exception when others then
  raise notice 'pg_cron চালু নেই — Extensions থেকে pg_cron চালু করে এই অংশ আবার চালান';
end $$;

notify pgrst, 'reload schema';
