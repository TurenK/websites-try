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
 * Use the {@link SellerInfoFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class SellerInfoFragment extends Fragment {

    @BindView(R.id.sellerinfo_information_title)
    TextView sellerinfoInformationTitle;
    @BindView(R.id.sellerinfo_information_content)
    TextView sellerinfoInformationContent;
    @BindView(R.id.sellerinfo_hrline_1)
    View sellerinfoHrline1;
    @BindView(R.id.sellerinfo_ReturnPolicy_title)
    TextView sellerinfoReturnPolicyTitle;
    @BindView(R.id.sellerinfo_ReturnPolicy_content)
    TextView sellerinfoReturnPolicyContent;
    @BindView(R.id.sellerinfo_information_layout)
    LinearLayout sellerinfoInformationLayout;
    @BindView(R.id.sellerinfo_ReturnPolicy_layout)
    LinearLayout sellerinfoReturnPolicyLayout;
    private ArrayList<String> Seller = new ArrayList<>();
    private ArrayList<String> ReturnPolicy = new ArrayList<>();

    public SellerInfoFragment() {
        // Required empty public constructor
    }

    public static SellerInfoFragment newInstance(JSONObject itemData) {
        SellerInfoFragment fragment = new SellerInfoFragment();
        Bundle args = new Bundle();
        ArrayList<String> Seller = new ArrayList<>();
        ArrayList<String> ReturnPolicy = new ArrayList<>();
        try {
            if (itemData.has("Seller")) {
                JSONObject temoItemsc = itemData.getJSONObject("Seller");
                Iterator<String> tempkeys = temoItemsc.keys();
                while (tempkeys.hasNext()) {
                    String tempkey = (String) tempkeys.next();
                    Seller.add(tempkey + "53535353" + temoItemsc.getString(tempkey).replaceAll("[\\[\\]\\\\\"]", ""));
                }
            }
            if (itemData.has("ReturnPolicy")) {
                JSONObject temoItemsc = itemData.getJSONObject("ReturnPolicy");
                Iterator<String> tempkeys = temoItemsc.keys();
                while (tempkeys.hasNext()) {
                    String tempkey = (String) tempkeys.next();
                    ReturnPolicy.add(tempkey + "53535353" + temoItemsc.getString(tempkey).replaceAll("[\\[\\]\\\\\"]", ""));
                }
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }

        if (!Seller.isEmpty()) {
            args.putStringArrayList("Seller", Seller);
        }
        if (!ReturnPolicy.isEmpty()) {
            args.putStringArrayList("ReturnPolicy", ReturnPolicy);
        }

        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            if (getArguments().getStringArrayList("Seller") != null && !getArguments().getStringArrayList("Seller").isEmpty()) {
                Seller = getArguments().getStringArrayList("Seller");
            }
            if (getArguments().getStringArrayList("ReturnPolicy") != null && !getArguments().getStringArrayList("ReturnPolicy").isEmpty()) {
                ReturnPolicy = getArguments().getStringArrayList("ReturnPolicy");
            }
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_seller_info, container, false);
        ButterKnife.bind(this, view);
        hidReturnInfo();
        hidSellerInfo();
        if (!Seller.isEmpty()) {
            showSellerInfo();
            StringBuilder speccontent = new StringBuilder("<ui>");

            for (int i = 0; i < Seller.size(); i++) {
                String tempwho = Seller.get(i);
                String[] splited = tempwho.split("53535353");
                speccontent.append("<li>\t<b>").append(splitByUpperCase(splited[0])).append("</b>\t\t\t\t\t").append(splited[1]).append("</li>");
            }
            speccontent.append("</ui>");
            sellerinfoInformationContent.setText(Html.fromHtml(
                    speccontent.toString(),
                    Html.FROM_HTML_MODE_LEGACY
            ));
        }
        if (!ReturnPolicy.isEmpty()) {
            showReturnInfo();
            StringBuilder speccontent = new StringBuilder("<ui>");

            for (int i = 0; i < ReturnPolicy.size(); i++) {
                String tempwho = ReturnPolicy.get(i);
                String[] splited = tempwho.split("53535353");
                speccontent.append("<li>\t<b>").append(splitByUpperCase(splited[0])).append("</b>\t\t\t").append(splited[1]).append("</li>");
            }
            speccontent.append("</ui>");
            sellerinfoReturnPolicyContent.setText(Html.fromHtml(
                    speccontent.toString(),
                    Html.FROM_HTML_MODE_LEGACY
            ));
        }
        return view;
    }

    private String splitByUpperCase(String str) {
        StringBuilder rs = new StringBuilder();
        if(str.length()>1){
        rs.append(str.substring(0, 1));
        for (int i = 1; i < str.length(); i++) {
            if (Character.isUpperCase(str.charAt(i))) {
                if(i==str.length()-1){
                    rs.append(" ").append(str.substring(i));
                }else{
                rs.append(" ").append(str.substring(i, i + 1));}
            }else {
                if(i==str.length()-1){
                    rs.append(str.substring(i));
                }else{
                    rs.append(str.substring(i, i + 1));}
            }
        }
            return rs.toString();
        }else {
            return str;
        }
    }

    private void hidSellerInfo() {
        sellerinfoInformationLayout.setVisibility(View.GONE);
    }

    private void showSellerInfo() {
        sellerinfoInformationLayout.setVisibility(View.VISIBLE);
    }

    private void hidReturnInfo() {
        sellerinfoReturnPolicyLayout.setVisibility(View.GONE);
    }

    private void showReturnInfo() {
        sellerinfoReturnPolicyLayout.setVisibility(View.VISIBLE);
    }
}