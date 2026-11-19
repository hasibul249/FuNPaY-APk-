/* FuNPaY ওয়ালেট অ্যাপ */
const P = {
  send:'<path d="M7 17L17 7M8 7h9v9"/>', cash:'<path d="M17 7L7 17M16 17H7V8"/>',
  rech:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',
  pay:'<path d="M6 7h12l1 13H5z"/><path d="M9 7a3 3 0 016 0"/>',
  add:'<path d="M12 5v14M5 12h14"/>', bill:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  save:'<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 10c0-2 6-2 6 0s-6 2-6 4 6 2 6 0"/>',
  bank:'<path d="M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18"/>',
  loan:'<circle cx="9" cy="9" r="6"/><path d="M15 9.5A6 6 0 119.5 15"/>',
  insur:'<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  edu:'<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/><path d="M4 19V5"/>',
  remit:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  qr:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v7M14 20h3"/>',
  home:'<path d="M3 11l9-8 9 8v10H3z"/>', mine:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  inbox:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  bell:'<path d="M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4"/>', srch:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  cd:'<path d="M6 9l6 6 6-6"/>', cu:'<path d="M6 15l6-6 6 6"/>', ch:'<path d="M9 6l6 6-6 6"/>',
  gift:'<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8c-3-4-6 0-3 0M12 8c3-4 6 0 3 0"/>',
  tag:'<path d="M3 12l9-9h8v8l-9 9z"/><circle cx="16" cy="8" r="1.5"/>',
  star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  up:'<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  lang:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18"/>',
  out:'<path d="M9 4H5v16h4M16 8l4 4-4 4M20 12H9"/>', card:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/>'
};
P.fp = '<path d="M12 11v4M8.5 20c.5-2 .5-4 .5-6a3 3 0 016 0c0 3 .3 5 1 7M5 17c.3-1.5.5-3 .5-5a6.5 6.5 0 0113 0c0 1 0 2-.2 3M6.5 5.5A9 9 0 0121 12"/>';
const ic = (k) => `<svg class="i" viewBox="0 0 24 24">${P[k]}</svg>`;

/* সার্ভিস তালিকা: f=ফিল্ডের লেবেল, k=n(১১ ডিজিট নম্বর)/t(লেখা), ch=অপশন, fee=চার্জ, d=+১ হলে টাকা আসে */
const SV = [
  {id:"send",f:"rn",k:"n"}, {id:"rech",f:"rn",k:"n",ch:["gp","robi","bl","airtel","tt"]},
  {id:"cash",f:"ag",k:"n",fee:.0185}, {id:"pay",f:"mn",k:"n"},
  {id:"add",ch:["bankc","cardc"],d:1}, {id:"bill",f:"acc",k:"t",ch:["elec","gas","water","net"]},
  {id:"save"}, {id:"bank",f:"bacc",k:"t"},
  {id:"loan",d:1}, {id:"insur",f:"pol",k:"t"}, {id:"edu",f:"inst",k:"t"}, {id:"remit",d:1}
];
const QR = {id:"qr",f:"mn",k:"n"};
const cfg = (id) => id === "qr" ? QR : SV.find(s => s.id === id);

const T = {
 bn:{hi:"স্বাগতম",nm:"আপনার নাম",showb:"ব্যালেন্স দেখুন",
  send:"সেন্ড মানি",rech:"মোবাইল রিচার্জ",cash:"ক্যাশ আউট",pay:"পেমেন্ট",add:"অ্যাড মানি",bill:"পে বিল",save:"সেভিংস",bank:"ব্যাংকে পাঠান",loan:"লোন",insur:"ইন্স্যুরেন্স",edu:"এডুকেশন ফি",remit:"রেমিট্যান্স",qr:"QR পেমেন্ট",
  rn:"প্রাপকের নম্বর",ag:"এজেন্ট নম্বর",mn:"মার্চেন্ট নম্বর",acc:"একাউন্ট / গ্রাহক নম্বর",bacc:"ব্যাংক একাউন্ট নম্বর",pol:"পলিসি নম্বর",inst:"প্রতিষ্ঠানের নাম",
  gp:"গ্রামীণফোন",robi:"রবি",bl:"বাংলালিংক",airtel:"এয়ারটেল",tt:"টেলিটক",bankc:"ব্যাংক একাউন্ট",cardc:"কার্ড",elec:"বিদ্যুৎ",gas:"গ্যাস",water:"পানি",net:"ইন্টারনেট",
  home:"হোম",mine:"আমার FuNPaY",inbox:"ইনবক্স",qrs:"QR স্ক্যান",more:"আরও দেখুন",less:"বন্ধ করুন",
  fav:"প্রিয় নম্বর",qf:"কুইক ফিচারসমূহ",offers:"আমার অফার",cp:"কুপন",rw:"রিওয়ার্ডস",rec:"সাম্প্রতিক লেনদেন",all:"সব দেখুন",
  txs:"লেনদেনসমূহ",nt:"নোটিফিকেশন",sq:"TrxID বা নম্বর দিয়ে খুঁজুন",flt:"ফিল্টার",f0:"সব",f1:"ক্যাশ ইন",f2:"ক্যাশ আউট",last:"সব লেনদেন",
  none:"কিছু পাওয়া যায়নি",no:"এখনো কোনো লেনদেন নেই",
  amt:"টাকার পরিমাণ",next:"পরবর্তী",back:"পেছনে",cancel:"বাতিল",confirm:"নিশ্চিত করুন",pin:"আপনার PIN দিন",
  pick:"একটি বেছে নিন",badn:"নম্বর ঠিক নয় (০১XXXXXXXXX)",badt:"তথ্য দিন",bada:"টাকার পরিমাণ দিন",low:"পর্যাপ্ত ব্যালেন্স নেই",wp:"PIN ভুল, আবার চেষ্টা করুন",
  done:"সফল হয়েছে!",trx:"ট্রানজেকশন আইডি",ok:"ঠিক আছে",sendto:"কাকে",svc:"সার্ভিস",amtl:"পরিমাণ",feel:"চার্জ",total:"মোট",
  lp:"আপনার ৬ ডিজিট PIN দিন",tag:"আপনার টাকা, আপনার নিয়ন্ত্রণ",
  o1:"প্রথম অ্যাড মানিতে ৫% ক্যাশব্যাক",o2:"রিচার্জে ১০ টাকা বোনাস",o3:"বন্ধুকে ইনভাইট করুন, ৫০ টাকা পান",g1:"এখনই নিন",g2:"রিচার্জ করুন",g3:"ইনভাইট",
  n1:"অ্যাড মানিতে ক্যাশব্যাক চলছে!",n2:"রিচার্জে বিশেষ বোনাস",n3:"বন্ধু ইনভাইটে ৫০ টাকা",new:"নতুন",
  scn:"স্ক্যান করতে ফ্রেমে QR রাখুন, অথবা নম্বর দিন",myfav:"প্রিয় নম্বর",card2:"কার্ড যোগ করুন",bank2:"ব্যাংক একাউন্ট",cd2:"অ্যাড মানি ও পেমেন্টের জন্য",
  lang:"ভাষা: English",out:"লগআউট",acct:"আমার একাউন্ট",chk:"আপডেট চেক করুন",noup:"আপডেট সার্ভার সেট করা নেই",latest:"আপনি সর্বশেষ ভার্সনে আছেন",upfail:"ইন্টারনেট নেই বা চেক করা যায়নি",upn:"নতুন আপডেট এসেছে",upb:"আপডেট করুন",upl:"পরে",ver:"ভার্সন",num:"মোবাইল নম্বর",addn:"যোগ করুন"},
 en:{hi:"Welcome",nm:"Your Name",showb:"Check balance",
  send:"Send Money",rech:"Mobile Recharge",cash:"Cash Out",pay:"Payment",add:"Add Money",bill:"Pay Bill",save:"Savings",bank:"Send to Bank",loan:"Loan",insur:"Insurance",edu:"Education Fee",remit:"Remittance",qr:"QR Payment",
  rn:"Receiver number",ag:"Agent number",mn:"Merchant number",acc:"Account / customer number",bacc:"Bank account number",pol:"Policy number",inst:"Institution name",
  gp:"Grameenphone",robi:"Robi",bl:"Banglalink",airtel:"Airtel",tt:"Teletalk",bankc:"Bank account",cardc:"Card",elec:"Electricity",gas:"Gas",water:"Water",net:"Internet",
  home:"Home",mine:"My FuNPaY",inbox:"Inbox",qrs:"QR Scan",more:"See more",less:"Show less",
  fav:"Favorite numbers",qf:"Quick features",offers:"My Offers",cp:"Coupons",rw:"Rewards",rec:"Recent transactions",all:"See all",
  txs:"Transactions",nt:"Notifications",sq:"Search by TrxID or number",flt:"Filter",f0:"All",f1:"Cash In",f2:"Cash Out",last:"All transactions",
  none:"Nothing found",no:"No transactions yet",
  amt:"Amount",next:"Next",back:"Back",cancel:"Cancel",confirm:"Confirm",pin:"Enter your PIN",
  pick:"Please choose one",badn:"Invalid number (01XXXXXXXXX)",badt:"Enter the details",bada:"Enter an amount",low:"Insufficient balance",wp:"Wrong PIN, try again",
  done:"Successful!",trx:"Transaction ID",ok:"OK",sendto:"To",svc:"Service",amtl:"Amount",feel:"Fee",total:"Total",
  lp:"Enter your 6-digit PIN",tag:"Your money, your control",
  o1:"5% cashback on your first Add Money",o2:"৳10 bonus on recharge",o3:"Invite a friend, get ৳50",g1:"Claim now",g2:"Recharge",g3:"Invite",
  n1:"Cashback on Add Money is live!",n2:"Special recharge bonus",n3:"৳50 for inviting a friend",new:"New",
  scn:"Place the QR in the frame, or enter the number",myfav:"Favorite numbers",card2:"Add a card",bank2:"Bank account",cd2:"For Add Money and payments",
  lang:"Language: বাংলা",out:"Logout",acct:"My account",chk:"Check for updates",noup:"Update server is not set",latest:"You are on the latest version",upfail:"No internet or check failed",upn:"New update available",upb:"Update now",upl:"Later",ver:"Version",num:"Mobile number",addn:"Add"}
};

