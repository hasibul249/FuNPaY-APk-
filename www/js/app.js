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
P.fp = '<path fill="currentColor" stroke="none" d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/>';
P.lock = '<rect x="5" y="11" width="14" height="10" rx="2.5" fill="currentColor"/><path d="M8 11V8a4 4 0 018 0v3" fill="none"/><circle cx="12" cy="16" r="1.5" fill="#fff" stroke="none"/>';
P.ok2 = '<circle cx="12" cy="12" r="9.5"/><path d="M7.5 12.4l3 3 6-6.4"/>';
P.copy = '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 012-2h9"/>';
P.shr = '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>';
P.eye = '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'; P.eyeo = '<path d="M3 3l18 18M10.6 6.2A9.6 9.6 0 0112 6c6 0 10 6 10 6a17 17 0 01-3.2 3.8M6.5 7.6C3.9 9.3 2 12 2 12s4 7 10 7c1.5 0 2.9-.4 4.1-1"/>';
const ic = (k) => `<svg class="i" viewBox="0 0 24 24">${P[k]}</svg>`;
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
 neterr:"ইন্টারনেট নেই, আবার চেষ্টা করুন", errg:"কিছু ভুল হয়েছে", exists:"এই নম্বরে আগেই অ্যাকাউন্ট খোলা আছে", soon:"এই সার্ভিস শীঘ্রই আসছে", myqr:"আমার QR", scanqr:"QR স্ক্যান করুন",
 scanh:"অন্যের QR স্ক্যান করে টাকা পাঠান বা এজেন্টের কাছে ক্যাশ আউট করুন", qrhint:"এই QR দেখালেই যে কেউ আপনাকে টাকা পাঠাতে পারবে", noscan:"স্ক্যানার শুধু অ্যাপের ভেতরে চলে", badqr:"এটি FuNPaY এর QR নয়",
 got:"পেয়েছেন", newacc:"নতুন অ্যাকাউন্ট", haveacc:"অ্যাকাউন্ট আছে? লগইন করুন", other:"অন্য নম্বর", pin4:"৬ ডিজিট PIN", reg:"অ্যাকাউন্ট খুলুন", setup:"ব্যাকএন্ড সেট করা নেই। README দেখে SUPA_URL আর SUPA_KEY বসান।",
 rcv:"প্রাপক", ep:"আপনার মোবাইল নম্বর", cont:"চালিয়ে যান", cobad:"ক্যাশ আউট সর্বনিম্ন ৫০ টাকা", addmax:"একবারে সর্বোচ্চ ৫,০০০ টাকা", badpin:"PIN ৬ ডিজিটের হতে হবে", back2:"স্বাগতম, আবার",
 conf1:"Supabase এ Confirm email বন্ধ করুন", lp:"আপনার ৬ ডিজিট PIN দিন", dm:"টেস্ট ভার্সন: এই ব্যালেন্স আসল টাকা নয়", cashw:"এটি টেস্ট ব্যালেন্স, আসল টাকা নয়। এজেন্টের কাছ থেকে আসল টাকা নেবেন না।", bioT:"ফিঙ্গারপ্রিন্ট / স্ক্রিন লক দিয়ে আনলক", bioD:"পরের বার PIN-এর বদলে আঙুলের ছাপ বা ফোনের লক দিয়ে অ্যাপ খুলতে পারবেন। PIN-ও কাজ করবে।", bioY:"চালু করুন", bioR:"FuNPaY আনলক করুন", bioOn:"আনলক চালু হয়েছে", on:"চালু", off:"বন্ধ", myqrs:"নিজের QR", rcvd:"প্রাপক"});
