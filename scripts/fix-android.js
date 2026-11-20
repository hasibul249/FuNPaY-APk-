// npx cap add android এর পর একবার চালান: node scripts/fix-android.js
// ১) minSdkVersion কমপক্ষে 23 (QR স্ক্যানার)
// ২) compileSdkVersion 35 + সতর্কতা বন্ধ (নতুন androidx লাইব্রেরি)
// ৩) Gradle এর মেমরি বাড়ানো (বিল্ড মাঝপথে থেমে যাওয়া ঠেকায়)
// ৪) ক্যামেরা ও ফিঙ্গারপ্রিন্টের permission AndroidManifest এ বসানো
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
  ["android.permission.CAMERA", "android.permission.USE_BIOMETRIC", "android.permission.USE_FINGERPRINT", "android.permission.VIBRATE"].forEach((perm) => {
    if (!x.includes(perm)) x = x.replace("</manifest>", `    <uses-permission android:name="${perm}" />\n</manifest>`);
  });
  fs.writeFileSync(m, x);
}

/* ৫) টানলে স্ক্রিন বড়/নরম হওয়া (overscroll stretch) বন্ধ, যেন নেটিভ অ্যাপের মতো স্থির থাকে */
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
console.log("android সেটিং ঠিক করা হয়েছে");