/* ---------- ব্যাকএন্ড সেটিংস (README দেখুন) ---------- */
const SUPA_URL = ""; /* যেমন https://abcdxyz.supabase.co */
const SUPA_KEY = ""; /* Supabase এর anon / publishable key */
const EMAIL_DOMAIN = "gmail.com"; /* শুধু লগইনের ভেতরের কাজে লাগে, কাউকে ইমেইল যায় না */
const CONFIGURED = !!(SUPA_URL && SUPA_KEY);
const TEST_MODE = true; /* আসল টাকার ব্যবস্থা (লাইসেন্সসহ) চালু করলে false করুন, README দেখুন */
const WIRED = ["send", "pay", "cash", "add", "rech", "bill", "bank", "insur", "edu"];
const SVC = ["rech", "bill", "bank", "insur", "edu"];

Object.assign(T.bn, {recv:"মানি রিসিভ", cashin:"গ্রাহক ক্যাশ আউট", agent:"এজেন্ট", nouser:"এই নম্বরে কোনো FuNPaY অ্যাকাউন্ট নেই", noag:"এটি এজেন্ট নম্বর নয়", self:"নিজের নম্বরে হবে না",
 net:"ইন্টারনেট নেই, আবার চেষ্টা করুন", errg:"কিছু ভুল হয়েছে", exists:"এই নম্বরে আগেই অ্যাকাউন্ট খোলা আছে", soon:"এই সার্ভিস শীঘ্রই আসছে", myqr:"আমার QR", scanqr:"QR স্ক্যান করুন",
 scanh:"অন্যের QR স্ক্যান করে টাকা পাঠান বা এজেন্টের কাছে ক্যাশ আউট করুন", qrhint:"এই QR দেখালেই যে কেউ আপনাকে টাকা পাঠাতে পারবে", noscan:"স্ক্যানার শুধু অ্যাপের ভেতরে চলে", badqr:"এটি FuNPaY এর QR নয়",
 got:"পেয়েছেন", newacc:"নতুন অ্যাকাউন্ট", haveacc:"অ্যাকাউন্ট আছে? লগইন করুন", other:"অন্য নম্বর", pin4:"৬ ডিজিট PIN", reg:"অ্যাকাউন্ট খুলুন", setup:"ব্যাকএন্ড সেট করা নেই। README দেখে SUPA_URL আর SUPA_KEY বসান।",
 rcv:"প্রাপক", ep:"আপনার মোবাইল নম্বর", cont:"চালিয়ে যান", cobad:"ক্যাশ আউট সর্বনিম্ন ৫০ টাকা", addmax:"একবারে সর্বোচ্চ ৫,০০০ টাকা", badpin:"PIN ৬ ডিজিটের হতে হবে", back2:"স্বাগতম, আবার",
 conf1:"Supabase এ Confirm email বন্ধ করুন", lp:"আপনার ৬ ডিজিট PIN দিন", dm:"টেস্ট ভার্সন: এই ব্যালেন্স আসল টাকা নয়", cashw:"এটি টেস্ট ব্যালেন্স, আসল টাকা নয়। এজেন্টের কাছ থেকে আসল টাকা নেবেন না।", bioT:"ফিঙ্গারপ্রিন্ট / স্ক্রিন লক দিয়ে আনলক", bioD:"পরের বার PIN-এর বদলে আঙুলের ছাপ বা ফোনের লক দিয়ে অ্যাপ খুলতে পারবেন। PIN-ও কাজ করবে।", bioY:"চালু করুন", bioR:"FuNPaY আনলক করুন", bioOn:"আনলক চালু হয়েছে", on:"চালু", off:"বন্ধ", myqrs:"নিজের QR", rcvd:"প্রাপক"});
