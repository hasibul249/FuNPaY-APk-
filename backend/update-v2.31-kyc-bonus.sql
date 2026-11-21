-- FuNPaY v2.31 আপডেট: Supabase > SQL Editor এ পুরোটা পেস্ট করে একবার Run দিন (আবার চালালেও সমস্যা নেই)
-- নতুন বোনাস নিয়ম:
--   * নতুন অ্যাকাউন্ট খুললে আর সরাসরি 150 টাকা নয় (ব্যালেন্স 0 থেকে শুরু)
--   * KYC সফল (একসেপ্ট বা অটো-অনুমোদন) হলে মোট 100 টাকার বোনাস:
--       - সরাসরি ব্যালেন্সে 25 টাকা
--       - বাকিটা কুপন হিসেবে: কমপক্ষে 1000 টাকা পেমেন্ট করলে 100 টাকা ছাড় (একবারই)
--   * প্রতিটি অ্যাকাউন্ট এই বোনাস জীবনে একবারই পায় (kyc_bonus_given)

alter table public.profiles add column if not exists kyc_bonus_given boolean not null default false;

-- আগে যারা 150 টাকা পেয়ে গেছে বা আগে থেকেই আছে, তারা নতুন বোনাস পাবে না (শুধু প্রথমবার এই SQL চালালে)
do $$
begin
  if not exists (select 1 from public.coupons where code = 'KYC100') then
    update public.profiles set kyc_bonus_given = true;
  end if;
end $$;

-- KYC বোনাসের কুপন
insert into public.coupons(code, title, kind, val, max_disc, min_amt) values
  ('KYC100', 'KYC বোনাস: 1000 টাকা পেমেন্টে 100 টাকা ছাড়', 'flat', 100, null, 1000)
on conflict (code) do nothing;

-- নতুন অ্যাকাউন্ট: ব্যালেন্স 0, আগের মতো WELCOME কুপন থাকবে
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id, phone, name, balance)
  values (new.id,
          coalesce(new.raw_user_meta_data->>'phone', ''),
          left(coalesce(new.raw_user_meta_data->>'name', ''), 20),
          0);
  insert into public.user_coupons(user_id, coupon_id)
  select new.id, id from public.coupons where code = 'WELCOME'
  on conflict do nothing;
  return new;
end $$;

-- KYC সফল হলেই বোনাস (অ্যাডমিন একসেপ্ট বা অটো-অনুমোদন, দুই পথেই কাজ করে)
create or replace function public._kyc_bonus() returns trigger
language plpgsql security definer set search_path = public as $$
declare given boolean;
begin
  if new.kyc_status = 'approved' and coalesce(old.kyc_status, '') <> 'approved' then
    select kyc_bonus_given into given from public.profiles where id = new.id for update;
    if given is false then
      update public.profiles set balance = balance + 25, kyc_bonus_given = true where id = new.id;
      insert into public.user_coupons(user_id, coupon_id)
      select new.id, id from public.coupons where code = 'KYC100'
      on conflict do nothing;
      insert into public.notices(target_id, audience, kind, title, body)
      values (new.id, 'all', 'bonus', 'KYC বোনাস পেয়েছেন',
              'ব্যালেন্সে 25 টাকা যোগ হয়েছে। সাথে 1000 টাকা বা তার বেশি পেমেন্টে 100 টাকা ছাড়ের কুপন পেয়েছেন।');
    end if;
  end if;
  return null;
end $$;

drop trigger if exists kyc_bonus on public.profiles;
create trigger kyc_bonus after update of kyc_status on public.profiles
  for each row execute function public._kyc_bonus();

-- কোনো পুরনো অ্যাকাউন্টকেও নতুন বোনাস দিতে চাইলে (উদাহরণ): নম্বর বদলে একবার চালান, তারপর KYC আবার একসেপ্ট হলে বোনাস পাবে
--   update public.profiles set kyc_bonus_given = false where phone = '01XXXXXXXXX';

notify pgrst, 'reload schema';
