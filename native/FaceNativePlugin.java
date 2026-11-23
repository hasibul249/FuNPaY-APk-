package __PKG__;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.PointF;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.Base64;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.gms.tasks.Tasks;
import com.google.mlkit.vision.common.InputImage;
import com.google.mlkit.vision.face.Face;
import com.google.mlkit.vision.face.FaceDetection;
import com.google.mlkit.vision.face.FaceDetector;
import com.google.mlkit.vision.face.FaceDetectorOptions;
import com.google.mlkit.vision.face.FaceLandmark;

import org.tensorflow.lite.Interpreter;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/* v3.09: ফোনের ভেতরে মুখ চেনা (ফ্রি, অফলাইন, ইন্টারনেট/বিলিং লাগে না)।
   - detect : লাইভনেসের জন্য ML Kit Face Detection (মুখের বাক্স, চোখ-নাক-মুখের বিন্দু, চোখ খোলা/বন্ধের সম্ভাবনা)
   - embed  : ML Kit দিয়ে মুখ খুঁজে ৫-বিন্দুতে সোজা করে (alignment) MobileFaceNet (TFLite, অ্যাপের ভেতরেই থাকে) দিয়ে ১২৮ সংখ্যার ছাপ
   - warmup : মডেল আগে থেকে লোড (প্রথম ব্যবহারে দেরি কমায়)
   মডেল: assets/mobile_facenet.tflite — ইনপুট img1, img2 (১x৩x১১২x১১২, RGB, ০-১), আউটপুট embeddings (২x১২৮)। নর্মালাইজেশন মডেলের ভেতরেই আছে। */
@CapacitorPlugin(name = "FaceNative")
public class FaceNativePlugin extends Plugin {
    private static final int SZ = 112;
    /* ArcFace/MobileFaceNet এর স্ট্যান্ডার্ড ৫-বিন্দু টেমপ্লেট (১১২x১১২): বাঁ চোখ, ডান চোখ, নাক, মুখের বাঁ কোণ, মুখের ডান কোণ (ছবির বাঁ-ডান) */
    private static final float[][] TPL = {
        {38.2946f, 51.6963f}, {73.5318f, 51.5014f}, {56.0252f, 71.7366f}, {41.5493f, 92.3655f}, {70.7299f, 92.2041f}
    };

    private FaceDetector liveDet;
    private FaceDetector matchDet;
    private Interpreter tf;
    private boolean nchw = true;
    private final Object lock = new Object();

    private FaceDetector live() {
        if (liveDet == null) {
            FaceDetectorOptions o = new FaceDetectorOptions.Builder()
                .setPerformanceMode(FaceDetectorOptions.PERFORMANCE_MODE_FAST)
                .setLandmarkMode(FaceDetectorOptions.LANDMARK_MODE_ALL)
                .setClassificationMode(FaceDetectorOptions.CLASSIFICATION_MODE_ALL)
                .setMinFaceSize(0.1f)
                .build();
            liveDet = FaceDetection.getClient(o);
        }
        return liveDet;
    }

    private FaceDetector match() {
        if (matchDet == null) {
            FaceDetectorOptions o = new FaceDetectorOptions.Builder()
                .setPerformanceMode(FaceDetectorOptions.PERFORMANCE_MODE_ACCURATE)
                .setLandmarkMode(FaceDetectorOptions.LANDMARK_MODE_ALL)
                .setClassificationMode(FaceDetectorOptions.CLASSIFICATION_MODE_NONE)
                .setMinFaceSize(0.04f)
                .build();
            matchDet = FaceDetection.getClient(o);
        }
        return matchDet;
    }

