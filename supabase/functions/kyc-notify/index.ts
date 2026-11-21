// kyc-notify: KYC এর খবর পাঠায় (Telegram এ অ্যাডমিনকে, আর SMS এ ইউজারকে)
// Supabase Dashboard > Edge Functions > Create function > নাম: kyc-notify > এই কোড পেস্ট > Deploy
// "Verify JWT" চালু (ON) রাখুন। অ্যাপ ও অ্যাডমিন অ্যাপ লগইন করা টোকেন দিয়ে ডাকে।
// Secrets (সবই ইচ্ছামতো; না দিলে ওই অংশ চুপচাপ বাদ যায়, KYC এর কাজ আটকায় না):
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID  -> নতুন আবেদন এলে অ্যাডমিনের Telegram এ মেসেজ
//   BULKSMSBD_API_KEY, BULKSMSBD_SENDER_ID -> একসেপ্ট/বাতিলের পর ইউজারের নম্বরে SMS
//
// ডাকার নিয়ম (POST, JSON):
//   { "action": "submitted" }              ইউজারের অ্যাপ জমা দেওয়ার পর ডাকে
//   { "action": "decided", "id": 12 }      অ্যাডমিন অ্যাপ সিদ্ধান্তের পর ডাকে (শুধু অ্যাডমিন পারবে)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const out = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return out(405, { error: "METHOD" });

  const url = Deno.env.get("SUPABASE_URL")!;
  const svc = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
  const jwt = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  const who = await svc.auth.getUser(jwt);
  if (who.error || !who.data.user) return out(401, { error: "AUTH" });
  const uid = who.data.user.id;

  let body: any = {};
  try { body = await req.json(); } catch (_) {}
  const result: Record<string, unknown> = { ok: true, telegram: false, sms: false };

  if (body.action === "submitted") {
    const r = await svc.from("kyc_requests").select("id,phone,name,nid_no,created_at")
      .eq("user_id", uid).eq("status", "pending").order("id", { ascending: false }).limit(1);
    const k = r.data && r.data[0];
    if (!k) return out(404, { error: "NOREQ" });
    const tok = Deno.env.get("TELEGRAM_BOT_TOKEN"), chat = Deno.env.get("TELEGRAM_CHAT_ID");
    if (tok && chat) {
      const text = `নতুন KYC আবেদন #${k.id}\nনাম: ${k.name}\nনম্বর: ${k.phone}\nNID: ${k.nid_no}\nঅ্যাডমিন অ্যাপে গিয়ে দেখে একসেপ্ট বা বাতিল করুন।`;
      try {
        const t = await fetch(`https://api.telegram.org/bot${tok}/sendMessage`, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chat, text }),
        });
        result.telegram = t.ok;
      } catch (e) { console.error("telegram", String(e)); }
    }
    return out(200, result);
  }

  if (body.action === "decided") {
    const adm = await svc.from("admins").select("user_id").eq("user_id", uid).limit(1);
    if (!adm.data || !adm.data.length) return out(403, { error: "NOADMIN" });
    const r = await svc.from("kyc_requests").select("phone,status,reject_reason").eq("id", Number(body.id)).limit(1);
    const k = r.data && r.data[0];
    if (!k || k.status === "pending") return out(404, { error: "NOREQ" });
    const key = Deno.env.get("BULKSMSBD_API_KEY"), sid = Deno.env.get("BULKSMSBD_SENDER_ID");
    if (key && sid) {
      // SMS ইংরেজিতে (সাধারণ text টাইপে সবচেয়ে নিরাপদ)। কারণের বিস্তারিত অ্যাপের মেসেজ বক্সে আছে
      const msg = k.status === "approved"
        ? "FuNPaY: Your KYC is approved. Your account is now active."
        : "FuNPaY: Your KYC was rejected. Open the app to see the reason and submit again.";
      try {
        const s = await fetch("https://bulksmsbd.net/api/smsapi?" + new URLSearchParams({
          api_key: key, type: "text", number: "88" + k.phone, senderid: sid, message: msg,
        }).toString());
        const j = await s.json().catch(() => ({}));
        result.sms = Number((j as any).response_code) === 202;
      } catch (e) { console.error("sms", String(e)); }
    }
    return out(200, result);
  }

  return out(400, { error: "ACTION" });
});
