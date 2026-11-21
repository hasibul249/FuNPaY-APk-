// npx cap add android এর পর একবার চালান: node scripts/fix-android.js
// 1) minSdkVersion কমপক্ষে 23 (QR স্ক্যানার)
// 2) compileSdkVersion 35 + সতর্কতা বন্ধ (নতুন androidx লাইব্রেরি)
// 3) Gradle এর মেমরি বাড়ানো (বিল্ড মাঝপথে থেমে যাওয়া ঠেকায়)
// 4) ক্যামেরা ও ফিঙ্গারপ্রিন্টের permission AndroidManifest এ বসানো
const fs = require("fs");
const f = "android/variables.gradle";
if (!fs.existsSync(f)) { console.log("android/variables.gradle পাওয়া যায়নি, আগে npx cap add android চালান"); process.exit(0); }
let s = fs.readFileSync(f, "utf8");
s = s.replace(/minSdkVersion\s*=\s*(\d+)/, (m, v) => "minSdkVersion = " + Math.max(23, Number(v)));
s = s.replace(/compileSdkVersion\s*=\s*(\d+)/, (m, v) => "compileSdkVersion = " + Math.max(35, Number(v)));
fs.writeFileSync(f, s);

const g = "android/gradle.properties";
let p = fs.existsSync(g) ? fs.readFileSync(g, "utf8") : "";
if (!/suppressUnsupportedCompileSdk/.test(p)) p += "\nandroid.suppressUnsupportedCompileSdk=35\n";
if (/^org\.gradle\.jvmargs=.*$/m.test(p)) p = p.replace(/^org\.gradle\.jvmargs=.*$/m, "org.gradle.jvmargs=-Xmx3g -Dfile.encoding=UTF-8");
else p += "org.gradle.jvmargs=-Xmx3g -Dfile.encoding=UTF-8\n";
fs.writeFileSync(g, p);

const m = "android/app/src/main/AndroidManifest.xml";
if (fs.existsSync(m)) {
  let x = fs.readFileSync(m, "utf8");
  ["android.permission.CAMERA", "android.permission.USE_BIOMETRIC", "android.permission.USE_FINGERPRINT", "android.permission.VIBRATE", "android.permission.POST_NOTIFICATIONS", "android.permission.READ_CONTACTS"].forEach((perm) => {
    if (!x.includes(perm)) x = x.replace("</manifest>", `    <uses-permission android:name="${perm}" />\n</manifest>`);
  });
  fs.writeFileSync(m, x);
}

/* 5) টানলে স্ক্রিন বড়/নরম হওয়া (overscroll stretch) বন্ধ, যেন নেটিভ অ্যাপের মতো স্থির থাকে */
(function walk(d) {
  if (!fs.existsSync(d)) return;
  for (const n of fs.readdirSync(d)) {
    const q = d + "/" + n;
    if (fs.statSync(q).isDirectory()) walk(q);
    else if (n === "MainActivity.java") {
      let c = fs.readFileSync(q, "utf8");
      if (!c.includes("OVER_SCROLL_NEVER") && /extends BridgeActivity\s*\{\s*\}/.test(c)) {
        c = c.replace(/extends BridgeActivity\s*\{\s*\}/, "extends BridgeActivity {\n    @Override\n    public void onStart() {\n        super.onStart();\n        try { getBridge().getWebView().setOverScrollMode(android.view.View.OVER_SCROLL_NEVER); } catch (Exception e) {}\n    }\n}");
        fs.writeFileSync(q, c);
        console.log("MainActivity: overscroll বন্ধ");
      }
    }
  }
})("android/app/src/main/java");

