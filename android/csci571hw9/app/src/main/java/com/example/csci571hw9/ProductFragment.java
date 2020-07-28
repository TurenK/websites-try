package com.example.csci571hw9;

import android.os.Build;
import android.os.Bundle;
import android.text.Html;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.HorizontalScrollView;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;

import com.bumptech.glide.Glide;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Iterator;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ProductFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ProductFragment extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    @BindView(R.id.product_image_layout)
    LinearLayout productImageLayout;
    @BindView(R.id.product_image_scroll)
    HorizontalScrollView productImageScroll;
    @BindView(R.id.product_title)
    TextView productTitle;
    @BindView(R.id.product_price)
    TextView productPrice;
    @BindView(R.id.product_ship)
    TextView productShip;
    @BindView(R.id.product_priceship_layout)
    LinearLayout productPriceshipLayout;
    @BindView(R.id.product_hrline_1)
    View productHrline1;
    @BindView(R.id.product_featurestitle_icon)
    ImageView productFeaturestitleIcon;
    @BindView(R.id.product_featurestitle_title)
    TextView productFeaturestitleTitle;
    @BindView(R.id.product_featurestitle_layout)
    LinearLayout productFeaturestitleLayout;
    @BindView(R.id.product_subtitle_title)
    TextView productSubtitleTitle;
    @BindView(R.id.product_subtitle_content)
    TextView productSubtitleContent;
    @BindView(R.id.product_subtitle_layout)
    LinearLayout productSubtitleLayout;
    @BindView(R.id.product_brand_title)
    TextView productBrandTitle;
    @BindView(R.id.product_brand_content)
    TextView productBrandContent;
    @BindView(R.id.product_brand_layout)
    LinearLayout productBrandLayout;
    @BindView(R.id.product_features_layout)
    LinearLayout productFeaturesLayout;
    @BindView(R.id.product_hrline_2)
    View productHrline2;
    @BindView(R.id.product_specification_icon)
    ImageView productSpecificationIcon;
    @BindView(R.id.product_specification_title)
    TextView productSpecificationTitle;
    @BindView(R.id.product_specificationtitle_layout)
    LinearLayout productSpecificationtitleLayout;
    @BindView(R.id.product_specification_layout)
    LinearLayout productSpecificationLayout;
    @BindView(R.id.product_specification_contents)
    TextView productSpecificationContents;
