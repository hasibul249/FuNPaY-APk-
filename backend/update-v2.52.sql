-- FuNPaY v2.52: KYC অতিরিক্ত তথ্য (ব্লাড গ্রুপ, বিভাগ/জেলা/উপজেলা, পোস্ট অফিস/কোড, লিঙ্গ, আয়ের উৎস, মাসিক আয়, পেশা)
-- Supabase SQL Editor এ একবার চালান। না চালালেও অ্যাপ ঠিকমতো চলে (তথ্য শুধু সংরক্ষণ হবে না)।

alter table public.kyc_requests add column if not exists extra jsonb;

create or replace function public.kyc_extra2(p_id bigint, p_data jsonb) returns void
language plpgsql security definer set search_path = public as $$
begin
  update public.kyc_requests
     set extra = jsonb_build_object(
           'blood',          left(coalesce(p_data->>'blood', ''), 10),
           'division',       left(coalesce(p_data->>'division', ''), 40),
           'district',       left(coalesce(p_data->>'district', ''), 40),
           'upazila',        left(coalesce(p_data->>'upazila', ''), 60),
           'post_office',    left(coalesce(p_data->>'post_office', ''), 60),
           'post_code',      left(coalesce(p_data->>'post_code', ''), 4),
           'gender',         left(coalesce(p_data->>'gender', ''), 20),
           'income_source',  left(coalesce(p_data->>'income_source', ''), 40),
           'monthly_income', left(coalesce(p_data->>'monthly_income', ''), 40),
           'occupation',     left(coalesce(p_data->>'occupation', ''), 40))
   where id = p_id and user_id = auth.uid();
end $$;

revoke execute on function public.kyc_extra2(bigint, jsonb) from public, anon;
grant execute on function public.kyc_extra2(bigint, jsonb) to authenticated;