Object.assign(T.en, {recv:"Money Received", cashin:"Customer Cash Out", agent:"Agent", nouser:"No FuNPaY account with this number", noag:"This is not an agent number", self:"You can't use your own number",
 net:"No internet, try again", errg:"Something went wrong", exists:"An account already exists for this number", soon:"This service is coming soon", myqr:"My QR", scanqr:"Scan QR",
 scanh:"Scan someone's QR to send money, or cash out at an agent", qrhint:"Show this QR so anyone can send you money", noscan:"The scanner only works inside the app", badqr:"This is not a FuNPaY QR",
 got:"received", newacc:"New account", haveacc:"Have an account? Log in", other:"Other number", pin4:"6-digit PIN", reg:"Create account", setup:"Backend is not set up. Follow the README and fill in SUPA_URL and SUPA_KEY.",
 rcv:"Recipient", ep:"Your mobile number", cont:"Continue", cobad:"Minimum cash out is ৳50", addmax:"Max ৳5,000 at a time", badpin:"PIN must be 4 digits", back2:"Welcome back",
 conf1:"Turn off Confirm email in Supabase", lp:"Enter your 6-digit PIN", dm:"Test version: this balance is not real money", cashw:"This is a test balance, not real money. Do not take real cash from an agent.", bioT:"Unlock with fingerprint / screen lock", bioD:"Next time open the app with your fingerprint or phone lock instead of the PIN. The PIN still works.", bioY:"Turn on", bioR:"Unlock FuNPaY", bioOn:"Unlock enabled", on:"On", off:"Off", myqrs:"Your QR", rcvd:"Recipient"});

const BG = ["linear-gradient(135deg,#1d4ed8,#38bdf8)", "linear-gradient(135deg,#0f2f9e,#3b82f6)", "linear-gradient(135deg,#f97316,#fbbf24)"];
const S = {lang:"bn", auth:false, busy:false, view:"", phone:"", name:"", me:null, uid:"", tok:"", rt:"", bal:0, tx:[], seen:0, tab:"home", seg:"t", q:"", fl:0, more:false, pin:"", sheet:null, fx:false, hl:null, upd:null};
try {
  const d = JSON.parse(localStorage.getItem("fp2") || "{}");
  ["lang", "phone", "name"].forEach(k => { if (d[k] !== undefined) S[k] = d[k]; });
} catch (e) {}
const save = () => { try { localStorage.setItem("fp2", JSON.stringify({lang:S.lang, phone:S.phone, name:S.name})); } catch (e) {} };

/* ---------- নেটিভ ফিচার (Capacitor প্লাগইন থাকলে কাজ করে, না থাকলে ব্রাউজারেও চলে) ---------- */
const APP_VERSION = "1.2.0"; /* GitHub বিল্ডের সময় নিজে বদলে যায় */
const OTA_URL = ""; /* GitHub বিল্ডের সময় নিজে বসে যায় */
const cap = () => (window.Capacitor && window.Capacitor.Plugins) || {};
try { const U = cap().CapacitorUpdater; if (U) U.notifyAppReady(); } catch (e) {}
function hap(s) { try { const H = cap().Haptics; if (H) H.impact({style: s || "LIGHT"}); else if (navigator.vibrate) navigator.vibrate(s === "HEAVY" ? 30 : 8); } catch (e) {} }
function toast(m) { const e = document.createElement("div"); e.className = "toast"; e.textContent = m; document.body.appendChild(e); setTimeout(() => e.remove(), 2300); }
const newer = (a, b) => { const x = String(a).split(".").map(Number), y = String(b).split(".").map(Number); for (let i = 0; i < 3; i++) { if ((x[i] || 0) > (y[i] || 0)) return true; if ((x[i] || 0) < (y[i] || 0)) return false; } return false; };
async function checkUpdate(manual) {
  if (manual === true) hap();
  if (!OTA_URL) { if (manual === true) toast(t("noup")); return; }
  try {
    const r = await fetch(OTA_URL + "?t=" + Date.now(), {cache: "no-store"}), j = await r.json();
    if (newer(j.version, APP_VERSION)) { if ((S.sheet || S.upd) && manual !== true) return; S.sheet = null; S.upd = Object.assign({fresh: true}, j); renderSheet(); }
    else if (manual === true) toast(t("latest"));
  } catch (e) { if (manual === true) toast(t("upfail")); }
}
async function applyUpdate() {
  const U = cap().CapacitorUpdater, u = S.upd, b = document.querySelector("#sheet .btn");
  if (!U || !u) { toast(t("noscan")); return; }
  if (b) b.classList.add("ld");
  try { const bd = await U.download({url: u.url, version: u.version}); await U.set({id: bd.id}); }
  catch (e) { console.log(e); if (b) b.classList.remove("ld"); toast(t("upfail")); }
}
const t = (k) => T[S.lang][k] || k;
const money = (n) => "৳ " + Number(n).toLocaleString("en-US", {maximumFractionDigits: 2});
const tile = (k) => `<div class="ic">${ic(k)}</div>`;
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[c]));
const first = (s) => esc(Array.from(String(s || "F"))[0].toUpperCase());
const fmt = (iso) => { const n = new Date(iso), p = (x) => String(x).padStart(2, "0"); return `${p(n.getDate())}/${p(n.getMonth() + 1)} ${p(n.getHours())}:${p(n.getMinutes())}`; };