//    @BindView(R.id.product_specification_layer1_title)
//    TextView productSpecificationLayer1Title;
//    @BindView(R.id.product_specification_layer1_content)
//    TextView productSpecificationLayer1Content;
//    @BindView(R.id.product_specification_layer1_layout)
//    LinearLayout productSpecificationLayer1Layout;
//    @BindView(R.id.product_specification_layer2_title)
//    TextView productSpecificationLayer2Title;
//    @BindView(R.id.product_specification_layer2_content)
//    TextView productSpecificationLayer2Content;
//    @BindView(R.id.product_specification_layer2_layout)
//    LinearLayout productSpecificationLayer2Layout;
//    @BindView(R.id.product_specification_layer3_title)
//    TextView productSpecificationLayer3Title;
//    @BindView(R.id.product_specification_layer3_content)
//    TextView productSpecificationLayer3Content;
//    @BindView(R.id.product_specification_layer3_layout)
//    LinearLayout productSpecificationLayer3Layout;
//    @BindView(R.id.product_specification_layer4_title)
//    TextView productSpecificationLayer4Title;
//    @BindView(R.id.product_specification_layer4_content)
//    TextView productSpecificationLayer4Content;
//    @BindView(R.id.product_specification_layer4_layout)
//    LinearLayout productSpecificationLayer4Layout;
//    @BindView(R.id.product_specification_layer5_title)
//    TextView productSpecificationLayer5Title;
//    @BindView(R.id.product_specification_layer5_content)
//    TextView productSpecificationLayer5Content;
//    @BindView(R.id.product_specification_layer5_layout)
//    LinearLayout productSpecificationLayer5Layout;

    // TODO: Rename and change types of parameters
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private String title = "";
    private String shippingServiceCost = "";
    private String price = "";
    private String Brand = "";
    private String Subtitle = "";
    private ArrayList<String> ItemSpecifics = new ArrayList<>();
    private String[] PictureURL;

    public ProductFragment() {
        // Required empty public constructor
    }

    // TODO: Rename and change types and number of parameters
    public static ProductFragment newInstance(JSONObject itemData) {
        ProductFragment fragment = new ProductFragment();
        Bundle args = new Bundle();
        String productID = "";
        String title = "";
        String shippingServiceCost = "";
        String price = "";
        String Brand = "";
        String Subtitle = "";
        ArrayList<String> ItemSpecifics = new ArrayList<>();
        String[] PictureURL= new String[1000];
        try {
            title = itemData.getString("title");
            shippingServiceCost = itemData.getString("shippingServiceCost");
            price = itemData.getString("price");
            if (itemData.has("Brand")) {
                Brand = itemData.getString("Brand").replaceAll("[\\[\\]\\\\\"]", "");
            }
            if (itemData.has("Subtitle")) {
                Subtitle = itemData.getString("Subtitle");
            }
            if (itemData.has("ItemSpecifics")) {
                JSONObject temoItemsc = itemData.getJSONObject("ItemSpecifics");
                Iterator<String> tempkeys = temoItemsc.keys();
                while (tempkeys.hasNext()) {
                    String tempkey = (String) tempkeys.next();
                    ItemSpecifics.add(tempkey + "53535353" + temoItemsc.getString(tempkey).replaceAll("[\\[\\]\\\\\"]", ""));
                }
            }
            if (itemData.has("PictureURL")) {
                String temoItemsc = itemData.getString("PictureURL").replaceAll("[\\[\\]\\\\\"]", "");
                PictureURL = temoItemsc.split(",");
            }
        } catch (JSONException e) {
            e.printStackTrace();
            title = "title";
            shippingServiceCost = "shippingServiceCost";
            price = "price";
        }
        args.putString("title", title);
        args.putString("shippingServiceCost", shippingServiceCost);
        args.putString("price", price);
        if (!Brand.isEmpty()) {
            args.putString("Brand", Brand);
        }
        if (!Subtitle.isEmpty()) {
            args.putString("Subtitle", Subtitle);
        }
        if (!ItemSpecifics.isEmpty()) {
            args.putStringArrayList("ItemSpecifics", ItemSpecifics);
        }
        if (PictureURL.length<10) {
            args.putStringArray("PictureURL", PictureURL);
        }
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            title = getArguments().getString("title");
            shippingServiceCost = getArguments().getString("shippingServiceCost");
            price = getArguments().getString("price");
            if (getArguments().getString("Brand") != null && !getArguments().getString("Brand").isEmpty()) {
                Brand = getArguments().getString("Brand");
            }
            if (getArguments().getString("Subtitle") != null && !getArguments().getString("Subtitle").isEmpty()) {
                Brand = getArguments().getString("Subtitle");
            }
            if (getArguments().getStringArrayList("ItemSpecifics") != null && !getArguments().getStringArrayList("ItemSpecifics").isEmpty()) {
                ItemSpecifics = getArguments().getStringArrayList("ItemSpecifics");
            }
            if (getArguments().getStringArray("PictureURL") != null && getArguments().getStringArray("PictureURL").length>0) {
                PictureURL = getArguments().getStringArray("PictureURL");
            }
            Log.d("testhere:\n", "aaa");
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_product, container, false);
        ButterKnife.bind(this, view);
        hidProductFeatures();
        hidBrand();
        hidSubtitle();
        hidSpecification();
        hidAllSpecis();
        productTitle.setText(Html.fromHtml(
                "<h4>" + title + "</h4>", Html.FROM_HTML_MODE_LEGACY
        ));
        productPrice.setText(Html.fromHtml(
                "<font color='#9EB35D'><b>$" +
                        price +
                        "</b></font>", Html.FROM_HTML_MODE_LEGACY
        ));
        String temp = shippingServiceCost;
        double tempi = Double.parseDouble(temp);
        if(tempi>0.0){
        productShip.setText(Html.fromHtml(
                "<font color='#a0a0a0'>Ships for </font>" +
                        "<font color='#a0a0a0'><b>$" +
                        shippingServiceCost +
                        "</b></font>", Html.FROM_HTML_MODE_LEGACY
        ));}else {
            productShip.setText(Html.fromHtml(
                    "<font color='#a0a0a0'><b>Free </b></font>"+
                            "<font color='#a0a0a0'>shipping</font>",Html.FROM_HTML_MODE_LEGACY
            ));
        }
        if(PictureURL!=null&&PictureURL.length>0){
            productImageLayout.removeAllViews();  //clear linearlayout
            for (int i = 0; i < PictureURL.length; i++) {
                ImageView imageView = new ImageView(view.getContext());
                int imgheight = getResources().getDimensionPixelSize(R.dimen.itemdetail_image_height);
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,imgheight);
                int margins = getResources().getDimensionPixelSize(R.dimen.fragments_margin_small);
                layoutParams.setMargins(margins,margins,margins,0);
                imageView.setLayoutParams(layoutParams);
                Glide.with(view.getContext()).load(PictureURL[i]).into(imageView);
                productImageLayout.addView(imageView);
            }
        }
        if (!Brand.isEmpty() || !Subtitle.isEmpty()) {
            showProductFeatures();
            if (!Brand.isEmpty()) {
                productBrandContent.setText(Html.fromHtml(
                        "<font color='#a0a0a0'>" + Brand + "</font>",
                        Html.FROM_HTML_MODE_LEGACY
                ));
                showBrand();
            }
            if (!Subtitle.isEmpty()) {
                productSubtitleContent.setText(Html.fromHtml(
                        "<font color='#a0a0a0'>" + Subtitle + "</font>",
                        Html.FROM_HTML_MODE_LEGACY
                ));
                showSubtitle();
            }
        }
        if (!ItemSpecifics.isEmpty()) {
            showSpecification();
            showSpeciContent();
            StringBuilder speccontent = new StringBuilder("<ui>");
            int sizetemp = 0;
            if(ItemSpecifics.size()>5){
                sizetemp = 5;
            }else {
                sizetemp = ItemSpecifics.size();
            }
            for (int i = 0; i < sizetemp; i++) {
                String tempwho = ItemSpecifics.get(i);
                String[] splited = tempwho.split("53535353");
                speccontent.append("<li>\t").append(splited[0]).append("\t\t\t").append(splited[1]).append("</li>");
            }
            speccontent.append("</ui>");
            productSpecificationContents.setText(Html.fromHtml(
                    speccontent.toString(),
                    Html.FROM_HTML_MODE_LEGACY
            ));
        }
        return view;
    }

