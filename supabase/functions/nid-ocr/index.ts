// nid-ocr: NID কার্ডের ছবির লেখা পড়ে (Google Gemini API — AI Studio ফ্রি কী দিয়ে চলে, কার্ড/বিলিং লাগে না)
// Supabase Dashboard > Edge Functions > nid-ocr > এই কোড পেস্ট > Deploy
// "Verify JWT" চালু (ON) রাখুন। অ্যাপ লগইন করা টোকেন দিয়ে ডাকে।
// Secrets:
//   GEMINI_API_KEY   = aistudio.google.com এর API Key                      [বাধ্যতামূলক]
//   GEMINI_MODEL     = মডেলের নাম (না দিলে gemini-2.5-flash)               [ঐচ্ছিক]
//   OCR_DAILY_LIMIT  = একজন ইউজার দিনে সর্বোচ্চ কয়টি ছবি (না দিলে 12)       [ঐচ্ছিক]
// ছবি কোথাও জমা রাখা হয় না; পড়ে লেখা ফেরত দিয়ে শেষ।
// ফেরত: { ok:true, text:"...", lines:[{t:"লাইনের লেখা", w:[["শব্দ", ভরসা০-১০০], ...]}] }  (আগের মতোই, অ্যাপে বদল লাগে না)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const out = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

const PROMPT =
  "This is a photo of a Bangladesh National ID (NID) card (front or back). Transcribe ALL printed text exactly as it appears, " +
  "line by line, in reading order. Keep Bengali text in Bengali script and English text in English letters. " +
  "Keep labels like 'Name:', 'Date of Birth', 'ID NO' together with their values on the same line. " +
  "Copy digits exactly. Do not translate, correct, guess, or add anything. If part of the text is unreadable, skip it. " +
  "If the image is not an ID card, return an empty lines array. " +
  "In 'unsure', list any words you are not confident about (blurred or ambiguous).";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return out(405, { error: "METHOD" });

  const gkey = Deno.env.get("GEMINI_API_KEY");
  if (!gkey) return out(503, { error: "NOKEY" });
  const model = Deno.env.get("GEMINI_MODEL") || "gemini-2.5-flash";

  const svc = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
  const jwt = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  const who = await svc.auth.getUser(jwt);
  if (who.error || !who.data.user) return out(401, { error: "AUTH" });
  const uid = who.data.user.id;

  let body: any = {};
  try { body = await req.json(); } catch (_) {}
  const img = String(body.image || "");
  if (img.length < 1000 || img.length > 7_000_000) return out(400, { error: "IMAGE" });

  // দৈনিক সীমা। update-v2.53.sql না চালালে সীমা ছাড়াই চলে, আটকায় না।
  const limit = Number(Deno.env.get("OCR_DAILY_LIMIT") || "12");
  const day = new Date().toISOString().slice(0, 10);
  try {
    const u = await svc.from("ocr_usage").select("n").eq("user_id", uid).eq("day", day).maybeSingle();
    if (!u.error) {
      const n = (u.data && (u.data as any).n) || 0;
      if (n >= limit) return out(429, { error: "LIMIT" });
      await svc.from("ocr_usage").upsert({ user_id: uid, day, n: n + 1 });
    }
  } catch (e) { console.error("usage", String(e)); }

  let j: any;
  try {
    const r = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/" + encodeURIComponent(model) + ":generateContent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": gkey },
        body: JSON.stringify({
          contents: [{ parts: [{ text: PROMPT }, { inline_data: { mime_type: "image/jpeg", data: img } }] }],
          generationConfig: {
            temperature: 0,
            maxOutputTokens: 1200,
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                lines: { type: "ARRAY", items: { type: "STRING" } },
                unsure: { type: "ARRAY", items: { type: "STRING" } },
              },
              required: ["lines"],
            },
            thinkingConfig: { thinkingBudget: 0 }, // দ্রুত উত্তরের জন্য "ভাবনা" বন্ধ
          },
        }),
      },
    );
    if (!r.ok) { console.error("gemini", r.status, (await r.text()).slice(0, 300)); return out(502, { error: "GEMINI", status: r.status }); }
    j = await r.json();
  } catch (e) { console.error("gemini", String(e)); return out(502, { error: "GEMINI" }); }

  let parsed: any = {};
  try {
    const raw = j?.candidates?.[0]?.content?.parts?.map((p: any) => p.text || "").join("") || "{}";
    parsed = JSON.parse(raw);
  } catch (e) { console.error("parse", String(e)); return out(502, { error: "PARSE" }); }

  const src: string[] = (Array.isArray(parsed.lines) ? parsed.lines : []).map((x: any) => String(x || "").trim()).filter(Boolean).slice(0, 80);
  const unsure = new Set<string>((Array.isArray(parsed.unsure) ? parsed.unsure : []).map((x: any) => String(x || "").toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")).filter(Boolean));
  // Gemini শব্দ-ভরসা দেয় না: সাধারণ শব্দ 90, "unsure" তালিকার শব্দ 35 (অ্যাপের নাম-যাচাই যেন ভুল নাম "নিশ্চিত" না ধরে)
  const lines = src.map((t) => ({
    t,
    w: t.split(/\s+/).filter(Boolean).map((w): [string, number] => [w, unsure.has(w.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")) ? 35 : 90]),
  }));
  return out(200, { ok: true, text: src.join("\n"), lines });
});