    private void ensureTf() throws Exception {
        if (tf != null) return;
        InputStream is = getContext().getAssets().open("mobile_facenet.tflite");
        ByteArrayOutputStream bo = new ByteArrayOutputStream();
        byte[] buf = new byte[65536];
        int n;
        while ((n = is.read(buf)) > 0) bo.write(buf, 0, n);
        is.close();
        byte[] all = bo.toByteArray();
        ByteBuffer mb = ByteBuffer.allocateDirect(all.length).order(ByteOrder.nativeOrder());
        mb.put(all);
        mb.rewind();
        Interpreter.Options op = new Interpreter.Options();
        op.setNumThreads(2);
        Interpreter t = new Interpreter(mb, op);
        int[] sh = t.getInputTensor(0).shape();
        nchw = sh.length == 4 && sh[1] == 3;
        tf = t;
    }

    private static Bitmap decode(String b64) {
        if (b64 == null || b64.length() < 100) return null;
        byte[] bytes = Base64.decode(b64, Base64.DEFAULT);
        return BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
    }

    private static Face biggest(List<Face> faces) {
        Face best = null;
        long ba = -1;
        for (Face f : faces) {
            Rect r = f.getBoundingBox();
            long a = (long) r.width() * (long) r.height();
            if (a > ba) { ba = a; best = f; }
        }
        return best;
    }

    private static PointF lm(Face f, int type) {
        FaceLandmark l = f.getLandmark(type);
        return l == null ? null : l.getPosition();
    }

    private static JSArray pt(PointF p) throws Exception {
        JSArray a = new JSArray();
        a.put((double) p.x);
        a.put((double) p.y);
        return a;
    }

    /* সব ডিটেক্টর ও মডেল লোড করে, ছোট ফাঁকা ছবিতে একবার চালিয়ে গরম করে রাখে */
    @PluginMethod
    public void warmup(final PluginCall call) {
        JSObject out = new JSObject();
        boolean det = false, tfOk = false;
        try {
            Bitmap b = Bitmap.createBitmap(96, 96, Bitmap.Config.ARGB_8888);
            try { Tasks.await(live().process(InputImage.fromBitmap(b, 0)), 8, TimeUnit.SECONDS); det = true; } catch (Throwable t) { det = false; }
            try { Tasks.await(match().process(InputImage.fromBitmap(b, 0)), 8, TimeUnit.SECONDS); } catch (Throwable t) { }
            b.recycle();
        } catch (Throwable t) { det = false; }
        try {
            synchronized (lock) { ensureTf(); }
            tfOk = true;
        } catch (Throwable t) { tfOk = false; }
        try {
            out.put("det", det);
            out.put("tf", tfOk);
            call.resolve(out);
        } catch (Throwable t) { call.reject("WARM"); }
    }

    /* লাইভনেস: একটা ফ্রেমে সবচেয়ে বড় মুখের মাপ। সব বিন্দু ফ্রেমের পিক্সেলে; "A" = ছবির বাঁ দিকের (ছোট x), "B" = ডান দিকের */
    @PluginMethod
    public void detect(final PluginCall call) {
        try {
            Bitmap bmp = decode(call.getString("image"));
            if (bmp == null) { call.reject("BADIMG"); return; }
            List<Face> faces = Tasks.await(live().process(InputImage.fromBitmap(bmp, 0)), 6, TimeUnit.SECONDS);
            JSObject out = new JSObject();
            out.put("w", bmp.getWidth());
            out.put("h", bmp.getHeight());
            out.put("n", faces.size());
            Face f = faces.isEmpty() ? null : biggest(faces);
            if (f != null) {
                Rect r = f.getBoundingBox();
                JSArray box = new JSArray();
                box.put(r.left); box.put(r.top); box.put(r.width()); box.put(r.height());
                out.put("box", box);
                PointF el = lm(f, FaceLandmark.LEFT_EYE), er = lm(f, FaceLandmark.RIGHT_EYE);
                if (el != null && er != null) {
                    PointF a = el.x <= er.x ? el : er, b = el.x <= er.x ? er : el;
                    out.put("eA", pt(a));
                    out.put("eB", pt(b));
                }
                PointF ns = lm(f, FaceLandmark.NOSE_BASE);
                if (ns != null) out.put("nose", pt(ns));
                PointF mb = lm(f, FaceLandmark.MOUTH_BOTTOM);
                if (mb != null) out.put("mB", pt(mb));
                Float lo = f.getLeftEyeOpenProbability(), ro = f.getRightEyeOpenProbability();
                out.put("ol", lo == null ? -1.0 : (double) lo.floatValue());
                out.put("or", ro == null ? -1.0 : (double) ro.floatValue());
                out.put("ey", (double) f.getHeadEulerAngleY());
                out.put("ex", (double) f.getHeadEulerAngleX());
            }
            bmp.recycle();
            call.resolve(out);
        } catch (Throwable t) {
            call.reject("DETFAIL");
        }
    }

