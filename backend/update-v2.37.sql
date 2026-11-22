-- FuNPaY v2.37: PIN দেওয়ার পর "Something went wrong" ঠিক করে (Supabase > SQL Editor-এ একবার চালান)
-- কারণ: KYC অটো-অনুমোদনে বোনাসের নোটিশের ধরন 'bonus', কিন্তু notices টেবিলের তালিকায় সেটা ছিল না,
-- ফলে পুরো KYC জমা বাতিল হয়ে যেত।
alter table public.notices drop constraint if exists notices_kind_check;
alter table public.notices add constraint notices_kind_check
  check (kind in ('info','success','warn','offer','kyc_ok','kyc_no','bonus'));

-- আরও নিরাপদ: নোটিশ বসাতে কোনো সমস্যা হলেও বোনাস/অনুমোদন যেন আটকে না যায়
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
      begin
        insert into public.notices(target_id, audience, kind, title, body)
        values (new.id, 'all', 'bonus', 'KYC বোনাস পেয়েছেন',
                'ব্যালেন্সে 25 টাকা যোগ হয়েছে। সাথে 1000 টাকা বা তার বেশি পেমেন্টে 100 টাকা ছাড়ের কুপন পেয়েছেন।');
      exception when others then null;
      end;
    end if;
  end if;
  return null;
end $$;

drop trigger if exists kyc_bonus on public.profiles;
create trigger kyc_bonus after update of kyc_status on public.profiles
  for each row execute function public._kyc_bonus();

notify pgrst, 'reload schema';
