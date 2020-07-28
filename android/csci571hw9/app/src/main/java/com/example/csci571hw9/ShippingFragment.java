package com.example.csci571hw9;

import android.os.Build;
import android.os.Bundle;
import android.text.Html;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Iterator;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ShippingFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ShippingFragment extends Fragment {

    @BindView(R.id.shipping_information_title)
    TextView shippingInformationTitle;
    @BindView(R.id.shipping_information_content)
    TextView shippingInformationContent;
    @BindView(R.id.shipping_information_layout)
    LinearLayout shippingInformationLayout;
    private ArrayList<String> shippingInfo = new ArrayList<>();

    public ShippingFragment() {
        // Required empty public constructor
    }

    public static ShippingFragment newInstance(JSONObject itemData) {
        ShippingFragment fragment = new ShippingFragment();
        Bundle args = new Bundle();
        ArrayList<String> shippingInfo = new ArrayList<>();
        try {
            if (itemData.has("shippingInfo")) {
                shippingInfo = (ArrayList<String>) itemData.get("shippingInfo");
            }

        } catch (JSONException e) {
            e.printStackTrace();
        }

        if (!shippingInfo.isEmpty()) {
            args.putStringArrayList("shippingInfo", shippingInfo);
        }

        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            if (getArguments().getStringArrayList("shippingInfo") != null && !getArguments().getStringArrayList("shippingInfo").isEmpty()) {
                shippingInfo = getArguments().getStringArrayList("shippingInfo");
            }
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_shipping, container, false);
        ButterKnife.bind(this, view);
        hidshippingInfo();
        if (!shippingInfo.isEmpty()) {
            showshippingInfo();
            StringBuilder speccontent = new StringBuilder("<ui>");

            for (int i = 0; i < shippingInfo.size(); i++) {
                String tempwho = shippingInfo.get(i);
                String[] splited = tempwho.split("53535353");
                if(splited[0].equals("shippingServiceCost")){
                    continue;
                }
                speccontent.append("<li>\t<b>").append(splitByUpperCase(splited[0])).append("</b>\t\t\t").append(splited[1]).append("</li>");
            }
            speccontent.append("</ui>");
            shippingInformationContent.setText(Html.fromHtml(
                    speccontent.toString(),
                    Html.FROM_HTML_MODE_LEGACY
            ));
        }
        return view;
    }

    private void hidshippingInfo() {
        shippingInformationLayout.setVisibility(View.GONE);
    }

    private void showshippingInfo() {
        shippingInformationLayout.setVisibility(View.VISIBLE);
    }

    private String splitByUpperCase(String str) {
        StringBuilder rs = new StringBuilder();
        if (str.length() > 1) {
            rs.append(str.substring(0, 1));
            for (int i = 1; i < str.length(); i++) {
                if (Character.isUpperCase(str.charAt(i))) {
                    if (i == str.length() - 1) {
                        rs.append(" ").append(str.substring(i));
                    } else {
                        rs.append(" ").append(str.substring(i, i + 1));
                    }
                } else {
                    if (i == str.length() - 1) {
                        rs.append(str.substring(i));
                    } else {
                        rs.append(str.substring(i, i + 1));
                    }
                }
            }
            return rs.toString();
        } else {
            return str;
        }
    }
}