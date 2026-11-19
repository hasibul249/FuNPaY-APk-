// npx cap add android এর পর একবার চালান: node scripts/fix-android.js
// QR স্ক্যানারের জন্য Android এর minSdkVersion কমপক্ষে 23 করে দেয়।
const fs = require("fs");
const f = "android/variables.gradle";
if (!fs.existsSync(f)) { console.log("android/variables.gradle পাওয়া যায়নি, আগে npx cap add android চালান"); process.exit(0); }
let s = fs.readFileSync(f, "utf8");
s = s.replace(/minSdkVersion\s*=\s*(\d+)/, (m, v) => "minSdkVersion = " + Math.max(23, Number(v)));
fs.writeFileSync(f, s);
console.log("minSdkVersion ঠিক করা হয়েছে");
