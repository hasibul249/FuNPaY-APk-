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
