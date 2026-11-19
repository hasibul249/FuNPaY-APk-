// npx cap add android এর পর একবার চালান: node scripts/fix-android.js
// ১) QR স্ক্যানারের জন্য minSdkVersion কমপক্ষে 23
// ২) নতুন androidx লাইব্রেরির জন্য compileSdkVersion 35 (AGP 8.2.1 এর সতর্কতা বন্ধ করে)
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
fs.writeFileSync(g, p);
console.log("minSdk=23+, compileSdk=35 ঠিক করা হয়েছে");
