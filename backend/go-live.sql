-- আসল টাকার ব্যবস্থা (বাংলাদেশ ব্যাংকের লাইসেন্সসহ পেমেন্ট পার্টনার) চালু করার সময় এটা চালান।
-- ১) বিনা পয়সায় টাকা বানানোর ফাংশন বন্ধ
drop function if exists public.add_test_money(numeric);
-- ২) নতুন অ্যাকাউন্টের ফ্রি ৫০০০ টাকা বন্ধ
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id, phone, name, balance)
  values (new.id, coalesce(new.raw_user_meta_data->>'phone', ''), left(coalesce(new.raw_user_meta_data->>'name', ''), 20), 0);
  return new;
end $$;
-- ৩) টেস্টের সব ব্যালেন্স শূন্য করা (আসল ও টেস্ট টাকা মেশাবেন না)
-- update public.profiles set balance = 0;
-- এরপর www/js/app.js এ const TEST_MODE = false; করুন।
