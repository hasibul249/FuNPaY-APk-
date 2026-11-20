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
Object.assign(P, {
  back:'<path d="M15 5l-7 7 7 7"/>', bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  mine:'<path d="M4 8a2 2 0 012-2h11v3"/><rect x="3" y="8" width="18" height="12" rx="3"/><path d="M16.5 14h1.6"/>'
});

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

Object.assign(T.bn, {lgreg:"লগ ইন / রেজিস্ট্রেশন", phh:"মোবাইল নম্বর দিয়ে লগ ইন / রেজিস্ট্রেশন করুন", cc:"দেশের কোড", bd:"বাংলাদেশ", mob:"মোবাইল নম্বর", terms:"আপনি নিয়ম ও শর্তসমূহে সম্মত আছেন", ft1:"নিরাপদ PIN", ft2:"ফিঙ্গারপ্রিন্ট", ft3:"QR পেমেন্ট", wel:"স্বাগতম", regh:"নতুন অ্যাকাউন্ট খুলুন", regs:"নাম, মোবাইল নম্বর আর ৬ ডিজিট PIN দিন"});
Object.assign(T.en, {lgreg:"Log in / Register", phh:"Log in / Register with your mobile number", cc:"Country code", bd:"Bangladesh", mob:"Mobile number", terms:"You agree to the terms and conditions", ft1:"Secure PIN", ft2:"Fingerprint", ft3:"QR payments", wel:"Welcome", regh:"Create a new account", regs:"Enter your name, mobile number and a 6-digit PIN"});
Object.assign(T.bn, {rcnt:"সাম্প্রতিক", sc1:"স্ক্যান করতে ফ্রেমের ভেতরে QR কোড রাখুন", scn2:"নম্বর দিয়ে পাঠান", camno:"ক্যামেরার অনুমতি দরকার", camd:"QR স্ক্যান করতে FuNPaY কে ক্যামেরা ব্যবহারের অনুমতি দিন।", camb:"অনুমতি দিন", gscan:"অন্য স্ক্যানার দিয়ে খুলুন", sec1:"লেনদেনের ফিচার সেট করুন", sec2:"আপনার পছন্দ বেছে নিন", sec3:"অ্যাকাউন্ট ম্যানেজ করুন", at:"সময়", blc:"ব্যালেন্স", pr:"আমার প্রোফাইল", scn3:"স্ক্যান"});
Object.assign(T.en, {rcnt:"Recent", sc1:"Place the QR code inside the frame", scn2:"Send using a number", camno:"Camera permission needed", camd:"Allow FuNPaY to use the camera to scan QR codes.", camb:"Allow", gscan:"Open another scanner", sec1:"Set up transaction features", sec2:"Choose your preference", sec3:"Manage account", at:"Time", blc:"Balance", pr:"My profile", scn3:"Scan"});
Object.assign(T.bn, {bt1:"অ্যাড মানি অফার", bt2:"রিচার্জ অফার", bt3:"রেফার অফার", o1:"প্রথম অ্যাড মানিতে ৫% ক্যাশব্যাক", o2:"মোবাইল রিচার্জে ১০ টাকা বোনাস", o3:"বন্ধুকে ইনভাইট করুন, পান ৫০ টাকা", os1:"ব্যাংক বা কার্ড থেকে টাকা যোগ করুন", os2:"যেকোনো অপারেটরে, প্রতি রিচার্জে", os3:"বন্ধু প্রথম লেনদেন করলেই", g1:"অ্যাড মানি", g2:"রিচার্জ করুন", g3:"ইনভাইট"});
Object.assign(T.en, {bt1:"ADD MONEY OFFER", bt2:"RECHARGE OFFER", bt3:"REFER OFFER", o1:"5% cashback on your first Add Money", o2:"৳10 bonus on every recharge", o3:"Invite a friend and get ৳50", os1:"Add money from a bank or card", os2:"On any operator, every recharge", os3:"When your friend makes a first transfer", g1:"Add Money", g2:"Recharge", g3:"Invite"});

const BG = ["linear-gradient(135deg,#e2136e,#ff6fa8)", "linear-gradient(135deg,#6a2fd8,#b184ff)", "linear-gradient(135deg,#f08a1c,#ffc56b)"];
const S = {lang:"bn", auth:false, busy:false, view:"", phone:"", name:"", me:null, uid:"", tok:"", rt:"", bal:0, tx:[], seen:0, tab:"home", seg:"t", q:"", fl:0, more:false, pin:"", sheet:null, fx:false, hl:null, upd:null};
try {
  const d = JSON.parse(localStorage.getItem("fp2") || "{}");
  ["lang", "phone", "name"].forEach(k => { if (d[k] !== undefined) S[k] = d[k]; });
} catch (e) {}
const save = () => { try { localStorage.setItem("fp2", JSON.stringify({lang:S.lang, phone:S.phone, name:S.name})); } catch (e) {} };

