// verify-otp: কোড মেলায়। ঠিক হলে নম্বরটা 15 মিনিটের জন্য "যাচাই হয়েছে" রাখে আর জানায় অ্যাকাউন্ট আছে কিনা।
// Supabase Dashboard > Edge Functions > Create function > নাম: verify-otp > এই কোড পেস্ট > Deploy
// জরুরি: ফাংশনের সেটিংসে "Verify JWT" বন্ধ (OFF) করুন।
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

  let phone = "", code = "";
  try { const b = await req.json(); phone = String(b.phone || ""); code = String(b.code || ""); } catch (_) {}
  if (!/^01\d{9}$/.test(phone) || !/^\d{6}$/.test(code)) return out(400, { error: "OTPBAD" });

  const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });

  const t = await db.rpc("otp_take", { p_phone: phone });
  const row = Array.isArray(t.data) ? t.data[0] : null;
  if (!row) return out(400, { error: "OTPEXP" });
  if (new Date(row.expires_at).getTime() < Date.now()) {
    await db.from("otp_codes").delete().eq("phone", phone);
    return out(400, { error: "OTPEXP" });
  }
  if (row.attempts > 5) {
    await db.from("otp_codes").delete().eq("phone", phone);
    return out(429, { error: "OTPMANY" });
  }

  const hash = await sha(phone + ":" + code + ":" + (Deno.env.get("OTP_PEPPER") || ""));
  if (hash !== row.code_hash) return out(400, { error: "OTPBAD" });

  await db.from("otp_codes").delete().eq("phone", phone);
  await db.from("verified_phones").upsert({ phone, verified_at: new Date().toISOString() });
  const ex = await db.rpc("phone_exists", { p_phone: phone });
  return out(200, { ok: true, exists: ex.data === true });
});