/* ---------- সার্ভারের সাথে যোগাযোগ ---------- */
async function api(path, o = {}) {
  const h = {apikey: SUPA_KEY, "Content-Type": "application/json"};
  if (o.auth !== false && S.tok) h.Authorization = "Bearer " + S.tok;
  let r;
  try { r = await fetch(SUPA_URL + path, {method: o.m || "GET", headers: h, body: o.b ? JSON.stringify(o.b) : undefined}); }
  catch (e) { throw new Error("NET"); }
  let j = null; try { j = await r.json(); } catch (e) {}
  if (r.status === 401 && o.auth !== false && S.rt && !o.retry) { try { await refreshTok(); return api(path, Object.assign({}, o, {retry: true})); } catch (e) { lock(true); throw new Error("NET"); } }
  if (!r.ok) throw new Error((j && (j.message || j.msg || j.error_description || j.error)) || "ERR");
  return j;
}
const em = (p) => p + "@" + EMAIL_DOMAIN;
const pw = (k) => k + "@FuNPaY";
function setSess(j) { S.tok = j.access_token; S.rt = j.refresh_token; S.uid = j.user.id; }
async function signIn(phone, pin) { setSess(await api("/auth/v1/token?grant_type=password", {m: "POST", auth: false, b: {email: em(phone), password: pw(pin)}})); }
async function signUp(name, phone, pin) {
  const j = await api("/auth/v1/signup", {m: "POST", auth: false, b: {email: em(phone), password: pw(pin), data: {name, phone}}});
  if (!j.access_token) throw new Error("CONFIRM");
  setSess(j);
}
async function refreshTok() { setSess(await api("/auth/v1/token?grant_type=refresh_token", {m: "POST", auth: false, b: {refresh_token: S.rt}})); }
function errMsg(e) {
  const m = (e && e.message) || "";
  const k = {LOW:"low", NOUSER:"nouser", NOAGENT:"noag", SELF:"self", NET:"net", BADAMT:"bada", CONFIRM:"conf1"}[m];
  if (k) return t(k);
  if (/invalid login/i.test(m)) return t("wp");
  if (/already registered|already been registered|saving new user/i.test(m)) return t("exists");
  console.log(m);
  return t("errg") + " (" + m.slice(0, 70) + ")";
}
async function loadAll(isFirst) {
  const [p, x] = await Promise.all([api("/rest/v1/profiles?select=*&id=eq." + S.uid), api("/rest/v1/transactions?select=*&order=id.desc&limit=60")]);
  if (!p.length) throw new Error("ERR");
  const inc = x.filter(r => r.id > S.seen && r.to_id === S.uid && r.from_id && r.type !== "add");
  S.me = p[0]; S.bal = Number(p[0].balance); S.name = p[0].name; S.tx = x;
  if (x.length) S.seen = Math.max(S.seen, x[0].id);
  if (!isFirst && inc.length) {
    const sum = inc.reduce((a, r) => a + Number(r.amount) + Number(r.comm), 0);
    hap("MEDIUM"); toast("+" + money(sum) + " " + t("got") + " · " + (inc[0].from_name || inc[0].from_phone));
  }
}
let pollT;
function startPoll() { clearInterval(pollT); pollT = setInterval(() => { if (S.auth && !document.hidden && !S.busy) refresh(); }, 7000); }
async function refresh() {
  const b = S.bal, s = S.seen;
  try { await loadAll(false); } catch (e) { return; }
  if ((b !== S.bal || s !== S.seen) && !S.sheet && !S.upd && !(document.activeElement && document.activeElement.tagName === "INPUT")) render();
}
async function enter() {
  const lp = S.lp; S.lp = ""; S.seen = 0;
  await loadAll(true);
  S.auth = true; S.fx = true; S.pin = ""; S.tab = "home"; S.view = "";
  render(); startPoll(); setTimeout(checkUpdate, 1500);
  if (lp) setTimeout(() => offerBio(lp), 1400);
}
function lock(auto) {
  clearInterval(pollT);
  S.auth = false; S.tok = ""; S.rt = ""; S.me = null; S.tx = []; S.sheet = null; S.upd = null; S.pin = ""; S.tab = "home";
  renderSheet(); render();
  if (auto === true && bioOn()) setTimeout(bioUnlock, 350);
}

/* ---------- লেনদেনের তালিকা ---------- */
function tv(x) {
  const out = x.from_id === S.uid, amt = out ? Number(x.amount) + Number(x.fee) : Number(x.amount) + Number(x.comm);
  let key = x.type, who = "";
  if (x.type === "send" || x.type === "pay") key = out ? x.type : "recv";
  else if (x.type === "cash") key = out ? "cash" : "cashin";
  if (SVC.includes(x.type)) who = (x.ch ? t(x.ch) + " · " : "") + (x.ref || "");
  else if (x.type === "add") who = "FuNPaY";
  else who = out ? (x.to_name ? x.to_name + " · " : "") + x.to_phone : (x.from_name ? x.from_name + " · " : "") + x.from_phone;
  return {key, who, out, amt, icon: x.type === "add" ? "add" : (!out ? "cash" : x.type)};
}
function row(x) {
  const v = tv(x);
  return `<div class="tr${S.hl === x.trx ? " pop" : ""}">${tile(v.icon)}<div class="m"><b>${t(v.key)}</b><span>${esc(v.who)}</span><small>TrxID: ${esc(x.trx)}</small></div><div class="r"><b class="${v.out ? "mi" : "pl"}">${v.out ? "-" : "+"}${money(v.amt)}</b><small>${fmt(x.created_at)}</small></div></div>`;
}
function list() {
  const q = S.q.toLowerCase();
  const r = S.tx.filter(x => { const v = tv(x); return (!q || (x.trx + v.who).toLowerCase().includes(q)) && (S.fl === 0 || (S.fl === 1 ? !v.out : v.out)); });
  return r.length ? r.map(row).join("") : `<p class="em">${t(S.tx.length ? "none" : "no")}</p>`;
}
function recents() {
  const m = new Map();
  S.tx.forEach(x => {
    if (!["send", "pay", "cash"].includes(x.type)) return;
    const out = x.from_id === S.uid, ph = out ? x.to_phone : x.from_phone, nm = out ? x.to_name : x.from_name;
    if (ph && !m.has(ph)) m.set(ph, nm || ph);
  });
  return [...m].slice(0, 5);
}
function deco(i) {
  let s = '<svg class="d" viewBox="0 0 100 100" preserveAspectRatio="xMaxYMid slice"><circle cx="85" cy="25" r="48" fill="#fff" opacity=".14"/><circle cx="95" cy="90" r="34" fill="#fff" opacity=".1"/>';
  if (i === 0) s += '<circle cx="62" cy="52" r="24" fill="#fbbf24"/><circle cx="62" cy="52" r="18" fill="none" stroke="#b45309" stroke-width="2.5"/><text x="62" y="62" font-size="26" font-weight="900" fill="#b45309" text-anchor="middle">৳</text>';
  if (i === 1) s += '<rect x="46" y="22" width="34" height="58" rx="7" fill="#fff"/><rect x="51" y="30" width="24" height="34" rx="3" fill="#3b82f6"/><circle cx="63" cy="72" r="3" fill="#1d4ed8"/>';
  if (i === 2) s += '<rect x="42" y="42" width="40" height="34" rx="5" fill="#fff"/><rect x="38" y="34" width="48" height="12" rx="4" fill="#1d4ed8"/><path d="M62 34v42" stroke="#fbbf24" stroke-width="5"/><path d="M62 34c-8-14-20-4-8 0M62 34c8-14 20-4 8 0" fill="none" stroke="#fbbf24" stroke-width="4"/>';
  return s + "</svg>";
}
const banner = (i, w) => `<div class="bn${w ? " w" : ""}" style="background:${BG[i]}">${deco(i)}<b>${t("o" + (i + 1))}</b><span>${t("g" + (i + 1))}</span></div>`;

