-- FuNPaY v2.24: সেন্ড মানিতে নোট (রেফারেন্স) ও শুভেচ্ছা কার্ড, ১০ প্রিয় নাম্বার, গ্রুপ সেন্ড
-- Supabase > SQL Editor এ পুরোটা Run করুন (আবার চালালেও সমস্যা নেই)।

alter table public.transactions add column if not exists note text;
alter table public.transactions add column if not exists card text;

-- ===== প্রিয় নাম্বার (সর্বোচ্চ ১০টা) =====
create table if not exists public.favorites (
  user_id uuid not null references public.profiles(id) on delete cascade,
  phone text not null check (phone ~ '^01[0-9]{9}$'),
  created_at timestamptz not null default now(),
  primary key (user_id, phone)
);
alter table public.favorites enable row level security;
drop policy if exists "own fav" on public.favorites;
create policy "own fav" on public.favorites for select using (auth.uid() = user_id);

create or replace function public.fav_list() returns table(phone text, name text)
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  return query select f.phone, coalesce(p.name, '') from public.favorites f
    left join public.profiles p on p.phone = f.phone
    where f.user_id = auth.uid() order by f.created_at;
end $$;

create or replace function public.fav_add(p_phone text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  if not exists (select 1 from public.profiles where phone = p_phone) then raise exception 'NOUSER'; end if;
  if exists (select 1 from public.profiles where id = auth.uid() and phone = p_phone) then raise exception 'SELF'; end if;
  if exists (select 1 from public.favorites where user_id = auth.uid() and phone = p_phone) then return; end if;
  if (select count(*) from public.favorites where user_id = auth.uid()) >= 10 then raise exception 'FAVMAX'; end if;
  insert into public.favorites(user_id, phone) values (auth.uid(), p_phone);
end $$;

create or replace function public.fav_remove(p_phone text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  delete from public.favorites where user_id = auth.uid() and phone = p_phone;
end $$;

-- ===== সেন্ড মানি (নোট ও কার্ডসহ) =====
create or replace function public.send_money2(p_to text, p_amount numeric, p_note text default null, p_card text default null)
returns text language plpgsql security definer set search_path = public as $$
declare snd public.profiles; rcp public.profiles; t text; amt numeric(14,2);
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
  if snd.balance < amt then raise exception 'LOW'; end if;
  update public.profiles set balance = balance - amt where id = snd.id;
  update public.profiles set balance = balance + amt where id = rcp.id;
  t := public._trx();
  insert into public.transactions(trx, type, from_id, to_id, from_phone, from_name, to_phone, to_name, amount, note, card)
  values (t, 'send', snd.id, rcp.id, snd.phone, snd.name, rcp.phone, rcp.name, amt,
          nullif(left(trim(coalesce(p_note, '')), 50), ''), nullif(left(trim(coalesce(p_card, '')), 20), ''));
  return t;
end $$;

-- ===== গ্রুপ সেন্ড: একসাথে ২–১০ জনকে (একজনেরটা ব্যর্থ হলে কারো যায় না) =====
create or replace function public.send_group(p_to text[], p_amount numeric, p_note text default null, p_card text default null)
returns text[] language plpgsql security definer set search_path = public as $$
declare ph text; res text[] := '{}'; lst text[];
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  select array(select distinct x from unnest(p_to) x) into lst;
  if coalesce(array_length(lst, 1), 0) < 2 or array_length(lst, 1) > 10 then raise exception 'BADCNT'; end if;
  foreach ph in array lst loop
    res := res || public.send_money2(ph, p_amount, p_note, p_card);
  end loop;
  return res;
end $$;

revoke execute on function public.fav_list(), public.fav_add(text), public.fav_remove(text),
  public.send_money2(text, numeric, text, text), public.send_group(text[], numeric, text, text) from public, anon;
grant execute on function public.fav_list(), public.fav_add(text), public.fav_remove(text),
  public.send_money2(text, numeric, text, text), public.send_group(text[], numeric, text, text) to authenticated;
