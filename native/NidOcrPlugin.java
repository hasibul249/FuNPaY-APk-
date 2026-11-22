package __PKG__;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.mlkit.vision.common.InputImage;
import com.google.mlkit.vision.text.Text;
import com.google.mlkit.vision.text.TextRecognition;
import com.google.mlkit.vision.text.TextRecognizer;
import com.google.mlkit.vision.text.latin.TextRecognizerOptions;

/* Google ML Kit (Latin, ফোনের ভেতরের মডেল): NID-র ইংরেজি লেখা ও সংখ্যা ১ সেকেন্ডের কমে পড়ে। ইন্টারনেট/বিলিং লাগে না।
   ফেরত: { text, lines:[{t, w:[[শব্দ, ভরসা], ...]}] } (সার্ভার OCR-এর মতো একই গড়ন) */
@CapacitorPlugin(name = "NidOcr")
public class NidOcrPlugin extends Plugin {
    private TextRecognizer recognizer;

    @PluginMethod
    public void recognize(final PluginCall call) {
        String b64 = call.getString("image");
        if (b64 == null || b64.length() < 100) { call.reject("NOIMG"); return; }
        try {
            byte[] bytes = Base64.decode(b64, Base64.DEFAULT);
            Bitmap bmp = BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
            if (bmp == null) { call.reject("BADIMG"); return; }
            if (recognizer == null) recognizer = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS);
            InputImage img = InputImage.fromBitmap(bmp, 0);
            recognizer.process(img)
                .addOnSuccessListener(new OnSuccessListener<Text>() {
                    @Override
                    public void onSuccess(Text text) {
                        try {
                            JSObject out = new JSObject();
                            JSArray lines = new JSArray();
                            for (Text.TextBlock b : text.getTextBlocks()) {
                                for (Text.Line l : b.getLines()) {
                                    JSObject lo = new JSObject();
                                    lo.put("t", l.getText());
                                    JSArray ws = new JSArray();
                                    for (Text.Element e : l.getElements()) {
                                        JSArray w = new JSArray();
                                        w.put(e.getText());
                                        w.put(85);
                                        ws.put(w);
                                    }
                                    lo.put("w", ws);
                                    lines.put(lo);
                                }
                            }
                            out.put("text", text.getText());
                            out.put("lines", lines);
                            call.resolve(out);
                        } catch (Exception ex) {
                            call.reject("PARSE");
                        }
                    }
                })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(Exception e) { call.reject("FAIL"); }
                });
        } catch (Throwable t) {
            call.reject("ERR");
        }
    }
}
