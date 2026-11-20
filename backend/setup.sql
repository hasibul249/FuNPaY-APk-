-- FuNPaY ব্যাকএন্ড (Supabase ফ্রি)। Supabase > SQL Editor এ পুরোটা পেস্ট করে Run দিন।
-- সব টাকা নকল (টেস্ট)। ব্যালেন্স শুধু নিচের ফাংশনগুলো বদলাতে পারে, অ্যাপ থেকে সরাসরি নয়।

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  phone text unique not null check (phone ~ '^01[0-9]{9}$'),
  name text not null default '',
  role text not null default 'user' check (role in ('user','agent')),
  balance numeric(14,2) not null default 0 check (balance >= 0),
  created_at timestamptz not null default now()
);

create table if not exists public.transactions (
  id bigserial primary key,
  trx text unique not null,
  type text not null,
  from_id uuid references public.profiles(id),
  to_id uuid references public.profiles(id),
  from_phone text, from_name text,
  to_phone text, to_name text,
  amount numeric(14,2) not null,
  fee numeric(14,2) not null default 0,
  comm numeric(14,2) not null default 0,
  ref text, ch text,
  created_at timestamptz not null default now()
);
create index if not exists tx_from_idx on public.transactions(from_id, created_at desc);
create index if not exists tx_to_idx on public.transactions(to_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.transactions enable row level security;

drop policy if exists "own profile" on public.profiles;
create policy "own profile" on public.profiles for select using (auth.uid() = id);
drop policy if exists "own tx" on public.transactions;
create policy "own tx" on public.transactions for select using (auth.uid() = from_id or auth.uid() = to_id);
-- insert/update/delete এর কোনো policy নেই, তাই অ্যাপ থেকে ব্যালেন্স বদলানো যায় না।

-- নতুন অ্যাকাউন্ট খুললে প্রোফাইল + ১৫০ টাকা বোনাস
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
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public._trx() returns text language sql as $$
  select 'FP' || upper(substr(md5(random()::text || clock_timestamp()::text), 1, 8));
$$;

-- নম্বর দিয়ে নাম ও ধরন (user/agent) দেখা
create or replace function public.lookup_phone(p_phone text)
returns table(pname text, prole text)
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  return query select p.name, p.role from public.profiles p where p.phone = p_phone;
end $$;

-- সেন্ড মানি / পেমেন্ট
create or replace function public.send_money(p_to text, p_amount numeric, p_type text default 'send')
returns text language plpgsql security definer set search_path = public as $$
declare snd public.profiles; rcp public.profiles; t text; amt numeric(14,2);
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  amt := round(p_amount, 2);
  if amt is null or amt < 1 or amt > 100000 then raise exception 'BADAMT'; end if;
  if p_type not in ('send','pay') then raise exception 'BADTYPE'; end if;
  select * into rcp from public.profiles where phone = p_to;
  if not found then raise exception 'NOUSER'; end if;
  if rcp.id = auth.uid() then raise exception 'SELF'; end if;
  perform 1 from public.profiles where id in (auth.uid(), rcp.id) order by id for update;
  select * into snd from public.profiles where id = auth.uid();
  if not found then raise exception 'AUTH'; end if;
  if snd.balance < amt then raise exception 'LOW'; end if;
  update public.profiles set balance = balance - amt where id = snd.id;
  update public.profiles set balance = balance + amt where id = rcp.id;
  t := public._trx();
  insert into public.transactions(trx, type, from_id, to_id, from_phone, from_name, to_phone, to_name, amount)
  values (t, p_type, snd.id, rcp.id, snd.phone, snd.name, rcp.phone, rcp.name, amt);
  return t;
end $$;

-- ক্যাশ আউট (শুধু এজেন্টের কাছে)। চার্জ ১.৮৫%, এজেন্ট কমিশন পায় চার্জের ৪০%
create or replace function public.cash_out(p_agent text, p_amount numeric)
returns text language plpgsql security definer set search_path = public as $$
declare snd public.profiles; ag public.profiles; t text; amt numeric(14,2); f numeric(14,2); c numeric(14,2);
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  amt := round(p_amount, 2);
  if amt is null or amt < 50 or amt > 50000 then raise exception 'BADAMT'; end if;
  select * into ag from public.profiles where phone = p_agent;
  if not found then raise exception 'NOUSER'; end if;
  if ag.role <> 'agent' then raise exception 'NOAGENT'; end if;
  if ag.id = auth.uid() then raise exception 'SELF'; end if;
  f := round(amt * 0.0185, 2);
  c := round(f * 0.4, 2);
  perform 1 from public.profiles where id in (auth.uid(), ag.id) order by id for update;
  select * into snd from public.profiles where id = auth.uid();
  if not found then raise exception 'AUTH'; end if;
  if snd.balance < amt + f then raise exception 'LOW'; end if;
  update public.profiles set balance = balance - (amt + f) where id = snd.id;
  update public.profiles set balance = balance + (amt + c) where id = ag.id;
  t := public._trx();
  insert into public.transactions(trx, type, from_id, to_id, from_phone, from_name, to_phone, to_name, amount, fee, comm)
  values (t, 'cash', snd.id, ag.id, snd.phone, snd.name, ag.phone, ag.name, amt, f, c);
  return t;
end $$;

-- রিচার্জ, বিল, ব্যাংক, ইন্স্যুরেন্স, এডুকেশন ফি (নিজের ব্যালেন্স থেকে কাটে)
create or replace function public.pay_service(p_type text, p_ref text, p_amount numeric, p_ch text default '')
returns text language plpgsql security definer set search_path = public as $$
declare snd public.profiles; t text; amt numeric(14,2);
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  amt := round(p_amount, 2);
  if amt is null or amt < 1 or amt > 100000 then raise exception 'BADAMT'; end if;
  if p_type not in ('rech','bill','bank','insur','edu') then raise exception 'BADTYPE'; end if;
  select * into snd from public.profiles where id = auth.uid() for update;
  if not found then raise exception 'AUTH'; end if;
  if snd.balance < amt then raise exception 'LOW'; end if;
  update public.profiles set balance = balance - amt where id = snd.id;
  t := public._trx();
  insert into public.transactions(trx, type, from_id, from_phone, from_name, amount, ref, ch)
  values (t, p_type, snd.id, snd.phone, snd.name, amt, left(p_ref, 40), left(coalesce(p_ch, ''), 20));
  return t;
end $$;

-- টেস্টের জন্য নকল টাকা যোগ (একবারে সর্বোচ্চ ৫০০০)
create or replace function public.add_test_money(p_amount numeric)
returns text language plpgsql security definer set search_path = public as $$
declare me public.profiles; t text; amt numeric(14,2);
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  amt := round(p_amount, 2);
  if amt is null or amt < 1 or amt > 5000 then raise exception 'BADAMT'; end if;
  select * into me from public.profiles where id = auth.uid() for update;
  if not found then raise exception 'AUTH'; end if;
  update public.profiles set balance = balance + amt where id = me.id;
  t := public._trx();
  insert into public.transactions(trx, type, to_id, to_phone, to_name, from_name, amount)
  values (t, 'add', me.id, me.phone, me.name, 'FuNPaY', amt);
  return t;
end $$;

-- কেউ লগইন ছাড়া এই ফাংশনগুলো চালাতে পারবে না
revoke execute on function public.lookup_phone(text) from public, anon;
revoke execute on function public.send_money(text, numeric, text) from public, anon;
revoke execute on function public.cash_out(text, numeric) from public, anon;
revoke execute on function public.pay_service(text, text, numeric, text) from public, anon;
revoke execute on function public.add_test_money(numeric) from public, anon;
grant execute on function public.lookup_phone(text) to authenticated;
grant execute on function public.send_money(text, numeric, text) to authenticated;
grant execute on function public.cash_out(text, numeric) to authenticated;
grant execute on function public.pay_service(text, text, numeric, text) to authenticated;
grant execute on function public.add_test_money(numeric) to authenticated;

-- এজেন্ট বানানোর নিয়ম (কাউকে এজেন্ট দিতে চাইলে তার নম্বর বসিয়ে আলাদা করে Run দিন):
-- update public.profiles set role = 'agent' where phone = '01XXXXXXXXX';

-- ===== v2.11: নম্বর যাচাই + কুপন সিস্টেম =====
create or replace function public.phone_exists(p_phone text) returns boolean
language sql security definer set search_path = public as $$
  select exists(select 1 from public.profiles where phone = p_phone);
$$;
grant execute on function public.phone_exists(text) to anon, authenticated;

alter table public.transactions add column if not exists disc numeric(14,2) not null default 0;

create table if not exists public.coupons (
  id serial primary key,
  code text unique not null,
  title text not null,
  kind text not null check (kind in ('percent','flat')),
  val numeric(10,2) not null check (val > 0),
  max_disc numeric(10,2),
  min_amt numeric(10,2) not null default 0,
  expires_at timestamptz,
  active boolean not null default true
);
create table if not exists public.user_coupons (
  id bigserial primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  coupon_id int not null references public.coupons(id) on delete cascade,
  used_at timestamptz,
  trx text,
  created_at timestamptz not null default now(),
  unique (user_id, coupon_id)
);
alter table public.coupons enable row level security;
alter table public.user_coupons enable row level security;
-- কোনো policy নেই: অ্যাপ সরাসরি পড়তে/বদলাতে পারে না, শুধু নিচের ফাংশন দিয়ে চলে

insert into public.coupons(code, title, kind, val, max_disc, min_amt) values
  ('WELCOME', 'প্রথম পেমেন্টে ১০ টাকা ছাড়', 'flat', 10, null, 50),
  ('PAY5', '৫% ছাড় (সর্বোচ্চ ৫০ টাকা)', 'percent', 5, 50, 100)
on conflict (code) do nothing;

-- আগের সবাইকে WELCOME কুপন দেওয়া
insert into public.user_coupons(user_id, coupon_id)
select p.id, c.id from public.profiles p, public.coupons c where c.code = 'WELCOME'
on conflict do nothing;

-- নতুন অ্যাকাউন্টে ১৫০ টাকা + WELCOME কুপন
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id, phone, name, balance)
  values (new.id,
          coalesce(new.raw_user_meta_data->>'phone', ''),
          left(coalesce(new.raw_user_meta_data->>'name', ''), 20),
          150);
  insert into public.user_coupons(user_id, coupon_id)
  select new.id, id from public.coupons where code = 'WELCOME'
  on conflict do nothing;
  return new;