/* 6) অ্যাপ খোলার সময় কালো/ধূসর স্ক্রিন বন্ধ: নেটিভ স্প্ল্যাশ পুরো গোলাপি, আইকন স্বচ্ছ, তারপর সরাসরি আমাদের অ্যানিমেশন */
(function () {
  const res = "android/app/src/main/res";
  if (!fs.existsSync(res)) return;
  fs.mkdirSync(res + "/values", {recursive: true}); fs.mkdirSync(res + "/drawable", {recursive: true});
  fs.writeFileSync(res + "/drawable/fp_splash_icon.xml", '<?xml version="1.0" encoding="utf-8"?>\n<shape xmlns:android="http://schemas.android.com/apk/res/android" android:shape="rectangle"><solid android:color="#00000000"/><size android:width="48dp" android:height="48dp"/></shape>\n');
  fs.writeFileSync(res + "/values/fp_colors.xml", '<?xml version="1.0" encoding="utf-8"?>\n<resources><color name="fp_splash_bg">#c40f5e</color></resources>\n');
  const st = res + "/values/styles.xml";
  if (fs.existsSync(st)) {
    let x = fs.readFileSync(st, "utf8");
    if (!x.includes("windowSplashScreenBackground")) {
      x = x.replace(/(<style name="AppTheme\.NoActionBarLaunch"[^>]*>)/, '$1\n        <item name="windowSplashScreenBackground">@color/fp_splash_bg</item>\n        <item name="windowSplashScreenAnimatedIcon">@drawable/fp_splash_icon</item>\n        <item name="windowSplashScreenAnimationDuration">0</item>\n        <item name="android:windowBackground">@color/fp_splash_bg</item>');
      fs.writeFileSync(st, x);
      console.log("styles.xml: স্প্ল্যাশ গোলাপি করা হলো");
    }
  }
  /* ডার্ক মোডেও একই (values-night থাকলে) */
  const sn = res + "/values-night/styles.xml";
  if (fs.existsSync(sn)) { let y = fs.readFileSync(sn, "utf8"); if (!y.includes("windowSplashScreenBackground")) { y = y.replace(/(<style name="AppTheme\.NoActionBarLaunch"[^>]*>)/, '$1\n        <item name="windowSplashScreenBackground">@color/fp_splash_bg</item>\n        <item name="windowSplashScreenAnimatedIcon">@drawable/fp_splash_icon</item>'); fs.writeFileSync(sn, y); } }
})();
/* 7) নোটিফিকেশনের ছোট আইকন (স্ট্যাটাস বারে সাদা গোল ঘেরা ৳ ধাঁচের চিহ্ন) */
(function () {
  const res = "android/app/src/main/res";
  if (!fs.existsSync(res)) return;
  fs.mkdirSync(res + "/drawable", {recursive: true});
  fs.writeFileSync(res + "/drawable/ic_stat_funpay.xml", '<?xml version="1.0" encoding="utf-8"?>\n<vector xmlns:android="http://schemas.android.com/apk/res/android" android:width="24dp" android:height="24dp" android:viewportWidth="24" android:viewportHeight="24"><path android:fillColor="#FFFFFFFF" android:pathData="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2zM12,20c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8 8,3.59 8,8 -3.59,8 -8,8z"/><path android:fillColor="#FFFFFFFF" android:pathData="M12,12m-4.5,0a4.5,4.5 0,1 1,9 0a4.5,4.5 0,1 1,-9 0"/></vector>\n');
  console.log("নোটিফিকেশন আইকন বসানো হলো");
})();
console.log("android সেটিং ঠিক করা হয়েছে");

/* 8) SMS User Consent (OTP কোড অটো বসানো): নেটিভ প্লাগইন ফাইল বসানো + MainActivity তে রেজিস্টার + Google Play Services লাইব্রেরি */
(function () {
  const root = "android/app/src/main/java";
  if (!fs.existsSync(root) || !fs.existsSync("native/SmsConsentPlugin.java")) return;
  let mainFile = null;
  (function walk(d) {
    for (const n of fs.readdirSync(d)) {
      const q = d + "/" + n;
      if (fs.statSync(q).isDirectory()) walk(q);
      else if (n === "MainActivity.java") mainFile = q;
    }
  })(root);
  if (!mainFile) { console.log("MainActivity.java পাওয়া যায়নি, SMS প্লাগইন বসানো হয়নি"); return; }
  let c = fs.readFileSync(mainFile, "utf8");
  const pkg = (/package\s+([\w.]+)\s*;/.exec(c) || [])[1] || "com.funpay.app";
  const dir = mainFile.slice(0, mainFile.lastIndexOf("/"));
  fs.writeFileSync(dir + "/SmsConsentPlugin.java", fs.readFileSync("native/SmsConsentPlugin.java", "utf8").replace(/__PKG__/g, pkg));
  if (!c.includes("registerPlugin(SmsConsentPlugin.class)")) {
    c = c.replace(/extends BridgeActivity\s*\{/, "extends BridgeActivity {\n    @Override\n    public void onCreate(android.os.Bundle savedInstanceState) {\n        registerPlugin(SmsConsentPlugin.class);\n        super.onCreate(savedInstanceState);\n    }\n");
    fs.writeFileSync(mainFile, c);
  }
  const bg = "android/app/build.gradle";
  if (fs.existsSync(bg)) {
    let b = fs.readFileSync(bg, "utf8");
    if (!b.includes("play-services-auth-api-phone")) {
      b = b.replace(/dependencies\s*\{/, "dependencies {\n    implementation 'com.google.android.gms:play-services-auth-api-phone:18.1.0'");
      fs.writeFileSync(bg, b);
    }
  }
  console.log("SMS User Consent প্লাগইন বসানো হলো");
})();
