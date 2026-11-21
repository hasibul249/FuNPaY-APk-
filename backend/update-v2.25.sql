-- v2.25: গ্রুপ সেন্ডে প্রত্যেককে আলাদা আলাদা পরিমাণ (একজনেরটা ব্যর্থ হলে কারো যায় না)
-- আগে update-v2.24.sql চালানো থাকতে হবে। Supabase SQL Editor এ একবার Run করুন।
create or replace function public.send_group2(p_to text[], p_amounts numeric[], p_note text default null, p_card text default null)
returns text[] language plpgsql security definer set search_path = public as $$
declare i int; n int; res text[] := '{}';
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  n := coalesce(array_length(p_to, 1), 0);
  if n < 2 or n > 10 or n <> coalesce(array_length(p_amounts, 1), 0) then raise exception 'BADCNT'; end if;
  if (select count(distinct x) from unnest(p_to) x) <> n then raise exception 'BADCNT'; end if;
  for i in 1..n loop
    res := res || public.send_money2(p_to[i], p_amounts[i], p_note, p_card);
  end loop;
  return res;
end $$;
revoke execute on function public.send_group2(text[], numeric[], text, text) from public, anon;
grant execute on function public.send_group2(text[], numeric[], text, text) to authenticated;
