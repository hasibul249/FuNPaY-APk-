// send-otp: নম্বরে 6 ডিজিটের কোড পাঠায় (BulkSMSBD দিয়ে)
// Supabase Dashboard > Edge Functions > Create function > নাম: send-otp > এই কোড পেস্ট > Deploy
// জরুরি: ফাংশনের সেটিংসে "Verify JWT" বন্ধ (OFF) করুন।
// Secrets (Edge Functions > Secrets): BULKSMSBD_API_KEY, BULKSMSBD_SENDER_ID, (ইচ্ছা হলে) OTP_PEPPER
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const out = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

const sha = async (s: string) =>
  Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s))))
    .map((b) => b.toString(16).padStart(2, "0")).join("");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return out(405, { error: "METHOD" });

  let phone = "";
  try { phone = String((await req.json()).phone || ""); } catch (_) {}
  if (!/^01\d{9}$/.test(phone)) return out(400, { error: "BADPHONE" });

  const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  const now = Date.now();
  const ago = (ms: number) => new Date(now - ms).toISOString();

  // সীমা: একই নম্বরে 60 সেকেন্ডে একবার, 24 ঘণ্টায় সর্বোচ্চ 10 বার; একই IP থেকে ঘণ্টায় সর্বোচ্চ 40 বার (শুধু সফলভাবে পাঠানো SMS গোনা হয়)
  const last = await db.from("otp_log").select("at").eq("phone", phone).gte("at", ago(60_000)).limit(1);
  if (last.data && last.data.length) return out(429, { error: "OTPWAIT" });
  const day = await db.from("otp_log").select("id", { count: "exact", head: true }).eq("phone", phone).gte("at", ago(86_400_000));
  if ((day.count || 0) >= 10) return out(429, { error: "OTPLIM" });
  const hr = await db.from("otp_log").select("id", { count: "exact", head: true }).eq("ip", ip).gte("at", ago(3_600_000));
  if ((hr.count || 0) >= 40) return out(429, { error: "OTPLIM" });

  const n = new Uint32Array(1); crypto.getRandomValues(n);
  const code = String(n[0] % 1_000_000).padStart(6, "0");
  const hash = await sha(phone + ":" + code + ":" + (Deno.env.get("OTP_PEPPER") || ""));

  const up = await db.from("otp_codes").upsert({
    phone, code_hash: hash, expires_at: new Date(now + 5 * 60_000).toISOString(), attempts: 0, sent_at: new Date(now).toISOString(),
  });
  if (up.error) { console.error("db", up.error.message); return out(500, { error: "SERVER" }); }

  // SMS: ইংরেজিতে রাখা হয়েছে (সাধারণ text টাইপে সবচেয়ে নিরাপদ, কোড ঠিকই ধরা পড়ে)
  const msg = `Your FuNPaY code is ${code}. Do not share it with anyone.`;
  const url = "https://bulksmsbd.net/api/smsapi?" + new URLSearchParams({
    api_key: Deno.env.get("BULKSMSBD_API_KEY") || "",
    type: "text",
    number: "88" + phone,
    senderid: Deno.env.get("BULKSMSBD_SENDER_ID") || "",
    message: msg,
  }).toString();

  try {
    const r = await fetch(url);
    const txt = await r.text();
    let j: any = {}; try { j = JSON.parse(txt); } catch (_) {}
    if (Number(j.response_code) !== 202) {
      console.error("bulksmsbd", txt.slice(0, 300)); // কারণ Edge Function এর Logs এ দেখা যাবে
      await db.from("otp_codes").delete().eq("phone", phone);
      return out(502, { error: "OTPSMS" });
    }
  } catch (e) {
    console.error("bulksmsbd net", String(e));
    await db.from("otp_codes").delete().eq("phone", phone);
    return out(502, { error: "OTPSMS" });
  }
  // SMS সফলভাবে গেলে তবেই সীমার হিসাবে ধরা হয় (ব্যর্থ হলে চেষ্টা নষ্ট হয় না)
  await db.from("otp_log").insert({ phone, ip });
  return out(200, { ok: true });
});