    /* মুখ মেলানো: সবচেয়ে বড় মুখ খুঁজে, সোজা করে, ১২৮ সংখ্যার ছাপ (দৈর্ঘ্য ১ করা)। ফেরত: {n, emb, box:[x,y,w,h], al} (al=1 মানে ৪/৫ বিন্দুতে সোজা করা হয়েছে) */
    @PluginMethod
    public void embed(final PluginCall call) {
        try {
            Bitmap bmp = decode(call.getString("image"));
            if (bmp == null) { call.reject("BADIMG"); return; }
            List<Face> faces = Tasks.await(match().process(InputImage.fromBitmap(bmp, 0)), 10, TimeUnit.SECONDS);
            JSObject out = new JSObject();
            out.put("n", faces.size());
            Face f = faces.isEmpty() ? null : biggest(faces);
            if (f == null) { bmp.recycle(); call.resolve(out); return; }
            int[] mode = new int[1];
            Bitmap crop = align(bmp, f, mode);
            float[] e;
            synchronized (lock) {
                ensureTf();
                e = run(crop);
            }
            crop.recycle();
            Rect r = f.getBoundingBox();
            JSArray box = new JSArray();
            box.put(r.left); box.put(r.top); box.put(r.width()); box.put(r.height());
            JSArray emb = new JSArray();
            for (int i = 0; i < e.length; i++) emb.put((double) e[i]);
            out.put("box", box);
            out.put("emb", emb);
            out.put("al", mode[0]);
            bmp.recycle();
            call.resolve(out);
        } catch (Throwable t) {
            call.reject("EMBFAIL");
        }
    }

    /* ৪ বা ২ বিন্দু থেকে সিমিলারিটি ট্রান্সফর্ম (ঘোরানো+মাপ+সরানো) — least squares */
    private static float[] fit(float[][] s, float[][] d) {
        int n = s.length;
        float sx = 0, sy = 0, dx = 0, dy = 0;
        for (int i = 0; i < n; i++) { sx += s[i][0]; sy += s[i][1]; dx += d[i][0]; dy += d[i][1]; }
        sx /= n; sy /= n; dx /= n; dy /= n;
        float num1 = 0, num2 = 0, den = 0;
        for (int i = 0; i < n; i++) {
            float xx = s[i][0] - sx, xy = s[i][1] - sy, yx = d[i][0] - dx, yy = d[i][1] - dy;
            num1 += xx * yx + xy * yy;
            num2 += xx * yy - xy * yx;
            den += xx * xx + xy * xy;
        }
        if (den < 1e-6f) return null;
        float a = num1 / den, b = num2 / den;
        float tx = dx - (a * sx - b * sy), ty = dy - (b * sx + a * sy);
        return new float[]{a, -b, tx, b, a, ty, 0, 0, 1};
    }

