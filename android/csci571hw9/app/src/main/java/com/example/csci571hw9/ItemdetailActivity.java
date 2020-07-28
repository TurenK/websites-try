package com.example.csci571hw9;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.FragmentPagerAdapter;
import androidx.viewpager.widget.ViewPager;

import com.android.volley.DefaultRetryPolicy;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.google.android.material.tabs.TabLayout;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

import butterknife.BindView;
import butterknife.ButterKnife;

public class ItemdetailActivity extends AppCompatActivity {

    @BindView(R.id.itemdetail_toolbar)
    Toolbar itemdetailToolbar;
    @BindView(R.id.itemdetail_tabLayout)
    TabLayout itemdetailPagerTabLayout;
    @BindView(R.id.itemdetail_viewPager)
    ViewPager itemdetailViewPager;

    String productID;
    String title;
    String shippingServiceCost;
    String price;
    String viewItemURL;
    ArrayList<String> shippingInfo;
    @BindView(R.id.itemdetail_title)
    TextView itemdetailTitle;
    @BindView(R.id.itemdetail_barlayout)
    LinearLayout itemdetailBarlayout;
    @BindView(R.id.itemdetail_progressBar)
    ProgressBar itemdetailProgressBar;
    @BindView(R.id.itemdetail_progressBar_layout)
    RelativeLayout itemdetailProgressBarLayout;
    @BindView(R.id.itemdetail_redirectto)
    ImageView itemdetailRedirectto;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        setTheme(R.style.AppTheme);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_itemdetail);
        ButterKnife.bind(this);
        initialize();
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                // app icon in action bar clicked; goto parent activity.
                this.finish();
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }

    private void initialize() {
        setSupportActionBar(itemdetailToolbar);
        ActionBar searchresultActionBar = getSupportActionBar();
        assert searchresultActionBar != null;
        searchresultActionBar.setDisplayHomeAsUpEnabled(true);
        itemdetailProgressBarLayout.setVisibility(View.VISIBLE);
        Intent myIntent = getIntent();
        productID = myIntent.getStringExtra("productID");
        title = myIntent.getStringExtra("title");
        shippingServiceCost = myIntent.getStringExtra("shippingServiceCost");
        price = myIntent.getStringExtra("price");
        shippingInfo = myIntent.getStringArrayListExtra("shippingInfo");
        viewItemURL = myIntent.getStringExtra("viewItemURL");
        setTitle("");
        itemdetailTitle.setText(title);
        String url = "https://csci571nodejsbackend.wl.r.appspot.com/itemdetail?productID=" + productID;
        getEBayData(url);
    }


    private void getEBayData(String url) {
        // Instantiate the RequestQueue.
        RequestQueue queue = Volley.newRequestQueue(this);

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, url, null, new Response.Listener<JSONObject>() {

            @RequiresApi(api = Build.VERSION_CODES.N)
            @Override
            public void onResponse(JSONObject response) {
                try {
                    if (response.has("error")) {
                        JSONObject newone = new JSONObject();
                        newone.put("productID", productID);
                        newone.put("title", title);
                        newone.put("price", price);
                        newone.put("shippingServiceCost", shippingServiceCost);
                        newone.put("shippingInfo", shippingInfo);
                        Log.d("result error:\n", response.getString("error"));
//                        Toast.makeText(getApplicationContext(), "result error: " + response.getString("error"), Toast.LENGTH_SHORT).show();
                        setViewPager_Fragments(newone);
                    } else {
                        response.put("productID", productID);
                        response.put("title", title);
                        response.put("price", price);
                        response.put("shippingServiceCost", shippingServiceCost);
                        response.put("shippingInfo", shippingInfo);
//                        Toast.makeText(getApplicationContext(), "JSON parse success", Toast.LENGTH_SHORT).show();
                        setViewPager_Fragments(response);
                    }
                } catch (JSONException e) {
//                    Toast.makeText(getApplicationContext(), "JSON parse error", Toast.LENGTH_SHORT).show();
                    setViewPager_Fragments(null);
                }
            }
        }, new Response.ErrorListener() {

            @RequiresApi(api = Build.VERSION_CODES.M)
            @Override
            public void onErrorResponse(VolleyError error) {
                // TODO: Handle error
                setViewPager_Fragments(null);
                Log.d("error:\n", "Response: " + error.toString());
//                Toast.makeText(getApplicationContext(), "Connection Error", Toast.LENGTH_SHORT).show();
            }
        });
        jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(5000, 5, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));
        queue.add(jsonObjectRequest);
    }

    private void setViewPager_Fragments(JSONObject jsonObject) {
        itemdetailViewPager.setVisibility(View.VISIBLE);
        ViewPagerAdapter adapter = new ViewPagerAdapter(getSupportFragmentManager(), FragmentPagerAdapter.BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT, jsonObject);
        itemdetailViewPager.setAdapter(adapter);

        itemdetailPagerTabLayout.setupWithViewPager(itemdetailViewPager);
        itemdetailProgressBarLayout.setVisibility(View.GONE);
        // Attach the page change listener inside the activity
        int length = itemdetailPagerTabLayout.getTabCount();
        View producttab = LayoutInflater.from(getApplicationContext()).inflate(R.layout.fragment_product_tab, null);
        View sellerinfotab = LayoutInflater.from(getApplicationContext()).inflate(R.layout.fragment_seller_info_tab, null);
        View shippingtab = LayoutInflater.from(getApplicationContext()).inflate(R.layout.fragment_shipping_tab, null);
        itemdetailPagerTabLayout.getTabAt(0).setCustomView(producttab);
        itemdetailPagerTabLayout.getTabAt(1).setCustomView(sellerinfotab);
        itemdetailPagerTabLayout.getTabAt(2).setCustomView(shippingtab);
        itemdetailRedirectto.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(Intent.ACTION_VIEW);
                intent.setData(Uri.parse(viewItemURL));
                startActivity(intent);
            }
        });
    }
}