const agBadge = () => (S.me && S.me.role === "agent") ? `<em class="ag">${t("agent")}</em>` : "";
function hero() {
  const nm = S.me && S.me.name ? esc(S.me.name) : t("nm");
  return `<div class="hero"><div class="top"><div class="av" onclick="go('mine')">${first(S.me && S.me.name)}</div>
  <div class="who"><small>${t("hi")}, ${nm} ${agBadge()}</small><button class="bp" onclick="peek(this)"><u>৳</u><span>${t("showb")}</span></button></div>
  <button class="hb" onclick="S.seg='t';go('inbox')">${ic("srch")}</button>
  <button class="hb" onclick="S.seg='n';go('inbox')">${ic("bell")}<i></i></button></div></div>`;
}
function pageHome() {
  const items = SV.slice(0, S.more ? 12 : 8).map(a => `<button class="it" onclick="openS('${a.id}')">${tile(a.id)}<span>${t(a.id)}</span></button>`).join("");
  const rc = recents();
  return hero() + `<div class="card sv"><div class="grid">${items}</div>
  <button class="more" onclick="S.more=!S.more;render()">${t(S.more ? "less" : "more")}${ic(S.more ? "cu" : "cd")}</button></div>
  <div class="qb" onclick="openQR('my')"><div class="qi">${ic("qr")}</div><div><b>${t("myqr")}</b><small>${t("qrhint")}</small></div>${ic("ch")}</div>
  <div class="ban" onscroll="dot(this)" ontouchstart="this.dataset.t=Date.now()">${banner(0)}${banner(1)}${banner(2)}</div><div class="dts"><i class="on"></i><i></i><i></i></div>
  ${rc.length ? `<div class="ttl"><span>${t("fav")}</span></div><div class="fv">${rc.map(f => `<div class="fc" onclick="openS('send','${esc(f[0])}')"><u>${first(f[1])}</u>${esc(f[1])}</div>`).join("")}</div>` : ""}
  <div class="ttl"><span>${t("rec")}</span><a onclick="S.seg='t';go('inbox')">${t("all")}</a></div>
  ${S.tx.length ? S.tx.slice(0, 3).map(row).join("") : `<p class="em">${t("no")}</p>`}`;
}
function pageInbox() {
  const head = `<div class="page">${t("inbox")}</div><div class="seg"><button class="${S.seg === "t" ? "on" : ""}" onclick="S.seg='t';render()">${t("txs")}</button><button class="${S.seg === "n" ? "on" : ""}" onclick="S.seg='n';render()">${t("nt")} (3)</button></div>`;
  if (S.seg === "n") return head + [0, 1, 2].map(i => `<div class="nt">${banner(i, true).replace(" w", "")}<p>${t("n" + (i + 1))}</p><small>${t("new")}</small></div>`).join("");
  return head + `<div class="srch"><div>${ic("srch")}<input placeholder="${t("sq")}" value="${esc(S.q)}" oninput="S.q=this.value;document.getElementById('lst').innerHTML=list()"></div><button onclick="S.fl=(S.fl+1)%3;render()">${t("flt")}: ${t("f" + S.fl)}</button></div><div class="note">${t("last")}</div><div id="lst">${list()}</div>`;
}
const chev = () => ic("ch").replace('class="i"', 'class="i c"');
function pageMine() {
  const m = S.me || {};
  return `<div class="hero" style="padding-bottom:64px"><div class="top"><div class="who" style="font-size:17px;font-weight:800">${t("acct")}</div></div></div>
  <div class="card pf"><div class="big">${first(m.name)}</div><h3>${esc(m.name)}</h3><p>${esc(m.phone)}</p>${agBadge()}
  <div class="bal2"><small>${t("showb")}</small><b>${money(S.bal)}</b></div></div>
  <div class="card lst"><button class="rw" onclick="openQR('my')">${ic("qr")}<span>${t("myqr")}</span>${chev()}</button>
  <button class="rw" onclick="openQR('scan')">${ic("srch")}<span>${t("scanqr")}</span>${chev()}</button>
  <button class="rw" onclick="toggleBio()">${ic("fp")}<span>${t("bioT")}</span><small style="color:var(--mu)">${bioOn() ? t("on") : t("off")}</small></button>
  <button class="rw" onclick="checkUpdate(true)">${ic("up")}<span>${t("chk")}</span><small style="color:var(--mu)">v${APP_VERSION}</small></button>
  <button class="rw" onclick="lang()">${ic("lang")}<span>${t("lang")}</span>${chev()}</button>
  <button class="rw" onclick="lock()">${ic("out")}<span>${t("out")}</span>${chev()}</button></div>
  ${TEST_MODE ? `<p class="em" style="padding-top:16px">${t("dm")}</p>` : ""}`;
}

