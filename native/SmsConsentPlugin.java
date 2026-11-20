package __PKG__;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.os.Bundle;

import androidx.activity.result.ActivityResult;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.gms.auth.api.phone.SmsRetriever;
import com.google.android.gms.common.api.CommonStatusCodes;
import com.google.android.gms.common.api.Status;

/* Google SMS User Consent API: SMS এলে "Allow" পপআপ আসে, Allow দিলে মেসেজের লেখা অ্যাপ পায় */
@CapacitorPlugin(name = "SmsConsent")
public class SmsConsentPlugin extends Plugin {
    private BroadcastReceiver receiver;

    @PluginMethod
    public void start(final PluginCall call) {
        stopReceiver();
        getBridge().saveCall(call);
        try {
            SmsRetriever.getClient(getActivity()).startSmsUserConsent(null);
        } catch (Exception e) {
            finish(call, "unavailable", null);
            return;
        }
        receiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                if (!SmsRetriever.SMS_RETRIEVED_ACTION.equals(intent.getAction())) return;
                Bundle extras = intent.getExtras();
                if (extras == null) return;
                Status status = (Status) extras.get(SmsRetriever.EXTRA_STATUS);
                if (status == null) return;
                stopReceiver();
                if (status.getStatusCode() == CommonStatusCodes.SUCCESS) {
                    Intent consent = extras.getParcelable(SmsRetriever.EXTRA_CONSENT_INTENT);
                    try {
                        startActivityForResult(call, consent, "consentResult");
                    } catch (Exception e) {
                        finish(call, "failed", null);
                    }
                } else {
                    finish(call, "timeout", null);
                }
            }
        };
        IntentFilter f = new IntentFilter(SmsRetriever.SMS_RETRIEVED_ACTION);
        if (Build.VERSION.SDK_INT >= 33) {
            getContext().registerReceiver(receiver, f, SmsRetriever.SEND_PERMISSION, null, Context.RECEIVER_EXPORTED);
        } else {
            getContext().registerReceiver(receiver, f, SmsRetriever.SEND_PERMISSION, null);
        }
    }

    @PluginMethod
    public void stop(PluginCall call) {
        stopReceiver();
        call.resolve();
    }

    @ActivityCallback
    private void consentResult(PluginCall call, ActivityResult result) {
        if (call == null) return;
        if (result.getResultCode() == Activity.RESULT_OK && result.getData() != null) {
            finish(call, null, result.getData().getStringExtra(SmsRetriever.EXTRA_SMS_MESSAGE));
        } else {
            finish(call, "denied", null);
        }
    }

    private void finish(PluginCall call, String err, String message) {
        if (err != null) {
            call.reject(err);
        } else {
            JSObject o = new JSObject();
            o.put("message", message == null ? "" : message);
            call.resolve(o);
        }
        try { getBridge().releaseCall(call); } catch (Exception ignored) {}
    }

    private void stopReceiver() {
        if (receiver != null) {
            try { getContext().unregisterReceiver(receiver); } catch (Exception ignored) {}
            receiver = null;
        }
    }

    @Override
    protected void handleOnDestroy() {
        stopReceiver();
    }
}