end $$;

-- আমার ব্যবহারযোগ্য কুপন
create or replace function public.my_coupons()
returns table(uc_id bigint, code text, title text, kind text, val numeric, max_disc numeric, min_amt numeric, expires_at timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  return query
    select u.id, c.code, c.title, c.kind, c.val, c.max_disc, c.min_amt, c.expires_at
    from public.user_coupons u join public.coupons c on c.id = u.coupon_id
    where u.user_id = auth.uid() and u.used_at is null and c.active
      and (c.expires_at is null or c.expires_at > now())
    order by u.id desc;
end $$;

-- কোড দিয়ে কুপন যোগ করা
create or replace function public.claim_coupon(p_code text)
returns text language plpgsql security definer set search_path = public as $$
declare c public.coupons;
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  select * into c from public.coupons
   where code = upper(trim(p_code)) and active and (expires_at is null or expires_at > now());
  if not found then raise exception 'BADCODE'; end if;
  begin
    insert into public.user_coupons(user_id, coupon_id) values (auth.uid(), c.id);
  exception when unique_violation then raise exception 'HAVE';
  end;
  return c.title;
end $$;

-- পেমেন্ট (কুপনসহ)। কুপনের ছাড় FuNPaY দেয়: পেমেন্টকারীর ব্যালেন্স থেকে কমে (টাকা - ছাড়), মার্চেন্ট পুরো টাকা পায়
create or replace function public.pay_merchant(p_to text, p_amount numeric, p_uc bigint default null)
returns text language plpgsql security definer set search_path = public as $$
declare snd public.profiles; rcp public.profiles; t text; amt numeric(14,2); dsc numeric(14,2) := 0;
        cp public.coupons; uc public.user_coupons;
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  amt := round(p_amount, 2);
  if amt is null or amt < 1 or amt > 100000 then raise exception 'BADAMT'; end if;
  select * into rcp from public.profiles where phone = p_to;
  if not found then raise exception 'NOUSER'; end if;
  if rcp.id = auth.uid() then raise exception 'SELF'; end if;
  perform 1 from public.profiles where id in (auth.uid(), rcp.id) order by id for update;
  select * into snd from public.profiles where id = auth.uid();
  if not found then raise exception 'AUTH'; end if;
  if p_uc is not null then
    select * into uc from public.user_coupons where id = p_uc and user_id = auth.uid() and used_at is null for update;
    if not found then raise exception 'BADCPN'; end if;
    select * into cp from public.coupons where id = uc.coupon_id and active and (expires_at is null or expires_at > now());
    if not found or amt < cp.min_amt then raise exception 'BADCPN'; end if;
    if cp.kind = 'percent' then dsc := round(amt * cp.val / 100, 2); else dsc := cp.val; end if;
    if cp.max_disc is not null then dsc := least(dsc, cp.max_disc); end if;
    dsc := least(dsc, amt);
  end if;
  if snd.balance < amt - dsc then raise exception 'LOW'; end if;
  update public.profiles set balance = balance - (amt - dsc) where id = snd.id;
  update public.profiles set balance = balance + amt where id = rcp.id;
  t := public._trx();
  insert into public.transactions(trx, type, from_id, to_id, from_phone, from_name, to_phone, to_name, amount, disc)
  values (t, 'pay', snd.id, rcp.id, snd.phone, snd.name, rcp.phone, rcp.name, amt, dsc);
  if p_uc is not null then update public.user_coupons set used_at = now(), trx = t where id = p_uc; end if;
  return t;
end $$;

revoke execute on function public.my_coupons() from public, anon;
revoke execute on function public.claim_coupon(text) from public, anon;
revoke execute on function public.pay_merchant(text, numeric, bigint) from public, anon;
grant execute on function public.my_coupons() to authenticated;
grant execute on function public.claim_coupon(text) to authenticated;
grant execute on function public.pay_merchant(text, numeric, bigint) to authenticated;

-- নতুন কুপন বানানো (উদাহরণ):
--   insert into public.coupons(code, title, kind, val, max_disc, min_amt, expires_at)
--   values ('EID20', 'ঈদ অফার ২০ টাকা ছাড়', 'flat', 20, null, 200, '2027-01-31');
-- কোনো নম্বরকে সরাসরি কুপন দেওয়া:
--   insert into public.user_coupons(user_id, coupon_id)
--   select p.id, c.id from public.profiles p, public.coupons c where p.phone = '01XXXXXXXXX' and c.code = 'EID20';
-- সবাইকে দেওয়া:
--   insert into public.user_coupons(user_id, coupon_id)
--   select p.id, c.id from public.profiles p, public.coupons c where c.code = 'EID20' on conflict do nothing;

-- v2.13
alter table public.transactions add column if not exists status text not null default 'success';
notify pgrst, 'reload schema';
