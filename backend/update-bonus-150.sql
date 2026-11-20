-- আগে setup.sql চালিয়ে থাকলে শুধু এই ফাইলটি Supabase SQL Editor এ একবার Run করুন।
-- এরপর থেকে নতুন অ্যাকাউন্টে ১৫০ টাকা বোনাস পাবে (পুরনো অ্যাকাউন্টের ব্যালেন্স বদলাবে না)।
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id, phone, name, balance)
  values (new.id,
          coalesce(new.raw_user_meta_data->>'phone', ''),
          left(coalesce(new.raw_user_meta_data->>'name', ''), 20),
          150);
  return new;
end $$;