/* ---------- লগইন / অ্যাকাউন্ট খোলা ---------- */
function loginHtml() {
  const logo = `<div class="lgb">F</div><h1>FuNPaY</h1>`;
  if (!CONFIGURED) return `<div class="login">${logo}<p style="padding:0 10px">${t("setup")}</p></div>`;
  if (S.view === "reg") return `<div class="login">${logo}<p>${t("newacc")}</p><div class="lf"><input id="rn" maxlength="20" placeholder="${t("nm")}"><input id="rp" inputmode="numeric" maxlength="11" placeholder="01XXXXXXXXX"><input id="rk" type="password" inputmode="numeric" maxlength="6" placeholder="${t("pin4")}"><div class="le"></div><button class="lb2" onclick="doReg()">${t("reg")}</button></div><button class="chip" onclick="S.view='';render()">${t("haveacc")}</button></div>`;
  if (!S.phone) return `<div class="login">${logo}<p>${t("tag")}</p><div class="lf"><input id="lp" inputmode="numeric" maxlength="11" placeholder="${t("ep")}"><div class="le"></div><button class="lb2" onclick="setPhone()">${t("cont")}</button></div><button class="chip" onclick="S.view='reg';render()">${t("newacc")}</button></div>`;
  const dots = [0, 1, 2, 3, 4, 5].map(i => `<span class="dt${i < S.pin.length ? " on" : ""}"></span>`).join("");
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button onclick="key('${n}')">${n}</button>`).join("") + (bioOn() ? `<button onclick="bioUnlock()">${ic("fp")}</button>` : `<button class="z"></button>`) + `<button onclick="key('0')">0</button><button onclick="key('b')"><svg class="i" viewBox="0 0 24 24"><path d="M21 5H9l-6 7 6 7h12zM15 9l-4 6M11 9l4 6"/></svg></button>`;
  return `<div class="login">${logo}<p>${esc(S.name || t("back2"))}</p><p style="margin-top:2px;opacity:.8">${esc(S.phone)}</p><p style="font-weight:600;margin-top:14px;opacity:1">${t("lp")}</p><div class="dots">${dots}</div><div class="le"></div><div class="kp">${keys}</div><div class="lrow"><button class="chip" onclick="S.phone='';S.name='';S.pin='';render()">${t("other")}</button><button class="chip" onclick="S.view='reg';render()">${t("newacc")}</button><button class="chip" onclick="lang()">${t("lang")}</button></div>${TEST_MODE ? `<p style="font-size:12px;opacity:.75">${t("dm")}</p>` : ""}</div>`;
}
function setPhone() {
  const v = document.getElementById("lp").value.trim();
  if (!/^01\d{9}$/.test(v)) { document.querySelector(".le").textContent = t("badn"); hap("HEAVY"); return; }
  S.phone = v; S.name = ""; render();
}
async function doReg() {
  if (S.busy) return;
  const n = document.getElementById("rn").value.trim(), p = document.getElementById("rp").value.trim(), k = document.getElementById("rk").value.trim(), le = document.querySelector(".le");
  const bad = !n ? t("badt") : !/^01\d{9}$/.test(p) ? t("badn") : !/^\d{6}$/.test(k) ? t("badpin") : "";
  if (bad) { le.textContent = bad; hap("HEAVY"); return; }
  S.busy = true; le.textContent = ""; document.querySelector(".lb2").classList.add("ld");
  try { await signUp(n, p, k); S.phone = p; S.name = n; S.lp = k; await enter(); }
  catch (e) { const l2 = document.querySelector(".le"); if (l2) l2.textContent = errMsg(e); const b2 = document.querySelector(".lb2"); if (b2) b2.classList.remove("ld"); hap("HEAVY"); }
  S.busy = false;
}
async function key(d) {
  if (S.busy) return;
  hap();
  if (d === "b") S.pin = S.pin.slice(0, -1); else if (S.pin.length < 6) S.pin += d;
  document.querySelectorAll(".dt").forEach((x, i) => x.classList.toggle("on", i < S.pin.length));
  if (S.pin.length < 6) return;
  const ds = document.querySelector(".dots"), le = document.querySelector(".le"), pin = S.pin;
  S.busy = true; le.textContent = "";
  try { await signIn(S.phone, pin); S.lp = pin; await enter(); }
  catch (e) {
    hap("HEAVY"); S.pin = ""; ds.classList.add("shake"); le.textContent = errMsg(e);
    setTimeout(() => { ds.classList.remove("shake"); document.querySelectorAll(".dt").forEach(x => x.classList.remove("on")); }, 450);
  }
  S.busy = false;
}

function render() {
  save();
  const fx = S.fx;
  let h = "";
  if (!S.auth) h = loginHtml();
  else {
    const pg = S.tab === "home" ? pageHome() : S.tab === "inbox" ? pageInbox() : pageMine();
    h = `<div class="pg${fx ? " in" : ""}">${pg}</div>`;
    const nv = (k, lbl) => `<button class="${S.tab === k ? "on" : ""}" onclick="go('${k}')"><span class="ni">${ic(k)}${k === "inbox" ? '<span class="bg">3</span>' : ""}</span>${lbl}</button>`;
    h += `<nav class="${fx ? "fx" : ""}">${nv("home", t("home"))}${nv("mine", t("mine"))}<button class="qrb" onclick="openQR('my')">${ic("qr")}</button>${nv("inbox", t("inbox"))}</nav>`;
  }
  document.getElementById("app").innerHTML = h;
  S.fx = false; S.hl = null;
}
const go = (k) => {
  if (S.tab === k) { render(); window.scrollTo({top: 0, behavior: "smooth"}); return; }
  hap(); S.tab = k; S.fx = true; render(); window.scrollTo(0, 0);
};
const lang = () => { hap(); S.lang = S.lang === "bn" ? "en" : "bn"; render(); };
let peekTimer;
function peek(b) {
  hap();
  const s = b.querySelector("span"), to = S.bal, t0 = performance.now();
  clearTimeout(peekTimer);
  const step = (n) => { const p = Math.min(1, (n - t0) / 650), e = 1 - Math.pow(1 - p, 3); s.textContent = money(Math.round(to * e * 100) / 100); if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
  peekTimer = setTimeout(() => { if (s.isConnected) s.textContent = t("showb"); }, 4000);
}

function dot(e) { const i = Math.round(e.scrollLeft / (e.scrollWidth / 3)); document.querySelectorAll(".dts i").forEach((d, j) => d.className = j === i ? "on" : ""); }
/* ---------- লেনদেনের ফর্ম: ধাপ ১ = তথ্য, ধাপ ২ = যাচাই + PIN ---------- */
function openS(id, pre) {
  if (!WIRED.includes(id)) { hap(); toast(t("soon")); return; }
  hap(); S.sheet = {id, step:1, v:pre || "", ch:"", a:"", err:"", done:false, fresh:true, fxs:false, rn:"", busy:false}; renderSheet();
}
function mount() { let e = document.getElementById("sheet"); if (!e) { e = document.createElement("div"); e.id = "sheet"; document.body.appendChild(e); } return e; }
function renderSheet() {
  mount().innerHTML = S.upd ? updHtml() : S.sheet ? (S.sheet.id === "qrs" ? qrHtml() : S.sheet.id === "bio" ? bioHtml() : sheetHtml()) : "";
  if (S.sheet) { S.sheet.fresh = false; S.sheet.fxs = false; }
  if (S.upd) S.upd.fresh = false;
  if (S.sheet && !S.sheet.done && S.sheet.step === 2 && S.sheet.id !== "qrs" && S.sheet.id !== "bio") { const f = document.getElementById("f3"); if (f) setTimeout(() => f.focus(), 80); }
}
function closeS() {
  const sh = document.querySelector("#sheet .sh");
  if (!sh || sh.classList.contains("out")) return;
  sh.classList.remove("re"); sh.classList.add("out");
  setTimeout(() => {
    const done = S.sheet && S.sheet.done ? S.sheet.trx : null;
    S.sheet = null; S.upd = null; renderSheet();
    if (done) { S.hl = done; render(); refresh(); }
  }, 230);
}
const sync = () => { const a = document.getElementById("f1"), b = document.getElementById("f2"); if (a) S.sheet.v = a.value.trim(); if (b) S.sheet.a = b.value; };
function pick(c) { hap(); sync(); S.sheet.ch = c; S.sheet.err = ""; renderSheet(); }
function shakeBox() { const b = document.querySelector("#sheet .box"); if (!b) return; b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake"); hap("HEAVY"); }
const setBusy = (on) => document.querySelectorAll("#sheet .btn:not(.l)").forEach(b => b.classList.toggle("ld", on));
const wrapSheet = (s, inner) => `<div class="sh${s.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div><div class="stp${s.fxs ? " go" : ""}">${inner}</div></div></div>`;
const feeOf = (c, amt) => Math.round((c.fee || 0) * amt * 100) / 100;
const tickSvg = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
function sheetHtml() {
  const s = S.sheet, c = cfg(s.id), d = c.d || -1;
  if (s.done) {
    const cols = ["#fbbf24", "#3b82f6", "#12a15b", "#e5324b", "#a78bfa"];
    const cf = Array.from({length: 18}, (_, i) => { const a = Math.random() * 6.283, r = 80 + Math.random() * 90; return `<i class="cf" style="--x:${(Math.cos(a) * r).toFixed(0)}px;--y:${(Math.sin(a) * r - 30).toFixed(0)}px;background:${cols[i % 5]};animation-delay:${(Math.random() * .2).toFixed(2)}s"></i>`; }).join("");
    return wrapSheet(s, `<div class="ok"><div class="tick d">${tickSvg}</div>${cf}<h2>${t("done")}</h2><div class="amt">${money(s.total)}</div><small>${t(s.id)} · ${t("trx")}: ${esc(s.trx)}</small><button class="btn" onclick="closeS()">${t("ok")}</button></div>`);
  }
  const head = `<div class="bt">${tile(s.id)}<b>${t(s.id)}</b></div>`;
  if (s.step === 2) {
    const amt = parseFloat(s.a), fee = feeOf(c, amt), tot = amt + (d < 0 ? fee : 0);
    const who = s.rn ? `${esc(s.rn)} · ${esc(s.v)}` : esc(s.v);
    return wrapSheet(s, head + `<div class="sm">${s.v ? `<div><span>${t(s.id === "cash" ? "ag" : "sendto")}</span><b>${who}</b></div>` : ""}${s.ch ? `<div><span>${t(s.id)}</span><b>${t(s.ch)}</b></div>` : ""}<div><span>${t("amtl")}</span><b>${money(amt)}</b></div>${fee ? `<div><span>${t("feel")}</span><b>${money(fee)}</b></div>` : ""}<div><span>${t("total")}</span><b>${money(tot)}</b></div></div>
    ${TEST_MODE && s.id === "cash" ? `<p class="tw">${t("cashw")}</p>` : ""}<div class="lb">${t("pin")}</div><input id="f3" type="password" inputmode="numeric" maxlength="6"><div class="err">${esc(s.err)}</div>
    <button class="btn" onclick="confirmTx()">${t("confirm")}</button><button class="btn l" onclick="backStep()">${t("back")}</button>`);
  }
  return wrapSheet(s, head
    + (c.ch ? `<div class="chs">${c.ch.map(x => `<button class="${s.ch === x ? "on" : ""}" onclick="pick('${x}')">${t(x)}</button>`).join("")}</div>` : "")
    + (c.k ? `<div class="lb">${t(c.f)}</div><input id="f1" ${c.k === "n" ? 'inputmode="numeric" maxlength="11"' : ""} value="${esc(s.v)}">` : "")
    + `<div class="lb">${t("amt")}</div><input id="f2" inputmode="decimal" placeholder="৳ 0" value="${esc(s.a)}" oninput="this.value=this.value.replace(/[^0-9.]/g,'')"><div class="err">${esc(s.err)}</div>
    <button class="btn" onclick="nextStep()">${t("next")}</button><button class="btn l" onclick="closeS()">${t("cancel")}</button>`);
}
function updHtml() {
  const u = S.upd;
  return `<div class="sh${u.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div><div class="ok"><div class="tick">${ic("up")}</div><h2>${t("upn")}</h2><div class="amt" style="font-size:22px">v${esc(u.version)}</div><small>${esc(u.notes || "")}</small><button class="btn" onclick="applyUpdate()">${t("upb")}</button><button class="btn l" onclick="closeS()">${t("upl")}</button></div></div></div>`;
}
async function nextStep() {
  sync();
  const s = S.sheet, c = cfg(s.id), d = c.d || -1, amt = parseFloat(s.a);
  if (s.busy) return;
  let e = "";
  if (c.ch && !s.ch) e = t("pick");
  else if (c.k === "n" && !/^01\d{9}$/.test(s.v)) e = t("badn");
  else if (c.k === "t" && !s.v) e = t("badt");
  else if (!(amt > 0)) e = t("bada");
  else if (["send", "pay", "cash"].includes(s.id) && s.v === S.me.phone) e = t("self");
  else if (s.id === "cash" && amt < 50) e = t("cobad");
  else if (s.id === "add" && amt > 5000) e = t("addmax");
  else if (d < 0 && amt + feeOf(c, amt) > S.bal) e = t("low");
  if (!e && ["send", "pay", "cash"].includes(s.id)) {
    s.busy = true; setBusy(true);
    try {
      const r = await api("/rest/v1/rpc/lookup_phone", {m: "POST", b: {p_phone: s.v}});
      if (!r.length) e = t("nouser"); else if (s.id === "cash" && r[0].prole !== "agent") e = t("noag"); else s.rn = r[0].pname || "";
    } catch (x) { e = errMsg(x); }
    s.busy = false;
    if (S.sheet !== s) return;
  }
  s.err = e;
  if (!e) { s.step = 2; s.fxs = true; hap(); }
  renderSheet();
  if (e) shakeBox();
}
function backStep() { hap(); S.sheet.step = 1; S.sheet.err = ""; S.sheet.fxs = true; renderSheet(); }
async function confirmTx() {
  const s = S.sheet; if (!s || s.busy) return;
  const c = cfg(s.id), d = c.d || -1, amt = parseFloat(s.a), fee = feeOf(c, amt);
  const pin = (document.getElementById("f3") || {}).value || "";
  const fail = (m) => { s.busy = false; if (S.sheet !== s) return; s.err = m; renderSheet(); shakeBox(); };
  if (!/^\d{6}$/.test(pin)) return fail(t("wp"));
  s.busy = true; setBusy(true);
  try { await signIn(S.me.phone, pin); } catch (e) { return fail(errMsg(e)); }
  const R = (fn, b) => api("/rest/v1/rpc/" + fn, {m: "POST", b});
  let trx;
  try {
    if (s.id === "send" || s.id === "pay") trx = await R("send_money", {p_to: s.v, p_amount: amt, p_type: s.id});
    else if (s.id === "cash") trx = await R("cash_out", {p_agent: s.v, p_amount: amt});
    else if (s.id === "add") trx = await R("add_test_money", {p_amount: amt});
    else trx = await R("pay_service", {p_type: s.id, p_ref: s.v, p_amount: amt, p_ch: s.ch});
  } catch (e) { return fail(errMsg(e)); }
  s.busy = false;
  S.sheet = {id: s.id, done: true, total: d < 0 ? amt + fee : amt, trx, fresh: false, fxs: true};
  hap("MEDIUM"); renderSheet(); refresh();
}
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" || !S.sheet || S.sheet.done || S.sheet.id === "qrs" || S.sheet.id === "bio") return;
  S.sheet.step === 2 ? confirmTx() : nextStep();
});

