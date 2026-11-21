-- FuNPaY v2.23: KYC-তে মাতার নাম ও বাংলা নাম (অ্যাডমিন দেখার জন্য)
-- Supabase > SQL Editor এ পুরোটা Run করুন (আবার চালালেও সমস্যা নেই)।
-- আগে update-v2.18-kyc.sql ও update-v2.20-kyc-auto.sql চালানো থাকতে হবে।

alter table public.kyc_requests add column if not exists mother_name text;
alter table public.kyc_requests add column if not exists name_bn text;

-- অ্যাপ জমা দেওয়ার পর এই ফাংশন ডাকে (ইউজার শুধু নিজের সর্বশেষ আবেদনেই লিখতে পারে)
create or replace function public.kyc_extra(p_id bigint, p_mother text, p_name_bn text) returns void
language plpgsql security definer set search_path = public as $$
begin
  update public.kyc_requests
     set mother_name = nullif(left(trim(coalesce(p_mother, '')), 80), ''),
         name_bn     = nullif(left(trim(coalesce(p_name_bn, '')), 80), '')
   where id = p_id and user_id = auth.uid();
end $$;

revoke execute on function public.kyc_extra(bigint, text, text) from public, anon;
grant execute on function public.kyc_extra(bigint, text, text) to authenticated;