/* ---------- নেটিভ ফিচার (Capacitor প্লাগইন থাকলে কাজ করে, না থাকলে ব্রাউজারেও চলে) ---------- */
const APP_REL = "1.9"; /* অ্যাপে দেখানো রিলিজ নম্বর */
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
const TK = (x, y, s, c) => `<text x="${x}" y="${y}" font-size="${s}" font-weight="800" fill="${c}" text-anchor="middle" font-family="system-ui,'Noto Sans Bengali',sans-serif">৳</text>`;
/* রঙিন সার্ভিস আইকন (বিকাশের মতো) */
const C = {
  send:'<path d="M5 17h9M3 24h8M6 31h8" stroke="#f290b8" stroke-width="2.6" stroke-linecap="round"/><circle cx="29" cy="24" r="12" fill="#fff0f6" stroke="#e2136e" stroke-width="2.6"/>' + TK(29, 29.6, 16, "#e2136e"),
  rech:'<rect x="14" y="6" width="20" height="36" rx="4.5" fill="#eafaf1" stroke="#1faa6b" stroke-width="2.6"/><path d="M21 37h6" stroke="#1faa6b" stroke-width="2.4" stroke-linecap="round"/><circle cx="24" cy="21" r="7.5" fill="#e2136e"/>' + TK(24, 25.8, 11, "#fff"),
  cash:'<g transform="rotate(-14 24 21)"><rect x="6" y="10" width="36" height="20" rx="3.5" fill="#2fb7a8"/><rect x="9.5" y="13.5" width="29" height="13" rx="2" fill="none" stroke="#c9f2ec" stroke-width="1.6"/><circle cx="24" cy="20" r="4.6" fill="#c9f2ec"/></g><path d="M5 34c6 3.4 13 5 22 3.4l9-4.6c1.8-.9 2.4-2.8.9-3.9-1.2-.9-3-.5-4.4.3l-5.4 3" fill="none" stroke="#e2136e" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',
  pay:'<path d="M11 17h26l2.2 23H8.8z" fill="#ffefd9" stroke="#f08a1c" stroke-width="2.6" stroke-linejoin="round"/><path d="M17.5 17v-3.5a6.5 6.5 0 0113 0V17" fill="none" stroke="#f08a1c" stroke-width="2.6" stroke-linecap="round"/>',
  add:'<rect x="6" y="12" width="34" height="26" rx="5" fill="#f1e8fb" stroke="#7b4fb8" stroke-width="2.6"/><path d="M6 19h34" stroke="#7b4fb8" stroke-width="2.4"/><rect x="28" y="24" width="14" height="9" rx="3" fill="#fff" stroke="#7b4fb8" stroke-width="2.4"/><path d="M16 25v8M12 29h8" stroke="#e2136e" stroke-width="2.6" stroke-linecap="round"/>',
  bill:'<path d="M24 6a12 12 0 00-6.5 22c1.4 1 2 2.2 2 3.7V33h9v-1.3c0-1.5.6-2.7 2-3.7A12 12 0 0024 6z" fill="#e5f6ee" stroke="#2f9e6f" stroke-width="2.6" stroke-linejoin="round"/><path d="M20 38h8M21.5 42h5" stroke="#2f9e6f" stroke-width="2.6" stroke-linecap="round"/><path d="M25.5 13l-4.5 8h5l-3.500 7" fill="none" stroke="#f0a020" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  save:'<path d="M24 12c-9 0-15 6-15 14 0 7 5 12 15 12s15-5 15-12c0-8-6-14-15-14z" fill="#fde7f1" stroke="#d6307d" stroke-width="2.6"/><path d="M19 12.500l5-5 5 5" fill="none" stroke="#d6307d" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="26" r="7.500" fill="#d6307d"/>' + TK(24, 30.5, 11, "#fff"),
  bank:'<circle cx="21" cy="24" r="12" fill="#fff0f6" stroke="#d6307d" stroke-width="2.6"/>' + TK(21, 29.4, 15, "#d6307d") + '<path d="M36 17l8 7-8 7z" fill="#f290b8" stroke="#f290b8" stroke-width="2" stroke-linejoin="round"/>',
  loan:'<path d="M18 8h12l-3 6h-6z" fill="#e9b98a" stroke="#b9772e" stroke-width="2.4" stroke-linejoin="round"/><path d="M21 14C9 20 7 41 24 41s15-21 3-27z" fill="#f6dcc0" stroke="#b9772e" stroke-width="2.6" stroke-linejoin="round"/>' + TK(24, 35, 15, "#b9772e"),
  insur:'<path d="M24 5l15 5.500v11c0 10-6.500 17-15 20.500C15.500 39.500 9 32.500 9 21.500v-11z" fill="#e6f0ff" stroke="#2f6fd0" stroke-width="2.6" stroke-linejoin="round"/><circle cx="24" cy="23" r="7.500" fill="#2f6fd0"/>' + TK(24, 27.8, 11, "#fff"),
  edu:'<path d="M6 12c6-2 12-1 18 3 6-4 12-5 18-3v26c-6-2-12-1-18 3-6-4-12-5-18-3z" fill="#e9f5ee" stroke="#2f7d5b" stroke-width="2.6" stroke-linejoin="round"/><path d="M24 15v26" stroke="#2f7d5b" stroke-width="2.4"/><path d="M11 20c3-.6 6 0 9 1.500M11 26c3-.6 6 0 9 1.500M28 21.500c3-1.500 6-2 9-1.500M28 27.500c3-1.500 6-2 9-1.500" stroke="#7fc3a0" stroke-width="2" stroke-linecap="round" fill="none"/>',
  remit:'<circle cx="24" cy="25" r="16" fill="#e7f7ec" stroke="#2faa5f" stroke-width="2.6"/><path d="M8 25h32M24 9c-6 5-6 27 0 32M24 9c6 5 6 27 0 32" fill="none" stroke="#2faa5f" stroke-width="2"/><circle cx="36" cy="12" r="7" fill="#e2136e"/>' + TK(36, 16.5, 10, "#fff"),
  qr:'<rect x="6" y="6" width="14" height="14" rx="3" fill="none" stroke="#e2136e" stroke-width="3"/><rect x="28" y="6" width="14" height="14" rx="3" fill="none" stroke="#e2136e" stroke-width="3"/><rect x="6" y="28" width="14" height="14" rx="3" fill="none" stroke="#e2136e" stroke-width="3"/><path d="M28 28h5v5h-5zM37 28h5M28 38h5M37 33v9" stroke="#e2136e" stroke-width="3" stroke-linecap="round"/>',
  gift:'<rect x="8" y="22" width="32" height="19" rx="3" fill="#ffd9a6" stroke="#f08a1c" stroke-width="2.4"/><rect x="6" y="15" width="36" height="8" rx="3" fill="#ffecd0" stroke="#f08a1c" stroke-width="2.4"/><path d="M24 15v26" stroke="#f08a1c" stroke-width="2.4"/><path d="M24 15c-3-8-11-6-8-1.500 1.500 2 6 1.500 8 1.500zM24 15c3-8 11-6 8-1.500-1.500 2-6 1.500-8 1.500z" fill="#fff" stroke="#f08a1c" stroke-width="2.2" stroke-linejoin="round"/>',
  cpn:'<circle cx="24" cy="24" r="16" fill="#d4f1ee" stroke="#2aa79b" stroke-width="2.6"/><path d="M17 31l14-14" stroke="#2aa79b" stroke-width="2.8" stroke-linecap="round"/><circle cx="18" cy="18" r="3" fill="#2aa79b"/><circle cx="30" cy="30" r="3" fill="#2aa79b"/>',
  rwd:'<path d="M15 8h18v10c0 6-4 10-9 10s-9-4-9-10z" fill="#ffe27a" stroke="#c99a00" stroke-width="2.4" stroke-linejoin="round"/><path d="M15 12H8c0 6 3 9 7 9M33 12h7c0 6-3 9-7 9" fill="none" stroke="#c99a00" stroke-width="2.4"/><path d="M24 28v7M17 41h14M19 35h10" stroke="#c99a00" stroke-width="2.6" stroke-linecap="round"/>'
};
const cic = (k) => `<svg class="ci" viewBox="0 0 48 48" aria-hidden="true">${C[k]}</svg>`;
const tile = (k) => `<div class="ic">${C[k] ? cic(k) : ic(k)}</div>`;
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[c]));
const first = (s) => esc(Array.from(String(s || "F"))[0].toUpperCase());
const fmt = (iso) => { const n = new Date(iso), p = (x) => String(x).padStart(2, "0"); return `${p(n.getDate())}/${p(n.getMonth() + 1)} ${p(n.getHours())}:${p(n.getMinutes())}`; };

