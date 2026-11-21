-- FuNPaY v2.33 (ভাগ ২): রিকোয়েস্ট মানি
-- Supabase > SQL Editor এ পুরোটা Run করুন (আবার চালালেও সমস্যা নেই)।

create table if not exists public.money_requests (
  id uuid primary key default gen_random_uuid(),
  from_id uuid not null references public.profiles(id) on delete cascade,   -- যিনি রিকোয়েস্ট করেছেন (টাকা পাবেন)
  to_id   uuid not null references public.profiles(id) on delete cascade,   -- যার কাছে চাওয়া হয়েছে (টাকা দেবেন)
  amount numeric(14,2) not null check (amount >= 1 and amount <= 100000),
  note text,
  status text not null default 'pending' check (status in ('pending','paid','declined','cancelled')),
  created_at timestamptz not null default now(),
  responded_at timestamptz
);
create index if not exists money_requests_from_idx on public.money_requests(from_id, created_at desc);
create index if not exists money_requests_to_idx   on public.money_requests(to_id, created_at desc);
alter table public.money_requests enable row level security;
-- সরাসরি টেবিল পড়া/লেখা নেই; সব কাজ নিচের ফাংশন দিয়ে।

-- রিকোয়েস্ট পাঠানো (একজনকে)
create or replace function public.req_create(p_phone text, p_amount numeric, p_note text default null)
returns uuid language plpgsql security definer set search_path = public as $$
declare rcp public.profiles; rid uuid; amt numeric(14,2);
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  amt := round(p_amount, 2);
  if amt is null or amt < 1 or amt > 100000 then raise exception 'BADAMT'; end if;
  select * into rcp from public.profiles where phone = p_phone;
  if not found then raise exception 'NOUSER'; end if;
  if rcp.id = auth.uid() then raise exception 'SELF'; end if;
  if (select count(*) from public.money_requests where from_id = auth.uid() and status = 'pending') >= 50 then raise exception 'REQMAX'; end if;
  insert into public.money_requests(from_id, to_id, amount, note)
    values (auth.uid(), rcp.id, amt, nullif(left(coalesce(p_note, ''), 50), '')) returning id into rid;
  return rid;
end $$;

-- নিজের সব রিকোয়েস্ট (dir = 'in' মানে আপনার কাছে চাওয়া হয়েছে, 'out' মানে আপনি চেয়েছেন)
create or replace function public.req_list()
returns table(id uuid, dir text, phone text, name text, amount numeric, note text, status text, created_at timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  return query
    select r.id, case when r.to_id = auth.uid() then 'in' else 'out' end,
           p.phone, coalesce(p.name, ''), r.amount, r.note, r.status, r.created_at
    from public.money_requests r
    join public.profiles p on p.id = case when r.to_id = auth.uid() then r.from_id else r.to_id end
    where r.to_id = auth.uid() or r.from_id = auth.uid()
    order by r.created_at desc limit 100;
end $$;

-- যিনি চেয়েছেন তিনি বাতিল করবেন
create or replace function public.req_cancel(p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  update public.money_requests set status = 'cancelled', responded_at = now()
    where id = p_id and from_id = auth.uid() and status = 'pending';
end $$;

-- যার কাছে চাওয়া হয়েছে তিনি বাতিল করবেন
create or replace function public.req_decline(p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  update public.money_requests set status = 'declined', responded_at = now()
    where id = p_id and to_id = auth.uid() and status = 'pending';
end $$;

-- যার কাছে চাওয়া হয়েছে তিনি টাকা পাঠানোর পর "পরিশোধিত" চিহ্ন (অ্যাপ সেন্ড মানি সফল হলে ডাকে)
create or replace function public.req_paid(p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'AUTH'; end if;
  update public.money_requests set status = 'paid', responded_at = now()
    where id = p_id and to_id = auth.uid() and status = 'pending';
end $$;

revoke execute on function public.req_create(text, numeric, text), public.req_list(), public.req_cancel(uuid),
  public.req_decline(uuid), public.req_paid(uuid) from public, anon;
grant execute on function public.req_create(text, numeric, text), public.req_list(), public.req_cancel(uuid),
  public.req_decline(uuid), public.req_paid(uuid) to authenticated;
