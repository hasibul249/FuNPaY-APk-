package __PKG__;

import android.app.Activity;
import android.view.View;
import android.webkit.WebView;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsAnimationCompat;
import androidx.core.view.WindowInsetsCompat;
import java.lang.ref.WeakReference;
import java.util.List;

/* v2.60: সিস্টেম কিবোর্ড ওঠা-নামার প্রতিটি ফ্রেমের মাপ ওয়েব-অংশে পাঠায়, যেন "পরবর্তী" বার কিবোর্ডের সাথে হুবহু একই গতিতে ওঠে (বিকাশের মতো)।
   কিছু ভেঙে গেলে বা এই প্লাগইন কাজ না করলে অ্যাপ আগের মতোই চলে (সব try/catch এ)। */
public class KeyboardSync {
    private static WeakReference<WebView> last = null;

    public static void install(final Activity act, final WebView wv) {
        if (act == null || wv == null) return;
        if (last != null && last.get() == wv) return;
        last = new WeakReference<WebView>(wv);
        final float density = act.getResources().getDisplayMetrics().density;
        final View root = act.getWindow().getDecorView();
        ViewCompat.setWindowInsetsAnimationCallback(root,
            new WindowInsetsAnimationCompat.Callback(WindowInsetsAnimationCompat.Callback.DISPATCH_MODE_CONTINUE_ON_SUBTREE) {
                private int pre = 0;
                private int target = 0;

                private boolean isIme(WindowInsetsAnimationCompat a) {
                    return (a.getTypeMask() & WindowInsetsCompat.Type.ime()) != 0;
                }

                private void send(final float off, final boolean end) {
                    try {
                        final String js = "window.__fpKb&&window.__fpKb(" + off + "," + (end ? "1" : "0") + ")";
                        wv.evaluateJavascript(js, null);
                    } catch (Throwable e) { }
                }

                @Override
                public void onPrepare(WindowInsetsAnimationCompat animation) {
                    try {
                        if (!isIme(animation)) return;
                        WindowInsetsCompat w = ViewCompat.getRootWindowInsets(root);
                        pre = (w == null) ? 0 : w.getInsets(WindowInsetsCompat.Type.ime()).bottom;
                    } catch (Throwable e) { pre = 0; }
                }

                @Override
                public WindowInsetsAnimationCompat.BoundsCompat onStart(WindowInsetsAnimationCompat animation, WindowInsetsAnimationCompat.BoundsCompat bounds) {
                    try {
                        if (isIme(animation)) {
                            int full = bounds.getUpperBound().bottom;
                            target = (pre < full / 2) ? full : 0;
                            send((target - pre) / density, false);
                        }
                    } catch (Throwable e) { }
                    return bounds;
                }

                @Override
                public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List<WindowInsetsAnimationCompat> animations) {
                    try {
                        boolean ime = false;
                        for (WindowInsetsAnimationCompat a : animations) { if (isIme(a)) { ime = true; break; } }
                        if (ime) {
                            int cur = insets.getInsets(WindowInsetsCompat.Type.ime()).bottom;
                            send((target - cur) / density, false);
                        }
                    } catch (Throwable e) { }
                    return insets;
                }

                @Override
                public void onEnd(WindowInsetsAnimationCompat animation) {
                    try { if (isIme(animation)) send(0, true); } catch (Throwable e) { }
                }
            });
    }
}
