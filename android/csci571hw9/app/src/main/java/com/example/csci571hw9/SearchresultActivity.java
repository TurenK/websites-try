package com.example.csci571hw9;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.text.Html;
import android.util.Log;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.StaggeredGridLayoutManager;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import com.android.volley.DefaultRetryPolicy;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import butterknife.BindView;
import butterknife.ButterKnife;

public class SearchresultActivity extends AppCompatActivity {

    @BindView(R.id.searchresult_toolbar)
    Toolbar searchresultToolbar;
    @BindView(R.id.searchresult_recyclerview)
    RecyclerView searchresultRecyclerview;
    @BindView(R.id.searchresult_swiperefresh)
    SwipeRefreshLayout searchresultSwiperefresh;
    @BindView(R.id.searchresult_progressBar)
    ProgressBar searchresultProgressBar;
    @BindView(R.id.searchresult_progressBar_layout)
    RelativeLayout searchresultProgressBarLayout;
    @BindView(R.id.searchresult_textView_no_records_results)
    TextView searchresultTextViewNoRecordsResults;
    @BindView(R.id.searchresult_title)
    TextView searchresultTitle;

    private String url = "";
    private String keywords = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        setTheme(R.style.AppTheme);
        this.setTitle("");
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_searchresult);
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
        setSupportActionBar(searchresultToolbar);
        searchresultTitle.setText(getString(R.string.search_results));
        ActionBar searchresultActionBar = getSupportActionBar();
        assert searchresultActionBar != null;
        searchresultActionBar.setDisplayHomeAsUpEnabled(true);
        searchresultProgressBarLayout.setVisibility(View.VISIBLE);
        Intent myIntent = getIntent();
        url = myIntent.getStringExtra("url");
        keywords = myIntent.getStringExtra("keywords");
        getEBayData(url);
        searchresultSwiperefresh.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                getEBayData(url);
            }
        });
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    private void displayWhenGetData(JSONArray jsonArray) {
        searchresultProgressBarLayout.setVisibility(View.GONE);
        searchresultSwiperefresh.setVisibility(View.VISIBLE);
        searchresultRecyclerview.setVisibility(View.VISIBLE);
        searchresultTextViewNoRecordsResults.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT));
        searchresultTextViewNoRecordsResults.setText(Html.fromHtml(
                "<font color='#a0a0a0'><b>" + getString(R.string.showing) + " </b></font>" +
                        "<font color='#0061CE'><b>" + jsonArray.length() + "</b></font>" +
                        "<font color='#a0a0a0'><b> " + getString(R.string.results_for) + " </b></font>" +
                        "<font color='#0061CE'><b> " + keywords + "</b></font>", Html.FROM_HTML_MODE_LEGACY
        ));
        searchresultTextViewNoRecordsResults.setTextSize(TypedValue.COMPLEX_UNIT_PX,getResources().getDimension(R.dimen.main_textview_text));
        int tempDim = getResources().getDimensionPixelSize(R.dimen.search_item_margin_itemhead);
        searchresultTextViewNoRecordsResults.setPadding(tempDim, tempDim, tempDim, tempDim);
        searchresultTextViewNoRecordsResults.setGravity(Gravity.START);
        searchresultRecyclerview.setVisibility(View.VISIBLE);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    private void displayWhenNoDataOrError() {
        searchresultProgressBarLayout.setVisibility(View.GONE);
        searchresultSwiperefresh.setVisibility(View.VISIBLE);
        searchresultTextViewNoRecordsResults.setVisibility(View.VISIBLE);
        searchresultTextViewNoRecordsResults.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.MATCH_PARENT));
        searchresultTextViewNoRecordsResults.setTextSize(TypedValue.COMPLEX_UNIT_PX,getResources().getDimension(R.dimen.toolbartext));
        searchresultTextViewNoRecordsResults.setText(getText(R.string.no_records));
        searchresultTextViewNoRecordsResults.setTextColor(getColor(R.color.black));
        searchresultTextViewNoRecordsResults.setGravity(Gravity.CENTER);
        searchresultRecyclerview.setVisibility(View.GONE);
    }

    private void getEBayData(String url) {
        // Instantiate the RequestQueue.
        RequestQueue queue = Volley.newRequestQueue(this);

        JsonArrayRequest jsonArrayRequest = new JsonArrayRequest(Request.Method.GET, url, null, new Response.Listener<JSONArray>() {

            @RequiresApi(api = Build.VERSION_CODES.N)
            @Override
            public void onResponse(JSONArray response) {
                Log.d("response:\n", response.toString());
                try {
                    if (response.length() > 0) {
                        if (response.getJSONObject(0).has("error")) {
                            Log.d("result error:\n", response.getJSONObject(0).getString("error"));
//                            Toast.makeText(getApplicationContext(), "result error: " + response.getJSONObject(0).getString("error"), Toast.LENGTH_SHORT).show();
                            displayWhenNoDataOrError();
                        } else {
                            if(response.length()<=50){
                            displayWhenGetData(response);
                            searchresultSwiperefresh.setRefreshing(false);
//                            Toast.makeText(getApplicationContext(), "JSON parse success", Toast.LENGTH_SHORT).show();
                            handleRecyclerView(response);
                            }else {
                                JSONArray tempa = new JSONArray();
                                for(int i=0;i<50;i++){
                                    tempa.put(response.get(i));
                                }
                                searchresultSwiperefresh.setRefreshing(false);
                                displayWhenGetData(tempa);
                                searchresultSwiperefresh.setRefreshing(false);
//                            Toast.makeText(getApplicationContext(), "JSON parse success", Toast.LENGTH_SHORT).show();
                                handleRecyclerView(tempa);
                            }
                        }
                    } else {
                        Log.d("result error:\n", response.getJSONObject(0).getString("error"));
//                        Toast.makeText(getApplicationContext(), "result error: " + response.getJSONObject(0).getString("error"), Toast.LENGTH_SHORT).show();
                        displayWhenNoDataOrError();
                    }
                } catch (JSONException e) {
//                    Toast.makeText(getApplicationContext(), "JSON parse error", Toast.LENGTH_SHORT).show();
                    displayWhenNoDataOrError();
                }
            }
        }, new Response.ErrorListener() {

            @RequiresApi(api = Build.VERSION_CODES.M)
            @Override
            public void onErrorResponse(VolleyError error) {
                // TODO: Handle error
                displayWhenNoDataOrError();
                Log.d("error:\n", "Response: " + error.toString());
//                Toast.makeText(getApplicationContext(), "Connection Error", Toast.LENGTH_SHORT).show();
            }
        });
        jsonArrayRequest.setRetryPolicy(new DefaultRetryPolicy(5000, 5, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));
        queue.add(jsonArrayRequest);
    }

//    private JSONArray chechSeller(JSONArray response) throws JSONException {
//        JSONArray newdata = new JSONArray();
//        for(int i=0;i<response.length();i++){
//
//        }
//    }

    private void handleRecyclerView(JSONArray itemsData) {
        searchresultRecyclerview.setHasFixedSize(true);
        StaggeredGridLayoutManager manager = new StaggeredGridLayoutManager(2, StaggeredGridLayoutManager.VERTICAL);
        SearchresultRecyclerViewAdapter adapter = new SearchresultRecyclerViewAdapter(
                this.getApplicationContext(), itemsData);
        searchresultRecyclerview.removeAllViewsInLayout();
        searchresultRecyclerview.setLayoutManager(manager);
        searchresultRecyclerview.setAdapter(adapter);
    }
}