//    @RequiresApi(api = Build.VERSION_CODES.N)
//    private void setLayers(int i, String ttitle, String tcontent){
//        if(i==0){
//            productSpecificationLayer1Title.setText(Html.fromHtml(
//                    "<li><font color='#a0a0a0'>" + ttitle + "</font></li>",
//                    Html.FROM_HTML_MODE_LEGACY
//            ));
//            productSpecificationLayer1Content.setText(Html.fromHtml(
//                    "<font color='#a0a0a0'>" + tcontent + "</font>",
//                    Html.FROM_HTML_MODE_LEGACY
//            ));
//            productSpecificationLayer1Layout.setVisibility(View.VISIBLE);
//        }else if(i==1){
//            productSpecificationLayer2Title.setText(Html.fromHtml(
//                    "<li><font color='#a0a0a0'>" + ttitle + "</font></li>",
//                    Html.FROM_HTML_MODE_LEGACY
//            ));
//            productSpecificationLayer2Content.setText(Html.fromHtml(
//                    "<font color='#a0a0a0'>" + tcontent + "</font>",
//                    Html.FROM_HTML_MODE_LEGACY
//            ));
//            productSpecificationLayer2Layout.setVisibility(View.VISIBLE);
//        } else if(i==2){
//            productSpecificationLayer3Title.setText(Html.fromHtml(
//                    "<li><font color='#a0a0a0'>" + ttitle + "</font></li>",
//                    Html.FROM_HTML_MODE_LEGACY
//            ));
//            productSpecificationLayer3Content.setText(Html.fromHtml(
//                    "<font color='#a0a0a0'>" + tcontent + "</font>",
//                    Html.FROM_HTML_MODE_LEGACY
//            ));
//            productSpecificationLayer3Layout.setVisibility(View.VISIBLE);
//        } else if(i==3){
//            productSpecificationLayer4Title.setText(Html.fromHtml(
//                    "<li><font color='#a0a0a0'>" + ttitle + "</font></li>",
//                    Html.FROM_HTML_MODE_LEGACY
//            ));
//            productSpecificationLayer4Content.setText(Html.fromHtml(
//                    "<font color='#a0a0a0'>" + tcontent + "</font>",
//                    Html.FROM_HTML_MODE_LEGACY
//            ));
//            productSpecificationLayer4Layout.setVisibility(View.VISIBLE);
//        } else if(i==4){
//            productSpecificationLayer5Title.setText(Html.fromHtml(
//                    "<li><font color='#a0a0a0'>" + ttitle + "</font></li>",
//                    Html.FROM_HTML_MODE_LEGACY
//            ));
//            productSpecificationLayer5Content.setText(Html.fromHtml(
//                    "<font color='#a0a0a0'>" + tcontent + "</font>",
//                    Html.FROM_HTML_MODE_LEGACY
//            ));
//            productSpecificationLayer5Layout.setVisibility(View.VISIBLE);
//        }
//    }

    private void showSpecification() {
        productHrline2.setVisibility(View.VISIBLE);
        productSpecificationLayout.setVisibility(View.VISIBLE);
    }

    private void showBrand() {
        productBrandLayout.setVisibility(View.VISIBLE);
    }

    private void hidBrand() {
        productBrandLayout.setVisibility(View.GONE);
    }

    private void showSubtitle() {
        productSubtitleLayout.setVisibility(View.VISIBLE);
    }

    private void hidSubtitle() {
        productSubtitleLayout.setVisibility(View.GONE);
    }

    private void showProductFeatures() {
        productHrline1.setVisibility(View.VISIBLE);
        productFeaturesLayout.setVisibility(View.VISIBLE);
    }

    private void hidSpecification() {
        productHrline2.setVisibility(View.GONE);
        productSpecificationLayout.setVisibility(View.GONE);
    }

    private void hidProductFeatures() {
        productHrline1.setVisibility(View.GONE);
        productFeaturesLayout.setVisibility(View.GONE);
    }

    private void hidAllSpecis() {
//        productSpecificationLayer1Layout.setVisibility(View.GONE);
//        productSpecificationLayer2Layout.setVisibility(View.GONE);
//        productSpecificationLayer3Layout.setVisibility(View.GONE);
//        productSpecificationLayer4Layout.setVisibility(View.GONE);
//        productSpecificationLayer5Layout.setVisibility(View.GONE);
        productSpecificationContents.setVisibility(View.GONE);
    }

    private void showSpeciContent(){
        productSpecificationContents.setVisibility(View.VISIBLE);
    }
}