-- FuNPaY OTP আপডেট: Supabase > SQL Editor এ পুরোটা পেস্ট করে একবার Run দিন (আবার চালালেও সমস্যা নেই)
-- এতে আছে: কোড রাখার টেবিল, যাচাই হওয়া নম্বরের টেবিল, নতুন অ্যাকাউন্ট খোলার আগে "নম্বর যাচাই হয়েছে কিনা" সার্ভারে আটকানো।

create table if not exists public.otp_codes (
  phone text primary key,
  code_hash text not null,
  expires_at timestamptz not null,
  attempts int not null default 0,
  sent_at timestamptz not null default now()
);
create table if not exists public.otp_log (
  id bigserial primary key,
  phone text not null,
  ip text,
  at timestamptz not null default now()
);
create index if not exists otp_log_phone_idx on public.otp_log(phone, at desc);
create index if not exists otp_log_ip_idx on public.otp_log(ip, at desc);
create table if not exists public.verified_phones (
  phone text primary key,
  verified_at timestamptz not null default now()
);

-- তিনটাই শুধু সার্ভার (Edge Function) দেখবে, অ্যাপ থেকে সরাসরি নয়
alter table public.otp_codes enable row level security;
alter table public.otp_log enable row level security;
alter table public.verified_phones enable row level security;
revoke all on public.otp_codes, public.otp_log, public.verified_phones from anon, authenticated;

-- ভুল চেষ্টা গোনা (একসাথে অনেক চেষ্টা এলেও ঠিক গোনে)
create or replace function public.otp_take(p_phone text)
returns table(code_hash text, expires_at timestamptz, attempts int)
language sql security definer set search_path = public as $$
  update public.otp_codes set attempts = attempts + 1 where phone = p_phone
  returning otp_codes.code_hash, otp_codes.expires_at, otp_codes.attempts;
$$;
revoke execute on function public.otp_take(text) from public, anon, authenticated;
grant execute on function public.otp_take(text) to service_role;

-- নম্বর আছে কিনা এখন শুধু সার্ভার জানাবে (কোড যাচাইয়ের পরে), বাইরের কেউ আন্দাজ করতে পারবে না
revoke execute on function public.phone_exists(text) from public, anon, authenticated;
grant execute on function public.phone_exists(text) to service_role;

-- নতুন অ্যাকাউন্ট খোলার আগে সার্ভার দেখবে এই নম্বর গত 15 মিনিটে OTP দিয়ে যাচাই হয়েছে কিনা
create or replace function public.require_verified_phone() returns trigger
language plpgsql security definer set search_path = public as $$
declare ph text;
begin
  ph := coalesce(new.raw_user_meta_data->>'phone', '');
  if ph = '' or split_part(coalesce(new.email, ''), '@', 1) <> ph then
    raise exception 'NOTVERIFIED';
  end if;
  if not exists (select 1 from public.verified_phones where phone = ph and verified_at > now() - interval '15 minutes') then
    raise exception 'NOTVERIFIED';
  end if;
  delete from public.verified_phones where phone = ph;
  return new;
end $$;
drop trigger if exists a_require_verified_phone on auth.users;
create trigger a_require_verified_phone before insert on auth.users
  for each row execute function public.require_verified_phone();

-- পুরনো লগ মুছতে (ইচ্ছা হলে মাঝে মাঝে চালান):
-- delete from public.otp_log where at < now() - interval '2 days';
-- delete from public.verified_phones where verified_at < now() - interval '1 day';