/* ---------- নিজের QR ও স্ক্যান ---------- */
function qrSvg(text) {
  if (typeof qrcode === "undefined") return "";
  const q = qrcode(0, "M"); q.addData(text); q.make();
  const n = q.getModuleCount(); let d = "";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${c} ${r}h1v1h-1z`;
  return `<svg class="qrs" viewBox="-2 -2 ${n + 4} ${n + 4}" shape-rendering="crispEdges"><rect x="-2" y="-2" width="${n + 4}" height="${n + 4}" fill="#fff"/><path d="${d}" fill="#14182b"/></svg>`;
}
function openQR(tab) { hap(); S.sheet = {id: "qrs", tab: tab || "my", fresh: true, fxs: false}; renderSheet(); }
function qTab(tb) { hap(); S.sheet.tab = tb; S.sheet.fxs = true; renderSheet(); }
function qrHtml() {
  const s = S.sheet, m = S.me || {};
  const tabs = `<div class="seg" style="margin:0 0 14px;padding:0"><button class="${s.tab === "my" ? "on" : ""}" onclick="qTab('my')">${t("myqr")}</button><button class="${s.tab === "scan" ? "on" : ""}" onclick="qTab('scan')">${t("scanqr")}</button></div>`;
  const body = s.tab === "my"
    ? `<div class="qcard"><div class="qav">${first(m.name)}</div><b>${esc(m.name)}</b><span>${esc(m.phone)} ${agBadge()}</span><div class="qwrap">${qrSvg("funpay:" + m.phone)}</div><small>${t("qrhint")}</small></div>`
    : `<div class="scan"><b></b></div><p style="text-align:center;color:var(--mu);font-size:13px;margin:10px 6px 4px">${t("scanh")}</p><button class="btn" onclick="scanQR()">${t("scanqr")}</button>`;
  return wrapSheet(s, tabs + body + `<button class="btn l" onclick="closeS()">${t("cancel")}</button>`);
}
async function scanQR() {
  hap();
  const B = cap().BarcodeScanner;
  if (!B) { toast(t("noscan")); return; }
  try {
    try { const a = await B.isGoogleBarcodeScannerModuleAvailable(); if (!a.available) { await B.installGoogleBarcodeScannerModule(); toast("..."); return; } } catch (e) {}
    const r = await B.scan({formats: ["QR_CODE"]});
    handleScan(r.barcodes && r.barcodes[0] && r.barcodes[0].rawValue);
  } catch (e) { console.log(e); }
}
async function handleScan(v) {
  const m = /^funpay:(01\d{9})$/i.exec(String(v || "").trim());
  if (!m) { toast(t("badqr")); hap("HEAVY"); return; }
  if (m[1] === S.me.phone) { toast(t("self")); return; }
  try {
    const r = await api("/rest/v1/rpc/lookup_phone", {m: "POST", b: {p_phone: m[1]}});
    if (!r.length) { toast(t("nouser")); return; }
    openS(r[0].prole === "agent" ? "cash" : "send", m[1]);
  } catch (e) { toast(errMsg(e)); }
}

/* ---------- ফিঙ্গারপ্রিন্ট / ফোনের স্ক্রিন লক দিয়ে আনলক ---------- */
const BIO_SERVER = "funpay.app";
const bioOn = () => { try { return !!S.phone && localStorage.getItem("fpbio") === S.phone; } catch (e) { return false; } };
async function offerBio(pin) {
  const N = cap().NativeBiometric;
  if (!N || !S.auth || S.sheet || S.upd || bioOn() || localStorage.getItem("fpbioask") === S.phone) return;
  try { const a = await N.isAvailable({useFallback: true}); if (!a.isAvailable) return; } catch (e) { return; }
  localStorage.setItem("fpbioask", S.phone);
  S.sheet = {id: "bio", pin, fresh: true, err: ""}; renderSheet();
}
function bioHtml() {
  const s = S.sheet;
  return wrapSheet(s, `<div class="ok"><div class="tick">${ic("fp")}</div><h2>${t("bioT")}</h2><small>${t("bioD")}</small></div>`
    + (s.pin ? "" : `<div class="lb">${t("pin")}</div><input id="f3" type="password" inputmode="numeric" maxlength="6"><div class="err">${esc(s.err)}</div>`)
    + `<button class="btn" onclick="enableBio()">${t("bioY")}</button><button class="btn l" onclick="closeS()">${t("upl")}</button>`);
}
async function toggleBio() {
  hap();
  const N = cap().NativeBiometric;
  if (!N) { toast(t("noscan")); return; }
  if (bioOn()) { try { await N.deleteCredentials({server: BIO_SERVER}); } catch (e) {} localStorage.removeItem("fpbio"); render(); return; }
  try { const a = await N.isAvailable({useFallback: true}); if (!a.isAvailable) { toast(t("errg")); return; } } catch (e) { toast(t("errg")); return; }
  S.sheet = {id: "bio", pin: "", fresh: true, err: ""}; renderSheet();
}
async function enableBio() {
  const s = S.sheet, N = cap().NativeBiometric;
  if (!s || s.busy || !N) return;
  const pin = s.pin || (document.getElementById("f3") || {}).value || "";
  const fail = (m) => { s.busy = false; setBusy(false); if (S.sheet !== s) return; s.err = m; renderSheet(); shakeBox(); };
  if (!/^\d{6}$/.test(pin)) return fail(t("wp"));
  s.busy = true; setBusy(true);
  try {
    await signIn(S.me.phone, pin);
    await N.verifyIdentity({reason: t("bioR"), title: "FuNPaY", useFallback: true});
    await N.setCredentials({username: S.me.phone, password: pin, server: BIO_SERVER});
    localStorage.setItem("fpbio", S.me.phone);
  } catch (e) { return fail(errMsg(e)); }
  s.busy = false; closeS(); toast(t("bioOn")); if (S.tab === "mine") render();
}
async function bioUnlock() {
  const N = cap().NativeBiometric;
  if (!N || S.busy || S.auth || !bioOn()) return;
  S.busy = true;
  try {
    await N.verifyIdentity({reason: t("bioR"), title: "FuNPaY", useFallback: true});
    const c = await N.getCredentials({server: BIO_SERVER});
    await signIn(c.username, c.password); await enter();
  } catch (e) {
    if (/invalid login/i.test((e && e.message) || "")) { try { await N.deleteCredentials({server: BIO_SERVER}); } catch (x) {} localStorage.removeItem("fpbio"); render(); }
  }
  S.busy = false;
}

if ("serviceWorker" in navigator && !window.Capacitor && location.protocol.indexOf("http") === 0) navigator.serviceWorker.register("sw.js").catch(() => {});
render();
if (bioOn()) setTimeout(bioUnlock, 500);
/* ব্যানার নিজে নিজে ঘোরে */
setInterval(() => {
  const b = document.querySelector(".ban");
  if (!b || S.sheet || S.upd || (b.dataset.t && Date.now() - b.dataset.t < 6000)) return;
  const w = b.scrollWidth / 3, i = (Math.round(b.scrollLeft / w) + 1) % 3;
  b.scrollTo({left: i * w, behavior: "smooth"});
}, 4200);
/* অ্যান্ড্রয়েড ব্যাক বাটন, স্ট্যাটাস বার, ব্যাকগ্রাউন্ডে ১ মিনিটের বেশি থাকলে অটো লক */
try {
  const A = cap().App;
  let bgAt = 0;
  if (A) {
    A.addListener("backButton", () => {
      if (S.sheet || S.upd) { closeS(); return; }
      if (S.auth && S.tab !== "home") { go("home"); return; }
      A.exitApp();
    });
    A.addListener("appStateChange", (st) => {
      if (!st.isActive) { bgAt = Date.now(); return; }
      if (S.auth && bgAt && Date.now() - bgAt > 60000) lock(true); else if (S.auth) refresh();
      bgAt = 0;
    });
  }
  const SB = cap().StatusBar;
  if (SB) { SB.setStyle({style: "DARK"}); SB.setBackgroundColor({color: "#1d4ed8"}); }
} catch (e) {}