    private Bitmap align(Bitmap src, Face f, int[] mode) {
        Bitmap out = Bitmap.createBitmap(SZ, SZ, Bitmap.Config.ARGB_8888);
        Canvas c = new Canvas(out);
        c.drawColor(Color.BLACK);
        Matrix m = new Matrix();
        boolean ok = false;
        PointF el = lm(f, FaceLandmark.LEFT_EYE), er = lm(f, FaceLandmark.RIGHT_EYE);
        PointF ml = lm(f, FaceLandmark.MOUTH_LEFT), mr = lm(f, FaceLandmark.MOUTH_RIGHT);
        if (el != null && er != null) {
            PointF e0 = el.x <= er.x ? el : er, e1 = el.x <= er.x ? er : el;
            float[] v = null;
            if (ml != null && mr != null) {
                PointF m0 = ml.x <= mr.x ? ml : mr, m1 = ml.x <= mr.x ? mr : ml;
                v = fit(new float[][]{{e0.x, e0.y}, {e1.x, e1.y}, {m0.x, m0.y}, {m1.x, m1.y}},
                        new float[][]{TPL[0], TPL[1], TPL[3], TPL[4]});
                if (v != null) mode[0] = 2;
            }
            if (v == null) {
                v = fit(new float[][]{{e0.x, e0.y}, {e1.x, e1.y}}, new float[][]{TPL[0], TPL[1]});
                if (v != null) mode[0] = 1;
            }
            if (v != null) { m.setValues(v); ok = true; }
        }
        if (!ok) {
            Rect r = f.getBoundingBox();
            float w = r.width(), h = r.height(), s = Math.max(w, h) * 1.1f, cx = r.exactCenterX(), cy = r.exactCenterY();
            m.setRectToRect(new RectF(cx - s / 2, cy - s / 2, cx + s / 2, cy + s / 2), new RectF(0, 0, SZ, SZ), Matrix.ScaleToFit.FILL);
            mode[0] = 0;
        }
        Paint p = new Paint(Paint.FILTER_BITMAP_FLAG | Paint.ANTI_ALIAS_FLAG);
        c.drawBitmap(src, m, p);
        return out;
    }

    private ByteBuffer fill(int[] px) {
        ByteBuffer bb = ByteBuffer.allocateDirect(3 * SZ * SZ * 4).order(ByteOrder.nativeOrder());
        int n = SZ * SZ;
        if (nchw) {
            int[] sh = {16, 8, 0};
            for (int ch = 0; ch < 3; ch++)
                for (int i = 0; i < n; i++) bb.putFloat(((px[i] >> sh[ch]) & 0xFF) / 255f);
        } else {
            for (int i = 0; i < n; i++) {
                bb.putFloat(((px[i] >> 16) & 0xFF) / 255f);
                bb.putFloat(((px[i] >> 8) & 0xFF) / 255f);
                bb.putFloat((px[i] & 0xFF) / 255f);
            }
        }
        bb.rewind();
        return bb;
    }

    private float[] run(Bitmap crop) {
        int[] px = new int[SZ * SZ];
        crop.getPixels(px, 0, SZ, 0, 0, SZ, SZ);
        ByteBuffer a = fill(px), b = fill(px);
        float[][] outv = new float[2][128];
        Map<Integer, Object> outs = new HashMap<Integer, Object>();
        outs.put(0, outv);
        tf.runForMultipleInputsOutputs(new Object[]{a, b}, outs);
        float[] e = outv[0];
        double s = 0;
        for (int i = 0; i < e.length; i++) s += e[i] * e[i];
        double nr = Math.sqrt(s);
        if (nr < 1e-6) throw new IllegalStateException("ZERO");
        float[] r = new float[e.length];
        for (int i = 0; i < e.length; i++) r[i] = (float) (e[i] / nr);
        return r;
    }

    @Override
    protected void handleOnDestroy() {
        try { if (liveDet != null) liveDet.close(); } catch (Throwable t) { }
        try { if (matchDet != null) matchDet.close(); } catch (Throwable t) { }
        try { if (tf != null) tf.close(); } catch (Throwable t) { }
        super.handleOnDestroy();
    }
}