Object.assign(T.en, {recv:"Money Received", cashin:"Customer Cash Out", agent:"Agent", nouser:"No FuNPaY account with this number", noag:"This is not an agent number", self:"You can't use your own number",
 neterr:"No internet, try again", errg:"Something went wrong", exists:"An account already exists for this number", soon:"This service is coming soon", myqr:"My QR", scanqr:"Scan QR",
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

Object.assign(T.bn, {menu:"FuNPaY মেনু", stmt:"স্টেটমেন্ট", lim:"লিমিট", help:"গ্রাহক সেবা", about:"FuNPaY নিয়ে জানুন", refer:"রেফার করুন", lock:"অ্যাপ লক করুন", logout:"লগ আউট", recv:"মানি রিসিভ", oth:"অন্যান্য", ftt:"ফিল্টার করুন", close:"বন্ধ", apply:"প্রয়োগ করুন", reset:"রিসেট", detail:"লেনদেনের বিবরণ", stat:"অবস্থা", okk:"সফল", limt:"লেনদেনের লিমিট", l1:"সেন্ড মানি / পেমেন্ট", l1v:"প্রতিবার ১ – ১,০০,০০০ টাকা", l2:"ক্যাশ আউট", l2v:"প্রতিবার ৫০ – ৫০,০০০ টাকা, চার্জ ১.৮৫%", l3:"অ্যাড মানি", l3v:"প্রতিবার সর্বোচ্চ ৫,০০০ টাকা", l4:"সার্ভিস বিল", l4v:"প্রতিবার ১ – ১,০০,০০০ টাকা", abt:"FuNPaY একটি টেস্ট মোবাইল ওয়ালেট অ্যাপ। এখানকার সব টাকা নকল, আসল টাকা নয়।", hlp:"সাহায্য লাগলে অ্যাপের ডেভেলপারের সাথে যোগাযোগ করুন। শীঘ্রই লাইভ সাপোর্ট আসছে।", invite:"FuNPaY অ্যাপে আমার নম্বরে টাকা পাঠান: ", nt2:"নোটিফিকেশন", fnone:"সব দেখাচ্ছে"});
Object.assign(T.en, {menu:"FuNPaY Menu", stmt:"Statement", lim:"Limits", help:"Customer Service", about:"About FuNPaY", refer:"Refer a friend", lock:"Lock app", logout:"Log out", recv:"Money Received", oth:"Others", ftt:"Filter", close:"Close", apply:"Apply", reset:"Reset", detail:"Transaction details", stat:"Status", okk:"Successful", limt:"Transaction limits", l1:"Send Money / Payment", l1v:"৳1 – ৳1,00,000 per transaction", l2:"Cash Out", l2v:"৳50 – ৳50,000 per transaction, 1.85% fee", l3:"Add Money", l3v:"Up to ৳5,000 at a time", l4:"Service bills", l4v:"৳1 – ৳1,00,000 per transaction", abt:"FuNPaY is a test mobile wallet app. All money here is fake, not real.", hlp:"For help, contact the app developer. Live support is coming soon.", invite:"Send money to my number on the FuNPaY app: ", nt2:"Notifications", fnone:"Showing all"});
const BART = [
  '<circle cx="32" cy="32" r="22"/><path d="M23 41L41 23"/><circle cx="24.5" cy="24.5" r="3.6"/><circle cx="39.5" cy="39.5" r="3.6"/>',
  '<rect x="19" y="6" width="26" height="52" rx="6"/><path d="M28 50h8"/><path d="M34 15l-6 11h8l-6 12"/>',
  '<rect x="11" y="28" width="42" height="27" rx="4"/><rect x="8" y="19" width="48" height="10" rx="3"/><path d="M32 19v36"/><path d="M32 19c-3-9-14-9-14-3 0 4 8 3 14 3zM32 19c3-9 14-9 14-3 0 4-8 3-14 3z"/>'
];
const BTX = [["bt1", "os1", "g1", "add"], ["bt2", "os2", "g2", "rech"], ["bt3", "os3", "g3", ""]];
const CHV = '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>';
const banner = (i, w) => `<div class="bn b${i}${w ? " w" : ""}" onclick="${BTX[i][3] ? `openS('${BTX[i][3]}')` : "hap();toast(t('soon'))"}"><div class="bt"><small>${t(BTX[i][0])}</small><b>${t("o" + (i + 1))}</b><span>${t(BTX[i][2])}${CHV}</span></div><svg class="bv" viewBox="0 0 64 64" aria-hidden="true">${BART[i]}</svg></div>`;

Object.assign(T.bn, {regs:"মোবাইল নম্বর আর ৬ ডিজিট PIN দিন", neterr:"ইন্টারনেট সংযোগে সমস্যা, আবার চেষ্টা করুন", upfail:"আপডেট চেক করা যায়নি, আবার চেষ্টা করুন", sess:"সেশন শেষ হয়েছে, আবার লগইন করুন", offl:"ইন্টারনেট সংযোগ নেই", retry:"আবার চেষ্টা", ctest:"কানেকশন টেস্ট", wait:"অপেক্ষা করুন", avl:"উপলব্ধ ব্যালেন্স", dlfail:"আপডেট নামানো যায়নি", onlyapp:"আপডেট শুধু অ্যাপের ভেতরে হয়", trxchk:"লেনদেন হয়েছে কিনা ইনবক্সে দেখে নিন", noup:"আপডেট সার্ভার সেট করা নেই"});
Object.assign(T.en, {regs:"Enter your mobile number and a 6-digit PIN", neterr:"Connection problem, please try again", upfail:"Could not check for updates, try again", sess:"Session expired, please log in again", offl:"No internet connection", retry:"Try again", ctest:"Connection test", wait:"Please wait", avl:"Available balance", dlfail:"Could not download the update", onlyapp:"Updates only work inside the app", trxchk:"check Inbox to see if it went through", badpin:"PIN must be 6 digits"});
Object.assign(T.bn, {hold:"ট্যাপ করে ধরে রাখুন", holdh:"নিশ্চিত করতে নিচের বাটনটি ধরে রাখুন", share:"শেয়ার", copied:"কপি হয়েছে", chkn:"নম্বরটি সঠিক কিনা আরেকবার দেখে নিন", bioh:"আগে PIN দিয়ে লগইন করুন, তারপর ফিঙ্গারপ্রিন্ট চালু করতে পারবেন", upready:"আপডেট নামানো হয়েছে, চালু হচ্ছে…", nbl:"নতুন ব্যালেন্স"});
Object.assign(T.en, {hold:"Tap and hold", holdh:"Press and hold the button below to confirm", share:"Share", copied:"Copied", chkn:"Please double-check the number", bioh:"Log in with your PIN first, then you can turn on fingerprint", upready:"Update downloaded, restarting…", nbl:"New balance"});
Object.assign(T.bn, {nochg:"কোনো চার্জ নেই", accno:"অ্যাকাউন্ট নাম্বার", pinl:"PIN", pinph:"৬ ডিজিটের PIN দিন", gm:"শুভ সকাল", ga:"শুভ দুপুর", ge:"শুভ বিকাল", gn:"শুভ রাত্রি", fpuse:"ফিঙ্গারপ্রিন্ট দিয়ে আনলক", tapp:"PIN দিতে ঘরগুলোতে ট্যাপ করুন",
 ph1:"প্রোফাইল ছবি", phc:"ক্যামেরা দিয়ে ছবি তুলুন", phg:"গ্যালারি থেকে বাছুন", phd:"ছবি সরান", phok:"প্রোফাইল ছবি বদলেছে", phrm:"প্রোফাইল ছবি সরানো হয়েছে",
 sname:"নাম বা নম্বর নিন", sag:"এজেন্টের নম্বর বা নাম", smr:"মার্চেন্টের নম্বর বা নাম", qrtap:"QR কোড স্ক্যান করতে ট্যাপ করুন", tnum:"নম্বর লিখুন", atm:"এটিএম",
 lagent:"শেষ করে করা এজেন্ট", lpay:"শেষ করে করা পেমেন্ট", noag2:"আপনার কোনো শেষ করে করা এজেন্ট নেই", nopay2:"আপনার কোনো শেষ করে করা পেমেন্ট নেই", nosend2:"এখনো কাউকে টাকা পাঠাননি। উপরে নম্বর লিখে শুরু করুন",
 go2:"এগিয়ে যান", pickop:"অপারেটর বেছে নিন", cont2:"এই নম্বরে এগিয়ে যান", lrcv:"প্রাপক", lag:"এজেন্ট", lmr:"মার্চেন্ট", nomatch:"কিছু পাওয়া যায়নি"});
Object.assign(T.en, {nochg:"No charge", accno:"Account number", pinl:"PIN", pinph:"Enter your 6-digit PIN", gm:"Good morning", ga:"Good afternoon", ge:"Good evening", gn:"Good night", fpuse:"Unlock with fingerprint", tapp:"Tap the boxes to enter your PIN",
 ph1:"Profile photo", phc:"Take a photo", phg:"Choose from gallery", phd:"Remove photo", phok:"Profile photo updated", phrm:"Profile photo removed",
 sname:"Enter name or number", sag:"Agent number or name", smr:"Merchant number or name", qrtap:"Tap to scan a QR code", tnum:"Enter number", atm:"ATM",
 lagent:"Recent agents", lpay:"Recent payments", noag2:"You have no recent agents", nopay2:"You have no recent payments", nosend2:"You haven't sent money to anyone yet. Enter a number above to start",
 go2:"Proceed", pickop:"Choose operator", cont2:"Continue with this number", lrcv:"Recipient", lag:"Agent", lmr:"Merchant", nomatch:"Nothing found"});
Object.assign(T.bn, {noagn:"এই নম্বরে কোনো এজেন্ট নেই", nomrc:"এই নম্বরে কোনো পেমেন্ট অ্যাকাউন্ট (মার্চেন্ট) নেই", pin2:"PIN আবার দিন", pinmm:"দুটি PIN মিলছে না", nmreq:"আপনার নাম দিন", nmph:"যেমন: রহিম উদ্দিন", reg2:"এই নম্বরে এখনো অ্যাকাউন্ট নেই। নাম ও ৬ ডিজিট PIN দিয়ে নতুন অ্যাকাউন্ট খুলুন",
 snd:"প্রেরক", rcvr:"প্রাপক", agl:"এজেন্ট", mrc:"মার্চেন্ট", cust:"গ্রাহক", src:"মাধ্যম", opr:"অপারেটর", num2:"নম্বর", copy:"কপি", disc:"কুপন ছাড়", pay2:"পরিশোধ",
 stp:"সময়কাল", p1:"১ মাস", p3:"৩ মাস", p6:"৬ মাস", p12:"১ বছর", gen:"স্টেটমেন্ট তৈরি করুন", stt:"অ্যাকাউন্ট স্টেটমেন্ট", acn:"অ্যাকাউন্টের নাম", fromd:"থেকে", tod:"পর্যন্ত", tin:"মোট ক্যাশ ইন", tout:"মোট ক্যাশ আউট", tcnt:"লেনদেন", dtl:"তারিখ", trn:"বিবরণ", amc:"টাকা", nostm:"এই সময়ে কোনো লেনদেন নেই", shimg:"ছবি শেয়ার করুন", shfail:"শেয়ার করা যায়নি", gend:"তৈরি হয়েছে",
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
/* সময় অনুযায়ী শুভেচ্ছা: সকাল ৫–১২, দুপুর ১২–৪, বিকাল ৪–৭, রাত্রি ৭–৫ */
const greet = () => { const h = new Date().getHours(); return h >= 5 && h < 12 ? "Good morning" : h >= 12 && h < 16 ? "Good afternoon" : h >= 16 && h < 19 ? "Good evening" : "Good night"; }; /* শুভেচ্ছা সব সময় ইংরেজিতে */
const SPECIAL = ["qrs", "bio", "net", "flt", "menu", "trd", "inf", "pph", "stm", "cpl"];
const S = {lang:"bn", auth:false, busy:false, view:"", phone:"", name:"", me:null, uid:"", tok:"", rt:"", bal:0, tx:[], seen:0, tab:"home", seg:"t", q:"", ft:[], fq:false, more:false, pin:"", sheet:null, fx:false, hl:null, upd:null, cps:null, regPhone:"", mine:new Set(), noRpc:false};
try {
  const d = JSON.parse(localStorage.getItem("fp2") || "{}");
  ["lang", "phone", "name"].forEach(k => { if (d[k] !== undefined) S[k] = d[k]; });
} catch (e) {}
const save = () => { try { localStorage.setItem("fp2", JSON.stringify({lang:S.lang, phone:S.phone, name:S.name})); } catch (e) {} };

/* ---------- নেটিভ ফিচার (Capacitor প্লাগইন থাকলে কাজ করে, না থাকলে ব্রাউজারেও চলে) ---------- */
const APP_REL = "2.14"; /* অ্যাপে দেখানো রিলিজ নম্বর */
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
/* tries: GET = ৩ বার, টাকার লেনদেন = ১ বার (দুবার টাকা যাওয়া ঠেকাতে কখনো নিজে নিজে রিট্রাই হয় না) */
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
const USER_SVG = '<svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c.8-3.8 4-5.6 7.5-5.6s6.7 1.8 7.5 5.6"/></svg>';
const BKSP = '<svg class="i" viewBox="0 0 24 24"><path d="M21 5H9l-6 7 6 7h12zM15 9l-4 6M11 9l4 6"/></svg>';
const first = (s) => { const a = Array.from(String(s || "").trim()); return a.length ? esc(a[0].toUpperCase()) : USER_SVG; };
const fmt = (iso) => { const n = new Date(iso), p = (x) => String(x).padStart(2, "0"); return `${p(n.getDate())}/${p(n.getMonth() + 1)} ${p(n.getHours())}:${p(n.getMinutes())}`; };

/* ---------- সার্ভারের সাথে যোগাযোগ ---------- */
const MUT = /\/rpc\/(send_money|cash_out|add_test_money|pay_service|pay_merchant|claim_coupon)$/;
async function api(path, o = {}) {
  const BASE = String(SUPA_URL).replace(/[\s"']/g, "").replace(/\/+$/, ""), KEY = String(SUPA_KEY).replace(/[\s"']/g, "");
  const h = {apikey: KEY, "Content-Type": "application/json"};
  if (o.auth !== false && S.tok) h.Authorization = "Bearer " + S.tok;
  const tries = o.tries || (MUT.test(path) || path === "/auth/v1/signup" ? 1 : 3);
  const r = await netFetch(BASE + path, {method: o.m || "GET", headers: h, body: o.b ? JSON.stringify(o.b) : undefined}, tries);
  let j = null; try { j = await r.json(); } catch (e) {}
  if (r.status === 401 && o.auth !== false && S.rt && !o.retry) {
    try { await refreshTok(); return api(path, Object.assign({}, o, {retry: true})); }
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
function errMsg(e) {
  const m = (e && e.message) || "";
  const sid = S.sheet && S.sheet.id;
  const k = {LOW:"low", NOUSER:sid === "cash" ? "noagn" : sid === "pay" ? "nomrc" : "nouser", NOAGENT:"noagn", SELF:"self", NET:"neterr", BADAMT:"bada", CONFIRM:"conf1", SESS:"sess", BADCPN:"cpbad", BADCODE:"cpwrong", HAVE:"cpexh"}[m];
  if (k) return t(k);
  if (/could not find the function|schema cache|PGRST202/i.test(m)) return t("dbold");
  if (/invalid login/i.test(m)) return t("wp");
  if (/already registered|already been registered|saving new user/i.test(m)) return t("exists");
  console.log(m);
  return t("errg") + " (" + m.slice(0, 70) + ")";
}
async function loadAll(isFirst, quick) {
  const [p, x] = await Promise.all([api("/rest/v1/profiles?select=*&id=eq." + S.uid, quick ? {tries: 1} : {}), api("/rest/v1/transactions?select=*&order=id.desc&limit=60", quick ? {tries: 1} : {})]);
  if (!p.length) throw new Error("ERR");
  const fresh = x.filter(r => r.id > S.seen && !S.mine.has(r.trx));
  S.me = p[0]; S.bal = Number(p[0].balance); S.name = p[0].name; S.tx = x;
  if (x.length) S.seen = Math.max(S.seen, x[0].id);
  if (!isFirst && fresh.length) pushNotif(fresh);
}

/* ---------- নোটিফিকেশন: প্রতিটি লেনদেনের জন্য ---------- */
const nrKey = () => "fpnr_" + (S.phone || (S.me && S.me.phone) || "");
function nrGet() { try { const v = localStorage.getItem(nrKey()); return v === null ? null : (Number(v) || 0); } catch (e) { return 0; } }
function nrSet(v) { try { localStorage.setItem(nrKey(), String(v)); } catch (e) {} }
function unreadN() { const b = nrGet(); return b === null ? 0 : S.tx.filter(x => x.id > b && !S.mine.has(x.trx)).length; }
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
  if (document.hidden) {
    const LN = cap().LocalNotifications;
    if (LN) { try { Promise.resolve(LN.schedule({notifications: arr.map((x, i) => ({id: (Number(x.id) % 2000000000) || (1 + i), title: "FuNPaY · " + t(tv(x).key), body: ntxt(x), smallIcon: "ic_stat_funpay", iconColor: "#e2136e"}))})).catch(() => {}); } catch (e) {} }
  } else toast(ntxt(arr[0]) + (list.length > 1 ? " (+" + (list.length - 1) + ")" : ""));
}
async function askNotifPerm() {
  const LN = cap().LocalNotifications; if (!LN) return;
  try { if (localStorage.getItem("fpnask") === "1") return; } catch (e) {}
  try { const p = await LN.checkPermissions(); if (p.display !== "granted") await LN.requestPermissions(); localStorage.setItem("fpnask", "1"); } catch (e) {}
}
function markRead() {
  if (!S.auth) return;
  if (S.tx.length) nrSet(Math.max(nrGet() || 0, S.tx[0].id));
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
  if ((b !== S.bal || s !== S.seen) && !S.sheet && !S.upd && !(document.activeElement && document.activeElement.tagName === "INPUT")) render();
}
async function enter() {
  const lp = S.lp; S.lp = ""; S.seen = 0;
  await loadAll(true);
  if (nrGet() === null) nrSet(S.tx.length ? S.tx[0].id : 0);
  try { localStorage.setItem("fpreg", "1"); } catch (e) {}
  S.auth = true; S.fx = true; S.pin = ""; S.tab = "home"; S.view = "";
  render(); startPoll(); setTimeout(checkUpdate, 1500); setTimeout(askNotifPerm, 2600);
  if (lp) setTimeout(() => offerBio(lp), 1400);
}
function lock(auto) {
  clearInterval(pollT); stopScanner();
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
    ${o("cam2", t("phc"), "document.getElementById('phc').click()")}${o("gal", t("phg"), "document.getElementById('phg').click()")}${myPhoto() ? o("trash", t("phd"), "phDel()") : ""}
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
  if (S.seg === "n") { const b = nrGet(); return head + (S.tx.length ? S.tx.slice(0, 40).map(x => nfRow(x, b)).join("") : `<p class="em">${t("nonf")}</p>`); }
  return head + `<div class="srch"><div>${ic("srch")}<input placeholder="${t("sq")}" value="${esc(S.q)}" id="sq" oninput="S.q=this.value;document.getElementById('lst').innerHTML=list()"></div><button class="fb${S.ft.length ? " on" : ""}" onclick="openFilter()">${ic("filt")}<span>${t("flt")}</span>${S.ft.length ? `<i>${S.ft.length}</i>` : ""}</button></div><div class="note">${t("last")}</div><div id="lst">${list()}</div>`;
}
function pageMine() {
  const m = S.me || {};
  const R = (icon, label, js, right) => `<button class="mr" onclick="${js}">${ic(icon)}<span>${label}</span>${right || ""}</button>`;
  const sw = `<i class="sw${bioOn() ? " on" : ""}"><b></b></i>`;
  return tbar(t("pr"))
    + `<div class="prof"><div class="pavw" onclick="openPhoto()"><div class="big">${myAv(m.name)}</div><i class="cam">${ic("cam2")}</i></div><div class="pi2"><h3>${esc(m.name || t("acct"))} ${agBadge()}</h3><p>+88 ${esc(m.phone)}</p></div></div>`
    + `<div class="msec"><h4>${t("sec1")}</h4>${R("cam2", t("ph1"), "openPhoto()")}${R("qr", t("myqr"), "openQR('my')")}${R("srch", t("scanqr"), "openQR('scan')")}${R("stmt", t("stmt"), "openStmt()")}${R("fp", t("bioT"), "toggleBio()", sw)}${R("bell", t("nt2"), "S.seg='n';go('inbox')")}</div>`
    + `<div class="msec"><h4>${t("sec2")}</h4>${R("lang", t("lang"), "lang()")}${R("lim", t("limt"), "openInfo('lim')")}</div>`
    + `<div class="msec"><h4>${t("sec3")}</h4>${R("ref", t("refer"), "inviteFriend()")}${R("help", t("help"), "openInfo('help')")}${R("up", t("chk"), "checkUpdate(true)", `<small>v${APP_REL} (${APP_VERSION})</small>`)}${R("bolt", t("ctest"), "netTest()")}${R("out", t("lock"), "lock()")}${R("out", t("logout"), "logout()")}</div>`
    + (TEST_MODE ? `<p class="em">${t("dm")}</p>` : "");
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
  return `<svg class="lglogo fpa${live ? "" : " fpa-s"}" viewBox="0 0 200 200" style="--k:${K}" role="img" aria-label="FuNPaY"><circle class="fpa-rp" cx="100" cy="100" r="64" fill="none" stroke="#fff" stroke-width="3"/><circle class="fpa-rg" cx="100" cy="100" r="64" fill="none" stroke="#fff" stroke-width="4"/>${r}<g class="fpa-spin">${d}</g><g class="fpa-ct"><circle cx="100" cy="100" r="42" fill="#fff"/><text class="fpa-tk" x="100" y="104">৳</text></g></svg>`;
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
  const nm = [..."FuNPaY"].map((c, i) => `<span class="fpa-ch" style="animation-delay:${(1 + i * .06).toFixed(2)}s">${c}</span>`).join("");
  el.innerHTML = `<div class="fps-orb fps-o1"></div><div class="fps-orb fps-o2"></div><div class="fps-lg">${fpRing(.45)}</div><div class="fps-name">${nm}</div><div class="fps-tag">${t("tag")}</div><div class="fps-ld"><i></i><i></i><i></i></div>`;
  const end = () => { if (!el.parentNode) return; el.classList.add("out"); setTimeout(() => el.remove(), 500); };
  el.onclick = end; document.body.appendChild(el); setTimeout(end, 2300);
}

const lgBar = (backJs) => `<div class="fbar"><button class="fback" aria-label="${t("back")}" onclick="${backJs}"><svg class="i" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button><div class="flang"><button class="${S.lang === "en" ? "on" : ""}" onclick="if(S.lang!=='en')lang()">Eng</button><button class="${S.lang === "bn" ? "on" : ""}" onclick="if(S.lang!=='bn')lang()">বাং</button></div></div>`;
const NXT = `<svg class="i" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const REG = () => { try { return localStorage.getItem("fpreg") === "1"; } catch (e) { return false; } };
function loginHtml() {
  if (!CONFIGURED) return `<div class="fl land"><div class="orb o1"></div><div class="orb o2"></div><div class="lhero">${LOGOF("land")}<h1>FuNPaY</h1><p>${t("setup")}</p></div></div>`;
  /* ১) স্বাগতম পেজ */
  if (S.view === "" && !S.phone) return `<div class="fl land"><div class="orb o1"></div><div class="orb o2"></div>
    <div class="ltop"><div class="flang w"><button class="${S.lang === "en" ? "on" : ""}" onclick="if(S.lang!=='en')lang()">Eng</button><button class="${S.lang === "bn" ? "on" : ""}" onclick="if(S.lang!=='bn')lang()">বাং</button></div></div>
    <div class="lhero">${LOGOF("land")}<h1>FuNPaY</h1><p>${t("tag")}</p></div>
    <div class="lpanel"><button class="lwb" onclick="hap();S.view='ph';render()">${t("lgreg")}</button></div></div>`;
  /* ২) মোবাইল নম্বর পেজ */
  if (S.view === "ph" && !S.phone) return `<div class="fl light">${lgBar("S.view='';render()")}
    <div class="fbody"><img class="mini" src="icons/logo-pink.png" alt="">
      <h2>${t("phh")}</h2>
      <label>${t("cc")}</label><div class="cfield"><i class="flag"></i>${t("bd")}</div>
      <label>${t("mob")}</label><div class="pfield"><b>+88</b><input id="lp" inputmode="numeric" maxlength="11" placeholder="01XXXXXXXXX" autocomplete="tel-national" onkeydown="if(event.key==='Enter')setPhone()" oninput="this.value=this.value.replace(/\\D/g,'')"></div>
      <div class="le"></div>
      <p class="terms">${t("terms")}</p>
      </div>
    <button class="nbar" id="phnext" onclick="setPhone()"><span>${t("next")}</span>${NXT}</button></div>`;
  /* ৩) নতুন অ্যাকাউন্ট (শুধু নম্বরে অ্যাকাউন্ট না থাকলে আসে) */
  if (S.view === "reg") return `<div class="fl light">${lgBar("S.view='ph';render()")}
    <div class="fbody"><img class="mini" src="icons/logo-pink.png" alt="">
      <h2>${t("regh")}</h2><p class="sub">${t("reg2")}</p>
      <label>${t("mob")}</label><div class="pfield ro"><b>+88</b><input id="rp" inputmode="numeric" maxlength="11" value="${esc(S.regPhone)}" readonly></div>
      <label>${t("nm")}</label><div class="pfield"><input id="rn" maxlength="20" placeholder="${t("nmph")}" autocomplete="name"></div>
      <label>${t("pin4")}</label><div class="pfield"><input id="rk" type="password" inputmode="numeric" maxlength="6" placeholder="••••••" oninput="this.value=this.value.replace(/\\D/g,'')"></div>
      <label>${t("pin2")}</label><div class="pfield"><input id="rk2" type="password" inputmode="numeric" maxlength="6" placeholder="••••••" oninput="this.value=this.value.replace(/\\D/g,'')" onkeydown="if(event.key==='Enter')doReg()"></div>
      <div class="le"></div></div>
    <button class="nbar lb2" onclick="doReg()"><span>${t("reg")}</span>${NXT}</button></div>`;
  /* ৪) PIN পেজ: উপরে লোগো অ্যানিমেশন (আগের মতোই), নিচে বিকাশের মতো নম্বর + PIN ঘর + ফিঙ্গারপ্রিন্ট আইকন, কিবোর্ড ফোনের নিজের */
  return `<div class="fl pinp"><div class="orb o1"></div><div class="orb o2"></div>
    <div class="fbar pbar"><button class="fback" aria-label="${t("back")}" onclick="hap();S.phone='';S.pin='';S.view='ph';render()"><svg class="i" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button><div class="flang w"><button class="${S.lang === "en" ? "on" : ""}" onclick="if(S.lang!=='en')lang()">Eng</button><button class="${S.lang === "bn" ? "on" : ""}" onclick="if(S.lang!=='bn')lang()">বাং</button></div></div>
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
function bioTap() { if (bioOn()) bioUnlock(); else toast(t("bioh")); }
async function setPhone() {
  if (S.busy) return;
  const v = document.getElementById("lp").value.trim(), le = document.querySelector(".le"), nb = document.getElementById("phnext");
  if (!/^01\d{9}$/.test(v)) { le.textContent = t("badn"); hap("HEAVY"); return; }
  S.busy = true; le.textContent = ""; if (nb) nb.classList.add("ld");
  try {
    const r = await api("/rest/v1/rpc/phone_exists", {m: "POST", auth: false, b: {p_phone: v}});
    S.busy = false;
    if (r === true) { S.phone = v; S.name = ""; S.view = ""; S.pin = ""; render(); }
    else { S.regPhone = v; S.view = "reg"; render(); }
  } catch (e) {
    S.busy = false; if (nb) nb.classList.remove("ld");
    /* সার্ভারে phone_exists ফাংশন না থাকলে (update SQL চালানো হয়নি) আটকে না থেকে সরাসরি PIN পেজে যায় */
    if (/could not find the function|schema cache|PGRST202|phone_exists/i.test(String((e && e.message) || ""))) { S.noRpc = true; S.phone = v; S.name = ""; S.view = ""; S.pin = ""; render(); return; }
    const l2 = document.querySelector(".le"); if (l2) l2.textContent = errMsg(e); hap("HEAVY");
  }
}
async function doReg() {
  if (S.busy) return;
  const p = S.regPhone, nm = document.getElementById("rn").value.trim(), k = document.getElementById("rk").value.trim(), k2 = document.getElementById("rk2").value.trim(), le = document.querySelector(".le");
  const bad = !/^01\d{9}$/.test(p) ? t("badn") : !nm ? t("nmreq") : !/^\d{6}$/.test(k) ? t("badpin") : k !== k2 ? t("pinmm") : "";
  if (bad) { le.textContent = bad; hap("HEAVY"); return; }
  S.busy = true; le.textContent = ""; document.querySelector(".lb2").classList.add("ld");
  try { await signUp(p, k, nm); S.phone = p; S.name = nm; S.lp = k; await enter(); }
  catch (e) { const l2 = document.querySelector(".le"); if (l2) l2.textContent = errMsg(e); const b2 = document.querySelector(".lb2"); if (b2) b2.classList.remove("ld"); hap("HEAVY"); }
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
  const v = el.value.replace(/\D/g, "").slice(0, 6); if (el.value !== v) el.value = v;
  S.pin = v; hap();
  const le = document.querySelector(".le"); if (le) le.textContent = "";
}
async function pinGo() {
  if (S.busy) return;
  const el = document.getElementById("pinin"), le = document.querySelector(".le"), pin = el ? el.value.replace(/\D/g, "") : S.pin;
  S.pin = pin;
  if (pin.length !== 6) { if (le) le.textContent = t("badpin"); hap("HEAVY"); return; }
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
    const nv = (k, lbl) => `<button class="${S.tab === k ? "on" : ""}" onclick="go('${k}')"><span class="ni">${ic(k)}${k === "inbox" && unreadN() ? `<span class="bg">${nbadge(unreadN())}</span>` : ""}</span>${lbl}</button>`;
    h += `<nav class="${fx ? "fx" : ""}">${nv("home", t("home"))}${nv("mine", t("mine"))}<button class="qrb" onclick="openQR('scan')"><span class="ni">${ic("qr")}</span>${t("qrs")}</button>${nv("inbox", t("inbox"))}</nav>`;
  }
  const ap = document.getElementById("app"), sc = ap.scrollTop, ob = document.querySelector(".ban"), bl = ob ? ob.scrollLeft : 0;
  ap.innerHTML = h; ap.className = S.auth ? "au" : "";
  if (!fx && S.auth) { ap.scrollTop = sc; const nb = document.querySelector(".ban"); if (nb && bl) { nb.style.scrollBehavior = "auto"; nb.scrollLeft = bl; nb.style.scrollBehavior = ""; dot(nb); } }
  S.fx = false; S.hl = null;
  if (S.fq && S.auth) { S.fq = false; setTimeout(() => { const f = document.getElementById("sq"); if (f) { try { f.focus(); } catch (e) {} } }, 380); }
  sbar();
  if (S.auth && S.tab === "inbox" && S.seg === "n" && unreadN()) setTimeout(() => { if (S.auth && S.tab === "inbox" && S.seg === "n") markRead(); }, 1600);
  if (!S.auth && CONFIGURED && S.phone && !S.view && !bioOn()) setTimeout(() => { const f = document.getElementById("pinin"); if (f && !S.busy) { try { f.focus(); } catch (e) {} } }, 400);
  if (!S.auth && CONFIGURED) { const f = document.getElementById(S.view === "reg" ? "rn" : "lp"); if (f && S.view) setTimeout(() => { try { f.focus(); } catch (e) {} }, 350); }
}
const go = (k) => {
  if (S.tab === k) { render(); document.getElementById("app").scrollTo({top: 0, behavior: "smooth"}); return; }
  hap(); S.tab = k; S.fx = true; render(); document.getElementById("app").scrollTop = 0;
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

function dot(e) { const st = e.children.length > 1 ? e.children[1].offsetLeft - e.children[0].offsetLeft : e.clientWidth, i = Math.round(e.scrollLeft / st); document.querySelectorAll(".dts i").forEach((d, j) => d.className = j === i ? "on" : ""); }
/* ---------- লেনদেনের ফর্ম: ধাপ ১ = তথ্য, ধাপ ২ = যাচাই + PIN, শেষে সফল পেজ ---------- */
function openS(id, pre, rn) {
  if (!WIRED.includes(id)) { hap(); toast(t("soon")); return; }
  const c = cfg(id), s1 = !!(c.k || c.ch), jump = !!(pre && rn !== undefined && c.k === "n" && /^01\d{9}$/.test(pre));
  hap(); S.sheet = {id, step: jump || !s1 ? 2 : 1, s1, v: pre || "", ch: "", a: "", pin: "", err: "", done: false, fresh: true, fxs: false, rn: jump ? rn : "", busy: false, cp: null}; renderSheet();
  if (id === "pay") loadCoupons();
}
function mount() { let e = document.getElementById("sheet"); if (!e) { e = document.createElement("div"); e.id = "sheet"; document.body.appendChild(e); } return e; }
function renderSheet() {
  const s = S.sheet;
  mount().innerHTML = S.upd ? updHtml() : s ? (s.id === "qrs" ? qrHtml() : s.id === "bio" ? bioHtml() : s.id === "net" ? netHtml() : s.id === "flt" ? fltHtml() : s.id === "menu" ? menuHtml() : s.id === "trd" ? trdHtml() : s.id === "inf" ? infHtml() : s.id === "pph" ? pphHtml() : s.id === "stm" ? stmHtml() : s.id === "cpl" ? cplHtml() : sheetHtml()) : "";
  if (s) { s.fresh = false; s.fxs = false; }
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
const sync = () => { const a = document.getElementById("f1"), b = document.getElementById("f2"); if (a) S.sheet.v = a.value.trim(); if (b) S.sheet.a = b.value; };
function pick(c) { hap(); sync(); S.sheet.ch = c; S.sheet.err = ""; renderSheet(); }
function pickNum(p) { hap(); const a = document.getElementById("f1"); if (a) a.value = p; S.sheet.v = p; nextStep(); }
function shakeBox() { const b = document.querySelector("#sheet .box"); if (!b) return; b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake"); hap("HEAVY"); }
const setBusy = (on) => document.querySelectorAll("#sheet .btn:not(.l)").forEach(b => b.classList.toggle("ld", on));
const wrapDlg = (s, inner) => `<div class="sh dlg${s.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div><div class="stp${s.fxs ? " go" : ""}">${inner}</div></div></div>`;
const wrapSheet = wrapDlg;
const wrapPage = (s, title, back, body, foot) => `<div class="sh pgx${s.fresh ? "" : " re"}"><div class="box"><div class="ph"><button class="pb" aria-label="${t("back")}" onclick="${back}">${ic("back")}</button><b>${title}</b><img src="icons/logo.png" alt=""></div><div class="pbody"><div class="stp${s.fxs ? " go" : ""}">${body}</div></div>${foot ? `<div class="pfoot">${foot}</div>` : ""}</div></div>`;
const feeOf = (c, amt) => Math.round((c.fee || 0) * amt * 100) / 100;
const tickSvg = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const PERSON = ["send", "pay", "cash"];
function sheetHtml() {
  const s = S.sheet, c = cfg(s.id), d = c.d || -1, person = PERSON.includes(s.id);
  if (s.done) {
    const num = s.v ? esc(s.v) : "";
    const who2 = person
      ? `<div class="rcp">${avatar(s.rn, s.v)}<div><b>${esc(s.rn || s.v)}</b><span>${s.rn ? num : ""}</span></div></div>`
      : `<div class="rcp">${tile(s.id)}<div><b>${t(s.id)}</b><span>${[s.ch ? t(s.ch) : "", num].filter(Boolean).join(" · ")}</span></div></div>`;
    const hidden = S.hideNb;
    const cells = [`<div><span>${t("at")}</span><b>${fmt(s.at)}</b></div>`,
      `<div><span>${t("trx")}</span><b class="cpy"><em>${esc(s.trx)}</em><button class="eye" id="cpb" aria-label="${t("copy")}" onclick="copyTrx()">${ic("copy")}</button></b></div>`,
      `<div><span>${t("amtl")}</span><b>${money(s.amt)}</b></div>`,
      s.disc ? `<div><span>${t("disc")}</span><b class="gr">- ${money(s.disc)}</b></div>` : s.fee ? `<div><span>${t("feel")}</span><b>${money(s.fee)}</b></div>` : "",
      `<div><span>${t("total")}</span><b class="pk">${money(s.total)}</b></div>`,
      `<div><span>${t("nbl")}</span><b class="nbv"><em id="nbv" data-v="${esc(money(s.nb))}">${hidden ? "৳ ••••" : esc(money(s.nb))}</em><button class="eye" id="nbe" aria-label="eye" onclick="toggleNb()">${ic(hidden ? "eyeo" : "eye")}</button></b></div>`];
    return wrapPage(s, t(s.id), "closeS()", `<div class="pcard bkr"><div class="bkh"><div><b>${t(s.id)}</b><em>${t("done")}</em></div><i class="bkck"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></i></div>${who2}<div class="bkg">${cells.filter(Boolean).map((c, i, a) => (a.length % 2 && i === a.length - 1) ? c.replace("<div>", '<div class="wide">') : c).join("")}</div><button class="bks" onclick="shareRc()">${ic("shr")}<span>${t("share")}</span></button></div>`,
      `<button class="bknx" onclick="closeS()"><span>${t("next")}</span>${NXT}</button>`);
  }

  const tot3 = s.s1 ? 4 : 3, cur = s.s1 ? s.step : s.step - 1;
  const prog = "";
  const who = person
    ? `<div class="rcp">${avatar(s.rn, s.v)}<div><b>${esc(s.rn || s.v)}</b><span>${s.rn ? esc(s.v) : ""}</span></div><i class="vf">${tickSvg}</i></div>`
    : `<div class="rcp">${tile(s.id)}<div><b>${t(s.id)}</b><span>${[s.ch ? t(s.ch) : "", s.v ? esc(s.v) : ""].filter(Boolean).join(" · ")}</span></div></div>`;
  /* ধাপ ৩: PIN · ধাপ ৪: যাচাই + নিচের বাটন ধরে রাখুন (বিকাশের মতো) */
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
      ${TEST_MODE && s.id === "cash" ? `<p class="tw" style="margin-top:8px">${t("cashw")}</p>` : ""}
      <div class="err c" style="text-align:center;margin-top:10px">${esc(s.err)}</div>`,
      `<div class="holdw"><button id="hold" class="hold" onpointerdown="holdStart(event)" onpointerup="holdEnd()" onpointerleave="holdEnd()" onpointercancel="holdEnd()" oncontextmenu="return false"><i><span class="hc">${ic("ok2")}<b>${t("hold")}</b></span></i>${ic("ok2")}<b>${t("hold")}</b></button></div>`);
  }
  /* ধাপ ২: টাকার পরিমাণ */
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
  /* ধাপ ১: কাকে / কোন সার্ভিস (বিকাশের মতো সার্চ + তালিকা) */
  const foot = `<button class="btn" onclick="nextStep()">${t("next")}${NXT}</button>`;
  if (person) {
    const tabs = s.id === "cash" ? `<div class="seg2"><button class="on">${t("agent")}</button><button onclick="hap();toast(t('soon'))">${t("atm")}</button></div>` : "";
    const search = `<div class="pcard srcc"><div class="fld sf">${ic("srch")}<input id="f1" placeholder="${t(s.id === "cash" ? "sag" : s.id === "pay" ? "smr" : "sname")}" value="${esc(s.v)}" autocomplete="off" oninput="srchIn(this)"></div><div class="err" id="er">${esc(s.err)}</div></div>`;
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
    + (c.k ? `<div class="lb" style="${c.ch ? "margin-top:14px" : ""}">${t(c.f)}</div><div class="fld">${c.k === "n" ? ic("srch") : ""}<input id="f1" ${c.k === "n" ? `inputmode="numeric" maxlength="11" placeholder="01XXXXXXXXX" oninput="this.value=this.value.replace(/\\D/g,'')"` : `placeholder="${t(c.f)}"`} value="${esc(s.v)}"></div>` : "")
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
  if (/^01\d{9}$/.test(q) && !all.some(f => f[0] === q)) h += `<div class="rr" onclick="pickNum('${q}')">${avatar("", q)}<div><b>${esc(q)}</b><span>${t("cont2")}</span></div></div>`;
  h += r.map(f => `<div class="rr" onclick="pickNum('${esc(f[0])}')">${avatar(f[1], f[0])}<div><b>${esc(f[1] || f[0])}</b><span>${f[1] ? esc(f[0]) : ""}</span></div></div>`).join("");
  if (!h) h = `<p class="em">${t(q ? "nomatch" : s.id === "cash" ? "noag2" : s.id === "pay" ? "nopay2" : "nosend2")}</p>`;
  return h;
}
function srchIn(el) {
  const s = S.sheet; if (!s) return;
  s.v = el.value.trim(); s.err = "";
  const l = document.getElementById("clist"); if (l) l.innerHTML = contactRows(s);
  const e = document.getElementById("er"); if (e) e.textContent = "";
}
async function nextStep() {
  sync();
  const s = S.sheet; if (!s || s.busy) return;
  const c = cfg(s.id), d = c.d || -1;
  let e = "";
  if (s.step === 1) {
    if (PERSON.includes(s.id) && !/^01\d{9}$/.test(s.v)) { const m = peopleFor(s.id).filter(f => matchP(f, s.v)); if (s.v && m.length === 1) s.v = m[0][0]; }
    if (c.ch && !s.ch) e = t("pick");
    else if (c.k === "n" && !/^01\d{9}$/.test(s.v)) e = t("badn");
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
  s.err = ""; s.pin = ""; s.fxs = true; renderSheet();
}
function amtIn(el) {
  let v = el.value.replace(/[^0-9.]/g, ""); const p = v.split(".");
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
  const v = el.value.replace(/\D/g, "").slice(0, 6); if (el.value !== v) el.value = v;
  s.pin = v; hap(); s.err = "";
  const er = document.getElementById("er"); if (er) er.textContent = "";
}
function spGo() {
  const s = S.sheet; if (!s || s.busy || s.step !== 3) return;
  const f = document.getElementById("spin"); if (f) s.pin = f.value.replace(/\D/g, "").slice(0, 6);
  if (s.pin.length === 6) { verifyPin(); return; }
  s.err = t("badpin"); const er = document.getElementById("er"); if (er) er.textContent = s.err; shakeBox();
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
  holdT = setTimeout(() => { holdT = 0; b.classList.remove("hd"); confirmTx(); }, 1000);
}
function holdEnd() {
  if (!holdT) return;
  clearTimeout(holdT); holdT = 0;
  const b = document.getElementById("hold"); if (b) b.classList.remove("hd");
  toast(t("holdh"));
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
  try { await api("/rest/v1/rpc/claim_coupon", {m: "POST", b: {p_code: code}}); toast(t("cpadded")); s.err = ""; await loadCoupons(); if (S.sheet === s) renderSheet(); }
  catch (e) { hap("HEAVY"); const er = document.getElementById("cper"); if (er) er.textContent = errMsg(e); }
}

async function confirmTx() {
  const s = S.sheet; if (!s || s.busy || s.step !== 4) return;
  const c = cfg(s.id), d = c.d || -1, amt = parseFloat(s.a), fee = feeOf(c, amt), pin = s.pin || "", dsc = s.id === "pay" ? cpDisc(s.cp, amt) : 0;
  const fail = (m) => { s.busy = false; if (S.sheet !== s) return; s.pin = ""; s.err = m; renderSheet(); shakeBox(); };
  s.busy = true; { const hb = document.getElementById("hold"); if (hb) hb.classList.add("ld"); }
  const R = (fn, b) => api("/rest/v1/rpc/" + fn, {m: "POST", b});
  let trx;
  try {
    if (s.id === "send") trx = await R("send_money", {p_to: s.v, p_amount: amt, p_type: s.id});
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
  if (dsc && S.cps) S.cps = S.cps.filter(k => !s.cp || k.uc_id !== s.cp.uc_id);
  hap("MEDIUM"); renderSheet(); refresh();
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
  return wrapPage(s, t("myqr"), "closeS()", `<div class="qpage"><div class="qcard"><div class="qav">${myAv(m.name)}</div><b>${esc(m.name || t("acct"))}</b><span>${esc(m.phone)} ${agBadge()}</span><div class="qwrap">${qrSvg("funpay:" + m.phone)}</div><small>${t("qrhint")}</small></div></div>`,
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
function trdHtml() {
  const s = S.sheet, x = s.x, v = tv(x);
  const out = x.from_id === S.uid, nm = out ? x.to_name : x.from_name, ph = out ? x.to_phone : x.from_phone;
  const R = trdRows(x).filter(r => r[0] !== t("svc"));
  const cells = R.map(r => { const col = r[2] && r[2].charAt(0) === "#" ? r[2] : null, cp = col ? null : (r[2] || r[3]); return `<div><span>${r[0]}</span><b${col ? ` style="color:${col}"` : ""}><em>${r[1]}</em>${cp ? `<button class="cb2" aria-label="${t("copy")}" onclick="copyTxt('${esc(cp)}')">${ic("copy")}</button>` : ""}</b></div>`; });
  if (cells.length % 2) cells[cells.length - 1] = cells[cells.length - 1].replace("<div>", '<div class="wide">');
  return `<div class="sh dlg trdd${s.fresh ? "" : " re"}" onclick="if(event.target===this)closeS()"><div class="box"><div class="grip"></div>
    <div class="ok"><div class="tdh">${SVC.includes(x.type) || x.type === "add" ? tile(x.type) : avatar(nm, ph)}</div><h2>${t(v.key)}</h2><div class="amt ${v.out ? "mi" : "pl"}">${v.out ? "-" : "+"}${money2(v.amt)}</div>${stBadge(x)}</div>
    <div class="tgrid">${cells.join("")}</div><div class="rbt"><button class="btn l" onclick="shareTrx()">${ic("shr")}${t("share")}</button><button class="btn" onclick="closeS()">${t("ok")}</button></div></div></div>`;
}
function shareTrx() {
  const s = S.sheet; if (!s || !s.x) return; const x = s.x, v = tv(x), out = x.from_id === S.uid;
  const nm = out ? x.to_name : x.from_name, ph = out ? x.to_phone : x.from_phone, person = ["send", "pay", "cash"].includes(x.type);
  const rows = trdRows(x).map(r => [r[0], String(r[1]).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), r[2] && r[2].charAt(0) === "#" ? r[2] : null]);
  doShare({title: t(v.key), status: t(isFail(x) ? "fail" : "okk"), amount: (v.out ? "- " : "+ ") + money2(v.amt), who: person ? {name: nm, phone: ph} : null, rows, foot: fmt(x.created_at)}, "FuNPaY-" + x.trx + ".png");
}

/* ---------- স্টেটমেন্ট: ১/৩/৬/১২ মাস বেছে রিসিট বানানো ---------- */
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
/* পুরোপুরি লগআউট: নম্বর, ফিঙ্গারপ্রিন্ট সব মুছে নতুন করে শুরু */
function logout() {
  hap();
  try { ["fpreg", "fpbio", "fpbioask"].forEach(k => localStorage.removeItem(k)); } catch (e) {}
  try { const N = cap().NativeBiometric; if (N) Promise.resolve(N.deleteCredentials({server: BIO_SERVER})).catch(() => {}); } catch (e) {}
  S.phone = ""; S.name = ""; S.view = ""; lock();
}

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
/* অ্যান্ড্রয়েড ব্যাক বাটন, স্ট্যাটাস বার, ব্যাকগ্রাউন্ডে ১ মিনিটের বেশি থাকলে অটো লক */
try {
  const A = cap().App;
  let bgAt = 0;
  if (A) {
    A.addListener("backButton", () => {
      if (S.sheet && !S.sheet.done && (S.sheet.step || 1) > 1 && !S.upd) { backStep(); return; }
      if (S.sheet || S.upd) { closeS(); return; }
      if (!S.auth && CONFIGURED && (S.view === "reg" || S.view === "ph" || S.phone)) { hap(); if (S.view === "reg") S.view = "ph"; else if (S.view === "ph") S.view = ""; else { S.phone = ""; S.pin = ""; S.view = "ph"; } render(); return; }
      if (S.auth && S.tab !== "home") { go("home"); return; }
      A.exitApp();
    });
    A.addListener("appStateChange", (st) => {
      if (!st.isActive) { bgAt = Date.now(); return; }
      if (S.auth && bgAt && Date.now() - bgAt > 60000) lock(true); else if (S.auth) refresh();
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
    if (!el) {
      vl = document.createElement("div"); vl.id = "ptrv"; document.body.appendChild(vl);
      el = document.createElement("div"); el.id = "ptr"; el.innerHTML = '<i class="lgl"></i>'; document.body.appendChild(el);
    }
    return el;
  };
  const place = (d, anim) => {
    const e = node(), k = Math.max(0, Math.min(1, d / TH));
    e.style.transition = anim ? "transform .3s cubic-bezier(.34,1.56,.64,1),opacity .22s" : "none";
    e.style.transform = "translate(-50%,-50%) scale(" + (d <= 0 ? .4 : (.45 + .55 * k).toFixed(3)) + ")";
    e.style.opacity = d <= 0 ? 0 : Math.min(1, d / 28);
    vl.classList.toggle("on", d > 0 && (busy || k > .15));
    vl.style.opacity = d <= 0 ? "" : String(Math.min(1, k) * .9);
    if (!busy) e.firstChild.style.transform = "rotate(" + Math.round(d * 5) + "deg)";
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
