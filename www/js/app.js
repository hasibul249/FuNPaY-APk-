/* v2.47 — কিবোর্ড নিজে খুলবে না: ঘরে ইউজারের আঙুল/টাইপ ছাড়া কোড দিয়ে focus() করলে ব্লক (ট্যাপের সাথে সাথের focus চলে) */
(function () {
  try {
    let gt = 0; const mark = () => { gt = performance.now(); }; window.__fpOkFocus = mark;
    ["pointerdown", "touchstart", "touchend", "mousedown", "click", "keydown", "keyup", "beforeinput", "input"].forEach((e) => document.addEventListener(e, mark, true));
    const of = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function () {
      const n = this.tagName;
      const kpf = n === "INPUT" && this.getAttribute && this.getAttribute("data-kp") === "1";
      if ((n === "INPUT" || n === "TEXTAREA") && (!this.readOnly || kpf) && performance.now() - gt > 150) return;
      return of.apply(this, arguments);
    };
  } catch (e) {}
})();
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
P.fp = '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>';
P.lock = '<rect x="5" y="11" width="14" height="10" rx="2.5" fill="currentColor"/><path d="M8 11V8a4 4 0 018 0v3" fill="none"/><circle cx="12" cy="16" r="1.5" fill="#fff" stroke="none"/>';
P.ok2 = '<circle cx="12" cy="12" r="9.5"/><path d="M7.5 12.4l3 3 6-6.4"/>';
P.copy = '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 012-2h9"/>';
P.shr = '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>';
P.eye = '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'; P.eyeo = '<path d="M3 3l18 18M10.6 6.2A9.6 9.6 0 0112 6c6 0 10 6 10 6a17 17 0 01-3.2 3.8M6.5 7.6C3.9 9.3 2 12 2 12s4 7 10 7c1.5 0 2.9-.4 4.1-1"/>';
/* v2.49 — ফিঙ্গারপ্রিন্ট আইকন (বিকাশের মতো): চৌকো ফ্রেমের ভেতরে মুখ ↔ আঙুলের ছাপ নিজে নিজে বদলায়; ফ্রেমের কোণ ছড়িয়ে আবার জোড়া লাগে।
   সব জায়গায় ic("fp") এই একটাই আইকন দেয়। */
const FPX = '<svg class="i fpx" viewBox="0 0 32 32" aria-hidden="true"><g class="fc"><path class="c1" d="M4 11V8.5A4.5 4.5 0 0 1 8.5 4H11"/><path class="c2" d="M21 4h2.5A4.5 4.5 0 0 1 28 8.5V11"/><path class="c3" d="M28 21v2.5a4.5 4.5 0 0 1-4.5 4.5H21"/><path class="c4" d="M11 28H8.5A4.5 4.5 0 0 1 4 23.5V21"/></g><g class="ff"><path d="M12.2 12.4v2.6M19.8 12.4v2.6M16 12.2v5.2h-1.6M11.7 20.9c2.6 2.5 6 2.5 8.6 0"/></g><g class="fg"><g transform="translate(16 16) scale(.6) translate(-12 -12)">' + P.fp + '</g></g></svg>';
const ic = (k) => k === "fp" ? FPX : `<svg class="i" viewBox="0 0 24 24">${P[k]}</svg>`;
Object.assign(P, {
  filt:'<path d="M4 6h16M7 12h10M10 18h4"/>', stmt:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  lim:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', help:'<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>', ref:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5M17 9v6M14 12h6"/>',
  back:'<path d="M15 5l-7 7 7 7"/>', bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  mine:'<path d="M4 8a2 2 0 012-2h11v3"/><rect x="3" y="8" width="18" height="12" rx="3"/><path d="M16.5 14h1.6"/>'
});
Object.assign(P, {
  cam2:'<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"/><circle cx="12" cy="13" r="3.5"/>',
  gal:'<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"/>'
});

/* সার্ভিস তালিকা: f=ফিল্ডের লেবেল, k=n(11 ডিজিট নম্বর)/t(লেখা), ch=অপশন, fee=চার্জ, d=+1 হলে টাকা আসে */
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
  pick:"একটি বেছে নিন",badn:"নম্বর ঠিক নয় (01XXXXXXXXX)",badt:"তথ্য দিন",bada:"টাকার পরিমাণ দিন",low:"পর্যাপ্ত ব্যালেন্স নেই",wp:"PIN ভুল, আবার চেষ্টা করুন",
  done:"সফল হয়েছে!",trx:"ট্রানজেকশন আইডি",ok:"ঠিক আছে",sendto:"কাকে",svc:"সার্ভিস",amtl:"পরিমাণ",feel:"চার্জ",total:"মোট",
  lp:"আপনার 6 ডিজিট PIN দিন",tag:"আপনার টাকা, আপনার নিয়ন্ত্রণ",
  o1:"প্রথম অ্যাড মানিতে 5% ক্যাশব্যাক",o2:"রিচার্জে 10 টাকা বোনাস",o3:"বন্ধুকে ইনভাইট করুন, 50 টাকা পান",g1:"এখনই নিন",g2:"রিচার্জ করুন",g3:"ইনভাইট",
  n1:"অ্যাড মানিতে ক্যাশব্যাক চলছে!",n2:"রিচার্জে বিশেষ বোনাস",n3:"বন্ধু ইনভাইটে 50 টাকা",new:"নতুন",
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
 neterr:"ইন্টারনেট নেই, আবার চেষ্টা করুন", errg:"কিছু ভুল হয়েছে", exists:"এই নম্বরে আগেই অ্যাকাউন্ট খোলা আছে", soon:"এই সার্ভিস শীঘ্রই আসছে", myqr:"আমার QR", scanqr:"QR স্ক্যান করুন",
 scanh:"অন্যের QR স্ক্যান করে টাকা পাঠান বা এজেন্টের কাছে ক্যাশ আউট করুন", qrhint:"এই QR কোড স্ক্যান করার মাধ্যমে অন্যরা আপনাকে পেমেন্ট করতে পারবে।", noscan:"স্ক্যানার শুধু অ্যাপের ভেতরে চলে", badqr:"এটি FuNPaY এর QR নয়",
 got:"পেয়েছেন", newacc:"নতুন অ্যাকাউন্ট", haveacc:"অ্যাকাউন্ট আছে? লগইন করুন", other:"অন্য নম্বর", pin4:"6 ডিজিট PIN", reg:"অ্যাকাউন্ট খুলুন", setup:"ব্যাকএন্ড সেট করা নেই। README দেখে SUPA_URL আর SUPA_KEY বসান।",
 rcv:"প্রাপক", ep:"আপনার মোবাইল নম্বর", cont:"চালিয়ে যান", cobad:"ক্যাশ আউট সর্বনিম্ন 50 টাকা", addmax:"একবারে সর্বোচ্চ 5,000 টাকা", badpin:"PIN 6 ডিজিটের হতে হবে", back2:"স্বাগতম, আবার",
 conf1:"Supabase এ Confirm email বন্ধ করুন", lp:"আপনার 6 ডিজিট PIN দিন", dm:"", cashw:"", bioT:"ফিঙ্গারপ্রিন্ট / স্ক্রিন লক দিয়ে আনলক", bioD:"পরের বার PIN-এর বদলে আঙুলের ছাপ বা ফোনের লক দিয়ে অ্যাপ খুলতে পারবেন। PIN-ও কাজ করবে।", bioY:"চালু করুন", bioR:"FuNPaY আনলক করুন", bioOn:"আনলক চালু হয়েছে", on:"চালু", off:"বন্ধ", myqrs:"নিজের QR", rcvd:"প্রাপক"});
Object.assign(T.en, {recv:"Money Received", cashin:"Customer Cash Out", agent:"Agent", nouser:"No FuNPaY account with this number", noag:"This is not an agent number", self:"You can't use your own number",
 neterr:"No internet, try again", errg:"Something went wrong", exists:"An account already exists for this number", soon:"This service is coming soon", myqr:"My QR", scanqr:"Scan QR",
 scanh:"Scan someone's QR to send money, or cash out at an agent", qrhint:"Others can pay you by scanning this QR code.", noscan:"The scanner only works inside the app", badqr:"This is not a FuNPaY QR",
 got:"received", newacc:"New account", haveacc:"Have an account? Log in", other:"Other number", pin4:"6-digit PIN", reg:"Create account", setup:"Backend is not set up. Follow the README and fill in SUPA_URL and SUPA_KEY.",
 rcv:"Recipient", ep:"Your mobile number", cont:"Continue", cobad:"Minimum cash out is ৳50", addmax:"Max ৳5,000 at a time", badpin:"PIN must be 4 digits", back2:"Welcome back",
 conf1:"Turn off Confirm email in Supabase", lp:"Enter your 6-digit PIN", dm:"", cashw:"", bioT:"Unlock with fingerprint / screen lock", bioD:"Next time open the app with your fingerprint or phone lock instead of the PIN. The PIN still works.", bioY:"Turn on", bioR:"Unlock FuNPaY", bioOn:"Unlock enabled", on:"On", off:"Off", myqrs:"Your QR", rcvd:"Recipient"});

Object.assign(T.bn, {lgreg:"লগ ইন / রেজিস্ট্রেশন", phh:"মোবাইল নম্বর দিয়ে লগ ইন / রেজিস্ট্রেশন করুন", cc:"দেশের কোড", bd:"বাংলাদেশ", mob:"মোবাইল নম্বর", terms:"আপনি নিয়ম ও শর্তসমূহে সম্মত আছেন", ft1:"নিরাপদ PIN", ft2:"ফিঙ্গারপ্রিন্ট", ft3:"QR পেমেন্ট", wel:"স্বাগতম", regh:"নতুন অ্যাকাউন্ট খুলুন", regs:"নাম, মোবাইল নম্বর আর 6 ডিজিট PIN দিন"});
Object.assign(T.en, {lgreg:"Log in / Register", phh:"Log in / Register with your mobile number", cc:"Country code", bd:"Bangladesh", mob:"Mobile number", terms:"You agree to the terms and conditions", ft1:"Secure PIN", ft2:"Fingerprint", ft3:"QR payments", wel:"Welcome", regh:"Create a new account", regs:"Enter your name, mobile number and a 6-digit PIN"});
Object.assign(T.bn, {rcnt:"সাম্প্রতিক", sc1:"স্ক্যান করতে ফ্রেমের ভেতরে QR কোড রাখুন", scn2:"নম্বর দিয়ে পাঠান", camno:"ক্যামেরার অনুমতি দরকার", camd:"QR স্ক্যান করতে FuNPaY কে ক্যামেরা ব্যবহারের অনুমতি দিন।", camb:"অনুমতি দিন", gscan:"অন্য স্ক্যানার দিয়ে খুলুন", sec1:"লেনদেনের ফিচার সেট করুন", sec2:"আপনার পছন্দ বেছে নিন", sec3:"অ্যাকাউন্ট ম্যানেজ করুন", at:"সময়", blc:"ব্যালেন্স", pr:"আমার প্রোফাইল", scn3:"স্ক্যান"});
Object.assign(T.en, {rcnt:"Recent", sc1:"Place the QR code inside the frame", scn2:"Send using a number", camno:"Camera permission needed", camd:"Allow FuNPaY to use the camera to scan QR codes.", camb:"Allow", gscan:"Open another scanner", sec1:"Set up transaction features", sec2:"Choose your preference", sec3:"Manage account", at:"Time", blc:"Balance", pr:"My profile", scn3:"Scan"});
Object.assign(T.bn, {bt1:"অ্যাড মানি অফার", bt2:"রিচার্জ অফার", bt3:"রেফার অফার", o1:"প্রথম অ্যাড মানিতে 5% ক্যাশব্যাক", o2:"মোবাইল রিচার্জে 10 টাকা বোনাস", o3:"বন্ধুকে ইনভাইট করুন, পান 50 টাকা", os1:"ব্যাংক বা কার্ড থেকে টাকা যোগ করুন", os2:"যেকোনো অপারেটরে, প্রতি রিচার্জে", os3:"বন্ধু প্রথম লেনদেন করলেই", g1:"অ্যাড মানি", g2:"রিচার্জ করুন", g3:"ইনভাইট"});
Object.assign(T.en, {bt1:"ADD MONEY OFFER", bt2:"RECHARGE OFFER", bt3:"REFER OFFER", o1:"5% cashback on your first Add Money", o2:"৳10 bonus on every recharge", o3:"Invite a friend and get ৳50", os1:"Add money from a bank or card", os2:"On any operator, every recharge", os3:"When your friend makes a first transfer", g1:"Add Money", g2:"Recharge", g3:"Invite"});

Object.assign(T.bn, {menu:"FuNPaY মেনু", stmt:"স্টেটমেন্ট", lim:"লিমিট", help:"গ্রাহক সেবা", about:"FuNPaY নিয়ে জানুন", refer:"রেফার করুন", lock:"অ্যাপ লক করুন", logout:"লগ আউট", recv:"মানি রিসিভ", oth:"অন্যান্য", ftt:"ফিল্টার করুন", close:"বন্ধ", apply:"প্রয়োগ করুন", reset:"রিসেট", detail:"লেনদেনের বিবরণ", stat:"অবস্থা", okk:"সফল", limt:"লেনদেনের লিমিট", l1:"সেন্ড মানি / পেমেন্ট", l1v:"প্রতিবার 1 – 1,00,000 টাকা", l2:"ক্যাশ আউট", l2v:"প্রতিবার 50 – 50,000 টাকা, চার্জ 1.85%", l3:"অ্যাড মানি", l3v:"প্রতিবার সর্বোচ্চ 5,000 টাকা", l4:"সার্ভিস বিল", l4v:"প্রতিবার 1 – 1,00,000 টাকা", abt:"FuNPaY একটি মোবাইল ওয়ালেট অ্যাপ।", hlp:"সাহায্য লাগলে অ্যাপের ডেভেলপারের সাথে যোগাযোগ করুন। শীঘ্রই লাইভ সাপোর্ট আসছে।", invite:"FuNPaY অ্যাপে আমার নম্বরে টাকা পাঠান: ", nt2:"নোটিফিকেশন", fnone:"সব দেখাচ্ছে"});
Object.assign(T.en, {menu:"FuNPaY Menu", stmt:"Statement", lim:"Limits", help:"Customer Service", about:"About FuNPaY", refer:"Refer a friend", lock:"Lock app", logout:"Log out", recv:"Money Received", oth:"Others", ftt:"Filter", close:"Close", apply:"Apply", reset:"Reset", detail:"Transaction details", stat:"Status", okk:"Successful", limt:"Transaction limits", l1:"Send Money / Payment", l1v:"৳1 – ৳1,00,000 per transaction", l2:"Cash Out", l2v:"৳50 – ৳50,000 per transaction, 1.85% fee", l3:"Add Money", l3v:"Up to ৳5,000 at a time", l4:"Service bills", l4v:"৳1 – ৳1,00,000 per transaction", abt:"FuNPaY is a mobile wallet app.", hlp:"For help, contact the app developer. Live support is coming soon.", invite:"Send money to my number on the FuNPaY app: ", nt2:"Notifications", fnone:"Showing all"});
const BART = [
  '<circle cx="32" cy="32" r="22"/><path d="M23 41L41 23"/><circle cx="24.5" cy="24.5" r="3.6"/><circle cx="39.5" cy="39.5" r="3.6"/>',
  '<rect x="19" y="6" width="26" height="52" rx="6"/><path d="M28 50h8"/><path d="M34 15l-6 11h8l-6 12"/>',
  '<rect x="11" y="28" width="42" height="27" rx="4"/><rect x="8" y="19" width="48" height="10" rx="3"/><path d="M32 19v36"/><path d="M32 19c-3-9-14-9-14-3 0 4 8 3 14 3zM32 19c3-9 14-9 14-3 0 4-8 3-14 3z"/>'
];
const BTX = [["bt1", "os1", "g1", "add"], ["bt2", "os2", "g2", "rech"], ["bt3", "os3", "g3", ""]];
const CHV = '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>';
const banner = (i, w) => `<div class="bn b${i}${w ? " w" : ""}" onclick="${BTX[i][3] ? `openS('${BTX[i][3]}')` : "hap();toast(t('soon'))"}"><div class="bt"><small>${t(BTX[i][0])}</small><b>${t("o" + (i + 1))}</b><span>${t(BTX[i][2])}${CHV}</span></div><svg class="bv" viewBox="0 0 64 64" aria-hidden="true">${BART[i]}</svg></div>`;

Object.assign(T.bn, {regs:"মোবাইল নম্বর আর 6 ডিজিট PIN দিন", neterr:"ইন্টারনেট সংযোগে সমস্যা, আবার চেষ্টা করুন", upfail:"আপডেট চেক করা যায়নি, আবার চেষ্টা করুন", sess:"সেশন শেষ হয়েছে, আবার লগইন করুন", offl:"ইন্টারনেট সংযোগ নেই", retry:"আবার চেষ্টা", ctest:"কানেকশন টেস্ট", wait:"অপেক্ষা করুন", avl:"উপলব্ধ ব্যালেন্স", dlfail:"আপডেট নামানো যায়নি", onlyapp:"আপডেট শুধু অ্যাপের ভেতরে হয়", trxchk:"লেনদেন হয়েছে কিনা ইনবক্সে দেখে নিন", noup:"আপডেট সার্ভার সেট করা নেই"});
Object.assign(T.en, {regs:"Enter your mobile number and a 6-digit PIN", neterr:"Connection problem, please try again", upfail:"Could not check for updates, try again", sess:"Session expired, please log in again", offl:"No internet connection", retry:"Try again", ctest:"Connection test", wait:"Please wait", avl:"Available balance", dlfail:"Could not download the update", onlyapp:"Updates only work inside the app", trxchk:"check Inbox to see if it went through", badpin:"PIN must be 6 digits"});
Object.assign(T.bn, {hold:"ট্যাপ করে ধরে রাখুন", holdh:"নিশ্চিত করতে নিচের বাটনটি ধরে রাখুন", share:"শেয়ার", copied:"কপি হয়েছে", chkn:"নম্বরটি সঠিক কিনা আরেকবার দেখে নিন", bioh:"আগে PIN দিয়ে লগইন করুন, তারপর ফিঙ্গারপ্রিন্ট চালু করতে পারবেন", upready:"আপডেট নামানো হয়েছে, চালু হচ্ছে…", nbl:"নতুন ব্যালেন্স"});
Object.assign(T.en, {hold:"Tap and hold", holdh:"Press and hold the button below to confirm", share:"Share", copied:"Copied", chkn:"Please double-check the number", bioh:"Log in with your PIN first, then you can turn on fingerprint", upready:"Update downloaded, restarting…", nbl:"New balance"});
Object.assign(T.bn, {nochg:"কোনো চার্জ নেই", accno:"অ্যাকাউন্ট নাম্বার", pinl:"PIN", pinph:"6 ডিজিটের PIN দিন", gm:"শুভ সকাল", ga:"শুভ দুপুর", ge:"শুভ বিকাল", gn:"শুভ রাত্রি", fpuse:"ফিঙ্গারপ্রিন্ট দিয়ে আনলক", tapp:"PIN দিতে ঘরগুলোতে ট্যাপ করুন",
 ph1:"প্রোফাইল ছবি", phc:"ক্যামেরা দিয়ে ছবি তুলুন", phg:"গ্যালারি থেকে বাছুন", phd:"ছবি সরান", phok:"প্রোফাইল ছবি বদলেছে", phrm:"প্রোফাইল ছবি সরানো হয়েছে",
 sname:"নাম বা নম্বর নিন", sag:"এজেন্টের নম্বর বা নাম", smr:"মার্চেন্টের নম্বর বা নাম", qrtap:"QR কোড স্ক্যান করতে ট্যাপ করুন", tnum:"নম্বর লিখুন", atm:"এটিএম",
 lagent:"শেষ করে করা এজেন্ট", lpay:"শেষ করে করা পেমেন্ট", noag2:"আপনার কোনো শেষ করে করা এজেন্ট নেই", nopay2:"আপনার কোনো শেষ করে করা পেমেন্ট নেই", nosend2:"এখনো কাউকে টাকা পাঠাননি। উপরে নম্বর লিখে শুরু করুন",
 go2:"এগিয়ে যান", pickop:"অপারেটর বেছে নিন", cont2:"এই নম্বরে এগিয়ে যান", lrcv:"প্রাপক", lag:"এজেন্ট", lmr:"মার্চেন্ট", nomatch:"কিছু পাওয়া যায়নি"});
Object.assign(T.en, {nochg:"No charge", accno:"Account number", pinl:"PIN", pinph:"Enter your 6-digit PIN", gm:"Good morning", ga:"Good afternoon", ge:"Good evening", gn:"Good night", fpuse:"Unlock with fingerprint", tapp:"Tap the boxes to enter your PIN",
 ph1:"Profile photo", phc:"Take a photo", phg:"Choose from gallery", phd:"Remove photo", phok:"Profile photo updated", phrm:"Profile photo removed",
 sname:"Enter name or number", sag:"Agent number or name", smr:"Merchant number or name", qrtap:"Tap to scan a QR code", tnum:"Enter number", atm:"ATM",
 lagent:"Recent agents", lpay:"Recent payments", noag2:"You have no recent agents", nopay2:"You have no recent payments", nosend2:"You haven't sent money to anyone yet. Enter a number above to start",
 go2:"Proceed", pickop:"Choose operator", cont2:"Continue with this number", lrcv:"Recipient", lag:"Agent", lmr:"Merchant", nomatch:"Nothing found"});
Object.assign(T.bn, {noagn:"এই নম্বরে কোনো এজেন্ট নেই", nomrc:"এই নম্বরে কোনো পেমেন্ট অ্যাকাউন্ট (মার্চেন্ট) নেই", pin2:"PIN আবার দিন", pinmm:"দুটি PIN মিলছে না", nmreq:"আপনার নাম দিন", nmph:"যেমন: রহিম উদ্দিন", reg2:"এই নম্বরে এখনো অ্যাকাউন্ট নেই। নাম ও 6 ডিজিট PIN দিয়ে নতুন অ্যাকাউন্ট খুলুন",
 snd:"প্রেরক", rcvr:"প্রাপক", agl:"এজেন্ট", mrc:"মার্চেন্ট", cust:"গ্রাহক", src:"মাধ্যম", opr:"অপারেটর", num2:"নম্বর", copy:"কপি", disc:"কুপন ছাড়", pay2:"পরিশোধ",
 stp:"সময়কাল", p1:"1 মাস", p3:"3 মাস", p6:"6 মাস", p12:"1 বছর", gen:"স্টেটমেন্ট তৈরি করুন", stt:"অ্যাকাউন্ট স্টেটমেন্ট", acn:"অ্যাকাউন্টের নাম", fromd:"থেকে", tod:"পর্যন্ত", tin:"মোট ক্যাশ ইন", tout:"মোট ক্যাশ আউট", tcnt:"লেনদেন", dtl:"তারিখ", trn:"বিবরণ", amc:"টাকা", nostm:"এই সময়ে কোনো লেনদেন নেই", shimg:"ছবি শেয়ার করুন", shfail:"শেয়ার করা যায়নি", gend:"তৈরি হয়েছে",
 cpn:"কুপন", cpsel:"কুপন বেছে নিন", cpnone:"আপনার কোনো কুপন নেই", cpmin:"সর্বনিম্ন", cpexp:"মেয়াদ", cpoff:"সরান", cpok:"কুপন প্রয়োগ হয়েছে", cpbad:"এই কুপন এখন ব্যবহার করা যাবে না", cpcode:"কুপন কোড", cpadd:"যোগ করুন", cpadded:"কুপন যোগ হয়েছে", cpmy:"আমার কুপন", cpna:"এই টাকায় চলবে না", cpsv:"পাবেন", cpmax:"সর্বোচ্চ", cpexh:"কুপন আগেই নেওয়া হয়েছে", cpwrong:"কুপন কোড ঠিক নয়", rcn:"রিসিট"});
Object.assign(T.en, {noagn:"No agent with this number", nomrc:"No payment (merchant) account with this number", pin2:"Confirm PIN", pinmm:"The two PINs do not match", nmreq:"Enter your name", nmph:"e.g. Rahim Uddin", reg2:"There is no account with this number yet. Enter your name and a 6-digit PIN to create one",
 snd:"Sender", rcvr:"Recipient", agl:"Agent", mrc:"Merchant", cust:"Customer", src:"Source", opr:"Operator", num2:"Number", copy:"Copy", disc:"Coupon discount", pay2:"Paid",
 stp:"Period", p1:"1 month", p3:"3 months", p6:"6 months", p12:"1 year", gen:"Generate statement", stt:"Account Statement", acn:"Account name", fromd:"From", tod:"To", tin:"Total cash in", tout:"Total cash out", tcnt:"Transactions", dtl:"Date", trn:"Details", amc:"Amount", nostm:"No transactions in this period", shimg:"Share as image", shfail:"Could not share", gend:"Generated",
 cpn:"Coupon", cpsel:"Choose a coupon", cpnone:"You have no coupons", cpmin:"Min.", cpexp:"Expires", cpoff:"Remove", cpok:"Coupon applied", cpbad:"This coupon can't be used now", cpcode:"Coupon code", cpadd:"Add", cpadded:"Coupon added", cpmy:"My coupons", cpna:"Not valid for this amount", cpsv:"You save", cpmax:"Max", cpexh:"You already have this coupon", cpwrong:"Invalid coupon code", rcn:"Receipt"});
Object.assign(T.bn, {fail:"ব্যর্থ", nonf:"এখনো কোনো নোটিফিকেশন নেই", dbold:"ডাটাবেস আপডেট বাকি আছে, Supabase এ update-v2.13.sql চালান", newacc2:"এই নম্বরে অ্যাকাউন্ট নেই? নতুন অ্যাকাউন্ট খুলুন",
 nf_send:"আপনি {w} কে {a} পাঠিয়েছেন", nf_recv:"{w} থেকে {a} পেয়েছেন", nf_cash:"ক্যাশ আউট সফল হয়েছে: {a}", nf_cashin:"{w} আপনার কাছে {a} ক্যাশ আউট করেছেন", nf_pay:"{w} কে {a} পেমেন্ট সফল হয়েছে", nf_add:"আপনার অ্যাকাউন্টে {a} যোগ হয়েছে", nf_svc:"{w} সফল হয়েছে: {a}"});
Object.assign(T.en, {fail:"Failed", nonf:"No notifications yet", dbold:"Database update pending, run update-v2.13.sql in Supabase", newacc2:"No account for this number? Create one",
 nf_send:"You sent {a} to {w}", nf_recv:"You received {a} from {w}", nf_cash:"Cash out successful: {a}", nf_cashin:"{w} cashed out {a} with you", nf_pay:"Payment of {a} to {w} was successful", nf_add:"{a} was added to your account", nf_svc:"{w} successful: {a}"});
Object.assign(T.bn, {comm:"কমিশন", mwise:"মাস অনুযায়ী হিসাব", stpdf:"স্টেটমেন্ট PDF শেয়ার/সেভ"}); Object.assign(T.en, {comm:"Commission", mwise:"Month-wise summary", stpdf:"Share / save statement PDF"});
/* সময় অনুযায়ী শুভেচ্ছা: সকাল 5–12, দুপুর 12–4, বিকাল 4–7, রাত্রি 7–5 */
const greet = () => { const h = new Date().getHours(); return h >= 5 && h < 12 ? "Good morning" : h >= 12 && h < 16 ? "Good afternoon" : h >= 16 && h < 19 ? "Good evening" : "Good night"; }; /* শুভেচ্ছা সব সময় ইংরেজিতে */
const SPECIAL = ["qrs", "bio", "net", "flt", "menu", "trd", "inf", "pph", "stm", "cpl"];
Object.assign(T.bn, {otph:"কোড যাচাই", otps:"এই নম্বরে একটি 6 ডিজিটের কোড পাঠানো হয়েছে:", otpw:"SMS এলে Allow চাপুন, কোড নিজে বসে যাবে", otpr:"আবার কোড পাঠান", otpin:"আবার কোড পাঠান (সেকেন্ড: ", otpm:"কোড হাতে লিখুন", otpbad:"কোড ভুল হয়েছে", otpexp:"কোডের সময় শেষ, আবার কোড নিন", otpmany:"অনেকবার ভুল হয়েছে, নতুন কোড নিন", otpwait:"একটু পরে আবার চেষ্টা করুন", otplim:"অনেকবার চেষ্টা হয়েছে, পরে আবার চেষ্টা করুন", otpsms:"SMS পাঠানো যায়নি, আবার চেষ্টা করুন", otpchk:"যাচাই হচ্ছে…", otpsent:"নতুন কোড পাঠানো হয়েছে"});
Object.assign(T.en, {otph:"Verify code", otps:"A 6-digit code was sent to this number:", otpw:"Tap Allow when the SMS arrives, the code fills in by itself", otpr:"Resend code", otpin:"Resend code (seconds: ", otpm:"Type the code", otpbad:"Wrong code", otpexp:"Code expired, get a new one", otpmany:"Too many wrong tries, get a new code", otpwait:"Please try again in a moment", otplim:"Too many attempts, try again later", otpsms:"Could not send the SMS, try again", otpchk:"Verifying…", otpsent:"New code sent"});
const S = {lang:"bn", auth:false, busy:false, view:"", phone:"", name:"", me:null, uid:"", tok:"", rt:"", bal:0, tx:[], seen:0, tab:"home", seg:"t", q:"", ft:[], fq:false, more:false, pin:"", sheet:null, fx:false, hl:null, upd:null, cps:null, regPhone:"", mine:new Set(), noRpc:false, otpPhone:"", otpAt:0, otpManual:false, otpBusy:false};
try {
  const d = JSON.parse(localStorage.getItem("fp2") || "{}");
  ["lang", "phone", "name"].forEach(k => { if (d[k] !== undefined) S[k] = d[k]; });
} catch (e) {}
const save = () => { try { localStorage.setItem("fp2", JSON.stringify({lang:S.lang, phone:S.phone, name:S.name})); } catch (e) {} };

/* ---------- নেটিভ ফিচার (Capacitor প্লাগইন থাকলে কাজ করে, না থাকলে ব্রাউজারেও চলে) ---------- */
const APP_REL = "2.38"; /* অ্যাপে দেখানো রিলিজ নম্বর */
const APP_VERSION = "1.2.0"; /* GitHub বিল্ডের সময় নিজে বদলে যায় */
const OTA_URL = ""; /* GitHub বিল্ডের সময় নিজে বসে যায় */
const cap = () => (window.Capacitor && window.Capacitor.Plugins) || {};
try { const U = cap().CapacitorUpdater; if (U) U.notifyAppReady(); } catch (e) {}
function hap(s) { try { const H = cap().Haptics; if (H) H.impact({style: s || "LIGHT"}); else if (navigator.vibrate) navigator.vibrate(s === "HEAVY" ? 30 : 8); } catch (e) {} }
const newer = (a, b) => { const x = String(a).split(".").map(Number), y = String(b).split(".").map(Number); for (let i = 0; i < 3; i++) { if ((x[i] || 0) > (y[i] || 0)) return true; if ((x[i] || 0) < (y[i] || 0)) return false; } return false; };
/* ---------- নেটওয়ার্ক: টাইমআউট, রিট্রাই, আর WebView না পারলে নেটিভ HTTP ---------- */
let PREF = "web"; try { PREF = localStorage.getItem("fpvia") === "native" ? "native" : "web"; } catch (e) {}
async function rawFetch(via, url, o, ms) {
  if (via === "native") {
    const H = cap().CapacitorHttp; if (!H || !H.request) throw new Error("NONATIVE");
    let data; if (o.body) { try { data = JSON.parse(o.body); } catch (e) { data = o.body; } }
    const r = await H.request({url, method: o.method || "GET", headers: o.headers || {}, data, connectTimeout: ms, readTimeout: ms}), body = r.data;
    return {ok: r.status >= 200 && r.status < 300, status: r.status, json: async () => (typeof body === "string" ? JSON.parse(body) : body)};
  }
  const ac = typeof AbortController !== "undefined" ? new AbortController() : null, tm = ac ? setTimeout(() => ac.abort(), ms) : 0;
  try { return await fetch(url, Object.assign({}, o, ac ? {signal: ac.signal} : {})); } finally { clearTimeout(tm); }
}
function netState(ok) {
  let e = document.getElementById("offbar");
  if (ok) { if (e) e.classList.remove("on"); return; }
  if (!e) { e = document.createElement("div"); e.id = "offbar"; document.body.appendChild(e); }
  e.textContent = t("offl"); void e.offsetWidth; e.classList.add("on");
}
/* tries: GET = 3 বার, টাকার লেনদেন = 1 বার (দুবার টাকা যাওয়া ঠেকাতে কখনো নিজে নিজে রিট্রাই হয় না) */
async function netFetch(url, o = {}, tries = 3, ms = 15000) {
  const nat = !!(cap().CapacitorHttp && cap().CapacitorHttp.request);
  const order = nat ? (PREF === "native" ? ["native", "web"] : ["web", "native"]) : ["web"];
  for (let i = 0; i < tries; i++) {
    if (i) await new Promise(r => setTimeout(r, 500 * i));
    const via = order[i % order.length];
    try {
      const r = await rawFetch(via, url, o, ms);
      netState(true);
      if (via !== PREF) { PREF = via; try { localStorage.setItem("fpvia", via); } catch (e) {} }
      return r;
    } catch (e) { window.__netErr = via + ": " + String((e && (e.name + " " + e.message)) || e).slice(0, 90); }
  }
  netState(false);
  const x = new Error("NET"); x.detail = window.__netErr; throw x;
}
async function netTest() {
  hap();
  const B = String(SUPA_URL).replace(/[\s"']/g, "").replace(/\/+$/, ""), K = String(SUPA_KEY).replace(/[\s"']/g, "");
  const tests = [["Supabase", B ? B + "/auth/v1/health" : "", {apikey: K}], ["GitHub OTA", OTA_URL ? OTA_URL + "?t=" + Date.now() : "", {}]];
  S.sheet = {id: "net", lines: [[t("wait"), "…", ""]], fresh: !(S.sheet && S.sheet.id === "net"), fxs: false}; renderSheet();
  const lines = [];
  for (const [name, url, headers] of tests) {
    for (const via of ["web", "native"]) {
      if (!url) { lines.push([name, "—", ""]); break; }
      if (via === "native" && !(cap().CapacitorHttp && cap().CapacitorHttp.request)) { lines.push([name + " · native", "—", ""]); continue; }
      const t0 = Date.now();
      try { const r = await rawFetch(via, url, {headers}, 10000); lines.push([name + " · " + via, r.status + " · " + (Date.now() - t0) + "ms", r.status < 500 ? "g" : "r"]); }
      catch (e) { lines.push([name + " · " + via, String((e && (e.message || e.name)) || e).slice(0, 38), "r"]); }
    }
  }
  if (S.sheet && S.sheet.id === "net") { S.sheet.lines = lines; renderSheet(); }
}
function netHtml() {
  const s = S.sheet;
  return wrapDlg(s, `<div class="ok"><div class="tick">${ic("bolt")}</div><h2>${t("ctest")}</h2></div><div class="nl">${s.lines.map(l => `<div><span>${esc(l[0])}</span><b class="${l[2]}">${l[1] === "…" ? '<i class="lgl"></i>' : esc(l[1])}</b></div>`).join("")}</div><button class="btn" onclick="netTest()">${t("retry")}</button><button class="btn l" onclick="closeS()">${t("ok")}</button>`);
}
function toast(m) {
  document.querySelectorAll(".toast").forEach(e => e.remove());
  const e = document.createElement("div"); e.className = "toast"; e.textContent = m; document.body.appendChild(e);
  setTimeout(() => { e.classList.add("o"); setTimeout(() => e.remove(), 260); }, 2500);
}
let OTA_PEND = false;
const pkgUrls = (j) => {
  const u = j.pkg || "", m = /raw\.githubusercontent\.com\/([^/]+\/[^/]+)\/ota\/(.+)$/.exec(u);
  return m ? [u, "https://github.com/" + m[1] + "/raw/ota/" + m[2], "https://cdn.jsdelivr.net/gh/" + m[1] + "@ota/" + m[2]] : (u ? [u] : []);
};
/* নতুন কোড নামিয়ে ফোনে সেভ করে। ভাঙা কোড হলে সেভই হয় না */
async function fetchPkg(j) {
  let last = "";
  for (const url of pkgUrls(j)) {
    try {
      const r = await netFetch(url, {cache: "no-store"}, 2, 30000);
      if (!r.ok) { last = "HTTP " + r.status; continue; }
      const p = await r.json();
      if (!p || p.version !== j.version || !p.js || p.js.length < 20000) { last = "bad pkg"; continue; }
      new Function(p.js);
      localStorage.setItem("fpota", JSON.stringify({version: p.version, js: p.js, css: p.css || ""}));
      return "";
    } catch (e) { last = String((e && (e.detail || e.message)) || e).slice(0, 80); }
  }
  return last || "fail";
}
function otaReload(v) {
  try { if (sessionStorage.getItem("fpr") === v) return; sessionStorage.setItem("fpr", v); } catch (e) {}
  setTimeout(() => location.reload(), 700);
}
async function checkUpdate(manual) {
  if (manual === true) hap();
  if (!OTA_URL) { if (manual === true) toast(t("noup")); return; }
  try {
    const r = await netFetch(OTA_URL + "?t=" + Date.now(), {cache: "no-store"}, 3, 12000), j = await r.json();
    if (!newer(j.version, APP_VERSION)) { if (manual === true) toast(t("latest")); return; }
    if (!j.pkg) { if (manual === true) toast(t("upfail")); return; }
    let have = "", bad = "";
    try { have = (JSON.parse(localStorage.getItem("fpota") || "null") || {}).version || ""; bad = localStorage.getItem("fpbad") || ""; } catch (e) {}
    if (bad === j.version) { if (manual === true) toast(t("upfail")); return; }
    if (have !== j.version) {
      if (manual === true) toast(t("upn") + " · v" + j.version);
      const err = await fetchPkg(j);
      if (err) { if (manual === true) toast(t("dlfail") + " (" + err + ")"); return; }
    }
    if (manual === true || (!S.auth && !S.sheet && !S.busy && !(S.pin && S.pin.length))) { toast(t("upready")); otaReload(j.version); }
    else OTA_PEND = true;
  } catch (e) { if (manual === true) toast(t("upfail")); }
}
const applyUpdate = () => checkUpdate(true);

/* বাংলা সংখ্যা (0-9) কোথাও থাকবে না: টাইপ/পেস্ট করলেও ইংরেজি 0-9 হয়ে যায় */
const BND = "\u09e6\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef";
const en = (x) => String(x == null ? "" : x).replace(/[\u09e6-\u09ef]/g, c => String(BND.indexOf(c)));
/* শুধু ইংরেজি সংখ্যা, সর্বোচ্চ max টা (নম্বর 11, PIN 6) */
const digs = (x, max) => en(x).replace(/\D/g, "").slice(0, max);
function numIn(el) { const v = digs(el.value, 11); if (el.value !== v) el.value = v; }
/* v2.46: নম্বর পুরো হলে নিচের "পরবর্তী" বার ধূসর থেকে গোলাপি হয় (বিকাশের মতো) */
function phBar() { const i = document.getElementById("lp"), b = document.getElementById("phnext"), le = document.querySelector(".le"); if (le && le.textContent) le.textContent = ""; if (i && b) b.classList.toggle("on", isPh(digs(i.value, 11))); }
function pinOnly(el) { const v = digs(el.value, 6); if (el.value !== v) el.value = v; }
const isPh = (x) => /^01\d{9}$/.test(String(x));
const isPin = (x) => /^\d{6}$/.test(String(x));
const t = (k) => en(((window.__kyc || /^k_/.test(k)) ? (S.lang === "bn" ? (T.bn[k] || T.en[k]) : T.en[k]) : null) || T[S.lang][k] || k);
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
const esc = (s) => en(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[c]));
const USER_SVG = '<svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c.8-3.8 4-5.6 7.5-5.6s6.7 1.8 7.5 5.6"/></svg>';
const BKSP = '<svg class="i" viewBox="0 0 24 24"><path d="M21 5H9l-6 7 6 7h12zM15 9l-4 6M11 9l4 6"/></svg>';
const first = (s) => { const a = Array.from(String(s || "").trim()); return a.length ? esc(a[0].toUpperCase()) : USER_SVG; };
const fmt = (iso) => { const n = new Date(iso), p = (x) => String(x).padStart(2, "0"); return `${p(n.getDate())}/${p(n.getMonth() + 1)} ${p(n.getHours())}:${p(n.getMinutes())}`; };

/* ---------- সার্ভারের সাথে যোগাযোগ ---------- */
const MUT = /\/rpc\/(send_money|cash_out|add_test_money|pay_service|pay_merchant|claim_coupon)$/;
async function api(path, o = {}) {
  const bgq = (o.m || "GET") === "GET" || o.bg;
  if (!bgq) ldOn();
  try { return await api0(path, o); } finally { if (!bgq) ldOff(); }
}
async function api0(path, o = {}) {
  const BASE = String(SUPA_URL).replace(/[\s"']/g, "").replace(/\/+$/, ""), KEY = String(SUPA_KEY).replace(/[\s"']/g, "");
  const h = {apikey: KEY, "Content-Type": "application/json"};
  if (o.auth !== false && S.tok) h.Authorization = "Bearer " + S.tok;
  const tries = o.tries || (MUT.test(path) || path === "/auth/v1/signup" ? 1 : 3);
  const r = await netFetch(BASE + path, {method: o.m || "GET", headers: h, body: o.b ? JSON.stringify(o.b) : undefined}, tries);
  let j = null; try { j = await r.json(); } catch (e) {}
  if (r.status === 401 && o.auth !== false && S.rt && !o.retry) {
    try { await refreshTok(); return api0(path, Object.assign({}, o, {retry: true})); }
    catch (e) { if (e && e.message === "NET") throw e; lock(true); toast(t("sess")); throw new Error("SESS"); }
  }
  if (!r.ok) throw new Error((j && (j.message || j.msg || j.error_description || j.error)) || "ERR");
  return j;
}
const em = (p) => p + "@" + EMAIL_DOMAIN;
const pw = (k) => k + "@FuNPaY";
function setSess(j) { S.tok = j.access_token; S.rt = j.refresh_token; S.uid = j.user.id; }
async function signIn(phone, pin) { setSess(await api("/auth/v1/token?grant_type=password", {m: "POST", auth: false, b: {email: em(phone), password: pw(pin)}})); }
async function signUp(phone, pin, name) {
  const j = await api("/auth/v1/signup", {m: "POST", auth: false, b: {email: em(phone), password: pw(pin), data: {phone, name: name || ""}}});
  if (!j.access_token) throw new Error("CONFIRM");
  setSess(j);
}
async function refreshTok() { setSess(await api("/auth/v1/token?grant_type=refresh_token", {m: "POST", auth: false, b: {refresh_token: S.rt}})); }
function errMsg0(e) {
  const m = (e && e.message) || "";
  const sid = S.sheet && S.sheet.id;
  const k = {LOW:"low", NOUSER:sid === "cash" ? "noagn" : sid === "pay" ? "nomrc" : "nouser", NOAGENT:"noagn", SELF:"self", NET:"neterr", BADAMT:"bada", CONFIRM:"conf1", SESS:"sess", BADCPN:"cpbad", BADCODE:"cpwrong", HAVE:"cpexh", OTPBAD:"otpbad", OTPEXP:"otpexp", OTPMANY:"otpmany", OTPWAIT:"otpwait", OTPLIM:"otplim", OTPSMS:"otpsms", BADPHONE:"badn", KYC:"k_lock", BADNID:"k_badnid", NIDUSED:"k_used", UPLOAD:"k_upf", KYCSTATE:"k_state", BADDATA:"k_bad", KYCLIMIT:"k_limit"}[m];
  if (k) return t(k);
  if (/could not find the function|schema cache|PGRST202|notices_kind_check|check constraint/i.test(m)) return t("dbold");
  if (/invalid login/i.test(m)) return t("wp");
  if (/already registered|already been registered|saving new user/i.test(m)) return t("exists");
  console.log(m);
  return window.__kyc ? t("k_err2") : t("errg") + " (" + m.slice(0, 70) + ")";
}
async function loadAll(isFirst, quick) {
  const [p, x, nn] = await Promise.all([api("/rest/v1/profiles?select=*&id=eq." + S.uid, quick ? {tries: 1} : {}), api("/rest/v1/transactions?select=*&order=id.desc&limit=60", quick ? {tries: 1} : {}), api("/rest/v1/notices?select=*&order=id.desc&limit=30", {tries: 1}).catch(() => null)]);
  if (!p.length) throw new Error("ERR");
  if (Array.isArray(nn)) {
    if (isFirst) S.nmax = undefined;
    const mx = nn.length ? nn[0].id : 0;
    if (!isFirst && S.nmax !== undefined && mx > S.nmax) noticePush(nn.filter(r => r.id > S.nmax));
    S.nmax = Math.max(S.nmax || 0, mx); S.nt = nn;
  }
  const fresh = x.filter(r => r.id > S.seen && !S.mine.has(r.trx));
  S.me = p[0]; S.bal = Number(p[0].balance); S.name = p[0].name; S.tx = x;
  if (x.length) S.seen = Math.max(S.seen, x[0].id);
  if (!isFirst && fresh.length) pushNotif(fresh);
}

/* ---------- নোটিফিকেশন: প্রতিটি লেনদেনের জন্য ---------- */
const nrKey = () => "fpnr_" + (S.phone || (S.me && S.me.phone) || "");
function nrGet() { try { const v = localStorage.getItem(nrKey()); return v === null ? null : (Number(v) || 0); } catch (e) { return 0; } }
function nrSet(v) { try { localStorage.setItem(nrKey(), String(v)); } catch (e) {} }
function unreadN() { const b = nrGet(); return (b === null ? 0 : S.tx.filter(x => x.id > b && !S.mine.has(x.trx)).length) + nuN(); }
const nnKey = () => "fpnn_" + (S.phone || (S.me && S.me.phone) || "");
function nnGet() { try { const v = localStorage.getItem(nnKey()); return v === null ? null : (Number(v) || 0); } catch (e) { return 0; } }
function nnSet(v) { try { localStorage.setItem(nnKey(), String(v)); } catch (e) {} }
function nuN() { const c = nnGet(); return c === null ? 0 : (S.nt || []).filter(r => r.id > c).length; }
function noticePush(list) {
  const a = list.slice(0, 3); if (!a.length) return;
  hap("MEDIUM");
  a.forEach((n) => fpNotify({title: n.title, body: n.body, ch: "info", nid: Number(n.id) + 1000}));
  if (!document.hidden) toast(a[0].title);
}
function ntRow(n, base) {
  const un = base !== null && n.id > base, bad = n.kind === "kyc_no";
  return `<div class="tr nf${un ? " un" : ""}"><div class="ic knt${bad ? " bad" : ""}">${ic(bad ? "info" : "ok2")}</div><div class="m"><b>${esc(n.title)}</b><span>${esc(n.body)}</span></div><div class="r"><small>${fmt(n.created_at)}</small>${un ? '<i class="ud"></i>' : ""}</div></div>`;
}
const nbadge = (n) => n > 9 ? "9+" : String(n);
function ntxt(x) {
  const v = tv(x), out = x.from_id === S.uid;
  let k = "nf_svc", w = t(x.type);
  if (x.type === "send") { k = out ? "nf_send" : "nf_recv"; w = out ? (x.to_name || x.to_phone) : (x.from_name || x.from_phone); }
  else if (x.type === "pay") { k = out ? "nf_pay" : "nf_recv"; w = out ? (x.to_name || x.to_phone) : (x.from_name || x.from_phone); }
  else if (x.type === "cash") { k = out ? "nf_cash" : "nf_cashin"; w = out ? "" : (x.from_name || x.from_phone); }
  else if (x.type === "add") k = "nf_add";
  return t(k).replace("{w}", w || "").replace("{a}", money2(v.amt)).replace(/\s+:/, ":");
}
/* নতুন লেনদেন এলে: অ্যাপ খোলা থাকলে ভেতরে বার্তা, ব্যাকগ্রাউন্ডে থাকলে ফোনের নোটিফিকেশন */
function pushNotif(list) {
  const arr = list.slice(0, 3); if (!arr.length) return;
  hap("MEDIUM");
  arr.forEach((x) => fpNotify({title: t(tv(x).key), body: nfFull(x, S.bal), trx: x.trx, ch: "tx", nid: Number(x.id)}));
  if (!document.hidden) toast(ntxt(arr[0]) + (list.length > 1 ? " (+" + (list.length - 1) + ")" : ""));
}
async function askNotifPerm() {
  const LN = cap().LocalNotifications; if (!LN) return;
  try {
    let p = await LN.checkPermissions();
    if (p.display === "prompt" || p.display === "prompt-with-rationale") p = await LN.requestPermissions();
  } catch (e) {}
  nfSetup();
}
function markRead() {
  if (!S.auth) return;
  if (S.tx.length) nrSet(Math.max(nrGet() || 0, S.tx[0].id));
  if ((S.nt || []).length) nnSet(Math.max(nnGet() || 0, S.nt[0].id));
  document.querySelectorAll(".bg,.bd").forEach(e => e.remove());
  document.querySelectorAll(".nf.un").forEach(e => e.classList.remove("un"));
}
function nfRow(x, base) {
  const v = tv(x), plain = SVC.includes(x.type) || x.type === "add", out = x.from_id === S.uid, nm = out ? x.to_name : x.from_name, ph = out ? x.to_phone : x.from_phone;
  const un = base !== null && x.id > base && !S.mine.has(x.trx);
  return `<div class="tr nf${un ? " un" : ""}" onclick="openTrx('${esc(x.trx)}')">${plain ? tile(x.type) : avatar(nm, ph)}<div class="m"><b>${t(v.key)}</b><span>${esc(ntxt(x))}</span></div><div class="r"><small>${fmt(x.created_at)}</small>${un ? '<i class="ud"></i>' : ""}</div></div>`;
}
let pollT;
function startPoll() { clearInterval(pollT); pollT = setInterval(() => { if (S.auth && !S.busy && !(S.sheet && S.sheet.busy)) refresh(); }, 8000); }
async function refresh() {
  const b = S.bal, s = S.seen;
  try { await loadAll(false, true); } catch (e) { return; }
  kycSync();
  if ((b !== S.bal || s !== S.seen) && !S.sheet && !S.upd && !(document.activeElement && document.activeElement.tagName === "INPUT")) render();
}
async function enter() {
  const lp = S.lp; S.lp = ""; S.seen = 0;
  await loadAll(true);
  if (nrGet() === null) nrSet(S.tx.length ? S.tx[0].id : 0);
  if (nnGet() === null) nnSet(0);
  try { localStorage.setItem("fpreg", "1"); } catch (e) {}
  S.auth = true; S.fx = true; S.pin = ""; S.tab = "home"; S.view = "";
  render(); startPoll(); setTimeout(checkUpdate, 1500); setTimeout(askNotifPerm, 2600);
  setTimeout(() => offerBio(lp || ""), 1400);
}
function lock(auto) {
  clearInterval(pollT); stopScanner(); kycClose(true);
  if (OTA_PEND) { OTA_PEND = false; otaReload("p" + Date.now()); }
  S.auth = false; S.tok = ""; S.rt = ""; S.me = null; S.tx = []; S.sheet = null; S.upd = null; S.pin = ""; S.tab = "home";
  renderSheet(); render();
}

/* ---------- লেনদেনের তালিকা ---------- */
function tv(x) {
  const out = x.from_id === S.uid, amt = out ? Number(x.amount) + Number(x.fee) - Number(x.disc || 0) : Number(x.amount) + Number(x.comm);
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
  return `<u class="av2" style="background:${c[0]};color:${c[1]}">${first(name)}</u>`;
}
function row(x, n) {
  const v = tv(x), plain = SVC.includes(x.type) || x.type === "add";
  const out = x.from_id === S.uid, nm = out ? x.to_name : x.from_name, ph = out ? x.to_phone : x.from_phone;
  const lead = plain ? tile(x.type) : avatar(nm, ph);
  return `<div class="tr${S.hl === x.trx ? " pop" : ""}" style="--i:${Math.min(n || 0, 7)}" onclick="openTrx('${esc(x.trx)}')">${lead}<div class="m"><b>${t(v.key)}</b><span>${esc(v.who)}</span><small>TrxID: ${esc(x.trx)}</small></div><div class="r"><b class="${v.out ? "mi" : "pl"}">${v.out ? "-" : "+"}${money2(v.amt)}</b><small>${fmt(x.created_at)}</small></div></div>`;
}
/* ফিল্টার গ্রুপ (বিকাশের মতো টিক দিয়ে বাছাই) */
const FG = ["send", "recv", "rech", "cash", "pay", "bill", "add", "oth"];
const fgrp = (k) => k === "cashin" ? "cash" : FG.includes(k) ? k : "oth";
function list() {
  const q = S.q.toLowerCase();
  const r = S.tx.filter(x => { const v = tv(x); return (!q || (x.trx + v.who).toLowerCase().includes(q)) && (!S.ft.length || S.ft.includes(fgrp(v.key))); });
  return r.length ? r.map((x, i) => row(x, i)).join("") : `<p class="em">${t(S.tx.length ? "none" : "no")}</p>`;
}
function recents() {
  const m = new Map();
  S.tx.forEach(x => {
    if (!["send", "pay", "cash"].includes(x.type)) return;
    const out = x.from_id === S.uid, ph = out ? x.to_phone : x.from_phone, nm = out ? x.to_name : x.from_name;
    if (ph && !m.has(ph)) m.set(ph, nm || "");
  });
  return [...m].slice(0, 5);
}
const agBadge = () => (S.me && S.me.role === "agent") ? `<em class="ag">${t("agent")}</em>` : "";
const SCENE = '<svg class="scene" viewBox="0 0 400 150" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><path d="M0 104c70-26 130-22 200-6s130 10 200-12v64H0z" fill="#fff" opacity=".10"/><path d="M0 128c80-16 150-10 220 2s120 4 180-8v28H0z" fill="#fff" opacity=".14"/></svg>';
/* প্রোফাইল ছবি: ফোনেই সেভ থাকে (ছোট করে), নম্বর অনুযায়ী */
const phKey = () => "fpph_" + (S.phone || "");
const myPhoto = () => { try { return localStorage.getItem(phKey()) || ""; } catch (e) { return ""; } };
const myAv = (name) => { const p = myPhoto(); return p ? `<img src="${p}" alt="">` : first(name); };
function openPhoto() { hap(); S.sheet = {id: "pph", fresh: true}; renderSheet(); }
function pphHtml() {
  const s = S.sheet, o = (ico, lbl, js) => `<button class="pho" onclick="${js}">${ic(ico)}<span>${lbl}</span></button>`;
  return `<div class="sh dlg${s.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div><h3>${t("ph1")}</h3>
    <div class="phv"><div class="big">${myAv((S.me || {}).name)}</div></div>
    ${o("cam2", t("phc"), "document.getElementById('phc').click()")}${o("gal", t("phg"), "galAsk(()=>document.getElementById('phg').click())")}${myPhoto() ? o("trash", t("phd"), "phDel()") : ""}
    <input id="phc" type="file" accept="image/*" capture="user" style="display:none" onchange="phPick(this)"><input id="phg" type="file" accept="image/*" style="display:none" onchange="phPick(this)">
    <button class="btn l" onclick="closeS()">${t("cancel")}</button></div></div>`;
}
function phPick(inp) {
  const f = inp.files && inp.files[0]; if (!f) return;
  const u = URL.createObjectURL(f), im = new Image();
  im.onload = () => {
    let ok = false;
    try {
      const n = 320, c = document.createElement("canvas"); c.width = c.height = n;
      const x = c.getContext("2d"), m = Math.min(im.width, im.height);
      x.drawImage(im, (im.width - m) / 2, (im.height - m) / 2, m, m, 0, 0, n, n);
      localStorage.setItem(phKey(), c.toDataURL("image/jpeg", .85)); ok = true;
    } catch (e) {}
    URL.revokeObjectURL(u); toast(t(ok ? "phok" : "errg")); closeS(); setTimeout(() => { if (S.auth) render(); }, 300);
  };
  im.onerror = () => { URL.revokeObjectURL(u); toast(t("errg")); };
  im.src = u;
  try { inp.value = ""; } catch (e) {}
}
function phDel() { hap(); try { localStorage.removeItem(phKey()); } catch (e) {} toast(t("phrm")); closeS(); setTimeout(() => { if (S.auth) render(); }, 300); }
function hero() {
  const nm = S.me && S.me.name ? esc(S.me.name) : S.me ? "+88 " + esc(S.me.phone) : t("hi");
  return `<div class="hero">${SCENE}<div class="top"><div class="av" onclick="go('mine')">${myAv(S.me && S.me.name)}</div>
  <div class="who"><small>${nm} ${agBadge()}</small><button class="bp" onclick="peek(this)"><u>৳</u><span>${t("showb")}</span></button></div>
  <button class="hb" aria-label="${t("sq")}" onclick="openSearch()">${ic("srch")}</button>
  <button class="hb" aria-label="${t("menu")}" onclick="openMenu()"><img src="icons/logo-pink.png" alt=""><em></em></button></div></div>`;
}
const tbar = (title) => `<div class="tbar"><span class="sp"></span><b>${title}</b><img src="icons/logo.png" alt=""></div>`;
function pageHome() {
  const items = SV.slice(0, S.more ? 12 : 8).map((a, n) => `<button class="it" style="--i:${n}" onclick="openS('${a.id}')">${tile(a.id)}<span>${t(a.id)}</span></button>`).join("");
  const rc = recents();
  return hero() + `<div class="wsheet"><div class="grid">${items}</div>
  <button class="more" onclick="S.more=!S.more;render()">${t(S.more ? "less" : "more")}${ic(S.more ? "cu" : "cd")}</button></div>
  <div class="sec nob"><div class="ban" onscroll="dot(this)" ontouchstart="this.dataset.t=Date.now()">${banner(0)}${banner(1)}${banner(2)}</div><div class="dts"><i class="on"></i><i></i><i></i></div></div>
  <div class="sec"><div class="ttl"><span>${t("qf")}</span></div>
  ${rc.length ? `<div class="fv">${rc.map(f => `<div class="fc" onclick="openS('send','${esc(f[0])}')"><u>${first(f[1])}</u>${esc(f[1] || f[0])}</div>`).join("")}</div>` : ""}
  <div class="tri"><div onclick="S.seg='n';go('inbox')">${cic("gift")}<span>${t("offers")}</span></div><div onclick="openCoupons()">${cic("cpn")}<span>${t("cp")}</span></div><div onclick="hap();toast(t('soon'))">${cic("rwd")}<span>${t("rw")}</span></div></div></div>
  <div class="sec"><div class="ttl"><span>${t("rec")}</span><a onclick="S.seg='t';go('inbox')">${t("all")}</a></div>
  ${S.tx.length ? S.tx.slice(0, 3).map((x, i) => row(x, i)).join("") : `<p class="em">${t("no")}</p>`}</div>`;
}
function pageInbox() {
  const head = tbar(t("inbox")) + `<div class="seg"><button class="${S.seg === "t" ? "on" : ""}" onclick="S.seg='t';render()">${t("txs")}</button><button class="${S.seg === "n" ? "on" : ""}" onclick="S.seg='n';render()">${t("nt")}${unreadN() ? `<i class="bd">${nbadge(unreadN())}</i>` : ""}</button></div>`;
  if (S.seg === "n") { const b = nrGet(), c = nnGet(), nt = (S.nt || []).map(n => ntRow(n, c)).join(""); return head + (nt || S.tx.length ? nt + S.tx.slice(0, 40).map(x => nfRow(x, b)).join("") : `<p class="em">${t("nonf")}</p>`); }
  return head + `<div class="srch"><div>${ic("srch")}<input placeholder="${t("sq")}" value="${esc(S.q)}" id="sq" oninput="S.q=this.value;document.getElementById('lst').innerHTML=list()"></div><button class="fb${S.ft.length ? " on" : ""}" onclick="openFilter()">${ic("filt")}<span>${t("flt")}</span>${S.ft.length ? `<i>${S.ft.length}</i>` : ""}</button></div><div class="note">${t("last")}</div><div id="lst">${list()}</div>`;
}
function pageMine() {
  const m = S.me || {}, CH = '<svg class="chv" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';
  const R = (icon, label, js, right, tone) => `<button class="mr" onclick="${js}"><i class="mic t${tone || 0}">${ic(icon)}</i><span>${label}</span>${right === undefined ? CH : right}</button>`;
  const sw = `<i class="sw${bioOn() ? " on" : ""}"><b></b></i>`, ver = m.kyc_status === "approved";
  return tbar(t("pr"))
    + `<div class="prof"><div class="pavw" onclick="openPhoto()"><div class="big">${myAv(m.name)}</div><i class="cam">${ic("cam2")}</i></div><div class="pi2"><h3>${esc(m.name || t("acct"))} ${agBadge()}</h3><p>+88 ${esc(m.phone)}</p>${ver ? `<em class="vfy">${ic("ok2")}<span>${t("k_ver")}</span></em>` : ""}</div></div>`
    + `<div class="msec"><h4>${t("sec1")}</h4>${R("cam2", t("ph1"), "openPhoto()", undefined, 1)}${R("qr", t("myqr"), "openQR('my')", undefined, 2)}${R("srch", t("scanqr"), "openQR('scan')", undefined, 3)}${R("stmt", t("stmt"), "openStmt()", undefined, 4)}${R("fp", t("bioT3"), "toggleBio()", sw, 5)}${R("bell", t("nt2"), "S.seg='n';go('inbox')", undefined, 6)}${ver ? `<button class="mr" onclick="toast(t('k_kycok'))"><i class="mic t7">${ic("ok2")}</i><span>${t("k_kyc")}</span><small class="kok">${t("k_ver")}</small></button>` : ""}</div>`
    + `<div class="msec"><h4>${t("sec2")}</h4>${R("lang", t("lang"), "lang()", undefined, 3)}${R("lim", t("limt"), "openInfo('lim')", undefined, 4)}</div>`
    + `<div class="msec"><h4>${t("sec3")}</h4>${R("ref", t("refer"), "inviteFriend()", undefined, 1)}${R("help", t("help"), "openInfo('help')", undefined, 2)}${R("up", t("chk"), "checkUpdate(true)", `<small>v${APP_REL} (${APP_VERSION})</small>${CH}`, 6)}<button class="mr out" onclick="logout()"><i class="mic t8">${ic("out")}</i><span>${t("logout")}</span></button></div>`
    ;
}

/* ---------- লগইন / অ্যাকাউন্ট খোলা ---------- */
/* ---------- অ্যানিমেটেড রিং লোগো (FuNPaY) ---------- */
function fpRing(k) {
  const live = k > 0, K = live ? k : 1; let d = "", r = "";
  for (let i = 0; i < 14; i++) {
    const a = i * 2 * Math.PI / 14, x = 100 + 64 * Math.cos(a), y = 100 + 64 * Math.sin(a);
    const sx = Math.round(Math.cos(i * 2.4 + 1) * 150), sy = Math.round(Math.sin(i * 3.1 + 2) * 150);
    d += `<circle class="fpa-dt" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7.5" fill="${i % 2 ? "#ffd54a" : "#fff"}" style="--x:${sx}px;--y:${sy}px;animation-delay:${(i * .06 * K).toFixed(2)}s"/>`;
  }
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6 + .26, c = Math.cos(a), s = Math.sin(a);
    r += `<line class="fpa-ry" x1="${(100 + 80 * c).toFixed(1)}" y1="${(100 + 80 * s).toFixed(1)}" x2="${(100 + 93 * c).toFixed(1)}" y2="${(100 + 93 * s).toFixed(1)}" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>`;
  }
  return `<svg class="lglogo fpa${live ? "" : " fpa-s"}" viewBox="0 0 200 200" style="--k:${K}" role="img" aria-label="FuNPaY"><circle class="fpa-rp" cx="100" cy="100" r="64" fill="none" stroke="#fff" stroke-width="3"/><circle class="fpa-rg" cx="100" cy="100" r="64" fill="none" stroke="#fff" stroke-width="4"/>${r}<g class="fpa-spin">${d}</g><g class="fpa-ct"><circle cx="100" cy="100" r="42" fill="#fff"/><text class="fpa-tk" x="100" y="101">৳</text></g></svg>`;
}
/* PIN ঘর: চিকন লম্বা বক্স, টাইপ করলে সংখ্যা একটু দেখায়, তারপর • হয়ে যায় */
function pinFill(sel, pin, d) {
  const b = [...document.querySelectorAll(sel)];
  b.forEach((x, i) => { x.classList.toggle("on", i < pin.length); x.classList.toggle("cur", i === pin.length); x.textContent = i < pin.length ? "•" : ""; });
  if (d && d !== "b" && pin.length && b[pin.length - 1]) { const x = b[pin.length - 1]; x.textContent = d; setTimeout(() => { if (x.classList.contains("on")) x.textContent = "•"; }, 350); }
}
const pinBox = (i, n) => `<span class="dt${i < n ? " on" : ""}${i === n ? " cur" : ""}">${i < n ? "•" : ""}</span>`;
let FPK = "";
function LOGOF(key) { const first = FPK !== key; FPK = key; return fpRing(first ? .6 : 0); }
/* অ্যাপ খোলার স্প্ল্যাশ অ্যানিমেশন */
function fpSplash() {
  if (document.getElementById("fpsplash")) return;
  const el = document.createElement("div"); el.id = "fpsplash";
  const nm = [...("FuNPaY")].map((c, i) => `<span class="fpa-ch" style="animation-delay:${(.5 + i * .06).toFixed(2)}s">${c}</span>`).join("");
  el.innerHTML = `<div class="fps-orb fps-o1"></div><div class="fps-orb fps-o2"></div><div class="fps-lg">${fpRing(0)}</div><div class="fps-txt"><div class="fps-name">${nm}</div><div class="fps-tag">${t("tag")}</div></div><div class="fps-ld"><i></i><i></i><i></i></div>`;
  const end = () => {
    if (!el.parentNode || el.dataset.go) return; el.dataset.go = "1";
    const lg = el.querySelector(".fps-lg"), tg = document.querySelector(".lhero .lglogo");
    const fade = () => { el.classList.add("out"); setTimeout(() => el.remove(), 520); };
    if (!lg || !tg || !lg.animate) { fade(); return; }
    try {
      const a = lg.getBoundingClientRect(), b = tg.getBoundingClientRect();
      if (!b.width) { fade(); return; }
      const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2), sc = b.width / a.width;
      tg.style.opacity = "0"; el.classList.add("fly");
      const an = lg.animate([{transform: "translate(0,0) scale(1)"}, {transform: "translate(" + dx + "px," + dy + "px) scale(" + sc + ")"}], {duration: 780, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards"});
      an.onfinish = () => { tg.style.transition = "none"; tg.style.opacity = ""; el.remove(); };
      setTimeout(() => { if (el.parentNode) { tg.style.opacity = ""; el.remove(); } }, 1400);
    } catch (e) { fade(); }
  };
  el.onclick = end; document.body.appendChild(el); setTimeout(end, 2200);
}

const lgBar = (backJs) => `<div class="fbar"><button class="fback" aria-label="${t("back")}" onclick="${backJs}"><svg class="i" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button><div class="flang"><button class="${S.lang === "en" ? "on" : ""}" onclick="if(S.lang!=='en')lang()">Eng</button><button class="${S.lang === "bn" ? "on" : ""}" onclick="if(S.lang!=='bn')lang()">বাং</button></div></div>`;
const NXT = `<svg class="i" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const REG = () => { try { return localStorage.getItem("fpreg") === "1"; } catch (e) { return false; } };
function loginHtml() {
  if (!CONFIGURED) return `<div class="fl land"><div class="orb o1"></div><div class="orb o2"></div><div class="lhero">${LOGOF("land")}<h1>FuNPaY</h1><p>${t("setup")}</p></div></div>`;
  /* 1) স্বাগতম পেজ */
  if (S.view === "" && !S.phone) return `<div class="fl land"><div class="orb o1"></div><div class="orb o2"></div>
    <div class="ltop"><div class="flang w"><button class="${S.lang === "en" ? "on" : ""}" onclick="if(S.lang!=='en')lang()">Eng</button><button class="${S.lang === "bn" ? "on" : ""}" onclick="if(S.lang!=='bn')lang()">বাং</button></div></div>
    <div class="lhero">${LOGOF("land")}<h1>FuNPaY</h1><p>${t("tag")}</p></div>
    <div class="lpanel"><button class="lwb" onclick="hap();S.view='ph';render()">${t("lgreg")}</button></div></div>`;
  /* 2) মোবাইল নম্বর পেজ */
  if (S.view === "ph" && !S.phone) return `<div class="fl light">${lgBar("S.view='';render()")}
    <div class="fbody"><img class="mini" src="icons/logo-pink.png" alt="">
      <h2>${t("phh")}</h2>
      <label>${t("cc")}</label><div class="cfield"><i class="flag"></i>${t("bd")}</div>
      <label>${t("mob")}</label><div class="pfield"><b>+88</b><input id="lp" inputmode="numeric" pattern="[0-9]*" maxlength="11" placeholder="01XXXXXXXXX" autocomplete="tel-national" onkeydown="if(event.key==='Enter')setPhone()" oninput="numIn(this);phBar()"></div>
      <div class="le"></div>
      <p class="terms">${t("terms")}</p>
      </div>
      <button class="nbar lb2 bkbar" id="phnext" onclick="setPhone()"><span>${t("next")}</span>${NXT}</button></div>`;
  /* 2.5) OTP পেজ: SMS এ কোড যায়, Allow দিলে ঘরে নিজে বসে (ঘর readonly), অ্যান্ড্রয়েডের বাইরে বা না এলে হাতে লেখার পথ খোলে */
  if (S.view === "otp") return `<div class="fl light otpv">${lgBar("otpStop();S.view='ph';render()")}
    <div class="fbody"><img class="mini" src="icons/logo-pink.png" alt="">
      <h2>${t("otph1")}<br><b>${t("otph2")}</b></h2>
      <div class="otrow"><span class="otl">${t("otpl")}</span><button class="otprs" id="otprs" onclick="otpResend()"><svg class="otrg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" class="bg"/><circle cx="12" cy="12" r="9" class="fg" id="otrf"/></svg><span id="otrt"></span></button></div>
      <div class="otpb" id="otpbox" onclick="otpFocus()">${[0, 1, 2, 3, 4, 5].map(i => `<i id="ob${i}"></i>`).join("")}<input id="otpin" class="otpi" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="one-time-code" ${S.otpManual ? "" : "readonly"} oninput="otpTyped(this)" onfocus="otpPaint()" onblur="otpPaint()" onpaste="otpPasteEv(event)"></div>
      <div class="otpact"><button class="otpp" id="otppb" onclick="otpPaste()">${ic("copy")}<span>${t("otppaste")}</span></button><div class="otst" id="otst" aria-live="polite"></div></div>
      <p class="otsent">${t("otps")} <b>+88 ${esc(S.otpPhone)}</b> <a class="otchg" onclick="hap();otpStop();S.view='ph';render()">${t("otpchg")}</a></p>
      <div class="otwarn"><svg viewBox="0 0 64 64" aria-hidden="true"><path class="ws" d="M32 5l21 8v15c0 14-9 25-21 31C20 53 11 42 11 28V13z"/><path class="wl" d="M32 20v16"/><circle class="wd" cx="32" cy="43" r="2.6"/></svg><div><b>${t("otwa")}</b><span>${t("otwb")}</span></div></div>
    </div></div>`;
  /* 3) নতুন অ্যাকাউন্ট (শুধু নম্বরে অ্যাকাউন্ট না থাকলে আসে) */
  if (S.view === "reg") return `<div class="fl light regv">${lgBar("S.view='ph';render()")}
    <div class="fbody"><img class="mini" src="icons/logo-pink.png" alt="">
      <h2>${t("regh")}</h2><p class="sub">${t("reg2")}</p>
      <div class="rgf"><label>${t("mob")}</label><div class="pfield ro"><span class="rgi">${ic("rech")}</span><b>+88</b><input id="rp" inputmode="numeric" maxlength="11" value="${esc(S.regPhone)}" readonly><span class="rgv">${ic("ok2")}</span></div></div>
      <div class="rgf"><label>${t("nm")}</label><div class="pfield"><span class="rgi">${kic("kn")}</span><input id="rn" maxlength="20" placeholder="${t("nmph")}" autocomplete="name" oninput="regTouch()"></div></div>
      <div class="rgf"><label>${t("pin4")}</label><div class="pfield" id="rkf"><span class="rgi">${ic("lock")}</span><input id="rk" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" placeholder="••••••" autocomplete="new-password" oninput="pinOnly(this);regTouch()"><button type="button" class="eyeb" aria-label="${t("pinshow")}" onpointerdown="event.preventDefault()" onclick="pinEye('rk',this)"><span class="e1">${ic("eye")}</span><span class="e2">${ic("eyeo")}</span></button></div></div>
      <div class="rgf"><label>${t("pin2")}</label><div class="pfield" id="rk2f"><span class="rgi">${ic("lock")}</span><input id="rk2" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" placeholder="••••••" autocomplete="new-password" oninput="pinOnly(this);regTouch()" onkeydown="if(event.key==='Enter')doReg()"><span class="rgm" id="rgm">${ic("ok2")}</span><button type="button" class="eyeb" aria-label="${t("pinshow")}" onpointerdown="event.preventDefault()" onclick="pinEye('rk2',this)"><span class="e1">${ic("eye")}</span><span class="e2">${ic("eyeo")}</span></button></div></div>
      <div class="le"></div>
      <p class="rgh">${ic("lock")}<span>${t("pinhint")}</span></p></div>
    <button class="nbar lb2" onclick="doReg()"><span>${t("reg")}</span>${NXT}</button></div>`;
  /* 4) PIN পেজ: উপরে লোগো অ্যানিমেশন (আগের মতোই), নিচে বিকাশের মতো নম্বর + PIN ঘর + ফিঙ্গারপ্রিন্ট আইকন, কিবোর্ড ফোনের নিজের */
  return `<div class="fl pinp"><div class="orb o1"></div><div class="orb o2"></div>
    <div class="fbar pbar">${REG() ? '<span class="fback-sp"></span>' : `<button class="fback" aria-label="${t("back")}" onclick="hap();S.phone='';S.pin='';S.view='ph';render()"><svg class="i" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button>`}<div class="flang w"><button class="${S.lang === "en" ? "on" : ""}" onclick="if(S.lang!=='en')lang()">Eng</button><button class="${S.lang === "bn" ? "on" : ""}" onclick="if(S.lang!=='bn')lang()">বাং</button></div></div>
    <div class="phead">${LOGOF("pin")}<b>${greet()}</b></div>
    <div class="psheet bkl">
      <div class="bkf"><label>${t("accno")}</label><div class="bkn">+88&nbsp;&nbsp;${esc(S.phone)}</div></div>
      <div class="bkf"><label>${t("pinl")}</label>
        <div class="bkp"><input id="pinin" class="pinin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="off" placeholder="${t("pinph")}" aria-label="PIN" value="${esc(S.pin)}" oninput="pinIn(this)" onkeydown="if(event.key==='Enter'){event.preventDefault();pinGo()}">
        <button type="button" class="bkfp${bioOn() ? " on" : ""}" aria-label="${t("fpuse")}" onclick="bioTap()">${ic("fp")}</button></div></div>
      <div class="le"></div>
      <button class="btn pgbtn" id="pingo" onclick="pinGo()">${t("ok")}</button>
      ${S.noRpc ? `<button class="lnk3" onclick="hap();S.regPhone=S.phone;S.phone='';S.pin='';S.view='reg';render()">${t("newacc2")}</button>` : ""}
    </div></div>`;
}
async function bioTap() {
  if (S.busy) return;
  if (bioOn()) { bioUnlock(); return; }
  const N = cap().NativeBiometric;
  if (!N) { toast(t("noscan")); return; }
  try { const a = await N.isAvailable({useFallback: true}); if (!a.isAvailable) { toast(t("errg")); return; } } catch (e) { toast(t("errg")); return; }
  hap(); S.sheet = {id: "bio", pin: "", fresh: true, err: "", login: true}; renderSheet();
  setTimeout(() => { const f = document.getElementById("f3"); if (f) { try { f.focus(); } catch (e) {} } }, 300);
}
async function setPhone() {
  if (S.busy) return;
  const v = digs(document.getElementById("lp").value, 11), le = document.querySelector(".le"), nb = document.getElementById("phnext");
  if (!isPh(v)) { le.textContent = t("badn"); hap("HEAVY"); return; }
  S.busy = true; le.textContent = ""; if (nb) nb.classList.add("ld");
  try {
    /* অ্যাকাউন্ট থাকুক বা না থাকুক, সবার নম্বরেই কোড যায় (বাইরের কেউ আন্দাজ করতে পারে না) */
    await api("/functions/v1/send-otp", {m: "POST", auth: false, tries: 1, b: {phone: v}});
    S.busy = false; S.otpPhone = v; S.otpAt = Date.now(); S.otpManual = false; S.view = "otp"; render(); otpStart();
  } catch (e) {
    S.busy = false; if (nb) nb.classList.remove("ld");
    const l2 = document.querySelector(".le"); if (l2) l2.textContent = errMsg(e); hap("HEAVY");
  }
}
/* ---------- OTP: কোড শোনা, বসানো, যাচাই ---------- */
let otpSeq = 0, otpTm = 0;
const otpEl = (id) => document.getElementById(id);
function otpNative() { try { return (window.Capacitor && Capacitor.isPluginAvailable && Capacitor.isPluginAvailable("SmsConsent") && cap().SmsConsent) || null; } catch (e) { return null; } }
function otpStop() { otpSeq++; clearInterval(otpTm); const P = otpNative(); if (P) { try { Promise.resolve(P.stop()).catch(() => {}); } catch (e) {} } }
function otpStart() {
  otpPaint(); clearInterval(otpTm); otpTm = setInterval(otpTick, 1000); otpTick();
  const P = otpNative(), my = ++otpSeq;
  if (!P) { otpManualOn(); return; }
  Promise.resolve(P.start()).then((r) => {
    if (my !== otpSeq || S.view !== "otp") return;
    const m = /(?:^|\D)(\d{6})(?:\D|$)/.exec(String((r && r.message) || ""));
    if (m) otpFill(m[1]); else otpManualOn();
  }).catch(() => { if (my === otpSeq && S.view === "otp") otpManualOn(); });
  /* ৬ সেকেন্ডে কোড না ধরা পড়লে কিবোর্ড নিজে খুলে যায় */
  setTimeout(() => { if (my === otpSeq && S.view === "otp" && !S.otpManual && !S.otpBusy) otpManualOn(); }, 6000);
}
function otpTick() {
  if (S.view !== "otp") { clearInterval(otpTm); return; }
  const b = otpEl("otprs"); if (!b) return;
  const left = Math.max(0, 60 - Math.floor((Date.now() - S.otpAt) / 1000)), f = otpEl("otrf"), x = otpEl("otrt");
  if (f) f.style.strokeDashoffset = String(56.5 * (1 - left / 60));
  if (left > 0) { b.disabled = true; b.classList.remove("rdy"); if (x) x.textContent = t("otpin") + left + t("otpsfx"); }
  else { b.disabled = false; if (!b.classList.contains("rdy")) { b.classList.add("rdy"); } if (x) x.textContent = t("otpr"); }
}
function otpManualOn() {
  S.otpManual = true;
  const i = otpEl("otpin"); if (i) { i.removeAttribute("readonly"); try { i.focus(); } catch (e) {} }
  const m = otpEl("otpman"); if (m) m.style.display = "none";
  const w = otpEl("otpwait"); if (w) w.textContent = "";
  otpPaint();
}
function otpFocus() { if (!S.otpManual) otpManualOn(); else { const i = otpEl("otpin"); if (i) { try { i.focus(); } catch (e) {} } } otpPaint(); }
let otpPrev = 0;
function otpPaint() {
  const i = otpEl("otpin"); if (!i) return; const v = i.value || "", on = document.activeElement === i;
  for (let k = 0; k < 6; k++) {
    const b = otpEl("ob" + k); if (!b) continue;
    const had = b.classList.contains("f"), has = !!v[k];
    if (b.textContent !== (v[k] || "")) b.textContent = v[k] || "";
    b.classList.toggle("f", has); b.classList.toggle("a", on && v.length < 6 && k === v.length);
    if (has && !had) { b.classList.remove("pp"); void b.offsetWidth; b.classList.add("pp"); }
  }
  otpPrev = v.length;
}
function otpSt(kind, msg) {
  const e = otpEl("otst"); if (!e) return;
  const ico = kind === "chk" ? '<i class="otsp"></i>' : kind === "ok" ? '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>' : kind === "err" ? '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.4v.1"/></svg>' : "";
  e.className = "otst" + (kind ? " " + kind : "");
  e.innerHTML = kind ? ico + "<span>" + esc(msg || "") + "</span>" : "";
}
function otpPasteText(tx) {
  const m = String(tx || "").match(/(?:^|\D)(\d{6})(?:\D|$)/), v = m ? m[1] : digs(tx, 6), i = otpEl("otpin");
  if (!i || !v) return; if (!S.otpManual) otpManualOn();
  i.value = v; otpTyped(i);
}
function otpPasteEv(e) { try { e.preventDefault(); otpPasteText((e.clipboardData || window.clipboardData).getData("text")); } catch (x) {} }
async function otpPaste() {
  hap();
  const b = otpEl("otppb"); if (b) { b.classList.remove("tap"); void b.offsetWidth; b.classList.add("tap"); }
  let tx = "";
  /* ১) নেটিভ Clipboard প্লাগিন (ফোনে সবচেয়ে নির্ভরযোগ্য)  ২) ব্রাউজারের clipboard  ৩) না হলে ঘর খুলে দেয়, কিবোর্ডের কপি-করা-কোড সাজেশন বা লম্বা চাপে পেস্ট */
  try { const C = cap().Clipboard; if (C && C.read) { const r = await C.read(); tx = String((r && (r.value || r.text)) || ""); } } catch (e) {}
  if (!/\d/.test(tx)) { try { tx = (navigator.clipboard && navigator.clipboard.readText) ? await navigator.clipboard.readText() : ""; } catch (e) { tx = ""; } }
  if (/\d{4,}/.test(String(tx))) { otpPasteText(tx); return; }
  otpManualOn(); toast(t("otpcb"));
}
function otpFill(code) { const i = otpEl("otpin"); if (i) i.value = code; otpPaint(); otpVerify(code); }
function otpTyped(el) { const v = digs(el.value, 6); if (el.value !== v) el.value = v; otpPaint(); if (!S.otpBusy) { const bx = otpEl("otpbox"); if (bx) bx.classList.remove("bad"); otpSt("", ""); } if (v.length === 6) otpVerify(v); }
async function otpVerify(code) {
  if (S.otpBusy) return;
  S.otpBusy = true;
  const bx = otpEl("otpbox"); if (bx) { bx.classList.remove("bad", "shk"); bx.classList.add("chk"); }
  const ii = otpEl("otpin"); if (ii) { try { ii.blur(); } catch (e) {} }
  otpSt("chk", t("otpchk"));
  try {
    const r = await api("/functions/v1/verify-otp", {m: "POST", auth: false, tries: 1, b: {phone: S.otpPhone, code}});
    otpStop();
    if (bx) { bx.classList.remove("chk"); bx.classList.add("ok"); }
    otpSt("ok", t("otpok")); hap("MEDIUM");
    await new Promise((ok) => setTimeout(ok, 720));
    S.otpBusy = false;
    if (S.view !== "otp") return;
    if (r && r.exists) { S.phone = S.otpPhone; S.name = ""; S.view = ""; S.pin = ""; render(); }
    else { S.regPhone = S.otpPhone; S.view = "reg"; render(); }
  } catch (e) {
    S.otpBusy = false; hap("HEAVY");
    if (bx) { bx.classList.remove("chk"); bx.classList.add("bad"); void bx.offsetWidth; bx.classList.add("shk"); }
    otpSt("err", errMsg(e));
    setTimeout(() => {
      const i = otpEl("otpin"); if (!i || S.view !== "otp") return;
      i.value = ""; otpPaint(); const b2 = otpEl("otpbox"); if (b2) b2.classList.remove("bad", "shk");
      if (S.otpManual) { try { i.focus(); } catch (x) {} }
    }, 900);
  }
}
async function otpResend() {
  if (S.busy || S.view !== "otp" || Date.now() - S.otpAt < 60000) return;
  S.busy = true; otpSt("", "");
  const b = otpEl("otprs"); if (b) b.classList.add("ld2");
  try {
    await api("/functions/v1/send-otp", {m: "POST", auth: false, tries: 1, b: {phone: S.otpPhone}});
    S.otpAt = Date.now(); const i = otpEl("otpin"); if (i && !S.otpManual) i.value = ""; otpPaint(); otpSt("info", t("otpsent")); hap();
    otpStart();
  } catch (e) { otpSt("err", errMsg(e)); hap("HEAVY"); }
  S.busy = false; const b3 = otpEl("otprs"); if (b3) b3.classList.remove("ld2"); otpTick();
}
function pinEye(id, btn) {
  const f = document.getElementById(id); if (!f) return; hap();
  const show = f.type === "password"; f.type = show ? "text" : "password";
  btn.classList.toggle("on", show); btn.setAttribute("aria-label", t(show ? "pinhide" : "pinshow"));
  try { const n = f.value.length; f.setSelectionRange(n, n); } catch (e) {}
}
function regTouch() {
  const a = document.getElementById("rk"), b = document.getElementById("rk2"), f2 = document.getElementById("rk2f"), le = document.querySelector(".le");
  if (le) le.textContent = ""; if (!a || !b || !f2) return;
  const ok = b.value.length === 6 && a.value === b.value, bad = b.value.length === 6 && a.value !== b.value;
  f2.classList.toggle("okf", ok); f2.classList.toggle("badf", bad);
}
async function doReg() {
  if (S.busy) return;
  const p = S.regPhone, nm = document.getElementById("rn").value.trim(), k = digs(document.getElementById("rk").value, 6), k2 = digs(document.getElementById("rk2").value, 6), le = document.querySelector(".le");
  const bad = !isPh(p) ? t("badn") : !nm ? t("nmreq") : !isPin(k) ? t("badpin") : k !== k2 ? t("pinmm") : "";
  if (bad) { le.textContent = bad; hap("HEAVY"); const fb = document.querySelector(".regv .fbody"); if (fb) { fb.classList.remove("shk2"); void fb.offsetWidth; fb.classList.add("shk2"); } return; }
  S.busy = true; le.textContent = ""; document.querySelector(".lb2").classList.add("ld");
  try { await signUp(p, k, nm); S.phone = p; S.name = nm; S.lp = k; await enter(); setTimeout(nfWelcome, 5200); }
  catch (e) {
    if (/NOTVERIFIED|saving new user/i.test(String((e && e.message) || ""))) { S.busy = false; S.view = "ph"; S.regPhone = ""; render(); toast(t("otpexp")); return; }
    const l2 = document.querySelector(".le"); if (l2) l2.textContent = errMsg(e); const b2 = document.querySelector(".lb2"); if (b2) b2.classList.remove("ld"); hap("HEAVY"); }
  S.busy = false;
}
async function key(d) {
  if (S.busy) return;
  hap();
  if (d === "b") S.pin = S.pin.slice(0, -1); else if (S.pin.length < 6) S.pin += d;
  pinFill(".dt", S.pin, d);
  if (S.pin.length < 6) return;
  const ds = document.querySelector(".dots"), le = document.querySelector(".le"), pin = S.pin;
  S.busy = true; le.textContent = "";
  try { await signIn(S.phone, pin); S.lp = pin; await enter(); }
  catch (e) {
    hap("HEAVY"); S.pin = ""; ds.classList.add("shake"); le.textContent = errMsg(e);
    setTimeout(() => { ds.classList.remove("shake"); pinFill(".dt", "", ""); }, 450);
  }
  S.busy = false;
}

function pinIn(el) {
  if (S.busy) { el.value = S.pin; return; }
  const v = digs(el.value, 6); if (el.value !== v) el.value = v;
  S.pin = v; hap();
  const le = document.querySelector(".le"); if (le) le.textContent = "";
}
async function pinGo() {
  if (S.busy) return;
  const el = document.getElementById("pinin"), le = document.querySelector(".le"), pin = el ? digs(el.value, 6) : S.pin;
  S.pin = pin;
  if (pin.length !== 6) { hap("HEAVY"); return; }
  const ds = document.querySelector(".bkp"), gb = document.getElementById("pingo");
  S.busy = true; if (le) le.textContent = ""; if (gb) gb.classList.add("ld");
  try { await signIn(S.phone, pin); S.lp = pin; await enter(); }
  catch (e) {
    hap("HEAVY"); S.pin = ""; if (ds) ds.classList.add("shake"); if (le) le.textContent = errMsg(e); if (gb) gb.classList.remove("ld");
    setTimeout(() => { if (ds) ds.classList.remove("shake"); const f = document.getElementById("pinin"); if (f) { f.value = ""; try { f.focus(); } catch (x) {} } }, 450);
  }
  S.busy = false;
}

/* স্ট্যাটাস বারের রং: পেজ অনুযায়ী (OTA তেই কাজ করে) */
function sbar() {
  try {
    const B = cap().StatusBar; if (!B) return;
    const scn = !!(S.sheet && S.sheet.id === "qrs" && S.sheet.tab === "scan");
    const light = !S.auth && CONFIGURED && (S.view === "ph" || S.view === "reg" || S.view === "otp") && !S.phone;
    const col = scn ? "#12050c" : light ? "#fdeef4" : "#e2136e";
    Promise.resolve(B.setBackgroundColor({color: col})).catch(() => {});
    Promise.resolve(B.setStyle({style: light && !scn ? "LIGHT" : "DARK"})).catch(() => {});
    const m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", col);
  } catch (e) {}
}
/* নিচের বারের আইকন: বন্ধ অবস্থায় রেখা, চালু অবস্থায় গোলাপি ভরাট */
const NAVI = {
  home: ['<path d="M12 3.2l8.6 7.2V19a1.8 1.8 0 01-1.8 1.8H5.2A1.8 1.8 0 013.4 19v-8.6z"/><path d="M9.6 16.6h4.8"/>', '<path class="f" d="M12 3.2l8.6 7.2V19a1.8 1.8 0 01-1.8 1.8H5.2A1.8 1.8 0 013.4 19v-8.6z"/><path class="w" d="M9.6 16.6h4.8"/>'],
  mine: ['<path d="M5.5 7.6h12a1.6 1.6 0 011.6 1.6v1.2"/><rect x="3" y="7.6" width="18" height="12.6" rx="3.2"/><circle cx="16.6" cy="14.2" r="1.15"/>', '<path class="s" d="M5.5 7.6h12a1.6 1.6 0 011.6 1.6v1.2"/><rect class="f" x="3" y="7.6" width="18" height="12.6" rx="3.2"/><circle class="wf" cx="16.6" cy="14.2" r="1.3"/>'],
  inbox: ['<rect x="3" y="5.2" width="18" height="13.6" rx="3"/><path d="M3.6 7.6L12 13.4l8.4-5.8"/>', '<rect class="f" x="3" y="5.2" width="18" height="13.6" rx="3"/><path class="w" d="M3.8 7.8L12 13.4l8.2-5.6"/>'],
  qr: ['<path class="q" d="M4 9V6.5A2.5 2.5 0 016.5 4H9M15 4h2.5A2.5 2.5 0 0120 6.5V9M20 15v2.5a2.5 2.5 0 01-2.5 2.5H15M9 20H6.5A2.5 2.5 0 014 17.5V15"/><rect class="qf" x="8.4" y="8.4" width="2.9" height="2.9" rx=".7"/><rect class="qf" x="12.7" y="8.4" width="2.9" height="2.9" rx=".7"/><rect class="qf" x="8.4" y="12.7" width="2.9" height="2.9" rx=".7"/><path class="q" d="M13 14.2h2.6M14.3 12.9v2.6"/>']
};
const navIc = (k, on) => `<svg class="nvi${on ? " on" : ""}" viewBox="0 0 24 24" aria-hidden="true">${NAVI[k][on && NAVI[k][1] ? 1 : 0]}</svg>`;
/* v2.36: পেজ বদলের অ্যানিমেশন — আগের পেজ ঘোস্ট হয়ে বাঁয়ে সরে ফেড হয়, নতুন পেজ ডান থেকে নরমভাবে আসে (ব্যাক চাপলে উল্টো) */
let VK = null;
const VDEP = {land: 0, ph: 1, otp: 2, reg: 3, pin: 3}, TABN = {home: 0, mine: 1, inbox: 2};
const viewKey = () => !CONFIGURED ? "x" : S.auth ? "t:" + S.tab : (S.phone && !S.view ? "pin" : (S.view || "land"));
function viewDir(a, b) {
  if (a === null || a === b) return 0;
  if (a[0] === "t" && b[0] === "t") return (TABN[b.slice(2)] || 0) > (TABN[a.slice(2)] || 0) ? 1 : -1;
  if (a[0] === "t" || b[0] === "t" || a === "x" || b === "x") return 0;
  return (VDEP[b] || 0) >= (VDEP[a] || 0) ? 1 : -1;
}
function vGhost(ap, old, dir, sc) {
  return; /* v2.48: আগের পেজের ঘোস্ট কপি বন্ধ — দুই পেজ একটার ওপর আরেকটা আর আসবে না */
  try {
    if (!old) return;
    const g = document.createElement("div"), r = ap.getBoundingClientRect(), c = old.cloneNode(true);
    g.className = "vgh " + (dir > 0 ? "vgf" : dir < 0 ? "vgb" : "vgn");
    g.style.left = r.left + "px"; g.style.width = r.width + "px";
    if (old.classList.contains("pg") && sc) c.style.transform = "translateY(" + (-sc) + "px)";
    g.appendChild(c); document.body.appendChild(g);
    setTimeout(() => g.remove(), 460);
  } catch (e) {}
}
function render() {
  save();
  const fx = S.fx, pk = VK, nk = viewKey(), chg = pk !== null && pk !== nk, vdir = chg ? viewDir(pk, nk) : 0;
  VK = nk;
  let h = "";
  if (!S.auth) h = loginHtml();
  else {
    const pg = S.tab === "home" ? pageHome() : S.tab === "inbox" ? pageInbox() : pageMine();
    h = `<div class="pg${fx ? " in" : ""}">${pg}</div>`;
    const nv = (k, lbl) => `<button class="${S.tab === k ? "on" : ""}" onclick="go('${k}')"><span class="ni">${navIc(k, S.tab === k)}${k === "inbox" && unreadN() ? `<span class="bg">${nbadge(unreadN())}</span>` : ""}</span><em>${lbl}</em></button>`;
    h += `<nav class="${fx && !(pk && pk[0] === "t") ? "fx" : ""}">${nv("home", t("home"))}${nv("mine", t("mine"))}<button class="qrb" onclick="openQR('scan')"><span class="ni">${navIc("qr", false)}</span><em>${t("qrs")}</em></button>${nv("inbox", t("inbox"))}</nav>`;
  }
  const ap = document.getElementById("app"), sc = ap.scrollTop, ob = document.querySelector(".ban"), bl = ob ? ob.scrollLeft : 0;
  if (chg) vGhost(ap, ap.querySelector(":scope > .fl") || ap.querySelector(":scope > .pg"), vdir, sc);
  /* v2.40: পেজ আগের মতোই হলে ভেতরটা নতুন করে আঁকি না — চলমান অ্যানিমেশন কেটে/রিস্টার্ট হয় না, স্ক্রল ও ফোকাস থাকে */
  const ae = document.activeElement, same = S.auth && !chg && !fx && ap.__fh === h && ap.firstElementChild && !(ae && ap.contains(ae) && /^(INPUT|TEXTAREA)$/.test(ae.tagName));
  if (!same) { ap.innerHTML = h; ap.__fh = h; }
  ap.className = S.auth ? "au" : "";
  if (chg && !same) { const nw = ap.firstElementChild; if (nw) nw.classList.add(vdir > 0 ? "vtf" : vdir < 0 ? "vtb" : "vtn"); }
  if (!fx && S.auth) { ap.scrollTop = sc; const nb = document.querySelector(".ban"); if (nb && bl) { nb.style.scrollBehavior = "auto"; nb.scrollLeft = bl; nb.style.scrollBehavior = ""; dot(nb); } }
  S.fx = false; S.hl = null;
  if (S.fq && S.auth) { S.fq = false; setTimeout(() => { const f = document.getElementById("sq"); if (f) { try { f.focus(); } catch (e) {} } }, 380); }
  sbar();
  if (S.auth && S.tab === "inbox" && S.seg === "n" && unreadN()) setTimeout(() => { if (S.auth && S.tab === "inbox" && S.seg === "n") markRead(); }, 1600);
  if (!S.auth && CONFIGURED && S.phone && !S.view && !bioOn()) setTimeout(() => { const f = document.getElementById("pinin"); if (f && !S.busy) { try { f.focus(); } catch (e) {} } }, 400);
  if (!S.auth && CONFIGURED) { const f = document.getElementById(S.view === "reg" ? "rn" : "lp"); if (f && S.view) setTimeout(() => { try { f.focus(); } catch (e) {} }, 350); }
  kycSync();
}
const go = (k) => {
  if (S.tab === k) { render(); document.getElementById("app").scrollTo({top: 0, behavior: "smooth"}); return; }
  hap(); S.tab = k; S.fx = true; render(); document.getElementById("app").scrollTop = 0;
};
const lang = () => { hap(); S.lang = S.lang === "bn" ? "en" : "bn"; render(); };
let peekTimer;
function peek(b) {
  hap();
  const sp = b.querySelector("span"); if (!sp || b.dataset.busy) return;
  clearTimeout(peekTimer); b.dataset.busy = "1"; b.classList.add("pk-ld"); sp.className = ""; sp.textContent = "";
  setTimeout(() => {
    if (!sp.isConnected) return;
    b.classList.remove("pk-ld"); sp.classList.add("pk-n");
    const to = Number(S.bal) || 0, t0 = performance.now(), D = 700;
    const step = (now) => {
      if (!sp.isConnected) return;
      const k = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - k, 3);
      sp.textContent = money(Math.round(to * e * 100) / 100);
      if (k < 1) { requestAnimationFrame(step); return; }
      sp.textContent = money(to); delete b.dataset.busy;
      peekTimer = setTimeout(() => { if (!sp.isConnected) return; sp.classList.add("pk-o"); setTimeout(() => { if (!sp.isConnected) return; sp.className = ""; sp.textContent = t("showb"); }, 240); }, 4000);
    };
    requestAnimationFrame(step);
  }, 520);
}

function dot(e) { const st = e.children.length > 1 ? e.children[1].offsetLeft - e.children[0].offsetLeft : e.clientWidth, i = Math.round(e.scrollLeft / st); document.querySelectorAll(".dts i").forEach((d, j) => d.className = j === i ? "on" : ""); }
/* ---------- লেনদেনের ফর্ম: ধাপ 1 = তথ্য, ধাপ 2 = যাচাই + PIN, শেষে সফল পেজ ---------- */
function openS0(id, pre, rn) {
  if (!WIRED.includes(id)) { hap(); toast(t("soon")); return; }
  const c = cfg(id), s1 = !!(c.k || c.ch), jump = !!(pre && rn !== undefined && c.k === "n" && isPh(pre));
  hap(); S.sheet = {id, step: jump || !s1 ? 2 : 1, s1, v: pre || "", ch: "", a: "", pin: "", err: "", done: false, fresh: true, fxs: false, rn: jump ? rn : "", busy: false, cp: null}; renderSheet();
  if (id === "pay") loadCoupons();
}
function mount() { let e = document.getElementById("sheet"); if (!e) { e = document.createElement("div"); e.id = "sheet"; document.body.appendChild(e); } return e; }
function renderSheet() {
  const s = S.sheet;
  mount().innerHTML = S.upd ? updHtml() : s ? (s.id === "qrs" ? qrHtml() : s.id === "bio" ? bioHtml() : s.id === "net" ? netHtml() : s.id === "flt" ? fltHtml() : s.id === "menu" ? menuHtml() : s.id === "trd" ? trdHtml() : s.id === "inf" ? infHtml() : s.id === "pph" ? pphHtml() : s.id === "stm" ? stmHtml() : s.id === "cpl" ? cplHtml() : sheetHtml()) : "";
  if (s) { s.fresh = false; s.fxs = false; s.dir = 0; }
  if (S.upd) S.upd.fresh = false;
  if (s && !s.done && s.step === 2 && !SPECIAL.includes(s.id)) { const f = document.getElementById("f2"); if (f) setTimeout(() => { try { f.focus(); } catch (e) {} }, 240); }
  if (s && !s.done && s.step === 3 && !SPECIAL.includes(s.id)) { const f = document.getElementById("spin"); if (f) setTimeout(() => { try { f.focus(); } catch (e) {} }, 260); }
  sbar();
}
function closeS() {
  const sh = document.querySelector("#sheet .sh");
  if (!sh || sh.classList.contains("out")) return;
  stopScanner();
  sh.classList.remove("re"); sh.classList.add("out");
  setTimeout(() => {
    const done = S.sheet && S.sheet.done ? S.sheet.trx : null;
    if (S.upd) S.skip = S.upd.version;
    S.sheet = null; S.upd = null; renderSheet();
    if (done) { S.hl = done; render(); refresh(); }
  }, 240);
}
/* সার্চ/নম্বর ঘর: ডিজিট দিয়ে শুরু হলে শুধু সংখ্যা, সর্বোচ্চ 11 টা (নাম লিখে খুঁজলে লেখাই থাকে) */
const cleanQ = (x) => { const v = en(x).trim(); return /^[0-9]/.test(v) ? v.replace(/\D/g, "").slice(0, 11) : v; };
const sync = () => { const a = document.getElementById("f1"), b = document.getElementById("f2"); if (a) S.sheet.v = cleanQ(a.value); if (b) S.sheet.a = b.value; };
function pick(c) { hap(); sync(); S.sheet.ch = c; S.sheet.err = ""; renderSheet(); }
function pickNum(p) { hap(); const a = document.getElementById("f1"); if (a) a.value = p; S.sheet.v = p; nextStep(); }
function shakeBox() { const b = document.querySelector("#sheet .box"); if (!b) return; b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake"); hap("HEAVY"); }
const setBusy = (on) => document.querySelectorAll("#sheet .btn:not(.l)").forEach(b => b.classList.toggle("ld", on));
const wrapDlg = (s, inner) => `<div class="sh dlg${s.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div><div class="stp${s.fxs ? " go" : ""}">${inner}</div></div></div>`;
const wrapSheet = wrapDlg;
const wrapPage = (s, title, back, body, foot) => `<div class="sh pgx${s.fresh ? "" : " re"}"><div class="box"><div class="ph"><button class="pb" aria-label="${t("back")}" onclick="${back}">${ic("back")}</button><b>${title}</b><img src="icons/logo.png" alt=""></div><div class="pbody"><div class="stp${s.fxs ? " go" + (s.dir < 0 ? " bw" : "") : ""}">${body}</div></div>${foot ? `<div class="pfoot">${foot}</div>` : ""}</div></div>`;
const feeOf = (c, amt) => Math.round((c.fee || 0) * amt * 100) / 100;
const tickSvg = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const PERSON = ["send", "pay", "cash"];
function sheetHtml0() {
  const s = S.sheet, c = cfg(s.id), d = c.d || -1, person = PERSON.includes(s.id);
  if (s.done) {
    const num = s.v ? esc(s.v) : "";
    const who2 = person
      ? `<div class="rcp">${avatar(s.rn, s.v)}<div><b>${esc(s.rn || s.v)}</b><span>${s.rn ? num : ""}</span></div></div>`
      : `<div class="rcp">${tile(s.id)}<div><b>${t(s.id)}</b><span>${[s.ch ? t(s.ch) : "", num].filter(Boolean).join(" · ")}</span></div></div>`;
    const hidden = S.hideNb, ref = (s.id === "send" && s.note) ? String(s.note).trim() : "";
    const main = [`<div><span>${t("at")}</span><b>${fmt(s.at)}</b></div>`,
      `<div><span>${t("trx")}</span><b class="cpy"><em>${esc(s.trx)}</em><button class="eye" id="cpb" aria-label="${t("copy")}" onclick="copyTrx()">${ic("copy")}</button></b></div>`,
      `<div><span>${t("amtl")}</span><b>${money(s.amt)}</b></div>`,
      s.disc ? `<div><span>${t("disc")}</span><b class="gr">- ${money(s.disc)}</b></div>` : s.fee ? `<div><span>${t("feel")}</span><b>${money(s.fee)}</b></div>` : "",
      `<div><span>${t("total")}</span><b class="pk">${money(s.total)}</b></div>`].filter(Boolean);
    if (main.length % 2) main[main.length - 1] = main[main.length - 1].replace("<div>", '<div class="wide">');
    const nb = `<span>${t("nbl")}</span><b class="nbv"><em id="nbv" data-v="${esc(money(s.nb))}">${hidden ? "৳ ••••" : esc(money(s.nb))}</em><button class="eye" id="nbe" aria-label="eye" onclick="toggleNb()">${ic(hidden ? "eyeo" : "eye")}</button></b>`;
    const cells = main.concat(ref ? [`<div class="refc"><span>${t("g_ref")}</span><b><em>${esc(ref)}</em></b></div>`, `<div class="nbc">${nb}</div>`] : [`<div class="nbc wide">${nb}</div>`]);
    return wrapPage(s, t(s.id), "closeS()", `<div class="pcard bkr"><div class="bkh"><div><b>${t(s.id)}</b><em>${t("done")}</em></div><i class="bkck"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></i></div>${who2}<div class="bkg">${cells.join("")}</div><button class="bks" onclick="shareRc()">${ic("shr")}<span>${t("share")}</span></button></div>`,
      `<button class="bknx" onclick="closeS()"><span>${t("next")}</span>${NXT}</button>`);
  }

  const tot3 = s.s1 ? 4 : 3, cur = s.s1 ? s.step : s.step - 1;
  const prog = "";
  const who = person
    ? `<div class="rcp">${avatar(s.rn, s.v)}<div><b>${esc(s.rn || s.v)}</b><span>${s.rn ? esc(s.v) : ""}</span></div><i class="vf">${tickSvg}</i></div>`
    : `<div class="rcp">${tile(s.id)}<div><b>${t(s.id)}</b><span>${[s.ch ? t(s.ch) : "", s.v ? esc(s.v) : ""].filter(Boolean).join(" · ")}</span></div></div>`;
  /* ধাপ 3: PIN · ধাপ 4: যাচাই + নিচের বাটন ধরে রাখুন (বিকাশের মতো) */
  if (s.step >= 3) {
    const amt = parseFloat(s.a), fee = feeOf(c, amt), dsc = s.id === "pay" ? cpDisc(s.cp, amt) : 0, tot = amt + (d < 0 ? fee - dsc : 0);
    if (s.step === 3) {
      return wrapPage(s, t(s.id), "backStep()", `${prog}<div class="pcard">${who}<div class="bkt"><div><span>${t("amtl")}</span><b>${money(amt)}</b></div>${fee ? `<div><span>${t("feel")}</span><b>+ ${money(fee)}</b></div>` : ""}${dsc ? `<div><span>${t("disc")}</span><b class="gr">- ${money(dsc)}</b></div>` : ""}<div><span>${t("total")}</span><b>${money(tot)}</b></div></div></div>
        <div class="pcard pinrow">${ic("lock")}<input id="spin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="off" placeholder="${t("pinph")}" aria-label="PIN" value="${esc(s.pin)}" oninput="spIn(this)" onkeydown="if(event.key==='Enter'){event.preventDefault();spGo()}"></div>
        <div class="err c" id="er" style="text-align:center;margin-top:10px">${esc(s.err)}</div>`, `<button class="btn" id="spgo" onclick="spGo()">${t("ok")}</button>`);
    }
    const rows = (!person && s.v ? `<div><span>${t(c.f)}</span><b>${esc(s.v)}</b></div>` : "") + (!person && s.ch ? `<div><span>${t("opr")}</span><b>${t(s.ch)}</b></div>` : "") + (person && s.id === "cash" ? `<div><span>${t("svc")}</span><b>${t("cash")}</b></div>` : "")
      + `<div><span>${t("amtl")}</span><b>${money(amt)}</b></div>${fee ? `<div><span>${t("feel")}</span><b>${money(fee)}</b></div>` : ""}${dsc ? `<div><span>${t("disc")}</span><b class="gr">- ${money(dsc)}</b></div>` : ""}`;
    return wrapPage(s, t(s.id), "backStep()", `${prog}<div class="pcard cfm">${who}<div class="cfa"><small>${t("total")}</small><b>${money(tot)}</b></div><div class="sm">${rows}</div></div>
      <div class="err c" style="text-align:center;margin-top:10px">${esc(s.err)}</div>`,
      `<div class="holdw"><button id="hold" class="hold" onpointerdown="holdStart(event)" onpointerup="holdEnd()" onpointerleave="holdEnd()" onpointercancel="holdEnd()" oncontextmenu="return false"><i><span class="hc">${ic("ok2")}<b>${t("hold")}</b></span></i>${ic("ok2")}<b>${t("hold")}</b></button></div>`);
  }
  /* ধাপ 2: টাকার পরিমাণ */
  if (s.step === 2) {
    const amt = parseFloat(s.a) || 0, fee = feeOf(c, amt);
    const chips = [500, 1000, 2000, 5000].map(n => `<button onclick="qAmt(${n})">৳${n.toLocaleString("en-US")}</button>`).join("");
    return wrapPage(s, t(s.id), "backStep()", `${prog}${person ? `<p class="lh lhp">${t(s.id === "cash" ? "lag" : s.id === "pay" ? "lmr" : "lrcv")}</p>` : ""}<div class="pcard">${who}</div>
      ${s.id === "send" && s.v && !recents().some(f => f[0] === s.v) ? `<p class="tw" style="margin:8px 12px 0">${t("chkn")}</p>` : ""}
      <div class="pcard"><div class="lb">${t("amt")}</div><div class="fld big"><u>৳</u><input id="f2" inputmode="decimal" placeholder="0" value="${esc(s.a)}" oninput="amtIn(this)"></div>
      ${d < 0 ? `<div class="avl">${t("avl")}: <b>${money(S.bal)}</b></div>` : ""}<div class="fee" id="fl">${c.fee ? t("feel") + ": " + money(fee) : ""}</div>
      <div class="qa">${chips}</div><div class="err" id="er">${esc(s.err)}</div></div>
      ${s.id === "pay" ? `<div class="pcard cpcard" id="cpbox">${cpHtml(s)}</div>` : ""}`,
      `<button class="btn" onclick="nextStep()">${t("go2")}${NXT}</button>`);
  }
  /* ধাপ 1: কাকে / কোন সার্ভিস (বিকাশের মতো সার্চ + তালিকা) */
  const foot = `<button class="btn" onclick="nextStep()">${t("next")}${NXT}</button>`;
  if (person) {
    const tabs = s.id === "cash" ? `<div class="seg2"><button class="on">${t("agent")}</button><button onclick="hap();toast(t('soon'))">${t("atm")}</button></div>` : "";
    const search = `<div class="pcard srcc"><div class="fld sf">${ic("srch")}<input id="f1" maxlength="20" placeholder="${t(s.id === "cash" ? "sag" : s.id === "pay" ? "smr" : "sname")}" value="${esc(s.v)}" autocomplete="off" oninput="srchIn(this)"></div><div class="err" id="er">${esc(s.err)}</div></div>`;
    const qrb = s.id !== "send" ? `<button class="qrbtn" onclick="openQR('scan','${s.id}')">${ic("qr")}<span>${t("qrtap")}</span></button>` : "";
    const tl = (ico, lbl, js) => `<button class="tl" onclick="${js}"><span>${ic(ico)}</span><b>${lbl}</b></button>`;
    const tiles = s.id === "send" ? `<div class="tl3">${tl("srch", t("tnum"), "document.getElementById('f1').focus()")}${tl("qr", t("scanqr"), "openQR('scan','send')")}${tl("qr", t("myqr"), "openQR('my')")}</div>` : "";
    return wrapPage(s, t(s.id), "backStep()", `${prog}${tabs}${search}${qrb}${tiles}<div class="pcard lst"><p class="lh">${t(s.id === "cash" ? "lagent" : s.id === "pay" ? "lpay" : "rcnt")}</p><div id="clist">${contactRows(s)}</div></div>`, foot);
  }
  const OPC = {gp: ["GP", "#00a7e1"], robi: ["R", "#e2231a"], bl: ["BL", "#f47920"], airtel: ["A", "#ed1c24"], tt: ["TT", "#00a651"]};
  const chs = !c.ch ? "" : s.id === "rech"
    ? `<p class="lh">${t("pickop")}</p><div class="opg">${c.ch.map(x => `<button class="opc${s.ch === x ? " on" : ""}" onclick="pick('${x}')"><i style="background:${(OPC[x] || ["", "#e2136e"])[1]}">${(OPC[x] || [x[0].toUpperCase()])[0]}</i><span>${t(x)}</span></button>`).join("")}</div>`
    : `<div class="chs">${c.ch.map(x => `<button class="${s.ch === x ? "on" : ""}" onclick="pick('${x}')">${t(x)}</button>`).join("")}</div>`;
  const body = chs
    + (c.k ? `<div class="lb" style="${c.ch ? "margin-top:14px" : ""}">${t(c.f)}</div><div class="fld">${c.k === "n" ? ic("srch") : ""}<input id="f1" ${c.k === "n" ? `inputmode="numeric" pattern="[0-9]*" maxlength="11" placeholder="01XXXXXXXXX" oninput="numIn(this)"` : `placeholder="${t(c.f)}"`} value="${esc(s.v)}"></div>` : "")
    + `<div class="err" id="er">${esc(s.err)}</div>`;
  return wrapPage(s, t(s.id), "backStep()", `${prog}<div class="pcard">${body}</div>`, foot);
}

function updHtml() {
  const u = S.upd;
  return `<div class="sh dlg${u.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div><div class="ok"><div class="tick">${ic("up")}</div><h2>${t("upn")}</h2><div class="amt" style="font-size:22px">v${esc(u.version)}</div><div class="sv">${esc(u.notes || "")}</div></div><button class="btn" onclick="applyUpdate()">${t("upb")}</button><button class="btn l" onclick="closeS()">${t("upl")}</button></div></div>`;
}
/* বিকাশের মতো তালিকা: আগে যাদের সাথে লেনদেন হয়েছে (সেন্ড/ক্যাশ আউট/পেমেন্ট আলাদা) */
function peopleFor(id) {
  const m = new Map();
  S.tx.forEach(x => {
    if (x.type !== id) return;
    const out = x.from_id === S.uid;
    if ((id === "cash" || id === "pay") && !out) return;
    const ph = out ? x.to_phone : x.from_phone, nm = out ? x.to_name : x.from_name;
    if (ph && !m.has(ph)) m.set(ph, nm || "");
  });
  return [...m];
}
const matchP = (f, q) => { const k = String(q || "").trim().toLowerCase(); return !k || f[0].includes(k) || String(f[1] || "").toLowerCase().includes(k); };
function contactRows(s) {
  const q = (s.v || "").trim(), all = peopleFor(s.id), r = all.filter(f => matchP(f, q));
  let h = "";
  if (isPh(q) && !all.some(f => f[0] === q)) h += `<div class="rr" onclick="pickNum('${q}')">${avatar("", q)}<div><b>${esc(q)}</b><span>${t("cont2")}</span></div></div>`;
  h += r.map(f => `<div class="rr" onclick="pickNum('${esc(f[0])}')">${avatar(f[1], f[0])}<div><b>${esc(f[1] || f[0])}</b><span>${f[1] ? esc(f[0]) : ""}</span></div></div>`).join("");
  if (!h) h = `<p class="em">${t(q ? "nomatch" : s.id === "cash" ? "noag2" : s.id === "pay" ? "nopay2" : "nosend2")}</p>`;
  return h;
}
function srchIn(el) {
  const s = S.sheet; if (!s) return;
  { const v = cleanQ(el.value); if (el.value.trim() !== v) el.value = v; s.v = v; } s.err = "";
  const l = document.getElementById("clist"); if (l) l.innerHTML = contactRows(s);
  const e = document.getElementById("er"); if (e) e.textContent = "";
}
async function nextStep0() {
  sync();
  const s = S.sheet; if (!s || s.busy) return;
  const c = cfg(s.id), d = c.d || -1;
  let e = "";
  if (s.step === 1) {
    if (PERSON.includes(s.id) && !isPh(s.v) && !/^[0-9]/.test(s.v)) { const m = peopleFor(s.id).filter(f => matchP(f, s.v)); if (s.v && m.length === 1) s.v = m[0][0]; }
    if (c.ch && !s.ch) e = t("pick");
    else if (c.k === "n" && !isPh(s.v)) e = t("badn");
    else if (c.k === "t" && !s.v) e = t("badt");
    else if (PERSON.includes(s.id) && s.v === S.me.phone) e = t("self");
    if (!e && PERSON.includes(s.id)) {
      s.busy = true; setBusy(true);
      try {
        const r = await api("/rest/v1/rpc/lookup_phone", {m: "POST", b: {p_phone: s.v}});
        if (!r.length) e = t(s.id === "cash" ? "noagn" : s.id === "pay" ? "nomrc" : "nouser"); else if (s.id === "cash" && r[0].prole !== "agent") e = t("noagn"); else s.rn = r[0].pname || "";
      } catch (x) { e = errMsg(x); }
      s.busy = false;
      if (S.sheet !== s) return;
    }
  } else if (s.step === 2) {
    const amt = parseFloat(s.a);
    if (!(amt > 0)) e = t("bada");
    else if (s.id === "cash" && amt < 50) e = t("cobad");
    else if (s.id === "add" && amt > 5000) e = t("addmax");
    else if (d < 0 && amt + feeOf(c, amt) - (s.id === "pay" ? cpDisc(s.cp, amt) : 0) > S.bal) e = t("low");
    else s.a = String(Math.round(amt * 100) / 100);
  }
  s.err = e;
  if (!e) { s.step++; s.fxs = true; s.pin = ""; hap(); }
  renderSheet();
  if (e) shakeBox();
}
function backStep() {
  const s = S.sheet; if (!s) return;
  hap();
  if (s.step === 4) s.step = 3; else if (s.step === 3) s.step = 2; else if (s.step === 2 && s.s1) s.step = 1; else { closeS(); return; }
  s.err = ""; s.pin = ""; s.fxs = true; s.dir = -1; renderSheet();
}
function amtIn(el) {
  let v = en(el.value).replace(/[^0-9.]/g, ""); const p = v.split(".");
  if (p.length > 1) v = p[0] + "." + p.slice(1).join("").slice(0, 2);
  v = v.replace(/^0+(?=\d)/, "").slice(0, 9);
  if (el.value !== v) el.value = v;
  const s = S.sheet; if (!s) return;
  s.a = v; s.err = "";
  const c = cfg(s.id), a = document.getElementById("fl"), er = document.getElementById("er");
  if (a && c.fee) a.textContent = t("feel") + ": " + money(feeOf(c, parseFloat(v) || 0));
  if (er) er.textContent = "";
  if (s.id === "pay") { const a2 = parseFloat(v) || 0; if (s.cp && !cpDisc(s.cp, a2)) s.cp = null; cpRefresh(); }
}
function qAmt(n) { hap(); const f = document.getElementById("f2"); if (f) { f.value = String(n); amtIn(f); } }
function spIn(el) {
  const s = S.sheet; if (!s || s.busy || s.step !== 3) { el.value = s ? s.pin : ""; return; }
  const v = digs(el.value, 6); if (el.value !== v) el.value = v;
  s.pin = v; hap(); s.err = "";
  const er = document.getElementById("er"); if (er) er.textContent = "";
}
function spGo() {
  const s = S.sheet; if (!s || s.busy || s.step !== 3) return;
  const f = document.getElementById("spin"); if (f) s.pin = digs(f.value, 6);
  if (s.pin.length === 6) { verifyPin(); return; }
  shakeBox();
}
async function verifyPin() {
  const s = S.sheet; if (!s || s.busy || s.step !== 3 || s.pin.length !== 6) return;
  const pin = s.pin; s.busy = true; { const gb = document.getElementById("spgo"); if (gb) gb.classList.add("ld"); }
  const fail = (m) => { s.busy = false; if (S.sheet !== s) return; s.pin = ""; s.err = m; renderSheet(); shakeBox(); };
  try { await signIn(S.me.phone, pin); } catch (e) { return fail(errMsg(e)); }
  s.busy = false; if (S.sheet !== s) return;
  hap("MEDIUM"); s.step = 4; s.fxs = true; s.err = ""; s.pin = ""; renderSheet();
}
let holdT = 0;
function holdStart() {
  const b = document.getElementById("hold"); if (!b || holdT || b.classList.contains("ld")) return;
  hap(); { const hc = b.querySelector(".hc"); if (hc) hc.style.width = b.clientWidth + "px"; } b.classList.add("hd");
  holdT = setTimeout(() => { holdT = 0; b.classList.remove("hd"); confirmTx(); }, 2000);
}
function holdEnd() {
  if (!holdT) return;
  clearTimeout(holdT); holdT = 0;
  const b = document.getElementById("hold"); if (b) b.classList.remove("hd");
}
function toggleNb() {
  hap(); S.hideNb = !S.hideNb;
  const e = document.getElementById("nbv"); if (e) e.textContent = S.hideNb ? "৳ ••••" : e.dataset.v;
  const b = document.getElementById("nbe"); if (b) b.innerHTML = ic(S.hideNb ? "eyeo" : "eye");
}
function copyTxt(v) {
  hap(); v = String(v == null ? "" : v);
  const ok = () => toast(t("copied"));
  try { navigator.clipboard.writeText(v).then(ok, () => { fbCopy(v); ok(); }); } catch (e) { fbCopy(v); ok(); }
}
function fbCopy(v) { try { const a = document.createElement("textarea"); a.value = v; a.style.cssText = "position:fixed;opacity:0"; document.body.appendChild(a); a.select(); document.execCommand("copy"); a.remove(); } catch (e) {} }
function copyTrx() { const s = S.sheet; if (s && s.trx) copyTxt(s.trx); }

/* ---------- রিসিট ছবি (ব্যালেন্স কখনো থাকে না) আর শেয়ার ---------- */
const CF = (w, z) => w + " " + z + "px system-ui,'Noto Sans Bengali','Segoe UI',sans-serif";
function rrect(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
function fitTxt(g, txt, max) { txt = String(txt); if (g.measureText(txt).width <= max) return txt; while (txt.length > 1 && g.measureText(txt + "…").width > max) txt = txt.slice(0, -1); return txt + "…"; }
function rcBlob(o) {
  const W = 720, pad = 44, rowH = 78, headH = 250, whoH = o.who ? 150 : 40, cardH = whoH + o.rows.length * rowH + 40, H = headH + cardH + 150;
  const c = document.createElement("canvas"); c.width = W; c.height = H; const g = c.getContext("2d");
  g.fillStyle = "#f6eef3"; g.fillRect(0, 0, W, H);
  const gr = g.createLinearGradient(0, 0, W, headH); gr.addColorStop(0, "#e2136e"); gr.addColorStop(1, "#f0549a"); g.fillStyle = gr; g.fillRect(0, 0, W, headH);
  g.textBaseline = "alphabetic"; g.fillStyle = "#fff"; g.textAlign = "left"; g.font = CF(800, 38); g.fillText("FuNPaY", pad, 72);
  g.font = CF(600, 27); g.globalAlpha = .92; g.fillText(o.title, pad, 118); g.globalAlpha = 1;
  g.textAlign = "right"; g.font = CF(700, 26); g.fillText(o.status || "", W - pad, 72);
  g.textAlign = "center"; g.font = CF(800, 70); g.fillText(o.amount, W / 2, 205);
  const cy = headH - 34; g.fillStyle = "#fff"; g.shadowColor = "rgba(120,20,70,.14)"; g.shadowBlur = 26; g.shadowOffsetY = 8; rrect(g, 28, cy, W - 56, cardH + 34, 28); g.fill(); g.shadowColor = "transparent"; g.shadowBlur = 0; g.shadowOffsetY = 0;
  let y = cy + 34;
  if (o.who) {
    g.fillStyle = "#fde7f1"; g.beginPath(); g.arc(pad + 38, y + 56, 38, 0, 7); g.fill();
    g.fillStyle = "#d6307d"; g.textAlign = "center"; g.font = CF(800, 34); g.fillText(Array.from(String(o.who.name || o.who.phone || "F"))[0].toUpperCase(), pad + 38, y + 68);
    g.textAlign = "left"; g.fillStyle = "#2b2530"; g.font = CF(700, 32); g.fillText(fitTxt(g, o.who.name || o.who.phone || "", W - pad * 2 - 110), pad + 96, y + 52);
    if (o.who.name && o.who.phone) { g.fillStyle = "#8b8590"; g.font = CF(500, 26); g.fillText(o.who.phone, pad + 96, y + 90); }
    y += 128; g.strokeStyle = "#f0e3ea"; g.lineWidth = 2; g.beginPath(); g.moveTo(pad, y); g.lineTo(W - pad, y); g.stroke();
  } else y += 10;
  o.rows.forEach((r) => {
    g.textAlign = "left"; g.fillStyle = "#8b8590"; g.font = CF(500, 26); g.fillText(r[0], pad, y + 48);
    g.textAlign = "right"; g.fillStyle = r[2] || "#2b2530"; g.font = CF(700, 28); g.fillText(fitTxt(g, r[1], W - pad * 2 - 230), W - pad, y + 48);
    y += rowH; g.strokeStyle = "#f4ecf1"; g.lineWidth = 2; g.beginPath(); g.moveTo(pad, y); g.lineTo(W - pad, y); g.stroke();
  });
  g.textAlign = "center"; g.fillStyle = "#a79ba3"; g.font = CF(500, 23); g.fillText("FuNPaY · " + (o.foot || ""), W / 2, H - 70);
  return new Promise((res) => { try { c.toBlob((b) => res(b), "image/png"); } catch (e) { res(null); } });
}
async function shareImage(blob, name, title, mime) {
  mime = mime || "image/png";
  if (!blob) return false;
  try {
    const Sh = cap().Share, Fs = cap().Filesystem;
    if (Sh && Fs) {
      const b64 = await new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(",")[1]); r.onerror = rej; r.readAsDataURL(blob); });
      const w = await Fs.writeFile({path: name, data: b64, directory: "CACHE"});
      await Sh.share({title, dialogTitle: title, files: [w.uri]}); return true;
    }
  } catch (e) { if (/cancel|dismiss/i.test(String((e && (e.message || e.name)) || e))) return true; }
  try { const f = new File([blob], name, {type: mime}); if (navigator.canShare && navigator.canShare({files: [f]})) { await navigator.share({files: [f], title}); return true; } } catch (e) { if (e && e.name === "AbortError") return true; }
  try { const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500); return true; } catch (e) {}
  return false;
}
async function doShare(o, name) { hap(); const ok = await shareImage(await rcBlob(o), name, o.title); if (!ok) toast(t("shfail")); }
function shareRc() {
  const s = S.sheet; if (!s || !s.done) return;
  const c = cfg(s.id), person = PERSON.includes(s.id), rows = [[t("at"), fmt(s.at)], [t("trx"), s.trx]];
  if (!person && s.ch) rows.push([t("opr"), t(s.ch)]);
  if (!person && s.v) rows.push([t(c.f), s.v]);
  rows.push([t("amtl"), money2(s.amt)]); if (s.fee) rows.push([t("feel"), money2(s.fee)]);
  if (s.disc) rows.push([t("disc"), "- " + money2(s.disc), "#12a15b"]);
  rows.push([t("total"), money2(s.total), "#e2136e"]);
  doShare({title: t(s.id), status: t("done"), amount: money2(s.total), who: person ? {name: s.rn, phone: s.v} : null, rows, foot: fmt(s.at)}, "FuNPaY-" + s.trx + ".png");
}

/* ---------- কুপন (শুধু পেমেন্টে) ---------- */
const cpDisc = (cp, amt) => {
  if (!cp || !(amt > 0) || amt < Number(cp.min_amt || 0)) return 0;
  let d = cp.kind === "percent" ? Math.round(amt * Number(cp.val)) / 100 : Number(cp.val);
  if (cp.max_disc) d = Math.min(d, Number(cp.max_disc));
  return Math.min(Math.round(d * 100) / 100, amt);
};
const cpTag = (cp) => cp.kind === "percent" ? Number(cp.val) + "% " + t("cpn") : "৳" + Number(cp.val) + " " + t("cpn");
const cpSub = (cp) => [cp.kind === "percent" && cp.max_disc ? t("cpmax") + " ৳" + Number(cp.max_disc) : "", Number(cp.min_amt) > 0 ? t("cpmin") + " ৳" + Number(cp.min_amt) : "", cp.expires_at ? t("cpexp") + " " + fmt(cp.expires_at).split(" ")[0] : ""].filter(Boolean).join(" · ");
async function loadCoupons() {
  try { const r = await api("/rest/v1/rpc/my_coupons", {m: "POST", b: {}}); S.cps = Array.isArray(r) ? r : []; } catch (e) { if (S.cps === null) S.cps = []; }
  cpRefresh();
}
function cpHtml(s) {
  const amt = parseFloat(s.a) || 0, L = S.cps;
  if (L === null) return `<div class="lb">${t("cpn")}</div><p class="cpe"><i class="lgl"></i></p>`;
  if (!L.length) return `<div class="lb">${t("cpn")}</div><p class="cpe">${t("cpnone")}</p>`;
  const items = L.map(k => {
    const ok = !(amt < Number(k.min_amt || 0)), on = s.cp && s.cp.uc_id === k.uc_id, d = on ? cpDisc(k, amt) : 0;
    return `<button class="cpc${on ? " on" : ""}${ok ? "" : " na"}" onclick="cpPick(${Number(k.uc_id)})"><i>${ic("tag")}</i><div><b>${esc(k.title)}</b><small>${esc(on && d ? t("cpsv") + " ৳" + d : ok ? cpSub(k) : t("cpna") + " · " + cpSub(k))}</small></div><em class="rd"></em></button>`;
  }).join("");
  return `<div class="lb">${t("cpsel")}</div><div class="cpl">${items}</div>`;
}
function cpRefresh() { const e = document.getElementById("cpbox"); if (e && S.sheet && S.sheet.id === "pay" && !S.sheet.done) e.innerHTML = cpHtml(S.sheet); }
function cpPick(id) {
  const s = S.sheet; if (!s || !S.cps) return; hap();
  const k = S.cps.find(x => x.uc_id === id); if (!k) return;
  const a = document.getElementById("f2"); if (a) s.a = a.value;
  const amt = parseFloat(s.a) || 0;
  if (s.cp && s.cp.uc_id === id) s.cp = null;
  else if (amt < Number(k.min_amt || 0)) { toast(t("cpna") + " (" + t("cpmin") + " ৳" + Number(k.min_amt) + ")"); return; }
  else { s.cp = k; toast(t("cpok")); }
  cpRefresh();
}
function openCoupons() { hap(); S.sheet = {id: "cpl", fresh: true, err: ""}; renderSheet(); loadCoupons().then(() => { if (S.sheet && S.sheet.id === "cpl") renderSheet(); }); }
function cplHtml() {
  const s = S.sheet, L = S.cps || [];
  const list = L.length ? L.map(k => `<div class="cpc ro"><i>${ic("tag")}</i><div><b>${esc(k.title)}</b><small>${esc(cpSub(k))}</small></div></div>`).join("") : `<p class="cpe">${S.cps === null ? '<i class="lgl"></i>' : t("cpnone")}</p>`;
  return `<div class="sh dlg${s.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div><h3 class="cph">${t("cpmy")}</h3><div class="cpl">${list}</div>
    <div class="cpadd"><input id="cpcode" placeholder="${t("cpcode")}" autocapitalize="characters" autocomplete="off" maxlength="20"><button class="btn" onclick="claimCoupon()">${t("cpadd")}</button></div><div class="err c" id="cper" style="text-align:center">${esc(s.err || "")}</div>
    <button class="btn l" onclick="closeS()">${t("close")}</button></div></div>`;
}
async function claimCoupon() {
  const s = S.sheet, f = document.getElementById("cpcode"); if (!s || s.id !== "cpl" || !f) return;
  const code = f.value.trim().toUpperCase(); if (!code) return;
  try { await api("/rest/v1/rpc/claim_coupon", {m: "POST", b: {p_code: code}}); toast(t("cpadded")); fpNotify({title: t("cpn"), body: t("cpadded") + ": " + code, ch: "info"}); s.err = ""; await loadCoupons(); if (S.sheet === s) renderSheet(); }
  catch (e) { hap("HEAVY"); const er = document.getElementById("cper"); if (er) er.textContent = errMsg(e); }
}

async function confirmTx() {
  const s = S.sheet; if (!s || s.busy || s.step !== 4) return;
  const gd = !!(s.grp && s.grp.diff), gsum = gd ? gSum(s) : 0;
  const c = cfg(s.id), d = c.d || -1, amt = gd ? gsum / s.grp.sel.length : parseFloat(s.a), fee = feeOf(c, amt), pin = s.pin || "", dsc = s.id === "pay" ? cpDisc(s.cp, amt) : 0;
  const fail = (m) => { s.busy = false; if (S.sheet !== s) return; s.pin = ""; s.err = m; renderSheet(); shakeBox(); };
  s.busy = true; { const hb = document.getElementById("hold"); if (hb) hb.classList.add("ld"); }
  const R = (fn, b) => api("/rest/v1/rpc/" + fn, {m: "POST", b});
  let trx;
  try {
    if (s.id === "send" && s.grp) { const rr = gd ? await R("send_group2", {p_to: s.grp.sel, p_amounts: s.grp.sel.map(x => Number(s.grp.amts[x])), p_note: s.note || null, p_card: s.card || null}) : await R("send_group", {p_to: s.grp.sel, p_amount: amt, p_note: s.note || null, p_card: s.card || null}); trx = rr[0]; }
    else if (s.id === "send" && (s.note || s.card)) trx = await R("send_money2", {p_to: s.v, p_amount: amt, p_note: s.note || null, p_card: s.card || null});
    else if (s.id === "send") trx = await R("send_money", {p_to: s.v, p_amount: amt, p_type: s.id});
    else if (s.id === "pay") trx = await R("pay_merchant", {p_to: s.v, p_amount: amt, p_uc: s.cp ? s.cp.uc_id : null});
    else if (s.id === "cash") trx = await R("cash_out", {p_agent: s.v, p_amount: amt});
    else if (s.id === "add") trx = await R("add_test_money", {p_amount: amt});
    else trx = await R("pay_service", {p_type: s.id, p_ref: s.v, p_amount: amt, p_ch: s.ch});
  } catch (e) {
    if (e && e.message === "NET") { setTimeout(refresh, 1500); return fail(t("neterr") + " · " + t("trxchk")); }
    return fail(errMsg(e));
  }
  s.busy = false; S.mine.add(trx);
  S.sheet = {id: s.id, done: true, total: d < 0 ? amt + fee - dsc : amt, amt, fee, disc: dsc, trx, v: s.v, rn: s.rn, ch: s.ch, at: new Date().toISOString(), fresh: false, fxs: true, nb: d < 0 ? S.bal - (amt + fee - dsc) : S.bal + amt};
  { const mul = s.id === "send" && s.grp ? s.grp.sel.length : 1; if (mul > 1) { const tt = gd ? gsum : amt * mul; Object.assign(S.sheet, {total: tt, amt: tt, nb: S.bal - tt, rn: t("g_gdone") + " · " + mul + " " + t("g_people"), v: ""}); } }
  if (dsc && S.cps) S.cps = S.cps.filter(k => !s.cp || k.uc_id !== s.cp.uc_id);
  hap("MEDIUM"); renderSheet(); refresh(); nfOwn(S.sheet);
}

document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" || !S.sheet || S.sheet.done || SPECIAL.includes(S.sheet.id)) return;
  S.sheet.step >= 3 ? 0 : nextStep();
});

/* ---------- নিজের QR ও স্ক্যান ---------- */
function qrSvg(text) {
  if (typeof qrcode === "undefined") return "";
  const q = qrcode(0, "M"); q.addData(text); q.make();
  const n = q.getModuleCount(); let d = "";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${c} ${r}h1v1h-1z`;
  return `<svg class="qrs" viewBox="-2 -2 ${n + 4} ${n + 4}" shape-rendering="crispEdges"><rect x="-2" y="-2" width="${n + 4}" height="${n + 4}" fill="#fff"/><path d="${d}" fill="#14182b"/></svg>`;
}
function openQR(tab, f) { hap(); S.scanFor = f || ""; S.sheet = {id: "qrs", tab: tab || "scan", fresh: true, fxs: false, torch: false, denied: false}; renderSheet(); if (S.sheet.tab === "scan") startScanner(); }
function qTab(tb) { hap(); if (!S.sheet || S.sheet.tab === tb) return; stopScanner(); S.sheet.tab = tb; S.sheet.fxs = true; S.sheet.denied = false; S.sheet.torch = false; renderSheet(); if (tb === "scan") startScanner(); }
function qrHtml() {
  const s = S.sheet, m = S.me || {};
  if (s.tab === "scan") return scanHtml(s);
  return wrapPage(s, t("myqr"), "closeS()", `<div class="qpage"><div class="qdeco" aria-hidden="true"><i class="d1"></i><i class="d2"></i><i class="d3"></i>${[1, 2, 3, 4, 5, 6].map(n => `<img class="qwm q${n}" src="icons/logo.png" alt="">`).join("")}</div><div class="qcard"><div class="qav">${myAv(m.name)}</div><b>${esc(m.name || t("acct"))}</b><span>${esc(m.phone)} ${agBadge()}</span><div class="qwrap">${qrSvg("funpay:" + m.phone)}</div><small>${t("qrhint")}</small></div><div class="qfoot"><img src="icons/logo.png" alt=""><b>FuNPaY</b><span>${t("tag")}</span></div></div>`,
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
  document.documentElement.classList.remove("scanning", "camon", "barcode-scanner-active");
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
    document.documentElement.classList.add("scanning", "barcode-scanner-active");
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
    if (!r.length) { toast(t(S.scanFor === "cash" ? "noagn" : S.scanFor === "pay" ? "nomrc" : "nouser")); return; }
    const ag = r[0].prole === "agent", want = S.scanFor || "";
    if (want === "cash" && !ag) { toast(t("noagn")); hap("HEAVY"); return; }
    S.scanFor = "";
    openS(want === "pay" ? "pay" : want === "send" ? "send" : ag ? "cash" : "send", m[1], r[0].pname || "");
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
  if (s.off) return wrapSheet(s, `<div class="ok"><div class="tick">${ic("fp")}</div><h2>${t("bioOffT")}</h2><small>${t("bioOffD")}</small></div><div class="lb">${t("pin")}</div><input id="f3" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" oninput="pinOnly(this)"><div class="err">${esc(s.err)}</div><button class="btn" onclick="disableBio()">${t("bioOffY")}</button><button class="btn l" onclick="closeS()">${t("upl")}</button>`);
  return wrapSheet(s, `<div class="ok"><div class="tick">${ic("fp")}</div><h2>${t("bioT")}</h2><small>${t("bioD")}</small></div>`
    + (s.pin ? "" : `<div class="lb">${t("pin")}</div><input id="f3" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" oninput="pinOnly(this)"><div class="err">${esc(s.err)}</div>`)
    + `<button class="btn" onclick="enableBio()">${t("bioY")}</button><button class="btn l" onclick="closeS()">${t("upl")}</button>`);
}
async function toggleBio() {
  hap();
  const N = cap().NativeBiometric;
  if (!N) { toast(t("noscan")); return; }
  if (bioOn()) { S.sheet = {id: "bio", off: true, pin: "", fresh: true, err: ""}; renderSheet(); return; }
  try { const a = await N.isAvailable({useFallback: true}); if (!a.isAvailable) { toast(t("errg")); return; } } catch (e) { toast(t("errg")); return; }
  S.sheet = {id: "bio", pin: "", fresh: true, err: ""}; renderSheet();
}
async function enableBio() {
  const s = S.sheet, N = cap().NativeBiometric;
  if (!s || s.busy || !N) return;
  const ph = S.auth && S.me ? S.me.phone : S.phone, wasOut = !S.auth;
  const pin = s.pin || digs((document.getElementById("f3") || {}).value, 6);
  const fail = (m) => { s.busy = false; setBusy(false); if (S.sheet !== s) return; s.err = m; renderSheet(); shakeBox(); };
  if (!isPin(pin)) return fail(t("wp"));
  s.busy = true; setBusy(true);
  try {
    await signIn(ph, pin);
    await N.verifyIdentity({reason: t("bioR"), title: "FuNPaY", useFallback: true});
    await N.setCredentials({username: ph, password: pin, server: BIO_SERVER});
    localStorage.setItem("fpbio", ph);
  } catch (e) { return fail(errMsg(e)); }
  s.busy = false; toast(t("bioOn"));
  if (wasOut) { S.sheet = null; renderSheet(); try { await enter(); } catch (e) { S.tok = ""; S.rt = ""; render(); toast(errMsg(e)); } return; }
  closeS(); setTimeout(() => swFlip(true), 300);
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
  if (!S.auth) setTimeout(() => { const f = document.getElementById("pinin"); if (f) { try { f.focus(); } catch (e) {} } }, 250);
}

/* ---------- বিকাশের মতো: সার্চ, ফিল্টার শিট, সাইড মেনু, লেনদেনের বিবরণ ---------- */
function openSearch() { hap(); S.seg = "t"; S.fq = true; if (S.tab === "inbox") render(); else go("inbox"); }
function openFilter() { hap(); S.sheet = {id: "flt", sel: S.ft.slice(), fresh: true}; renderSheet(); }
const FICON = {send: () => tile("send"), recv: () => `<div class="ic">${ic("up")}</div>`, rech: () => tile("rech"), cash: () => tile("cash"), pay: () => tile("pay"), bill: () => tile("bill"), add: () => tile("add"), oth: () => `<div class="ic">${ic("card")}</div>`};
function fltHtml() {
  const s = S.sheet;
  return `<div class="sh dlg flt${s.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div>
    <div class="fth"><b>${t("ftt")}</b><button onclick="closeS()">${t("close")}</button></div>
    <div class="fls">${FG.map(k => `<button class="fr${s.sel.includes(k) ? " on" : ""}" data-k="${k}" onclick="fltTog('${k}')">${FICON[k]()}<span>${t(k)}</span><i class="cb">${tickSvg}</i></button>`).join("")}</div>
    <div class="fbt"><button class="btn l" onclick="fltReset()">${t("reset")}</button><button class="btn" onclick="fltApply()">${t("apply")}</button></div></div></div>`;
}
function fltTog(k) {
  const s = S.sheet; if (!s) return; hap();
  const i = s.sel.indexOf(k); if (i < 0) s.sel.push(k); else s.sel.splice(i, 1);
  const b = document.querySelector('.fr[data-k="' + k + '"]'); if (b) b.classList.toggle("on", i < 0);
}
function fltReset() { const s = S.sheet; if (!s) return; hap(); s.sel = []; document.querySelectorAll(".fr").forEach(b => b.classList.remove("on")); }
function fltApply() { const s = S.sheet; if (!s) return; S.ft = s.sel.slice(); closeS(); setTimeout(() => { if (S.tab === "inbox") render(); }, 250); }

function openMenu() { hap(); S.sheet = {id: "menu", fresh: true}; renderSheet(); }
const mact = (js) => { hap(); closeS(); setTimeout(() => { try { (new Function(js))(); } catch (e) {} }, 290); };
function menuHtml() {
  const s = S.sheet, m = S.me || {};
  const it = (ico, lbl, js) => `<button class="dmi" onclick="mact(&quot;${js}&quot;)">${ic(ico)}<span>${lbl}</span></button>`;
  return `<div class="sh drw${s.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box">
    <div class="dhd"><b>${t("menu")}</b><div class="flang"><button class="${S.lang === "en" ? "on" : ""}" onclick="if(S.lang!=='en'){lang();renderSheet()}">Eng</button><button class="${S.lang === "bn" ? "on" : ""}" onclick="if(S.lang!=='bn'){lang();renderSheet()}">বাং</button></div></div>
    <div class="dpf"><div class="big" onclick="mact(&quot;openPhoto()&quot;)">${myAv(m.name)}</div><div><b>${esc(m.name || t("acct"))}</b><span>+88 ${esc(m.phone || "")}</span></div></div>
    <div class="dls">${it("home", t("home"), "go('home')")}${it("stmt", t("stmt"), "openStmt()")}${it("lim", t("lim"), "openInfo('lim')")}${it("qr", t("myqr"), "openQR('my')")}${it("help", t("help"), "openInfo('help')")}${it("info", t("about"), "openInfo('about')")}${it("ref", t("refer"), "inviteFriend()")}${it("out", t("logout"), "logout()")}</div>
    <small class="dver">${t("ver")}: ${APP_REL} (${APP_VERSION})</small></div></div>`;
}
function openInfo(k) { hap(); S.sheet = {id: "inf", k, fresh: true}; renderSheet(); }
function infHtml() {
  const s = S.sheet; let body = "";
  if (s.k === "lim") body = `<h3>${t("limt")}</h3><div class="lms">${[1, 2, 3, 4].map(n => `<div><span>${t("l" + n)}</span><b>${t("l" + n + "v")}</b></div>`).join("")}</div>`;
  else body = `<h3>${t(s.k === "help" ? "help" : "about")}</h3><p class="ip">${t(s.k === "help" ? "hlp" : "abt")}</p>`;
  return `<div class="sh dlg${s.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div>${body}<button class="btn" onclick="closeS()">${t("ok")}</button></div></div>`;
}
function inviteFriend() {
  hap(); const txt = t("invite") + (S.me ? S.me.phone : "");
  try { if (navigator.share) { navigator.share({text: txt}).catch(() => {}); return; } } catch (e) {}
  try { navigator.clipboard.writeText(txt).then(() => toast(t("copied")), () => toast(t("copied"))); } catch (e) { toast(t("copied")); }
}
function openTrx(trx) {
  const x = S.tx.find(r => r.trx === trx); if (!x) return;
  hap(); S.sheet = {id: "trd", x, fresh: true}; renderSheet();
}
const isFail = (x) => /fail|error|cancel/i.test(String((x && x.status) || ""));
const stBadge = (x) => isFail(x) ? `<span class="stc bad">${ic("info")}${t("fail")}</span>` : `<span class="stc">${ic("ok2")}${t("okk")}</span>`;
function trdRows(x) {
  const v = tv(x), out = x.from_id === S.uid, R = [], G = "#12a15b";
  R.push([t("svc"), esc(t(v.key))]);
  if (["send", "pay", "cash"].includes(x.type)) {
    const nm = out ? x.to_name : x.from_name, ph = out ? x.to_phone : x.from_phone;
    const lbl = x.type === "cash" ? t(out ? "agl" : "cust") : x.type === "pay" ? t(out ? "mrc" : "snd") : t(out ? "rcvr" : "snd");
    R.push([lbl, esc(nm || ph || "")]);
    if (ph) R.push([t("num2"), esc(ph), ph]);
  } else if (SVC.includes(x.type)) {
    if (x.ch) R.push([t("opr"), esc(t(x.ch))]);
    const cf = cfg(x.type); if (x.ref) R.push([t(cf && cf.f ? cf.f : "num2"), esc(x.ref), x.ref]);
  } else if (x.type === "add") R.push([t("src"), "FuNPaY"]);
  R.push([t("amtl"), money2(x.amount)]);
  if (out && Number(x.fee)) R.push([t("feel"), money2(x.fee)]);
  else if (Number(x.comm)) R.push([t("comm"), money2(x.comm), G]);
  if (out && Number(x.disc)) R.push([t("disc"), "- " + money2(x.disc), G]);
  R.push([t("trx"), esc(x.trx), null, x.trx], [t("at"), fmt(x.created_at)]);
  return R;
}
function trdHtml0() {
  const s = S.sheet, x = s.x, v = tv(x);
  const out = x.from_id === S.uid, nm = out ? x.to_name : x.from_name, ph = out ? x.to_phone : x.from_phone;
  const R = trdRows(x).filter(r => r[0] !== t("svc"));
  const cells = R.map(r => { const col = r[2] && r[2].charAt(0) === "#" ? r[2] : null, cp = col ? null : (r[2] || r[3]); return `<div><span>${r[0]}</span><b${col ? ` style="color:${col}"` : ""}><em>${r[1]}</em>${cp ? `<button class="cb2" aria-label="${t("copy")}" onclick="copyTxt('${esc(cp)}')">${ic("copy")}</button>` : ""}</b></div>`; });
  if (cells.length % 2) cells[cells.length - 1] = cells[cells.length - 1].replace("<div>", '<div class="wide">');
  return `<div class="sh dlg trdd${s.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div>
    <div class="ok"><div class="tdh">${SVC.includes(x.type) || x.type === "add" ? tile(x.type) : avatar(nm, ph)}</div><h2>${t(v.key)}</h2><div class="amt ${v.out ? "mi" : "pl"}">${v.out ? "-" : "+"}${money2(v.amt)}</div>${stBadge(x)}</div>
    <div class="tgrid">${cells.join("")}</div><div class="rbt"><button class="btn l" onclick="shareTrx()">${ic("shr")}${t("share")}</button>${trdCanSend(x) ? `<button class="btn" onclick="trdSend()">${t("send")}</button>` : `<button class="btn" onclick="closeS()">${t("ok")}</button>`}</div><button class="trx" aria-label="${t("close")}" onclick="closeS()"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div></div>`;
}
/* v2.50: ট্রানজেকশন পেজ — "সেন্ড মানি" বাটনে ওই নম্বরেই সেন্ড মানির পেজ খোলে; ডানে ওপরে ক্রস দিয়ে বন্ধ */
function trdWho(x) { const out = x.from_id === S.uid; return {nm: out ? x.to_name : x.from_name, ph: out ? x.to_phone : x.from_phone}; }
function trdCanSend(x) { if (!x || !["send", "pay", "cash"].includes(x.type)) return false; const w = trdWho(x); return isPh(w.ph) && !(S.me && w.ph === S.me.phone); }
function trdSend() {
  const s = S.sheet; if (!s || !s.x || !trdCanSend(s.x)) { closeS(); return; }
  const w = trdWho(s.x); hap(); openS("send", w.ph, w.nm || "");
}
function shareTrx() {
  const s = S.sheet; if (!s || !s.x) return; const x = s.x, v = tv(x), out = x.from_id === S.uid;
  const nm = out ? x.to_name : x.from_name, ph = out ? x.to_phone : x.from_phone, person = ["send", "pay", "cash"].includes(x.type);
  const rows = trdRows(x).map(r => [r[0], String(r[1]).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), r[2] && r[2].charAt(0) === "#" ? r[2] : null]);
  doShare({title: t(v.key), status: t(isFail(x) ? "fail" : "okk"), amount: (v.out ? "- " : "+ ") + money2(v.amt), who: person ? {name: nm, phone: ph} : null, rows, foot: fmt(x.created_at)}, "FuNPaY-" + x.trx + ".png");
}

/* ---------- স্টেটমেন্ট: 1/3/6/12 মাস বেছে রিসিট বানানো ---------- */
const STP = [1, 3, 6, 12];
function openStmt() { hap(); S.sheet = {id: "stm", per: 3, data: null, busy: false, err: "", fresh: true}; renderSheet(); }
function stmPer(n) { const s = S.sheet; if (!s || s.busy) return; hap(); s.per = n; s.data = null; s.err = ""; renderSheet(); }
const dstr = (d) => { const p = (x) => String(x).padStart(2, "0"); return p(d.getDate()) + "/" + p(d.getMonth() + 1) + "/" + d.getFullYear(); };
const MBN = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"], MEN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function months(x) {
  const m = new Map();
  x.forEach((r) => {
    const d = new Date(r.created_at), k = d.getFullYear() * 100 + d.getMonth(), v = tv(r);
    if (!m.has(k)) m.set(k, {k, lbl: (S.lang === "bn" ? MBN : MEN)[d.getMonth()] + " " + d.getFullYear(), ci: 0, co: 0, n: 0});
    const o = m.get(k); o.n++; if (v.out) o.co += v.amt; else o.ci += v.amt;
  });
  return [...m.values()].sort((a, b) => b.k - a.k);
}
async function stmGen() {
  const s = S.sheet; if (!s || s.busy) return; hap();
  s.busy = true; s.err = ""; renderSheet();
  const to = new Date(), from = new Date(to); from.setMonth(from.getMonth() - s.per);
  try {
    const x = await api("/rest/v1/transactions?select=*&created_at=gte." + encodeURIComponent(from.toISOString()) + "&order=id.desc&limit=1000");
    let ci = 0, co = 0; x.forEach((r) => { const v = tv(r); if (v.out) co += v.amt; else ci += v.amt; });
    s.data = {x, from, to, ci, co, mo: months(x)};
  } catch (e) { s.err = errMsg(e); }
  s.busy = false; if (S.sheet === s) renderSheet();
}
function stmHtml() {
  const s = S.sheet, m = S.me || {}, d = s.data;
  const chips = STP.map(n => `<button class="${s.per === n ? "on" : ""}" onclick="stmPer(${n})">${t("p" + n)}</button>`).join("");
  const head = `<div class="pcard stmh"><div class="rcp">${avatar(m.name, m.phone)}<div><b>${esc(m.name || t("acct"))}</b><span>+88 ${esc(m.phone || "")}</span></div></div></div>
    <div class="pcard"><div class="lb">${t("stp")}</div><div class="stpc">${chips}</div><div class="err" style="text-align:center">${esc(s.err)}</div></div>`;
  let body = head;
  if (d) {
    const mrows = d.mo.map(o => `<div class="mrow"><b>${o.lbl}</b><span class="gr">+${money2(o.ci)}</span><span class="rd2">-${money2(o.co)}</span><small>${o.n}</small></div>`).join("");
    body += `<div class="pcard stms"><div class="sdt">${dstr(d.from)} – ${dstr(d.to)}</div><div class="bkt"><div><span>${t("tin")}</span><b class="gr">${money2(d.ci)}</b></div><div><span>${t("tout")}</span><b>${money2(d.co)}</b></div><div><span>${t("tcnt")}</span><b>${d.x.length}</b></div></div></div>`
      + (d.x.length ? `<div class="pcard"><div class="lb">${t("mwise")}</div><div class="mtab"><div class="mrow mh"><b></b><span>${t("tin")}</span><span>${t("tout")}</span><small>${t("tcnt")}</small></div>${mrows}</div></div>` : `<p class="em">${t("nostm")}</p>`);
  }
  const foot = d && d.x.length ? `<button class="btn${s.busy ? " ld" : ""}" onclick="stmShare()">${ic("shr")}${t("stpdf")}</button>` : `<button class="btn${s.busy ? " ld" : ""}" onclick="stmGen()">${t("gen")}</button>`;
  return wrapPage(s, t("stmt"), "closeS()", body, foot);
}
/* PDF: প্রতিটি পাতা ছবি (JPEG) হিসেবে বসিয়ে সাধারণ PDF ফাইল */
function stmPages(d) {
  const m = S.me || {}, W = 720, H = 1018, pad = 40, pages = [];
  let c, g, y, pn = 0;
  const newPage = () => {
    c = document.createElement("canvas"); c.width = W; c.height = H; g = c.getContext("2d"); pages.push(c); pn++;
    g.fillStyle = "#fff"; g.fillRect(0, 0, W, H);
    g.textAlign = "center"; g.fillStyle = "#a79ba3"; g.font = CF(500, 20); g.fillText("FuNPaY · " + m.name + " · " + (S.lang === "bn" ? "পাতা " : "Page ") + pn, W / 2, H - 24);
    if (pn === 1) {
      const gr = g.createLinearGradient(0, 0, W, 150); gr.addColorStop(0, "#e2136e"); gr.addColorStop(1, "#f0549a"); g.fillStyle = gr; g.fillRect(0, 0, W, 130);
      g.fillStyle = "#fff"; g.textAlign = "left"; g.font = CF(800, 38); g.fillText("FuNPaY", pad, 62); g.font = CF(600, 26); g.fillText(t("stt"), pad, 104);
      g.fillStyle = "#2b2530"; g.font = CF(700, 29); g.fillText(t("acn") + ": " + (m.name || ""), pad, 182);
      g.fillStyle = "#6f6973"; g.font = CF(500, 24); g.fillText("+88 " + (m.phone || "") + "   ·   " + dstr(d.from) + " – " + dstr(d.to), pad, 220);
      y = 262;
    } else y = 50;
  };
  const line = () => { g.strokeStyle = "#f0e7ed"; g.lineWidth = 2; g.beginPath(); g.moveTo(pad, y); g.lineTo(W - pad, y); g.stroke(); };
  newPage();
  // সারাংশ
  g.fillStyle = "#faf5f8"; rrect(g, pad, y, W - pad * 2, 96, 16); g.fill();
  [[t("tin"), money2(d.ci), "#12a15b"], [t("tout"), money2(d.co), "#e2136e"], [t("tcnt"), String(d.x.length), "#2b2530"]].forEach((r, i) => {
    const cx = pad + 20 + i * ((W - pad * 2 - 20) / 3); g.textAlign = "left"; g.fillStyle = "#8b8590"; g.font = CF(500, 20); g.fillText(r[0], cx, y + 36); g.fillStyle = r[2]; g.font = CF(800, 25); g.fillText(r[1], cx, y + 72);
  });
  y += 130;
  // মাস অনুযায়ী
  g.textAlign = "left"; g.fillStyle = "#2b2530"; g.font = CF(800, 25); g.fillText(t("mwise"), pad, y); y += 14;
  g.fillStyle = "#f6eef3"; g.fillRect(pad, y, W - pad * 2, 40); g.fillStyle = "#8b8590"; g.font = CF(600, 19); g.textAlign = "left"; g.fillText("", pad + 12, y + 27);
  g.textAlign = "right"; g.fillText(t("tin"), 400, y + 27); g.fillText(t("tout"), 590, y + 27); g.fillText(t("tcnt"), W - pad - 8, y + 27); y += 40;
  d.mo.forEach((o) => {
    if (y > H - 110) newPage();
    g.textAlign = "left"; g.fillStyle = "#2b2530"; g.font = CF(700, 22); g.fillText(o.lbl, pad + 12, y + 33);
    g.textAlign = "right"; g.font = CF(700, 21); g.fillStyle = "#12a15b"; g.fillText(money2(o.ci), 400, y + 33); g.fillStyle = "#e2136e"; g.fillText(money2(o.co), 590, y + 33); g.fillStyle = "#6f6973"; g.fillText(String(o.n), W - pad - 8, y + 33);
    y += 48; line();
  });
  y += 44;
  if (y > H - 160) newPage();
  g.textAlign = "left"; g.fillStyle = "#2b2530"; g.font = CF(800, 25); g.fillText(t("trn"), pad, y); y += 14;
  g.fillStyle = "#f6eef3"; g.fillRect(pad, y, W - pad * 2, 40); g.fillStyle = "#8b8590"; g.font = CF(600, 19); g.fillText(t("dtl") + " / " + t("trn"), pad + 12, y + 27); g.textAlign = "right"; g.fillText(t("amc"), W - pad - 8, y + 27); y += 48;
  d.x.forEach((r) => {
    if (y > H - 100) { newPage(); }
    const v = tv(r);
    g.textAlign = "left"; g.fillStyle = "#2b2530"; g.font = CF(700, 22); g.fillText(fitTxt(g, t(v.key) + (v.who ? " · " + v.who : ""), W - pad * 2 - 230), pad + 12, y + 26);
    g.fillStyle = "#8b8590"; g.font = CF(500, 18); g.fillText(r.trx + "  ·  " + fmt(r.created_at), pad + 12, y + 54);
    g.textAlign = "right"; g.fillStyle = v.out ? "#e2136e" : "#12a15b"; g.font = CF(800, 23); g.fillText((v.out ? "- " : "+ ") + money2(v.amt), W - pad - 8, y + 36);
    y += 72; line();
  });
  return pages;
}
function pdfBlob(cs) {
  const enc = new TextEncoder(), parts = [], offs = []; let off = 0;
  const push = (x) => { const b = typeof x === "string" ? enc.encode(x) : x; parts.push(b); off += b.length; };
  const n = cs.length; let kids = ""; for (let i = 0; i < n; i++) kids += (3 + i * 3) + " 0 R ";
  push("%PDF-1.4\n");
  offs[1] = off; push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  offs[2] = off; push("2 0 obj\n<< /Type /Pages /Kids [" + kids + "] /Count " + n + " >>\nendobj\n");
  cs.forEach((c, i) => {
    const id = 3 + i * 3, b64 = c.toDataURL("image/jpeg", .9).split(",")[1], bin = atob(b64), jb = new Uint8Array(bin.length);
    for (let k = 0; k < bin.length; k++) jb[k] = bin.charCodeAt(k);
    const ct = "q 595 0 0 842 0 0 cm /Im0 Do Q";
    offs[id] = off; push(id + " 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /XObject << /Im0 " + (id + 2) + " 0 R >> >> /Contents " + (id + 1) + " 0 R >>\nendobj\n");
    offs[id + 1] = off; push((id + 1) + " 0 obj\n<< /Length " + ct.length + " >>\nstream\n" + ct + "\nendstream\nendobj\n");
    offs[id + 2] = off; push((id + 2) + " 0 obj\n<< /Type /XObject /Subtype /Image /Width " + c.width + " /Height " + c.height + " /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length " + jb.length + " >>\nstream\n"); push(jb); push("\nendstream\nendobj\n");
  });
  const total = 3 + n * 3, xr = off; let x = "xref\n0 " + total + "\n0000000000 65535 f \n";
  for (let i = 1; i < total; i++) x += String(offs[i]).padStart(10, "0") + " 00000 n \n";
  push(x + "trailer\n<< /Size " + total + " /Root 1 0 R >>\nstartxref\n" + xr + "\n%%EOF");
  return new Blob(parts, {type: "application/pdf"});
}
async function stmShare() {
  const s = S.sheet; if (!s || !s.data) return; hap();
  let ok = false;
  try { ok = await shareImage(pdfBlob(stmPages(s.data)), "FuNPaY-statement-" + Date.now() + ".pdf", t("stt"), "application/pdf"); } catch (e) { console.log(e); }
  if (!ok) toast(t("shfail"));
}
/* লগ আউট: অ্যাকাউন্ট ও ফিঙ্গারপ্রিন্ট ফোনে থেকে যায়, শুধু লগইন (PIN) পাতায় ফিরে আসে */
function logout() {
  hap();
  S.view = ""; S.pin = "";
  lock();
}

/* ---------- v2.16: KYC (NID স্ক্যান + মুখ + PIN, তারপর অ্যাডমিন যাচাই) ---------- */
Object.assign(T.bn, {k_title:"ভেরিফিকেশন (KYC)", k_h:"পরিচয় যাচাই করুন", k_sub:"অ্যাকাউন্ট চালু করতে আপনার NID ও মুখ যাচাই লাগবে।", k_l1:"NID কার্ডের সামনে ও পেছনের ছবি", k_l2:"নিজের মুখের ছবি", k_l3:"PIN দিয়ে নিশ্চিত করা", k_note:"যাচাই শেষ হলে ফল আপনার মোবাইলে মেসেজে জানানো হবে।", k_start:"শুরু করুন", k_again:"আবার জমা দিন", k_rej:"আবেদন বাতিল হয়েছে", k_front:"NID-র সামনের দিক", k_back:"NID-র পেছনের দিক", k_hf:"কার্ডটি ফ্রেমের ভেতরে রাখুন, লেখা যেন পরিষ্কার দেখা যায়", k_hb:"এবার কার্ডের পেছনের দিক ফ্রেমে রাখুন", k_retake:"আবার তুলুন", k_use:"ঠিক আছে", k_nocam:"ক্যামেরা চালু করা যায়নি। নিচের গ্যালারি বাটনে চেপে ছবি নিন", k_readd:"NID থেকে তথ্য পড়া হচ্ছে", k_readw:"একটু সময় লাগতে পারে, অপেক্ষা করুন", k_info:"আপনার তথ্য", k_infos:"অ্যাপ NID থেকে পড়ে নিয়েছে। ভুল থাকলে ঘরে চেপে ঠিক করুন।", k_nm:"নাম", k_fa:"পিতার নাম (নমিনি)", k_dob:"জন্মতারিখ", k_nid:"NID নম্বর", k_ad:"ঠিকানা", k_miss:"পড়া যায়নি, এখানে লিখুন", k_next:"পরের ধাপ", k_face:"মুখ যাচাই", k_faceh:"মুখ ফ্রেমের ভেতরে রাখুন, আলো যেন সামনে থাকে", k_snap:"ছবি তুলুন", k_pin:"PIN দিয়ে নিশ্চিত করুন", k_pins:"ছবি ও তথ্য জমা দিতে আপনার 6 ডিজিটের PIN দিন", k_sub2:"জমা দিন", k_up:"ছবি আপলোড হচ্ছে…", k_up2:"তথ্য জমা হচ্ছে…", k_wh:"জমা হয়েছে, যাচাই চলছে", k_ws:"আমরা আপনার NID ও মুখ মিলিয়ে দেখছি। ফল মেসেজে আসবে, তখন অ্যাকাউন্ট চালু হবে।", k_chk:"অবস্থা দেখুন", k_okh:"অ্যাকাউন্ট চালু হয়েছে", k_oks:"আপনার পরিচয় যাচাই হয়েছে। এখন সব সেবা ব্যবহার করতে পারবেন।", k_home:"হোমে যান", k_bad:"সব ঘর ঠিকমতো পূরণ করুন", k_badnid:"NID নম্বর ঠিক নয় (10, 13 বা 17 ডিজিট)", k_still:"এখনো যাচাই চলছে", k_used:"এই NID দিয়ে আরেকটি অ্যাকাউন্ট আছে", k_upf:"ছবি আপলোড হয়নি, আবার চেষ্টা করুন", k_state:"আবেদন আগেই জমা আছে", k_lock:"KYC যাচাই শেষ না হলে টাকা খরচ করা যাবে না", k_ocrfail:"লেখা পড়া যায়নি, নিজে লিখুন। ছবি দেখে অ্যাডমিন মিলিয়ে নেবেন।", k_ver:"যাচাই করা", k_kyc:"KYC যাচাই", k_kycok:"যাচাই হয়েছে"});
Object.assign(T.en, {k_title:"Verification (KYC)", k_h:"Verify your identity", k_sub:"To activate your account we need to verify your NID and face.", k_l1:"Photos of the front and back of your NID", k_l2:"A photo of your face", k_l3:"Confirm with your PIN", k_note:"You will get the result by SMS/message once it is reviewed.", k_start:"Start", k_again:"Submit again", k_rej:"Request rejected", k_front:"NID front", k_back:"NID back", k_hf:"Keep the card inside the frame, text should be sharp", k_hb:"Now place the back of the card in the frame", k_retake:"Retake", k_use:"Looks good", k_nocam:"Could not start the camera. Use the gallery button below", k_readd:"Reading details from your NID", k_readw:"This may take a moment", k_info:"Your details", k_infos:"The app read these from your NID. Tap a box to fix anything wrong.", k_nm:"Name", k_fa:"Father's name (nominee)", k_dob:"Date of birth", k_nid:"NID number", k_ad:"Address", k_miss:"Could not read, type here", k_next:"Next", k_face:"Face check", k_faceh:"Keep your face inside the frame with light in front", k_snap:"Take photo", k_pin:"Confirm with PIN", k_pins:"Enter your 6-digit PIN to submit your photos and details", k_sub2:"Submit", k_up:"Uploading photos…", k_up2:"Submitting details…", k_wh:"Submitted, under review", k_ws:"We are matching your NID and face. You will get the result by message and your account will be activated.", k_chk:"Check status", k_okh:"Account activated", k_oks:"Your identity is verified. You can now use every service.", k_home:"Go home", k_bad:"Fill in all the boxes", k_badnid:"NID number is not valid (10, 13 or 17 digits)", k_still:"Still under review", k_used:"Another account already uses this NID", k_upf:"Photo upload failed, try again", k_state:"A request is already submitted", k_lock:"You cannot spend money until KYC is approved", k_ocrfail:"Could not read the text, please type it. The admin will check against the photo.", k_ver:"Verified", k_kyc:"KYC", k_kycok:"Verified"});

Object.assign(T.bn, {k_ok:"ঠিক আছে", k_auto:"কার্ডটি ফ্রেমে ধরুন, সিস্টেম নিজেই ছবি তুলে নেবে", k_steady:"ক্যামেরা স্থির রাখুন…", k_blur:"আরও কাছে বা আলোতে ধরুন, লেখা পরিষ্কার হওয়া চাই", k_chk2:"কার্ড যাচাই হচ্ছে…", k_got:"ছবি তোলা হয়েছে", k_wrong:"ভুল দিক", k_isf:"এটি পেছনের দিক নয়, এটি সামনের দিক। কার্ডের পেছনের দিক (ঠিকানার দিক) দেখান।", k_isb:"এটি সামনের দিক নয়, এটি পেছনের দিক। কার্ডের সামনের দিক (ছবি ও নামের দিক) দেখান।", k_notid:"এটি আইডি কার্ড নয়", k_notidm:"আইডি কার্ড প্রদান করুন। কার্ডের পুরোটা ফ্রেমে রেখে পরিষ্কার ছবি দিন।", k_shh:"স্ক্রিনশট চলবে না", k_shm:"স্ক্রিনশট নয়, কার্ডের আসল ছবি (ক্যামেরায় তোলা) আপলোড করুন।", k_okc:"টি ঘর ঠিক আছে", k_s1:"জমা হয়েছে", k_s2:"যাচাই চলছে", k_s3:"কনফার্ম", k_sr:"ডান", k_sl:"বাম", k_su:"উপর", k_sd:"নিচ", k_dr:"ধীরে ডান দিকে মুখ ঘোরান", k_dl:"ধীরে বাম দিকে মুখ ঘোরান", k_du:"মুখ একটু উপরে তুলুন", k_dd:"মুখ একটু নিচে নামান", k_fload:"মুখ যাচাইয়ের প্রস্তুতি চলছে…", k_fcen:"মুখ ফ্রেমের মাঝে সোজা রাখুন", k_fhold:"এভাবেই স্থির থাকুন…", k_fnone:"মুখ দেখা যাচ্ছে না, ফ্রেমে আনুন", k_fok:"মুখ যাচাই সম্পন্ন", k_left:"বাকি", k_ffb:"মুখ যাচাই চালু করা যায়নি (নেট লাগে)। নিচের বাটনে চেপে ছবি তুলুন", otppaste:"কোড পেস্ট করুন", otpcb:"কোড পেস্ট করা গেল না, ঘরে চেপে ধরে পেস্ট করুন"});
Object.assign(T.en, {k_ok:"OK", k_auto:"Hold the card in the frame, the app will take the photo by itself", k_steady:"Hold the camera steady…", k_blur:"Move closer or into light, the text must be sharp", k_chk2:"Checking the card…", k_got:"Photo taken", k_wrong:"Wrong side", k_isf:"This is the front, not the back. Show the back of the card (address side).", k_isb:"This is the back, not the front. Show the front of the card (photo and name side).", k_notid:"This is not an ID card", k_notidm:"Please provide an ID card. Keep the whole card in view, clear photo.", k_shh:"Screenshots are not allowed", k_shm:"Upload the real photo of the card taken with a camera, not a screenshot.", k_okc:" fields look right", k_s1:"Submitted", k_s2:"Reviewing", k_s3:"Confirmed", k_sr:"Right", k_sl:"Left", k_su:"Up", k_sd:"Down", k_dr:"Slowly turn your face to the right", k_dl:"Slowly turn your face to the left", k_du:"Tilt your face up a little", k_dd:"Tilt your face down a little", k_fload:"Getting face check ready…", k_fcen:"Keep your face straight in the middle of the frame", k_fhold:"Stay like this…", k_fnone:"Face not visible, bring it into the frame", k_fok:"Face check complete", k_left:"Left", k_ffb:"Face check could not start (needs internet). Use the button below to take a photo", otppaste:"Paste code", otpcb:"Could not paste, long-press the boxes and paste"});

Object.assign(T.bn, {"k_sb": "পলক", "k_db": "দুইবার চোখের পলক ফেলুন", "k_frs": "সময় শেষ, ধাপগুলো আবার শুরু হলো", "k_m_h": "মুখ মেলানো হচ্ছে", "k_m_l1": "মুখ চেনার প্রস্তুতি চলছে (প্রথমবার একটু সময় লাগে)…", "k_m_l2": "NID কার্ডের ছবি থেকে মুখ খুঁজছি…", "k_m_l3": "সেলফির সাথে মিলিয়ে দেখছি…", "k_m_l4": "মুখ ঘোরানোর ছবিগুলো যাচাই হচ্ছে…", "k_m_okh": "মুখ মিলেছে", "k_m_oks": "NID-র ছবির সাথে আপনার মুখ মিলেছে। PIN দিলেই অ্যাকাউন্ট চালু হয়ে যাবে।", "k_m_rvh": "মিল ভালো, অ্যাডমিন দেখবে", "k_m_rvs": "মুখ মিলেছে, কিন্তু লাইভনেস পুরো যাচাই করা যায়নি। তাই অ্যাডমিন দেখে অ্যাকাউন্ট চালু করবে।", "k_m_lowh": "মুখ মেলেনি", "k_m_lows": "নিচের কারণগুলো ঠিক করে আবার সেলফি দিন।", "k_m_final": "২ বার চেষ্টা হয়েছে। এবার \"মেলেনি\" চিহ্নসহ অ্যাডমিনের কাছে পাঠানো হবে, অ্যাডমিন নিজে দেখে সিদ্ধান্ত নেবে।", "k_m_nmh": "স্বয়ংক্রিয় যাচাই হয়নি", "k_m_nm": "মুখ মেলানোর অংশ চালু করা যায়নি (নেট লাগে)। অ্যাডমিন হাতে মিলিয়ে দেখবে।", "k_m_try": "আবার সেলফি দিন", "k_m_card": "NID আবার তুলুন", "k_m_send": "অ্যাডমিনের কাছে পাঠান", "k_m_go": "এগিয়ে যান", "k_m_att": "চেষ্টা", "k_m_need": "চালু হতে লাগবে", "k_r_noface": "সেলফিতে মুখ পাওয়া যায়নি। মুখ ফ্রেমের মাঝখানে রাখুন।", "k_r_dark": "আলো কম, মুখ স্পষ্ট নয়। আলোর দিকে মুখ করে তুলুন।", "k_r_bright": "আলো খুব বেশি বা পেছন থেকে আসছে, মুখ সাদা হয়ে গেছে।", "k_r_blur": "ছবি ঝাপসা। ফোন স্থির রাখুন।", "k_r_far": "মুখ ছোট দেখাচ্ছে। ক্যামেরার আরও কাছে আসুন।", "k_r_cover": "মুখ ঢাকা বা অস্পষ্ট: চশমা, টুপি, মাস্ক বা হাত সরিয়ে নিন।", "k_r_card": "NID কার্ডের ছবিতে মুখ পাওয়া যায়নি। কার্ড পরিষ্কার করে আবার তুলুন, আলোর ঝলক যেন না পড়ে।", "k_r_cardq": "NID-র ছবির মুখ ঝাপসা, অন্ধকার বা ঝলকে ঢাকা। কার্ড আবার তুলুন।", "k_r_swap": "মুখ ঘোরানোর সময় একই মুখ পাওয়া যায়নি।", "k_r_live": "মুখ ঘোরানো ও চোখের পলক ঠিকমতো যাচাই হয়নি, আবার করুন।", "k_r_diff": "NID-র ছবির সাথে মুখের মিল কম। আলো ঠিক রেখে সরাসরি ক্যামেরার দিকে তাকান।", "k_limit": "আজ অনেকবার চেষ্টা হয়েছে, পরে আবার চেষ্টা করুন"});
Object.assign(T.en, {"k_sb": "Blink", "k_db": "Blink your eyes twice", "k_frs": "Time is up, the steps start again", "k_m_h": "Matching your face", "k_m_l1": "Getting face matching ready (first time takes a moment)…", "k_m_l2": "Finding the face on your NID photo…", "k_m_l3": "Comparing with your selfie…", "k_m_l4": "Checking the photos from the head turns…", "k_m_okh": "Face matched", "k_m_oks": "Your face matches the photo on your NID. Enter your PIN and your account will be activated.", "k_m_rvh": "Good match, admin will review", "k_m_rvs": "Your face matched, but liveness could not be fully checked. The admin will review and activate your account.", "k_m_lowh": "Face did not match", "k_m_lows": "Fix the points below and take the selfie again.", "k_m_final": "You have tried twice. It will now go to the admin marked \"not matched\" and the admin will decide.", "k_m_nmh": "Automatic check not done", "k_m_nm": "Face matching could not start (needs internet). The admin will check by hand.", "k_m_try": "Take selfie again", "k_m_card": "Retake NID", "k_m_send": "Send to admin", "k_m_go": "Continue", "k_m_att": "Try", "k_m_need": "needed to activate", "k_r_noface": "No face found in the selfie. Keep your face in the middle of the frame.", "k_r_dark": "Too dark, your face is not clear. Face the light.", "k_r_bright": "Too bright or light from behind, your face is washed out.", "k_r_blur": "The photo is blurry. Hold the phone steady.", "k_r_far": "Your face looks small. Move closer to the camera.", "k_r_cover": "Face is covered or unclear: remove glasses, cap, mask or hand.", "k_r_card": "No face found on the NID photo. Retake the card clearly, with no glare.", "k_r_cardq": "The face on the NID is blurry, dark or hidden by glare. Retake the card.", "k_r_swap": "The same face was not found during the head turns.", "k_r_live": "Head turns and blink were not checked properly, try again.", "k_r_diff": "Low match with the NID photo. Keep good light and look straight at the camera.", "k_limit": "Too many tries today, please try again later"});
const K = {open:false, step:"intro", flow:false, d:{name:"", name_bn:"", father:"", mother:"", dob:"", nid:"", addr:"", blood:"N.A.", division:"", district:"", upazila:"", postoffice:"", postcode:"", gender:"", incsrc:"", income:"", occ:""}, front:"", back:"", selfie:"", pv:"", reason:"", busy:false, reading:false, fail:false, pg:{front:0, back:0}, msg:"", err:"", p1:null, p2:null, pre:{}, vbusy:false, auto:false, at:0,
  /* v2.20: মুখ মেলানো */ live:null, cardOnly:false, mres:null, mrun:false, mid:0, tries:0, cardDesc:null, cardThumb:"", cardQ:null, desc:null};
let KS = null;
const KI = {
  kn:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  kf:'<circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9.5" r="2.4"/><path d="M3 20c0-3.6 3-5.4 6-5.4s6 1.8 6 5.4M15.5 14.8c3 0 5.5 1.5 5.5 5"/>',
  kd:'<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  ki:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="8.5" cy="11" r="2"/><path d="M5.5 16c.6-1.6 1.7-2.2 3-2.2s2.4.6 3 2.2M14 10h4M14 13.5h3"/>',
  ka:'<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  gal:'<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',
  face:'<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/><path d="M8.5 14.5c1 1.4 2.2 2 3.5 2s2.5-.6 3.5-2"/>',
  pin:'<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 018 0v3"/><circle cx="12" cy="16" r="1.4" fill="currentColor"/>'
};
const kic = (k) => `<svg class="i" viewBox="0 0 24 24">${KI[k] || P[k] || ""}</svg>`;
const kBk = '<svg class="i" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
const kEl = () => { let e = document.getElementById("kyc"); if (!e) { e = document.createElement("div"); e.id = "kyc"; document.body.appendChild(e); } return e; };

/* অবস্থা মেলানো: প্রোফাইলের kyc_status অনুযায়ী স্ক্রিন খোলা/বন্ধ (SQL চালানো না থাকলে কিছুই করে না, অ্যাপ আগের মতো চলে) */
function kycSync() {
  if (!S.auth || !S.me || S.me.kyc_status === undefined || S.me.kyc_status === null) return;
  const st = S.me.kyc_status;
  if (st === "approved") { if (K.open && K.step !== "ok") { K.step = "ok"; K.flow = false; hap("MEDIUM"); kycRender(); } return; }
  if (K.flow) return;
  K.reason = S.me.kyc_reason || "";
  if (st === "pending") { if (!K.open || K.step !== "wait") { K.step = "wait"; kycRender(); } return; }
  if (!K.open || K.step === "wait") { K.step = "intro"; kycRender(); }
}
function kycClose(wipe) {
  window.__kyc = false; kcamStop();
  const e = document.getElementById("kyc"); if (e) e.remove();
  K.open = false; K.flow = false; K.step = "intro"; K.pv = ""; K.busy = false; K.reading = false; K.auto = false; K.vbusy = false; clearTimeout(K.at);
  if (wipe) { kWorkerStop(); if (KFL) { try { KFL.close(); } catch (e) {} KFL = null; KFLp = null; } K.pre = {}; K.front = K.back = K.selfie = ""; K.d = {name:"", name_bn:"", father:"", mother:"", dob:"", nid:"", addr:"", blood:"N.A.", division:"", district:"", upazila:"", postoffice:"", postcode:"", gender:"", incsrc:"", income:"", occ:""}; K.p1 = K.p2 = null; K.reason = ""; K.err = ""; K.live = null; K.cardOnly = false; K.mres = null; K.mrun = false; K.mid++; K.tries = 0; K.cardDesc = null; K.cardThumb = ""; K.cardQ = null; K.desc = null; K.lk = {}; K.ft = 0; K.redo = false; K.manual = false; K.rep = null; K.sum = null; }
  sbar();
}
function kSb() {
  try {
    const B = cap().StatusBar; if (!B) return;
    const dark = K.step === "face", cardPg = K.step === "front" || K.step === "back", col = dark ? "#12050c" : cardPg ? "#fff4fa" : "#e2136e";
    Promise.resolve(B.setBackgroundColor({color: col})).catch(() => {}); Promise.resolve(B.setStyle({style: cardPg ? "LIGHT" : "DARK"})).catch(() => {});
    const m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", col);
  } catch (e) {}
}
function kycRender() {
  const el = kEl(), want = K.step === "face" ? "user" : (K.step === "front" || K.step === "back") ? "environment" : "";
  kcamStop(!!want && !!KS && KSf === want);
  window.__kyc = true; const first = !K.open; K.open = true;
  el.className = first ? "kin" : "";
  el.innerHTML = kHtml();
  kSb();
  if (["front", "back", "face"].includes(K.step) && !K.pv) setTimeout(kcamInit, 80);
  if (K.step === "info" && K.reading) kInfoStart();
  if (K.step === "match" && !K.mres && !K.mrun) kMatchRun();
  if (K.step === "pin") setTimeout(() => { const f = document.getElementById("kpin"); if (f) { try { f.focus(); } catch (e) {} } }, 320);
}
function kHtml() {
  const s = K.step;
  if (s === "intro") return kIntro();
  if (s === "front" || s === "back") return kScan(s);
  if (s === "info") return kInfo();
  if (s === "face") return kFace();
  if (s === "match") return kMatch();
  if (s === "pin") return kPin();
  if (s === "wait") return kWait();
  return kOk();
}
function kTop(title, back, idx) {
  const seg = idx >= 0 ? `<div class="ksg">${[0, 1, 2, 3].map(i => `<i class="${i <= idx ? "on" : ""}"></i>`).join("")}</div>` : "";
  return `<div class="kt"><button class="kbk${back ? "" : " h"}" onclick="${back || ""}">${kBk}</button><b>${title}</b><span></span></div>${seg}`;
}
const KILL = '<svg class="kill" viewBox="0 0 200 150" aria-hidden="true"><rect x="22" y="30" width="120" height="78" rx="12" fill="#fff" stroke="#e2136e" stroke-width="3"/><circle cx="52" cy="62" r="13" fill="#fde7f1" stroke="#e2136e" stroke-width="3"/><path d="M33 94c3-10 10-14 19-14s16 4 19 14" fill="none" stroke="#e2136e" stroke-width="3" stroke-linecap="round"/><path d="M88 52h38M88 66h30M88 80h36" stroke="#f0a3c6" stroke-width="5" stroke-linecap="round"/><g class="kshield"><path d="M150 70l30 10v22c0 17-13 28-30 33-17-5-30-16-30-33V80z" fill="#e2136e"/><path d="M137 105l9 9 18-20" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
function kIntro() {
  const rej = K.reason ? `<div class="krej">${ic("info")}<div><b>${t("k_rej")}</b><span>${esc(K.reason)}</span></div></div>` : "";
  const li = (k, tx) => `<div class="kli">${kic(k)}<span>${t(tx)}</span></div>`;
  return `<div class="kw">${kTop(t("k_title"), "", -1)}<div class="kbody">${rej}<div class="kcard kc1">${KILL}<h2>${t("k_h")}</h2><p>${t("k_sub")}</p></div>
    <div class="kcard kc2">${li("ki", "k_l1")}${li("face", "k_l2")}${li("pin", "k_l3")}</div><p class="knote">${t("k_note")}</p></div>
    <div class="kbtm"><button class="kbtn" onclick="kStart()">${t(K.reason ? "k_again" : "k_start")}</button><button class="klk" onclick="logout()">${t("logout")}</button></div></div>`;
}
function kStart() { hap(); K.flow = true; K.pv = ""; K.front = K.back = K.selfie = ""; K.err = ""; K.pre = {}; K.auto = false; K.vbusy = false; K.step = "front"; K.live = null; K.cardOnly = false; K.mres = null; K.mrun = false; K.mid++; K.tries = 0; K.cardDesc = null; K.cardThumb = ""; K.cardQ = null; K.desc = null; K.lk = {}; K.ft = 0; K.redo = false; K.manual = false; K.rep = null; K.sum = null; if (!(typeof KSRV !== "undefined" && KSRV.on && S.tok)) kWorker(); KPERM = null; kCamPerm(); kycRender(); }

/* ----- ক্যামেরা (v2.19: ভিডিও-লোগো বন্ধ, অটো ছবি তোলা, বাছাই-যাচাই) ----- */
const KPOST = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
const kVid = () => `<video id="kvid" poster="${KPOST}" playsinline muted autoplay disablepictureinpicture disableremoteplayback controlslist="nodownload nofullscreen noremoteplayback"></video>`;
const KA = {tm: 0, mt: 0, cv: null, prev: null, ok: 0, none: 0, busy: false, pause: 0};
const KFc = {on: false, tm: 0, st: 0, base: null, bs: [], hold: 0, lost: 0, shot: "", done: [0, 0, 0, 0, 0], last: "", ord: ["right", "left", "up", "down", "blink"], fr: [], t0: 0, rs: 0, bl: {c: false, n: 0}, nob: false};
let KPS = {i: 0, n: 1}, KFL = null, KFLp = null, KFLbad = false, KQ = Promise.resolve(), KCUR = "", KWp = null, KWbad = 0;
function kShrink(src, max, q) {
  const w = src.videoWidth || src.naturalWidth || src.width, h = src.videoHeight || src.naturalHeight || src.height, k = Math.min(1, max / Math.max(w, h));
  const c = document.createElement("canvas"); c.width = Math.round(w * k); c.height = Math.round(h * k);
  c.getContext("2d").drawImage(src, 0, 0, c.width, c.height);
  return c.toDataURL("image/jpeg", q);
}
const kSt = (k) => { const e = document.getElementById("kst"); if (e) e.textContent = t(k); };
function kManualShow() { const s = document.querySelector("#kyc .ksh"); if (s) s.classList.add("man"); }
/* ছবির অবস্থা-পপআপ */
function kPop(title, msg) {
  const el = document.getElementById("kyc"); if (!el) return;
  KA.pause = Infinity; const o = document.getElementById("kpop"); if (o) o.remove();
  const d = document.createElement("div"); d.className = "kpop"; d.id = "kpop";
  d.innerHTML = `<div class="kpb"><div class="kpi">!</div><h3>${esc(title)}</h3><p>${esc(msg)}</p><button class="kbtn" onclick="kPopOk()">${t("k_ok")}</button></div>`;
  el.appendChild(d); hap("HEAVY");
}
function kPopOk() { const o = document.getElementById("kpop"); if (o) o.remove(); KA.pause = Date.now() + 1200; hap(); }
/* ম্যানুয়াল শাটার */
/* গ্যালারি থেকে আপলোড: পুরো ছবিই নেওয়া হয়, ক্রপ নেই */
async function kIsShot(f, im) {
  const nm = String(f.name || ""), png = /png/i.test(f.type || "");
  if (/screenshot|screen[_ \-]?shot|স্ক্রিনশট/i.test(nm) || png) return true;
  let exif = false;
  try { const b = new Uint8Array(await f.slice(0, 65536).arrayBuffer()); for (let i = 0; i < b.length - 4; i++) { if (b[i] === 69 && b[i + 1] === 120 && b[i + 2] === 105 && b[i + 3] === 102) { exif = true; break; } } } catch (e) {}
  const d = window.devicePixelRatio || 1, sw = screen.width * d, sh = screen.height * d, w = im.naturalWidth, h = im.naturalHeight;
  const asp = Math.max(w, h) / Math.min(w, h), sa = Math.max(sw, sh) / Math.min(sw, sh);
  return !exif && h > w && Math.abs(asp - sa) / sa < .03;
}
function kFile(inp) {
  const f = inp.files && inp.files[0]; if (!f) return;
  const u = URL.createObjectURL(f), im = new Image(), side = K.step;
  im.onload = async () => {
    let shot = false; try { shot = await kIsShot(f, im); } catch (e) {}
    if (K.step !== side) { URL.revokeObjectURL(u); return; }
    if (shot) { URL.revokeObjectURL(u); try { inp.value = ""; } catch (e) {} kPop(t("k_shh"), t("k_shm")); return; }
    K.pv = kShrink(im, 1800, .86); K.repSrc = "gal"; K.imgWH = [im.naturalWidth, im.naturalHeight]; URL.revokeObjectURL(u); K.auto = false; K.pre[side] = ""; K.rep = null; kcamStop(); K.vbusy = true; kycRender(); kVal();
  };
  im.onerror = () => { URL.revokeObjectURL(u); toast(t("k_nocam")); };
  im.src = u;
}
function kRetake() { hap(); clearTimeout(K.at); K.rep = null; K.pv = ""; K.auto = false; K.vbusy = false; kycRender(); }
function kUse() {
  hap(); clearTimeout(K.at); K.auto = false; K.rep = null;
  if (K.step === "front" && K.cardOnly) { K.front = K.pv; K.pv = ""; K.cardOnly = false; K.cardDesc = null; K.cardThumb = ""; K.cardQ = null; K.mres = null; K.desc = null; K.step = "match"; kycRender(); return; }
  if (K.step === "front") { K.front = K.pv; K.pv = ""; K.pg.front = 0; K.p1 = kRead(K.front, "front"); K.step = K.redo ? "info" : "back"; if (K.redo) { K.redo = false; K.reading = true; } K.cardDesc = null; K.cardThumb = ""; K.cardQ = null; K.mres = null; kFaceModel(); kFA(); }
  else { K.back = K.pv; K.pv = ""; K.pg.back = 0; K.p2 = kRead(K.back, "back"); K.step = "info"; K.reading = true; }
  kycRender();
}
/* ----- অটো ছবি তোলা: ফ্রেমের ভেতরের কার্ড স্থির ও পরিষ্কার হলে নিজেই পড়ে দেখে সামনে/পেছনে মিলিয়ে ছবি তোলে ----- */
function kAutoStart() {
  kAutoStop(); KA.ok = 0; KA.none = 0; KA.prev = null; KA.busy = false; kWorker();
  KA.pause = document.getElementById("kpop") ? Infinity : 0; KA.tm = setInterval(kAutoTick, 420); KA.mt = setTimeout(kManualShow, 9000);
}
function kAutoStop() { clearInterval(KA.tm); clearTimeout(KA.mt); KA.tm = 0; KA.busy = false; }
function kRegCanvas(v, pad, max) {
  const R = kRegion(v, pad) || {x: 0, y: 0, w: v.videoWidth, h: v.videoHeight}, k = Math.min(1, max / Math.max(R.w, R.h));
  const c = document.createElement("canvas"); c.width = Math.round(R.w * k); c.height = Math.round(R.h * k);
  const g = c.getContext("2d"); try { g.filter = "grayscale(1) contrast(1.35)"; } catch (e) {} g.drawImage(v, R.x, R.y, R.w, R.h, 0, 0, c.width, c.height); return c;
}
/* ছবি পড়ে সামনে/পেছনের দিক চেনা */
function kReject(a, b) { K.pv = ""; K.vbusy = false; K.auto = false; K.pre[K.step] = ""; kycRender(); kPop(t(a), t(b)); }

/* ----- NID থেকে লেখা পড়া (ফোনের ভেতরেই চলে; প্রথমবার ভাষার ফাইল নামাতে একটু নেট লাগে) ----- */
function kTess() {
  if (window.Tesseract) return Promise.resolve(window.Tesseract);
  return new Promise((ok, no) => {
    const s = document.createElement("script"); s.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
    s.onload = () => (window.Tesseract ? ok(window.Tesseract) : no(new Error("OCR"))); s.onerror = () => no(new Error("OCR")); document.head.appendChild(s);
  });
}
function kWorker() {
  if (KWp) return KWp;
  if (KWbad >= 2) return Promise.resolve(null);
  KWp = (async () => {
    try {
      const T0 = await kTess();
      return await T0.createWorker(["ben", "eng"], 1, {logger: (m) => { if (m && m.status === "recognizing text" && KCUR) { K.pg[KCUR] = Math.max(K.pg[KCUR] || 0, (KPS.i + (m.progress || 0)) / KPS.n); kPct(); } }});
    } catch (e) { KWbad++; KWp = null; console.log("ocr", e && e.message); return null; }
  })();
  return KWp;
}
function kWorkerStop() { if (KWp) { KWp.then(w => { if (w) w.terminate(); }).catch(() => {}); KWp = null; } }
function kOcrData(cv, side) {
  const run = async () => {
    const w = await kWorker(); if (!w) return null; KCUR = side || "";
    try { const r = await Promise.race([w.recognize(cv), new Promise((_, no) => setTimeout(() => no(new Error("SLOW")), 80000))]); return (r && r.data) || null; }
    catch (e) { console.log("ocr", e && e.message); return null; } finally { KCUR = ""; }
  };
  const p = KQ.then(run, run); KQ = p.catch(() => {}); return p;
}
function kOcrText(cv, side) { return kOcrData(cv, side).then(d => d === null ? null : (d.text || "")); }
function kPrep(src, max, filt) {
  return new Promise((ok, no) => {
    const im = new Image();
    im.onload = () => {
      const k = Math.min(1, (max || 1800) / Math.max(im.naturalWidth, im.naturalHeight)), c = document.createElement("canvas");
      c.width = Math.round(im.naturalWidth * k); c.height = Math.round(im.naturalHeight * k);
      const g = c.getContext("2d"); try { g.filter = filt || "grayscale(1) contrast(1.35)"; } catch (e) {} g.drawImage(im, 0, 0, c.width, c.height); ok(c);
    };
    im.onerror = () => no(new Error("IMG")); im.src = src;
  });
}
function kPct() {
  const p = Math.round(((K.pg.front || 0) + (K.pg.back || 0)) * 50), a = document.getElementById("kpct"), b = document.getElementById("kbi");
  if (a) a.textContent = p + "%"; if (b) b.style.width = p + "%";
}
/* ======= v2.22: কড়া পড়া — NID নম্বর ও নাম নিশ্চিত না হলে কখনোই ভুল তথ্য নেওয়া হয় না ======= */
/* NID নম্বর: শুধু "ID NO / NID No" লেবেলের পাশের সংখ্যা; ঠিক ১০/১৩/১৭ ডিজিট; একাধিক সম্ভাবনা থাকলে কিছুই নেয় না */
function kNidCands(raw) {
  const out = [];
  for (const l of en(raw).split(/\r?\n/)) {
    const m = l.match(/(?:\bN\s*I\s*D|\bI\s*D)\s*(?:N\s*[O0o]\.?|No\.?|Number)?\s*[:;.\-]*\s*([0-9][0-9 \-]{8,24}[0-9])/i);
    if (!m) continue;
    const tk = m[1].trim().split(/[\s\-]+/).filter(Boolean), ok = []; let acc = "";
    for (const x of tk) { acc += x; if ([10, 13, 17].includes(acc.length)) ok.push(acc); }
    if (ok.length === 1) out.push(ok[0]);
  }
  return Array.from(new Set(out));
}
/* নাম: ইংরেজি "Name:" লাইনের পর শুধু ইংরেজি অক্ষরের শব্দ; প্রতিটি শব্দের OCR ভরসা (confidence) মাপা হয় */
const kNameKey = (v) => String(v || "").toUpperCase().replace(/[^A-Z ]/g, " ").replace(/\s+/g, " ").trim();
function kNameOf(words, txtLine) {
  let ws = words;
  if (!ws) ws = String(txtLine || "").split(/\s+/).filter(Boolean).map(x => ({text: x, confidence: null}));
  let i = ws.findIndex(w => String(w.text).replace(/[^A-Za-z]/g, "").toLowerCase() === "name");
  if (i < 0) return null;
  const tk = [], cf = [];
  for (let j = i + 1; j < ws.length; j++) {
    const x = String(ws[j].text).replace(/^[:;.\-\s]+/, "").replace(/[,;:]+$/, "");
    if (!x) continue;
    if (!/^[A-Za-z][A-Za-z.'\-]*$/.test(x)) break;
    tk.push(x); cf.push(ws[j].confidence);
  }
  if (!tk.length) return null;
  const good = tk.every(x => x.replace(/[.'\-]/g, "").length >= 2 || (/^[A-Za-z]\.$/.test(x)));
  const letters = tk.join("").replace(/[^A-Za-z]/g, "").length;
  if (!good || letters < 4 || (tk.length === 1 && letters < 5)) return {v: "", bad: true};
  const known = cf.every(c => typeof c === "number");
  const mn = known ? Math.min.apply(null, cf) : null, av = known ? cf.reduce((a, c) => a + c, 0) / cf.length : null;
  const sure = known && mn >= 52 && av >= 68 && (tk.length > 1 || mn >= 78);
  return {v: tk.join(" "), sure, known};
}
function kNameCand(d, raw) {
  const res = [];
  const lines = d && d.lines;
  if (lines && lines.length) { for (const l of lines) { const r = kNameOf((l.words || []).map(w => ({text: w.text, confidence: w.confidence})), l.text); if (r && r.v) res.push(r); } }
  else { for (const l of en(raw).split(/\r?\n/)) { const r = kNameOf(null, l); if (r && r.v) res.push(r); } }
  const keys = Array.from(new Set(res.map(r => kNameKey(r.v))));
  if (keys.length !== 1) return null;
  return {v: res[0].v, key: keys[0], sure: res.every(r => r.sure), known: res.every(r => r.known)};
}
function kReadOf(d, raw) { const txt = d ? (d.text || "") : String(raw || ""); const nn = kNidCands(txt); return {txt, nid: nn.length === 1 ? nn[0] : null, nidAmb: nn.length > 1, name: kNameCand(d, txt)}; }
/* সব পড়া একমত হলে তবেই গ্রহণ: কমপক্ষে ২টি আলাদা পড়ায় একই মান, কোনো পড়া ভিন্ন মান দিলে বাদ */
function kDecide(reads) {
  const out = {nid: "", name: "", nidOk: false, nameOk: false, done: false};
  const nids = reads.map(r => r.nid).filter(Boolean), amb = reads.some(r => r.nidAmb);
  if (!amb && nids.length >= 2 && nids.every(x => x === nids[0])) { out.nid = nids[0]; out.nidOk = true; }
  const nm = reads.map(r => r.name).filter(Boolean);
  if (nm.length >= 2 && nm.every(x => x.key === nm[0].key) && nm.some(x => x.sure)) {
    const best = nm.find(x => x.sure) || nm[0]; out.name = best.v.toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase()); out.nameOk = true;
  }
  out.done = out.nidOk && out.nameOk; return out;
}
async function kStrictFrontLocal(img, pre) {
  const reads = []; let txt = String(pre || "");
  if (pre) reads.push(kReadOf(null, pre));
  KPS = {i: 0, n: 3};
  const A = await kOcrData(await kPrep(img, 1800), "front"); if (A === null && !pre) { KPS = {i: 0, n: 1}; return null; }
  if (A) { reads.push(kReadOf(A)); txt = A.text || txt; }
  let R = kDecide(reads);
  if (!R.done) {
    KPS = {i: 1, n: 3};
    const B = await kOcrData(await kPrep(img, 2600, "grayscale(1) contrast(1.8) brightness(1.1)"), "front");
    if (B) { reads.push(kReadOf(B)); if (!txt) txt = B.text || ""; }
    R = kDecide(reads);
  }
  if (!R.done) {
    KPS = {i: 2, n: 3};
    const C = await kOcrData(await kPrep(img, 2100, "grayscale(1) contrast(1.5) brightness(.96)"), "front");
    if (C) { reads.push(kReadOf(C)); if (!txt) txt = C.text || ""; }
    R = kDecide(reads);
  }
  KPS = {i: 0, n: 1}; R.text = txt; return R;
}
async function kRead(img, side) {
  try {
    if (side === "front") {
      const R = await kStrictFront(img, K.pre.front); K.pg.front = 1; kPct();
      if (R === null) throw new Error("NOOCR");
      const o = kParse(R.text || "", "front");
      /* ১৭ ডিজিটের NID-র প্রথম ৪ অঙ্ক জন্মসালের সাথে মিলতে হবে */
      let nidOk = R.nidOk, why = [];
      const yr = o.dob && (o.dob.match(/\d{4}/) || [])[0];
      if (nidOk && R.nid.length === 17 && yr && R.nid.slice(0, 4) !== yr) { nidOk = false; }
      if (nidOk) o.nid = R.nid; else why.push("nid");
      if (R.nameOk) o.name = R.name; else why.push("name");
      if (why.length) o.sbad = why;
      if (R.weak) o.weak = true;
      return o;
    }
    let txt = K.pre[side];
    KPS = {i: 0, n: 1};
    if (txt == null || txt === "") {
      const g = await kSrvRead(img, side), m = g ? null : await kMlRead(img, side), d = g || m;
      if (d && d.text) txt = d.text;
      else { txt = await kOcrText(await kPrep(img, 1800), side); if (txt === null) throw new Error("NOOCR"); }
    }
    K.pg[side] = 1; kPct();
    const o = kParse(txt, side); delete o.nid; delete o.name; return o;
  } catch (e) { console.log("ocr", e && e.message); K.pg[side] = 1; kPct(); return {fail: true}; }
}
const kClean = (s) => String(s || "").replace(/[^ঀ-৿A-Za-z0-9 ,.\-\/()]/g, " ").replace(/\s+/g, " ").trim();
function kParse(raw, side) {
  const txt = en(raw), L = txt.split(/\r?\n/).map(s => s.trim()).filter(Boolean), o = {};
  const after = (re) => { for (const l of L) { const m = l.match(re); if (m && m[1] && kClean(m[1]).length > 1) return kClean(m[1]); } return ""; };
  if (side === "front") {
    o.father = after(/পিতা\s*[:;.\-]?\s*([ঀ-৿][ঀ-৿ .]{1,})/);
    o.mother = after(/মাতা\s*[:;.\-]?\s*([ঀ-৿][ঀ-৿ .]{1,})/);
    o.name_bn = after(/(?:^|\s)নাম\s*[:;.\-]?\s*([ঀ-৿][ঀ-৿ .]{1,})/);
    const m = txt.match(/(\d{1,2})\s*[\- ]?\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*[ ,.\-]*(\d{4})/i);
    if (m) o.dob = m[1].padStart(2, "0") + " " + m[2][0].toUpperCase() + m[2].slice(1, 3).toLowerCase() + " " + m[3];
    else { const n = txt.match(/\b(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})\b/); if (n) o.dob = n[1].padStart(2, "0") + "/" + n[2].padStart(2, "0") + "/" + n[3]; }
  } else {
    const i = L.findIndex(l => /ঠিকানা/.test(l));
    if (i >= 0) {
      const parts = [L[i].replace(/^.*ঠিকানা\s*[:;.\-]?/, "")];
      for (let j = i + 1; j < L.length && j < i + 4; j++) { if (/রক্ত|Blood|জন্মস্থান|Place|মুদ্রণ|Principal|Issuing|Date/i.test(L[j])) break; parts.push(L[j]); }
      o.addr = kClean(parts.join(", "));
    }
    /* v2.52: ব্লাড গ্রুপ, পোস্ট কোড, ডাকঘর, জেলা (ভুল হলে ইউজার বদলাতে পারবে) */
    try {
      const bm = txt.match(/(?:Blood\s*Group|রক্তের\s*গ্রুপ)\s*[:;.\-]?\s*(AB|A|B|O)\s*([+\-\u2212])/i);
      if (bm) o.blood = bm[1].toUpperCase() + (bm[2] === "+" ? "+" : "-");
      const pm = txt.match(/ডাকঘর\s*[:;.\-]?\s*([ঀ-৿][ঀ-৿ ]{1,}?)\s*[\-\u2013\u2014]?\s*(\d{4})(?!\d)/);
      if (pm) { o.postoffice = kClean(pm[1]); o.postcode = pm[2]; }
      const ai = L.findIndex(l => /ঠিকানা/.test(l)), at = (ai >= 0 ? L.slice(ai, ai + 5) : L).join(" ");
      let best = "", bi = -1;
      Object.keys(KDISTBN).forEach(dn => { const bn = KDISTBN[dn], ix = at.lastIndexOf(bn); if (ix > bi || (ix === bi && ix >= 0 && bn.length > KDISTBN[best].length)) { bi = ix; best = ix >= 0 ? dn : best; } });
      if (best && bi >= 0) {
        o.district = best;
        const dv = Object.keys(KGEO).find(x => KGEO[x][best]), ups = dv ? KGEO[dv][best] : [];
        const sd = ups.filter(u => /Sadar$/.test(u));
        if (sd.length === 1 && at.indexOf(KDISTBN[best] + " সদর") >= 0) o.upazila = sd[0];
      }
    } catch (e) {}
  }
  Object.keys(o).forEach(k => { if (!o[k]) delete o[k]; });
  return o;
}


/* ----- তথ্য পাতা: ঠিক হলে সবুজ টিক, ভুল/খালি হলে লাল ক্রস ----- */
async function kInfoStart() {
  const [a, b] = await Promise.all([K.p1, K.p2]);
  if (K.step !== "info") return;
  K.lk = {}; K.manual = false;
  const engineFail = !a || a.fail;
  if (!engineFail && a.sbad) {
    if ((K.ft || 0) < 2) { kFrontRedo(); return; }
    K.manual = true;
  }
  if (engineFail) K.manual = true;
  [b, a].forEach(r => { if (r && !r.fail) ["father", "mother", "name_bn", "dob", "addr", "blood", "postcode", "postoffice", "district", "upazila"].forEach(k => { if (r[k]) K.d[k] = r[k]; }); });
  /* v2.52: জেলা পাওয়া গেলে বিভাগ নিজে বসে; না মিললে ফাঁকা থাকে, ইউজার বাছবে */
  try { const dn = K.d.district; if (dn && KDISTBN[dn]) { const dv = Object.keys(KGEO).find(x => KGEO[x][dn]); if (dv) K.d.division = dv; } if (!KV.district(K.d.district)) { K.d.district = ""; K.d.upazila = ""; } } catch (e) {}
  if (a && !a.fail && a.nid) { K.d.nid = a.nid; if (!a.weak) K.lk.nid = true; }
  if (a && !a.fail && a.name) { K.d.name = a.name; if (!a.weak) K.lk.name = true; }
  K.fail = !!K.manual;
  K.reading = false; K.ipg = 0; hap("MEDIUM"); kycRender();
}
/* নাম বা NID নম্বর নিশ্চিত পড়া যায়নি: ভুল কিছু না নিয়ে সামনের দিক আবার স্ক্যান */
function kFrontRedo() {
  K.ft = (K.ft || 0) + 1; K.d.name = ""; K.d.nid = ""; K.lk = {};
  K.front = ""; K.pre.front = ""; K.pv = ""; K.reading = false; K.vbusy = false; K.auto = false; K.rep = null;
  K.redo = true; K.step = "front"; hap("HEAVY"); kycRender();
  setTimeout(() => { if (K.step === "front" && K.redo) kPop(t("k_sb_h"), t("k_sb_m")); }, 350);
}
/* ===== v2.52: NID তথ্যের অতিরিক্ত ঘর (বিভাগ → জেলা → উপজেলা, ব্লাড গ্রুপ, পোস্ট কোড, পেশা ইত্যাদি) ===== */
const KGEO = {"Barishal":{"Barguna":["Amtali","Bamna","Barguna Sadar","Betagi","Patharghata","Taltali"],"Barishal":["Agailjhara","Babuganj","Bakerganj","Banaripara","Gaurnadi","Hizla","Barishal Sadar","Mehendiganj","Muladi","Wazirpur"],"Bhola":["Bhola Sadar","Burhanuddin","Char Fasson","Daulatkhan","Lalmohan","Manpura","Tazumuddin"],"Jhalokati":["Jhalokati Sadar","Kathalia","Nalchity","Rajapur"],"Patuakhali":["Bauphal","Dashmina","Galachipa","Kalapara","Mirzaganj","Patuakhali Sadar","Rangabali","Dumki"],"Pirojpur":["Bhandaria","Kawkhali","Mathbaria","Nazirpur","Pirojpur Sadar","Nesarabad (Swarupkati)","Zianagar"]},"Chattogram":{"Bandarban":["Ali Kadam","Bandarban Sadar","Lama","Naikhongchhari","Rowangchhari","Ruma","Thanchi"],"Brahmanbaria":["Akhaura","Bancharampur","Brahmanbaria Sadar","Kasba","Nabinagar","Nasirnagar","Sarail","Ashuganj","Bijoynagar"],"Chandpur":["Chandpur Sadar","Faridganj","Haimchar","Haziganj","Kachua","Matlab Dakshin","Matlab Uttar","Shahrasti"],"Chattogram":["Anwara","Banshkhali","Boalkhali","Chandanaish","Fatikchhari","Hathazari","Karnaphuli","Lohagara","Mirsharai","Patiya","Rangunia","Raozan","Sandwip","Satkania","Sitakunda","Bandar","Chandgaon","Double Mooring","Kotwali","Pahartali","Panchlaish","Bhujpur"],"Cumilla":["Barura","Brahmanpara","Burichang","Chandina","Chauddagram","Daudkandi","Debidwar","Homna","Laksam","Muradnagar","Nangalkot","Cumilla Adarsha Sadar","Meghna","Titas","Monohargonj","Cumilla Sadar Dakshin"],"Cox's Bazar":["Chakaria","Cox's Bazar Sadar","Kutubdia","Maheshkhali","Ramu","Teknaf","Ukhia","Pekua"],"Feni":["Chhagalnaiya","Daganbhuiyan","Feni Sadar","Parshuram","Sonagazi","Fulgazi"],"Khagrachhari":["Dighinala","Khagrachhari Sadar","Lakshmichhari","Mahalchhari","Manikchhari","Matiranga","Panchhari","Ramgarh"],"Lakshmipur":["Lakshmipur Sadar","Raipur","Ramganj","Ramgati","Kamalnagar"],"Noakhali":["Begumganj","Noakhali Sadar","Chatkhil","Companiganj","Hatiya","Senbagh","Sonaimuri","Subarnachar","Kabirhat"],"Rangamati":["Bagaichhari","Barkal","Kawkhali (Betbunia)","Belaichhari","Kaptai","Juraichhari","Langadu","Naniyachar","Rajasthali","Rangamati Sadar"]},"Dhaka":{"Dhaka":["Dhamrai","Dohar","Keraniganj","Nawabganj","Savar","Adabor","Badda","Bangshal","Cantonment","Dhanmondi","Demra","Gulshan","Hazaribagh","Jatrabari","Kadamtali","Kafrul","Khilgaon","Khilkhet","Kotwali","Lalbagh","Mirpur","Mohammadpur","Motijheel","New Market","Pallabi","Ramna","Sabujbagh","Shah Ali","Shahbagh","Sher-e-Bangla Nagar","Tejgaon","Uttara","Uttara West","Vatara","Wari"],"Gazipur":["Gazipur Sadar","Kaliakair","Kaliganj","Kapasia","Sreepur"],"Gopalganj":["Gopalganj Sadar","Kashiani","Kotalipara","Muksudpur","Tungipara"],"Kishoreganj":["Austagram","Bajitpur","Bhairab","Hossainpur","Itna","Karimganj","Katiadi","Kishoreganj Sadar","Kuliarchar","Mithamain","Nikli","Pakundia","Tarail"],"Madaripur":["Rajoir","Madaripur Sadar","Kalkini","Shibchar"],"Manikganj":["Daulatpur","Ghior","Harirampur","Manikganj Sadar","Saturia","Shivalaya","Singair"],"Munshiganj":["Gazaria","Lohajang","Munshiganj Sadar","Sirajdikhan","Sreenagar","Tongibari"],"Narayanganj":["Araihazar","Bandar","Narayanganj Sadar","Rupganj","Sonargaon"],"Rajbari":["Baliakandi","Goalandaghat","Pangsha","Rajbari Sadar","Kalukhali"],"Shariatpur":["Bhedarganj","Damudya","Gosairhat","Naria","Shariatpur Sadar","Zajira","Shakhipur"],"Faridpur":["Alfadanga","Bhanga","Boalmari","Charbhadrasan","Faridpur Sadar","Madhukhali","Nagarkanda","Sadarpur","Saltha"],"Tangail":["Gopalpur","Basail","Bhuapur","Delduar","Ghatail","Kalihati","Madhupur","Mirzapur","Nagarpur","Sakhipur","Dhanbari","Tangail Sadar"],"Narsingdi":["Narsingdi Sadar","Belabo","Monohardi","Palash","Raipura","Shibpur"]},"Khulna":{"Bagerhat":["Bagerhat Sadar","Chitalmari","Fakirhat","Kachua","Mollahat","Mongla","Morrelganj","Rampal","Sarankhola"],"Chuadanga":["Alamdanga","Chuadanga Sadar","Damurhuda","Jibannagar"],"Jashore":["Abhaynagar","Bagherpara","Chaugachha","Jhikargachha","Keshabpur","Jashore Sadar","Manirampur","Sharsha"],"Jhenaidah":["Harinakunda","Jhenaidah Sadar","Kaliganj","Kotchandpur","Maheshpur","Shailkupa"],"Khulna":["Batiaghata","Dacope","Dumuria","Dighalia","Koyra","Paikgachha","Phultala","Rupsha","Terokhada","Daulatpur","Khalishpur","Khan Jahan Ali","Kotwali","Sonadanga","Harintana"],"Kushtia":["Bheramara","Daulatpur","Khoksa","Kumarkhali","Kushtia Sadar","Mirpur"],"Magura":["Magura Sadar","Mohammadpur","Shalikha","Sreepur"],"Meherpur":["Gangni","Meherpur Sadar","Mujibnagar"],"Narail":["Kalia","Lohagara","Narail Sadar","Naragati"],"Satkhira":["Assasuni","Debhata","Kalaroa","Kaliganj","Satkhira Sadar","Shyamnagar","Tala"]},"Mymensingh":{"Netrokona":["Atpara","Barhatta","Durgapur","Khaliajuri","Kalmakanda","Kendua","Madan","Mohanganj","Netrokona Sadar","Purbadhala"],"Sherpur":["Jhenaigati","Nakla","Nalitabari","Sherpur Sadar","Sreebardi"],"Jamalpur":["Baksiganj","Dewanganj","Islampur","Jamalpur Sadar","Madarganj","Melandaha","Sarishabari"],"Mymensingh":["Trishal","Dhobaura","Fulbaria","Gaffargaon","Gauripur","Haluaghat","Ishwarganj","Mymensingh Sadar","Muktagachha","Nandail","Phulpur","Bhaluka","Tara Khanda"]},"Rajshahi":{"Joypurhat":["Akkelpur","Joypurhat Sadar","Kalai","Khetlal","Panchbibi"],"Bogura":["Adamdighi","Bogura Sadar","Dhunat","Dhupchanchia","Gabtali","Kahaloo","Nandigram","Sariakandi","Shajahanpur","Sherpur","Shibganj","Sonatola"],"Naogaon":["Atrai","Badalgachhi","Manda","Dhamoirhat","Mohadevpur","Naogaon Sadar","Niamatpur","Patnitala","Porsha","Raninagar","Sapahar"],"Natore":["Bagatipara","Baraigram","Gurudaspur","Lalpur","Natore Sadar","Singra","Naldanga"],"Chapainawabganj":["Bholahat","Gomastapur","Nachole","Chapainawabganj Sadar","Shibganj"],"Pabna":["Ataikula","Atgharia","Bera","Bhangura","Chatmohar","Faridpur","Ishwardi","Pabna Sadar","Santhia","Sujanagar"],"Sirajganj":["Belkuchi","Chauhali","Kamarkhanda","Kazipur","Raiganj","Shahjadpur","Sirajganj Sadar","Tarash","Ullahpara"],"Rajshahi":["Bagha","Bagmara","Charghat","Durgapur","Godagari","Mohanpur","Paba","Puthia"]},"Rangpur":{"Dinajpur":["Birampur","Birganj","Biral","Bochaganj","Chirirbandar","Phulbari","Ghoraghat","Hakimpur","Kaharole","Khansama","Dinajpur Sadar","Nawabganj","Parbatipur"],"Gaibandha":["Phulchhari","Gaibandha Sadar","Gobindaganj","Palashbari","Sadullapur","Sughatta","Sundarganj"],"Kurigram":["Bhurungamari","Char Rajibpur","Chilmari","Phulbari","Kurigram Sadar","Nageshwari","Rajarhat","Raomari","Ulipur"],"Lalmonirhat":["Aditmari","Hatibandha","Kaliganj","Lalmonirhat Sadar","Patgram"],"Nilphamari":["Dimla","Domar","Jaldhaka","Kishoreganj","Nilphamari Sadar","Saidpur"],"Panchagarh":["Atwari","Boda","Debiganj","Panchagarh Sadar","Tetulia"],"Rangpur":["Badarganj","Gangachhara","Kaunia","Rangpur Sadar","Mithapukur","Pirgachha","Pirganj","Taraganj"],"Thakurgaon":["Baliadangi","Haripur","Pirganj","Ranisankail","Thakurgaon Sadar"]},"Sylhet":{"Habiganj":["Ajmiriganj","Bahubal","Baniyachong","Chunarughat","Habiganj Sadar","Lakhai","Madhabpur","Nabiganj","Sayestaganj"],"Moulvibazar":["Barlekha","Juri","Kamalganj","Kulaura","Moulvibazar Sadar","Rajnagar","Sreemangal"],"Sunamganj":["Bishwamvarpur","Chhatak","Dakshin Sunamganj","Derai","Dharamapasha","Dowarabazar","Jagannathpur","Jamalganj","Sullah","Sunamganj Sadar","Tahirpur"],"Sylhet":["Balaganj","Beanibazar","Bishwanath","Companigonj","Dakshin Surma","Fenchuganj","Golapganj","Gowainghat","Jaintiapur","Kanaighat","Osmani Nagar","Sylhet Sadar","Zakiganj"]}};
const KDIVBN = {"Barishal":"বরিশাল","Chattogram":"চট্টগ্রাম","Dhaka":"ঢাকা","Khulna":"খুলনা","Mymensingh":"ময়মনসিংহ","Rajshahi":"রাজশাহী","Rangpur":"রংপুর","Sylhet":"সিলেট"};
const KDISTBN = {"Barguna":"বরগুনা","Barishal":"বরিশাল","Bhola":"ভোলা","Jhalokati":"ঝালকাঠি","Patuakhali":"পটুয়াখালী","Pirojpur":"পিরোজপুর","Bandarban":"বান্দরবান","Brahmanbaria":"ব্রাহ্মণবাড়িয়া","Chandpur":"চাঁদপুর","Chattogram":"চট্টগ্রাম","Cumilla":"কুমিল্লা","Cox's Bazar":"কক্সবাজার","Feni":"ফেনী","Khagrachhari":"খাগড়াছড়ি","Lakshmipur":"লক্ষ্মীপুর","Noakhali":"নোয়াখালী","Rangamati":"রাঙ্গামাটি","Dhaka":"ঢাকা","Gazipur":"গাজীপুর","Gopalganj":"গোপালগঞ্জ","Kishoreganj":"কিশোরগঞ্জ","Madaripur":"মাদারীপুর","Manikganj":"মানিকগঞ্জ","Munshiganj":"মুন্সিগঞ্জ","Narayanganj":"নারায়ণগঞ্জ","Rajbari":"রাজবাড়ী","Shariatpur":"শরীয়তপুর","Faridpur":"ফরিদপুর","Tangail":"টাঙ্গাইল","Narsingdi":"নরসিংদী","Bagerhat":"বাগেরহাট","Chuadanga":"চুয়াডাঙ্গা","Jashore":"যশোর","Jhenaidah":"ঝিনাইদহ","Khulna":"খুলনা","Kushtia":"কুষ্টিয়া","Magura":"মাগুরা","Meherpur":"মেহেরপুর","Narail":"নড়াইল","Satkhira":"সাতক্ষীরা","Netrokona":"নেত্রকোণা","Sherpur":"শেরপুর","Jamalpur":"জামালপুর","Mymensingh":"ময়মনসিংহ","Joypurhat":"জয়পুরহাট","Bogura":"বগুড়া","Naogaon":"নওগাঁ","Natore":"নাটোর","Chapainawabganj":"চাঁপাইনবাবগঞ্জ","Pabna":"পাবনা","Sirajganj":"সিরাজগঞ্জ","Rajshahi":"রাজশাহী","Dinajpur":"দিনাজপুর","Gaibandha":"গাইবান্ধা","Kurigram":"কুড়িগ্রাম","Lalmonirhat":"লালমনিরহাট","Nilphamari":"নীলফামারী","Panchagarh":"পঞ্চগড়","Rangpur":"রংপুর","Thakurgaon":"ঠাকুরগাঁও","Habiganj":"হবিগঞ্জ","Moulvibazar":"মৌলভীবাজার","Sunamganj":"সুনামগঞ্জ","Sylhet":"সিলেট"};
const KOPT = {"blood":["A+","A-","B+","B-","AB+","AB-","O+","O-","N.A."],"gender":[{"v":"Male","bn":"পুরুষ"},{"v":"Female","bn":"মহিলা"},{"v":"Other","bn":"অন্যান্য"}],"incsrc":[{"v":"Salary","bn":"বেতন"},{"v":"Business","bn":"ব্যবসা"},{"v":"Agriculture","bn":"কৃষি"},{"v":"Remittance","bn":"রেমিট্যান্স"},{"v":"Family support","bn":"পরিবার থেকে প্রাপ্ত"},{"v":"Pension","bn":"পেনশন"},{"v":"Savings / Investment","bn":"সঞ্চয় / বিনিয়োগ"},{"v":"Other","bn":"অন্যান্য"}],"income":[{"v":"Below 10,000","bn":"১০,০০০ টাকার কম"},{"v":"10,000 - 25,000","bn":"১০,০০০ - ২৫,০০০ টাকা"},{"v":"25,001 - 50,000","bn":"২৫,০০১ - ৫০,০০০ টাকা"},{"v":"50,001 - 100,000","bn":"৫০,০০১ - ১,০০,০০০ টাকা"},{"v":"Above 100,000","bn":"১,০০,০০০ টাকার বেশি"}],"occ":[{"v":"Government job","bn":"সরকারি চাকরি"},{"v":"Private job","bn":"বেসরকারি চাকরি"},{"v":"Business","bn":"ব্যবসা"},{"v":"Self-employed","bn":"আত্মকর্মসংস্থান"},{"v":"Student","bn":"শিক্ষার্থী"},{"v":"Housewife","bn":"গৃহিণী"},{"v":"Retired","bn":"অবসরপ্রাপ্ত"},{"v":"Unemployed","bn":"বেকার"},{"v":"Other","bn":"অন্যান্য"}]};
const KPKEYS = ["blood", "division", "district", "upazila", "gender", "incsrc", "income", "occ"];
const KPT = {blood: "k_gbl", division: "k_gdv", district: "k_gdt", upazila: "k_gut", gender: "k_ggn", incsrc: "k_gis", income: "k_gmi", occ: "k_goc"};
const KSEC = {name: "k_gs1", addr: "k_gs2", gender: "k_gs3"};
const KCHEV = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 10l4 4 4-4"/></svg>';
Object.assign(T.bn, {"k_gs1":"ব্যক্তিগত তথ্য","k_gs2":"ঠিকানা","k_gs3":"আপনার সম্পর্কে আরও কিছু","k_gbl":"রক্তের গ্রুপ","k_gdv":"বিভাগ","k_gdt":"জেলা","k_gut":"উপজেলা / থানা","k_gpo":"পোস্ট অফিস","k_gpc":"পোস্ট কোড","k_ggn":"লিঙ্গ","k_gis":"আয়ের উৎস","k_gmi":"আনুমানিক মাসিক আয়","k_goc":"পেশা","k_gpick":"বাছুন","k_gsrch":"খুঁজুন","k_guse":"এটাই ব্যবহার করুন","k_gnone":"কিছু পাওয়া যায়নি","k_gpoph":"যেমন: সাতক্ষীরা সদর","k_gpcph":"৪ অঙ্কের কোড"});
Object.assign(T.en, {"k_gs1":"Personal details","k_gs2":"Address","k_gs3":"A little more about you","k_gbl":"Blood group","k_gdv":"Division","k_gdt":"District","k_gut":"Upazila / Thana","k_gpo":"Post office","k_gpc":"Post code","k_ggn":"Gender","k_gis":"Source of income","k_gmi":"Estimated monthly income","k_goc":"Occupation","k_gpick":"Select","k_gsrch":"Search","k_guse":"Use this","k_gnone":"Nothing found","k_gpoph":"e.g. Satkhira Sadar","k_gpcph":"4-digit code"});
Object.assign(KI, {
  kb: '<path d="M12 3s6 6.4 6 11a6 6 0 01-12 0c0-4.6 6-11 6-11z"/>',
  kj: '<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7M3 13h18"/>',
  kw: '<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18M16 14.5h2"/>'
});
const KF = [["name", "k_nm", "kn"], ["father", "k_fa", "kf"], ["mother", "k_mo", "kf"], ["dob", "k_dob", "kd"], ["nid", "k_nid", "ki"], ["blood", "k_gbl", "kb"], ["addr", "k_ad", "ka"],
  ["division", "k_gdv", "ka"], ["district", "k_gdt", "ka"], ["upazila", "k_gut", "ka"], ["postoffice", "k_gpo", "ka"], ["postcode", "k_gpc", "ka"],
  ["gender", "k_ggn", "kn"], ["incsrc", "k_gis", "kw"], ["income", "k_gmi", "kw"], ["occ", "k_goc", "kj"]];
const KV = {
  name: (v) => /[A-Za-z]{2}/.test(String(v || "")) && String(v || "").trim().length >= 3,
  father: (v) => String(v || "").trim().length >= 2,
  mother: (v) => String(v || "").trim().length >= 2,
  dob: (v) => /\d/.test(v || "") && String(v || "").trim().length >= 6,
  nid: (v) => [10, 13, 17].includes(String(v || "").length),
  addr: (v) => String(v || "").trim().length >= 4
};
const kTickI = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const kCrossI = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"><path d="M7 7l10 10M17 7L7 17"/></svg>';
const kOkN = () => KF.filter(([k]) => KV[k](K.d[k])).length;
Object.assign(KV, {
  blood: (v) => KOPT.blood.includes(v),
  division: (v) => !!KGEO[v],
  district: (v) => !!(KGEO[K.d.division] && KGEO[K.d.division][v]),
  upazila: (v) => String(v || "").trim().length >= 2,
  postoffice: (v) => String(v || "").trim().length >= 2,
  postcode: (v) => /^\d{4}$/.test(String(v || "")),
  gender: (v) => KOPT.gender.some(o => o.v === v),
  incsrc: (v) => KOPT.incsrc.some(o => o.v === v),
  income: (v) => KOPT.income.some(o => o.v === v),
  occ: (v) => KOPT.occ.some(o => o.v === v)
});
/* ===== v2.56: দুই পেজ + ঐচ্ছিক ঘর (রক্তের গ্রুপ, উপজেলা/থানা ঐচ্ছিক) ===== */
const KOPTF = {blood: 1, upazila: 1};
const KPG = [["name", "father", "mother", "dob", "nid", "blood", "addr", "division", "district", "upazila", "postoffice", "postcode"], ["gender", "incsrc", "income", "occ"]];
const kReqAll = () => KF.filter(([k]) => !KOPTF[k]).map(x => x[0]);
function kRowSt(k, v) { if (KOPTF[k] && !(v && !(k === "blood" && v === "N.A."))) return "op"; return KV[k](v) ? "gd" : "bd"; }
const kDashI = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"><path d="M7 12h10"/></svg>';
const kStI = (st) => st === "gd" ? kTickI : st === "bd" ? kCrossI : kDashI;
const kReqOkN = () => kReqAll().filter(k => KV[k](K.d[k])).length;
Object.assign(T.bn, {k_opt: "ঐচ্ছিক", k_vh: "আপনার NID এর তথ্য যাচাই করুন", k_vs: "অনুগ্রহ করে NID এর সাথে মিলিয়ে সকল তথ্য নিশ্চিত করুন"}); Object.assign(T.en, {k_opt: "Optional", k_vh: "Verify your NID details", k_vs: "Please check every detail against your NID"});
function kInfoOld() {
  if (K.reading) return `<div class="kw">${kTop(t("k_info"), "kBack()", 1)}<div class="krd"><div class="kscn"><svg viewBox="0 0 200 126" aria-hidden="true"><rect x="3" y="3" width="194" height="120" rx="14" fill="#fff" stroke="#e2136e" stroke-width="3"/><circle cx="44" cy="50" r="15" fill="#fde7f1"/><path d="M80 38h86M80 56h70M80 74h80M26 98h140" stroke="#f0a3c6" stroke-width="6" stroke-linecap="round"/></svg><u></u></div><b>${t("k_readd")}</b><span id="kpct">0%</span><div class="kbar"><i id="kbi"></i></div><small>${t("k_readw")}</small></div></div>`;
  const n = kOkN();
  const rows = KF.map(([k, lb, ik], i) => {
    const v = K.d[k] || "", ok = KV[k](v);
    const inp = k === "addr" ? `<textarea id="kv_${k}" rows="2" placeholder="${t("k_miss")}" oninput="kSet('${k}',this)">${esc(v)}</textarea>`
      : `<input id="kv_${k}" value="${esc(v)}" placeholder="${t("k_miss")}" ${k === "nid" ? 'inputmode="numeric" maxlength="17"' : 'maxlength="80"'}${K.lk && K.lk[k] ? " readonly" : ""} oninput="kSet('${k}',this)">`;
    return `<div class="kf ${ok ? "gd" : "bd"}${K.lk && K.lk[k] ? " lk" : ""}" style="--n:${i}"><div class="kfi">${kic(ik)}</div><div class="kfb"><label>${t(lb)}</label>${inp}${K.lk && K.lk[k] ? `<small class="klk2">${t("k_lockd")}</small>` : ""}</div><i class="kt2 ${ok ? "gd" : "no"}">${ok ? kTickI : kCrossI}</i></div>`;
  }).join("");
  return `<div class="kw">${kTop(t("k_info"), "kBack()", 1)}<div class="kbody"><div class="ksum"><div><b id="ksn">${n}/5</b><span>${t("k_okc")}</span></div><div class="kbar"><i id="ksb2" style="width:${n * 20}%"></i></div></div>
    <p class="ksubt">${t(K.fail ? "k_ocrfail" : "k_infos")}</p>${rows}<div class="le kle">${esc(K.err)}</div></div>
    <div class="kbtm"><button class="kbtn" onclick="kInfoNext()">${t("k_next")}</button></div></div>`;
}
function kSet(k, el) {
  let v = el.value; if (k === "nid") { v = digs(v, 17); if (el.value !== v) el.value = v; }
  K.d[k] = v;
  const row = el.closest(".kf"), tk = row.querySelector(".kt2"), ok = KV[k](v);
  tk.className = "kt2 " + (ok ? "gd" : "no"); tk.style.animation = "none"; tk.style.transform = "scale(1)"; tk.innerHTML = ok ? kTickI : kCrossI;
  row.classList.toggle("gd", ok); row.classList.toggle("bd", !ok);
  const n = kOkN(), a = document.getElementById("ksn"), b = document.getElementById("ksb2"); if (a) a.textContent = n + "/5"; if (b) b.style.width = n * 20 + "%";
}
function kInfoNext() {
  const d = K.d, le = document.querySelector(".kle");
  const bad = ["name", "father", "dob", "addr"].some(k => !KV[k](d[k])) ? t("k_bad") : !KV.nid(d.nid) ? t("k_badnid") : "";
  if (bad) { K.err = bad; if (le) le.textContent = bad; hap("HEAVY"); return; }
  hap(); K.err = ""; K.pv = ""; K.step = "face"; kycRender();
}

/* ----- মুখ যাচাই: ডান → বাম → উপর → নিচ, ক্যামেরায় সরাসরি মুখের অবস্থান দেখে ----- */
async function kFaceModel() {
  if (KFL) return KFL; if (KFLbad) return null;
  if (!KFLp) KFLp = (async () => {
    try {
      const base = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";
      const M = await import(base + "/vision_bundle.mjs"), fs = await M.FilesetResolver.forVisionTasks(base + "/wasm");
      const mk = (d) => M.FaceLandmarker.createFromOptions(fs, {baseOptions: {modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task", delegate: d}, runningMode: "VIDEO", numFaces: 1, outputFaceBlendshapes: true});
      try { KFL = await mk("GPU"); } catch (e) { KFL = await mk("CPU"); }
      return KFL;
    } catch (e) { console.log("face", e && e.message); KFLbad = true; KFLp = null; return null; }
  })();
  return KFLp;
}
/* v2.20: লাইভনেস চ্যালেঞ্জ এখন এলোমেলো ক্রমে (৩টি মুখ ঘোরানো + ১টি চোখের পলক), সময়সীমা আছে, প্রতি ধাপে ছবি রেখে পরে একই মুখ কিনা মেলানো হয় */
const KALL = ["right", "left", "up", "down"];
const KSKM = {right: "k_sr", left: "k_sl", up: "k_su", down: "k_sd", blink: "k_sb"}, KDKM = {right: "k_dr", left: "k_dl", up: "k_du", down: "k_dd", blink: "k_db"};
const KARR = {right: "M5 12h14M13 6l6 6-6 6", left: "M19 12H5M11 6l-6 6 6 6", up: "M12 19V5M6 11l6-6 6 6", down: "M12 5v14M6 13l6 6 6-6", blink: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z"};
const KLIMIT = 55000;
function kRnd(n) { try { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; } catch (e) { return Math.floor(Math.random() * n); } }
function kFaceOrd() {
  const a = KALL.slice(); for (let i = a.length - 1; i > 0; i--) { const j = kRnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  const o = a.slice(0, 3); o.splice(kRnd(4), 0, "blink"); return o;
}
function kFaceStop() { KFc.on = false; clearTimeout(KFc.tm); }
function kFaceMsg(k) { if (KFc.last !== k) { KFc.last = k; kSt(k); } }
async function kFaceStart() {
  kFaceStop(); KFc.on = true; KFc.st = -1; KFc.base = null; KFc.bs = []; KFc.hold = 0; KFc.lost = 0; KFc.shot = ""; KFc.done = [0, 0, 0]; KFc.last = ""; KFc.fr = []; KFc.rs = 0; KFc.sy = null; KFc.sp = null; KFc.sd = null; KFc.c1 = null; KFc.pd = 0; KFc.pt = 0; KFc.t0 = 0; KFc.nob = false; KFc.bl = {c: false, n: 0};
  KFc.bn = 0; kFaceMsg("k_fload"); kFaceUI();
  const m = await kFaceModel();
  if (!KFc.on || K.step !== "face" || K.pv) return;
  if (!m) { kFaceMsg("k_ffb"); kManualShow(); return; }
  kFaceMsg("k_fcen"); kFaceLoop();
}
function kFaceLoop() {
  if (!KFc.on || K.step !== "face" || K.pv) return;
  KFc.tm = setTimeout(kFaceLoop, 33);
  const v = document.getElementById("kvid"); if (!v || !v.videoWidth || v.readyState < 2) return;
  let res; try { res = KFL.detectForVideo(v, performance.now()); } catch (e) { return; }
  const L = res && res.faceLandmarks && res.faceLandmarks[0];
  if (!L) { if (++KFc.lost > 12) { KFc.hold = 0; KFc.bs = []; kFaceMsg("k_fnone"); } return; }
  KFc.lost = 0;
  const nose = L[1], xa = L[234].x, xb = L[454].x, xl = Math.min(xa, xb), xr = Math.max(xa, xb), fh = L[10], ch = L[152];
  const eyeY = (L[33].y + L[133].y + L[362].y + L[263].y) / 4;
  const w = xr - xl, yaw0 = (nose.x - xl) / w, pit0 = (nose.y - fh.y) / (ch.y - fh.y), pdn0 = (nose.y - eyeY) / Math.max(.02, ch.y - eyeY);
  const sm = (o, v) => (o == null ? v : o + (v - o) * .6);
  const yaw = (KFc.sy = sm(KFc.sy, yaw0)), pit = (KFc.sp = sm(KFc.sp, pit0)), pdn = (KFc.sd = sm(KFc.sd, pdn0)), cx = (xl + xr) / 2, cy = (fh.y + ch.y) / 2;
  /* শুরুতে কড়া, ধাপ চলার সময় নরম: মাথা নিচু/ঘোরালে মুখ ফ্রেমের একটু বাইরে গেলেও ধাপ থামবে না */
  const fit = KFc.st < 0 ? (Math.abs(cx - .5) < .14 && Math.abs(cy - .45) < .17 && w > .26 && w < .85) : (Math.abs(cx - .5) < .25 && Math.abs(cy - .46) < .3 && w > .2 && w < .95);
  /* চোখের পলক: ব্লেন্ডশেপ স্কোর (০ = খোলা, ১ = বন্ধ) */
  let blink = -1; const bsh = res.faceBlendshapes && res.faceBlendshapes[0] && res.faceBlendshapes[0].categories;
  if (bsh && bsh.length) { const g = (n) => { const c = bsh.find(x => x.categoryName === n); return c ? c.score : 0; }; blink = (g("eyeBlinkLeft") + g("eyeBlinkRight")) / 2; }
  if (KFc.st < 0) {
    if (fit && Math.abs(yaw - .5) < .09 && (blink < 0 || blink < .3)) {
      KFc.bs.push({yaw, pit, pdn}); if (KFc.bs.length === 1) KFc.tc = Date.now();
      if (KFc.bs.length === 4) KFc.c1 = {img: kShrink(v, 1400, .9), sh: kSharp(v)};
      if (KFc.bs.length >= 5) {
        const av = (k) => KFc.bs.reduce((a, b) => a + b[k], 0) / KFc.bs.length;
        KFc.base = {yaw: av("yaw"), pit: av("pit"), pdn: av("pdn")};
        const c2 = {img: kShrink(v, 1400, .9), sh: kSharp(v)}; KFc.shot = KFc.c1 && KFc.c1.sh > c2.sh ? KFc.c1.img : c2.img;
        KFc.st = 0; KFc.hold = 0; KFc.t0 = Date.now(); KFc.bl = {c: false, n: 0}; hap("MEDIUM"); kFaceUI(); kFaceMsg(KDKM[KFc.ord[0]]); kFaceProg(0);
      } else kFaceMsg("k_fhold");
    } else { KFc.bs = []; kFaceMsg("k_fcen"); }
    return;
  }
  /* সময়সীমা: ৪০ সেকেন্ডে শেষ না হলে ধাপগুলো আবার প্রথম থেকে */
  if (Date.now() - KFc.t0 > KLIMIT) {
    KFc.rs++; KFc.st = 0; KFc.done = [0, 0, 0]; KFc.hold = 0; KFc.fr = []; KFc.bl = {c: false, n: 0}; KFc.t0 = Date.now(); KFc.last = "";
    hap("HEAVY"); kFaceUI(); kFaceMsg("k_frs"); kFaceProg(0); return;
  }
  if (!fit) { KFc.hold = 0; kFaceMsg("k_fcen"); return; }
  const b = KFc.base, st = KFc.st, cur = KFc.ord[st];
  kFaceMsg(KDKM[cur]);
  let p = 0, done = false;
  if (cur === "blink") {
    if (blink < 0) { KFc.nob = true; done = true; p = 1; }
    else {
      if (blink > .5 && !KFc.bl.c) KFc.bl.c = true;
      else if (blink < .25 && KFc.bl.c) { KFc.bl.c = false; KFc.bl.n++; hap(); }
      p = Math.min(1, KFc.bl.n / 1) + (KFc.bl.c ? .2 : 0); p = Math.min(p, KFc.bl.n >= 1 ? 1 : .95); done = KFc.bl.n >= 1;
    }
  } else {
    /* নিচ: নতুন মাপ (চোখ থেকে নাক-থুতনির অনুপাত) + পুরনো মাপ, দুটোর যেটা আগে পূরণ হয়; অল্প নিচু করলেই হবে */
    p = {right: (b.yaw - yaw) / .10, left: (yaw - b.yaw) / .10, up: (b.pit - pit) / .06, down: Math.max((pdn - b.pdn) / .028, (pit - b.pit) / .04)}[cur];
    if (p >= 1) { if (++KFc.hold >= 2) done = true; } else KFc.hold = 0;
  }
  kFaceProg(p);
  if (!done) return;
  KFc.fr.push(kShrink(v, 480, .8)); KFc.done[st] = 1; KFc.st = st + 1; KFc.hold = 0; KFc.bl = {c: false, n: 0}; hap("MEDIUM"); kFaceUI();
  if (KFc.st > 2) { kFaceFinish(); return; }
  kFaceMsg(KDKM[KFc.ord[KFc.st]]); kFaceProg(0);
}
function kFaceFinish() {
  KFc.on = false; clearTimeout(KFc.tm); K.selfie = KFc.shot; kFaceMsg("k_fok"); kFaceProg(1);
  K.live = {ok: !KFc.nob, mode: "live", ord: KFc.ord.slice(), ms: Date.now() - KFc.t0, rs: KFc.rs, fr: KFc.fr.slice()};
  K.mres = null; K.desc = null;
  const u = document.getElementById("kou"); if (u) u.classList.add("dn"); const o = document.querySelector("#kyc .kov"); if (o) o.classList.add("fin");
  const a = document.getElementById("kfarr"); if (a) a.className = "kfarr h";
  setTimeout(() => { if (K.step === "face") { K.pv = ""; K.step = "match"; K.err = ""; kycRender(); } }, 1200);
}
function kFaceCount() {
  const v = document.getElementById("kvid"), c = document.getElementById("kcnt");
  if (!v || !v.videoWidth) { toast(t("k_nocam")); return; }
  if (K.busy) return; K.busy = true;
  let n = 3;
  const tick = () => {
    if (K.step !== "face" || K.pv) { K.busy = false; return; }
    if (n === 0) { if (c) c.textContent = ""; K.busy = false; kSnap(); return; }
    if (c) { c.textContent = n; c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop"); } hap(); n--; setTimeout(tick, 900);
  };
  tick();
}
function kFaceUse() { hap(); K.selfie = K.pv; K.pv = ""; K.live = {ok: false, mode: "manual", ord: [], ms: 0, rs: 0, fr: []}; K.mres = null; K.desc = null; K.step = "match"; K.err = ""; kycRender(); }

/* ----- v2.20: NID-র ছবির মুখের সাথে সেলফি মেলানো (পুরোটা ফোনের ভেতরে, face-api) -----
   মিল % = দুই মুখের "দূরত্ব" থেকে হিসাব। ৮৫% মানে দূরত্ব ০.৪৫ বা তার কম (face-api এর সাধারণ সীমা ০.৬ এর চেয়ে কড়া)।
   সার্ভারের SQL (update-v2.20-kyc-auto.sql) একই হিসাব নিজে আবার করে, তাই এই ধাপ সরাসরি অ্যাকাউন্ট চালু করতে পারে না। */
const KM = {AUTO: 85, REVIEW: 70, SUSPECT: 30, TRIES: 3, SWAP: .62, VER: "1.7.12"};
const KMB = "https://cdn.jsdelivr.net/npm/@vladmandic/face-api@" + KM.VER;
const KMA = [[0, 100], [.30, 97], [.50, 85], [.58, 70], [.70, 45], [.85, 30], [1, 10], [1.2, 0]];
let KFA = null, KFAp = null, KFAbad = 0;
function kFA() {
  if (KFA) return Promise.resolve(KFA);
  if (KFAbad >= 2) return Promise.resolve(null);
  if (!KFAp) KFAp = (async () => {
    try {
      if (!window.faceapi) await kFAScript(); /* v2.53: একই স্ক্রিপ্ট একবারই নামে */
      const f = window.faceapi; if (!f) throw new Error("FA");
      try { await f.tf.setBackend("webgl"); } catch (e) {}
      try { await f.tf.ready(); } catch (e) {}
      const u = KMB + "/model/";
      await Promise.all([f.nets.ssdMobilenetv1.loadFromUri(u), f.nets.tinyFaceDetector.loadFromUri(u), f.nets.faceLandmark68Net.loadFromUri(u), f.nets.faceRecognitionNet.loadFromUri(u)]);
      KFA = f; return f;
    } catch (e) { KFAbad++; KFAp = null; console.log("fa", e && e.message); return null; }
  })();
  return KFAp;
}
const kImg = (src) => new Promise((ok, no) => { const im = new Image(); im.onload = () => ok(im); im.onerror = () => no(new Error("IMG")); im.src = src; });
const kDist = (a, b) => { let s = 0; for (let i = 0; i < a.length; i++) { const x = a[i] - b[i]; s += x * x; } return Math.sqrt(s); };
function kFacePct(d) {
  if (!(d > 0)) return 100;
  for (let i = 1; i < KMA.length; i++) if (d <= KMA[i][0]) { const a = KMA[i - 1], b = KMA[i]; return Math.round((a[1] + (b[1] - a[1]) * (d - a[0]) / (b[0] - a[0])) * 10) / 10; }
  return 0;
}
/* ছবির একটা অংশ কেটে নতুন canvas (ছোট/বড় করে) */
function kCrop(src, box, outW) {
  const W = src.naturalWidth || src.videoWidth || src.width, H = src.naturalHeight || src.videoHeight || src.height;
  const x = Math.max(0, box.x), y = Math.max(0, box.y), w = Math.max(8, Math.min(W - x, box.w)), h = Math.max(8, Math.min(H - y, box.h));
  const c = document.createElement("canvas"); c.width = Math.round(outW); c.height = Math.max(8, Math.round(outW * h / w));
  c.getContext("2d").drawImage(src, x, y, w, h, 0, 0, c.width, c.height); return c;
}
const kGrow = (b, k) => ({x: b.x - b.width * (k - 1) / 2, y: b.y - b.height * (k - 1) / 2, w: b.width * k, h: b.height * k});
/* মুখের এলাকার মান: আলো, ঝাপসা ভাব, ঝলক */
function kQual(src, b) {
  const c = kCrop(src, kGrow(b, 1.15), 160), g = c.getContext("2d", {willReadFrequently: true}), W = c.width, H = c.height, d = g.getImageData(0, 0, W, H).data, n = W * H, gr = new Uint8Array(n);
  let sum = 0, clip = 0; for (let i = 0, j = 0; j < n; i += 4, j++) { const y = (d[i] * 77 + d[i + 1] * 150 + d[i + 2] * 29) >> 8; gr[j] = y; sum += y; if (y > 245) clip++; }
  let lap = 0, lap2 = 0, cnt = 0; for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) { const i = y * W + x, l = 4 * gr[i] - gr[i - 1] - gr[i + 1] - gr[i - W] - gr[i + W]; lap += l; lap2 += l * l; cnt++; }
  const m = lap / cnt; return {mean: sum / n, sharp: lap2 / cnt - m * m, clip: clip / n};
}
/* সবচেয়ে বড় ও নিশ্চিত মুখটি নেওয়া */
async function kDet(f, input, kind) {
  const o = kind === "tiny" ? new f.TinyFaceDetectorOptions({inputSize: 320, scoreThreshold: .4}) : new f.SsdMobilenetv1Options({minConfidence: .3, maxResults: 6});
  const all = await f.detectAllFaces(input, o).withFaceLandmarks().withFaceDescriptors(); if (!all || !all.length) return null;
  all.sort((a, b) => b.detection.score * b.detection.box.area - a.detection.score * a.detection.box.area);
  const r = all[0], bx = r.detection.box; return {desc: Array.from(r.descriptor), score: r.detection.score, box: {x: bx.x, y: bx.y, width: bx.width, height: bx.height}};
}
/* NID কার্ডের ছবির মুখ: প্রথমে পুরো ছবিতে, না পেলে বাঁ দিকটা বড় করে খোঁজা; পেলে মুখ কেটে বড় করে আবার হিসাব (ছোট ছাপা ছবিতে নির্ভুলতা বাড়ে) */
async function kCardFace(f, src) {
  const im = await kImg(src), W = im.naturalWidth, H = im.naturalHeight; let base = im, r = await kDet(f, im, "ssd");
  if (!r) { base = kCrop(im, {x: 0, y: 0, w: W * .55, h: H}, 1000); r = await kDet(f, base, "ssd"); }
  if (!r) return null;
  const g = kGrow(r.box, 1.7), c2 = kCrop(base, g, 480); let best = r, bb = base, ob = null;
  try { const r2 = await kDet(f, c2, "ssd"); if (r2 && r2.score >= r.score - .12) { best = r2; bb = c2; } } catch (e) {}
  const q = kQual(bb, best.box), th = kCrop(bb, kGrow(best.box, 1.5), 160).toDataURL("image/jpeg", .82);
  return {desc: best.desc, thumb: th, q, score: best.score};
}
const kRound = (a) => a.map(x => Math.round(x * 1e4) / 1e4);
const kMs = (k) => { const e = document.getElementById("kmst"); if (e) e.textContent = t(k); };
async function kMatchRun() {
  if (K.mrun) return; K.mrun = true; const id = ++K.mid, live = () => K.step === "match" && K.mid === id;
  const R = {st: "low", pct: 0, rs: [], card: K.cardThumb || "", self: "", cardBad: false, d: null};
  const fin = () => { if (!live()) return; K.mres = R; K.mrun = false; hap(R.st === "ok" ? "MEDIUM" : "HEAVY"); kycRender(); };
  try {
    kMs("k_m_l1"); const f = await kFA(); if (!live()) return;
    if (!f) { R.st = "nomodel"; K.desc = null; return fin(); }
    kMs("k_m_l2");
    if (!K.cardDesc) { const c = await kCardFace(f, K.front); if (!live()) return; if (c) { K.cardDesc = c.desc; K.cardThumb = c.thumb; K.cardQ = c.q; } }
    R.card = K.cardThumb || "";
    kMs("k_m_l3");
    const sim = await kImg(K.selfie), s = await kDet(f, sim, "ssd"); if (!live()) return;
    if (s) R.self = kCrop(sim, kGrow(s.box, 1.5), 160).toDataURL("image/jpeg", .82);
    /* লাইভনেসের ধাপে তোলা ছবিগুলোতে একই মুখ আছে কিনা */
    kMs("k_m_l4");
    const sw = {ok: false, n: 0, max: 0};
    if (s && K.live && K.live.ok) {
      for (const fr of K.live.fr) { if (!live()) return; try { const q = await kDet(f, await kImg(fr), "tiny"); if (!q) continue; sw.n++; sw.max = Math.max(sw.max, kDist(q.desc, s.desc)); } catch (e) {} }
      sw.ok = sw.n >= 2 && sw.max <= KM.SWAP;
    }
    K.live = Object.assign({}, K.live, {swap_ok: sw.ok, swap_n: sw.n, swap_max: Math.round(sw.max * 1000) / 1000});
    if (K.cardDesc && s) { R.d = kDist(K.cardDesc, s.desc); R.pct = kFacePct(R.d); K.desc = {card: kRound(K.cardDesc), selfie: kRound(s.desc)}; } else K.desc = null;
    const liveOn = !!(K.live && K.live.ok);
    if (R.pct >= KM.AUTO && liveOn && sw.ok) R.st = "ok";
    else if (R.pct >= KM.AUTO && !liveOn) R.st = "review";
    else R.st = "low";
    if (R.st === "low") {
      const rs = R.rs;
      if (!s) rs.push("k_r_noface");
      else {
        const q = kQual(sim, s.box);
        if (q.mean < 70) rs.push("k_r_dark"); else if (q.mean > 205 || q.clip > .22) rs.push("k_r_bright");
        if (q.sharp < 20) rs.push("k_r_blur");
        if (s.box.width / sim.naturalWidth < .2) rs.push("k_r_far");
        if (s.score < .8) rs.push("k_r_cover");
      }
      if (!K.cardDesc) { rs.push("k_r_card"); R.cardBad = true; }
      else if (K.cardQ && (K.cardQ.clip > .25 || K.cardQ.sharp < 12 || K.cardQ.mean < 55)) { rs.push("k_r_cardq"); R.cardBad = true; }
      if (liveOn && s && !sw.ok) rs.push(sw.n < 2 ? "k_r_live" : "k_r_swap");
      if (!rs.length) rs.push("k_r_diff");
      K.tries++;
    }
    return fin();
  } catch (e) {
    console.log("match", e && e.message); R.st = "nomodel"; K.desc = null; return fin();
  } finally { if (K.mid === id) K.mrun = false; }
}
function kRing(pct, col) {
  const c = 2 * Math.PI * 60, off = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
  return `<svg class="kmr" viewBox="0 0 140 140"><circle cx="70" cy="70" r="60" fill="none" stroke="#f3c4da" stroke-width="9"/><circle cx="70" cy="70" r="60" fill="none" stroke="${col}" stroke-width="9" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" transform="rotate(-90 70 70)" style="--c:${c.toFixed(1)};--o:${off.toFixed(1)}"/></svg>`;
}
function kMatch() {
  const R = K.mres, th = (src, cls) => `<div class="kmf${cls || ""}">${src ? `<img src="${src}" alt="">` : kic("face")}</div>`;
  if (!R) return `<div class="kw">${kTop(t("k_face"), "", 3)}<div class="kbody"><div class="kcard kc1 kmx"><div class="kmp">${th(K.cardThumb, " sc")}<i class="kml"></i>${th("", " sc")}</div><h2>${t("k_m_h")}</h2><p id="kmst">${t("k_m_l1")}</p><div class="kbar"><i class="kmind"></i></div></div></div></div>`;
  const ok = R.st === "ok", rv = R.st === "review", nm = R.st === "nomodel", fin = !ok && !rv && !nm && K.tries >= 2;
  const col = ok ? "#12a15b" : rv ? "#e8a20c" : "#e5484d", pctTxt = R.d === null ? "—" : Math.round(R.pct) + "%";
  const h = ok ? "k_m_okh" : rv ? "k_m_rvh" : nm ? "k_m_nmh" : "k_m_lowh", sub = ok ? "k_m_oks" : rv ? "k_m_rvs" : nm ? "k_m_nm" : fin ? "k_m_final" : "k_m_lows";
  const why = !ok && !rv && !nm ? `<div class="kmwy">${R.rs.map(k => `<div class="kmri">${kic("info") || ""}<span>${t(k)}</span></div>`).join("")}</div>` : "";
  const btns = ok || rv ? `<button class="kbtn" onclick="kMatchGo()">${t(ok ? "k_m_go" : "k_m_send")}</button>`
    : nm || fin ? `<button class="kbtn" onclick="kMatchGo()">${t("k_m_send")}</button>${fin ? `<button class="klk" onclick="kMatchRetry(0)">${t("k_m_try")}</button>` : ""}`
    : `<button class="kbtn" onclick="kMatchRetry(0)">${t("k_m_try")}</button>${R.cardBad ? `<button class="klk" onclick="kMatchRetry(1)">${t("k_m_card")}</button>` : ""}`;
  return `<div class="kw">${kTop(t("k_face"), "kBack()", 3)}<div class="kbody"><div class="kcard kc1 kmx">
    <div class="kmp">${th(R.card)}<div class="kmc" style="--c:${col}"><div class="kmrw">${kRing(R.d === null ? 0 : R.pct, col)}<b style="color:${col}">${pctTxt}</b></div></div>${th(R.self)}</div>
    <h2>${t(h)}</h2><p>${t(sub)}</p>${R.d !== null ? `<small class="kmt">${t("k_m_att")} ${Math.min(K.tries + (ok || rv ? 1 : 0), 2) || 1}/2 · ${t("k_m_need")} ${KM.AUTO}%</small>` : ""}${why}</div></div>
    <div class="kbtm">${btns}</div></div>`;
}
function kMatchGo() { hap(); K.err = ""; K.step = "pin"; kycRender(); }
function kMatchRetry(card) {
  hap(); K.pv = "";
  if (card) { K.cardOnly = true; K.step = "front"; }
  else { K.mres = null; K.selfie = ""; K.live = null; K.desc = null; K.step = "face"; }
  kycRender();
}

/* ----- PIN ও জমা ----- */
function kPin() {
  const th = (src) => `<div class="kth"><img src="${src}" alt=""></div>`;
  return `<div class="kw">${kTop(t("k_pin"), "kBack()", 3)}<div class="kbody"><div class="kcard kc1"><div class="kths">${th(K.front)}${th(K.back)}${th(K.selfie)}</div>
    <h2>${t("k_pin")}</h2><p>${t("k_pins")}</p>
    <div class="kpf"><input id="kpin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" placeholder="••••••" autocomplete="off" oninput="pinOnly(this);kPinTyp()" onkeydown="if(event.key==='Enter')kSubmit()"></div>
    <div class="le kle" id="kle">${esc(K.err)}</div><div class="kmsg" id="kmsg">${esc(K.msg)}</div><div class="kupl" id="kupl"></div></div></div>
    <div class="kbtm"><button class="kbtn" id="ksb" onclick="kSubmit()">${t("k_sub2")}</button></div></div>`;
}
function kPinTyp() { const le = document.getElementById("kle"); if (le) le.textContent = ""; }
const kMsg = (m) => { K.msg = m; const e = document.getElementById("kmsg"); if (e) e.textContent = m; };
async function kUpload(path, data) {
  const BASE = String(SUPA_URL).replace(/[\s"']/g, "").replace(/\/+$/, ""), KEY = String(SUPA_KEY).replace(/[\s"']/g, "");
  const blob = await (await fetch(data)).blob();
  for (let tr = 0; tr < 2; tr++) {
    const ac = typeof AbortController !== "undefined" ? new AbortController() : null, tm = ac ? setTimeout(() => ac.abort(), 60000) : 0;
    let r;
    try { r = await fetch(BASE + "/storage/v1/object/kyc/" + path, {method: "POST", headers: {apikey: KEY, Authorization: "Bearer " + S.tok, "Content-Type": "image/jpeg"}, body: blob, signal: ac ? ac.signal : undefined}); }
    catch (e) { throw new Error("NET"); } finally { clearTimeout(tm); }
    if (r.status === 401 && tr === 0 && S.rt) { try { await refreshTok(); continue; } catch (e) { throw new Error("SESS"); } }
    if (!r.ok) throw new Error("UPLOAD");
    return;
  }
}
async function kSubmit() {
  if (K.busy) return;
  const el = document.getElementById("kpin"), le = document.getElementById("kle"), pin = el ? digs(el.value, 6) : "";
  if (!isPin(pin)) { hap("HEAVY"); return; }
  K.busy = true; const sb = document.getElementById("ksb"); if (sb) sb.classList.add("ld"); if (le) le.textContent = "";
  const fail = (e) => { K.busy = false; kMsg(""); const b = document.getElementById("ksb"); if (b) b.classList.remove("ld"); const l2 = document.getElementById("kle"); if (l2) l2.textContent = errMsg(e); K.err = l2 ? l2.textContent : ""; hap("HEAVY"); const f = document.getElementById("kpin"); if (f) { f.value = ""; } };
  try { await signIn(S.me.phone, pin); } catch (e) { return fail(e); }
  let r = null; const base = S.uid + "/" + Date.now(), P3 = {front: base + "-front.jpg", back: base + "-back.jpg", selfie: base + "-selfie.jpg"};
  try {
    kMsg(t("k_up")); kUpShow(); kUpSet(0);
    await kUpload(P3.front, K.front); kUpSet(1); await kUpload(P3.back, K.back); kUpSet(2); await kUpload(P3.selfie, K.selfie); kUpSet(3);
    kMsg(t("k_up2"));
    const d = K.d, base1 = {p_name: d.name.trim(), p_father: d.father.trim(), p_dob: d.dob.trim(), p_nid: d.nid, p_addr: d.addr.trim(), p_front: P3.front, p_back: P3.back, p_selfie: P3.selfie};
    const lv = K.live || {}, dc = K.desc, R = K.mres || {};
    const b2 = Object.assign({}, base1, {p_card_desc: dc ? dc.card : null, p_selfie_desc: dc ? dc.selfie : null,
      p_live: {ok: !!lv.ok, mode: lv.mode || "", ord: lv.ord || [], ms: lv.ms || 0, rs: lv.rs || 0, swap_ok: !!lv.swap_ok, swap_n: lv.swap_n || 0, swap_max: lv.swap_max || 0, pct: R.d === null || R.d === undefined ? null : R.pct, st: R.st || ""},
      p_tries: K.tries, p_mismatch: !!(R.st && R.st !== "ok")});
    try { r = await api("/rest/v1/rpc/submit_kyc2", {m: "POST", tries: 1, b: b2}); }
    catch (e) {
      /* v2.20 SQL চালানো না থাকলে পুরনো পথে জমা (অ্যাডমিন হাতে যাচাই করবে) */
      if (/could not find the function|schema cache|PGRST202/i.test((e && e.message) || "")) r = await api("/rest/v1/rpc/submit_kyc", {m: "POST", tries: 1, b: base1}); else throw e;
    }
  } catch (e) { return fail(e); }
  kUpSet(4);
  try { if (r && r.id) api("/rest/v1/rpc/kyc_extra", {m: "POST", tries: 1, b: {p_id: r.id, p_mother: (K.d.mother || "").trim(), p_name_bn: (K.d.name_bn || "").trim()}}).catch(() => {}); } catch (e) {}
  /* v2.52: অতিরিক্ত তথ্য (SQL চালানো না থাকলে চুপচাপ বাদ যায়, জমা আটকায় না) */
  try { if (r && r.id) { const x = K.d; api("/rest/v1/rpc/kyc_extra2", {m: "POST", tries: 1, b: {p_id: r.id, p_data: {blood: x.blood || "", division: x.division || "", district: x.district || "", upazila: (x.upazila || "").trim(), post_office: (x.postoffice || "").trim(), post_code: x.postcode || "", gender: x.gender || "", income_source: x.incsrc || "", monthly_income: x.income || "", occupation: x.occ || ""}}}).catch(() => {}); } } catch (e) {}
  const auto = !!(r && typeof r === "object" && r.status === "approved");
  { const R0 = K.mres || {}, nd = String(K.d.nid || ""); K.sum = {th: [K.front, K.back, K.selfie], name: K.d.name, nid: nd ? "••••••" + nd.slice(-4) : "", pct: R0.d === null || R0.d === undefined || R0.pct >= KM.AUTO ? null : Math.round(R0.pct), auto}; }
  K.busy = false; K.flow = false; K.msg = ""; K.err = ""; K.front = K.back = K.selfie = ""; K.p1 = K.p2 = null; K.live = null; K.mres = null; K.desc = null; K.tries = 0; K.cardDesc = null; K.cardThumb = "";
  if (S.me) { S.me.kyc_status = auto ? "approved" : "pending"; S.me.kyc_reason = null; }
  if (!auto) kycNotify("submitted");
  fpNotify({title: t("k_kyc"), body: t(auto ? "k_oks" : "k_nf_sub"), ch: "info"});
  hap("MEDIUM"); K.step = auto ? "ok" : "wait"; kycRender();
}
/* অ্যাডমিনকে Telegram এ খবর (Edge Function "kyc-notify" না থাকলে চুপচাপ বাদ যায়) */
function kycNotify(action, id) {
  try {
    const BASE = String(SUPA_URL).replace(/[\s"']/g, "").replace(/\/+$/, ""), KEY = String(SUPA_KEY).replace(/[\s"']/g, "");
    fetch(BASE + "/functions/v1/kyc-notify", {method: "POST", headers: {apikey: KEY, Authorization: "Bearer " + S.tok, "Content-Type": "application/json"}, body: JSON.stringify({action, id})}).catch(() => {});
  } catch (e) {}
}

/* ----- অপেক্ষা ও সফল পাতা ----- */
function kWait() {
  const face = `<div class="kfv"><svg viewBox="0 0 140 140"><circle cx="70" cy="70" r="62" fill="none" stroke="#f3c4da" stroke-width="5"/><circle class="kfr2" cx="70" cy="70" r="62" fill="none" stroke="#e2136e" stroke-width="5" stroke-linecap="round" pathLength="100" transform="rotate(-90 70 70)"/><g class="kfa"><ellipse cx="70" cy="70" rx="28" ry="35" fill="#fde7f1" stroke="#e2136e" stroke-width="3.5"/><circle cx="60" cy="63" r="3.4" fill="#e2136e"/><circle cx="80" cy="63" r="3.4" fill="#e2136e"/><path d="M70 66v9l-4 3" fill="none" stroke="#e2136e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M60 87q10 7 20 0" fill="none" stroke="#e2136e" stroke-width="3" stroke-linecap="round"/></g><g class="kfc"><circle cx="70" cy="70" r="40" fill="#12a15b"/><path d="M52 71l13 13 24-27" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g></svg></div>`;
  const n = (c, ic, lb) => `<div class="n ${c}"><i>${ic}</i><span>${t(lb)}</span></div>`;
  const stages = `<div class="kst3">${n("done", kTickI, "k_s1")}<s class="full"></s>${n("act", '<em class="kdot"></em>', "k_s2")}<s class="run"></s>${n("", "3", "k_s3")}</div>`;
  return `<div class="kw">${kTop(t("k_title"), "", -1)}<div class="kdone${K.sum ? " sm" : ""}">${face}${stages}
    <h2>${t("k_wh")}</h2><p>${t("k_ws")}</p>${kSumHtml()}</div>
    <div class="kbtm"><button class="kbtn" id="kck" onclick="kCheck()">${t("k_chk")}</button><button class="klk" onclick="logout()">${t("logout")}</button></div></div>`;
}
async function kCheck() {
  hap(); const b = document.getElementById("kck"); if (b) b.classList.add("ld");
  try { await loadAll(false); kycSync(); if (K.step === "wait") toast(t("k_still")); } catch (e) { toast(t("neterr")); }
  const b2 = document.getElementById("kck"); if (b2) b2.classList.remove("ld");
}
function kOk() {
  return `<div class="kw">${kTop(t("k_title"), "", -1)}<div class="kdone"><div class="kcir ok"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>
    <h2>${t("k_okh")}</h2><p>${t("k_oks")}</p></div><div class="kbtm"><button class="kbtn" onclick="kHome()">${t("k_home")}</button></div></div>`;
}
function kHome() { hap(); kycClose(true); S.tab = "home"; S.fx = true; render(); }
function kBack() {
  hap();
  if (K.busy && K.step !== "face") return;
  const s = K.step;
  if (s === "front") { if (K.pv) { K.pv = ""; kycRender(); return; } if (K.cardOnly) { K.cardOnly = false; K.step = "match"; kycRender(); return; } if (K.redo) { K.redo = false; K.step = "back"; kycRender(); return; } K.flow = false; K.step = "intro"; }
  else if (s === "back") { K.pv = ""; K.step = "front"; }
  else if (s === "info") { K.pv = ""; K.reading = false; K.step = "back"; }
  else if (s === "face") { K.pv = ""; K.step = "info"; }
  else if (s === "match") { if (K.mrun) return; K.mres = null; K.pv = ""; K.step = "face"; }
  else if (s === "pin") { K.pv = ""; K.step = K.mres ? "match" : "face"; }
  else return;
  kycRender();
}


/* ======================================================================
   v2.21-B + v2.21-C : ক্যামেরা, NID স্ক্যান ও মুখ যাচাই (নতুন কোড)
   ====================================================================== */
Object.assign(T.bn, {k_permh: "ক্যামেরার অনুমতি দরকার", k_permd: "NID ও মুখ যাচাই করতে FuNPaY-কে ক্যামেরা ব্যবহারের অনুমতি দিন।", k_permb: "অনুমতি দিন", k_permset: "সেটিংসে গিয়ে ক্যামেরা চালু করুন", k_nid_hint: "কার্ডটি ফ্রেমে ধরুন, নিজেই ছবি উঠবে"});
Object.assign(T.en, {k_permh: "Camera permission needed", k_permd: "Allow FuNPaY to use the camera to verify your NID and face.", k_permb: "Allow", k_permset: "Open Settings and turn on the camera", k_nid_hint: "Hold the card in the frame, the photo is taken automatically"});

let KSf = "", KPERM = null;
const KFACE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>';
const KDM = {right: 0, down: 1, left: 2, up: 3};

/* ---- ক্যামেরার অনুমতি: অ্যাপ নিজে থেকে চায় (নেটিভ), না দিলে বড় কার্ডে আবার চায় / সেটিংস খোলে ---- */
function kCamPerm(force) {
  if (!force && KPERM) return KPERM;
  KPERM = (async () => {
    try {
      const B = cap().BarcodeScanner;
      if (B && B.checkPermissions) {
        let p = await B.checkPermissions();
        if (p.camera !== "granted") p = await B.requestPermissions();
        if (p.camera !== "granted") { KPERM = null; return false; }
      }
      return true;
    } catch (e) { return true; }
  })();
  return KPERM;
}
function kPermShow() {
  const el = document.getElementById("kyc"), cam = el && el.querySelector(".kcam"); if (!cam || document.getElementById("kperm")) return;
  const d = document.createElement("div"); d.id = "kperm"; d.className = "kperm";
  d.innerHTML = `<div class="kpb"><div class="kpi cam">${kic("cam2")}</div><h3>${t("k_permh")}</h3><p>${t("k_permd")}</p><button class="kbtn" onclick="kAskCam()">${t("k_permb")}</button></div>`;
  cam.appendChild(d); hap("HEAVY");
}
async function kAskCam() {
  hap(); const B = cap().BarcodeScanner; let ok = false;
  try { ok = await kCamPerm(true); } catch (e) {}
  if (ok) { const p = document.getElementById("kperm"); if (p) p.remove(); kcamInit(); return; }
  try { if (B && B.openSettings) await B.openSettings(); } catch (e) {}
}
document.addEventListener("visibilitychange", () => {
  if (document.hidden || !K.open || !document.getElementById("kperm")) return;
  kCamPerm(true).then((ok) => { if (ok) { const p = document.getElementById("kperm"); if (p) p.remove(); kcamInit(); } });
});

/* ---- ক্যামেরা চালু: আগের স্ট্রিম থাকলে সেটাই (সামনে→পেছনে যেতে আর দেরি নেই), নইলে হালকা মাপে দ্রুত চালু ---- */
function kcamStop(keep) {
  kAutoStop(); kFaceStop();
  if (KS && !keep) { try { KS.getTracks().forEach(x => x.stop()); } catch (e) {} KS = null; KSf = ""; }
}
async function kcamGet(face) {
  const f = face ? "user" : "environment";
  if (KS && KSf === f && KS.getVideoTracks().some(x => x.readyState === "live")) return KS;
  if (KS) { try { KS.getTracks().forEach(x => x.stop()); } catch (e) {} KS = null; KSf = ""; }
  const tries = [face ? {video: {facingMode: {ideal: f}, width: {ideal: 640}, height: {ideal: 480}, frameRate: {ideal: 30, max: 30}}, audio: false} : {video: {facingMode: {ideal: f}, width: {ideal: 1280}, height: {ideal: 720}, frameRate: {ideal: 30, max: 30}}, audio: false}, {video: {facingMode: f}, audio: false}, {video: true, audio: false}];
  let err;
  for (const c of tries) {
    try { KS = await navigator.mediaDevices.getUserMedia(c); KSf = f; return KS; }
    catch (e) { err = e; if (e && /NotAllowed|Permission|Security/i.test(e.name || "")) break; }
  }
  throw err || new Error("NOCAM");
}
async function kcamInit() {
  const v = document.getElementById("kvid"); if (!v) return;
  const face = K.step === "face", step = K.step;
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new Error("NOCAM");
    if (!(await kCamPerm())) { kPermShow(); return; }
    const s = await kcamGet(face);
    const v2 = document.getElementById("kvid");
    if (!K.open || !v2 || K.step !== step || K.pv) { if (!K.open) kcamStop(); return; }
    v2.srcObject = s;
    const pl = v2.play(); if (pl && pl.catch) pl.catch(() => {});
    v2.classList.add("on");
    if (!face) {
      try { const tr = s.getVideoTracks()[0]; tr.applyConstraints({advanced: [{focusMode: "continuous"}]}).catch(() => {}); } catch (e) {}
    }
    await new Promise((ok) => { if (v2.videoWidth) ok(); else { v2.onloadedmetadata = ok; setTimeout(ok, 1500); } });
    if (!document.getElementById("kvid") || K.step !== step || K.pv) return;
    if (face) kFaceStart(); else kAutoStart();
  } catch (e) {
    const denied = e && /NotAllowed|Permission|Security/i.test(e.name || "");
    if (denied) { KPERM = null; kcamStop(); kPermShow(); return; }
    kcamStop(); const n = document.getElementById("knc"); if (n) n.textContent = t("k_nocam"); kManualShow();
  }
}

/* ---- ছবির মান মাপা (কার্ডের মতো লেখা-ভরা জিনিস কিনা) ---- */
function kStat(g, W, H) {
  const d = g.getImageData(0, 0, W, H).data, n = W * H, gr = new Uint8Array(n); let sum = 0;
  for (let i = 0, j = 0; j < n; i += 4, j++) { const y = (d[i] * 77 + d[i + 1] * 150 + d[i + 2] * 29) >> 8; gr[j] = y; sum += y; }
  const GX = 6, GY = 4, ce = new Array(GX * GY).fill(0), cc = new Array(GX * GY).fill(0);
  let lap = 0, lap2 = 0, edge = 0, cnt = 0;
  for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
    const i = y * W + x, l = 4 * gr[i] - gr[i - 1] - gr[i + 1] - gr[i - W] - gr[i + W]; lap += l; lap2 += l * l; cnt++;
    const ci = Math.floor(y * GY / H) * GX + Math.floor(x * GX / W), e = Math.abs(gr[i + 1] - gr[i - 1]) + Math.abs(gr[i + W] - gr[i - W]) > 60;
    if (e) { edge++; ce[ci]++; } cc[ci]++;
  }
  const m = lap / cnt, cells = ce.filter((e, i) => cc[i] && e / cc[i] > .02).length;
  return {gr, mean: sum / n, sharp: lap2 / cnt - m * m, edge: edge / cnt, cells};
}
const kLike = (m, strict) => m.edge > (strict ? .03 : .012) && m.edge < .8 && m.cells >= (strict ? 10 : 5) && m.mean > 30 && m.mean < 250;
function kRegion(v, pad) {
  const w0 = document.querySelector("#kyc .kwin"); if (!w0) return null;
  const r = w0.getBoundingClientRect(), vw = v.videoWidth, vh = v.videoHeight; if (!vw || !vh || !r.width) return null;
  const s = Math.max(r.width / vw, r.height / vh); let w = r.width / s, h = r.height / s, x = (vw - w) / 2, y = (vh - h) / 2;
  const px = w * pad, py = h * pad; x -= px; y -= py; w += 2 * px; h += 2 * py;
  x = Math.max(0, x); y = Math.max(0, y); w = Math.min(vw - x, w); h = Math.min(vh - y, h);
  return {x, y, w, h};
}
function kMet(v) {
  const R = kRegion(v, 0); if (!R || R.w < 10) return null;
  const W = 240, H = Math.max(40, Math.round(W * R.h / R.w)), c = KA.cv || (KA.cv = document.createElement("canvas")); c.width = W; c.height = H;
  const g = c.getContext("2d", {willReadFrequently: true}); g.drawImage(v, R.x, R.y, R.w, R.h, 0, 0, W, H);
  const o = kStat(g, W, H); let diff = 99;
  if (KA.prev && KA.prev.length === W * H) { diff = 0; for (let i = 0; i < o.gr.length; i += 3) diff += Math.abs(o.gr[i] - KA.prev[i]); diff /= o.gr.length / 3; }
  KA.prev = o.gr; o.diff = diff; o.cardLike = kLike(o, true); return o;
}
function kGeoCv(src) {
  const W = 240, H = Math.max(40, Math.round(W * src.height / src.width)), c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d", {willReadFrequently: true}); g.drawImage(src, 0, 0, W, H);
  const o = kStat(g, W, H); o.cardLike = kLike(o, false); return o;
}
function kCardShot(v) {
  const R = kRegion(v, .04) || {x: 0, y: 0, w: v.videoWidth, h: v.videoHeight}, k = Math.min(1, 1800 / Math.max(R.w, R.h));
  const c = document.createElement("canvas"); c.width = Math.round(R.w * k); c.height = Math.round(R.h * k);
  c.getContext("2d").drawImage(v, R.x, R.y, R.w, R.h, 0, 0, c.width, c.height); return c.toDataURL("image/jpeg", .88);
}

/* ---- বাংলাদেশের NID চেনা: সামনে (নাম/পিতা/মাতা/জন্ম তারিখ/ID NO), পেছনে (ঠিকানা/রক্তের গ্রুপ/জন্মস্থান/মুদ্রণ/বারকোড)।
        দুই পাশেই থাকা শব্দ (গণপ্রজাতন্ত্রী, সরকার) কোনো পাশ ঠিক করে না, শুধু "আইডি জাতীয় লেখা" ধরে ---- */
function kClass2(raw) {
  const s = String(raw || "");
  const F = [/\bName\b/i, /নাম/, /পিতা/, /মাতা/, /Date\s*of\s*Birth|\bDOB\b/i, /জন্ম\s*তারিখ/, /\bID\s*NO\b|NID\s*No/i, /National\s*ID|জাতীয়\s*পরিচয়|পরিচয়\s*পত্র/i];
  const B = [/ঠিকানা|ঠিকা|Address/i, /রক্ত|Blood/i, /জন্মস্থান|Place\s*of\s*Birth/i, /মুদ্রণ|Printing/i, /কর্তৃপক্ষ|Authority|Issuing|Commission|কমিশন/i, /স্বাক্ষর|Signature/i, /ডাকঘর|কুড়াই|Post\s*Office/i, /সম্পত্তি|property|ব্যবহারকারী/i];
  const G = [/গণপ্রজাতন্ত্রী|People'?s\s*Republic|Government\s*of/i, /সরকার/, /বাংলাদেশ|Bangladesh/i, /নির্বাচন|Election/i, /ভোটার|Voter/i];
  const fs = F.filter(r => r.test(s)).length, bs = B.filter(r => r.test(s)).length, gs = G.filter(r => r.test(s)).length;
  const any = fs + bs + gs, c = any === 0 ? "none" : (fs >= 2 && fs > bs) ? "front" : (bs >= 1 && bs > fs) ? "back" : "weak";
  return {c, fs, bs, any};
}
const kClass = (raw) => kClass2(raw).c;
/* ফল: "ok" | "wrong:front" | "wrong:back" | "notid". OCR না চললে বা ধীর হলে ছবির গড়ন দেখে সিদ্ধান্ত; ঝাপসা OCR-এ আর "এটি আইডি কার্ড নয়" বলে না */
function kJudge(txt, side, geo) {
  const like = !geo || geo.cardLike;
  if (typeof txt !== "string") return like ? "ok" : "notid";
  const r = kClass2(txt);
  if (side === "front" && r.c === "back" && r.bs >= 2) return "wrong:back";
  if (side === "back" && r.c === "front" && r.fs >= 3 && r.bs === 0) return "wrong:front";
  if (r.c === "none") return like ? "ok" : "notid";
  return "ok";
}
const kTO = (ms) => new Promise(r => setTimeout(() => r(undefined), ms));

/* ---- অটো ছবি তোলা (দ্রুত): কার্ড ফ্রেমে স্থির হলেই ছবি, OCR শুধু সর্বোচ্চ ৭ সেকেন্ড দেখে ---- */
async function kAutoTick() {
  if (KA.busy || Date.now() < KA.pause) return;
  const v = document.getElementById("kvid"), s = K.step;
  if (!v || !v.videoWidth || v.readyState < 2 || K.pv || (s !== "front" && s !== "back")) return;
  const m = kMet(v); if (!m) return;
  const good = m.cardLike && m.sharp > 40 && m.diff < 12;
  if (!good) { KA.ok = 0; kSt(m.diff >= 12 ? "k_steady" : (m.cardLike && m.sharp <= 40) ? "k_blur" : "k_auto"); return; }
  if (++KA.ok < 2) { kSt("k_steady"); return; }
  KA.ok = 0; KA.busy = true; kSt("k_chk2");
  const shot = kCardShot(v), cv = kRegCanvas(v, .05, 1000);
  let txt; try { txt = await Promise.race([kOcrText(cv, ""), kTO(7000)]); } catch (e) { txt = undefined; }
  if (K.step !== s || K.pv) { KA.busy = false; return; }
  const j = kJudge(txt === undefined ? null : txt, s, m);
  KA.busy = false;
  if (j === "ok") { KA.none = 0; kAutoGot(shot, s, m, txt); return; }
  if (j.indexOf("wrong") === 0) { KA.none = 0; kPop(t("k_wrong"), t(j === "wrong:front" ? "k_isf" : "k_isb")); return; }
  if (++KA.none >= 3) { KA.none = 0; kPop(t("k_notid"), t("k_notidm")); return; }
  KA.pause = Date.now() + 500; kSt("k_auto");
}
function kAutoGot(img, s, m, txt) {
  K.pre[s] = ""; K.pv = img; K.auto = true; K.vbusy = false; K.repSrc = "cam"; K.imgWH = null; K.rep = kMakeRep(s, "cam", m, typeof txt === "string" ? txt : undefined, img); hap("MEDIUM"); kycRender();
  /* সব ঠিক থাকলে ফলাফল দেখিয়ে নিজে এগোয়; কিছু খারাপ থাকলে ব্যবহারকারীর সিদ্ধান্তের অপেক্ষা */
  if (!(K.rep && K.rep.warn)) K.at = setTimeout(() => { if (K.pv === img && K.step === s && K.auto) kUse(); }, 2300);
}
/* ম্যানুয়াল শাটার / গ্যালারি: দ্রুত চেক (OCR সর্বোচ্চ ৯ সেকেন্ড), পুরো ছবি রাখা হয় */
function kSnap() {
  const v = document.getElementById("kvid");
  if (!v || !v.videoWidth) { toast(t("k_nocam")); return; }
  hap("MEDIUM"); const face = K.step === "face";
  K.pv = face ? kShrink(v, 1800, .86) : kCardShot(v); K.auto = false; kcamStop();
  if (face) { kycRender(); return; }
  K.repSrc = "cam"; K.imgWH = null; K.rep = null; K.vbusy = true; K.pre[K.step] = ""; kycRender(); kVal();
}
async function kVal() {
  const s = K.step, img = K.pv; let txt, geo = null;
  try { const cv = await kPrep(img, 1500); geo = kGeoCv(cv); txt = await Promise.race([kOcrText(cv, ""), kTO(9000)]); } catch (e) { txt = undefined; }
  if (K.pv !== img || K.step !== s) return;
  K.vbusy = false;
  const j = kJudge(txt === undefined ? null : txt, s, geo);
  if (j === "notid") { kReject("k_notid", "k_notidm"); return; }
  if (j.indexOf("wrong") === 0) { kReject("k_wrong", j === "wrong:front" ? "k_isf" : "k_isb"); return; }
  if (typeof txt === "string" && txt) K.pre[s] = txt;
  K.rep = kMakeRep(s, K.repSrc || "cam", geo, txt, img);
  kycRender();
}

/* ---- NID স্ক্যান পাতা: চার পাশে UI রঙ + লোগো, ক্যামেরা শুধু কার্ডের ঘরে ---- */
const kBg = () => `<div class="kbg"><i class="b1"></i><i class="b2"></i><i class="b3"></i></div>`;
const kLogo = (ti) => `<div class="klg"><img src="icons/logo-pink.png" alt=""><b>FuNPaY</b>${ti ? `<strong>${ti}</strong>` : ""}</div>`;
function kScan(side) {
  const fr = side === "front", pv = K.pv;
  const chip = pv && K.vbusy ? `<div class="kchk"><i class="kspin"></i><span>${t("k_chk2")}</span></div>` : pv && K.auto ? `<div class="kchk gd">${tickSvg}<span>${t("k_got")}</span></div>` : "";
  return `<div class="kcam kn">${kBg()}
    <div class="ktp"><button class="kbk" onclick="kBack()">${kBk}</button><b></b><em>${fr ? 1 : 2}/2</em></div>${kLogo(t(fr ? "k_front" : "k_back"))}
    <div class="kwr${pv ? " pv" : ""}"><div class="kwin">${pv ? `<img class="kpvi" src="${pv}" alt="">` : kVid()}</div>
      <div class="kfr${pv && !K.vbusy ? " dn" : ""}"><i class="c1"></i><i class="c2"></i><i class="c3"></i><i class="c4"></i>${pv ? "" : '<u class="kln"></u>'}</div></div>${chip}
    <div class="kbt">${pv ? "" : `<p id="kst">${t("k_auto")}</p>`}
      ${pv ? (K.vbusy ? "" : `${K.rep && K.rep.side === side ? kRepHtml() : ""}<div class="krow"><button class="kgh" onclick="kRetake()">${t("k_retake")}</button><button class="kgo" onclick="kUse()">${t("k_use")}</button></div>`)
        : `<div class="ksh"><button type="button" class="kgal" aria-label="Gallery" onclick="galAsk(()=>document.getElementById('kgf').click())">${kic("gal")}</button><input id="kgf" type="file" accept="image/*" hidden onchange="kFile(this)"><button class="kshut" aria-label="${t("k_snap")}" onclick="kSnap()"><i></i></button><span class="kgal sp"></span></div>`}
      <small class="knc" id="knc"></small></div></div>`;
}

/* ---- মুখ যাচাই (লাইভনেস): ডিম্বাকৃতি ঘরে শুধু মুখ, চারদিকে ৪ ভাগের রিং, যে দিকে ঘুরতে বলবে সে অংশ জ্বলবে ---- */
function kRingArc(id, a1, a2) {
  const p = (a) => { const r = a * Math.PI / 180; return (50 + 48 * Math.cos(r)).toFixed(2) + " " + (64 + 62 * Math.sin(r)).toFixed(2); };
  const d = `M${p(a1)} A48 62 0 0 1 ${p(a2)}`;
  return `<g id="kra${id}" class="kra"><path class="krt" d="${d}" pathLength="100"/><path class="krf" d="${d}" pathLength="100"/></g>`;
}
function kFaceUI() {
  const wr = document.getElementById("kwr"), c = KFc.ord[KFc.st];
  for (let i = 0; i < 3; i++) { const e = document.getElementById("kdt" + i); if (e) e.className = KFc.done[i] ? "dn2" : (i === KFc.st ? "on" : ""); }
  KFc.ord.forEach((s, i) => {
    if (s === "blink") return;
    const a = document.getElementById("kra" + KDM[s]); if (!a) return;
    a.setAttribute("class", "kra" + (KFc.done[i] ? " dn2" : (i === KFc.st ? " on" : "")));
    const f = a.querySelector(".krf"); if (f && !KFc.done[i] && i !== KFc.st) f.style.strokeDasharray = "0 100";
  });
  const n = KFc.done.filter(Boolean).length;
  if (wr) { wr.classList.toggle("blk", c === "blink"); if (n > (KFc.bn || 0)) { wr.classList.remove("burst"); void wr.offsetWidth; wr.classList.add("burst"); } }
  KFc.bn = n;
  const di = document.getElementById("kdi"), dr = document.getElementById("kdir");
  if (di && di.dataset.c !== (c || "")) {
    di.dataset.c = c || ""; di.className = "kdi " + (c || "");
    di.innerHTML = c ? `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="${KARR[c]}"/></svg>` : KFACE_SVG;
    if (dr) { dr.classList.remove("pop"); void dr.offsetWidth; dr.classList.add("pop"); }
  }
  const a = document.getElementById("kfarr");
  if (a) { a.className = "kfarr" + (c ? " " + c : " h"); a.innerHTML = c ? `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="${KARR[c]}"/></svg>` : ""; }
}
function kFaceProg(p) {
  const b = document.getElementById("kfp"), c = document.getElementById("kfpc"), x = Math.max(0, Math.min(100, Math.round(p * 100)));
  if (b) b.style.width = x + "%"; if (c) c.textContent = x >= 100 ? "✓" : t("k_left") + " " + (100 - x) + "%";
  const cur = KFc.ord[KFc.st];
  if (cur && cur !== "blink") { const a = document.getElementById("kra" + KDM[cur]), f = a && a.querySelector(".krf"); if (f) f.style.strokeDasharray = x + " 100"; }
}
function kFace() {
  const pv = K.pv; if (!pv) KFc.ord = kFaceOrd();
  const dots = [0, 1, 2, 3].map(i => `<i id="kdt${i}"></i>`).join("");
  return `<div class="kcam kn">${kBg()}
    <div class="ktp"><button class="kbk" onclick="kBack()">${kBk}</button><b>${t("k_face")}</b><em>3/4</em></div>${kLogo()}
    <div class="kwr ov" id="kwr"><div class="kwin">${pv ? `<img class="kpvi" src="${pv}" alt="">` : kVid().replace('id="kvid"', 'id="kvid" class="mir"')}</div>
      ${pv ? "" : `<svg class="krg" viewBox="0 0 100 128" aria-hidden="true">${kRingArc(0, -45, 45)}${kRingArc(1, 45, 135)}${kRingArc(2, 135, 225)}${kRingArc(3, 225, 315)}</svg>`}</div>
    <div class="kov"><u id="kou" class="${pv ? "dn" : ""}"></u><div class="kfok">${kTickI}</div></div><div class="kcnt" id="kcnt"></div>${pv ? "" : '<div class="kfarr h" id="kfarr"></div>'}
    <div class="kbt">${pv ? `<div class="krow"><button class="kgh" onclick="kRetake()">${t("k_retake")}</button><button class="kgo" onclick="kFaceUse()">${t("k_use")}</button></div>`
      : `<div class="kdir pop" id="kdir"><div class="kdi" id="kdi">${KFACE_SVG}</div><div class="kdt2"><b id="kst" class="kfm">${t("k_fload")}</b><span class="kdots">${dots}</span></div></div>
         <div class="kfbar"><i id="kfp"></i></div><div class="kfpc" id="kfpc"></div><div class="ksh"><span class="kgal sp"></span><button class="kshut" aria-label="${t("k_snap")}" onclick="kFaceCount()"><i></i></button><span class="kgal sp"></span></div>`}
      <small class="knc" id="knc"></small></div></div>`;
}

/* ---- v2.21 লেখা (সবার শেষে বসে, তাই আগের লেখা বদলে দেয়) ---- */
Object.assign(T.bn, {otpchk:"Verifying…", otpok:"Verified", otppaste:"Paste code", otpr:"Resend code", otpin:"Resend in ", otpsent:"New code sent", otpm:"Type the code", pinshow:"Show PIN", pinhide:"Hide PIN", pinhint:"এই PIN মনে রাখুন, প্রতিটি লেনদেনে লাগবে", pinmatch:"PIN মিলেছে", nmhint:"NID-তে যে নাম আছে সেটাই দিন"});
Object.assign(T.en, {otpchk:"Verifying…", otpok:"Verified", otppaste:"Paste code", otpr:"Resend code", otpin:"Resend in ", otpsent:"New code sent", otpm:"Type the code", pinshow:"Show PIN", pinhide:"Hide PIN", pinhint:"Remember this PIN, you need it for every transaction", pinmatch:"PINs match", nmhint:"Use the same name as on your NID"});
/* কিবোর্ডের উচ্চতা মনে রেখে PIN শিট সব সময় কিবোর্ডের জায়গার ওপরেই রাখা (কিবোর্ড আসার আগে নিচে নেমে থাকবে না) */
let KBMAX = window.innerHeight;
function kbSync() {
  const h = window.innerHeight; if (h > KBMAX) KBMAX = h;
  const d = KBMAX - h, up = d > 120; let sv = 0;
  if (up) { try { localStorage.setItem("fpkb", String(d)); } catch (e) {} }
  try { sv = Number(localStorage.getItem("fpkb")) || 0; } catch (e) {}
  document.documentElement.style.setProperty("--kb", (up ? 0 : (sv > 120 ? sv : Math.round(KBMAX * .4))) + "px");
}
window.addEventListener("resize", kbSync); kbSync();
render();
fpSplash();
/* নেটিভ স্প্ল্যাশ সঙ্গে সঙ্গে সরিয়ে আমাদের অ্যানিমেশন দেখানো (কালো/ফাঁকা স্ক্রিন নয়) */
try { const SS = cap().SplashScreen; if (SS) requestAnimationFrame(() => Promise.resolve(SS.hide({fadeOutDuration: 120})).catch(() => {})); } catch (e) {}
window.__fpready = true;
/* ব্যানার নিজে নিজে ঘোরে */
setInterval(() => {
  const b = document.querySelector(".ban");
  if (!b || b.children.length < 2 || S.sheet || S.upd || (b.dataset.t && Date.now() - b.dataset.t < 6000)) return;
  const st = b.children[1].offsetLeft - b.children[0].offsetLeft, i = (Math.round(b.scrollLeft / st) + 1) % b.children.length;
  b.scrollTo({left: i * st, behavior: "smooth"});
}, 5500);
/* অ্যান্ড্রয়েড ব্যাক বাটন, স্ট্যাটাস বার, ব্যাকগ্রাউন্ডে 1 ঘন্টার বেশি থাকলে আবার PIN চাওয়া */
try {
  const A = cap().App;
  let bgAt = 0;
  if (A) {
    A.addListener("backButton", () => {
      if (S.subs && S.subs.length) { subBack(); return; }
      if (K.open) { if (["front", "back", "info", "face", "match", "pin"].includes(K.step)) kBack(); else A.exitApp(); return; }
      if (S.sheet && !S.sheet.done && (S.sheet.step || 1) > 1 && !S.upd) { backStep(); return; }
      if (S.sheet || S.upd) { closeS(); return; }
      if (!S.auth && CONFIGURED && REG() && S.phone && !S.view) { A.exitApp(); return; }
      if (!S.auth && CONFIGURED && (S.view === "reg" || S.view === "ph" || S.phone)) { hap(); if (S.view === "reg") S.view = "ph"; else if (S.view === "ph") S.view = ""; else { S.phone = ""; S.pin = ""; S.view = "ph"; } render(); return; }
      if (S.auth && S.tab !== "home") { go("home"); return; }
      A.exitApp();
    });
    A.addListener("appStateChange", (st) => {
      if (!st.isActive) { bgAt = Date.now(); return; }
      if (S.auth && bgAt && Date.now() - bgAt > 3600000) lock(true); else if (S.auth) refresh();
      bgAt = 0; setTimeout(checkUpdate, 900);
    });
  }
  const SB = cap().StatusBar;
  if (SB) { SB.setStyle({style: "DARK"}); SB.setBackgroundColor({color: "#e2136e"}); }
} catch (e) {}
/* ---------- নেটিভ অ্যাপের মতো আচরণ: জুম, লং প্রেস মেনু, ছবি টানা, টেক্সট সিলেক্ট বন্ধ ---------- */
["gesturestart", "gesturechange", "gestureend"].forEach(ev => document.addEventListener(ev, e => e.preventDefault()));
document.addEventListener("contextmenu", e => { if (!(e.target && e.target.closest && e.target.closest("input,textarea"))) e.preventDefault(); });
document.addEventListener("dragstart", e => e.preventDefault());
document.addEventListener("touchmove", e => { if (e.touches && e.touches.length > 1) e.preventDefault(); }, {passive: false});

/* ---------- টেনে রিফ্রেশ: নিচে টানলে FuNPaY লোগো স্ক্রিনের ঠিক মাঝখানে এসে ঘোরে ---------- */
(function () {
  const ap = document.getElementById("app"), MAXP = 120, TH = 70;
  let y0 = 0, x0 = 0, pull = 0, on = false, busy = false, el = null, vl = null;
  const node = () => {
    if (!el) { el = document.createElement("div"); el.id = "ptr"; el.innerHTML = '<i class="lgl"></i>'; document.body.appendChild(el); }
    return el;
  };
  const place = (d, anim) => {
    const e = node(), k = Math.max(0, Math.min(1, d / TH));
    e.style.transition = anim ? "transform .34s cubic-bezier(.2,.8,.2,1),opacity .2s" : "none";
    e.style.transform = "translate3d(-50%," + (d <= 0 ? -60 : Math.round(-60 + 60 * k + Math.max(0, d - TH) * .4)) + "px,0) scale(" + (d <= 0 ? .6 : (.6 + .4 * k).toFixed(3)) + ")";
    e.style.opacity = d <= 0 ? 0 : Math.min(1, d / 24);
    if (!busy) e.firstChild.style.transform = "rotate(" + Math.round(d * 6) + "deg)";
  };
  ap.addEventListener("touchstart", (e) => {
    on = false; pull = 0;
    if (busy || !S.auth || S.sheet || S.upd || ap.scrollTop > 0 || e.touches.length !== 1) return;
    y0 = e.touches[0].clientY; x0 = e.touches[0].clientX; on = true;
  }, {passive: true});
  ap.addEventListener("touchmove", (e) => {
    if (!on) return;
    const dy = e.touches[0].clientY - y0, dx = e.touches[0].clientX - x0;
    if (ap.scrollTop > 0) { on = false; pull = 0; place(0, true); return; }
    if (dy <= 0) { if (pull > 0) { pull = 0; place(0, false); } return; }
    if (pull === 0 && Math.abs(dx) > dy) { on = false; return; }
    pull = Math.min(MAXP, dy * .5);
    if (e.cancelable) e.preventDefault();
    place(pull, false);
  }, {passive: false});
  const end = async () => {
    if (!on) return; on = false;
    if (pull < TH) { pull = 0; place(0, true); return; }
    busy = true; pull = 0; hap("MEDIUM");
    node().classList.add("spin"); place(TH, true);
    const t0 = Date.now();
    try { await loadAll(false); } catch (e) { toast(t("neterr")); }
    const w = 900 - (Date.now() - t0); if (w > 0) await new Promise(r => setTimeout(r, w));
    if (S.auth && !S.sheet) render();
    busy = false; node().classList.remove("spin"); place(0, true);
  };
  ap.addEventListener("touchend", end, {passive: true});
  ap.addEventListener("touchcancel", end, {passive: true});
})();
window.addEventListener("online", () => { if (S.auth) refresh(); setTimeout(checkUpdate, 600); });
setTimeout(checkUpdate, 2500);


/* ===== v2.22 নতুন লেখা ===== */
Object.assign(T.bn, {k_sb_h: "নাম বা NID নম্বর নিশ্চিত হওয়া যায়নি", k_sb_m: "ভুল তথ্য নেওয়া হবে না। আলো ঠিক রেখে কার্ডের সামনের দিক আবার স্ক্যান করুন, লেখা যেন পরিষ্কার থাকে।", k_lockd: "নিশ্চিতভাবে পড়া হয়েছে"});
Object.assign(T.en, {k_sb_h: "Could not confirm your name or NID number", k_sb_m: "No guessed details will be used. Scan the front of the card again in good light, with the text sharp.", k_lockd: "Read and confirmed"});


/* ======================================================================
   v2.22-D : নোটিফিকেশন (বিকাশের ধাঁচে)   v2.22-E : ছবির ফলাফল ও আপলোড অবস্থা
   ====================================================================== */
Object.assign(T.bn, {nf_fee: "ফি", nf_bal: "ব্যালেন্স", nf_welcome: "স্বাগতম! আপনার অ্যাকাউন্ট খোলা হয়েছে।", k_nf_sub: "আপনার NID ও মুখের ছবি জমা হয়েছে। যাচাই শেষ হলে জানানো হবে।",
  k_rp_cam: "ছবি তোলা হয়েছে", k_rp_gal: "ছবি আপলোড হয়েছে", k_rp_ok: "সব ঠিক আছে", k_rp_warn: "কিছু ঠিক নেই, আবার তুলতে পারেন", k_rp_card: "কার্ড পাওয়া গেছে", k_rp_nocard: "কার্ড স্পষ্ট নয়", k_rp_sf: "সামনের দিক ঠিক", k_rp_sb: "পেছনের দিক ঠিক", k_rp_sx: "দিক নিশ্চিত নয়", k_rp_tx: "লেখা পড়া যাচ্ছে", k_rp_notx: "লেখা কম পড়া গেছে", k_rp_sh: "ছবি পরিষ্কার", k_rp_sm: "ছবি মোটামুটি", k_rp_sl: "ছবি ঝাপসা", k_rp_li: "আলো ঠিক", k_rp_ld: "আলো কম", k_rp_lb: "আলো বেশি", k_rp_full: "পুরো ছবি নেওয়া হয়েছে", k_rp_crop: "শুধু কার্ডের অংশ", k_rp_go: "ঠিক থাকলে \"ঠিক আছে\" চাপুন",
  k_us0: "NID সামনের ছবি", k_us1: "NID পেছনের ছবি", k_us2: "মুখের ছবি", k_us3: "তথ্য জমা", k_sm_h: "আপলোড হয়েছে", k_sm_info: "নাম ও NID নম্বর জমা হয়েছে", k_sm_face: "মুখ মেলানো", k_sm_up: "আপলোড হয়েছে"});
Object.assign(T.en, {nf_fee: "Fee", nf_bal: "Balance", nf_welcome: "Welcome! Your account has been opened.", k_nf_sub: "Your NID and face photos were submitted. You will be told when the review is done.",
  k_rp_cam: "Photo taken", k_rp_gal: "Photo uploaded", k_rp_ok: "Everything looks fine", k_rp_warn: "Something is off, you can retake", k_rp_card: "Card found", k_rp_nocard: "Card not clear", k_rp_sf: "Front side correct", k_rp_sb: "Back side correct", k_rp_sx: "Side not confirmed", k_rp_tx: "Text is readable", k_rp_notx: "Little text could be read", k_rp_sh: "Sharp photo", k_rp_sm: "Fair sharpness", k_rp_sl: "Blurry photo", k_rp_li: "Good light", k_rp_ld: "Too dark", k_rp_lb: "Too bright", k_rp_full: "Full photo kept", k_rp_crop: "Card area only", k_rp_go: "If it looks right, tap \"Looks good\"",
  k_us0: "NID front photo", k_us1: "NID back photo", k_us2: "Face photo", k_us3: "Details submitted", k_sm_h: "Uploaded", k_sm_info: "Name and NID number submitted", k_sm_face: "Face match", k_sm_up: "Uploaded"});

/* ---- নোটিফিকেশন ---- */
let NFS = false, NFN = 0;
function nfSetup() {
  const LN = cap().LocalNotifications; if (!LN || NFS) return; NFS = true;
  try {
    if (LN.createChannel) {
      Promise.resolve(LN.createChannel({id: "funpay_tx", name: "Transactions", description: "Send Money, Cash Out, Payment, Add Money and bills", importance: 5, visibility: 1, vibration: true, lights: true, lightColor: "#E2136E"})).catch(() => {});
      Promise.resolve(LN.createChannel({id: "funpay_info", name: "Account and KYC", description: "KYC, coupons and notices", importance: 4, visibility: 1, vibration: true, lights: true, lightColor: "#E2136E"})).catch(() => {});
    }
    if (LN.addListener) LN.addListener("localNotificationActionPerformed", (ev) => {
      try { const x = (ev && ev.notification && ev.notification.extra) || {}; if (!S.auth) return; if (x.trx) { openTrx(x.trx); } else { S.seg = "n"; go("inbox"); } } catch (e) {}
    });
  } catch (e) {}
}
function fmtT(iso) {
  const n = iso ? new Date(iso) : new Date(), p = (x) => String(x).padStart(2, "0"), h = n.getHours();
  return `${h % 12 || 12}:${p(n.getMinutes())}${h >= 12 ? "pm" : "am"} ${p(n.getDate())}/${p(n.getMonth() + 1)}/${n.getFullYear()}`;
}
/* বিকাশের মতো: কী হলো + ফি + ব্যালেন্স + TrxID + সময়/তারিখ */
function nfFull(x, bal) {
  const v = tv(x), out = x.from_id === S.uid, fee = Number(x.fee || 0);
  const parts = [ntxt(x).replace(/[.।]+$/, "")];
  if (out && fee > 0) parts.push(t("nf_fee") + " " + money2(fee));
  if (bal !== undefined && bal !== null && !isNaN(Number(bal))) parts.push(t("nf_bal") + " " + money2(bal));
  parts.push("TrxID " + x.trx + ", " + fmtT(x.created_at));
  return parts.join("। ").replace(/।/g, t("nf_fee") === "Fee" ? "." : "।");
}
function fpNotify(o) {
  try {
    const LN = cap().LocalNotifications; if (!LN) return; nfSetup();
    const id = (Number(String(Date.now()).slice(-8)) * 10 + (NFN++ % 10)) % 2000000000 || 1;
    Promise.resolve(LN.schedule({notifications: [{id, title: o.title, body: o.body, largeBody: o.body, summaryText: "FuNPaY", channelId: o.ch === "info" ? "funpay_info" : "funpay_tx", smallIcon: "ic_stat_funpay", iconColor: "#e2136e", autoCancel: true, extra: {trx: o.trx || ""}}]})).catch(() => {});
  } catch (e) {}
}
function nfOwn(sh) {
  try {
    const x = {type: sh.id, from_id: S.uid, to_name: sh.rn || "", to_phone: sh.v || "", ref: sh.v || "", ch: sh.ch, amount: sh.amt, fee: sh.fee, disc: sh.disc || 0, comm: 0, trx: sh.trx, created_at: sh.at};
    fpNotify({title: t(tv(x).key), body: nfFull(x, sh.nb), trx: sh.trx, ch: "tx"});
  } catch (e) {}
}
function nfWelcome() {
  try { fpNotify({title: "FuNPaY", body: t("nf_welcome") + (S.bal > 0 ? " " + t("nf_bal") + " " + money2(S.bal) : ""), ch: "info"}); } catch (e) {}
}

/* ---- ছবির ফলাফল: তোলা/আপলোডের পর কী কী হয়েছে ---- */
function kMakeRep(side, src, geo, txt, img) {
  const r = typeof txt === "string" ? kClass2(txt) : null, it = [];
  const like = !geo || geo.cardLike, sm = geo ? geo.sharp : 99, mean = geo ? geo.mean : 128;
  it.push({ok: like, k: like ? "k_rp_card" : "k_rp_nocard"});
  const sideOk = r && r.c === side;
  it.push({ok: !!sideOk || !r, k: sideOk ? (side === "front" ? "k_rp_sf" : "k_rp_sb") : (r ? "k_rp_sx" : (side === "front" ? "k_rp_sf" : "k_rp_sb"))});
  const txOk = r ? r.any >= 2 : true;
  it.push({ok: txOk, k: txOk ? "k_rp_tx" : "k_rp_notx"});
  it.push({ok: sm > 40, k: sm > 80 ? "k_rp_sh" : sm > 40 ? "k_rp_sm" : "k_rp_sl", mid: sm > 40 && sm <= 80});
  const lt = mean < 55 ? "k_rp_ld" : mean > 232 ? "k_rp_lb" : "k_rp_li";
  it.push({ok: lt === "k_rp_li", k: lt});
  it.push({ok: true, k: src === "gal" ? "k_rp_full" : "k_rp_crop"});
  const warn = it.some(x => !x.ok), kb = img ? Math.max(1, Math.round(String(img).length * .75 / 1024)) : 0, wh = K.imgWH && src === "gal" ? K.imgWH[0] + "×" + K.imgWH[1] + " · " : "";
  return {side, src, it, warn, info: wh + (kb ? kb + " KB" : "")};
}
function kRepHtml() {
  const R = K.rep; if (!R) return "";
  const items = R.it.map((x, i) => `<div class="ri ${x.ok ? (x.mid ? "mid" : "gd") : "bd"}" style="--n:${i}"><i>${x.ok ? kTickI : "!"}</i><span>${t(x.k)}</span></div>`).join("");
  return `<div class="krep${R.warn ? " w" : ""}"><div class="rh"><i class="rc">${R.warn ? "!" : kTickI}</i><div><b>${t(R.src === "gal" ? "k_rp_gal" : "k_rp_cam")}</b><small>${t(R.warn ? "k_rp_warn" : "k_rp_ok")}${R.info ? " · " + esc(R.info) : ""}</small></div></div><div class="rg">${items}</div></div>`;
}
/* ---- জমার সময় ধাপে ধাপে আপলোড অবস্থা ---- */
function kUpShow() {
  const e = document.getElementById("kupl"); if (!e) return;
  e.innerHTML = [0, 1, 2, 3].map(i => `<div class="u" id="kus${i}"><i></i><span>${t("k_us" + i)}</span></div>`).join(""); e.classList.add("on");
}
function kUpSet(n) {
  for (let i = 0; i < 4; i++) {
    const e = document.getElementById("kus" + i); if (!e) continue;
    e.className = "u" + (i < n ? " dn" : i === n ? " ac" : "");
    const ic2 = e.querySelector("i"); if (ic2) ic2.innerHTML = i < n ? kTickI : "";
  }
}
function kSumHtml() {
  const m = K.sum; if (!m) return "";
  const th = (src) => `<div class="kth"><img src="${src}" alt=""></div>`;
  const row = (lb, v) => `<div class="r"><i>${kTickI}</i><b>${t(lb)}</b>${v ? `<small>${esc(v)}</small>` : ""}</div>`;
  return `<div class="ksm"><div class="kths">${m.th.map(th).join("")}</div><div class="rows">${row("k_us0", t("k_sm_up"))}${row("k_us1", t("k_sm_up"))}${row("k_us2", t("k_sm_up"))}${row("k_sm_info", m.nid)}${m.pct !== null && m.pct !== undefined ? row("k_sm_face", m.pct + "%") : ""}</div></div>`;
}

/* =====================================================================
   v2.23 — গ্রুপ ১ (KYC): ৫ ধাপ লাইভনেস, স্মুথ রিং, তথ্য পাতা (বাবা-মা, DOB চাকা), ভেরিফিকেশন পাতা
   (এই ব্লক সবার শেষে বসে, তাই একই নামের আগের ফাংশন বদলে দেয়)
   ===================================================================== */
Object.assign(T.bn, {k_fa:"পিতার নাম", k_mo:"মাতার নাম", k_nm:"নাম (ইংরেজিতে)", k_dobsel:"জন্মতারিখ বাছুন", k_edit:"এডিট", k_done2:"নিশ্চিত করুন", k_cancel:"বাতিল",
  k_ocrfail:"লেখা পড়া যায়নি, নিজে লিখুন।", k_c1:"NID সামনে", k_c2:"NID পেছনে", k_c3:"মুখ", k_allup:"সব ছবি আপলোড হয়েছে", k_infoup:"তথ্য জমা হয়েছে", k_fmatch:"মুখ মিল", k_nmen:"ইংরেজি অক্ষরে নাম লিখুন"});
Object.assign(T.en, {k_fa:"Father's name", k_mo:"Mother's name", k_nm:"Name (in English)", k_dobsel:"Select date of birth", k_edit:"Edit", k_done2:"Confirm", k_cancel:"Cancel",
  k_ocrfail:"Could not read the text, please type it.", k_c1:"NID front", k_c2:"NID back", k_c3:"Face", k_allup:"All photos uploaded", k_infoup:"Details submitted", k_fmatch:"Face match", k_nmen:"Type your name in English letters"});

/* ----- লাইভনেস: ৫ ধাপ এলোমেলো ক্রমে (ডান, বাম, উপর, নিচ, চোখের পলক) ----- */
function kFaceOrd() {
  const a = ["right", "left", "up", "down", "blink"];
  for (let i = a.length - 1; i > 0; i--) { const j = kRnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
/* ----- রিং/বারের অগ্রগতি এখন প্রতি ফ্রেমে নরম করে এগোয় (লাফায় না) ----- */
function kFaceProg(p) {
  KFc.pt = Math.max(0, Math.min(1, p || 0));
  if (KFc.pt === 0) KFc.pd = 0;
  if (!KFc.raf) KFc.raf = requestAnimationFrame(kFaceAnim);
}
function kFaceAnim() {
  KFc.raf = 0;
  const cur = KFc.pd || 0, d = KFc.pt - cur;
  KFc.pd = Math.abs(d) < .006 ? KFc.pt : cur + d * .2;
  const x = Math.round(KFc.pd * 100), b = document.getElementById("kfp"), c = document.getElementById("kfpc"), s = KFc.ord[KFc.st];
  if (b) b.style.width = KFc.pd * 100 + "%";
  if (c) c.textContent = KFc.pt >= 1 && KFc.pd >= .99 ? "✓" : t("k_left") + " " + (100 - x) + "%";
  if (s && s !== "blink") { const a = document.getElementById("kra" + KDM[s]), f = a && a.querySelector(".krf"); if (f) f.style.strokeDasharray = KFc.pd * 100 + " 100"; }
  if (KFc.pd !== KFc.pt) KFc.raf = requestAnimationFrame(kFaceAnim);
}
function kFace() {
  const pv = K.pv; if (!pv) KFc.ord = kFaceOrd();
  const dots = [0, 1, 2].map(i => `<i id="kdt${i}"></i>`).join("");
  return `<div class="kcam kn">${kBg()}
    <div class="ktp"><button class="kbk" onclick="kBack()">${kBk}</button><b>${t("k_face")}</b><em>3/4</em></div>${kLogo()}
    <div class="kwr ov" id="kwr"><div class="kwin">${pv ? `<img class="kpvi" src="${pv}" alt="">` : kVid().replace('id="kvid"', 'id="kvid" class="mir"')}</div>
      ${pv ? "" : `<svg class="krg" viewBox="0 0 100 128" aria-hidden="true">${kRingArc(0, -45, 45)}${kRingArc(1, 45, 135)}${kRingArc(2, 135, 225)}${kRingArc(3, 225, 315)}</svg>`}</div>
    <div class="kov"><u id="kou" class="${pv ? "dn" : ""}"></u><div class="kfok">${kTickI}</div></div><div class="kcnt" id="kcnt"></div>${pv ? "" : '<div class="kfarr h" id="kfarr"></div>'}
    <div class="kbt">${pv ? `<div class="krow"><button class="kgh" onclick="kRetake()">${t("k_retake")}</button><button class="kgo" onclick="kFaceUse()">${t("k_use")}</button></div>`
      : `<div class="kdir pop" id="kdir"><div class="kdi" id="kdi">${KFACE_SVG}</div><div class="kdt2"><b id="kst" class="kfm">${t("k_fload")}</b><span class="kdots d5">${dots}</span></div></div>
         <div class="kfbar"><i id="kfp"></i></div><div class="kfpc" id="kfpc"></div><div class="ksh"><span class="kgal sp"></span><button class="kshut" aria-label="${t("k_snap")}" onclick="kFaceCount()"><i></i></button><span class="kgal sp"></span></div>`}
      <small class="knc" id="knc"></small></div></div>`;
}

/* ----- তথ্য পাতা ----- */
const KMON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function kDobParse(s) {
  s = String(s || ""); let m = s.match(/(\d{1,2})\s+([A-Za-z]{3})[a-z]*\s+(\d{4})/);
  if (m) { const mo = KMON.findIndex(x => x.toLowerCase() === m[2].toLowerCase()); if (mo >= 0) return {d: +m[1], m: mo, y: +m[3]}; }
  m = s.match(/(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})/); if (m) return {d: +m[1], m: Math.max(0, Math.min(11, +m[2] - 1)), y: +m[3]};
  return null;
}
function kDobNorm(v) { const o = kDobParse(v); return o ? String(o.d).padStart(2, "0") + "/" + String(o.m + 1).padStart(2, "0") + "/" + o.y : (v || ""); }
function kInfo() {
  if (K.reading) return kInfoOld();
  if (K.d.dob) K.d.dob = kDobNorm(K.d.dob);
  const pg = K.ipg || 0, keys = KPG[pg], n = kReqOkN(), tot = kReqAll().length;
  const rows = KF.filter(([k]) => keys.includes(k)).map(([k, lb, ik], i) => {
    const v = K.d[k] || "", st = kRowSt(k, v), lock = K.lk && K.lk[k];
    let body;
    if (k === "dob") body = `<button type="button" class="kdb" onclick="kDobOpen()"><span id="kv_dob">${v ? esc(v) : t("k_miss")}</span><em><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="M13.5 6.5l4 4"/></svg>${t("k_edit")}</em></button>`;
    else if (k === "addr") body = `<textarea id="kv_${k}" rows="2" placeholder="${t("k_miss")}" oninput="kSet('${k}',this)">${esc(v)}</textarea>`;
    else if (KPKEYS.includes(k)) body = `<button type="button" class="kdb kpick" onclick="kPick('${k}')"><span id="kv_${k}"${v ? "" : ' class="kph"'}>${v ? esc(kLbl(k, v)) : t("k_gpick")}</span><em>${KCHEV}</em></button>`;
    else body = `<input id="kv_${k}" value="${esc(v)}" placeholder="${k === "name" ? t("k_nmen") : k === "postcode" ? t("k_gpcph") : k === "postoffice" ? t("k_gpoph") : t("k_miss")}" ${k === "nid" ? 'inputmode="numeric" maxlength="17"' : k === "postcode" ? 'inputmode="numeric" maxlength="4"' : 'maxlength="80"'}${k === "name" ? ' autocapitalize="words" autocorrect="off" spellcheck="false"' : ""}${lock ? " readonly" : ""} oninput="kSet('${k}',this)">`;
    const hd = KSEC[k] ? `<p class="kshd">${t(KSEC[k])}</p>` : "";
    const nb = k === "name" && K.d.name_bn ? `<div class="kf kfl lk kbn"><label>${S.lang === "bn" ? "নাম (বাংলা)" : "Name (Bangla)"}</label><div class="kfb"><span class="kro">${esc(K.d.name_bn)}</span></div><i class="kt2 gd">${kTickI}</i></div>` : "";
    return hd + nb + `<div class="kf kfl ${st}${lock ? " lk" : ""}"><label>${t(lb)}${KOPTF[k] ? ` <u class="kopt">${t("k_opt")}</u>` : ""}</label><div class="kfb">${body}${lock ? `<small class="klk2">${t("k_lockd")}</small>` : ""}</div><i class="kt2 ${st}">${kStI(st)}</i></div>`;
  }).join("");
  return `<div class="kw">${kTop(t("k_info"), "kBack()", 1)}<div class="kbody kflat"><p class="kbh">${t("k_vh")}</p><p class="kbs">${t("k_vs")}</p><div class="ksum"><div><b id="ksn">${n}/${tot}</b><span>${t("k_okc")}</span></div><div class="kbar"><i id="ksb2" style="width:${n * 100 / tot}%"></i></div></div>
    ${K.fail && pg === 0 ? `<p class="ksubt">${t("k_ocrfail")}</p>` : ""}${rows}<div class="le kle">${esc(K.err)}</div></div>
    <div class="kbtm"><button class="kbtn" onclick="kInfoNext()">${t("k_next")}</button></div></div>`;
}
function kSet(k, el) {
  let v = el.value;
  if (k === "nid") { v = digs(v, 17); }
  else if (k === "name") { v = v.replace(/[^A-Za-z .'\-]/g, "").replace(/\s{2,}/g, " "); }
  else if (k === "postcode") { v = digs(v, 4); }
  if (el.value !== v) el.value = v;
  K.d[k] = v;
  const row = el.closest(".kf"), tk = row.querySelector(".kt2"), st = kRowSt(k, v);
  tk.className = "kt2 " + st; tk.style.animation = "none"; tk.style.transform = "scale(1)"; tk.innerHTML = kStI(st);
  row.classList.remove("gd", "bd", "op"); row.classList.add(st);
  kInfoCount();
}
function kInfoCount() {
  const n = kReqOkN(), tot = kReqAll().length, a = document.getElementById("ksn"), b = document.getElementById("ksb2"); if (a) a.textContent = n + "/" + tot; if (b) b.style.width = n * 100 / tot + "%";
}
function kInfoNext() {
  const d = K.d, le = document.querySelector(".kle"), pg = K.ipg || 0;
  const need = KPG[pg].filter(k => !KOPTF[k]);
  const bad = need.some(k => k !== "nid" && !KV[k](d[k])) ? t("k_bad") : (need.includes("nid") && !KV.nid(d.nid)) ? t("k_badnid") : "";
  if (bad) { K.err = bad; if (le) le.textContent = bad; hap("HEAVY"); return; }
  hap(); K.err = "";
  if (pg === 0) { K.ipg = 1; kycRender(); return; }
  K.ipg = 0; K.pv = ""; K.step = "face"; kycRender();
}

/* ----- জন্মতারিখ: চাকার মতো ঘুরিয়ে বাছা (দিন / মাস / বছর) ----- */
const KIH = 40;
function kDobOpen() {
  if (document.getElementById("kdw")) return; hap();
  const cur = kDobParse(K.d.dob) || {d: 1, m: 0, y: 2005}, yMax = new Date().getFullYear() - 10, yMin = 1930;
  const days = Array.from({length: 31}, (_, i) => String(i + 1).padStart(2, "0")), mons = KMON, yrs = []; for (let y = yMax; y >= yMin; y--) yrs.push(String(y));
  const col = (id, arr, sel) => `<div class="kwc"><div class="kwl" id="kwl_${id}" data-n="${arr.length}">${arr.map((x, i) => `<div class="kwi${i === sel ? " on" : ""}">${x}</div>`).join("")}</div></div>`;
  const yi = Math.max(0, yrs.indexOf(String(Math.min(yMax, Math.max(yMin, cur.y)))));
  const o = document.createElement("div"); o.id = "kdw"; o.className = "kdw";
  o.innerHTML = `<div class="kdb2" onclick="kDobClose()"></div><div class="kds"><div class="kdh"><b>${t("k_dobsel")}</b></div>
    <div class="kwheel"><div class="kwband"></div>${col("d", days, Math.min(30, cur.d - 1))}${col("m", mons, cur.m)}${col("y", yrs, yi)}</div>
    <div class="kdbt"><button class="kgh2" onclick="kDobClose()">${t("k_cancel")}</button><button class="kbtn" onclick="kDobOk()">${t("k_done2")}</button></div></div>`;
  kEl().appendChild(o);
  requestAnimationFrame(() => { ["d", "m", "y"].forEach(id => { const l = document.getElementById("kwl_" + id); if (!l) return; const i = [...l.children].findIndex(c => c.classList.contains("on")); l.scrollTop = Math.max(0, i) * KIH; l.addEventListener("scroll", () => kWheelSc(l), {passive: true}); }); o.classList.add("in"); });
}
function kWheelIdx(l) { return Math.max(0, Math.min(+l.dataset.n - 1, Math.round(l.scrollTop / KIH))); }
function kWheelSc(l) {
  if (l._r) return; l._r = requestAnimationFrame(() => {
    l._r = 0; const i = kWheelIdx(l);
    if (l._i !== i) { if (l._i !== undefined) hap("LIGHT"); l._i = i; [...l.children].forEach((c, j) => { c.classList.toggle("on", j === i); c.style.opacity = j === i ? 1 : Math.abs(j - i) === 1 ? .55 : .25; }); }
  });
}
function kDobClose() { const o = document.getElementById("kdw"); if (!o) return; o.classList.remove("in"); setTimeout(() => o.remove(), 260); }
function kDobOk() {
  const g = (id) => kWheelIdx(document.getElementById("kwl_" + id)), y = +document.getElementById("kwl_y").children[g("y")].textContent, mo = g("m");
  const dim = new Date(y, mo + 1, 0).getDate(), d = Math.min(g("d") + 1, dim);
  K.d.dob = String(d).padStart(2, "0") + "/" + String(mo + 1).padStart(2, "0") + "/" + y;
  hap("MEDIUM"); kDobClose();
  const s = document.getElementById("kv_dob"); if (s) s.textContent = K.d.dob;
  const row = s && s.closest(".kf"); if (row) { row.classList.add("gd"); row.classList.remove("bd", "op"); const tk = row.querySelector(".kt2"); if (tk) { tk.className = "kt2 gd"; tk.style.animation = "none"; tk.style.transform = "scale(1)"; tk.innerHTML = kTickI; } }
  kInfoCount();
}


/* ----- v2.52: সুন্দর পপ-আপ বাছাই (বিভাগ → জেলা → উপজেলা, ব্লাড গ্রুপ, পেশা ইত্যাদি) ----- */
function kLbl(k, v) {
  if (S.lang !== "bn") return v;
  if (k === "division") return KDIVBN[v] || v;
  if (k === "district") return KDISTBN[v] || v;
  const o = (KOPT[k] || []).find(x => x && x.v === v); return o ? o.bn : v;
}
function kPkItems(key) {
  const d = K.d, bn = S.lang === "bn";
  if (key === "division") return Object.keys(KGEO).map(v => ({v, l: bn ? KDIVBN[v] : v, s: bn ? v : KDIVBN[v]}));
  if (key === "district") return Object.keys(KGEO[d.division] || {}).map(v => ({v, l: bn ? KDISTBN[v] : v, s: bn ? v : KDISTBN[v]}));
  if (key === "upazila") return ((KGEO[d.division] || {})[d.district] || []).map(v => ({v, l: v, s: ""}));
  return (KOPT[key] || []).map(o => typeof o === "string" ? {v: o, l: o, s: ""} : {v: o.v, l: bn ? o.bn : o.v, s: bn ? o.v : o.bn});
}
function kPick(key) {
  if (document.getElementById("kpk")) return;
  const d = K.d;
  if (key === "district" && !KGEO[d.division]) key = "division";
  else if (key === "upazila" && !KV.district(d.district)) key = KGEO[d.division] ? "district" : "division";
  hap();
  const items = kPkItems(key), big = items.length > 8 || key === "upazila";
  const o = document.createElement("div"); o.id = "kpk"; o.className = "kpkw"; o.dataset.k = key;
  o.innerHTML = `<div class="kpkb" onclick="kPkClose()"></div><div class="kpks"><div class="kpkh"><b>${t(KPT[key])}</b><button type="button" class="kpkx" onclick="kPkClose()" aria-label="${t("k_cancel")}"><svg viewBox="0 0 24 24"><path d="M7 7l10 10M17 7L7 17"/></svg></button></div>
    ${big ? `<div class="kpkq"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input id="kpkq" type="text" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="${t("k_gsrch")}" oninput="kPkFilter()"></div>` : ""}
    <div class="kpkl" id="kpkl"></div></div>`;
  o._items = items; kEl().appendChild(o); kPkFilter();
  requestAnimationFrame(() => o.classList.add("in"));
}
function kPkFilter() {
  const o = document.getElementById("kpk"); if (!o) return;
  const key = o.dataset.k, qi = document.getElementById("kpkq"), raw = qi ? qi.value.replace(/[^A-Za-z .'\-()ঀ-৿]/g, "").trim().slice(0, 40) : "", q = raw.toLowerCase(), cur = K.d[key];
  const list = o._items.filter(x => !q || (x.v + " " + x.l + " " + x.s).toLowerCase().includes(q));
  let h = list.map(x => `<button type="button" class="kpki${x.v === cur ? " on" : ""}" data-v="${esc(x.v)}" onclick="kPkSel(this)"><span><b>${esc(x.l)}</b>${x.s ? `<small>${esc(x.s)}</small>` : ""}</span><i class="kpkc">${kTickI}</i></button>`).join("");
  if (key === "upazila" && raw.length >= 2 && !o._items.some(x => x.v.toLowerCase() === q)) h += `<button type="button" class="kpki kpku" data-v="${esc(raw)}" onclick="kPkSel(this)"><span><b>${t("k_guse")}: ${esc(raw)}</b></span></button>`;
  document.getElementById("kpkl").innerHTML = h || `<p class="kpke">${t("k_gnone")}</p>`;
}
function kPkSel(el) {
  const o = document.getElementById("kpk"); if (!o) return;
  const key = o.dataset.k, v = el.dataset.v, d = K.d; hap("MEDIUM");
  if (key === "division") { if (d.division !== v) { d.division = v; if (!((KGEO[v] || {})[d.district])) { d.district = ""; d.upazila = ""; } } }
  else if (key === "district") { if (d.district !== v) { d.district = v; d.upazila = ""; } }
  else d[key] = v;
  kPkClose(); kPkRows();
  const nx = key === "division" && !KV.district(d.district) ? "district" : "";
  if (nx) setTimeout(() => { if (K.step === "info") kPick(nx); }, 320);
}
function kPkClose() { const o = document.getElementById("kpk"); if (!o) return; o.classList.remove("in"); setTimeout(() => { if (o.parentNode) o.remove(); }, 260); }
function kPkRows() {
  KPKEYS.forEach(k => {
    const s = document.getElementById("kv_" + k); if (!s) return;
    const v = K.d[k], st = kRowSt(k, v);
    s.textContent = v ? kLbl(k, v) : t("k_gpick"); s.classList.toggle("kph", !v);
    const row = s.closest(".kf"); if (!row) return;
    row.classList.remove("gd", "bd", "op"); row.classList.add(st);
    const tk = row.querySelector(".kt2"); if (tk) { tk.className = "kt2 " + st; tk.style.animation = "none"; tk.style.transform = "scale(1)"; tk.innerHTML = kStI(st); }
  });
  kInfoCount();
}

/* ----- জমার পরের পাতা: ৩টি ছবির নিচে ছোট করে কী কী জমা হয়েছে ----- */
function kSumHtml() {
  const m = K.sum; if (!m) return "";
  const cap = ["k_c1", "k_c2", "k_c3"];
  const th = (src, i) => `<div class="kx3"><div class="kxi"><img src="${src}" alt=""><i>${kTickI}</i></div><span>${t(cap[i])}</span></div>`;
  const chip = (tx) => `<span class="kxc"><i>${kTickI}</i>${tx}</span>`;
  return `<div class="kxs"><div class="kx3s">${m.th.map(th).join("")}</div><div class="kxcs">${chip(t("k_allup"))}${chip(t("k_infoup") + (m.nid ? " · " + esc(m.nid) : ""))}${m.pct !== null && m.pct !== undefined ? chip(t("k_fmatch") + " " + m.pct + "%") : ""}</div></div>`;
}

/* =====================================================================
   v2.23 — গ্রুপ ২: স্ক্যানারে ক্যামেরা শুধু ফ্রেমের ভেতরে, PIN কনফার্ম বার (বিকাশ স্টাইল)
   ===================================================================== */
Object.assign(T.bn, {pinok: "পিন কনফার্ম করুন"});
Object.assign(T.en, {pinok: "Confirm PIN"});
function scanHtml(s) {
  const nat = !!(cap().BarcodeScanner && cap().BarcodeScanner.startScan);
  return `<div class="sh scanx${s.fresh ? "" : " re"}"><div class="box">
    <div class="sct"><button class="pb" aria-label="${t("back")}" onclick="closeS()">${ic("back")}</button><b>${t("scanqr")}</b><button class="pb tq${s.torch ? " on" : ""}" aria-label="Flash" onclick="toggleTorch()">${ic("bolt")}</button></div>
    <div class="scm"><div class="scf" id="scf"><i class="k1"></i><i class="k2"></i><i class="k3"></i><i class="k4"></i><span class="sl"></span><div class="sck">${tickSvg}</div></div>
      <p class="scp">${t(s.denied ? "camd" : nat ? "sc1" : "noscan")}</p>
      ${s.denied ? `<button class="pill" onclick="askCam()">${t("camb")}</button><button class="pill ghost" onclick="scanQRGoogle()">${t("gscan")}</button>` : ""}</div>
    <div class="scbg"><i class="b1"></i><i class="b2"></i>${[1, 2, 3, 4].map(n => `<img class="wm w${n}" src="icons/logo.png" alt="">`).join("")}</div>
    <div class="scb"><div class="sctabs"><button class="on">${t("scn3")}</button><button onclick="qTab('my')">${t("myqr")}</button></div><button class="lnk2" onclick="manualSend()">${t("scn2")}</button></div></div></div>`;
}
/* v2.28 — অ্যাপের নিজস্ব সংখ্যা কিপ্যাড: PIN, টাকার পরিমাণ, মোবাইল নম্বর, OTP, NID — সব সংখ্যার ঘরে ফোনের কিবোর্ড নয়।
   শুধু লেখার ঘরে (নাম, নোট, সার্চ ইত্যাদি) ফোনের কিবোর্ড ওঠে। কিপ্যাডে কোনো অ্যানিমেশন নেই, যাতে ফোন ল্যাগ না করে। */
(function () {
  let kp = null, cur = null, hideT = 0, mq = 0;
  const SEL = 'input[type="password"][inputmode="numeric"],input[data-kp="1"]'; /* v2.33: শুধু PIN এ অ্যাপের কিপ্যাড; নাম্বার/পরিমাণে ফোনের কিবোর্ড */
  const isPin = (e) => e && e.tagName === "INPUT" && e.getAttribute("data-kp") === "1";
  const fix = (root) => {
    (root || document).querySelectorAll(SEL).forEach((e) => {
      if (e.getAttribute("data-kp") === "1") return;
      e.setAttribute("data-km", e.type === "password" ? "pin" : e.getAttribute("inputmode") === "decimal" ? "dec" : "num");
      e.setAttribute("data-kp", "1"); e.setAttribute("inputmode", "none"); e.readOnly = true;
    });
  };
  const ARW = '<svg viewBox="0 0 24 24"><path d="M4 12h16M14 6l6 6-6 6"/></svg>';
  const DEL = '<button class="kd" data-k="d" aria-label="delete"><svg viewBox="0 0 40 28"><path d="M13 1h24a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H13L1 14z"/><path d="M19 9l10 10M29 9L19 19"/></svg></button>';
  const OKB = '<button class="kk" data-k="ok" aria-label="ok"><i><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></i></button>';
  const mk = () => {
    if (kp) return kp;
    kp = document.createElement("div"); kp.id = "kpad";
    const n = (k) => `<button data-k="${k}">${k}</button>`;
    const pn = ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(n).join("") + DEL + n("0") + OKB;
    const dc = ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(n).join("") + n(".") + n("0") + DEL;
    kp.innerHTML = `<div class="kpg pn">${pn}</div><div class="kpg dc">${dc}</div>`;
    kp.addEventListener("pointerdown", (ev) => {
      const b = ev.target.closest("button"); if (!b) return;
      ev.preventDefault();
      press(b.getAttribute("data-k"));
    });
    document.body.appendChild(kp); return kp;
  };
  const mode = (e) => e.getAttribute("data-km") || "pin";
  const ready = (e) => {
    const m = mode(e);
    if (m === "dec") return (parseFloat(e.value) || 0) > 0;
    const need = m === "pin" ? 6 : e.id === "lp" ? 11 : e.id === "otpin" ? 6 : 10;
    return digs(e.value, 20).length >= need;
  };
  const upd = () => {
    if (!kp || !cur) return; const m = mode(cur);
    kp.classList.toggle("dec", m === "dec");
    kp.classList.toggle("on", ready(cur));
    dkQs();
  };
  const press = (k) => {
    const e = cur; if (!e) return;
    if (k === "ok") return go();
    const m = mode(e), mx = e.maxLength > 0 ? e.maxLength : (m === "pin" ? 6 : 12);
    let v = m === "dec" ? String(e.value || "") : digs(e.value, mx);
    if (k === "d") { if (!v) return; v = v.slice(0, -1); hap(); }
    else if (k === ".") { if (m !== "dec" || v.indexOf(".") >= 0) return; v = (v || "0") + "."; }
    else if (v.length < mx) v += k; else return;
    e.value = v; e.dispatchEvent(new Event("input", {bubbles: true})); upd();
  };
  const go = (el) => {
    const e = el || cur; if (!e) return;
    if (!el && !kp) return;
    if (el ? !readyP(e) : !ready(e)) return;
    hap("MEDIUM");
    if (e.id === "otpin") return;
    if (e.id === "rk") { const n = document.getElementById("rk2"); if (n) { n.focus(); return; } }
    if (/Enter/.test(e.getAttribute("onkeydown") || "")) { e.dispatchEvent(new KeyboardEvent("keydown", {key: "Enter", bubbles: true, cancelable: true})); return; }
    const b = footBtn(e); if (b) b.click();
  };
  /* ---- v2.49 — এক স্থায়ী বার: "পরবর্তী / এগিয়ে যান / পিন কনফার্ম করুন" (বিকাশের মতো) ----
     পেজে সংখ্যা বা পিনের ঘর থাকলে বারটা সবসময় নিচে থাকে। ফোনের কিবোর্ড বা অ্যাপের কিপ্যাড উঠলে বারটা তার ঠিক ওপরে উঠে বসে,
     কিবোর্ড নামলে গায়েব না হয়ে ধীরে নিচে নেমে আসে। লেখা আসে ওই পেজের নিজের বাটন থেকে, তাই যে পেজে যাবে সেই অনুযায়ী বদলায়। */
  const DE = document.documentElement;
  let fb = null, dkOwn = null, dkIns = [], dkQ = 0;
  const isPhoneK = (e) => e && e.tagName === "INPUT" && !isPin(e) && e.id !== "otpin" && e.id !== "lp" && e.id !== "rp" && !e.readOnly && (/^(numeric|decimal)$/.test(e.getAttribute("inputmode") || "") || e.type === "tel" || e.id === "f1");
  const FOOT = ".pfoot button,.kbtm button,.kbtn";
  const footBtn = (e) => { const r = e.closest(".sh,.kw,#app") || document; return r.querySelector(FOOT) || r.querySelector(".pfoot .btn,.kbtn,.btn"); };
  const readyP = (e) => {
    if (e.id === "f1") { const v = (e.value || "").trim(); return digs(v, 20).length >= 11 || v.replace(/[0-9\s]/g, "").length >= 2; } /* সেন্ড মানির "নাম বা নাম্বার" ঘর */
    if (e.getAttribute("inputmode") === "decimal") return (parseFloat(e.value) || 0) > 0;
    const need = e.id === "lp" ? 11 : Math.min(e.maxLength > 0 ? e.maxLength : 10, 10);
    return digs(e.value, 20).length >= need;
  };
  const vvH = () => { const v = window.visualViewport; return v ? v.height : window.innerHeight; };
  let fullH = Math.max(window.innerHeight, vvH()), fullW = window.innerWidth;
  const kbo = () => { const v = window.visualViewport; return v ? Math.max(0, Math.round(window.innerHeight - v.height - v.offsetTop)) : 0; };
  const kbH = () => Math.max(0, Math.round(fullH - vvH()));
  const mkb = () => {
    if (fb) return fb;
    fb = document.createElement("div"); fb.id = "kbar"; fb.className = "nt"; fb.innerHTML = "<span></span>" + ARW;
    fb.addEventListener("pointerdown", (ev) => { ev.preventDefault(); dkTap(); });
    document.body.appendChild(fb); return fb;
  };
  /* সবচেয়ে ওপরের পেজ (#sheet2 এর স্তর আগে), যেটা বন্ধ হচ্ছে না */
  const topPage = () => {
    const a = document.querySelectorAll("#sheet2 .sh.pgx:not(.out)"); if (a.length) return a[a.length - 1];
    const b = document.querySelectorAll("#sheet .sh.pgx:not(.out)"); return b.length ? b[b.length - 1] : null;
  };
  const drivers = (pg) => {
    fix(pg);
    const a = [].slice.call(pg.querySelectorAll("input")).filter((e) => !e.disabled && (isPin(e) || isPhoneK(e)));
    const p = a.filter(isPin); return p.length ? p : a;
  };
  const isRdy = (e) => (isPin(e) ? ready(e) : readyP(e));
  const sbPx = () => { try { return parseFloat(getComputedStyle(fb).paddingBottom) || 0; } catch (e) { return 0; } };
  const dkHide = () => {
    if (dkOwn) { dkOwn.classList.remove("dkp"); dkOwn = null; }
    dkIns = [];
    if (fb && fb.classList.contains("show")) fb.classList.remove("show");
    if (DE.classList.contains("phkb")) DE.classList.remove("phkb");
  };
  const dkSync = () => {
    dkQ = 0;
    const pg = topPage(), ae = document.activeElement, kpUp = !!(kp && cur && kp.classList.contains("show")), kbUp = kbH() > 80;
    let own = null, ins = [], btn = null, tr = null;
    if (pg) { const d = drivers(pg), b = footBtn(pg); if (d.length && b) { own = pg; ins = d; btn = b; } }
    if (!own) {
      if (kpUp) { tr = cur; ins = [cur]; btn = footBtn(cur); }
      else if (kbUp && ae && isPhoneK(ae) && footBtn(ae)) { tr = ae; ins = [ae]; btn = footBtn(ae); }
    }
    if (!own && !tr) return dkHide();
    mkb();
    if (dkOwn && dkOwn !== own) dkOwn.classList.remove("dkp");
    if (own && !own.classList.contains("dkp")) own.classList.add("dkp");
    dkOwn = own; dkIns = ins;
    const pin = ins.some((e) => isPin(e) && mode(e) === "pin");
    const lbl = pin ? t("pinok") : (tr && kpUp && !(btn && (btn.textContent || "").trim())) ? t(mode(tr) === "dec" ? "go2" : "cont") : ((btn && (btn.textContent || "").trim()) || t("cont"));
    if (fb.firstChild.textContent !== lbl) fb.firstChild.textContent = lbl;
    const on = ins.every(isRdy), ld = !!(btn && btn.classList.contains("ld"));
    if (fb.classList.contains("on") !== on) fb.classList.toggle("on", on);
    if (fb.classList.contains("ld") !== ld) fb.classList.toggle("ld", ld);
    if (kp && kp.classList.contains("on") !== on && kpUp) kp.classList.toggle("on", on);
    const kpH = kpUp ? kp.offsetHeight : 0, sys = kbo(), off = Math.max(sys, kpH), sb = sbPx();
    const y = off > 0 ? Math.max(0, off - sb) : 0;
    if (fb.style.getPropertyValue("--dko") !== y + "px") fb.style.setProperty("--dko", y + "px");
    DE.style.setProperty("--kbo", sys + "px");
    if (kpUp) DE.style.setProperty("--kph", (kpH + (own ? 0 : 52)) + "px");
    if (sys > 0) { if (!DE.classList.contains("phkb")) DE.classList.add("phkb"); } else if (DE.classList.contains("phkb")) DE.classList.remove("phkb");
    if (!fb.classList.contains("show")) {
      fb.classList.add("nt"); void fb.offsetHeight; fb.classList.add("show");
      requestAnimationFrame(() => requestAnimationFrame(() => { if (fb) fb.classList.remove("nt"); }));
    }
  };
  const dkQs = () => { if (!dkQ) { dkQ = 1; (window.queueMicrotask || ((f) => Promise.resolve().then(f)))(dkSync); } };
  const dkTap = () => {
    if (!dkIns.length) return;
    const e = (cur && dkIns.indexOf(cur) >= 0) ? cur : dkIns[0];
    if (!dkIns.every(isRdy)) { fb.classList.remove("sk"); void fb.offsetWidth; fb.classList.add("sk"); hap(); return; }
    go(e);
  };
  const onVV = () => {
    const ae = document.activeElement, kbUp = kbH() > 80;
    if (!ae || ae === document.body || !/^(INPUT|TEXTAREA)$/.test(ae.tagName)) { if (!kbUp) fullH = Math.max(window.innerHeight, vvH()); }
    dkSync();
  };
  try { if (window.visualViewport) { window.visualViewport.addEventListener("resize", onVV); window.visualViewport.addEventListener("scroll", onVV); } } catch (e) {}
  window.addEventListener("resize", () => { if (Math.abs(window.innerWidth - fullW) > 80) { fullW = window.innerWidth; fullH = Math.max(window.innerHeight, vvH()); } onVV(); });
  /* ফোনের স্ক্রিন নিজেই ছোট/বড় হলে (কিবোর্ড ওঠা-নামা) বার লাফ না দিয়ে মসৃণ গড়িয়ে নতুন জায়গায় বসে */
  let lastIH = window.innerHeight;
  window.addEventListener("resize", () => {
    const h = window.innerHeight, d = lastIH - h; lastIH = h;
    if (Math.abs(d) < 60 || !fb || !fb.classList.contains("show")) return;
    try { fb.animate([{transform: "translate3d(0," + d + "px,0)"}, {transform: "translate3d(0,0,0)"}], {duration: 260, easing: "cubic-bezier(.2,.8,.2,1)"}); } catch (e) {}
  });
  document.addEventListener("input", () => dkQs());
  try {
    new MutationObserver((rs) => {
      for (let i = 0; i < rs.length; i++) { const m = rs[i]; if (m.type === "attributes" && !(m.target.classList && m.target.classList.contains("pgx"))) continue; dkQs(); return; }
    }).observe(document.documentElement, {childList: true, subtree: true, attributes: true, attributeFilter: ["class"]});
  } catch (e) {}
  const hide = () => { if (kp) kp.classList.remove("show"); document.documentElement.classList.remove("pinkb"); cur = null; dkSync(); };
  document.addEventListener("focusin", (ev) => {
    fix(ev.target.parentNode || document);
    if (!isPin(ev.target)) { dkQs(); return; }
    clearTimeout(hideT); cur = ev.target; mk(); upd();
    requestAnimationFrame(() => {
      kp.classList.add("show"); document.documentElement.classList.add("pinkb");
      dkSync();
      try { if (cur && !cur.closest(".pinp")) cur.scrollIntoView({block: "nearest"}); } catch (e) {}
    });
  });
  document.addEventListener("focusout", (ev) => {
    setTimeout(dkSync, 170);
    clearTimeout(hideT);
    const r = ev.relatedTarget; /* বাটন (যেমন ৳500 চিপ) চাপলে কিপ্যাড নামে না */
    if (r && r.tagName !== "INPUT" && r.closest && r.closest("#sheet,#app")) return;
    hideT = setTimeout(() => { if (isPin(document.activeElement)) return; hide(); }, 160);
  });
  document.addEventListener("input", (ev) => { if (ev.target === cur) upd(); });
  /* নতুন পেজ আঁকলে সংখ্যার ঘরগুলো আগে থেকে "কিবোর্ড-বন্ধ" করে দেয় (একসাথে একবার, যাতে ধীর না হয়) */
  try {
    new MutationObserver(() => {
      if (mq) return;
      mq = requestAnimationFrame(() => { mq = 0; fix(); if (cur && !document.contains(cur)) hide(); });
    }).observe(document.documentElement, {childList: true, subtree: true});
  } catch (e) {}
  fix();
})();

/* =====================================================================
   v2.24 — গ্রুপ ৩: সেন্ড মানি (বিকাশ স্টাইল), নিশ্চিত পেজ (লোগো টিপে ধরা), কন্টাক্ট + ইনভাইট,
   শুভেচ্ছা কার্ড, ১০ প্রিয় নাম্বার, গ্রুপ সেন্ড   (SQL: backend/update-v2.24.sql)
   ===================================================================== */
Object.assign(T.bn, {g_rcp: "প্রাপক", g_ref: "রেফারেন্স", g_note: "নোট লিখতে ট্যাপ করুন", g_cfm: "নিশ্চিত করুন", g_nochg: "+ চার্জ প্রযোজ্য নয়",
  g_hold: "করতে টিপে ধরুন", g_favnote: "প্রিয় নাম্বারে সেন্ড মানি'তে কোনো চার্জ নেই।", g_fav: "প্রিয় নাম্বার", g_favmax: "সর্বোচ্চ ১০টি প্রিয় নাম্বার রাখা যায়",
  g_cont: "কন্টাক্ট", g_grp: "গ্রুপ সেন্ড", g_card: "শুভেচ্ছা কার্ড", g_cardadd: "শুভেচ্ছা কার্ড যোগ করুন", g_cards: "শুভেচ্ছা কার্ডসমূহ", g_cardsv: "সেভ করে এগিয়ে যান",
  g_prev: "প্রিভিও", g_cnote: "নোট/স্বাক্ষর যোগ করুন", g_camt: "পরিমাণ", g_cdel: "কার্ড বাদ দিন", g_nocont: "এই ফোনে কন্টাক্ট পড়া যাচ্ছে না",
  g_contperm: "কন্টাক্ট দেখার অনুমতি দিন", g_srcc: "নাম বা নম্বর খুঁজুন", g_nocon0: "কোনো কন্টাক্ট পাওয়া যায়নি", g_noacc: "এই নম্বরে FuNPaY একাউন্ট নেই",
  g_invh: "FuNPaY-তে নেই", g_invb: "আমন্ত্রণ পাঠান", g_invtxt: "আমি FuNPaY অ্যাপ ব্যবহার করছি। তুমিও FuNPaY একাউন্ট খুলে নাও, তাহলে সহজেই টাকা পাঠানো-নেওয়া যাবে। আমার FuNPaY নম্বর: ",
  g_people: "জন", g_next: "পরবর্তী", g_grpneed: "কমপক্ষে ২ জন বাছুন (সর্বোচ্চ ১০)", g_each: "প্রত্যেককে", g_gtot: "মোট", g_gdone: "গ্রুপ সেন্ড", g_exit: "বাতিল", g_cdone: "কার্ডসহ",
  g_c_abh: "অভিনন্দন", g_c_bd: "জন্মদিন", g_c_biye: "বিয়ে", g_c_dhn: "ধন্যবাদ", g_c_shub: "শুভকামনা", g_c_bnd: "বন্ধু", g_c_ann: "অ্যানিভার্সারি", g_selc: "নির্বাচিত", favmax: "সর্বোচ্চ ১০টি প্রিয় নাম্বার রাখা যায়", grpcnt: "গ্রুপে ২ থেকে ১০ জন থাকতে হবে"});
Object.assign(T.en, {g_rcp: "Recipient", g_ref: "Reference", g_note: "Tap to write a note", g_cfm: "Confirm", g_nochg: "+ No charge applicable",
  g_hold: "", g_favnote: "No charge on Send Money to favorite numbers.", g_fav: "Favorite numbers", g_favmax: "You can keep up to 10 favorite numbers",
  g_cont: "Contacts", g_grp: "Group Send", g_card: "Greeting card", g_cardadd: "Add a greeting card", g_cards: "Greeting cards", g_cardsv: "Save and continue",
  g_prev: "Preview", g_cnote: "Add a note / signature", g_camt: "Amount", g_cdel: "Remove card", g_nocont: "Cannot read contacts on this phone",
  g_contperm: "Please allow contacts access", g_srcc: "Search name or number", g_nocon0: "No contacts found", g_noacc: "No FuNPaY account on this number",
  g_invh: "Not on FuNPaY yet", g_invb: "Send invite", g_invtxt: "I use the FuNPaY app. Open a FuNPaY account too so we can send and receive money easily. My FuNPaY number: ",
  g_people: "people", g_next: "Next", g_grpneed: "Pick at least 2 people (max 10)", g_each: "To each", g_gtot: "Total", g_gdone: "Group Send", g_exit: "Cancel", g_cdone: "with card",
  g_c_abh: "Congrats", g_c_bd: "Birthday", g_c_biye: "Wedding", g_c_dhn: "Thanks", g_c_shub: "Best wishes", g_c_bnd: "Friends", g_c_ann: "Anniversary", g_selc: "Selected", favmax: "You can keep up to 10 favorite numbers", grpcnt: "A group needs 2 to 10 people"});

const STAR = '<svg viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z"/></svg>';
const IC_BOOK = '<svg class="i" viewBox="0 0 24 24"><rect x="5" y="3.5" width="14" height="17" rx="2"/><circle cx="12" cy="10" r="2.4"/><path d="M8 16.5c.8-2 2.3-2.6 4-2.6s3.2.6 4 2.6M3 8h2M3 12h2M3 16h2"/></svg>';
const IC_GRP = '<svg class="i" viewBox="0 0 24 24"><circle cx="9" cy="8.5" r="3"/><circle cx="17" cy="9.5" r="2.3"/><path d="M3.5 19c.5-3.2 2.8-5 5.5-5s5 1.8 5.5 5M15.5 14.4c2.4-.3 4.4 1 5 3.6"/></svg>';
const IC_GIFT2 = '<svg class="i" viewBox="0 0 24 24"><rect x="3.5" y="9" width="17" height="11" rx="2"/><path d="M12 9v11M3.5 13h17M12 9c-2.6-4.5-6-1.5-3.5 0M12 9c2.6-4.5 6-1.5 3.5 0"/></svg>';
const IC_PEN = '<svg class="i" viewBox="0 0 24 24"><path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19z"/></svg>';
const IC_LOCK = '<svg class="i" viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2.4" fill="currentColor"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" fill="none"/></svg>';
const normPh = (x) => { let d = en(x).replace(/\D/g, ""); if (d.startsWith("880")) d = d.slice(2); if (d.length === 10 && d[0] === "1") d = "0" + d; return /^01\d{9}$/.test(d) ? d : ""; };
const avSt = (nm, ph) => `<span class="avs">${avatar(nm, ph)}${isFav(ph) ? `<i class="stf">${STAR}</i>` : ""}</span>`;
function rer() { const b = document.querySelector("#sheet .pbody"), y = b ? b.scrollTop : 0; renderSheet(); const b2 = document.querySelector("#sheet .pbody"); if (b2) b2.scrollTop = y; }

/* ---------- প্রিয় নাম্বার (সর্বোচ্চ ১০) ---------- */
S.fav = S.fav || []; S.contacts = S.contacts || [];
const isFav = (p) => S.fav.some(f => f.phone === p);
async function loadFav() { try { const r = await api("/rest/v1/rpc/fav_list", {m: "POST", b: {}}); S.fav = Array.isArray(r) ? r : []; const s = S.sheet; if (s && s.id === "send" && s.step === 1 && !s.busy) rer(); } catch (e) {} }
async function toggleFav(p, ev) {
  if (ev) { ev.stopPropagation(); ev.preventDefault(); } hap();
  if (!isFav(p) && S.fav.length >= 10) { toast(t("favmax")); return; }
  try {
    if (isFav(p)) { await api("/rest/v1/rpc/fav_remove", {m: "POST", b: {p_phone: p}}); S.fav = S.fav.filter(f => f.phone !== p); }
    else { await api("/rest/v1/rpc/fav_add", {m: "POST", b: {p_phone: p}}); S.fav.push({phone: p, name: ""}); loadFav(); }
  } catch (e) { toast(errMsg(e)); }
  const l = document.getElementById("clist"); if (l && S.sheet) l.innerHTML = contactRows(S.sheet); else if (S.sheet) rer();
}

/* ---------- কন্টাক্ট + ইনভাইট ---------- */
async function openContacts() {
  hap(); const C = cap().Contacts, s = S.sheet; if (!s) return;
  if (!C || !C.getContacts) { toast(t("g_nocont")); return; }
  try {
    let p = await C.checkPermissions(); if (p.contacts !== "granted") p = await C.requestPermissions();
    if (p.contacts !== "granted") { toast(t("g_contperm")); return; }
    const r = await C.getContacts({projection: {name: true, phones: true}}), m = new Map(), me = S.me ? S.me.phone : "";
    (r.contacts || []).forEach(c => {
      const nm = (c.name && (c.name.display || [c.name.given, c.name.family].filter(Boolean).join(" "))) || "";
      (c.phones || []).forEach(q => { const ph = normPh(q.number); if (ph && ph !== me && !m.has(ph)) m.set(ph, nm); });
    });
    S.contacts = [...m].map(([ph, nm]) => ({ph, nm})).sort((a, b) => (a.nm || a.ph).localeCompare(b.nm || b.ph));
    s.cview = true; s.v = ""; s.err = ""; s.fxs = true; renderSheet();
  } catch (e) { toast(t("g_contperm")); }
}
async function pickContactI(i) {
  const c = S.contacts[i], s = S.sheet; if (!c || !s || s.busy) return; hap();
  s.busy = true; setBusy(true);
  try {
    const r = await api("/rest/v1/rpc/lookup_phone", {m: "POST", b: {p_phone: c.ph}});
    s.busy = false; setBusy(false); if (S.sheet !== s) return;
    if (!r.length) { s.inv = {ph: c.ph, nm: c.nm}; rer(); return; }
    s.v = c.ph; s.rn = r[0].pname || c.nm || ""; s.step = 2; s.fxs = true; s.err = ""; s.cview = false; renderSheet();
  } catch (e) { s.busy = false; setBusy(false); toast(errMsg(e)); }
}
function closeInv() { const s = S.sheet; if (s) { s.inv = null; rer(); } }
function shareInvite() {
  hap(); const txt = t("g_invtxt") + (S.me ? S.me.phone : ""), Sh = cap().Share;
  try { if (Sh && Sh.share) { Sh.share({text: txt, dialogTitle: "FuNPaY"}).catch(() => {}); return; } if (navigator.share) { navigator.share({text: txt}).catch(() => {}); return; } } catch (e) {}
  copyTxt(txt);
}

/* ---------- শুভেচ্ছা কার্ড (নিজস্ব ডিজাইন, ছবি ফাইল লাগে না) ---------- */
const GC_CATS = ["abh", "bd", "biye", "dhn", "shub", "bnd", "ann"];
const GC_TITLE = {abh: "অভিনন্দন", bd: "শুভ জন্মদিন", biye: "শুভ বিবাহ", dhn: "ধন্যবাদ", shub: "শুভকামনা", bnd: "বন্ধু দিবসের শুভেচ্ছা", ann: "শুভ বর্ষপূর্তি"};
const GC_DECO = {
  flower: '<g transform="translate(60 78)">' + [0, 72, 144, 216, 288].map(r => `<ellipse cx="0" cy="-17" rx="9" ry="16" fill="#ff8fb8" transform="rotate(${r})"/>`).join("") + '<circle r="9" fill="#ffd34d"/></g><g transform="translate(140 86) scale(.7)">' + [0, 72, 144, 216, 288].map(r => `<ellipse cx="0" cy="-17" rx="9" ry="16" fill="#fff" opacity=".85" transform="rotate(${r})"/>`).join("") + '<circle r="9" fill="#f08a1c"/></g><path d="M60 95c-6 10-16 14-28 14M60 95c6 10 16 14 28 14" stroke="#2e9b5a" stroke-width="3" fill="none"/>',
  star: [[40, 70, 16], [100, 52, 22], [160, 78, 14], [70, 100, 10], [140, 104, 12]].map(([x, y, r]) => `<path d="M${x} ${y - r}l${r * .3} ${r * .7} ${r * .75}.1-${r * .6} ${r * .5} ${r * .22} ${r * .8}-${r * .67}-${r * .45}-${r * .67} ${r * .45} ${r * .22}-${r * .8}-${r * .6}-${r * .5} ${r * .75}-.1z" fill="#fff" opacity=".9"/>`).join(""),
  conf: [[20, 60, "#ffd34d"], [50, 90, "#fff"], [80, 55, "#ff5fa2"], [110, 95, "#7be0ff"], [140, 62, "#ffd34d"], [170, 92, "#fff"], [35, 108, "#ff5fa2"], [95, 76, "#fff"], [155, 40, "#7be0ff"], [185, 66, "#ffd34d"]].map(([x, y, c], i) => i % 2 ? `<rect x="${x}" y="${y}" width="9" height="5" rx="1.5" fill="${c}" transform="rotate(${i * 25} ${x} ${y})"/>` : `<circle cx="${x}" cy="${y}" r="4.5" fill="${c}"/>`).join(""),
  balloon: [[50, 58, "#ff5fa2"], [100, 48, "#ffd34d"], [150, 60, "#7be0ff"]].map(([x, y, c]) => `<ellipse cx="${x}" cy="${y}" rx="17" ry="21" fill="${c}"/><path d="M${x} ${y + 21}l-3 5h6zM${x} ${y + 26}c-6 14 6 24 0 34" stroke="#fff" stroke-width="1.6" fill="none" opacity=".85"/>`).join(""),
  cake: '<rect x="62" y="70" width="76" height="34" rx="7" fill="#fff"/><rect x="62" y="70" width="76" height="12" rx="6" fill="#ff8fb8"/><rect x="72" y="52" width="56" height="20" rx="6" fill="#ffe3ef"/><path d="M84 52v-12M100 52v-14M116 52v-12" stroke="#ffd34d" stroke-width="4" stroke-linecap="round"/><path d="M84 36c-3-4 3-6 0-10 4 2 4 7 0 10zM100 34c-3-4 3-6 0-10 4 2 4 7 0 10zM116 36c-3-4 3-6 0-10 4 2 4 7 0 10z" fill="#ff7a3c"/>',
  heart: [[60, 80, 1], [100, 62, 1.5], [146, 84, .9]].map(([x, y, k]) => `<path transform="translate(${x} ${y}) scale(${k})" d="M0 12C-22-4-12-22 0-10 12-22 22-4 0 12z" fill="#ff5f8f" stroke="#fff" stroke-width="1.5"/>`).join(""),
  gift: '<rect x="68" y="62" width="64" height="44" rx="5" fill="#ffd9a6"/><rect x="62" y="50" width="76" height="16" rx="5" fill="#ffecd0"/><path d="M100 50v56" stroke="#e2136e" stroke-width="7"/><path d="M100 50c-8-18-26-12-18-4 6 5 14 4 18 4zM100 50c8-18 26-12 18-4-6 5-14 4-18 4z" fill="#e2136e"/>',
  sun: '<circle cx="100" cy="86" r="22" fill="#ffd34d"/>' + [0, 40, 80, 120, 160, 200, 240, 280, 320].map(r => `<path d="M100 54v-12" stroke="#ffd34d" stroke-width="5" stroke-linecap="round" transform="rotate(${r} 100 86)"/>`).join("")
};
const GC = [];
[["abh", [["#d85aa8", "#b53b95", "flower"], ["#ffd34d", "#ffb300", "star", "#8a1450"], ["#2b3a8f", "#1b2466", "conf"]]],
 ["bd", [["#ff7aa8", "#e2136e", "cake"], ["#7a4cd0", "#4f2aa3", "balloon"], ["#fff1b0", "#ffd34d", "gift", "#a3105a"]]],
 ["biye", [["#ffe066", "#f5c400", "heart", "#d6105f"], ["#7a2a8c", "#561a6a", "star"], ["#ffd6e5", "#ffb3cf", "flower", "#a3105a"]]],
 ["dhn", [["#1fa87a", "#0c7d5a", "flower"], ["#ff9a5c", "#f06a1c", "sun"], ["#4b6fe0", "#2c47b3", "heart"]]],
 ["shub", [["#35b6d8", "#1b86ad", "sun"], ["#e2136e", "#b00c58", "star"], ["#8fd36b", "#4fa83a", "flower", "#14532d"]]],
 ["bnd", [["#e2136e", "#c40f5e", "conf"], ["#ffe066", "#ffc400", "balloon", "#a3105a"], ["#5b7cf0", "#3550c4", "star"]]],
 ["ann", [["#b5174f", "#7e0e38", "heart"], ["#f5c76b", "#e0a030", "gift", "#6b0f3a"], ["#2c2c54", "#1a1a3a", "star"]]]
].forEach(([c, a]) => a.forEach((x, i) => GC.push({id: c + (i + 1), cat: c, a: x[0], b: x[1], d: x[2], ink: x[3] || "#fff"})));
const gcOf = (id) => GC.find(c => c.id === id);
function cardArt(c, amt, note, small) {
  if (!c) return "";
  if (small) return `<div class="gc sm" style="background:linear-gradient(160deg,${c.a},${c.b})"><b style="color:${c.ink}">${GC_TITLE[c.cat]}</b><svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMax meet">${GC_DECO[c.d]}</svg></div>`;
  return `<div class="gc" style="background:linear-gradient(160deg,${c.a},${c.b});color:${c.ink}"><div class="gct">${GC_TITLE[c.cat]}</div>${amt != null ? `<div class="gca">${t("g_camt")}: ${money2(amt)}</div>` : ""}${note ? `<div class="gcn">${esc(note)}</div>` : ""}<svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMax meet">${GC_DECO[c.d]}</svg></div>`;
}
function openCards() { const s = S.sheet; if (!s) return; sync(); hap(); s.cardPick = true; s.ctmp = s.card || GC[0].id; s.ccat = (gcOf(s.ctmp) || GC[0]).cat; s.cprev = false; s.fxs = true; renderSheet(); }
function cardsHtml(s) {
  const c = gcOf(s.ctmp) || GC[0], n = s.grp ? s.grp.sel.length : 1, amt = (parseFloat(s.a) || 0);
  const tabs = GC_CATS.map(k => `<button class="${s.ccat === k ? "on" : ""}" onclick="cardCat('${k}')">${t("g_c_" + k)}</button>`).join("");
  const th = GC.filter(x => x.cat === s.ccat).map(x => `<button class="gth${x.id === s.ctmp ? " on" : ""}" onclick="cardPick('${x.id}')">${cardArt(x, null, "", true)}</button>`).join("");
  return `<div class="sh pgx cgx${s.fresh ? "" : " re"}"><div class="box"><div class="ph"><button class="pb" aria-label="${t("back")}" onclick="cardBack()">${ic("back")}</button><b>${t("g_cards")}</b><img src="icons/logo.png" alt=""></div>
    <div class="pbody"><div class="gcw"><div class="gcbox">${cardArt(c, amt || null, "", false)}<label class="gcin"><input id="cnote" maxlength="40" placeholder="${t("g_cnote")}" value="${esc(s.note || "")}" oninput="cardNote(this)">${IC_PEN}</label></div>
      <div class="gbt"><button class="btn l" onclick="cardPrev(true)">${ic("eye")}<span>${t("g_prev")}</span></button>${s.card ? `<button class="btn l" onclick="cardDel()"><span>${t("g_cdel")}</span></button>` : ""}</div></div>
      <div class="gtabs">${tabs}</div><div class="gths">${th}</div></div>
    <div class="pfoot"><button class="btn" onclick="cardSave()">${t("g_cardsv")}</button></div>
    ${s.cprev ? `<div class="gprv" onclick="cardPrev(false)">${cardArt(c, amt || null, s.note || "", false)}</div>` : ""}</div></div>`;
}
function cardCat(k) { const s = S.sheet; if (!s) return; hap(); s.ccat = k; const f = GC.find(x => x.cat === k); if (f && !GC.some(x => x.cat === k && x.id === s.ctmp)) s.ctmp = f.id; rer(); }
function cardPick(id) { const s = S.sheet; if (!s) return; hap(); s.ctmp = id; rer(); }
function cardNote(el) { const s = S.sheet; if (s) s.note = el.value.slice(0, 40); }
function cardPrev(on) { const s = S.sheet; if (!s) return; hap(); s.cprev = !!on; rer(); }
function cardBack() { const s = S.sheet; if (!s) return; hap(); s.cardPick = false; s.fxs = true; renderSheet(); }
function cardSave() { const s = S.sheet; if (!s) return; hap("MEDIUM"); s.card = s.ctmp; s.cardPick = false; s.fxs = true; renderSheet(); }
function cardDel() { const s = S.sheet; if (!s) return; hap(); s.card = ""; s.cardPick = false; s.fxs = true; renderSheet(); }

/* ---------- ধাপ ১: কাকে পাঠাবেন (কন্টাক্ট / প্রিয় / সাম্প্রতিক / গ্রুপ) ---------- */
function sendRows(s) {
  const q = (s.v || "").trim(), g = s.grp, ql = q.toLowerCase();
  const m = (ph, nm) => !ql || ph.includes(ql) || String(nm || "").toLowerCase().includes(ql);
  const star = (ph) => `<button class="stb${isFav(ph) ? " on" : ""}" aria-label="fav" onclick="toggleFav('${ph}',event)">${STAR}</button>`;
  const ck = (ph) => `<i class="ck${g && g.sel.includes(ph) ? " on" : ""}">${tickSvg}</i>`;
  const R = (ph, nm, clk) => { if (g && nm) g.names[ph] = nm; return `<div class="rr" onclick="${g ? `grpTog('${ph}')` : clk}">${avSt(nm, ph)}<div><b>${esc(nm || ph)}</b><span>${nm ? esc(ph) : ""}</span></div>${g ? ck(ph) : star(ph)}</div>`; };
  if (s.cview) {
    const l = S.contacts.map((c, i) => [c, i]).filter(([c]) => m(c.ph, c.nm)).slice(0, 250);
    return l.length ? l.map(([c, i]) => R(c.ph, c.nm, `pickContactI(${i})`)).join("") : `<p class="em">${t(S.contacts.length ? "nomatch" : "g_nocon0")}</p>`;
  }
  const favSet = new Set(S.fav.map(f => f.phone)), favs = S.fav.filter(f => m(f.phone, f.name)), rec = peopleFor("send").filter(f => !favSet.has(f[0]) && m(f[0], f[1]));
  let h = "";
  if (isPh(q) && !favSet.has(q) && !rec.some(f => f[0] === q)) h += R(q, "", `pickNum('${q}')`);
  if (favs.length) h += `<p class="lh2">${t("g_fav")} · ${S.fav.length}/10</p>` + favs.map(f => R(f.phone, f.name, `pickNum('${f.phone}')`)).join("");
  if (rec.length) h += `<p class="lh2">${t("rcnt")}</p>` + rec.map(f => R(f[0], f[1], `pickNum('${f[0]}')`)).join("");
  return h || `<p class="em">${t(q ? "nomatch" : "nosend2")}</p>`;
}
const _cr0 = contactRows;
contactRows = function (s) { return s.id === "send" ? sendRows(s) : _cr0(s); };
function sbBack() { const s = S.sheet; if (!s) return; if (s.inv) { closeInv(); return; } if (s.cview) { hap(); s.cview = false; s.v = ""; s.fxs = true; renderSheet(); return; } if (s.grp) { grpOff(); return; } backStep(); }
function grpOn() { const s = S.sheet; if (!s) return; hap(); s.grp = {sel: [], names: {}}; s.v = ""; s.cview = false; s.fxs = true; renderSheet(); }
function grpOff() { const s = S.sheet; if (!s) return; hap(); s.grp = null; s.v = ""; s.fxs = true; renderSheet(); }
function grpTog(ph) {
  const s = S.sheet; if (!s || !s.grp) return; hap(); const a = s.grp.sel, i = a.indexOf(ph);
  if (i >= 0) a.splice(i, 1); else if (a.length >= 10) { toast(t("grpneed2")); return; } else a.push(ph);
  rer();
}
Object.assign(T.bn, {grpneed2: "গ্রুপে সর্বোচ্চ ১০ জন"}); Object.assign(T.en, {grpneed2: "Max 10 people in a group"});
function sendStep1(s) {
  const g = s.grp, cv = s.cview, n = g ? g.sel.length : 0;
  const search = `<div class="pcard srcc"><div class="fld sf">${ic("srch")}<input id="f1" maxlength="20" placeholder="${t(cv ? "g_srcc" : "sname")}" value="${esc(s.v)}" autocomplete="off" oninput="srchIn(this)"></div><div class="err" id="er">${esc(s.err)}</div></div>`;
  const tl = (ico, lbl, js) => `<button class="tl" onclick="${js}"><span>${ico}</span><b>${lbl}</b></button>`;
  const tiles = (g || cv) ? (g ? `<div class="gsel"><b>${t("g_selc")}: ${n}/10</b><button onclick="grpOff()">${t("g_exit")}</button></div>${n ? `<div class="gchips">${g.sel.map(p => `<span onclick="grpTog('${p}')">${esc(g.names[p] || p)} ✕</span>`).join("")}</div>` : ""}` : "")
    : `<div class="tl4">${tl(IC_BOOK, t("g_cont"), "openContacts()")}${tl(ic("qr"), t("scanqr"), "openQR('scan','send')")}${tl(ic("qr"), t("myqr"), "openQR('my')")}${tl(IC_GRP, t("g_grp"), "grpOn()")}</div>`;
  const cvBtn = (g && !cv) ? `<button class="gcb" onclick="openContacts()">${IC_BOOK}<span>${t("g_cont")}</span></button>` : "";
  const inv = s.inv ? `<div class="invd" onclick="if(event.target===this)closeInv()"><div class="invb"><div class="grip"></div>${avatar(s.inv.nm, s.inv.ph)}<b>${esc(s.inv.nm || s.inv.ph)}</b><span>${esc(s.inv.ph)}</span><p>${t("g_noacc")}</p><button class="btn" onclick="shareInvite()">${t("g_invb")}</button><button class="btn l" onclick="closeInv()">${t("close")}</button></div></div>` : "";
  const foot = cv ? "" : `<button class="btn" onclick="nextStep()">${g ? t("g_next") + " (" + n + ")" : t("next")}${NXT}</button>`;
  return wrapPage(s, g ? t("g_grp") : t("send"), "sbBack()", `${search}${tiles}${cvBtn}<div class="pcard lst"><div id="clist">${contactRows(s)}</div></div>${inv}`, foot);
}
/* ---------- ধাপ ২: টাকার পরিমাণ + শুভেচ্ছা কার্ড ---------- */
function gtotU() { const s = S.sheet, e = document.getElementById("gtot"); if (s && s.grp && e) e.textContent = t("g_gtot") + ": " + money2((parseFloat(s.a) || 0) * s.grp.sel.length); }
function sendStep2(s) {
  const g = s.grp, n = g ? g.sel.length : 1, amt = parseFloat(s.a) || 0;
  const who = g ? `<div class="bkp">${avatar(t("g_grp"), "grp")}<div><b>${t("g_grp")}</b><span>${n} ${t("g_people")}</span></div></div>` : `<div class="bkp">${avSt(s.rn, s.v)}<div><b>${esc(s.rn || s.v)}</b><span>${s.rn ? esc(s.v) : ""}</span></div><i class="vf">${tickSvg}</i></div>`;
  const chips = [500, 1000, 2000, 5000].map(k => `<button onclick="qAmt(${k});gtotU()">৳${k.toLocaleString("en-US")}</button>`).join("");
  const cd = gcOf(s.card);
  return wrapPage(s, g ? t("g_grp") : t("send"), "backStep()", `<div class="bk2"><p class="bkl">${t("g_rcp")}</p><div class="bkc">${who}</div>
    ${!g && s.v && !recents().some(f => f[0] === s.v) && !isFav(s.v) ? `<p class="tw" style="margin:8px 0 0">${t("chkn")}</p>` : ""}
    <p class="bkl" style="margin-top:14px">${g ? t("g_each") : t("amt")}</p><div class="bkc"><div class="fld big bka"><u>৳</u><input id="f2" inputmode="decimal" placeholder="0" value="${esc(s.a)}" oninput="amtIn(this);gtotU()"></div>
      <div class="avl">${t("avl")}: <b>${money(S.bal)}</b>${g ? ` · <b id="gtot">${t("g_gtot")}: ${money2(amt * n)}</b>` : ""}</div><div class="qa">${chips}</div><div class="err" id="er">${esc(s.err)}</div></div>
    <button class="gadd" onclick="openCards()">${cd ? `<span class="gmini">${cardArt(cd, null, "", true)}</span><div><b>${t("g_card")}</b><em>${GC_TITLE[cd.cat]}</em></div>` : `${IC_GIFT2}<b>${t("g_cardadd")}</b>`}<i>›</i></button></div>`,
    `<button class="btn" onclick="nextStep()">${t("go2")}${NXT}</button>`);
}
/* ---------- ধাপ ৩: বিকাশ স্টাইল (প্রাপক · পরিমাণ/চার্জ/সর্বমোট · রেফারেন্স · PIN) ---------- */
function totals(s) {
  const c = cfg(s.id), d = c.d || -1, n = s.grp ? s.grp.sel.length : 1, amt = parseFloat(s.a) || 0, fee = feeOf(c, amt), dsc = s.id === "pay" ? cpDisc(s.cp, amt) : 0;
  return {c, d, n, amt: amt * n, fee, dsc, tot: d < 0 ? amt * n + fee - dsc : amt * n};
}
function bkWho(s) {
  if (s.grp) return `<div class="bkp">${avatar(t("g_grp"), "grp")}<div><b>${t("g_grp")}</b><span>${s.grp.sel.length} ${t("g_people")}</span></div></div>`;
  if (!PERSON.includes(s.id)) return "";
  return `<div class="bkp">${avSt(s.rn, s.v)}<div><b>${esc(s.rn || s.v)}</b><span>${s.rn ? esc(s.v) : ""}</span></div></div>`;
}
function noteIn(el) { const s = S.sheet; if (!s) return; s.note = el.value.slice(0, 50); const e = document.getElementById("ncnt"); if (e) e.textContent = s.note.length + "/50"; }
function bkStep3(s) {
  const T3 = totals(s), cd = gcOf(s.card);
  return wrapPage(s, t(s.id), "backStep()", `<div class="bk3"><div class="bkc">${bkWho(s)}</div>
    <div class="bk3t"><div><span>${t("amtl")}</span><b>${money2(T3.amt)}</b></div><div><span>${t("feel")}</span><b>+ ${money2(T3.fee)}</b></div><div><span>${t("total")}</span><b>${money2(T3.tot)}</b></div></div>
    ${s.id === "send" ? `<div class="bkref"><div><span>${t("g_ref")}</span><em id="ncnt">${(s.note || "").length}/50</em></div><input id="snote" maxlength="50" placeholder="${t("g_note")}" value="${esc(s.note || "")}" oninput="noteIn(this)" autocomplete="off"></div>${cd ? `<div class="gmrow">${IC_GIFT2}<b>${t("g_card")}</b></div>` : ""}` : ""}
    <div class="pinrow bkpin">${IC_LOCK}<input id="spin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="off" placeholder="${t("pinph")}" aria-label="PIN" value="${esc(s.pin)}" oninput="spIn(this)" onkeydown="if(event.key==='Enter'){event.preventDefault();spGo()}"><button class="fpb" aria-label="fingerprint" onclick="txBio()">${ic("fp")}</button></div>
    <div class="err c" id="er" style="text-align:center;margin-top:8px">${esc(s.err)}</div></div>`, `<button class="btn" id="spgo" onclick="spGo()">${t("ok")}</button>`);
}
/* ---------- ধাপ ৪: নিশ্চিত করুন — লোগো টিপে ধরে রাখলে এগোয় ---------- */
function bkStep4(s) {
  const T3 = totals(s), nb = T3.d < 0 ? S.bal - T3.tot : S.bal + T3.amt, cd = gcOf(s.card);
  const cell = (l, v, sub) => `<div><span>${l}</span><b>${v}</b>${sub ? `<small>${sub}</small>` : ""}</div>`;
  const rows = [!PERSON.includes(s.id) && s.v ? cell(t(cfg(s.id).f), esc(s.v)) : "", !PERSON.includes(s.id) && s.ch ? cell(t("opr"), t(s.ch)) : ""].join("");
  return `<div class="sh pgx c4${s.fresh ? "" : " re"}"><div class="box"><div class="c4h"><b class="c4t"><em>${t(s.id)}</em><span>${t("g_cfm")}</span></b><button class="c4x" aria-label="${t("close")}" onclick="closeS()"><svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg></button></div>
    <div class="c4b"><div class="stp${s.fxs ? " go" + (s.dir < 0 ? " bw" : "") : ""}">${bkWho(s) ? `<div class="c4w">${bkWho(s)}</div>` : ""}
      <div class="c4g"><div class="c4tot"><b>${money2(T3.tot)}</b><small>${T3.fee ? "+ " + t("feel") + " " + money2(T3.fee) : t("g_nochg")}</small></div>${cell(t("nbl"), money2(nb))}${rows}${s.id === "send" ? cell(t("g_ref"), esc(s.note || "—")) : ""}${cd ? `<div class="wide"><span>${t("g_card")}</span><b>${GC_TITLE[cd.cat]}</b></div>` : ""}</div>
      ${s.id === "send" && !s.grp && isFav(s.v) ? `<div class="c4n"><svg class="stn" viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z"/></svg><p>${t("g_favnote")}</p></div>` : ""}
      ${s.grp ? `<div class="c4n"><p>${T3.n} ${t("g_people")}${s.grp.diff ? "" : " × " + money2(parseFloat(s.a) || 0)}</p></div>` : ""}
      <div class="err c" id="c4e" style="text-align:center;margin-top:10px">${esc(s.err)}</div></div></div>
    <div class="c4f"><div id="lgh" class="lgh" onpointerdown="lgStart(event)" onpointerup="lgEnd()" onpointerleave="lgEnd()" onpointercancel="lgEnd()" oncontextmenu="return false"><svg viewBox="0 0 100 100"><circle class="r0" cx="50" cy="50" r="46"/><circle class="r1" cx="50" cy="50" r="46"/></svg><img src="icons/logo.png" alt=""></div><p>${S.lang === "en" ? "Tap and hold to confirm the payment" : t(s.id) + " " + t("g_hold")}</p></div></div></div>`;
}
let lgT = 0;
function lgStart(e) { const b = document.getElementById("lgh"); if (!b || lgT || b.classList.contains("ld")) return; if (e && e.preventDefault) e.preventDefault(); hap(); b.classList.add("hd"); lgT = setTimeout(() => { lgT = 0; b.classList.remove("hd"); b.classList.add("ld"); hap("MEDIUM"); confirmTx(); }, 2000); }
function lgEnd() { if (!lgT) return; clearTimeout(lgT); lgT = 0; const b = document.getElementById("lgh"); if (b) b.classList.remove("hd"); }

/* ---------- রাউটার: সেন্ড/পেমেন্ট/ক্যাশ আউটের ধাপ ৩-৪ বিকাশ স্টাইল, সেন্ডের ধাপ ১-২ নতুন ---------- */
function sheetHtml() {
  const s = S.sheet;
  if (s && !s.done && PERSON.includes(s.id)) {
    if (s.id === "send" && s.cardPick) return cardsHtml(s);
    if (s.id === "send" && s.step === 1) return sendStep1(s);
    if (s.step === 2) return bkStep2(s);
    if (s.step === 1 && s.id !== "send") return bkStep1(s);
    if (s.step === 3) return bkStep3(s);
    if (s.step === 4) return bkStep4(s);
  }
  return sheetHtml0();
}
/* গ্রুপ সেন্ডের যাচাই; বাকি সব আগের মতো */
async function nextStep() {
  const s = S.sheet;
  if (!s || s.id !== "send" || !s.grp) return nextStep0();
  sync(); if (s.busy) return; let e = "";
  if (s.step === 1) {
    const n = s.grp.sel.length;
    if (n < 2 || n > 10) e = t("g_grpneed");
    else {
      s.busy = true; setBusy(true);
      try { const rs = await Promise.all(s.grp.sel.map(p => api("/rest/v1/rpc/lookup_phone", {m: "POST", b: {p_phone: p}}))); const bad = s.grp.sel.filter((p, i) => !rs[i].length); if (bad.length) e = t("g_noacc") + ": " + bad.join(", "); }
      catch (x) { e = errMsg(x); }
      s.busy = false; setBusy(false); if (S.sheet !== s) return;
    }
  } else if (s.step === 2) {
    const amt = parseFloat(s.a), n = s.grp.sel.length;
    if (s.grp.diff) { const am = s.grp.sel.map(p => parseFloat((s.grp.amts || {})[p]) || 0); if (am.some(x => !(x > 0))) e = t("bada"); else if (am.reduce((a, b) => a + b, 0) > S.bal) e = t("low"); }
    else if (!(amt > 0)) e = t("bada"); else if (amt * n > S.bal) e = t("low"); else s.a = String(Math.round(amt * 100) / 100);
  }
  s.err = e; if (!e) { s.step++; s.fxs = true; s.pin = ""; hap(); } renderSheet(); if (e) shakeBox();
}
function openS(id, pre, rn) { openS0(id, pre, rn); if (id === "send" && S.sheet && S.sheet.id === "send") loadFav(); }
function errMsg(e) { const m = (e && e.message) || ""; if (m === "FAVMAX") return t("favmax"); if (m === "BADCNT") return t("grpcnt"); return errMsg0(e); }
/* লেনদেনের বিস্তারিতে কার্ড ও রেফারেন্স দেখানো */
function trdHtml() {
  const h = trdHtml0(), s = S.sheet, x = s && s.x; if (!x || (!x.card && !x.note)) return h;
  const cd = gcOf(x.card), blk = (cd ? `<div class="gcd">${cardArt(cd, x.amount, x.note, false)}</div>` : "") + (!cd && x.note ? `<p class="tnote"><span>${t("g_ref")}</span> ${esc(x.note)}</p>` : "");
  return h.replace('<div class="tgrid">', blk + '<div class="tgrid">');
}


/* =====================================================================
   v2.25 — ভেরিফিকেশন পাতা: ৩টি লেখা সরিয়ে লোগো + "KYC করার জন্য ধন্যবাদ"
   ===================================================================== */
Object.assign(T.bn, {k_thx: "KYC করার জন্য ধন্যবাদ"});
Object.assign(T.en, {k_thx: "Thank you for completing KYC"});
function kSumHtml() {
  const m = K.sum; if (!m) return "";
  const cap = ["k_c1", "k_c2", "k_c3"];
  const th = (src, i) => `<div class="kx3"><div class="kxi"><img src="${src}" alt=""><i>${kTickI}</i></div><span>${t(cap[i])}</span></div>`;
  return `<div class="kxs"><div class="kx3s">${m.th.map(th).join("")}</div><div class="kxth"><img src="icons/logo.png" alt=""><b>${t("k_thx")}</b></div></div>`;
}


/* =====================================================================
   v2.25 — পেমেন্ট/ক্যাশ আউট/সেন্ডের পরিমাণ পাতা (বিকাশ স্টাইল), লেনদেনের PIN এ ফিঙ্গারপ্রিন্ট,
   গ্রুপ সেন্ডে আলাদা আলাদা পরিমাণ   (SQL: backend/update-v2.25.sql — শুধু আলাদা পরিমাণের জন্য)
   ===================================================================== */
Object.assign(T.bn, {g_diff: "আলাদা আলাদা পরিমাণ", fpoff: "আগে প্রোফাইল থেকে ফিঙ্গারপ্রিন্ট চালু করুন", fpbad: "ফিঙ্গারপ্রিন্ট মেলেনি, PIN দিন"});
Object.assign(T.en, {g_diff: "Different amounts", fpoff: "Turn on fingerprint from your profile first", fpbad: "Fingerprint did not match, enter your PIN"});
const gSum = (s) => s.grp.sel.reduce((a, p) => a + (parseFloat((s.grp.amts || {})[p]) || 0), 0);
function gtotU() {
  const s = S.sheet, e = document.getElementById("gtot");
  if (s && s.grp && e) e.textContent = t("g_gtot") + ": " + money2(s.grp.diff ? gSum(s) : (parseFloat(s.a) || 0) * s.grp.sel.length);
}
function totals(s) {
  const c = cfg(s.id), d = c.d || -1, n = s.grp ? s.grp.sel.length : 1, a0 = parseFloat(s.a) || 0, df = !!(s.grp && s.grp.diff);
  const amt = df ? gSum(s) : a0 * n, fee = df ? 0 : feeOf(c, a0), dsc = s.id === "pay" ? cpDisc(s.cp, a0) : 0;
  return {c, d, n, amt, fee, dsc, tot: d < 0 ? amt + fee - dsc : amt};
}
function grpDiff() {
  const s = S.sheet; if (!s || !s.grp) return; sync(); hap();
  const g = s.grp; g.diff = !g.diff; g.amts = g.amts || {};
  if (g.diff) { const a = parseFloat(s.a) || 0; if (a > 0) g.sel.forEach((p) => { if (!g.amts[p]) g.amts[p] = String(a); }); }
  s.err = ""; s.fxs = false; renderSheet();
}
function grpAmt(ph, el) {
  const s = S.sheet; if (!s || !s.grp) return;
  let v = en(el.value).replace(/[^0-9.]/g, ""); const q = v.split(".");
  if (q.length > 1) v = q[0] + "." + q.slice(1).join("").slice(0, 2);
  v = v.replace(/^0+(?=\d)/, "").slice(0, 9); if (el.value !== v) el.value = v;
  s.grp.amts = s.grp.amts || {}; s.grp.amts[ph] = v; s.err = "";
  const er = document.getElementById("er"); if (er) er.textContent = ""; gtotU();
}
function bkStep2(s) {
  const g = s.grp, n = g ? g.sel.length : 1, amt = parseFloat(s.a) || 0, c = cfg(s.id), fee = feeOf(c, amt), diff = !!(g && g.diff), isSend = s.id === "send";
  const who = g ? `<div class="bkp">${avatar(t("g_grp"), "grp")}<div><b>${t("g_grp")}</b><span>${n} ${t("g_people")}</span></div></div>`
    : `<div class="bkp">${avSt(s.rn, s.v)}<div><b>${esc(s.rn || s.v)}</b><span>${s.rn ? esc(s.v) : ""}</span></div><i class="vf">${tickSvg}</i></div>`;
  const chips = [500, 1000, 2000, 5000].map(k => `<button onclick="qAmt(${k});gtotU()">৳${k.toLocaleString("en-US")}</button>`).join("");
  const cd = gcOf(s.card), lk = s.id === "cash" ? "lag" : s.id === "pay" ? "lmr" : "lrcv";
  const tot = `<b id="gtot">${t("g_gtot")}: ${money2(diff ? gSum(s) : amt * n)}</b>`;
  const amtBox = diff
    ? `<div class="gdl">${g.sel.map(p => `<div class="gdr"><span>${esc(g.names[p] || p)}${g.names[p] ? `<small>${esc(p)}</small>` : ""}</span><div class="gdi"><u>৳</u><input inputmode="decimal" placeholder="0" value="${esc((g.amts || {})[p] || "")}" oninput="grpAmt('${p}',this)"></div></div>`).join("")}</div>
       <div class="avl">${t("avl")}: <b>${money(S.bal)}</b> · ${tot}</div><div class="err" id="er">${esc(s.err)}</div>`
    : `<div class="fld big bka"><u>৳</u><input id="f2" inputmode="decimal" placeholder="0" value="${esc(s.a)}" oninput="amtIn(this);gtotU()"></div>
       <div class="avl">${t("avl")}: <b>${money(S.bal)}</b>${g ? ` · ${tot}` : ""}</div><div class="fee" id="fl">${c.fee && !g ? t("feel") + ": " + money(fee) : ""}</div>
       <div class="qa">${chips}</div><div class="err" id="er">${esc(s.err)}</div>`;
  return wrapPage(s, g ? t("g_grp") : t(s.id), "backStep()", `<div class="bk2">${isSend ? "" : `<p class="bkl">${t(lk)}</p>`}<div class="bkc">${who}</div>
    ${g ? `<button class="gdf${diff ? " on" : ""}" onclick="grpDiff()"><span>${t("g_diff")}</span><i></i></button>` : ""}
    ${isSend && !g && s.v && !recents().some(f => f[0] === s.v) && !isFav(s.v) ? `<p class="tw" style="margin:8px 0 0">${t("chkn")}</p>` : ""}
    <p class="bkl" style="margin-top:14px">${g && !diff ? t("g_each") : t("amt")}</p><div class="bkc">${amtBox}</div>
    ${s.id === "pay" ? `<div class="pcard cpcard" id="cpbox" style="margin:12px 0 0">${cpHtml(s)}</div>` : ""}
    ${isSend ? `<button class="gadd" onclick="openCards()">${cd ? `<span class="gmini">${cardArt(cd, null, "", true)}</span><div><b>${t("g_card")}</b><em>${GC_TITLE[cd.cat]}</em></div>` : `${IC_GIFT2}<b>${t("g_cardadd")}</b>`}<i>›</i></button>` : ""}</div>`,
    `<button class="btn" onclick="nextStep()">${t("go2")}${NXT}</button>`);
}
/* লেনদেনের PIN ঘরের পাশে ফিঙ্গারপ্রিন্ট (প্রোফাইল থেকে চালু করা থাকলে) */
async function txBio() {
  const s = S.sheet, N = cap().NativeBiometric; hap();
  if (!s || s.busy || s.step !== 3) return;
  if (!N || !bioOn()) { toast(t("fpoff")); return; }
  try {
    await N.verifyIdentity({reason: t("bioR"), title: "FuNPaY", useFallback: true});
    const c = await N.getCredentials({server: BIO_SERVER});
    if (S.sheet !== s || s.step !== 3) return;
    s.pin = digs(c.password, 6); verifyPin();
  } catch (e) { if (S.sheet === s) toast(t("fpbad")); }
}

/* পেমেন্ট / ক্যাশ আউটের ধাপ ১ (মার্চেন্ট / এজেন্ট বাছাই) — সেন্ড মানির মতো বিকাশ স্টাইল */
function bkStep1(s) {
  const cash = s.id === "cash";
  const tabs = cash ? `<div class="seg2" style="margin:0 0 10px"><button class="on">${t("agent")}</button><button onclick="hap();toast(t('soon'))">${t("atm")}</button></div>` : "";
  const search = `<div class="pcard srcc"><div class="fld sf">${ic("srch")}<input id="f1" maxlength="20" placeholder="${t(cash ? "sag" : "smr")}" value="${esc(s.v)}" autocomplete="off" oninput="srchIn(this)"></div><div class="err" id="er">${esc(s.err)}</div></div>`;
  const tl = (ico, lbl, js) => `<button class="tl" onclick="${js}"><span>${ic(ico)}</span><b>${lbl}</b></button>`;
  const tiles = `<div class="tl3">${tl("srch", t("tnum"), "document.getElementById('f1').focus()")}${tl("qr", t("scanqr"), `openQR('scan','${s.id}')`)}</div>`;
  return wrapPage(s, t(s.id), "backStep()", `${tabs}${search}${tiles}<div class="pcard lst"><p class="lh">${t(cash ? "lagent" : "lpay")}</p><div id="clist">${contactRows(s)}</div></div>`,
    `<button class="btn" onclick="nextStep()">${t("next")}${NXT}</button>`);
}


/* =====================================================================
   v2.27 — KYC: ফেস ভেরিফিকেশন নতুন করে (ইংরেজি লেখা, ছোট মুখের গাইড, স্মুথ অ্যানিমেশন),
   ৮৫% অটো / ৭০–৮৫% রিভিউ / ৭০ এর নিচে আবার ছবি (৩ বার), ভালো মুখ মেলানো, ব্যাক = NID সামনে,
   গ্যালারির অনুমতি। (এই ব্লক সবার শেষে বসে, তাই একই নামের আগের ফাংশন বদলে দেয়)
   ===================================================================== */
Object.assign(T.en, {
  k_title: "Verification (KYC)", k_face: "Face Verification", k_front: "NID Front", k_back: "NID Back",
  k_dr: "Turn your face to the right", k_dl: "Turn your face to the left", k_du: "Look up a little", k_dd: "Look down a little", k_db: "Blink your eyes twice",
  k_fload: "Getting ready…", k_fcen: "Keep your face inside the oval", k_fhold: "Hold still…", k_fnone: "Face not visible, come into the frame",
  k_fok: "Face scan complete", k_frs: "Time is up, starting again", k_ffb: "Face scan could not start (internet needed). Tap the button to take a photo",
  k_m_h: "Matching your face", k_m_l1: "Getting face matching ready…", k_m_l2: "Reading the photo on your NID…", k_m_l3: "Comparing with your selfie…", k_m_l4: "Checking your face scan…",
  k_m_okh: "Face verified", k_m_oks: "Your face matches your NID photo. Enter your PIN to open your account.",
  k_m_rvh: "Under review", k_m_rvs: "Your face match is {p}%. Our support team will review it and give you the result very soon.",
  k_m_rvs2: "Our support team will review your details and give you the result very soon.",
  k_m_lowh: "Face did not match", k_m_lows: "Fix the points below and take your selfie again.",
  k_m_finh: "Very low match", k_m_finp: "Your face match with your ID card is very low ({p}%). Our support team will check it manually and give you the result very soon.",
  k_m_fin0: "We could not match your face with your ID card. Our support team will check it manually and give you the result very soon.",
  k_m_nmh: "Check pending", k_m_nm: "The automatic face check could not run. Our support team will check your photos manually and give you the result very soon.",
  k_m_try: "Take selfie again", k_m_card: "Retake NID", k_m_go: "Continue", k_m_att: "Attempt", k_m_pct: "Match",
  k_wh: "Submitted, under review", k_ws: "Our support team is checking your NID and face photos. You will get the result by message very soon.",
  k_nf_sub: "Your NID and face photos were submitted. Our support team will review them and tell you the result very soon.",
  k_us0: "NID FRONT IMAGE", k_us1: "NID BACK IMAGE", k_us2: "FACE IMAGE", k_us3: "SUBMIT DETAILS",
  k_err2: "Something went wrong. Please try again.",
  k_galh: "Allow gallery access", k_gald: "FuNPaY needs access to your photos so you can choose a picture from your gallery.", k_galb: "Allow", k_galn: "Not now",
  galh: "Allow gallery access", gald: "FuNPaY needs access to your photos so you can choose a picture from your gallery.", galb: "Allow", galn: "Not now"
});
Object.assign(T.bn, {galh: "গ্যালারির অনুমতি দিন", gald: "গ্যালারি থেকে ছবি বাছতে FuNPaY-কে আপনার ছবিগুলো দেখার অনুমতি দিন।", galb: "অনুমতি দিন", galn: "এখন না"});

/* ----- গ্যালারির অনুমতি: ছবি বাছার আগে অ্যাপের ভেতরেই আগে চেয়ে নেয় (একবার দিলে আর জিজ্ঞেস করে না) ----- */
let KGAL = false; try { KGAL = localStorage.getItem("fp_gal") === "1"; } catch (e) {}
function galAsk(cb) {
  if (KGAL) { cb(); return; }
  if (document.getElementById("galq")) return;
  const d = document.createElement("div"); d.id = "galq"; d.className = "galq";
  d.innerHTML = `<div class="galb"><div class="gali">${ic("gal")}</div><h3>${t(window.__kyc ? "k_galh" : "galh")}</h3><p>${t(window.__kyc ? "k_gald" : "gald")}</p><button class="galy" id="galy">${t(window.__kyc ? "k_galb" : "galb")}</button><button class="galn" id="galn">${t(window.__kyc ? "k_galn" : "galn")}</button></div>`;
  document.body.appendChild(d); hap();
  const close = () => { d.classList.add("out"); setTimeout(() => d.remove(), 220); };
  d.querySelector("#galn").onclick = () => { hap(); close(); };
  d.querySelector("#galy").onclick = async () => {
    hap(); try { const F = cap().Filesystem; if (F && F.requestPermissions) await F.requestPermissions(); } catch (e) {}
    KGAL = true; try { localStorage.setItem("fp_gal", "1"); } catch (e) {}
    close(); cb();
  };
}

/* ----- ছবি কতটা পরিষ্কার (ঝাপসা নয়) তার মাপ: সবচেয়ে ভালো সেলফি বাছতে ----- */
function kSharp(v) {
  try {
    const W = v.videoWidth || v.naturalWidth || v.width, H = v.videoHeight || v.naturalHeight || v.height, c = document.createElement("canvas"); c.width = 96; c.height = 120;
    const g = c.getContext("2d", {willReadFrequently: true}); g.drawImage(v, W * .25, H * .12, W * .5, H * .62, 0, 0, 96, 120);
    const d = g.getImageData(0, 0, 96, 120).data, gr = new Float32Array(96 * 120);
    for (let i = 0, j = 0; j < gr.length; i += 4, j++) gr[j] = d[i] * .3 + d[i + 1] * .59 + d[i + 2] * .11;
    let a = 0, b = 0, n = 0; for (let y = 1; y < 119; y++) for (let x = 1; x < 95; x++) { const i = y * 96 + x, l = 4 * gr[i] - gr[i - 1] - gr[i + 1] - gr[i - 96] - gr[i + 96]; a += l; b += l * l; n++; }
    return b / n - (a / n) * (a / n);
  } catch (e) { return 0; }
}

/* ----- মুখ খোঁজা (কম আলো/ঝাপসাতেও পেতে একাধিক উপায়) ----- */
async function kDet(f, input, kind, mc) {
  const o = kind === "tiny" ? new f.TinyFaceDetectorOptions({inputSize: 416, scoreThreshold: mc || .3}) : new f.SsdMobilenetv1Options({minConfidence: mc || .3, maxResults: 6});
  const all = await f.detectAllFaces(input, o).withFaceLandmarks().withFaceDescriptors(); if (!all || !all.length) return null;
  all.sort((a, b) => b.detection.score * b.detection.box.area - a.detection.score * a.detection.box.area);
  const r = all[0], bx = r.detection.box; return {desc: Array.from(r.descriptor), score: r.detection.score, box: {x: bx.x, y: bx.y, width: bx.width, height: bx.height}};
}
async function kSelfieDet(f, shot, frs) {
  const sim = await kImg(shot);
  let s = await kDet(f, sim, "ssd"); if (!s) s = await kDet(f, sim, "tiny"); if (!s) s = await kDet(f, sim, "ssd", .12);
  if (s) return {s, sim};
  for (const fr of (frs || [])) { try { const im = await kImg(fr); const q = (await kDet(f, im, "ssd")) || (await kDet(f, im, "tiny")); if (q) return {s: q, sim: im}; } catch (e) {} }
  return {s: null, sim};
}
function kEnh(c) { try { const o = document.createElement("canvas"); o.width = c.width; o.height = c.height; const g = o.getContext("2d"); g.filter = "contrast(1.3) brightness(1.08) saturate(.7)"; g.drawImage(c, 0, 0); return o; } catch (e) { return c; } }
/* NID কার্ডের মুখ: একাধিক কাটা/উজ্জ্বল করা কপি থেকে একাধিক "ছাপ", পরে সেলফির সাথে সবচেয়ে ভালো জোড়া নেওয়া হয় */
async function kCardFace(f, src) {
  const im = await kImg(src), W = im.naturalWidth, H = im.naturalHeight; let base = im, r = await kDet(f, im, "ssd");
  if (!r) { base = kCrop(im, {x: 0, y: 0, w: W * .55, h: H}, 1000); r = await kDet(f, base, "ssd"); }
  if (!r) r = await kDet(f, base, "ssd", .12);
  if (!r) r = await kDet(f, base, "tiny", .2);
  if (!r) return null;
  const descs = [r.desc]; let best = r, bb = base;
  const c2 = kCrop(base, kGrow(r.box, 1.7), 480);
  try { const r2 = await kDet(f, c2, "ssd"); if (r2 && r2.score >= r.score - .12) { best = r2; bb = c2; descs.push(r2.desc); } } catch (e) {}
  try { const r3 = await kDet(f, kEnh(c2), "ssd"); if (r3 && r3.score >= .5) descs.push(r3.desc); } catch (e) {}
  try { const r4 = await kDet(f, kCrop(base, kGrow(r.box, 2.1), 600), "ssd"); if (r4 && r4.score >= .5) descs.push(r4.desc); } catch (e) {}
  const q = kQual(bb, best.box), th = kCrop(bb, kGrow(best.box, 1.5), 160).toDataURL("image/jpeg", .82);
  return {desc: best.desc, descs, thumb: th, q, score: best.score};
}
async function kMatchRun() {
  if (K.mrun) return; K.mrun = true; const id = ++K.mid, live = () => K.step === "match" && K.mid === id;
  const R = {st: "low", pct: 0, rs: [], card: K.cardThumb || "", self: "", cardBad: false, d: null};
  const fin = () => { if (!live()) return; K.mres = R; K.mrun = false; hap(R.st === "ok" ? "MEDIUM" : "HEAVY"); kycRender(); };
  try {
    kMs("k_m_l1"); const f = await kFA(); if (!live()) return;
    if (!f) { R.st = "nomodel"; K.desc = null; return fin(); }
    kMs("k_m_l2");
    if (!K.cardDesc) { const c = await kCardFace(f, K.front); if (!live()) return; if (c) { K.cardDesc = c.desc; K.cardDescs = c.descs; K.cardThumb = c.thumb; K.cardQ = c.q; } }
    R.card = K.cardThumb || "";
    kMs("k_m_l3");
    const sf = await kSelfieDet(f, K.selfie, K.live && K.live.fr); if (!live()) return;
    const s = sf.s, sim = sf.sim;
    if (s) R.self = kCrop(sim, kGrow(s.box, 1.5), 160).toDataURL("image/jpeg", .82);
    kMs("k_m_l4");
    const sw = {ok: false, n: 0, max: 0}, sds = s ? [s.desc] : [];
    if (s && K.live && K.live.ok) {
      for (const fr of K.live.fr) {
        if (!live()) return;
        try { const im = await kImg(fr); let q = await kDet(f, im, "tiny"); if (!q) q = await kDet(f, im, "ssd"); if (!q) continue;
          const dd = kDist(q.desc, s.desc); sw.n++; sw.max = Math.max(sw.max, dd); if (dd <= KM.SWAP && q.score >= .6 && sds.length < 5) sds.push(q.desc); } catch (e) {}
      }
      sw.ok = sw.n >= 2 && sw.max <= KM.SWAP;
    }
    K.live = Object.assign({}, K.live, {swap_ok: sw.ok, swap_n: sw.n, swap_max: Math.round(sw.max * 1000) / 1000});
    const cds = K.cardDesc ? (K.cardDescs && K.cardDescs.length ? K.cardDescs : [K.cardDesc]) : [];
    if (cds.length && s) {
      let bd = 9, bc = 0, bs = 0; cds.forEach((cd, i) => sds.forEach((sd, j) => { const dd = kDist(cd, sd); if (dd < bd) { bd = dd; bc = i; bs = j; } }));
      R.d = bd; R.pct = kFacePct(bd); K.desc = {card: kRound(cds[bc]), selfie: kRound(sds[bs])};
    } else K.desc = null;
    const liveOn = !!(K.live && K.live.ok);
    if (R.d === null) R.st = "low";
    else if (liveOn && !sw.ok) R.st = "low";
    else if (R.pct >= KM.AUTO) R.st = liveOn ? "ok" : "review";
    else if (R.pct >= KM.REVIEW) R.st = "review";
    else R.st = "low";
    if (R.st === "low") {
      const rs = R.rs;
      if (!s) rs.push("k_r_noface");
      else {
        const q = kQual(sim, s.box);
        if (q.mean < 70) rs.push("k_r_dark"); else if (q.mean > 205 || q.clip > .22) rs.push("k_r_bright");
        if (q.sharp < 20) rs.push("k_r_blur");
        if (s.box.width / (sim.naturalWidth || sim.width) < .2) rs.push("k_r_far");
        if (s.score < .8) rs.push("k_r_cover");
      }
      if (!K.cardDesc) { rs.push("k_r_card"); R.cardBad = true; }
      else if (K.cardQ && (K.cardQ.clip > .25 || K.cardQ.sharp < 12 || K.cardQ.mean < 55)) { rs.push("k_r_cardq"); R.cardBad = true; }
      if (liveOn && s && !sw.ok) rs.push(sw.n < 2 ? "k_r_live" : "k_r_swap");
      if (!rs.length) rs.push("k_r_diff");
      K.tries++;
    }
    return fin();
  } catch (e) {
    console.log("match", e && e.message); R.st = "nomodel"; K.desc = null; return fin();
  } finally { if (K.mid === id) K.mrun = false; }
}
/* মিল পাতা: ৮৫%+ এ % দেখানো হয় না (শুধু টিক); ৮৫ এর নিচে % দেখায়; "অ্যাডমিন" শব্দ নেই; ইউজারের "পাঠান" চাপা লাগে না */
function kMatch() {
  const R = K.mres, th = (src, cls) => `<div class="kmf${cls || ""}">${src ? `<img src="${src}" alt="">` : kic("face")}</div>`;
  if (!R) return `<div class="kw">${kTop(t("k_face"), "", 3)}<div class="kbody"><div class="kcard kc1 kmx"><div class="kmp">${th(K.cardThumb, " sc")}<i class="kml"></i>${th("", " sc")}</div><h2>${t("k_m_h")}</h2><p id="kmst">${t("k_m_l1")}</p><div class="kbar"><i class="kmind"></i></div></div></div></div>`;
  const ok = R.st === "ok", rv = R.st === "review", nm = R.st === "nomodel", low = R.st === "low", fin = low && K.tries >= KM.TRIES;
  const hide = R.d === null || R.pct >= KM.AUTO, pc = R.d === null ? 0 : Math.round(R.pct);
  const col = ok ? "#12a15b" : rv || fin ? "#e8a20c" : nm ? "#8b8590" : "#e5484d";
  const h = ok ? "k_m_okh" : rv ? "k_m_rvh" : nm ? "k_m_nmh" : fin ? "k_m_finh" : "k_m_lowh";
  const sub = ok ? t("k_m_oks") : rv ? (hide ? t("k_m_rvs2") : t("k_m_rvs").replace("{p}", pc)) : nm ? t("k_m_nm") : fin ? (R.d === null ? t("k_m_fin0") : t("k_m_finp").replace("{p}", pc)) : t("k_m_lows");
  const mid = ok ? `<div class="kmrw kmok">${kRing(100, col)}<span>${kTickI.replace('stroke="#fff"', 'stroke="#12a15b"')}</span></div>` : nm ? `<div class="kmrw">${kRing(0, col)}<b style="color:${col}">—</b></div>`
    : `<div class="kmrw">${kRing(hide ? 0 : R.pct, col)}<b style="color:${col}">${hide ? "—" : pc + "%"}</b></div>`;
  const why = low && !fin ? `<div class="kmwy">${R.rs.map(k => `<div class="kmri">${kic("info") || ""}<span>${t(k)}</span></div>`).join("")}</div>` : "";
  const meta = low && !fin ? `<small class="kmt">${t("k_m_att")} ${Math.min(K.tries, KM.TRIES)}/${KM.TRIES}${hide ? "" : " · " + t("k_m_pct") + " " + pc + "%"}</small>` : "";
  const btns = low && !fin ? `<button class="kbtn" onclick="kMatchRetry(0)">${t("k_m_try")}</button>${R.cardBad ? `<button class="klk" onclick="kMatchRetry(1)">${t("k_m_card")}</button>` : ""}`
    : `<button class="kbtn" onclick="kMatchGo()">${t("k_m_go")}</button>`;
  return `<div class="kw">${kTop(t("k_face"), "kBack()", 3)}<div class="kbody"><div class="kcard kc1 kmx">
    <div class="kmp">${th(R.card)}<div class="kmc" style="--c:${col}">${mid}</div>${th(R.self)}</div>
    <h2>${t(h)}</h2><p>${sub}</p>${meta}${why}</div></div>
    <div class="kbtm">${btns}</div></div>`;
}

/* ----- ব্যাক: NID এর ছবির ধাপের পর (তথ্য, মুখ, মিল, PIN) যেখানেই ব্যাক চাপুক, আবার NID সামনের ছবি তোলার জায়গায় ----- */
function kToFront() {
  K.pv = ""; K.reading = false; K.front = K.back = K.selfie = ""; K.pre = {}; K.p1 = K.p2 = null; K.auto = false; K.vbusy = false;
  K.live = null; K.cardOnly = false; K.mres = null; K.mrun = false; K.mid++; K.cardDesc = null; K.cardDescs = null; K.cardThumb = ""; K.cardQ = null; K.desc = null; K.rep = null; K.redo = false; K.err = "";
  K.step = "front";
}
function kBack() {
  if (document.getElementById("kpk")) { kPkClose(); return; }
  hap();
  if (K.busy && K.step !== "face") return;
  const s = K.step;
  if (s === "info" && K.ipg === 1 && !K.reading) { K.ipg = 0; kycRender(); return; }
  if (s === "front") { if (K.pv) { K.pv = ""; kycRender(); return; } if (K.cardOnly) { K.cardOnly = false; K.step = "match"; kycRender(); return; } if (K.redo) { K.redo = false; K.step = "back"; kycRender(); return; } K.flow = false; K.step = "intro"; }
  else if (s === "back") { K.pv = ""; K.step = "front"; }
  else if (s === "info" || s === "face" || s === "pin") { if (s === "pin" && K.busy) return; kToFront(); }
  else if (s === "match") { if (K.mrun) return; kToFront(); }
  else return;
  kycRender();
}

/* ----- ছোট অ্যানিমেটেড মুখ: যা করতে বলা হয় সে নিজেই করে দেখায় ----- */
const KGUIDE = '<svg class="kgf" viewBox="0 0 64 64" aria-hidden="true"><path class="gs" d="M10 64c1-10 9-14 22-14s21 4 22 14z"/><ellipse class="gk" cx="32" cy="30" rx="16.5" ry="20"/><g class="gf"><path class="gb" d="M21.5 24.6q3.2-2.2 6.4-.4M36.1 24.2q3.2-1.8 6.4.4"/><g class="ge"><ellipse cx="25.3" cy="30.2" rx="2.7" ry="3.1"/><ellipse cx="38.7" cy="30.2" rx="2.7" ry="3.1"/></g><path class="gn" d="M32 31.5v6q-2 1.6-3.4.6"/><path class="gm" d="M26.5 42.6q5.5 4.2 11 0"/></g><path class="gr" d="M15 28c.2-11.5 7-17.5 17-17.5S48.8 16.5 49 28c-3.8-5.2-9.2-7.8-17-7.8S18.8 22.8 15 28z"/></svg>';
function kFaceUI() {
  const wr = document.getElementById("kwr"), c = KFc.ord[KFc.st];
  for (let i = 0; i < 3; i++) { const e = document.getElementById("kdt" + i); if (e) e.className = KFc.done[i] ? "dn2" : (i === KFc.st ? "on" : ""); }
  KFc.ord.forEach((s, i) => {
    if (s === "blink") return;
    const a = document.getElementById("kra" + KDM[s]); if (!a) return;
    a.setAttribute("class", "kra" + (KFc.done[i] ? " dn2" : (i === KFc.st ? " on" : "")));
    const f = a.querySelector(".krf"); if (f && !KFc.done[i] && i !== KFc.st) f.style.strokeDasharray = "0 100";
  });
  const n = KFc.done.filter(Boolean).length;
  if (wr) { wr.classList.toggle("blk", c === "blink"); if (n > (KFc.bn || 0)) { wr.classList.remove("burst"); void wr.offsetWidth; wr.classList.add("burst"); } }
  KFc.bn = n;
  const gd = document.getElementById("kgd"), dr = document.getElementById("kdir");
  if (gd && gd.dataset.c !== (c || "")) {
    gd.dataset.c = c || ""; const sv = gd.querySelector("svg"); if (sv) sv.setAttribute("class", "kgf " + (c || ""));
    if (dr) { dr.classList.remove("pop"); void dr.offsetWidth; dr.classList.add("pop"); }
  }
  const a = document.getElementById("kfarr");
  if (a) { a.className = "kfarr" + (c ? " " + c : " h"); a.innerHTML = c && c !== "blink" ? `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="${KARR[c]}"/></svg>` : ""; }
}
/* অগ্রগতি: শুধু "এত % হয়েছে" (মোট ৫ ধাপের মিলিত), প্রতি ফ্রেমে নরমভাবে এগোয় */
function kFaceProg(p) {
  KFc.pt = Math.max(0, Math.min(1, p || 0));
  if (KFc.pt === 0) KFc.pd = 0;
  if (!KFc.raf) KFc.raf = requestAnimationFrame(kFaceAnim);
}
function kFaceAnim() {
  KFc.raf = 0;
  const cur = KFc.pd || 0, d = KFc.pt - cur;
  KFc.pd = Math.abs(d) < .004 ? KFc.pt : cur + d * .18;
  const nd = KFc.done.filter(Boolean).length, tot = Math.min(1, (nd + KFc.pd) / 3), x = Math.round(tot * 100), s = KFc.ord[KFc.st];
  const b = document.getElementById("kfp"), c = document.getElementById("kfpc");
  if (b) b.style.width = tot * 100 + "%";
  if (c) c.textContent = x + "%";
  if (s && s !== "blink") { const a = document.getElementById("kra" + KDM[s]), f = a && a.querySelector(".krf"); if (f) f.style.strokeDasharray = KFc.pd * 100 + " 100"; }
  if (KFc.pd !== KFc.pt) KFc.raf = requestAnimationFrame(kFaceAnim);
}
function kFace() {
  const pv = K.pv; if (!pv) KFc.ord = kFaceOrd();
  const dots = [0, 1, 2].map(i => `<i id="kdt${i}"></i>`).join("");
  return `<div class="kcam kn kf2">${kBg()}
    <div class="ktp"><button class="kbk" onclick="kBack()">${kBk}</button><b class="ktt">${t("k_face")}</b><em>3/4</em></div>${kLogo()}
    <div class="kwr ov" id="kwr"><div class="kwin">${pv ? `<img class="kpvi" src="${pv}" alt="">` : kVid().replace('id="kvid"', 'id="kvid" class="mir"')}</div>
      ${pv ? "" : `<svg class="krg" viewBox="0 0 100 128" aria-hidden="true">${kRingArc(0, -45, 45)}${kRingArc(1, 45, 135)}${kRingArc(2, 135, 225)}${kRingArc(3, 225, 315)}</svg>`}</div>
    <div class="kov"><u id="kou" class="${pv ? "dn" : ""}"></u><div class="kfok">${kTickI}</div></div><div class="kcnt" id="kcnt"></div>${pv ? "" : '<div class="kfarr h" id="kfarr"></div>'}
    <div class="kbt">${pv ? `<div class="krow"><button class="kgh" onclick="kRetake()">${t("k_retake")}</button><button class="kgo" onclick="kFaceUse()">${t("k_use")}</button></div>`
      : `<div class="kdir pop" id="kdir"><div class="kgd" id="kgd">${KGUIDE}</div><div class="kdt2"><b id="kst" class="kfm">${t("k_fload")}</b><span class="kdots d5">${dots}</span></div></div>
         <div class="kpg"><div class="kfbar"><i id="kfp"></i></div><div class="kfpc" id="kfpc">0%</div></div><div class="ksh"><span class="kgal sp"></span><button class="kshut" aria-label="${t("k_snap")}" onclick="kFaceCount()"><i></i></button><span class="kgal sp"></span></div>`}
      <small class="knc" id="knc"></small></div></div>`;
}

/* ----- জমার পরের পাতায় ৮৫% এর ওপরের স্কোর দেখানো হয় না ----- */
function kSumHtml() {
  const m = K.sum; if (!m) return "";
  const cap = ["k_c1", "k_c2", "k_c3"];
  const th = (src, i) => `<div class="kx3"><div class="kxi"><img src="${src}" alt=""><i>${kTickI}</i></div><span>${t(cap[i])}</span></div>`;
  const chip = (tx) => `<span class="kxc"><i>${kTickI}</i>${tx}</span>`;
  const sc = m.pct !== null && m.pct !== undefined && !m.auto ? `<div class="kxcs">${chip(t("k_fmatch") + " " + m.pct + "%")}</div>` : "";
  return `<div class="kxs"><div class="kx3s">${m.th.map(th).join("")}</div>${sc}<div class="kxth"><img src="icons/logo.png" alt=""><b>${t("k_thx")}</b></div></div>`;
}


/* =====================================================================
   v2.32 — ভাগ ১: লগইন লেআউট, আমার QR, কনফার্ম (২ সেকেন্ড হোল্ড), সফল পেজ, স্মুথ অ্যানিমেশন,
   রিফ্রেশ (ছোট গোল), লোডিং লোগো, ব্যালেন্স অ্যানিমেশন, ফিঙ্গারপ্রিন্ট সুইচ (অন/অফ এ PIN)
   ===================================================================== */
Object.assign(T.bn, {bioOffT: "ফিঙ্গারপ্রিন্ট বন্ধ করুন", bioOffD: "বন্ধ করতে আপনার PIN দিন", bioOffY: "বন্ধ করুন"});
Object.assign(T.en, {bioOffT: "Turn off fingerprint", bioOffD: "Enter your PIN to turn it off", bioOffY: "Turn off"});
/* লোডিং লোগো: নেটওয়ার্ক ধীর হলে (০.৬৫ সেকেন্ডের বেশি লাগলে) মাঝখানে লোগো */
let LDN = 0, LDT = 0, LDF = 0;
function ldOn() { LDN++; if (LDN === 1) { clearTimeout(LDT); LDT = setTimeout(() => { if (LDN > 0) ldShow(); }, 650); } }
function ldOff() { LDN = Math.max(0, LDN - 1); if (LDN === 0) { clearTimeout(LDT); ldHide(); } }
function ldShow() {
  let e = document.getElementById("fpld");
  if (!e) { e = document.createElement("div"); e.id = "fpld"; e.innerHTML = '<div class="ldb"><img src="icons/logo-pink.png" alt=""></div>'; document.body.appendChild(e); }
  void e.offsetWidth; e.classList.add("on");
  clearTimeout(LDF); LDF = setTimeout(() => { LDN = 0; ldHide(); }, 25000);
}
function ldHide() { clearTimeout(LDF); const e = document.getElementById("fpld"); if (e) e.classList.remove("on"); }
/* সুইচ: আগে পুরোনো সুইচটাই স্লাইড করে, তারপর পেজ আপডেট (লাফায় না) */
function swFlip(on) {
  const sw = document.querySelector(".sw");
  if (sw) { sw.classList.toggle("on", on); setTimeout(() => { if (S.auth && S.tab === "mine" && !S.sheet) render(); }, 380); }
  else if (S.auth && S.tab === "mine") render();
}
async function disableBio() {
  const s = S.sheet; if (!s || s.busy) return;
  const ph = S.auth && S.me ? S.me.phone : S.phone, N = cap().NativeBiometric;
  const pin = digs((document.getElementById("f3") || {}).value, 6);
  const fail = (m) => { s.busy = false; setBusy(false); if (S.sheet !== s) return; s.err = m; renderSheet(); shakeBox(); };
  if (!isPin(pin)) return fail(t("wp"));
  s.busy = true; setBusy(true);
  try { await signIn(ph, pin); } catch (e) { return fail(errMsg(e)); }
  try { if (N) await N.deleteCredentials({server: BIO_SERVER}); } catch (e) {}
  try { localStorage.removeItem("fpbio"); } catch (e) {}
  s.busy = false; setBusy(false); closeS(); setTimeout(() => swFlip(false), 300);
}
/* আমার QR: প্রোফাইল (H) নেই, নিচে ফাঁকা নেই */
function qrHtml() {
  const s = S.sheet, m = S.me || {};
  if (s.tab === "scan") return scanHtml(s);
  return wrapPage(s, t("myqr"), "closeS()", `<div class="qpage"><div class="qdeco" aria-hidden="true"><i class="d1"></i><i class="d2"></i><i class="d3"></i>${[1, 2, 3, 4, 5, 6].map(n => `<img class="qwm q${n}" src="icons/logo.png" alt="">`).join("")}</div><div class="qcard"><b>${esc(m.name || t("acct"))}</b><span>${esc(m.phone)} ${agBadge()}</span><div class="qwrap">${qrSvg("funpay:" + m.phone)}</div><small>${t("qrhint")}</small></div><div class="qfoot"><img src="icons/logo.png" alt=""><b>FuNPaY</b><span>${t("tag")}</span></div></div>`,
    `<button class="btn" onclick="qTab('scan')">${ic("qr")}${t("scanqr")}</button>`);
}


/* =====================================================================
   v2.33 — ভাগ ২: কিবোর্ড নিয়ম (উপরে IIFE তে), সেন্ড মানি ধাপ ১ (টাইল/সাম্প্রতিক/সব কন্টাক্টস),
   কন্টাক্ট লোড, প্রিয় নাম্বার (PIN সহ), রিকোয়েস্ট মানি, লম্বা QR বাটন, টাচ/ফেস আইডি সেটআপ পেজ,
   SMS লগইনের পর ফিঙ্গার সেট এ PIN।   (SQL: backend/update-v2.33.sql)
   নতুন পেজগুলো আলাদা স্তরে (#sheet2) স্ট্যাক হয়, তাই পেছনের পেজ নড়ে না, শুধু স্মুথ স্লাইড।
   ===================================================================== */
Object.assign(T.bn, {
  sname: "নাম বা নাম্বার দিন", v_recent: "সাম্প্রতিক", v_all: "সব কন্টাক্টস", v_cont: "কন্টাক্টস", v_add: "যোগ করুন",
  v_used: "আপনি ব্যবহার করেছেন", v_lim: "সর্বোচ্চ ফ্রি সেন্ড মানি লিমিট", v_myfav: "আমার প্রিয় নাম্বারসমূহ", v_rm: "বাদ দিন",
  v_chgfree: "চার্জ ফ্রি মাসিক লেনদেনের লিমিট", v_cfmT: "প্রিয় নাম্বার নিশ্চিত করুন", v_note: "নোট",
  v_noteAdd: "প্রিয় নাম্বার যোগ করতে পিন নাম্বার দিন এবং ২৫,০০০ টাকা পর্যন্ত সেন্ড মানি করুন চার্জ ফ্রি।",
  v_noteRm: "প্রিয় নাম্বার বাদ দিতে পিন নাম্বার দিন।", v_info: "প্রিয় নাম্বারে প্রতি মাসে ২৫,০০০ টাকা পর্যন্ত সেন্ড মানি চার্জ ফ্রি।",
  v_nofav: "আপনার কোনো প্রিয় নাম্বার নেই", v_already: "এই নাম্বার আগেই প্রিয় তালিকায় আছে",
  v_perm: "কন্টাক্ট দেখতে অনুমতি দিন", v_permb: "অনুমতি দিন", v_retry: "আবার চেষ্টা করুন", v_load: "লোড হচ্ছে…",
  v_rq: "রিকোয়েস্ট মানি", v_rqs: "রিকোয়েস্টসমূহ", v_grpT: "গ্রুপ", v_selc: "অনুগ্রহ করে কন্টাক্টস সিলেক্ট করুন",
  v_rqIn: "রিসিভ করা রিকোয়েস্ট", v_rqOut: "সেন্ড করা রিকোয়েস্ট",
  v_rqNoIn: "সম্প্রতি আপনি কোনো রিকোয়েস্ট মানি গ্রহণ করেননি।", v_rqNoOut: "সম্প্রতি আপনি কোনো রিকোয়েস্ট মানি করেননি।",
  v_pay: "পে করুন", v_decl: "বাতিল", v_cancel: "বাতিল করুন", v_pend: "অপেক্ষমাণ", v_paid: "পরিশোধিত", v_dcl: "বাতিল হয়েছে",
  v_rqfrom: "যার কাছে চাইবেন", v_rqNote: "রিকোয়েস্ট পাঠাতে পিন নাম্বার দিন।", v_rqDone: "রিকোয়েস্ট পাঠানো হয়েছে",
  v_rqDoneS: "প্রাপক অ্যাপে রিকোয়েস্টটি দেখতে পাবেন।", v_rqerr: "রিকোয়েস্ট সুবিধা এখনো চালু হয়নি। অ্যাডমিন update-v2.33.sql চালিয়ে নিন।",
  v_amtl: "পরিমাণ", v_people: "জন",
  v_bioT: "টাচ/ফেস আইডি", v_bioH: "টাচ/ফেস আইডি চালু করুন", v_bioS: "চালু করতে পছন্দের অপশন সিলেক্ট করুন", v_sel: "সিলেক্ট করুন",
  v_bioLT: "লগইন ও লেনদেন", v_bioLTd: "দ্রুত লগইন ও লেনদেন করতে ব্যবহার করুন", v_bioLim: "প্রযোজ্য সেবা ও লিমিট",
  v_bioL: "শুধু লগইন", v_bioLd: "দ্রুত লগইন করতে ব্যবহার করুন", v_bioN: "লেনদেন নিশ্চিত করতে ট্যাপ করে ধরে রাখার প্রয়োজন নেই",
  v_bioLimT: "লগইন ও লেনদেন বাছলে সেন্ড মানি, পেমেন্ট ও ক্যাশ আউট ফিঙ্গারপ্রিন্ট দিয়েই নিশ্চিত হবে।",
  v_bioTx: "ফিঙ্গারপ্রিন্ট দিয়ে নিশ্চিত করতে ট্যাপ করুন", v_bioTxF: "ফিঙ্গারপ্রিন্ট মেলেনি, এবার ধরে রাখুন"
});
Object.assign(T.en, {
  v_recent: "Recent", v_all: "All contacts", v_cont: "Contacts", v_add: "Add",
  v_used: "You have used", v_lim: "Max free Send Money limit", v_myfav: "My favorite numbers", v_rm: "Remove",
  v_chgfree: "Charge-free monthly transaction limit", v_cfmT: "Confirm favorite number", v_note: "Note",
  v_noteAdd: "Enter your PIN to add a favorite number, and send up to ৳25,000 with no charge.",
  v_noteRm: "Enter your PIN to remove this favorite number.", v_info: "Send Money to favorite numbers is charge-free up to ৳25,000 per month.",
  v_nofav: "You have no favorite numbers", v_already: "This number is already a favorite",
  v_perm: "Allow access to see your contacts", v_permb: "Allow", v_retry: "Try again", v_load: "Loading…",
  v_rq: "Request Money", v_rqs: "Requests", v_grpT: "Group", v_selc: "Please select contacts",
  v_rqIn: "Received requests", v_rqOut: "Sent requests",
  v_rqNoIn: "You have not received any money request recently.", v_rqNoOut: "You have not sent any money request recently.",
  v_pay: "Pay", v_decl: "Decline", v_cancel: "Cancel", v_pend: "Pending", v_paid: "Paid", v_dcl: "Cancelled",
  v_rqfrom: "Request from", v_rqNote: "Enter your PIN to send the request.", v_rqDone: "Request sent",
  v_rqDoneS: "The other person will see it in the app.", v_rqerr: "Request Money is not set up yet. Run update-v2.33.sql.",
  v_amtl: "Amount", v_people: "people",
  v_bioT: "Touch/Face ID", v_bioH: "Turn on Touch/Face ID", v_bioS: "Choose how you want to use it", v_sel: "Select",
  v_bioLT: "Login & transactions", v_bioLTd: "Use for quick login and transactions", v_bioLim: "Applicable services & limits",
  v_bioL: "Login only", v_bioLd: "Use for quick login", v_bioN: "No need to tap and hold to confirm transactions",
  v_bioLimT: "With Login & transactions, Send Money, Payment and Cash Out are confirmed with your fingerprint.",
  v_bioTx: "Tap to confirm with fingerprint", v_bioTxF: "Fingerprint did not match, press and hold now"
});

const PLUS = '<svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>';
const IC_FAVT = '<svg class="i" viewBox="0 0 24 24"><rect x="5" y="3.5" width="14" height="17" rx="2.2"/><path d="M12 8l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z"/><path d="M3 8h2M3 12h2M3 16h2"/></svg>';
const IC_REQ = '<svg class="i" viewBox="0 0 24 24"><path d="M6 3.5h9l3.5 3.5v13.5H6z"/><path d="M15 3.5V7h3.5M9 11h6M9 14.5h4"/></svg>';
const IC_AUTO = '<svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></svg>';
const FP_ART = '<svg class="v3fa" viewBox="0 0 160 160"><circle cx="80" cy="80" r="76" fill="#fbe6f0"/><rect x="50" y="20" width="60" height="118" rx="11" fill="#fff" stroke="#3a2a33" stroke-width="3"/><rect x="71" y="25" width="18" height="4" rx="2" fill="#3a2a33"/><g fill="none" stroke="#e2136e" stroke-width="3" stroke-linecap="round"><path d="M62 74c0-11 8-19 18-19s18 8 18 19"/><path d="M68 78c0-7 5-12 12-12s12 5 12 12v6"/><path d="M74 82c0-4 3-6 6-6s6 2 6 6v12"/><path d="M80 84v16"/><path d="M68 92c1 8 4 14 8 18"/><path d="M92 88c0 10-3 18-8 24"/></g></svg>';
const FAV_LIM = 25000;
S.subs = S.subs || []; S.cst = S.cst || ""; S.cerr = ""; S.cmap = S.cmap || new Map(); S.rq = S.rq || [];

/* ---------- স্ট্যাক পেজ (আলাদা স্তর #sheet2) ---------- */
function m2() { let e = document.getElementById("sheet2"); if (!e) { e = document.createElement("div"); e.id = "sheet2"; e.style.cssText = "position:absolute;width:0;height:0"; document.body.appendChild(e); } return e; }
const SUBR = {};
const subTop = () => S.subs[S.subs.length - 1];
function subDraw(s) { s.el.innerHTML = SUBR[s.id](s); s.fresh = false; }
function subOpen(o) {
  hap(); o.fresh = true; o.el = document.createElement("div"); m2().appendChild(o.el); S.subs.push(o); subDraw(o);
  if (o.focus) setTimeout(() => { if (subTop() === o) { const f = document.getElementById(o.focus); if (f) { try { f.focus(); } catch (e) {} } } }, 330);
  return o;
}
function subBack(n) {
  const s = subTop(); if (!s || s.closing) return; hap(); n = n || 1;
  for (let i = 1; i < n; i++) { const k = S.subs.length - 2; if (k >= 0) { S.subs[k].el.remove(); S.subs.splice(k, 1); } }
  s.closing = true; try { if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); } catch (e) {}
  const sh = s.el.querySelector(".sh"); if (sh) sh.classList.add("out");
  setTimeout(() => { s.el.remove(); const i = S.subs.indexOf(s); if (i >= 0) S.subs.splice(i, 1); }, 230);
}
function subShell(s, title, body, foot, cls) {
  return `<div class="sh pgx v3p${cls ? " " + cls : ""}${s.fresh ? "" : " re"}"><div class="box"><div class="ph"><button class="pb" aria-label="${t("back")}" onclick="subBack()">${ic("back")}</button><b>${title}</b><img src="icons/logo.png" alt=""></div><div class="pbody">${body}</div>${foot ? `<div class="pfoot">${foot}</div>` : ""}</div></div>`;
}
function v3shake(s) { const b = s.el.querySelector(".box"); if (!b) return; b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake"); hap("HEAVY"); }
function subQ(el) { const s = subTop(); if (!s) return; s.q = el.value; const l = s.el.querySelector(".v3list"); if (l) l.innerHTML = s.list(s); }

/* ---------- কন্টাক্ট লোড (অনুমতি চেয়ে, দুই ধরনের প্লাগইন ফরম্যাটই পড়ে) ---------- */
const cName = (ph) => S.cmap.get(ph) || "";
const cpGot = (v) => { try { if (v === undefined) return localStorage.getItem("fpcg") === "1"; if (v) localStorage.setItem("fpcg", "1"); else localStorage.removeItem("fpcg"); } catch (e) {} return false; };
async function loadContacts(force) {
  if (S.cst === "loading" || (S.cst === "ok" && !force)) return;
  const C = cap().Contacts;
  if (!C || !C.getContacts) { S.cst = "none"; cstRefresh(); return; }
  S.cst = "loading"; S.cerr = ""; cstRefresh();
  try {
    /* v2.48: অনুমতির উত্তরের ধরন (contacts / readContacts) যা-ই হোক, আগে সরাসরি পড়ার চেষ্টা; পড়া গেলে আর অনুমতি চাওয়া নয় */
    const anyG = (q) => !!q && Object.keys(q).some((k) => q[k] === "granted");
    const rd = async () => { try { return await C.getContacts({projection: {name: true, phones: true}}); } catch (e1) { return await C.getContacts({projection: {name: true, phones: true, image: false}}); } };
    let r = null, p = {}; try { p = await C.checkPermissions(); } catch (e) {}
    if (anyG(p) || cpGot()) { try { r = await rd(); } catch (e) { r = null; } }
    if (!r) {
      try { p = await C.requestPermissions(); } catch (e) { p = {}; }
      try { r = await rd(); } catch (e) { r = null; }
      if (!r) { cpGot(0); S.cst = "denied"; cstRefresh(); return; }
    }
    cpGot(1);
    const m = new Map(), me = S.me ? S.me.phone : "";
    (r.contacts || []).forEach(c => {
      const nm = (c.name && (c.name.display || [c.name.given, c.name.family].filter(Boolean).join(" "))) || c.displayName || "";
      (c.phones || c.phoneNumbers || []).forEach(q => { const ph = normPh(q.number || q.value || q); if (ph && ph !== me && !m.has(ph)) m.set(ph, nm); });
    });
    S.cmap = m; S.contacts = [...m].map(([ph, nm]) => ({ph, nm})).sort((a, b) => (a.nm || a.ph).localeCompare(b.nm || b.ph)); S.cst = "ok";
  } catch (e) { S.cst = "err"; S.cerr = String((e && e.message) || e || "").slice(0, 80); }
  cstRefresh();
}
function cstRefresh() {
  const s = S.sheet; if (s && s.id === "send" && s.step === 1 && !s.busy) { const l = document.getElementById("clist"); if (l) l.innerHTML = contactRows(s); }
  S.subs.forEach(x => { if (x.list) { const l = x.el.querySelector(".v3list"); if (l) l.innerHTML = x.list(x); } });
}
function cstBox() {
  const st = S.cst;
  if (st === "denied") return `<div class="v3pm"><p>${t("v_perm")}</p><button onclick="loadContacts(true)">${t("v_permb")}</button></div>`;
  if (st === "none") return `<p class="em">${t("g_nocont")}</p>`;
  if (st === "err") return `<div class="v3pm"><p>${t("g_nocont")}${S.cerr ? `<small>${esc(S.cerr)}</small>` : ""}</p><button onclick="loadContacts(true)">${t("v_retry")}</button></div>`;
  if (st === "ok") return `<p class="em">${t("g_nocon0")}</p>`;
  return `<div class="v3sk"><i></i><i></i><i></i><i></i></div>`;
}
const v3av = (nm, ph) => `<span class="avs">${avatar(nm, ph)}${isFav(ph) ? `<i class="stf">${STAR}</i>` : ""}</span>`;
function cRows(q, o) {
  o = o || {}; const ql = String(q || "").trim().toLowerCase();
  const l = S.contacts.filter(c => !ql || c.ph.includes(ql) || (c.nm || "").toLowerCase().includes(ql)).slice(0, 300);
  if (!l.length) return ql && S.cst === "ok" ? `<p class="em">${t("nomatch")}</p>` : cstBox();
  return l.map(c => `<div class="rr v3rr" onclick="${o.sel ? `subTog('${c.ph}')` : `subPick('${c.ph}')`}">${v3av(c.nm, c.ph)}<div><b>${esc(c.nm || c.ph)}</b><span>${c.nm ? esc(c.ph) : ""}</span></div>${o.sel ? `<i class="v3cb${o.sel.includes(c.ph) ? " on" : ""}">${tickSvg}</i>` : ""}</div>`).join("");
}
function subPick(ph) { const s = subTop(); if (!s) return; if (s.mode === "fav") favAsk("add", ph); else if (s.mode === "reqh") rqPick(ph); }
function subTog(ph) {
  const s = subTop(); if (!s || s.mode !== "reqg") return; hap(); const i = s.sel.indexOf(ph);
  if (i >= 0) s.sel.splice(i, 1); else if (s.sel.length >= 10) { toast(t("grpneed2")); return; } else s.sel.push(ph);
  s.el.querySelector(".v3list").innerHTML = s.list(s); const b = s.el.querySelector(".v3bar"); if (b) b.classList.toggle("on", s.sel.length > 0);
}
SUBR.clp = (s) => {
  const top = s.mode === "reqh" ? `<div class="v3tr"><button class="v3t" onclick="rqList()"><span>${IC_REQ}</span><b>${t("v_rqs")}</b></button><button class="v3t" onclick="rqGroup()"><span>${IC_GRP}</span><b>${t("v_grpT")}</b></button></div>` : "";
  const hd = s.mode === "reqg" ? `<p class="v3pre">${t("v_selc")}</p>` : "";
  return subShell(s, s.title, `<div class="v3s"><div class="fld sf">${ic("srch")}<input maxlength="20" placeholder="${t("sname")}" value="${esc(s.q)}" autocomplete="off" oninput="subQ(this)"></div></div>${top}${hd}<p class="v3h">${t(s.mode === "reqg" ? "v_cont" : "v_all")}</p><div class="v3list">${s.list(s)}</div>`,
    s.mode === "reqg" ? `<button class="v3bar${s.sel.length ? " on" : ""}" onclick="rqGNext()"><span>${t("g_next")}</span>${NXT}</button>` : "", "v3cl");
};

/* ---------- সেন্ড মানি ধাপ ১ ---------- */
function sendRows(s) {
  const q = (s.v || "").trim(), ql = q.toLowerCase(), g = s.grp;
  const m = (ph, nm) => !ql || ph.includes(ql) || String(nm || "").toLowerCase().includes(ql);
  const ck = (ph) => `<i class="v3cb${g && g.sel.includes(ph) ? " on" : ""}">${tickSvg}</i>`;
  const R = (ph, nm, clk) => { if (g && nm) g.names[ph] = nm; return `<div class="rr v3rr" onclick="${g ? `grpTog('${ph}')` : clk}">${v3av(nm, ph)}<div><b>${esc(nm || ph)}</b><span>${nm ? esc(ph) : ""}</span></div>${g ? ck(ph) : ""}</div>`; };
  let h = "";
  const rec = peopleFor("send").map(f => [f[0], f[1] || cName(f[0])]).filter(f => m(f[0], f[1]));
  if (isPh(q) && !rec.some(f => f[0] === q) && !S.cmap.has(q)) h += R(q, "", `pickNum('${q}')`);
  if (rec.length && !g) h += `<p class="v3h">${t("v_recent")}</p>` + rec.slice(0, 8).map(f => R(f[0], f[1], `pickNum('${f[0]}')`)).join("");
  const all = S.contacts.filter(c => m(c.ph, c.nm)).slice(0, 300);
  h += `<p class="v3h">${t("v_all")}</p>` + (all.length ? all.map(c => R(c.ph, c.nm, `pickNum('${c.ph}')`)).join("") : (ql && S.cst === "ok" ? `<p class="em">${t("nomatch")}</p>` : cstBox()));
  return h;
}
function v3num() { const f = document.getElementById("f1"); if (!f) return; hap(); f.setAttribute("inputmode", "numeric"); f.onblur = () => f.removeAttribute("inputmode"); f.blur(); setTimeout(() => { try { f.focus(); } catch (e) {} }, 40); }
function sendStep1(s) {
  const g = s.grp, n = g ? g.sel.length : 0;
  const search = `<div class="v3s"><div class="fld sf">${ic("srch")}<input id="f1" maxlength="20" placeholder="${t("sname")}" value="${esc(s.v)}" autocomplete="off" oninput="srchIn(this)"></div><div class="err" id="er">${esc(s.err)}</div></div>`;
  const tl = (ico, lbl, js) => `<button class="v3t" onclick="${js}"><span>${ico}</span><b>${lbl}</b></button>`;
  const qr = g ? "" : `<button class="qrbtn v3q" onclick="openQR('scan','send')">${ic("qr")}<span>${t("qrtap")}</span></button>`;
  const row = g ? `<div class="gsel"><b>${t("g_selc")}: ${n}/10</b><button onclick="grpOff()">${t("g_exit")}</button></div>${n ? `<div class="gchips">${g.sel.map(p => `<span onclick="grpTog('${p}')">${esc(g.names[p] || p)} ✕</span>`).join("")}</div>` : ""}`
    : `<div class="v3tr">${tl(IC_FAVT, `${t("g_fav")} (${S.fav.length})`, "favOpen()")}${tl(IC_REQ, t("v_rq"), "rqHome()")}${tl(IC_AUTO, t("autop") === "autop" ? "অটো পে" : t("autop"), "hap();toast(t('soon'))")}${tl(IC_GRP, t("g_grp"), "grpOn()")}</div>`;
  const h = wrapPage(s, g ? t("g_grp") : t("send"), "sbBack()", `${search}${qr}${row}<div class="pcard lst v3l"><div id="clist">${contactRows(s)}</div></div>`,
    `<button class="btn" onclick="nextStep()">${g ? t("g_next") + " (" + n + ")" : t("next")}${NXT}</button>`);
  return h.replace('class="sh pgx', 'class="sh pgx v3s1' + (g ? " v3g" : ""));
}
/* পেমেন্ট / ক্যাশ আউট ধাপ ১: ছোট চৌকো QR টাইলের বদলে লম্বা বাটন */
const _bk1 = bkStep1;
bkStep1 = function (s) {
  return _bk1(s).replace(/<div class="tl3">[\s\S]*?<\/div><div class="pcard lst">/, `<button class="qrbtn v3q" onclick="openQR('scan','${s.id}')">${ic("qr")}<span>${t("qrtap")}</span></button><div class="pcard lst">`);
};
function openS(id, pre, rn) { openS0(id, pre, rn); if (id === "send" && S.sheet && S.sheet.id === "send") { loadFav(); loadContacts(); } }

/* ---------- প্রিয় নাম্বার ---------- */
function favUsed() {
  const now = new Date(), set = new Set(S.fav.map(f => f.phone)); let u = 0;
  (S.tx || []).forEach(x => { if (x.type !== "send" || x.from_id !== S.uid || !set.has(x.to_phone)) return; const d = new Date(x.created_at); if (d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()) u += Number(x.amount) || 0; });
  return u;
}
function favOpen() { hap(); loadFav(); subOpen({id: "favs"}); }
function favInfo() { hap(); toast(t("v_info")); }
function favAdd() { if (S.fav.length >= 10) { toast(t("favmax")); return; } loadContacts(); subOpen({id: "favnum", v: "", err: "", focus: "fnum"}); }
function favPickC() { loadContacts(); subOpen({id: "clp", mode: "fav", title: t("g_fav"), q: "", list: (x) => cRows(x.q)}); }
/* v2.48: প্রিয় নাম্বার যোগ — নাম্বার দিন (১১ ডিজিট হলেই পিন চাইবে) অথবা কন্টাক্ট থেকে বাছুন */
Object.assign(T.bn, {fn_t: "প্রিয় নাম্বার যোগ করুন", fn_h: "মোবাইল নাম্বার দিন", fn_c: "কন্টাক্ট থেকে বাছুন", fn_bad: "সঠিক ১১ ডিজিটের নাম্বার দিন"});
Object.assign(T.en, {fn_t: "Add favorite number", fn_h: "Enter mobile number", fn_c: "Choose from contacts", fn_bad: "Enter a valid 11-digit number"});
SUBR.favnum = (s) => subShell(s, t("fn_t"), `<div class="v3ac"><p class="v3nl">${t("fn_h")}</p><div class="v3cd"><div class="fld big bka"><input id="fnum" type="tel" inputmode="numeric" maxlength="11" placeholder="01XXXXXXXXX" value="${esc(s.v)}" autocomplete="off" oninput="favNumIn(this)" onkeydown="if(event.key==='Enter'){event.preventDefault();favNumGo()}"></div><div class="err" id="fnerr">${esc(s.err)}</div></div><button class="v3t v3fc" onclick="favPickC()"><span>${IC_BOOK}</span><b>${t("fn_c")}</b></button></div>`,
  `<button class="btn" onclick="favNumGo()">${t("next")}${NXT}</button>`);
function favNumIn(el) {
  const s = subTop(); if (!s || s.id !== "favnum") return;
  const v = digs(el.value, 11); if (el.value !== v) el.value = v; s.v = v; s.err = ""; const e = document.getElementById("fnerr"); if (e) e.textContent = "";
  if (v.length === 11) { clearTimeout(s.tm); s.tm = setTimeout(() => { if (subTop() === s && s.v.length === 11) favNumGo(); }, 220); }
}
function favNumGo() {
  const s = subTop(); if (!s || s.id !== "favnum" || s.go) return;
  const f = document.getElementById("fnum"); if (f) s.v = digs(f.value, 11);
  if (!isPh(s.v)) { s.err = t("fn_bad"); const e = document.getElementById("fnerr"); if (e) e.textContent = s.err; v3shake(s); return; }
  s.go = true; try { if (f) f.blur(); } catch (e) {}
  Promise.resolve(favAsk("add", s.v)).finally(() => { setTimeout(() => { s.go = false; }, 700); });
}
SUBR.favs = (s) => {
  const nm = (f) => f.name || cName(f.phone);
  const rows = S.fav.length ? S.fav.map(f => `<div class="v3fr">${v3av(nm(f), f.phone)}<div><b>${esc(nm(f) || f.phone)}</b><span>${nm(f) ? esc(f.phone) : ""}</span></div><button class="v3rm" onclick="favAsk('rm','${f.phone}')">${t("v_rm")}</button></div>`).join("") : `<p class="em">${t("v_nofav")}</p>`;
  return subShell(s, t("g_fav"), `<div class="v3fx"><small class="v3fs">${t("v_chgfree")}</small><div class="v3fu"><span>${t("v_used")}</span><b>${money2(favUsed())}</b><p>${t("v_lim")} ${money2(FAV_LIM)} <i onclick="favInfo()">i</i></p></div><div class="v3fh"><span>${t("v_myfav")}</span><em>${S.fav.length}/10 ${t("g_fav")}</em></div>${rows}</div><button class="v3fab" onclick="favAdd()">${PLUS}<span>${t("v_add")}</span></button>`, "", "v3fv");
};
const v3who = (nm, ph) => `<div class="v3pw">${v3av(nm, ph)}<div><b>${esc(nm || ph)}</b><span>${nm ? esc(ph) : ""}</span></div></div>`;
/* PIN পেজ (সব জায়গার জন্য এক): নিচে অ্যাপ-কিপ্যাড + "পিন কনফার্ম করুন" বার */
SUBR.pinx = (s) => subShell(s, s.title, `<div class="v3pc">${s.who}${s.sum || ""}<p class="v3nl">${t("v_note")}</p><p class="v3nt">${s.note}</p>
  <div class="v3pr">${IC_LOCK}<input id="v3pin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="off" placeholder="${t("pinph")}" aria-label="PIN" value="${esc(s.pin)}" oninput="pinxIn(this)" onkeydown="if(event.key==='Enter'){event.preventDefault();pinxGo()}"><button class="fpb" aria-label="fingerprint" onclick="pinxBio()">${ic("fp")}</button></div><div class="err c" id="v3er">${esc(s.err)}</div></div>`,
  `<button class="btn" id="v3go" onclick="pinxGo()">${t("pinok")}</button>`);
function pinxIn(el) { const s = subTop(); if (!s || s.id !== "pinx") return; const v = digs(el.value, 6); if (el.value !== v) el.value = v; s.pin = v; s.err = ""; const e = document.getElementById("v3er"); if (e) e.textContent = ""; hap(); }
async function pinxGo() {
  const s = subTop(); if (!s || s.id !== "pinx" || s.busy) return;
  const f = document.getElementById("v3pin"); if (f) s.pin = digs(f.value, 6);
  const er = (m) => { s.err = m; const e = document.getElementById("v3er"); if (e) e.textContent = m; };
  if (s.pin.length !== 6) { v3shake(s); return; }
  s.busy = true; const gb = document.getElementById("v3go"); if (gb) gb.classList.add("ld");
  try { await signIn(S.auth && S.me ? S.me.phone : S.phone, s.pin); await s.ok(s.pin); }
  catch (e) { s.busy = false; if (gb) gb.classList.remove("ld"); s.pin = ""; const f2 = document.getElementById("v3pin"); if (f2) f2.value = ""; er(errMsg(e)); v3shake(s); return; }
  s.busy = false;
}
async function pinxBio() {
  const s = subTop(); if (!s || s.id !== "pinx" || s.busy) return; hap(); const N = cap().NativeBiometric;
  if (!N || !bioOn()) { toast(t("fpoff")); return; }
  try { await N.verifyIdentity({reason: t("bioR"), title: "FuNPaY", useFallback: true}); const c = await N.getCredentials({server: BIO_SERVER}); s.pin = digs(c.password, 6); const f = document.getElementById("v3pin"); if (f) f.value = s.pin; pinxGo(); }
  catch (e) { toast(t("fpbad")); }
}
async function favAsk(mode, ph) {
  hap(); let nm = cName(ph);
  if (mode === "add") {
    if (isFav(ph)) { toast(t("v_already")); return; }
    if (S.fav.length >= 10) { toast(t("favmax")); return; }
    if (S.me && ph === S.me.phone) { toast(t("self")); return; }
    try { const r = await api("/rest/v1/rpc/lookup_phone", {m: "POST", b: {p_phone: ph}}); if (!r.length) { toast(t("g_noacc")); return; } nm = r[0].pname || nm; } catch (e) { toast(errMsg(e)); return; }
  } else { const f = S.fav.find(x => x.phone === ph); nm = (f && f.name) || nm; }
  subOpen({id: "pinx", title: t("v_cfmT"), who: v3who(nm, ph), note: t(mode === "add" ? "v_noteAdd" : "v_noteRm"), pin: "", err: "", focus: "v3pin",
    ok: async () => {
      if (mode === "add") { await api("/rest/v1/rpc/fav_add", {m: "POST", b: {p_phone: ph}}); if (!isFav(ph)) S.fav.push({phone: ph, name: nm}); }
      else { await api("/rest/v1/rpc/fav_remove", {m: "POST", b: {p_phone: ph}}); S.fav = S.fav.filter(f => f.phone !== ph); }
      hap("MEDIUM"); loadFav();
      const fi = S.subs.findIndex(x => x.id === "favs"); if (fi >= 0) { subDraw(S.subs[fi]); subBack(S.subs.length - 1 - fi); } else subBack();
      const sh = S.sheet; if (sh && sh.id === "send" && sh.step === 1 && !sh.busy) setTimeout(() => { if (S.sheet === sh && !S.subs.length) rer(); }, 260);
    }});
}
async function toggleFav(p, ev) { if (ev) { ev.stopPropagation(); ev.preventDefault(); } favAsk(isFav(p) ? "rm" : "add", p); }

/* ---------- রিকোয়েস্ট মানি ---------- */
function rqHome() { hap(); loadContacts(); subOpen({id: "clp", mode: "reqh", title: t("v_rq"), q: "", list: (x) => cRows(x.q)}); }
function rqGroup() { loadContacts(); subOpen({id: "clp", mode: "reqg", title: t("v_rq"), q: "", sel: [], list: (x) => cRows(x.q, {sel: x.sel})}); }
async function rqPick(ph) {
  hap(); if (S.me && ph === S.me.phone) { toast(t("self")); return; }
  try { const r = await api("/rest/v1/rpc/lookup_phone", {m: "POST", b: {p_phone: ph}}); if (!r.length) { toast(t("g_noacc")); return; } rqAmt([{ph, nm: r[0].pname || cName(ph)}]); } catch (e) { toast(errMsg(e)); }
}
async function rqGNext() {
  const s = subTop(); if (!s || s.mode !== "reqg" || s.busy) return;
  if (!s.sel.length) { toast(t("v_selc")); return; }
  s.busy = true;
  try { const rs = await Promise.all(s.sel.map(p => api("/rest/v1/rpc/lookup_phone", {m: "POST", b: {p_phone: p}}))); const bad = s.sel.filter((p, i) => !rs[i].length); s.busy = false; if (bad.length) { toast(t("g_noacc") + ": " + bad.join(", ")); return; } rqAmt(s.sel.map((p, i) => ({ph: p, nm: rs[i][0].pname || cName(p)}))); }
  catch (e) { s.busy = false; toast(errMsg(e)); }
}
function rqAmt(tg) { subOpen({id: "rqa", targets: tg, a: "", note: "", err: "", focus: "v3amt"}); }
SUBR.rqa = (s) => {
  const one = s.targets.length === 1, x = s.targets[0];
  const who = one ? v3who(x.nm, x.ph) : `<div class="v3pw">${avatar(t("g_grp"), "grp")}<div><b>${t("g_grp")}</b><span>${s.targets.length} ${t("v_people")}</span></div></div>`;
  return subShell(s, t("v_rq"), `<div class="v3ac"><p class="v3nl">${t("v_rqfrom")}</p><div class="v3cd">${who}</div><p class="v3nl" style="margin-top:16px">${t("amt")}</p><div class="v3cd"><div class="fld big bka"><u>৳</u><input id="v3amt" inputmode="decimal" placeholder="0" value="${esc(s.a)}" oninput="rqAIn(this)"></div><div class="err" id="v3er">${esc(s.err)}</div></div><p class="v3nl" style="margin-top:16px">${t("g_ref")}</p><div class="v3cd v3nf"><input id="v3note" maxlength="50" placeholder="${t("g_note")}" value="${esc(s.note)}" oninput="rqNIn(this)" autocomplete="off"></div></div>`,
    `<button class="btn" onclick="rqANext()">${t("go2")}${NXT}</button>`);
};
function rqAIn(el) {
  const s = subTop(); if (!s) return; let v = en(el.value).replace(/[^0-9.]/g, ""); const p = v.split(".");
  if (p.length > 1) v = p[0] + "." + p.slice(1).join("").slice(0, 2); v = v.replace(/^0+(?=\d)/, "").slice(0, 9);
  if (el.value !== v) el.value = v; s.a = v; s.err = ""; const e = document.getElementById("v3er"); if (e) e.textContent = "";
}
function rqNIn(el) { const s = subTop(); if (s) s.note = el.value.slice(0, 50); }
function rqANext() {
  const s = subTop(); if (!s || s.id !== "rqa") return; const amt = parseFloat(s.a);
  if (!(amt >= 1) || amt > 100000) { s.err = t("bada"); const e = document.getElementById("v3er"); if (e) e.textContent = s.err; v3shake(s); return; }
  const a = Math.round(amt * 100) / 100, one = s.targets.length === 1, x = s.targets[0];
  subOpen({id: "pinx", title: t("v_rq"), who: one ? v3who(x.nm, x.ph) : `<div class="v3pw">${avatar(t("g_grp"), "grp")}<div><b>${t("g_grp")}</b><span>${s.targets.length} ${t("v_people")}</span></div></div>`,
    sum: `<div class="v3sm"><span>${t("v_amtl")}</span><b>${money2(a)}</b></div>`, note: t("v_rqNote"), pin: "", err: "", focus: "v3pin",
    ok: async () => {
      for (const y of s.targets) await api("/rest/v1/rpc/req_create", {m: "POST", b: {p_phone: y.ph, p_amount: a, p_note: s.note || null}});
      hap("MEDIUM"); const d = subOpen({id: "rqd", amt: a, targets: s.targets});
      setTimeout(() => { S.subs.filter(z => z !== d).forEach(z => z.el.remove()); S.subs = [d]; }, 340);
    }});
}
SUBR.rqd = (s) => subShell(s, t("v_rq"), `<div class="v3dn"><i class="v3ok">${tickSvg}</i><h3>${t("v_rqDone")}</h3><p>${s.targets.length === 1 ? esc(s.targets[0].nm || s.targets[0].ph) : s.targets.length + " " + t("v_people")} · ${money2(s.amt)}</p><small>${t("v_rqDoneS")}</small></div>`,
  `<button class="v3bar on" onclick="subBack()"><span>${t("next")}</span>${NXT}</button>`, "v3dp");
function rqList() { hap(); subOpen({id: "rql", tab: "in"}); rqLoad(); }
async function rqLoad() {
  try { const r = await api("/rest/v1/rpc/req_list", {m: "POST", b: {}}); S.rq = Array.isArray(r) ? r : []; S.rqErr = ""; } catch (e) { S.rqErr = t("v_rqerr"); }
  S.rqLoaded = true; const p = S.subs.find(x => x.id === "rql"); if (p) subDraw(p);
}
const rqDate = (d) => { try { return fmt(d); } catch (e) { return ""; } };
SUBR.rql = (s) => {
  const l = S.rq.filter(r => r.dir === s.tab);
  const st = (r) => r.status === "paid" ? t("v_paid") : r.status === "pending" ? t("v_pend") : t("v_dcl");
  const items = l.map(r => `<div class="v3rq"><div class="v3rh">${v3av(r.name, r.phone)}<div><b>${esc(r.name || r.phone)}</b><span>${r.name ? esc(r.phone) : ""}</span></div><em>${money2(r.amount)}</em></div>${r.note ? `<p>${esc(r.note)}</p>` : ""}<div class="v3rf"><small>${rqDate(r.created_at)} · <u class="s-${r.status}">${st(r)}</u></small>${r.status === "pending" ? (r.dir === "in" ? `<span><button class="v3b1" onclick="rqDecl('${r.id}')">${t("v_decl")}</button><button class="v3b2" onclick="rqPay('${r.id}')">${t("v_pay")}</button></span>` : `<span><button class="v3b1" onclick="rqCancel('${r.id}')">${t("v_cancel")}</button></span>`) : ""}</div></div>`).join("");
  const empty = `<div class="v3em">${IC_REQ}<p>${t(s.tab === "in" ? "v_rqNoIn" : "v_rqNoOut")}</p></div>`;
  return subShell(s, t("v_rq"), `<div class="v3tabs"><button class="${s.tab === "in" ? "on" : ""}" onclick="rqTab('in')">${t("v_rqIn")}</button><button class="${s.tab === "out" ? "on" : ""}" onclick="rqTab('out')">${t("v_rqOut")}</button></div>${S.rqErr ? `<p class="em">${S.rqErr}</p>` : l.length ? `<div class="v3rl">${items}</div>` : (S.rqLoaded ? empty : `<div class="v3sk"><i></i><i></i><i></i></div>`)}`, "", "v3rv");
};
function rqTab(k) { const s = subTop(); if (!s || s.id !== "rql" || s.tab === k) return; hap(); s.tab = k; subDraw(s); }
async function rqAct(fn, id) { hap(); try { await api("/rest/v1/rpc/" + fn, {m: "POST", b: {p_id: id}}); } catch (e) { toast(errMsg(e)); } rqLoad(); }
const rqDecl = (id) => rqAct("req_decline", id), rqCancel = (id) => rqAct("req_cancel", id);
function rqPay(id) {
  const r = S.rq.find(x => x.id === id); if (!r) return; hap();
  S.subs.forEach(x => x.el.remove()); S.subs = [];
  openS("send", r.phone, r.name || "");
  const s = S.sheet; if (s && s.id === "send") { if (s.step === 1) { s.step = 2; s.rn = r.name || ""; } s.a = String(r.amount); s.reqId = id; if (r.note) s.note = r.note; s.err = ""; renderSheet(); }
}
const _ctx = confirmTx;
confirmTx = async function () {
  const s0 = S.sheet, rid = s0 && s0.reqId; const r = await _ctx.apply(this, arguments);
  if (rid && S.sheet && S.sheet !== s0 && S.sheet.done) api("/rest/v1/rpc/req_paid", {m: "POST", b: {p_id: rid}}).catch(() => {});
  return r;
};

/* ---------- টাচ/ফেস আইডি সেটআপ (পূর্ণ পেজ) ---------- */
/* ফিঙ্গার চালু থাকুক বা না থাকুক, পেমেন্ট কনফার্মে সবসময় ধরে রাখতে হয় (ফিঙ্গার শুধু PIN এর জায়গায়) */
const bioTx = () => false;
function bioStart(pin) { subOpen({id: "bios", mode: "tx", pin: pin || ""}); }
SUBR.bios = (s) => subShell(s, t("v_bioT"), `<div class="v3bh">${FP_ART}<b>${t("v_bioH")}</b><p>${t("v_bioS")}</p></div><p class="v3sel">${t("v_sel")}</p>
  <div class="v3opt${s.mode === "tx" ? " on" : ""}" onclick="bioMode('tx')"><div><b>${t("v_bioLT")}</b><span>${t("v_bioLTd")}</span><u onclick="event.stopPropagation();bioLim()">${t("v_bioLim")}</u></div><i class="v3rd">${tickSvg}</i></div>
  <div class="v3opt${s.mode === "login" ? " on" : ""}" onclick="bioMode('login')"><div><b>${t("v_bioL")}</b><span>${t("v_bioLd")}</span></div><i class="v3rd">${tickSvg}</i></div>`, `<button class="v3bar on" onclick="bioNext()"><span>${t("next")}</span>${NXT}</button>`, "v3bp");
function bioMode(m) { const s = subTop(); if (!s || s.id !== "bios" || s.mode === m) return; hap(); s.mode = m; subDraw(s); }
function bioLim() { hap(); toast(t("v_bioLimT")); }
async function bioEnable(pin, mode) {
  const N = cap().NativeBiometric; if (!N) throw new Error("noscan");
  const ph = S.auth && S.me ? S.me.phone : S.phone, wasOut = !S.auth;
  await N.verifyIdentity({reason: t("bioR"), title: "FuNPaY", useFallback: true});
  await N.setCredentials({username: ph, password: pin, server: BIO_SERVER});
  try { localStorage.setItem("fpbio", ph); localStorage.setItem("fpbiomode", mode); } catch (e) {}
  hap("MEDIUM"); toast(t("bioOn")); subBack(S.subs.length || 1);
  if (wasOut) { try { await enter(); } catch (e) { S.tok = ""; S.rt = ""; render(); toast(errMsg(e)); } } else setTimeout(() => swFlip(true), 320);
}
async function bioNext() {
  const s = subTop(); if (!s || s.id !== "bios" || s.busy) return; hap(); const mode = s.mode;
  if (s.pin) {   /* লগইনের সময় PIN দেওয়া ছিল: আবার চায় না */
    s.busy = true;
    try { await signIn(S.auth && S.me ? S.me.phone : S.phone, s.pin); await bioEnable(s.pin, mode); } catch (e) { s.busy = false; toast(t("fpbad")); }
    return;
  }
  subOpen({id: "pinx", title: t("v_bioT"), who: `<div class="v3pw"><i class="v3fi">${ic("fp")}</i><div><b>${t("v_bioH")}</b><span>${t(mode === "tx" ? "v_bioLT" : "v_bioL")}</span></div></div>`, note: t("bioOffD").replace(/বন্ধ করতে/, "চালু করতে").replace("turn it off", "turn it on"), pin: "", err: "", focus: "v3pin",
    ok: (pin) => bioEnable(pin, mode)});
}
async function toggleBio() {
  hap(); const N = cap().NativeBiometric; if (!N) { toast(t("noscan")); return; }
  if (bioOn()) { S.sheet = {id: "bio", off: true, pin: "", fresh: true, err: ""}; renderSheet(); return; }
  try { const a = await N.isAvailable({useFallback: true}); if (!a.isAvailable) { toast(t("errg")); return; } } catch (e) { toast(t("errg")); return; }
  bioStart("");
}
async function bioTap() {
  if (S.busy) return; if (bioOn()) { bioUnlock(); return; }
  const N = cap().NativeBiometric; if (!N) { toast(t("noscan")); return; }
  try { const a = await N.isAvailable({useFallback: true}); if (!a.isAvailable) { toast(t("errg")); return; } } catch (e) { toast(t("errg")); return; }
  bioStart("");
}
/* লগইনের পর (PIN বা SMS যেভাবেই হোক) একবার অফার; PIN জানা থাকলে আবার চায় না, SMS হলে PIN চায় */
async function offerBio(pin) {
  const N = cap().NativeBiometric;
  if (!N || !S.auth || S.sheet || S.upd || S.subs.length || bioOn()) return;
  try { if (localStorage.getItem("fpbioask") === S.phone) return; } catch (e) {}
  try { const a = await N.isAvailable({useFallback: true}); if (!a.isAvailable) return; } catch (e) { return; }
  try { localStorage.setItem("fpbioask", S.phone); } catch (e) {}
  bioStart(pin || "");
}
/* "লগইন ও লেনদেন" বাছা থাকলে কনফার্ম পেজে ধরে রাখতে হয় না: ট্যাপ করে ফিঙ্গার দিলেই যায় */
let tcb = false;
async function txConfirmBio() {
  if (tcb) return; tcb = true; const N = cap().NativeBiometric, s = S.sheet;
  try {
    await N.verifyIdentity({reason: t("bioR"), title: "FuNPaY", useFallback: true});
    if (S.sheet !== s) { tcb = false; return; }
    hap("MEDIUM"); const b = document.getElementById("lgh") || document.getElementById("hold"); if (b) b.classList.add("ld"); tcb = false; confirmTx(); return;
  } catch (e) { if (s) s.nobio = true; toast(t("v_bioTxF")); }
  tcb = false;
}
const _lgStart = lgStart;
lgStart = function (e) { if (bioTx()) { if (e && e.preventDefault) e.preventDefault(); txConfirmBio(); return; } return _lgStart.apply(this, arguments); };
const _holdStart = holdStart;
holdStart = function (e) { if (bioTx()) { if (e && e.preventDefault) e.preventDefault(); txConfirmBio(); return; } return _holdStart.apply(this, arguments); };
const _bk4 = bkStep4;
bkStep4 = function (s) { const h = _bk4(s); return bioTx() ? h.replace(/(<div class="c4f">[\s\S]*?<\/div>)<p>[^<]*<\/p>/, `$1<p>${t("v_bioTx")}</p>`) : h; };


/* =====================================================================
   v2.34 — লেখা: আইডেন্টি কার্ডের পেজ, ফেস ভেরিফিকেশন (সবসময় ইংরেজি)
   ===================================================================== */
Object.assign(T.bn, {k_front: "আইডেন্টি কার্ডের ফ্রন্ট পেজ", k_back: "আইডেন্টি কার্ডের ব্যাক পেজ", k_face: "Face Verification"});
Object.assign(T.en, {k_front: "ID Card Front Page", k_back: "ID Card Back Page", k_face: "Face Verification"});

/* =====================================================================
   v2.35 — KYC: একবার আপলোডেই গ্রহণ, আপলোডের সময় ক্যামেরা বন্ধ, দ্রুত অটো ছবি,
   যাচাইয়ের লাইভ তালিকা, ধাপ বদলের অ্যানিমেশন
   ===================================================================== */
Object.assign(T.bn, {k_pb1: "কার্ড খোঁজা হচ্ছে", k_pb2: "সামনে/পেছনের দিক মেলানো হচ্ছে", k_pb3: "লেখা পড়া হচ্ছে", k_pb4: "ছবি পরিষ্কার কিনা দেখা হচ্ছে", k_pb5: "আলো দেখা হচ্ছে", k_hold: "চমৎকার, স্থির রাখুন…"});
Object.assign(T.en, {k_pb1: "Finding the card", k_pb2: "Checking front or back side", k_pb3: "Reading the text", k_pb4: "Checking sharpness", k_pb5: "Checking the light", k_hold: "Good, hold still…"});

/* ----- OCR লাইনে অটো-কাজ আটকে থাকলে বাতিল করা যায় ----- */
let KAG = 0;
function kOcrData(cv, side, tag) {
  const g = KAG;
  const run = async () => {
    if (tag === "auto" && g !== KAG) return null;
    const w = await kWorker(); if (!w) return null; KCUR = side || "";
    try { const r = await Promise.race([w.recognize(cv), new Promise((_, no) => setTimeout(() => no(new Error("SLOW")), 80000))]); return (r && r.data) || null; }
    catch (e) { console.log("ocr", e && e.message); return null; } finally { KCUR = ""; }
  };
  const p = KQ.then(run, run); KQ = p.catch(() => {}); return p;
}
function kOcrText(cv, side, tag) { return kOcrData(cv, side, tag).then(d => d === null ? null : (d.text || "")); }

/* ----- ধাপ বদলের অ্যানিমেশনসহ রেন্ডার; ছবির প্রিভিউ থাকলে ক্যামেরা পুরো বন্ধ ----- */
const KORD = ["intro", "front", "back", "info", "face", "match", "pin", "wait", "ok"];
let KLAST = null;
function kycRender() {
  const el = kEl(), want = K.step === "face" ? "user" : (K.step === "front" || K.step === "back") ? "environment" : "";
  kcamStop(!!want && !!KS && KSf === want && !K.pv && !K.galOpen);
  window.__kyc = true; const first = !K.open; K.open = true;
  el.className = first ? "kin" : "";
  const changed = !first && KLAST && KLAST !== K.step, dir = changed ? (KORD.indexOf(K.step) >= KORD.indexOf(KLAST) ? 1 : -1) : 0;
  let old = null;
  if (changed && el.firstElementChild) {
    old = el.firstElementChild; el.removeChild(old);
    old.querySelectorAll("[id]").forEach(n => n.removeAttribute("id"));
    old.querySelectorAll("video").forEach(v => { try { v.pause(); } catch (e) {} });
    old.classList.add("kpo", dir > 0 ? "kpo-f" : "kpo-b");
  }
  el.innerHTML = kHtml();
  if (changed) { K.galOpen = 0; const nw = el.firstElementChild; if (nw) nw.classList.add(dir > 0 ? "kpi-f" : "kpi-b"); }
  if (old) { el.appendChild(old); setTimeout(() => { try { old.remove(); } catch (e) {} }, 360); }
  KLAST = K.step;
  if (K.step === "back") kPreload(); if (K.step === "face") setTimeout(kPreloadFA, 2500);
  kSb();
  if (["front", "back", "face"].includes(K.step) && !K.pv && !K.galOpen) setTimeout(kcamInit, changed ? 140 : 80);
  if (K.step === "info" && K.reading) kInfoStart();
  if (K.step === "match" && !K.mres && !K.mrun) kMatchRun();
  if (K.step === "pin") setTimeout(() => { const f = document.getElementById("kpin"); if (f) { try { f.focus(); } catch (e) {} } }, 420);
}

/* ----- গ্যালারি: ক্যামেরা বন্ধ করে ফাইল বাছাই, ফিরে এলে (বাতিল করলে) আবার ক্যামেরা চালু ----- */
let KGI = null;
function kGalInput() {
  if (KGI && document.body.contains(KGI)) return KGI;
  const i = document.createElement("input"); i.type = "file"; i.accept = "image/*"; i.id = "kgfx"; i.style.display = "none";
  i.addEventListener("change", () => { K.galPick = Date.now(); kFile(i); });
  i.addEventListener("cancel", () => kCamBack());
  document.body.appendChild(i); KGI = i; return i;
}
function kGalOpen() {
  hap();
  if (K.galOpen || K.pv || K.vbusy || (K.step !== "front" && K.step !== "back")) return;
  K.galOpen = Date.now(); K.galPick = 0;
  KA.pause = Infinity; kcamStop();
  const v = document.getElementById("kvid"); if (v) { try { v.pause(); v.srcObject = null; } catch (e) {} v.classList.remove("on"); }
  galAsk(() => { try { const i = kGalInput(); i.value = ""; i.click(); } catch (e) { kCamBack(); } }, () => kCamBack());
}
function kCamBack() {
  K.galOpen = 0;
  if (!K.open || K.pv || K.vbusy || K.loadingGal || (K.step !== "front" && K.step !== "back")) return;
  KA.pause = 0; kcamInit();
}
function galAsk(cb, no) {
  if (KGAL) { cb(); return; }
  if (document.getElementById("galq")) return;
  const d = document.createElement("div"); d.id = "galq"; d.className = "galq";
  d.innerHTML = `<div class="galb"><div class="gali">${ic("gal")}</div><h3>${t(window.__kyc ? "k_galh" : "galh")}</h3><p>${t(window.__kyc ? "k_gald" : "gald")}</p><button class="galy" id="galy">${t(window.__kyc ? "k_galb" : "galb")}</button><button class="galn" id="galn">${t(window.__kyc ? "k_galn" : "galn")}</button></div>`;
  document.body.appendChild(d); hap();
  const close = () => { d.classList.add("out"); setTimeout(() => d.remove(), 220); };
  d.querySelector("#galn").onclick = () => { hap(); close(); if (no) no(); };
  d.querySelector("#galy").onclick = async () => {
    hap(); try { const F = cap().Filesystem; if (F && F.requestPermissions) await F.requestPermissions(); } catch (e) {}
    KGAL = true; try { localStorage.setItem("fp_gal", "1"); } catch (e) {}
    close(); cb();
  };
}
function kPopOk() { const o = document.getElementById("kpop"); if (o) o.remove(); KA.pause = Date.now() + 1200; hap(); if (!K.pv && !KS) kCamBack(); }
function kFile(inp) {
  const f = inp && inp.files && inp.files[0];
  if (!f) { kCamBack(); return; }
  const side = K.step;
  if (side !== "front" && side !== "back") { try { inp.value = ""; } catch (e) {} return; }
  K.loadingGal = true; KA.pause = Infinity; kcamStop();
  const u = URL.createObjectURL(f), im = new Image();
  const done = () => { try { URL.revokeObjectURL(u); } catch (e) {} try { inp.value = ""; } catch (e) {} };
  im.onload = async () => {
    let shot = false; try { shot = await kIsShot(f, im); } catch (e) {}
    K.loadingGal = false;
    if (K.step !== side) { done(); return; }
    if (shot) { done(); kPop(t("k_shh"), t("k_shm")); return; }
    K.pv = kShrink(im, 1800, .86); K.repSrc = "gal"; K.imgWH = [im.naturalWidth, im.naturalHeight]; done();
    K.auto = false; K.adv = ""; K.pre[side] = ""; K.rep = null; K.vbusy = true; kycRender(); kVal();
  };
  im.onerror = () => { done(); K.loadingGal = false; toast(t("k_nocam")); kCamBack(); };
  im.src = u;
}
document.addEventListener("visibilitychange", () => {
  if (!K.open || (K.step !== "front" && K.step !== "back")) return;
  if (document.hidden) { if (!K.pv) kcamStop(); return; }
  if (K.pv || K.vbusy) return;
  setTimeout(() => {
    if (K.pv || K.vbusy || K.loadingGal || document.getElementById("galq") || document.getElementById("kperm")) return;
    if (K.galOpen && K.galPick) return;
    K.galOpen = 0; KA.pause = 0; kcamInit();
  }, 1200);
});

/* ----- যাচাই: OCR ধীর/বন্ধ থাকলেও ভুল করে ফেরত নয় (আগে এ কারণেই দ্বিতীয়বার আপলোড লাগত) ----- */
function kJudge(txt, side, geo) {
  const like = !geo || geo.cardLike;
  if (typeof txt !== "string") return "ok";
  const r = kClass2(txt);
  if (side === "front" && r.c === "back" && r.bs >= 2) return "wrong:back";
  if (side === "back" && r.c === "front" && r.fs >= 3 && r.bs === 0) return "wrong:front";
  if (r.c === "none") return like ? "ok" : "notid";
  return "ok";
}
async function kVal() {
  const s = K.step, img = K.pv; let txt, geo = null;
  try { const cv = await kPrep(img, 1500); geo = kGeoCv(cv); txt = await Promise.race([kOcrText(cv, ""), kTO(14000)]); } catch (e) { txt = undefined; }
  if (K.pv !== img || K.step !== s) return;
  K.vbusy = false;
  const j = kJudge(txt === undefined ? null : txt, s, geo);
  if (j === "notid") { kReject("k_notid", "k_notidm"); return; }
  if (j.indexOf("wrong") === 0) { kReject("k_wrong", j === "wrong:front" ? "k_isf" : "k_isb"); return; }
  if (typeof txt === "string" && txt) K.pre[s] = txt;
  K.rep = kMakeRep(s, K.repSrc || "cam", geo, txt, img);
  /* সব ঠিক থাকলে (ক্যামেরা বা গ্যালারি, দুটোতেই) তালিকা দেখিয়ে নিজে পরের ধাপে যায় */
  K.adv = (!K.rep.warn) ? img : "";
  kycRender();
  if (K.adv === img) K.at = setTimeout(() => { if (K.pv === img && K.step === s && K.adv === img) kUse(); }, 2300);
}

/* ----- অটো ছবি: ফ্রেমে কার্ড স্থির হলেই সাথে সাথে ছবি, তারপর সবার সামনে যাচাই ----- */
function kAutoStart() {
  kAutoStop(); KA.ok = 0; KA.none = 0; KA.prev = null; KA.busy = false; KA.t0 = Date.now(); kWorker();
  KA.pause = document.getElementById("kpop") ? Infinity : 0; KA.tm = setInterval(kAutoTick, 350); KA.mt = setTimeout(kManualShow, 9000);
}
function kAutoStop() { clearInterval(KA.tm); clearTimeout(KA.mt); KA.tm = 0; KA.busy = false; KA.ocr = false; KAG++; }
function kFlash() {
  const w = document.querySelector("#kyc .kwr"), f = document.querySelector("#kyc .kfr"); if (f) f.classList.add("dn");
  if (!w) return; const x = document.createElement("div"); x.className = "kflash"; w.appendChild(x); setTimeout(() => x.remove(), 520);
}
function kAutoTick() {
  if (KA.busy || Date.now() < KA.pause || K.loadingGal || K.galOpen) return;
  const v = document.getElementById("kvid"), s = K.step;
  if (!v || !v.videoWidth || v.readyState < 2 || K.pv || (s !== "front" && s !== "back")) return;
  const m = kMet(v); if (!m) return;
  const late = Date.now() - (KA.t0 || 0) > 6000, fr = document.querySelector("#kyc .kfr");
  const lite = late ? (m.edge > .008 && m.edge < .85 && m.cells >= 3 && m.mean > 25 && m.mean < 252) : (m.edge > .014 && m.edge < .8 && m.cells >= 6 && m.mean > 30 && m.mean < 250);
  const good = lite && m.diff < 14 && m.sharp > (late ? 18 : 28);
  if (!good) { KA.ok = 0; if (fr) fr.classList.remove("lk"); kSt(!lite ? "k_auto" : m.diff >= 14 ? "k_steady" : "k_blur"); return; }
  KA.ok++; if (fr) fr.classList.add("lk"); kSt("k_hold");
  if (KA.ok < 3) return;
  KA.ok = 0; KA.busy = true;
  const shot = kCardShot(v); kFlash(); hap("MEDIUM");
  setTimeout(() => {
    KA.busy = false;
    if (!K.open || K.step !== s || K.pv) return;
    K.pre[s] = ""; K.pv = shot; K.auto = true; K.adv = ""; K.repSrc = "cam"; K.imgWH = null; K.rep = null; K.vbusy = true; kycRender(); kVal();
  }, 260);
}

/* ----- স্ক্যান পাতা: গ্যালারি বোতাম ক্যামেরা বন্ধ করে; যাচাই চলার সময় লাইভ তালিকা ----- */
function kBusyHtml() {
  const rows = ["k_pb2", "k_pb3", "k_pb4", "k_pb5"].map((k, i) => `<div class="ri pn" style="--n:${i}"><i><b class="kspin"></b></i><span>${t(k)}</span></div>`).join("");
  return `<div class="krep busy"><div class="rh"><i class="rc bz"><b class="kspin"></b></i><div><b>${t(K.repSrc === "gal" ? "k_rp_gal" : "k_rp_cam")}</b><small>${t("k_chk2")}</small></div></div><div class="rg">${rows}</div></div>`;
}
function kScan(side) {
  const fr = side === "front", pv = K.pv;
  const chip = pv && K.vbusy ? `<div class="kchk"><i class="kspin"></i><span>${t("k_chk2")}</span></div>` : pv && K.auto ? `<div class="kchk gd">${tickSvg}<span>${t("k_got")}</span></div>` : "";
  return `<div class="kcam kn">${kBg()}
    <div class="ktp"><button class="kbk" onclick="kBack()">${kBk}</button><b></b><em>${fr ? 1 : 2}/2</em></div>${kLogo(t(fr ? "k_front" : "k_back"))}
    <div class="kwr${pv ? " pv" : ""}"><div class="kwin">${pv ? `<img class="kpvi" src="${pv}" alt="">` : kVid()}</div>
      <div class="kfr${pv && !K.vbusy ? " dn" : ""}"><i class="c1"></i><i class="c2"></i><i class="c3"></i><i class="c4"></i>${pv ? "" : '<u class="kln"></u>'}</div></div>${chip}
    <div class="kbt">${pv ? "" : `<p id="kst">${t("k_auto")}</p>`}
      ${pv ? (K.vbusy ? kBusyHtml() : `${K.rep && K.rep.side === side ? kRepHtml() : ""}<div class="krow"><button class="kgh" onclick="kRetake()">${t("k_retake")}</button><button class="kgo${K.adv && K.adv === pv ? " cd" : ""}" onclick="kUse()">${t("k_use")}</button></div>`)
        : `<div class="ksh"><button type="button" class="kgal" aria-label="Gallery" onclick="kGalOpen()">${kic("gal")}</button><button class="kshut" aria-label="${t("k_snap")}" onclick="kSnap()"><i></i></button><span class="kgal sp"></span></div>`}
      <small class="knc" id="knc"></small></div></div>`;
}

/* =====================================================================
   v2.36 — স্মুথ অ্যানিমেশন: কিবোর্ডের সাথে বার ওঠানামা, PIN ঘর ঢাকা পড়া ঠিক, কোড পেজের লেখা
   ===================================================================== */
Object.assign(T.bn, {otph1: "আপনার মোবাইল নাম্বার", otph2: "যাচাই করুন", otpl: "ভেরিফিকেশন কোড", otpin: "পুনরায় পাঠান ", otpsfx: "s পর", otpr: "আবার পাঠান", otppaste: "কোড পেস্ট করুন", otps: "ভেরিফিকেশন কোড এই নাম্বারে পাঠানো হয়েছে", otpchg: "(পরিবর্তন করুন)", otpchk: "যাচাই হচ্ছে…", otpok: "যাচাই হয়েছে", otpsent: "নতুন কোড পাঠানো হয়েছে", otwa: "আপনার FuNPaY পিন ও ভেরিফিকেশন কোড কাউকে দিবেন না", otwb: "FuNPaY থেকে কেউ কখনো আপনার পিন বা কোড চাইবে না"});
Object.assign(T.en, {otph1: "Verify your", otph2: "mobile number", otpl: "Verification code", otpin: "Resend in ", otpsfx: "s", otpr: "Resend code", otppaste: "Paste code", otps: "The verification code was sent to", otpchg: "(Change)", otpchk: "Verifying…", otpok: "Verified", otpsent: "New code sent", otwa: "Never share your FuNPaY PIN or verification code", otwb: "No one from FuNPaY will ever ask for your PIN or code"});

(function () {
  const ap = () => document.getElementById("app"), de = document.documentElement;
  const EASE = "cubic-bezier(.22,1,.36,1)";
  let touching = false, smooth = 0, lastH = window.innerHeight, kbUntil = 0, lastSt = 0;
  window.addEventListener("touchstart", () => { touching = true; }, {passive: true});
  window.addEventListener("touchend", () => { touching = false; }, {passive: true});
  window.addEventListener("touchcancel", () => { touching = false; }, {passive: true});

  /* নিজের স্মুথ স্ক্রল (ease-out), যেন লাফ না দেয় */
  function sScroll(el, to, ms) {
    if (!el) return;
    const from = el.scrollTop, max = Math.max(0, el.scrollHeight - el.clientHeight);
    to = Math.max(0, Math.min(max, to)); const d = to - from; if (Math.abs(d) < 2) return;
    const id = ++smooth, t0 = performance.now(), D = ms || 320;
    const step = (now) => {
      if (id !== smooth || touching) return;
      const k = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - k, 3);
      el.scrollTop = from + d * e; lastSt = el.scrollTop;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  /* ফোকাস করা ঘর কিবোর্ড / কিপ্যাডের ওপরে স্মুথভাবে তুলে আনা */
  function reveal(el, inset) {
    const a = ap(); if (!a || !el || !el.isConnected) return;
    const ar = a.getBoundingClientRect(), r = el.getBoundingClientRect();
    const vb = ar.bottom - inset - 16, vt = ar.top + 70; let dy = 0;
    if (r.bottom > vb) dy = r.bottom - vb; else if (r.top < vt) dy = r.top - vt;
    if (Math.abs(dy) > 2) sScroll(a, a.scrollTop + dy, 340);
  }
  const kph = () => { const k = document.getElementById("kpad"); return (k && k.offsetHeight) || parseFloat(getComputedStyle(de).getPropertyValue("--kph")) || 300; };

  /* ---- কিবোর্ড ওঠা/নামার সময় নিচের বারগুলো কিবোর্ডের সাথে গড়িয়ে ওঠে/নামে (বিকাশের মতো) ---- */
  const DOCK = ".nbar,.pfoot,.bknx,.kbtm,.lpanel";
  /* v2.37: ফোকাস করলেই বার কিবোর্ডের সাথে উঠতে শুরু করে (আগে থেকেই), পরে ফোনের স্ক্রিন ছোট হলে ঝাঁকুনি ছাড়াই ঠিক জায়গায় বসে */
  const pre = {on: 0, h: 0};
  const dockEls = () => document.querySelectorAll(DOCK);
  const savedKb = () => { let v = 0; try { v = Number(localStorage.getItem("fpkb")) || 0; } catch (e) {} return v > 120 ? v : Math.round(window.innerHeight * .38); };
  function preMove(sign) {
    const h = savedKb(); pre.on = sign; pre.h = h;
    dockEls().forEach((el) => { el.style.transition = "transform .3s " + EASE; el.style.willChange = "transform"; el.style.transform = "translate3d(0," + (sign * -h) + "px,0)"; });
  }
  /* v2.46 — লগইন/রেজিস্ট্রেশন পেজে: কিবোর্ডের আসল মাপ জানার মুহূর্তে বার চোখে যেখানে দেখা যাচ্ছিল ঠিক সেখান থেকেই শুরু করে কিবোর্ডের মাথায় গড়িয়ে বসে (মাঝখানে লাফ নেই) */
  function settleLive(d) {
    const H = pre.h || 1;
    dockEls().forEach((el) => {
      let tc = 0;
      try { tc = new DOMMatrixReadOnly(getComputedStyle(el).transform).m42 || 0; } catch (e) {}
      const from = tc + d, k = Math.min(1, Math.abs(tc) / H), ms = Math.max(140, Math.round(300 * (1 - k)));
      el.style.transition = "none"; el.style.transform = "translate3d(0," + from + "px,0)"; void el.offsetHeight;
      el.style.transition = "transform " + ms + "ms " + EASE; el.style.transform = "";
      setTimeout(() => { el.style.transition = ""; el.style.willChange = ""; }, ms + 40);
    });
    pre.on = 0;
  }
  function settle(d) {
    if (document.querySelector("#app > .fl")) { settleLive(d); return; }
    /* d>0 কিবোর্ড উঠেছে, d<0 নেমেছে. ভবিষ্যদ্বাণী যা ছিল তা আসল মাপের সাথে মিলিয়ে অবশিষ্ট ফারাকটুকু নরমে মেটানো */
    const T0 = d > 0 ? pre.h * -1 : pre.h, resid = T0 + d;
    dockEls().forEach((el) => {
      el.style.transition = "none"; el.style.transform = "translate3d(0," + resid + "px,0)"; void el.offsetHeight;
      el.style.transition = "transform .16s " + EASE; el.style.transform = "";
      setTimeout(() => { el.style.transition = ""; el.style.willChange = ""; }, 200);
    });
    pre.on = 0;
  }
  function glide(d) {
    if (pre.on && ((pre.on === 1 && d > 0) || (pre.on === -1 && d < 0))) { settle(d); return; }
    pre.on = 0;
    document.querySelectorAll(DOCK).forEach((el) => {
      try { el.animate([{transform: "translateY(" + d + "px)"}, {transform: "translateY(0)"}], {duration: 300, easing: EASE}); } catch (e) {}
    });
  }
  let kbOpen = lastH < (window.screen && window.screen.height ? window.screen.height * .75 : 0);
  document.addEventListener("focusin", (ev) => {
    const e = ev.target; if (!e || !/^(INPUT|TEXTAREA)$/.test(e.tagName) || e.closest("#kpad") || e.readOnly) return;
    if (pre.on === -1) { settle(-1); }
    if (!pre.on && Math.abs(window.innerHeight - (window.__fpFull || lastH)) < 60) preMove(1);
  }, true);
  document.addEventListener("focusout", () => {
    setTimeout(() => {
      const a = document.activeElement; if (a && /^(INPUT|TEXTAREA)$/.test(a.tagName) && !a.readOnly) return;
      if (pre.on === 1 && window.innerHeight < (window.__fpFull || lastH + 1) - 60) preMove(-1);
      else if (pre.on === 1) { dockEls().forEach((el) => { el.style.transform = ""; }); pre.on = 0; }
    }, 90);
  }, true);
  window.__fpFull = window.innerHeight;
  window.addEventListener("resize", () => { if (window.innerHeight > (window.__fpFull || 0)) window.__fpFull = window.innerHeight; });
  function onResize() {
    const h = window.innerHeight, d = lastH - h; lastH = h;
    if (Math.abs(d) < 60) return;
    kbUntil = performance.now() + 600; lastSt = ap() ? ap().scrollTop : 0;
    glide(d);
  }
  window.addEventListener("resize", onResize);
  try { if (window.visualViewport) window.visualViewport.addEventListener("resize", () => { const v = window.visualViewport; if (Math.abs(v.height - lastH) > 60 && Math.abs(window.innerHeight - lastH) < 60) { const d = lastH - v.height; lastH = v.height; kbUntil = performance.now() + 600; glide(d); } }); } catch (e) {}
  /* কিবোর্ড খোলার সময় ব্রাউজার ঘর দেখাতে হঠাৎ স্ক্রল করলে সেটা নরম করে দেয় */
  document.addEventListener("scroll", (ev) => {
    const a = ap(); if (!a || ev.target !== a) return;
    const d = a.scrollTop - lastSt, now = performance.now();
    if (now < kbUntil && !touching && !smooth_busy() && Math.abs(d) > 36) {
      const c = a.firstElementChild; if (c) { try { c.animate([{transform: "translateY(" + d + "px)"}, {transform: "translateY(0)"}], {duration: 280, easing: EASE}); } catch (e) {} }
    }
    lastSt = a.scrollTop;
  }, true);
  const smooth_busy = () => false;

  /* ---- ফোকাসে ঘর দেখানো ---- */
  document.addEventListener("focusin", (ev) => {
    const e = ev.target; if (!e || e.tagName !== "INPUT") return;
    if (e.closest("#app .fl")) {
      const pinF = e.getAttribute("data-kp") === "1", grp = e.closest(".rgf") || e.closest(".pfield") || e;
      const tgt = e.id === "rk" ? (document.getElementById("rk2f") || grp) : grp;
      if (pinF) { setTimeout(() => reveal(tgt, kph()), 70); setTimeout(() => reveal(tgt, kph()), 340); }
      else { setTimeout(() => reveal(grp, 64), 330); }
    }
  });

  /* ---- PIN কিপ্যাড ওঠা/নামার সময় পেজ নিচে জায়গা রাখে, নামার পর নরমভাবে ছেড়ে দেয় (লাফ নেই) ---- */
  let rkOn = false, rkT = 0;
  new MutationObserver(() => {
    const on = de.classList.contains("pinkb");
    if (on && !rkOn) { rkOn = true; clearTimeout(rkT); de.classList.add("rkp"); }
    else if (!on && rkOn) {
      rkOn = false; const a = ap();
      if (a) { const extra = Math.max(0, kph() - 2), nat = Math.max(0, a.scrollHeight - extra - a.clientHeight); if (a.scrollTop > nat) sScroll(a, nat, 300); }
      clearTimeout(rkT); rkT = setTimeout(() => { if (!de.classList.contains("pinkb")) de.classList.remove("rkp"); }, 340);
    }
  }).observe(de, {attributes: true, attributeFilter: ["class"]});
})();

/* =====================================================================
   v2.37 — KYC বাংলা, কোড পেজ সাজানো, কিবোর্ডের সাথে বার, স্ট্যাটাস বার, স্প্ল্যাশ থেকে লগইন অ্যানিমেশন
   ===================================================================== */
Object.assign(T.bn, {
  k_m_rvs2: "আমাদের সাপোর্ট টিম আপনার তথ্য দেখে খুব তাড়াতাড়ি ফল জানাবে।",
  k_m_finh: "মিল খুব কম",
  k_m_finp: "আপনার মুখ NID কার্ডের সাথে খুব কম মিলেছে ({p}%)। আমাদের সাপোর্ট টিম হাতে দেখে খুব তাড়াতাড়ি ফল জানাবে।",
  k_m_fin0: "আপনার মুখ NID কার্ডের সাথে মেলানো যায়নি। আমাদের সাপোর্ট টিম হাতে দেখে খুব তাড়াতাড়ি ফল জানাবে।",
  k_m_pct: "মিল",
  k_err2: "কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।",
  k_galh: "গ্যালারির অনুমতি দিন",
  k_gald: "গ্যালারি থেকে ছবি বাছতে FuNPaY-কে আপনার ছবিতে ঢোকার অনুমতি লাগবে।",
  k_galb: "অনুমতি দিন",
  k_galn: "এখন নয়",
  otwa: "আপনার FuNPaY পিন ও কোড কাউকে দিবেন না",
  otwb: "FuNPaY থেকে কেউ কখনো পিন বা কোড চাইবে না"
});
Object.assign(T.en, {otwa: "Never share your PIN or code with anyone", otwb: "No one from FuNPaY will ever ask for them"});
/* লগইন ঘর থেকে কিবোর্ড সরলে/এলে পেজ আবার আঁকলে বারের ঢোকার অ্যানিমেশন যেন আবার না চলে */
(function () {
  const de = document.documentElement;
  de.classList.add("v237");
  /* কোড পেজ: ঘর ভরলে সাইজ বদলায় না */
  window.addEventListener("load", () => { try { window.__fpFull = Math.max(window.__fpFull || 0, window.innerHeight); } catch (e) {} });
})();

/* =====================================================================
   v2.37b — অটো ছবি: ফ্রেমে আসল NID কার্ড দেখা ও লেখা পড়া গেলে তবেই ছবি (ফাঁকা জায়গা/কাপড়/দেয়ালের ছবি নয়)
   ===================================================================== */
Object.assign(T.bn, {k_readc: "কার্ড পড়া হচ্ছে, স্থির রাখুন…"});
Object.assign(T.en, {k_readc: "Reading the card, hold still…"});
function kAutoTick() {
  if (KA.busy || KA.ocr || Date.now() < KA.pause || K.loadingGal || K.galOpen) return;
  const v = document.getElementById("kvid"), s = K.step;
  if (!v || !v.videoWidth || v.readyState < 2 || K.pv || (s !== "front" && s !== "back")) return;
  const m = kMet(v); if (!m) return;
  const fr = document.querySelector("#kyc .kfr");
  const lite = m.edge > .012 && m.edge < .85 && m.cells >= 5 && m.mean > 28 && m.mean < 252;
  const good = lite && m.diff < 14 && m.sharp > 24;
  if (!good) { KA.ok = 0; if (fr) fr.classList.remove("lk"); kSt(!lite ? "k_auto" : m.diff >= 14 ? "k_steady" : "k_blur"); return; }
  KA.ok++; kSt("k_readc");
  if (KA.ok < 2) return;
  /* ফ্রেম স্থির ও পরিষ্কার: এবার লেখা পড়ে দেখা হবে কার্ড কি না */
  KA.ocr = true; const g = KAG, shot = kCardShot(v);
  (async () => {
    let ok = false;
    try {
      const cv = await kPrep(shot, 1100);
      const txt = await Promise.race([kOcrText(cv, "", "auto"), kTO(7000)]);
      if (typeof txt === "string") { const r = kClass2(txt); ok = r.any >= 3 && (r.c === s || (r.c === "weak" && r.any >= 4)); }
    } catch (e) { ok = false; }
    KA.ocr = false;
    if (g !== KAG || !K.open || K.step !== s || K.pv) return;
    if (!ok) { KA.ok = 0; if (fr) fr.classList.remove("lk"); kSt("k_auto"); KA.pause = Date.now() + 700; return; }
    if (fr) fr.classList.add("lk");
    KA.busy = true; kFlash(); hap("MEDIUM");
    setTimeout(() => {
      KA.busy = false;
      if (!K.open || K.step !== s || K.pv) return;
      K.pre[s] = ""; K.pv = shot; K.auto = true; K.adv = ""; K.repSrc = "cam"; K.imgWH = null; K.rep = null; K.vbusy = true; kycRender(); kVal();
    }, 180);
  })();
}


/* =====================================================================
   v2.39 — অটো ছবি আরও কড়া: ফ্রেমে আসল NID কার্ড থাকলে এবং তার লেখা পরিষ্কার পড়া গেলে তবেই ছবি।
   কাপড়/নকশা/দেয়াল/ফাঁকা জায়গার এলোমেলো দাগ থেকে ভুল করে ছবি উঠবে না।
   (১) শুধু ভরসাযোগ্য (confidence ≥ 62) শব্দ গোনা হয়  (২) পরপর দুইবার একই পাশের কার্ড পড়া গেলে তবেই ছবি
   ===================================================================== */
function kHiWords(d) {
  let ws = [];
  if (d && d.lines && d.lines.length) { for (const l of d.lines) for (const w of (l.words || [])) ws.push(w); }
  else if (d && d.words) ws = d.words;
  const hi = ws.filter(w => w && typeof w.text === "string" && (w.confidence || 0) >= 62 && w.text.replace(/[^\u0980-\u09FFA-Za-z0-9]/g, "").length >= 2);
  return {n: hi.length, txt: hi.map(w => w.text).join(" ")};
}
function kAutoTick() {
  if (KA.busy || KA.ocr || Date.now() < KA.pause || K.loadingGal || K.galOpen) return;
  const v = document.getElementById("kvid"), s = K.step;
  if (!v || !v.videoWidth || v.readyState < 2 || K.pv || (s !== "front" && s !== "back")) return;
  if (KA.hs !== s) { KA.hs = s; KA.hit = 0; }
  const m = kMet(v); if (!m) return;
  const fr = document.querySelector("#kyc .kfr");
  const lite = m.edge > .012 && m.edge < .85 && m.cells >= 5 && m.mean > 28 && m.mean < 252;
  const good = lite && m.diff < 14 && m.sharp > 24;
  if (!good) { KA.ok = 0; KA.hit = 0; if (fr) fr.classList.remove("lk"); kSt(!lite ? "k_auto" : m.diff >= 14 ? "k_steady" : "k_blur"); return; }
  KA.ok++; kSt("k_readc");
  if (KA.ok < 2) return;
  KA.ocr = true; const g = KAG, shot = kCardShot(v);
  (async () => {
    let ok = false;
    try {
      const cv = await kPrep(shot, 1300);
      const d = await Promise.race([kOcrData(cv, "", "auto"), kTO(8000)]);
      if (d && typeof d === "object") {
        const h = kHiWords(d), r = kClass2(h.txt);
        ok = h.n >= 6 && r.any >= 3 && r.c === s;
      }
    } catch (e) { ok = false; }
    KA.ocr = false;
    if (g !== KAG || !K.open || K.step !== s || K.pv) return;
    if (!ok) { KA.ok = 0; KA.hit = 0; if (fr) fr.classList.remove("lk"); kSt("k_auto"); KA.pause = Date.now() + 700; return; }
    if (++KA.hit < 2) return;
    KA.hit = 0; if (fr) fr.classList.add("lk");
    KA.busy = true; kFlash(); hap("MEDIUM");
    setTimeout(() => {
      KA.busy = false;
      if (!K.open || K.step !== s || K.pv) return;
      K.pre[s] = ""; K.pv = shot; K.auto = true; K.adv = ""; K.repSrc = "cam"; K.imgWH = null; K.rep = null; K.vbusy = true; kycRender(); kVal();
    }, 120);
  })();
}

/* =====================================================================
   v2.40 — নেটিভ অনুভূতি: ব্যাকগ্রাউন্ডে অ্যানিমেশন থামে; দ্রুত ডবল-ট্যাপে পেজ/শিট দুবার খোলা ঠেকানো
   ===================================================================== */
(function () {
  const de = document.documentElement;
  const sync = () => de.classList.toggle("fpbg", document.hidden);
  document.addEventListener("visibilitychange", sync); sync();
  /* একই বাটনে খুব দ্রুত দুবার চাপলে দ্বিতীয়টা বাদ (দুইবার পেজ খোলা/দুইবার অ্যানিমেশন চলা বন্ধ) */
  let lastT = 0, lastE = null;
  document.addEventListener("click", (ev) => {
    const b = ev.target && ev.target.closest && ev.target.closest("button[onclick],.it[onclick],.mr[onclick],.tr[onclick]");
    if (!b || b.closest("#kpad,#pinbar,#kbar,.kpg,.pin,.pinp")) { return; }
    const n = performance.now();
    if (b === lastE && n - lastT < 320) { ev.stopImmediatePropagation(); ev.preventDefault(); return; }
    lastE = b; lastT = n;
  }, true);
})();


/* =====================================================================
   v2.47 — স্মুথ পেজ, কিবোর্ড শুধু ট্যাপে, দ্রুত NID অটো-ছবি, ছোট লাইভনেস ভিডিও
   ===================================================================== */
Object.assign(T.bn, {bioT3: "ফিঙ্গারপ্রিন্ট লক"});
Object.assign(T.en, {bioT3: "Fingerprint lock"});
/* NID যাচাইয়ের পাতার লেখা: দুই ভাষাতেই ইংরেজি (শুধু এই দুই পাতায়) */
const K247 = {k_pb2: "Scanning the card", k_pb3: "Reading the card", k_pb4: "Checking image quality", k_pb5: "Analyzing the card", k_chk2: "Checking the card…", k_got: "Photo captured", k_rp_cam: "Photo captured", k_rp_gal: "Photo selected", k_readd: "Reading details from your NID", k_readw: "This may take a moment, please wait"};
Object.assign(T.bn, K247); Object.assign(T.en, K247);

/* স্ট্যাটাস বার সবসময় থিমের রঙে (বায়োমেট্রিক/অন্য অ্যাপ থেকে ফিরলে নেটিভ কালো হয়ে যেত) */
(function () {
  const re = () => { try { sbar(); } catch (e) {} };
  document.addEventListener("visibilitychange", () => { if (!document.hidden) { re(); setTimeout(re, 350); setTimeout(re, 1200); } });
  window.addEventListener("focus", () => { re(); setTimeout(re, 400); });
  setInterval(() => { if (!document.hidden && !S.auth) re(); }, 1500);
  try { const A = cap().App; if (A && A.addListener) A.addListener("appStateChange", (st) => { if (st && st.isActive) { re(); setTimeout(re, 300); setTimeout(re, 1000); } }); } catch (e) {}
})();

/* মডেল আগে থেকে নামানো: মুখ যাচাই ও মেলানোর সময় কালো অপেক্ষা কমায় */
function kPreload() { if (window.__kpre) return; window.__kpre = 1; setTimeout(() => { try { kFaceModel(); } catch (e) {} }, 600); }
function kPreloadFA() { if (window.__kpre2) return; window.__kpre2 = 1; try { kFA(); } catch (e) {} }

/* অটো ছবি: কার্ড ফ্রেমে স্থির ও পরিষ্কার হলেই (প্রায় আধা সেকেন্ডে) ছবি; যাচাই ছবি তোলার পরই এই ধাপে হয় */
function kAutoStart() {
  kAutoStop(); KA.ok = 0; KA.none = 0; KA.prev = null; KA.busy = false; KA.t0 = Date.now(); kWorker();
  KA.pause = document.getElementById("kpop") ? Infinity : 0; KA.tm = setInterval(kAutoTick, 220); KA.mt = setTimeout(kManualShow, 7000);
}
function kAutoTick() {
  if (KA.busy || Date.now() < KA.pause || K.loadingGal || K.galOpen) return;
  const v = document.getElementById("kvid"), s = K.step;
  if (!v || !v.videoWidth || v.readyState < 2 || K.pv || (s !== "front" && s !== "back")) return;
  const m = kMet(v); if (!m) return;
  const late = Date.now() - (KA.t0 || 0) > 3500, fr = document.querySelector("#kyc .kfr");
  const lite = late ? (m.edge > .008 && m.edge < .85 && m.cells >= 3 && m.mean > 25 && m.mean < 252) : (m.edge > .012 && m.edge < .8 && m.cells >= 5 && m.mean > 30 && m.mean < 250);
  const good = lite && m.diff < 16 && m.sharp > (late ? 16 : 22);
  if (!good) { KA.ok = 0; if (fr) fr.classList.remove("lk"); kSt(!lite ? "k_auto" : m.diff >= 16 ? "k_steady" : "k_blur"); return; }
  KA.ok++; if (fr) fr.classList.add("lk"); kSt("k_hold");
  if (KA.ok < 2) return;
  KA.ok = 0; KA.busy = true;
  const shot = kCardShot(v); kFlash(); hap("MEDIUM");
  setTimeout(() => {
    KA.busy = false;
    if (!K.open || K.step !== s || K.pv) return;
    K.pre[s] = ""; K.pv = shot; K.auto = true; K.adv = ""; K.repSrc = "cam"; K.imgWH = null; K.rep = null; K.vbusy = true; kycRender(); kVal();
  }, 120);
}
async function kVal() {
  const s = K.step, img = K.pv; let txt, geo = null;
  try { const cv = await kPrep(img, 1200); geo = kGeoCv(cv); txt = await Promise.race([kOcrText(cv, ""), kTO(9000)]); } catch (e) { txt = undefined; }
  if (K.pv !== img || K.step !== s) return;
  K.vbusy = false;
  const j = kJudge(txt === undefined ? null : txt, s, geo);
  if (j === "notid") { kReject("k_notid", "k_notidm"); return; }
  if (j.indexOf("wrong") === 0) { kReject("k_wrong", j === "wrong:front" ? "k_isf" : "k_isb"); return; }
  if (typeof txt === "string" && txt) K.pre[s] = txt;
  K.rep = kMakeRep(s, K.repSrc || "cam", geo, txt, img);
  K.adv = (!K.rep.warn) ? img : "";
  kycRender();
  if (K.adv === img) K.at = setTimeout(() => { if (K.pv === img && K.step === s && K.adv === img) kUse(); }, 1100);
}

/* লাইভনেস: মোট ৩ ধাপ (১টি পলক + ২টি এলোমেলো মুখ ঘোরানো) */
function kFaceOrd() {
  const a = ["right", "left", "up", "down"];
  for (let i = a.length - 1; i > 0; i--) { const j = kRnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  const r = a.slice(0, 2); r.splice(kRnd(3), 0, "blink"); return r;
}
/* শেষ হলে কালো নয়: শেষ ছবিটাই ওভালে স্থির থাকে, আর দ্রুত পরের পাতায় যায় */
function kFaceFinish() {
  KFc.on = false; clearTimeout(KFc.tm); K.selfie = KFc.shot; kFaceMsg("k_fok"); kFaceProg(1);
  K.live = {ok: !KFc.nob, mode: "live", ord: KFc.ord.slice(), ms: Date.now() - (KFc.tc || KFc.t0), rs: KFc.rs, fr: KFc.fr.slice()};
  K.mres = null; K.desc = null;
  try { const w = document.querySelector("#kyc .kwin"); if (w && KFc.shot) { const im = new Image(); im.className = "kpvi kfz"; im.src = KFc.shot; im.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scaleX(-1)"; w.appendChild(im); } } catch (e) {}
  const u = document.getElementById("kou"); if (u) u.classList.add("dn"); const o = document.querySelector("#kyc .kov"); if (o) o.classList.add("fin");
  const a = document.getElementById("kfarr"); if (a) a.className = "kfarr h";
  setTimeout(() => { if (K.step === "face") { K.pv = ""; K.step = "match"; K.err = ""; kycRender(); } }, 550);
}

/* =====================================================================
   v2.49 — ফোনের ক্ষমতা অনুযায়ী ৩ ধাপ: html.lowend (কম RAM/ধীর ফোন: কম অ্যানিমেশন, সাধারণ সলিড),
   সাধারণ (মাঝারি), html.hiend (ভালো ফোন: পুরো কাচ + পুরো শক্তির মসৃণ অ্যানিমেশন)
   ===================================================================== */
(function () {
  try {
    const de = document.documentElement; let st = null;
    try { st = localStorage.getItem("fptier"); } catch (e) {}
    const set = (tier) => { de.classList.toggle("lowend", tier === "low"); de.classList.toggle("hiend", tier === "hi"); };
    const m = navigator.deviceMemory || 0, c = navigator.hardwareConcurrency || 0;
    const guess = ((m && m <= 3) || (c && c <= 4)) ? "low" : ((m >= 6 && c >= 8) ? "hi" : "mid");
    set(st === "low" || st === "mid" || st === "hi" ? st : guess);
    if (!st) {
      /* একবার ফ্রেম-রেট মেপে ঠিক করা (ফলাফল মনে রাখে) */
      setTimeout(() => {
        let n = 0, t0 = 0, done = false;
        const fin = (fps) => {
          if (done) return; done = true; if (!fps) return;
          let tier = fps < 38 ? "low" : fps >= 55 && guess !== "low" && (m >= 6 || c >= 8) ? "hi" : "mid";
          if (guess === "low" && tier === "hi") tier = "mid";
          try { localStorage.setItem("fptier", tier); localStorage.setItem("fplow", tier === "low" ? "1" : "0"); } catch (e) {}
          set(tier);
        };
        const f = (t) => { if (done) return; if (!t0) t0 = t; n++; if (t - t0 < 1400) requestAnimationFrame(f); else fin(n * 1000 / (t - t0)); };
        requestAnimationFrame(f); setTimeout(() => fin(0), 4000);
      }, 3500);
    }
  } catch (e) {}
})();


/* =====================================================================
   v2.53 — NID: (১) সার্ভার OCR (Google Vision, ফ্রি লিমিটে; ফোনের Tesseract শুধু বিকল্প)
           (২) অটো-ছবি শুধু আসল কার্ড দেখলে: সামনে = ছবির মুখ + লেখার লাইন, পেছনে = বারকোড/লেখার লাইন
           (৩) তোলার পর ছবিতে NID-র লেখা না পেলে ছবি বাতিল (কাপড়/দেয়ালের ছবি আর গ্রহণ হয় না)
   ===================================================================== */
Object.assign(T.bn, {k_notcard: "NID কার্ড পাওয়া যাচ্ছে না। কার্ডটি ফ্রেমের ভেতরে ধরুন।"});
Object.assign(T.en, {k_notcard: "No ID card found. Place your NID card inside the frame."});

/* ---- সার্ভারে লেখা পড়া (Supabase Edge Function: nid-ocr) ---- */
const KSRV = {on: true};
const KSV = {front: null, back: null};
function kSrvRead(img, side) {
  if (!KSRV.on) return Promise.resolve(null);
  const c = KSV[side]; if (c && c.img === img) return c.p;
  const BASE = String(SUPA_URL).replace(/[\s"']/g, "").replace(/\/+$/, ""), KEY = String(SUPA_KEY).replace(/[\s"']/g, "");
  if (!BASE || !KEY || !S.tok) return Promise.resolve(null);
  const p = (async () => {
    try {
      const cv = await kPrep(img, 1280, "none");
      const b64 = cv.toDataURL("image/jpeg", .8).split(",")[1];
      const ctl = new AbortController(), tm = setTimeout(() => ctl.abort(), 9000);
      let r; try { r = await fetch(BASE + "/functions/v1/nid-ocr", {method: "POST", signal: ctl.signal, headers: {apikey: KEY, Authorization: "Bearer " + S.tok, "Content-Type": "application/json"}, body: JSON.stringify({image: b64, side})}); } finally { clearTimeout(tm); }
      if (!r.ok) { if (r.status === 404 || r.status === 503) KSRV.on = false; console.log("srvocr", r.status); return null; }
      const j = await r.json();
      if (!j || !j.ok || typeof j.text !== "string") return null;
      return {text: j.text, srv: 1, lines: (j.lines || []).map(l => ({text: l.t, words: (l.w || []).map(w => ({text: w[0], confidence: w[1]}))}))};
    } catch (e) { console.log("srvocr", e && e.message); return null; }
  })();
  KSV[side] = {img, p}; return p;
}
/* ---- ফোনের ভেতরে তাৎক্ষণিক পড়া: Google ML Kit (নেটিভ, ফ্রি, <১ সেকেন্ড; ইংরেজি/সংখ্যা)। প্লাগইন না থাকলে null ---- */
const KMLC = {front: null, back: null};
const kMlAvail = () => { try { return !!(window.Capacitor && Capacitor.isPluginAvailable && Capacitor.isPluginAvailable("NidOcr") && cap().NidOcr && cap().NidOcr.recognize); } catch (e) { return false; } };
function kMlRead(img, side) {
  if (!kMlAvail()) return Promise.resolve(null);
  const c = KMLC[side]; if (c && c.img === img) return c.p;
  const p = (async () => {
    try {
      const cv = await kPrep(img, 1600, "none");
      const b64 = cv.toDataURL("image/jpeg", .85).split(",")[1];
      const r = await Promise.race([cap().NidOcr.recognize({image: b64}), kTO(4000)]);
      if (!r || typeof r.text !== "string") return null;
      return {text: r.text, ml: 1, lines: (r.lines || []).map(l => ({text: l.t, words: (l.w || []).map(w => ({text: w[0], confidence: w[1]}))}))};
    } catch (e) { console.log("mlocr", e && e.message); return null; }
  })();
  KMLC[side] = {img, p}; return p;
}
/* ছবি তোলামাত্র দুটোই একসাথে শুরু (একটা অন্যটার জন্য অপেক্ষা করে না) */
function kKick(img, side) { kMlRead(img, side); kSrvRead(img, side); }
/* সামনের দিকের তথ্য: সার্ভারের পড়া পেলে সেটাই (ভরসা মান সহ), নইলে আগের ফোনের Tesseract পথ */
async function kStrictFront(img, pre) {
  kKick(img, "front");
  const [g, m] = await Promise.all([kSrvRead(img, "front"), kMlRead(img, "front")]);
  if (g || m) {
    KPS = {i: 0, n: 1};
    const rg = g && kReadOf(g), rm = m && kReadOf(m);
    let R, weak = false;
    if (rg && rm) { R = kDecide([rg, rm]); if (!(R.nidOk && R.nameOk)) { const Rg = kDecide([rg, rg]); weak = !!(Rg.nidOk || Rg.nameOk); R = Rg; } }
    else { const r1 = rg || rm; R = kDecide([r1, r1]); }
    R.weak = weak; R.text = (g && g.text) || (m && m.text) || ""; return R;
  }
  return kStrictFrontLocal(img, pre);
}

/* ---- যাচাই: সার্ভারের পড়ায় ID-র লেখা না পেলে কার্ড নয়; ফোনের পড়া ধীর/ঝাপসা হলে আগের নরম নিয়ম ---- */
function kJudge(txt, side, geo, src) {
  const like = !geo || geo.cardLike, ev = !!(K.gate && K.gate.s === side && K.gate.ok);
  if (typeof txt !== "string") return (ev || like) ? "ok" : "notid";
  const r = kClass2(txt);
  if (side === "front" && r.c === "back" && r.bs >= 2) return "wrong:back";
  if (side === "back" && r.c === "front" && r.fs >= 3 && r.bs === 0) return "wrong:front";
  if (src === "srv") return r.any >= 2 ? "ok" : "notid";
  if (r.c === "none") return (ev || like) ? "ok" : "notid";
  return "ok";
}
async function kVal() {
  const s = K.step, img = K.pv; let txt, geo = null, src = "loc";
  try { geo = kGeoCv(await kPrep(img, 600)); } catch (e) {}
  const d = await kSrvRead(img, s);
  if (K.pv !== img || K.step !== s) return;
  if (d) { txt = d.text || ""; src = "srv"; }
  else {
    try { const cv = await kPrep(img, 1200); txt = await Promise.race([kOcrText(cv, ""), kTO(8000)]); } catch (e) { txt = undefined; }
    if (K.pv !== img || K.step !== s) return;
  }
  K.vbusy = false;
  const j = kJudge(txt === undefined ? null : txt, s, geo, src); K.gate = null;
  if (j === "notid") { kReject("k_notid", "k_notidm"); return; }
  if (j.indexOf("wrong") === 0) { kReject("k_wrong", j === "wrong:front" ? "k_isf" : "k_isb"); return; }
  if (typeof txt === "string" && txt) K.pre[s] = txt;
  K.rep = kMakeRep(s, K.repSrc || "cam", geo, txt, img);
  K.adv = (!K.rep.warn) ? img : "";
  kycRender();
  if (K.adv === img) K.at = setTimeout(() => { if (K.pv === img && K.step === s && K.adv === img) kUse(); }, 1100);
}

/* ---- কার্ড চেনার হালকা পরীক্ষা (ফোনের ভেতরে, ফ্রি, সার্ভার লাগে না) ---- */
let KFSp = null;
function kFAScript() {
  if (window.faceapi) return Promise.resolve(window.faceapi);
  if (!KFSp) KFSp = new Promise((ok, no) => { const s = document.createElement("script"); s.src = KMB + "/dist/face-api.js"; s.onload = () => ok(window.faceapi); s.onerror = () => { KFSp = null; no(new Error("FA")); }; document.head.appendChild(s); });
  return KFSp;
}
let KTFp = null, KTFbad = 0;
function kTiny() {
  if (KFA) return Promise.resolve(KFA);
  if (KTFbad >= 2) return Promise.resolve(null);
  if (!KTFp) KTFp = (async () => {
    try {
      const f = await kFAScript(); if (!f) throw new Error("FA");
      try { await f.tf.setBackend("webgl"); } catch (e) {}
      try { await f.tf.ready(); } catch (e) {}
      await f.nets.tinyFaceDetector.loadFromUri(KMB + "/model/");
      return f;
    } catch (e) { KTFbad++; KTFp = null; console.log("tiny", e && e.message); return null; }
  })();
  return KTFp;
}
function kFrameCv(v, W) {
  const R = kRegion(v, 0) || {x: 0, y: 0, w: v.videoWidth, h: v.videoHeight}, H = Math.max(40, Math.round(W * R.h / R.w));
  const c = document.createElement("canvas"); c.width = W; c.height = H;
  c.getContext("2d", {willReadFrequently: true}).drawImage(v, R.x, R.y, R.w, R.h, 0, 0, W, H); return c;
}
/* লেখার লাইন গোনা: কার্ডে সারি সারি লেখা থাকে (লাইন ও ফাঁক পর পর)। কাপড়/নকশা/ফাঁকা দেয়ালে এমন নিয়মিত সারি হয় না */
function kBandsGr(gr, W, H, x0f, x1f) {
  const x0 = Math.floor(W * x0f), x1 = Math.floor(W * x1f), raw = new Float32Array(H), rows = new Float32Array(H);
  for (let y = 1; y < H - 1; y++) { let e = 0; for (let x = x0 + 1; x < x1 - 1; x++) { const i = y * W + x; if (Math.abs(gr[i + 1] - gr[i - 1]) > 26) e++; } raw[y] = e / Math.max(1, x1 - x0 - 2); }
  let sum = 0; for (let y = 1; y < H - 1; y++) { rows[y] = (raw[y - 1] + raw[y] * 2 + raw[y + 1]) / 4; sum += rows[y]; }
  const thr = Math.max(.04, sum / H * 1.2); let run = 0, bands = 0, ink = 0;
  for (let y = 1; y < H - 1; y++) { if (rows[y] > thr) { run++; ink++; } else { if (run >= 3 && run <= 22) bands++; run = 0; } }
  if (run >= 3 && run <= 22) bands++;
  return {bands, ink: ink / Math.max(1, H - 2)};
}
function kBands(cv, x0f, x1f) {
  const W = cv.width, H = cv.height, d = cv.getContext("2d", {willReadFrequently: true}).getImageData(0, 0, W, H).data, gr = new Uint8Array(W * H);
  for (let i = 0, j = 0; j < W * H; i += 4, j++) gr[j] = (d[i] * 77 + d[i + 1] * 150 + d[i + 2] * 29) >> 8;
  return kBandsGr(gr, W, H, x0f, x1f);
}
const kTextOk = (b) => b.bands >= 3 && b.bands <= 24 && b.ink > .18 && b.ink < .78;
/* সামনের দিক: কার্ডের বাঁ পাশে ছবির মুখ (ছোট ফেস-ডিটেক্টর, ফোনের ভেতরে) */
async function kFaceCheck(cv) {
  const f = await kTiny(); if (!f) return null;
  const all = await f.detectAllFaces(cv, new f.TinyFaceDetectorOptions({inputSize: 320, scoreThreshold: .5}));
  const W = cv.width, H = cv.height;
  for (const r of (all || [])) {
    const b = r.box || (r.detection && r.detection.box); if (!b) continue;
    const cx = (b.x + b.width / 2) / W, cy = (b.y + b.height / 2) / H, wf = b.width / W;
    if (cx >= .03 && cx <= .55 && cy >= .18 && cy <= .88 && wf >= .07 && wf <= .38) return {ok: true};
  }
  return {ok: false};
}
/* পেছনের দিক: ফোনের ভেতরের ML Kit দিয়ে 2D বারকোড (PDF417/QR/DataMatrix) আছে কিনা */
let KBCbad = 0;
async function kBarcodeCheck(cv) {
  const B = cap().BarcodeScanner, F = cap().Filesystem;
  if (KBCbad >= 3 || !B || !B.readBarcodesFromImage || !F || !F.writeFile) return null;
  try {
    const b64 = cv.toDataURL("image/jpeg", .85).split(",")[1];
    const w = await F.writeFile({path: "kgate.jpg", data: b64, directory: "CACHE"});
    const r = await B.readBarcodesFromImage({path: w.uri});
    const bs = (r && r.barcodes) || [];
    return {ok: bs.some(b => /PDF|QR|DATA_?MATRIX|AZTEC/i.test(String(b.format || "")))};
  } catch (e) { KBCbad++; console.log("bc", e && e.message); return null; }
}
async function kGate(v, s) {
  const res = {s, ok: false};
  if (s === "front") {
    const b = kBands(kFrameCv(v, 360), .40, .98); res.b = b;
    if (!kTextOk(b)) return res;
    const fc = await kFaceCheck(kFrameCv(v, 480)); res.face = fc;
    res.ok = fc === null ? b.bands >= 5 : fc.ok;   /* ফেস মডেল না এলে শুধু লেখার লাইনে; তোলার পর সার্ভার যাচাই তো আছেই */
    return res;
  }
  const b = kBands(kFrameCv(v, 360), .04, .96); res.b = b;
  if (!kTextOk(b)) return res;
  const bc = await kBarcodeCheck(kFrameCv(v, 900)); res.bc = bc;
  res.ok = bc ? (bc.ok || b.bands >= 6) : b.bands >= 5;
  return res;
}

/* ---- অটো ছবি: কার্ড স্থির + আসল NID কার্ডের চিহ্ন (পরপর দুবার) পেলে তবেই ---- */
function kAutoStart() {
  kAutoStop(); KA.ok = 0; KA.none = 0; KA.hit = 0; KA.miss = 0; KA.prev = null; KA.busy = false; KA.ocr = false; KA.t0 = Date.now(); K.gate = null;
  if (!KSRV.on || !S.tok) kWorker();
  if (K.step === "front") kTiny();
  KA.pause = document.getElementById("kpop") ? Infinity : 0; KA.tm = setInterval(kAutoTick, 260); KA.mt = setTimeout(kManualShow, 9000);
}
function kAutoTick() {
  if (KA.busy || KA.ocr || Date.now() < KA.pause || K.loadingGal || K.galOpen) return;
  const v = document.getElementById("kvid"), s = K.step;
  if (!v || !v.videoWidth || v.readyState < 2 || K.pv || (s !== "front" && s !== "back")) return;
  const m = kMet(v); if (!m) return;
  const fr = document.querySelector("#kyc .kfr");
  const lite = m.edge > .012 && m.edge < .85 && m.cells >= 5 && m.mean > 28 && m.mean < 252;
  const good = lite && m.diff < 16 && m.sharp > 22;
  if (!good) { KA.ok = 0; KA.hit = 0; KA.miss = 0; if (fr) fr.classList.remove("lk"); kSt(!lite ? "k_auto" : m.diff >= 16 ? "k_steady" : "k_blur"); return; }
  KA.ok++; if (KA.ok < 2) { kSt("k_readc"); return; }
  KA.ocr = true; const g = KAG;
  (async () => {
    let ev = null; try { ev = await kGate(v, s); } catch (e) { console.log("gate", e && e.message); }
    KA.ocr = false;
    if (g !== KAG || !K.open || K.step !== s || K.pv) return;
    if (!ev || !ev.ok) { KA.hit = 0; KA.miss++; if (fr) fr.classList.remove("lk"); kSt(KA.miss >= 2 ? "k_notcard" : "k_readc"); KA.pause = Date.now() + 300; return; }
    if (++KA.hit < 2) { kSt("k_hold"); if (fr) fr.classList.add("lk"); return; }
    KA.hit = 0; KA.miss = 0; KA.busy = true; const shot = kCardShot(v); K.gate = ev; kFlash(); hap("MEDIUM");
    setTimeout(() => {
      KA.busy = false;
      if (!K.open || K.step !== s || K.pv) return;
      K.pre[s] = ""; K.pv = shot; K.auto = true; K.adv = ""; K.repSrc = "cam"; K.imgWH = null; K.rep = null; K.vbusy = true; kycRender(); kVal();
    }, 100);
  })();
}

/* =====================================================================
   v2.54 — NID ছবি তোলার পর: যাচাই-তালিকা বাদ, নিজে নিজে পরের ধাপ, ম্যানুয়ালে Retake/Submit
   - অটো ছবি: যাচাই চলে (স্ক্যান-রেখা), ঠিক হলে সবুজ টিক-অ্যানিমেশন, তারপর নিজে পরের পাতায়
   - ম্যানুয়াল (শাটার/গ্যালারি): ছবি দেখে Retake বা Submit; Submit চাপলে তখন ছবি যাচাই
   - কিছু ঠিক না থাকলে (ঝাপসা, কার্ড নয়, লেখা কম...) তালিকা নয়, একটি লাইন + Retake / Continue
   ===================================================================== */
Object.assign(T.bn, {k_sbm: "সাবমিট", k_cont: "চালিয়ে যান"});
Object.assign(T.en, {k_sbm: "Submit", k_cont: "Continue"});

function kScan(side) {
  const fr = side === "front", pv = K.pv, ok = !!pv && K.okp === pv, wm = pv && K.wm && K.wm.img === pv ? K.wm.k : "";
  const busy = !!pv && !!K.vbusy && !ok, rdy = !!pv && !K.vbusy && !ok;
  const sweep = busy ? '<u class="kswp"></u>' : "";
  const tick = ok ? '<div class="kdone"><svg viewBox="0 0 80 80" aria-hidden="true"><circle class="kdb" cx="40" cy="40" r="34"/><path class="kdt" d="M25 41l10.5 10.5L56 30"/></svg><i></i><i></i></div>' : "";
  const chip = busy ? `<div class="kchk"><i class="kspin"></i><span>${t("k_chk2")}</span></div>` : "";
  const btn = rdy ? `${wm ? `<div class="kwn"><i>!</i><span>${t(wm)}</span></div>` : ""}<div class="krow"><button class="kgh" onclick="kRetake()">${t("k_retake")}</button><button class="kgo" onclick="${wm ? "kWarnGo()" : "kSbm()"}">${t(wm ? "k_cont" : "k_sbm")}</button></div>` : "";
  return `<div class="kcam kn">${kBg()}
    <div class="ktp"><button class="kbk" onclick="kBack()">${kBk}</button><b></b><em>${fr ? 1 : 2}/2</em></div>${kLogo(t(fr ? "k_front" : "k_back"))}
    <div class="kwr${pv ? " pv" : ""}${ok ? " okp" : ""}"><div class="kwin">${pv ? `<img class="kpvi" src="${pv}" alt="">` : kVid()}${sweep}</div>
      <div class="kfr${pv && !K.vbusy ? " dn" : ""}${wm ? " wn" : ""}"><i class="c1"></i><i class="c2"></i><i class="c3"></i><i class="c4"></i>${pv ? "" : '<u class="kln"></u>'}</div>${tick}</div>${chip}
    <div class="kbt">${pv ? btn : `<p id="kst">${t("k_auto")}</p>`}
      ${pv ? "" : `<div class="ksh"><button type="button" class="kgal" aria-label="Gallery" onclick="kGalOpen()">${kic("gal")}</button><button class="kshut" aria-label="${t("k_snap")}" onclick="kSnap()"><i></i></button><span class="kgal sp"></span></div>`}
      <small class="knc" id="knc"></small></div></div>`;
}

/* ম্যানুয়াল শাটার: ছবি তুলে দেখায়, যাচাই হয় না (Submit চাপলে হবে) */
function kSnap() {
  const v = document.getElementById("kvid");
  if (!v || !v.videoWidth) { toast(t("k_nocam")); return; }
  hap("MEDIUM"); const face = K.step === "face";
  K.pv = face ? kShrink(v, 1800, .86) : kCardShot(v); K.auto = false; kcamStop();
  if (face) { kycRender(); return; }
  K.repSrc = "cam"; K.imgWH = null; K.rep = null; K.vbusy = false; K.okp = ""; K.wm = null; K.pre[K.step] = "";
  kycRender();
}
/* গ্যালারির ছবিও ম্যানুয়াল: Retake / Submit */
function kFile(inp) {
  const f = inp && inp.files && inp.files[0];
  if (!f) { kCamBack(); return; }
  const side = K.step;
  if (side !== "front" && side !== "back") { try { inp.value = ""; } catch (e) {} return; }
  K.loadingGal = true; KA.pause = Infinity; kcamStop();
  const u = URL.createObjectURL(f), im = new Image();
  const done = () => { try { URL.revokeObjectURL(u); } catch (e) {} try { inp.value = ""; } catch (e) {} };
  im.onload = async () => {
    let shot = false; try { shot = await kIsShot(f, im); } catch (e) {}
    K.loadingGal = false;
    if (K.step !== side) { done(); return; }
    if (shot) { done(); kPop(t("k_shh"), t("k_shm")); return; }
    K.pv = kShrink(im, 1800, .86); K.repSrc = "gal"; K.imgWH = [im.naturalWidth, im.naturalHeight]; done();
    K.auto = false; K.adv = ""; K.pre[side] = ""; K.rep = null; K.vbusy = false; K.okp = ""; K.wm = null; kycRender();
  };
  im.onerror = () => { done(); K.loadingGal = false; toast(t("k_nocam")); kCamBack(); };
  im.src = u;
}
/* Submit: এখন ছবি যাচাই শুরু */
function kSbm() {
  if (!K.pv || K.vbusy || (K.step !== "front" && K.step !== "back")) return;
  hap(); clearTimeout(K.at); K.vbusy = true; K.wm = null; K.okp = ""; kycRender(); kVal();
}
/* কিছু ঠিক না থাকলেও ইউজার চাইলে এগোতে পারে */
function kWarnGo() {
  const img = K.pv, s = K.step; if (!img || K.vbusy || (s !== "front" && s !== "back")) return;
  kOkGo(img, s);
}
/* সবুজ টিক-অ্যানিমেশন দেখিয়ে নিজে পরের পাতায় */
function kOkGo(img, s) {
  clearTimeout(K.at); K.okp = img; K.wm = null; hap("MEDIUM"); kycRender();
  K.at = setTimeout(() => { if (K.pv === img && K.step === s && K.okp === img) kUse(); }, 950);
}
async function kVal() {
  const s = K.step, img = K.pv; let txt, geo = null, src = "loc";
  kKick(img, s);
  try { geo = kGeoCv(await kPrep(img, 600)); } catch (e) {}
  let d = await kMlRead(img, s);               /* তাৎক্ষণিক (ML Kit) */
  if (K.pv !== img || K.step !== s) return;
  let repTxt;
  if (d) { txt = d.text || ""; src = "loc"; const rc = kClass2(txt); repTxt = rc.c === s ? txt : undefined; }
  else {
    d = await Promise.race([kSrvRead(img, s), kTO(7000)]);   /* ML Kit নেই: Gemini (সর্বোচ্চ ৭s) */
    if (K.pv !== img || K.step !== s) return;
    if (d) { txt = d.text || ""; src = "srv"; repTxt = txt; }
    else {
      try { const cv = await kPrep(img, 1200); txt = await Promise.race([kOcrText(cv, ""), kTO(8000)]); } catch (e) { txt = undefined; }
      if (K.pv !== img || K.step !== s) return;
      repTxt = txt;
    }
  }
  K.vbusy = false;
  const j = kJudge(txt === undefined ? null : txt, s, geo, src); K.gate = null;
  if (j === "notid") { kReject("k_notid", "k_notidm"); return; }
  if (j.indexOf("wrong") === 0) { kReject("k_wrong", j === "wrong:front" ? "k_isf" : "k_isb"); return; }
  if (typeof txt === "string" && txt && src !== "loc") K.pre[s] = txt;
  K.rep = kMakeRep(s, K.repSrc || "cam", geo, repTxt, img);
  if (K.rep.warn) {
    const bad = K.rep.it.find(x => !x.ok);
    K.wm = {img, k: bad ? bad.k : "k_rp_warn"}; hap("HEAVY"); kycRender(); return;
  }
  kOkGo(img, s);
}
function kRetake() { hap(); clearTimeout(K.at); K.rep = null; K.pv = ""; K.auto = false; K.vbusy = false; K.okp = ""; K.wm = null; kycRender(); }
function kReject(a, b) { clearTimeout(K.at); K.pv = ""; K.vbusy = false; K.auto = false; K.okp = ""; K.wm = null; K.pre[K.step] = ""; kycRender(); kPop(t(a), t(b)); }
function kUse() {
  hap(); clearTimeout(K.at); K.auto = false; K.rep = null; K.okp = ""; K.wm = null; K.adv = "";
  if (K.step === "front" && K.cardOnly) { K.front = K.pv; K.pv = ""; K.cardOnly = false; K.cardDesc = null; K.cardThumb = ""; K.cardQ = null; K.mres = null; K.desc = null; K.step = "match"; kycRender(); return; }
  if (K.step === "front") { K.front = K.pv; K.pv = ""; K.pg.front = 0; K.p1 = kRead(K.front, "front"); K.step = K.redo ? "info" : "back"; if (K.redo) { K.redo = false; K.reading = true; } K.cardDesc = null; K.cardThumb = ""; K.cardQ = null; K.mres = null; kFaceModel(); kFA(); }
  else { K.back = K.pv; K.pv = ""; K.pg.back = 0; K.p2 = kRead(K.back, "back"); K.step = "info"; K.reading = true; }
  kycRender();
}

/* =====================================================================
   v2.55 — ফেস স্ক্যান: গোল ক্যামেরা + দাগ-দাগ (টিক) রিং। যেদিকে মুখ ঘোরে সেদিকের দাগগুলো রঙিন হয়।
   লাইভনেসের নিয়ম (এলোমেলো ৩ ধাপ, মুখ মেলানো, সার্ভার) একটুও বদলায়নি, শুধু রিং ও ঘরের আকৃতি।
   ===================================================================== */
function kRingArc(id, a1, a2) {
  const R = 47, C = 50, p = (a) => { const r = a * Math.PI / 180; return (C + R * Math.cos(r)).toFixed(2) + " " + (C + R * Math.sin(r)).toFixed(2); };
  const d = `M${p(a1)} A${R} ${R} 0 0 1 ${p(a2)}`;
  return `<g id="kra${id}" class="kra"><mask id="kmk${id}" maskUnits="userSpaceOnUse" x="-10" y="-10" width="120" height="120"><path d="${d}" pathLength="100" fill="none" stroke="#fff" stroke-width="8" stroke-dasharray="1.2 4.356"/></mask><path class="krt" d="${d}" pathLength="100"/><g mask="url(#kmk${id})"><path class="krf" d="${d}" pathLength="100"/></g></g>`;
}
function kFace() {
  const pv = K.pv; if (!pv) KFc.ord = kFaceOrd();
  const dots = [0, 1, 2].map(i => `<i id="kdt${i}"></i>`).join("");
  return `<div class="kcam kn kf2 kf3">${kBg()}
    <div class="ktp"><button class="kbk" onclick="kBack()">${kBk}</button><b class="ktt">${t("k_face")}</b><em>3/4</em></div>${kLogo()}
    <div class="kwr ov" id="kwr"><div class="kwin">${pv ? `<img class="kpvi" src="${pv}" alt="">` : kVid().replace('id="kvid"', 'id="kvid" class="mir"')}</div>
      ${pv ? "" : `<svg class="krg" viewBox="0 0 100 100" aria-hidden="true">${kRingArc(0, -45, 45)}${kRingArc(1, 45, 135)}${kRingArc(2, 135, 225)}${kRingArc(3, 225, 315)}</svg>`}</div>
    <div class="kov"><u id="kou" class="${pv ? "dn" : ""}"></u><div class="kfok">${kTickI}</div></div><div class="kcnt" id="kcnt"></div>${pv ? "" : '<div class="kfarr h" id="kfarr"></div>'}
    <div class="kbt">${pv ? `<div class="krow"><button class="kgh" onclick="kRetake()">${t("k_retake")}</button><button class="kgo" onclick="kFaceUse()">${t("k_use")}</button></div>`
      : `<div class="kdir pop" id="kdir"><div class="kgd" id="kgd">${KGUIDE}</div><div class="kdt2"><b id="kst" class="kfm">${t("k_fload")}</b><span class="kdots d5">${dots}</span></div></div>
         <div class="kpg"><div class="kfbar"><i id="kfp"></i></div><div class="kfpc" id="kfpc">0%</div></div><div class="ksh"><span class="kgal sp"></span><button class="kshut" aria-label="${t("k_snap")}" onclick="kFaceCount()"><i></i></button><span class="kgal sp"></span></div>`}
      <small class="knc" id="knc"></small></div></div>`;
}