/* ---------- সার্ভারের সাথে যোগাযোগ ---------- */
async function api(path, o = {}) {
  const BASE = String(SUPA_URL).replace(/[\s"']/g, "").replace(/\/+$/, ""), KEY = String(SUPA_KEY).replace(/[\s"']/g, "");
  const h = {apikey: KEY, "Content-Type": "application/json"};
  if (o.auth !== false && S.tok) h.Authorization = "Bearer " + S.tok;
  let r;
  try { r = await fetch(BASE + path, {method: o.m || "GET", headers: h, body: o.b ? JSON.stringify(o.b) : undefined}); }
  catch (e) { window.__netErr = (e && e.message || "") + " | " + BASE.slice(0, 40) + " | key:" + KEY.length; throw new Error("NET"); }
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
  if (k) return t(k) + (m === "NET" && window.__netErr ? " [" + window.__netErr + "]" : "");
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
  clearInterval(pollT); stopScanner();
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
const money2 = (n) => "৳" + Number(n).toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
const AVC = [["#f3e1ff", "#8a4fd0"], ["#dff5ea", "#1f9d63"], ["#ffe9d6", "#e07a1a"], ["#e0f0ff", "#2f6fd0"], ["#ffe1ee", "#d6307d"], ["#fff3c9", "#a87c00"]];
function avatar(name, ph) {
  let h = 0; for (const ch of String(ph || name || "F")) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const c = AVC[h % AVC.length];
  return `<u class="av2" style="background:${c[0]};color:${c[1]}">${first(name || ph)}</u>`;
}
function row(x) {
  const v = tv(x), plain = SVC.includes(x.type) || x.type === "add";
  const out = x.from_id === S.uid, nm = out ? x.to_name : x.from_name, ph = out ? x.to_phone : x.from_phone;
  const lead = plain ? tile(x.type) : avatar(nm, ph);
  return `<div class="tr${S.hl === x.trx ? " pop" : ""}">${lead}<div class="m"><b>${t(v.key)}</b><span>${esc(v.who)}</span><small>TrxID: ${esc(x.trx)}</small></div><div class="r"><b class="${v.out ? "mi" : "pl"}">${v.out ? "-" : "+"}${money2(v.amt)}</b><small>${fmt(x.created_at)}</small></div></div>`;
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
  const T3 = (x, y, z, c) => `<text x="${x}" y="${y}" font-size="${z}" font-weight="800" fill="${c}" text-anchor="middle" font-family="system-ui,'Noto Sans Bengali',sans-serif">`;
  let s = '<svg class="d" viewBox="0 0 120 136" preserveAspectRatio="xMaxYMid slice" aria-hidden="true"><circle cx="96" cy="30" r="58" fill="#fff" opacity=".12"/><circle cx="118" cy="120" r="44" fill="#fff" opacity=".1"/>';
  if (i === 0) s += '<ellipse cx="62" cy="108" rx="30" ry="9" fill="#b45309" opacity=".35"/><path d="M32 96v10c0 5 13 9 30 9s30-4 30-9V96z" fill="#e0a21a"/><ellipse cx="62" cy="96" rx="30" ry="9" fill="#fcd34d"/><path d="M36 82v10c0 5 12 8 26 8s26-3 26-8V82z" fill="#e0a21a"/><ellipse cx="62" cy="82" rx="26" ry="8" fill="#fcd34d"/><circle cx="72" cy="48" r="27" fill="#fff"/><circle cx="72" cy="48" r="23" fill="none" stroke="#e2136e" stroke-width="2" stroke-dasharray="3 3"/>' + T3(72, 57, 25, "#e2136e") + '৫%</text>';
  if (i === 1) s += '<rect x="42" y="18" width="46" height="88" rx="9" fill="#fff"/><rect x="47" y="28" width="36" height="62" rx="4" fill="#efe6ff"/><circle cx="65" cy="98" r="3" fill="#cfc2f2"/><circle cx="65" cy="52" r="15" fill="#6a2fd8"/>' + T3(65, 58, 17, "#fff") + '৳</text><path d="M96 38a22 22 0 010 34M104 30a32 32 0 010 50" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/><rect x="52" y="74" width="26" height="5" rx="2.5" fill="#cfc2f2"/>';
  if (i === 2) s += '<rect x="36" y="64" width="62" height="44" rx="6" fill="#fff"/><rect x="30" y="50" width="74" height="18" rx="6" fill="#ffe4bd"/><rect x="62" y="50" width="10" height="58" fill="#e2136e"/><path d="M67 50c-6-20-26-18-18-5 3 5 14 5 18 5zM67 50c6-20 26-18 18-5-3 5-14 5-18 5z" fill="none" stroke="#e2136e" stroke-width="5" stroke-linejoin="round"/><path d="M104 30l3 7 7 3-7 3-3 7-3-7-7-3 7-3zM24 40l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff"/>';
  return s + "</svg>";
}
const BTX = [["bt1", "os1", "g1", "add"], ["bt2", "os2", "g2", "rech"], ["bt3", "os3", "g3", ""]];
const banner = (i, w) => `<div class="bn${w ? " w" : ""}" style="background:${BG[i]}" onclick="${BTX[i][3] ? `openS('${BTX[i][3]}')` : "hap();toast(t('soon'))"}">${deco(i)}<small>${t(BTX[i][0])}</small><b>${t("o" + (i + 1))}</b><p>${t(BTX[i][1])}</p><span>${t(BTX[i][2])}</span></div>`;
const agBadge = () => (S.me && S.me.role === "agent") ? `<em class="ag">${t("agent")}</em>` : "";
const SCENE = '<svg class="scene" viewBox="0 0 400 150" preserveAspectRatio="xMidYMax slice" aria-hidden="true">'
  + '<g fill="#fff" opacity=".22"><ellipse cx="318" cy="34" rx="30" ry="9"/><ellipse cx="338" cy="28" rx="20" ry="8"/><ellipse cx="70" cy="56" rx="26" ry="7"/><ellipse cx="88" cy="51" rx="16" ry="6"/></g>'
  + '<path d="M0 98c60-22 110-20 170-6s130 8 230-14v72H0z" fill="#fff" opacity=".13"/>'
  + '<path d="M0 118c70-18 120-12 190 2s140 6 210-12v42H0z" fill="#fff" opacity=".16"/>'
  + '<g fill="#fff" opacity=".42"><path d="M58 114l9-8 9 8v8H58z"/><path d="M288 106l7-6 7 6v6h-14z"/><path d="M330 114l6-5 6 5v5h-12z"/></g>'
  + '<g fill="#fff" opacity=".3"><circle cx="112" cy="108" r="6"/><circle cx="124" cy="110" r="5"/><circle cx="252" cy="106" r="6"/><circle cx="372" cy="106" r="5"/></g>'
  + '<path d="M170 150c20-14 40-22 80-30s70-6 90-18" fill="none" stroke="#fff" stroke-width="10" opacity=".14" stroke-linecap="round"/>'
  + '<path d="M0 136c80-10 150-4 220 4s130 0 180-10v20H0z" fill="#fff" opacity=".2"/></svg>';
function hero() {
  const nm = S.me && S.me.name ? esc(S.me.name) : t("nm");
  return `<div class="hero">${SCENE}<div class="top"><div class="av" onclick="go('mine')">${first(S.me && S.me.name)}</div>
  <div class="who"><small>${nm} ${agBadge()}</small><button class="bp" onclick="peek(this)"><u>৳</u><span>${t("showb")}</span></button></div>
  <button class="hb" aria-label="${t("sq")}" onclick="S.seg='t';go('inbox')">${ic("srch")}</button>
  <button class="hb" aria-label="${t("mine")}" onclick="go('mine')"><img src="icons/logo-pink.png" alt=""><em></em></button></div></div>`;
}
const tbar = (title) => `<div class="tbar"><span class="sp"></span><b>${title}</b><img src="icons/logo.png" alt=""></div>`;
function pageHome() {
  const items = SV.slice(0, S.more ? 12 : 8).map(a => `<button class="it" onclick="openS('${a.id}')">${tile(a.id)}<span>${t(a.id)}</span></button>`).join("");
  const rc = recents();
  return hero() + `<div class="wsheet"><div class="grid">${items}</div>
  <button class="more" onclick="S.more=!S.more;render()">${t(S.more ? "less" : "more")}${ic(S.more ? "cu" : "cd")}</button></div>
  <div class="sec nob"><div class="ban" onscroll="dot(this)" ontouchstart="this.dataset.t=Date.now()">${banner(0)}${banner(1)}${banner(2)}</div><div class="dts"><i class="on"></i><i></i><i></i></div></div>
  <div class="sec"><div class="ttl"><span>${t("qf")}</span></div>
  ${rc.length ? `<div class="fv">${rc.map(f => `<div class="fc" onclick="openS('send','${esc(f[0])}')"><u>${first(f[1])}</u>${esc(f[1])}</div>`).join("")}</div>` : ""}
  <div class="tri"><div onclick="S.seg='n';go('inbox')">${cic("gift")}<span>${t("offers")}</span></div><div onclick="hap();toast(t('soon'))">${cic("cpn")}<span>${t("cp")}</span></div><div onclick="hap();toast(t('soon'))">${cic("rwd")}<span>${t("rw")}</span></div></div></div>
  <div class="sec"><div class="ttl"><span>${t("rec")}</span><a onclick="S.seg='t';go('inbox')">${t("all")}</a></div>
  ${S.tx.length ? S.tx.slice(0, 3).map(row).join("") : `<p class="em">${t("no")}</p>`}</div>`;
}
function pageInbox() {
  const head = tbar(t("inbox")) + `<div class="seg"><button class="${S.seg === "t" ? "on" : ""}" onclick="S.seg='t';render()">${t("txs")}</button><button class="${S.seg === "n" ? "on" : ""}" onclick="S.seg='n';render()">${t("nt")}<i class="bd">3</i></button></div>`;
  if (S.seg === "n") return head + [0, 1, 2].map(i => `<div class="nt">${banner(i, true).replace(" w", "")}<p>${t("n" + (i + 1))}</p><small>${t("new")}</small></div>`).join("");
  return head + `<div class="srch"><div>${ic("srch")}<input placeholder="${t("sq")}" value="${esc(S.q)}" oninput="S.q=this.value;document.getElementById('lst').innerHTML=list()"></div><button onclick="S.fl=(S.fl+1)%3;render()">${t("flt")}: ${t("f" + S.fl)}</button></div><div class="note">${t("last")}</div><div id="lst">${list()}</div>`;
}
function pageMine() {
  const m = S.me || {};
  const R = (icon, label, js, right) => `<button class="mr" onclick="${js}">${ic(icon)}<span>${label}</span>${right || ""}</button>`;
  const sw = `<i class="sw${bioOn() ? " on" : ""}"><b></b></i>`;
  return tbar(t("pr"))
    + `<div class="prof"><div class="big">${first(m.name)}</div><div class="pi2"><h3>${esc(m.name)} ${agBadge()}</h3><p>+88 ${esc(m.phone)}</p></div></div>`
    + `<div class="balc"><span>${t("blc")}</span><b>${money(S.bal)}</b></div>`
    + `<div class="msec"><h4>${t("sec1")}</h4>${R("qr", t("myqr"), "openQR('my')")}${R("srch", t("scanqr"), "openQR('scan')")}${R("fp", t("bioT"), "toggleBio()", sw)}</div>`
    + `<div class="msec"><h4>${t("sec2")}</h4>${R("lang", t("lang"), "lang()")}</div>`
    + `<div class="msec"><h4>${t("sec3")}</h4>${R("up", t("chk"), "checkUpdate(true)", `<small>v${APP_REL}</small>`)}${R("out", t("out"), "lock()")}</div>`
    + (TEST_MODE ? `<p class="em">${t("dm")}</p>` : "");
}

/* ---------- লগইন / অ্যাকাউন্ট খোলা ---------- */
const LOGO = '<img class="lglogo" src="icons/logo.png" alt="FuNPaY">';
const lgBar = (backJs) => `<div class="fbar"><button class="fback" aria-label="${t("back")}" onclick="${backJs}"><svg class="i" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button><div class="flang"><button class="${S.lang === "en" ? "on" : ""}" onclick="if(S.lang!=='en')lang()">Eng</button><button class="${S.lang === "bn" ? "on" : ""}" onclick="if(S.lang!=='bn')lang()">বাং</button></div></div>`;
const NXT = `<svg class="i" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
function loginHtml() {
  if (!CONFIGURED) return `<div class="fl land"><div class="orb o1"></div><div class="orb o2"></div><div class="lhero">${LOGO}<h1>FuNPaY</h1><p>${t("setup")}</p></div></div>`;
  /* ১) স্বাগতম পেজ */
  if (S.view === "" && !S.phone) return `<div class="fl land"><div class="orb o1"></div><div class="orb o2"></div>
    <div class="ltop"><div class="flang w"><button class="${S.lang === "en" ? "on" : ""}" onclick="if(S.lang!=='en')lang()">Eng</button><button class="${S.lang === "bn" ? "on" : ""}" onclick="if(S.lang!=='bn')lang()">বাং</button></div></div>
    <div class="lhero">${LOGO}<h1>FuNPaY</h1><p>${t("tag")}</p>
      <div class="pills"><span>${t("ft1")}</span><span>${t("ft2")}</span><span>${t("ft3")}</span></div></div>
    <div class="lpanel"><button class="lwb" onclick="hap();S.view='ph';render()">${t("lgreg")}</button>${TEST_MODE ? `<small>${t("dm")}</small>` : ""}</div></div>`;
  /* ২) মোবাইল নম্বর পেজ */
  if (S.view === "ph" && !S.phone) return `<div class="fl light">${lgBar("S.view='';render()")}
    <div class="fbody"><img class="mini" src="icons/logo-pink.png" alt="">
      <h2>${t("phh")}</h2>
      <label>${t("cc")}</label><div class="cfield"><i class="flag"></i>${t("bd")}</div>
      <label>${t("mob")}</label><div class="pfield"><b>+88</b><input id="lp" inputmode="numeric" maxlength="11" placeholder="01XXXXXXXXX" autocomplete="tel-national" onkeydown="if(event.key==='Enter')setPhone()" oninput="this.value=this.value.replace(/\\D/g,'')"></div>
      <div class="le"></div>
      <p class="terms">${t("terms")}</p>
      <button class="lnk" onclick="S.view='reg';render()">${t("newacc")}</button></div>
    <button class="nbar" onclick="setPhone()"><span>${t("next")}</span>${NXT}</button></div>`;
  /* ৩) নতুন অ্যাকাউন্ট */
  if (S.view === "reg") return `<div class="fl light">${lgBar("S.view='ph';render()")}
    <div class="fbody"><img class="mini" src="icons/logo-pink.png" alt="">
      <h2>${t("regh")}</h2><p class="sub">${t("regs")}</p>
      <label>${t("nm")}</label><div class="pfield"><input id="rn" maxlength="20" placeholder="${t("nm")}"></div>
      <label>${t("mob")}</label><div class="pfield"><b>+88</b><input id="rp" inputmode="numeric" maxlength="11" placeholder="01XXXXXXXXX" oninput="this.value=this.value.replace(/\\D/g,'')"></div>
      <label>${t("pin4")}</label><div class="pfield"><input id="rk" type="password" inputmode="numeric" maxlength="6" placeholder="••••••" oninput="this.value=this.value.replace(/\\D/g,'')"></div>
      <div class="le"></div>
      <button class="lnk" onclick="S.view='ph';render()">${t("haveacc")}</button></div>
    <button class="nbar lb2" onclick="doReg()"><span>${t("reg")}</span>${NXT}</button></div>`;
  /* ৪) PIN পেজ */
  const dots = [0, 1, 2, 3, 4, 5].map(i => `<span class="dt${i < S.pin.length ? " on" : ""}"></span>`).join("");
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button onclick="key('${n}')">${n}</button>`).join("") + (bioOn() ? `<button onclick="bioUnlock()">${ic("fp")}</button>` : `<button class="z"></button>`) + `<button onclick="key('0')">0</button><button onclick="key('b')"><svg class="i" viewBox="0 0 24 24"><path d="M21 5H9l-6 7 6 7h12zM15 9l-4 6M11 9l4 6"/></svg></button>`;
  return `<div class="fl pinp"><div class="orb o1"></div><div class="orb o2"></div>
    <div class="phead">${LOGO}<b>${esc(S.name || t("back2"))}</b><span>+88 ${esc(S.phone)}</span></div>
    <div class="psheet"><p class="pl">${t("lp")}</p><div class="dots">${dots}</div><div class="le"></div><div class="kp">${keys}</div>
      <div class="lrow"><button class="chip" onclick="S.phone='';S.name='';S.pin='';S.view='ph';render()">${t("other")}</button><button class="chip" onclick="S.view='reg';render()">${t("newacc")}</button><button class="chip" onclick="lang()">${t("lang")}</button></div>
      ${TEST_MODE ? `<small class="dm">${t("dm")}</small>` : ""}</div></div>`;
}
function setPhone() {
  const v = document.getElementById("lp").value.trim();
  if (!/^01\d{9}$/.test(v)) { document.querySelector(".le").textContent = t("badn"); hap("HEAVY"); return; }
  S.phone = v; S.name = ""; S.view = ""; render();
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

/* স্ট্যাটাস বারের রং: পেজ অনুযায়ী (OTA তেই কাজ করে) */
function sbar() {
  try {
    const B = cap().StatusBar; if (!B) return;
    const scn = !!(S.sheet && S.sheet.id === "qrs" && S.sheet.tab === "scan");
    const light = !S.auth && CONFIGURED && (S.view === "ph" || S.view === "reg") && !S.phone;
    const col = scn ? "#12050c" : light ? "#f7f5f7" : "#e2136e";
    Promise.resolve(B.setBackgroundColor({color: col})).catch(() => {});
    Promise.resolve(B.setStyle({style: light && !scn ? "LIGHT" : "DARK"})).catch(() => {});
    const m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", col);
  } catch (e) {}
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
    h += `<nav class="${fx ? "fx" : ""}">${nv("home", t("home"))}${nv("mine", t("mine"))}<button class="qrb" onclick="openQR('scan')"><span class="ni">${ic("qr")}</span>${t("qrs")}</button>${nv("inbox", t("inbox"))}</nav>`;
  }
  document.getElementById("app").innerHTML = h;
  S.fx = false; S.hl = null;
  sbar();
  if (!S.auth && CONFIGURED) { const f = document.getElementById(S.view === "reg" ? "rn" : "lp"); if (f && S.view) setTimeout(() => { try { f.focus(); } catch (e) {} }, 350); }
}
const go = (k) => {
  if (S.tab === k) { render(); window.scrollTo({top: 0, behavior: "smooth"}); return; }
  hap(); S.tab = k; S.fx = true; render(); window.scrollTo(0, 0);
};
const lang = () => { hap(); S.lang = S.lang === "bn" ? "en" : "bn"; render(); };
let peekTimer;
function peek(b) {
  hap();
  const sp = b.querySelector("span");
  clearTimeout(peekTimer);
  sp.textContent = money(S.bal);
  peekTimer = setTimeout(() => { if (sp.isConnected) sp.textContent = t("showb"); }, 4000);
}

function dot(e) { const i = Math.round(e.scrollLeft / (e.scrollWidth / 3)); document.querySelectorAll(".dts i").forEach((d, j) => d.className = j === i ? "on" : ""); }
/* ---------- লেনদেনের ফর্ম: ধাপ ১ = তথ্য, ধাপ ২ = যাচাই + PIN, শেষে সফল পেজ ---------- */
function openS(id, pre) {
  if (!WIRED.includes(id)) { hap(); toast(t("soon")); return; }
  hap(); S.sheet = {id, step:1, v:pre || "", ch:"", a:"", err:"", done:false, fresh:true, fxs:false, rn:"", busy:false}; renderSheet();
}
function mount() { let e = document.getElementById("sheet"); if (!e) { e = document.createElement("div"); e.id = "sheet"; document.body.appendChild(e); } return e; }
function renderSheet() {
  const s = S.sheet;
  mount().innerHTML = S.upd ? updHtml() : s ? (s.id === "qrs" ? qrHtml() : s.id === "bio" ? bioHtml() : sheetHtml()) : "";
  if (s) { s.fresh = false; s.fxs = false; }
  if (S.upd) S.upd.fresh = false;
  if (s && !s.done && s.step === 2 && s.id !== "qrs" && s.id !== "bio") { const f = document.getElementById("f3"); if (f) setTimeout(() => f.focus(), 120); }
  sbar();
}
function closeS() {
  const sh = document.querySelector("#sheet .sh");
  if (!sh || sh.classList.contains("out")) return;
  stopScanner();
  sh.classList.remove("re"); sh.classList.add("out");
  setTimeout(() => {
    const done = S.sheet && S.sheet.done ? S.sheet.trx : null;
    S.sheet = null; S.upd = null; renderSheet();
    if (done) { S.hl = done; render(); refresh(); }
  }, 240);
}
const sync = () => { const a = document.getElementById("f1"), b = document.getElementById("f2"); if (a) S.sheet.v = a.value.trim(); if (b) S.sheet.a = b.value; };
function pick(c) { hap(); sync(); S.sheet.ch = c; S.sheet.err = ""; renderSheet(); }
function pickNum(p) { hap(); const a = document.getElementById("f1"), b = document.getElementById("f2"); if (a) a.value = p; S.sheet.v = p; if (b) b.focus(); }
function shakeBox() { const b = document.querySelector("#sheet .box"); if (!b) return; b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake"); hap("HEAVY"); }
const setBusy = (on) => document.querySelectorAll("#sheet .btn:not(.l)").forEach(b => b.classList.toggle("ld", on));
const wrapDlg = (s, inner) => `<div class="sh dlg${s.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div><div class="stp${s.fxs ? " go" : ""}">${inner}</div></div></div>`;
const wrapSheet = wrapDlg;
const wrapPage = (s, title, back, body, foot) => `<div class="sh pgx${s.fresh ? "" : " re"}"><div class="box"><div class="ph"><button class="pb" aria-label="${t("back")}" onclick="${back}">${ic("back")}</button><b>${title}</b><img src="icons/logo.png" alt=""></div><div class="pbody"><div class="stp${s.fxs ? " go" : ""}">${body}</div></div>${foot ? `<div class="pfoot">${foot}</div>` : ""}</div></div>`;
const feeOf = (c, amt) => Math.round((c.fee || 0) * amt * 100) / 100;
const tickSvg = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const PERSON = ["send", "pay", "cash"];
function sheetHtml() {
  const s = S.sheet, c = cfg(s.id), d = c.d || -1;
  if (s.done) {
    const rows = [];
    if (s.v) rows.push([t(s.id === "cash" ? "ag" : PERSON.includes(s.id) ? "sendto" : c.f), (s.rn ? esc(s.rn) + " · " : "") + esc(s.v)]);
    if (s.ch) rows.push([t("svc"), t(s.ch)]);
    rows.push([t("amtl"), money(s.amt)]);
    if (s.fee) rows.push([t("feel"), money(s.fee)]);
    rows.push([t("trx"), esc(s.trx)], [t("at"), fmt(s.at)]);
    return wrapPage(s, t(s.id), "closeS()", `<div class="ok"><div class="tick d">${tickSvg}</div><h2>${t("done")}</h2><div class="amt">${money(s.total)}</div><div class="sv">${t(s.id)}</div></div><div class="pcard"><div class="dl">${rows.map(r => `<div><span>${r[0]}</span><b>${r[1]}</b></div>`).join("")}</div></div>`, `<button class="btn" onclick="closeS()">${t("ok")}</button>`);
  }
  if (s.step === 2) {
    const amt = parseFloat(s.a), fee = feeOf(c, amt), tot = amt + (d < 0 ? fee : 0), person = PERSON.includes(s.id);
    const who = person
      ? `<div class="rcp">${avatar(s.rn, s.v)}<div><b>${esc(s.rn || s.v)}</b><span>${esc(s.v)}</span></div></div>`
      : `<div class="rcp">${tile(s.id)}<div><b>${t(s.id)}</b><span>${s.ch ? t(s.ch) : ""}</span></div></div>`;
    const rows = (!person && s.v ? `<div><span>${t(c.f)}</span><b>${esc(s.v)}</b></div>` : "") + (person && s.id === "cash" ? `<div><span>${t("svc")}</span><b>${t("cash")}</b></div>` : "")
      + `<div><span>${t("amtl")}</span><b>${money(amt)}</b></div>${fee ? `<div><span>${t("feel")}</span><b>${money(fee)}</b></div>` : ""}<div><span>${t("total")}</span><b>${money(tot)}</b></div>`;
    return wrapPage(s, t(s.id), "backStep()", `<div class="pcard">${who}<div class="sm">${rows}</div></div>
      ${TEST_MODE && s.id === "cash" ? `<p class="tw" style="margin-top:8px">${t("cashw")}</p>` : ""}
      <div class="pcard"><div class="lb">${t("pin")}</div><div class="fld pin"><input id="f3" type="password" inputmode="numeric" maxlength="6" placeholder="••••••"></div><div class="err">${esc(s.err)}</div></div>`,
      `<button class="btn" onclick="confirmTx()">${t("confirm")}</button>`);
  }
  const rc = PERSON.includes(s.id) ? recents() : [];
  const first1 = (c.ch ? `<div class="chs">${c.ch.map(x => `<button class="${s.ch === x ? "on" : ""}" onclick="pick('${x}')">${t(x)}</button>`).join("")}</div>` : "")
    + (c.k ? `<div class="lb" style="${c.ch ? "margin-top:14px" : ""}">${t(c.f)}</div><div class="fld">${c.k === "n" ? ic("srch") : ""}<input id="f1" ${c.k === "n" ? `inputmode="numeric" maxlength="11" placeholder="01XXXXXXXXX" oninput="this.value=this.value.replace(/\\D/g,'')"` : `placeholder="${t(c.f)}"`} value="${esc(s.v)}"></div>` : "")
    + (rc.length ? `<div class="rl"><p>${t("rcnt")}</p>${rc.map(f => `<div class="rr" onclick="pickNum('${esc(f[0])}')">${avatar(f[1], f[0])}<div><b>${esc(f[1])}</b><span>${esc(f[0])}</span></div></div>`).join("")}</div>` : "");
  return wrapPage(s, t(s.id), "closeS()", (first1 ? `<div class="pcard">${first1}</div>` : "")
    + `<div class="pcard"><div class="lb">${t("amt")}</div><div class="fld big"><u>৳</u><input id="f2" inputmode="decimal" placeholder="0" value="${esc(s.a)}" oninput="this.value=this.value.replace(/[^0-9.]/g,'')"></div><div class="err">${esc(s.err)}</div></div>`,
    `<button class="btn" onclick="nextStep()">${t("next")}${NXT}</button>`);
}
function updHtml() {
  const u = S.upd;
  return `<div class="sh dlg${u.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div><div class="ok"><div class="tick">${ic("up")}</div><h2>${t("upn")}</h2><div class="amt" style="font-size:22px">v${esc(u.version)}</div><div class="sv">${esc(u.notes || "")}</div></div><button class="btn" onclick="applyUpdate()">${t("upb")}</button><button class="btn l" onclick="closeS()">${t("upl")}</button></div></div>`;
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
  S.sheet = {id: s.id, done: true, total: d < 0 ? amt + fee : amt, amt, fee, trx, v: s.v, rn: s.rn, ch: s.ch, at: new Date().toISOString(), fresh: false, fxs: true};
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
function openQR(tab) { hap(); S.sheet = {id: "qrs", tab: tab || "scan", fresh: true, fxs: false, torch: false, denied: false}; renderSheet(); if (S.sheet.tab === "scan") startScanner(); }
function qTab(tb) { hap(); if (!S.sheet || S.sheet.tab === tb) return; stopScanner(); S.sheet.tab = tb; S.sheet.fxs = true; S.sheet.denied = false; S.sheet.torch = false; renderSheet(); if (tb === "scan") startScanner(); }
function qrHtml() {
  const s = S.sheet, m = S.me || {};
  if (s.tab === "scan") return scanHtml(s);
  return wrapPage(s, t("myqr"), "closeS()", `<div class="qpage"><div class="qcard"><div class="qav">${first(m.name)}</div><b>${esc(m.name)}</b><span>${esc(m.phone)} ${agBadge()}</span><div class="qwrap">${qrSvg("funpay:" + m.phone)}</div><small>${t("qrhint")}</small></div></div>`,
    `<button class="btn" onclick="qTab('scan')">${ic("qr")}${t("scanqr")}</button>`);
}
/* ---------- স্ক্যানার: ক্যামেরা পেছনে, সুন্দর ফ্রেম সামনে ---------- */
function scanHtml(s) {
  const nat = !!(cap().BarcodeScanner && cap().BarcodeScanner.startScan);
  return `<div class="sh scanx${s.fresh ? "" : " re"}"><div class="box">
    <div class="sct"><button class="pb" aria-label="${t("back")}" onclick="closeS()">${ic("back")}</button><b>${t("scanqr")}</b><button class="pb tq${s.torch ? " on" : ""}" aria-label="Flash" onclick="toggleTorch()">${ic("bolt")}</button></div>
    <div class="scm"><div class="scf" id="scf"><i class="k1"></i><i class="k2"></i><i class="k3"></i><i class="k4"></i><span class="sl"></span><div class="sck">${tickSvg}</div></div>
      <p class="scp">${t(s.denied ? "camd" : nat ? "sc1" : "noscan")}</p>
      ${s.denied ? `<button class="pill" onclick="askCam()">${t("camb")}</button><button class="pill ghost" onclick="scanQRGoogle()">${t("gscan")}</button>` : ""}</div>
    <div class="scb"><div class="sctabs"><button class="on">${t("scn3")}</button><button onclick="qTab('my')">${t("myqr")}</button></div><button class="lnk2" onclick="manualSend()">${t("scn2")}</button></div></div></div>`;
}
let scanLis = null, scanOn = false, scanDone = false, scanBad = 0;
async function stopScanner() {
  document.documentElement.classList.remove("scanning", "camon");
  const B = cap().BarcodeScanner, l = scanLis, was = scanOn;
  scanLis = null; scanOn = false;
  if (l) { try { await l.remove(); } catch (e) {} }
  if (was && B) { try { await B.stopScan(); } catch (e) {} }
}
async function startScanner() {
  const B = cap().BarcodeScanner, s = S.sheet;
  if (!B || !B.startScan || !s || s.id !== "qrs" || s.tab !== "scan") return;
  try {
    let p = await B.checkPermissions();
    if (p.camera !== "granted") p = await B.requestPermissions();
    if (S.sheet !== s || s.tab !== "scan") return;
    if (p.camera !== "granted") { s.denied = true; renderSheet(); return; }
    scanDone = false;
    document.documentElement.classList.add("scanning");
    scanLis = await B.addListener("barcodesScanned", onScanned);
    scanOn = true;
    await B.startScan({formats: ["QR_CODE"]});
    setTimeout(() => { if (scanOn) document.documentElement.classList.add("camon"); }, 250);
  } catch (e) {
    console.log(e); await stopScanner();
    if (S.sheet === s && s.tab === "scan") { s.denied = true; renderSheet(); }
  }
}
function onScanned(ev) {
  const b = ev && ev.barcodes && ev.barcodes[0], v = b && (b.rawValue || b.displayValue), s = S.sheet;
  if (!v || !s || s.id !== "qrs" || scanDone) return;
  if (!/^funpay:01\d{9}$/i.test(String(v).trim())) { if (Date.now() - scanBad > 2200) { scanBad = Date.now(); toast(t("badqr")); hap("HEAVY"); } return; }
  scanDone = true; hap("MEDIUM");
  const f = document.getElementById("scf"); if (f) f.classList.add("hit");
  setTimeout(async () => { await stopScanner(); if (S.sheet === s) { S.sheet = null; renderSheet(); } handleScan(v); }, 450);
}
async function toggleTorch() {
  hap(); const B = cap().BarcodeScanner, s = S.sheet;
  if (!B || !scanOn || !s) { toast(t("noscan")); return; }
  try { if (s.torch) await B.disableTorch(); else await B.enableTorch(); s.torch = !s.torch; const b = document.querySelector(".tq"); if (b) b.classList.toggle("on", s.torch); }
  catch (e) { toast(t("errg")); }
}
async function askCam() {
  hap(); const B = cap().BarcodeScanner; if (!B) return;
  try { const p = await B.requestPermissions(); if (p.camera === "granted" && S.sheet) { S.sheet.denied = false; renderSheet(); startScanner(); return; } } catch (e) {}
  try { await B.openSettings(); } catch (e) {}
}
function manualSend() { stopScanner(); openS("send"); }
async function scanQRGoogle() {
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
}, 5500);
/* অ্যান্ড্রয়েড ব্যাক বাটন, স্ট্যাটাস বার, ব্যাকগ্রাউন্ডে ১ মিনিটের বেশি থাকলে অটো লক */
try {
  const A = cap().App;
  let bgAt = 0;
  if (A) {
    A.addListener("backButton", () => {
      if (S.sheet && !S.sheet.done && S.sheet.step === 2 && !S.upd) { backStep(); return; }
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
  if (SB) { SB.setStyle({style: "DARK"}); SB.setBackgroundColor({color: "#e2136e"}); }
} catch (e) {}
