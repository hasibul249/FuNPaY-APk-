-- v2.53: NID লেখা পড়ার (nid-ocr) দৈনিক সীমার হিসাব। একবার Supabase SQL Editor এ Run করুন।
-- না চালালেও OCR চলবে, শুধু ইউজারপ্রতি দৈনিক সীমা কাজ করবে না।
create table if not exists public.ocr_usage (
  user_id uuid not null,
  day date not null default current_date,
  n int not null default 0,
  primary key (user_id, day)
);
alter table public.ocr_usage enable row level security;
-- কোনো policy নেই: শুধু Edge Function (service role) পড়তে/লিখতে পারে, অ্যাপ সরাসরি পারে না।
