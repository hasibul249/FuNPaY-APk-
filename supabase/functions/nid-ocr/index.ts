// nid-ocr: NID কার্ডের ছবির লেখা পড়ে (Google Cloud Vision, প্রতি মাসে প্রথম ১০০০ ছবি ফ্রি)
// Supabase Dashboard > Edge Functions > Create function > নাম: nid-ocr > এই কোড পেস্ট > Deploy
// "Verify JWT" চালু (ON) রাখুন। অ্যাপ লগইন করা টোকেন দিয়ে ডাকে।
// Secrets:
//   GOOGLE_VISION_KEY  = Google Cloud এর API Key (নিচে OCR-SETUP.txt দেখুন)   [বাধ্যতামূলক]
//   OCR_DAILY_LIMIT    = একজন ইউজার দিনে সর্বোচ্চ কয়টি ছবি পড়াতে পারবে (না দিলে 12)
// ছবি কোথাও জমা রাখা হয় না; পড়ে লেখা ফেরত দিয়ে শেষ।
// ফেরত: { ok:true, text:"...", lines:[{t:"লাইনের লেখা", w:[["শব্দ", ভরসা০-১০০], ...]}] }
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

  const vkey = Deno.env.get("GOOGLE_VISION_KEY");
  if (!vkey) return out(503, { error: "NOKEY" });

  const svc = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
  const jwt = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  const who = await svc.auth.getUser(jwt);
  if (who.error || !who.data.user) return out(401, { error: "AUTH" });
  const uid = who.data.user.id;

  let body: any = {};
  try { body = await req.json(); } catch (_) {}
  const img = String(body.image || "");
  if (img.length < 1000 || img.length > 7_000_000) return out(400, { error: "IMAGE" });

  // দৈনিক সীমা (ফ্রি কোটা বাঁচাতে)। update-v2.53.sql না চালালে সীমা ছাড়াই চলে, আটকায় না।
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
    const r = await fetch("https://vision.googleapis.com/v1/images:annotate?key=" + encodeURIComponent(vkey), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requests: [{
        image: { content: img },
        features: [{ type: "DOCUMENT_TEXT_DETECTION" }],
        imageContext: { languageHints: ["bn", "en"] },
      }] }),
    });
    if (!r.ok) { console.error("vision", r.status, (await r.text()).slice(0, 300)); return out(502, { error: "VISION", status: r.status }); }
    j = await r.json();
  } catch (e) { console.error("vision", String(e)); return out(502, { error: "VISION" }); }

  const resp = j && j.responses && j.responses[0];
  if (resp && resp.error) { console.error("vision", JSON.stringify(resp.error).slice(0, 300)); return out(502, { error: "VISION" }); }
  const fa = resp && resp.fullTextAnnotation;
  const text: string = (fa && fa.text) || "";

  const lines: { t: string; w: [string, number][] }[] = [];
  for (const pg of (fa && fa.pages) || []) for (const bl of pg.blocks || []) for (const pa of bl.paragraphs || []) {
    let cur: { t: string; w: [string, number][] } = { t: "", w: [] };
    for (const w of pa.words || []) {
      const syms = w.symbols || [];
      const tx = syms.map((s: any) => s.text || "").join("");
      cur.w.push([tx, Math.round((typeof w.confidence === "number" ? w.confidence : 0) * 100)]);
      cur.t += (cur.t ? " " : "") + tx;
      const br = syms.length && syms[syms.length - 1].property && syms[syms.length - 1].property.detectedBreak
        ? syms[syms.length - 1].property.detectedBreak.type : "";
      if (br === "LINE_BREAK" || br === "EOL_SURE_SPACE") { lines.push(cur); cur = { t: "", w: [] }; }
    }
    if (cur.w.length) lines.push(cur);
  }
  return out(200, { ok: true, text, lines });
});
