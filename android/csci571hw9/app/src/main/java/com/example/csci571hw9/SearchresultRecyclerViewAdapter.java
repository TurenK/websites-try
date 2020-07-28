package com.example.csci571hw9;

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcelable;
import android.text.Html;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import butterknife.OnClick;

public class SearchresultRecyclerViewAdapter extends
        RecyclerView.Adapter<SearchresultRecyclerViewAdapter.SearchresultRecycleAdapterHolder> {

    private Context mContext;
    private JSONArray itemsData;

    SearchresultRecyclerViewAdapter(Context mContext, JSONArray itemsData) {
        this.itemsData = itemsData;
        this.mContext = mContext;
    }

    @Override
    public int getItemCount() {
        return itemsData.length();
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public void onBindViewHolder(@NonNull SearchresultRecycleAdapterHolder holder,
                                 final int position) {
        holder.item_searchresult_recyclerview_toprating.setVisibility(View.INVISIBLE);
        try {
            String imgUri = itemsData.getJSONObject(position).getString("galleryURL").replaceAll("[\\[\\]\\\\\"]","");
            if (imgUri.isEmpty() || imgUri.equals("../../assets/ebayDefault.png")||imgUri.equals("https://thumbs1.ebaystatic.com/pict/04040_0.jpg")){
                holder.itemSearchresultRecyclerviewImage.setImageDrawable(mContext.getDrawable(R.drawable.ebay_default));
            }else {
                Glide.with(holder.itemSearchresultRecyclerviewImage.getContext()).load(imgUri).into(holder.itemSearchresultRecyclerviewImage);
            }
            holder.itemSearchresultRecyclerviewTitle.setText(Html.fromHtml(
                    "<h4>"+itemsData.getJSONObject(position).getString("title")+"</h4>",Html.FROM_HTML_MODE_LEGACY
            ));
            String temp = itemsData.getJSONObject(position).getString("shippingServiceCost");
            double tempi = Double.parseDouble(temp);
            if(tempi>0.0){
            holder.itemSearchresultRecyclerviewShip.setText(Html.fromHtml(
                    "<font color='#a0a0a0'>Ships for </font>"+
                            "<font color='#a0a0a0'><b>$"+
                            itemsData.getJSONObject(position).getString("shippingServiceCost")+
                            "</b></font>",Html.FROM_HTML_MODE_LEGACY
            ));}else {
                holder.itemSearchresultRecyclerviewShip.setText(Html.fromHtml(
                        "<font color='#a0a0a0'><b>Free </b></font>"+
                                "<font color='#a0a0a0'>shipping</font>",Html.FROM_HTML_MODE_LEGACY
                ));
            }
            holder.itemSearchresultRecyclerviewCondition.setText(Html.fromHtml(
                    "<font color='#a0a0a0'><b><i>"+
                            itemsData.getJSONObject(position).getString("condition")+
                            "</i></b></font>",Html.FROM_HTML_MODE_LEGACY
            ));
            holder.itemSearchresultRecyclerviewPrice.setText(Html.fromHtml(
                    "<font color='#9EB35D'><b>$"+
                            itemsData.getJSONObject(position).getString("price")+
                            "</b></font>",Html.FROM_HTML_MODE_LEGACY
            ));

            holder.itemSearchresultCard.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    try {
                        Intent myIntent = new Intent(mContext, ItemdetailActivity.class);
                        myIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        JSONObject jsonItem = itemsData.getJSONObject(position);
                        String title = jsonItem.getString("title").replaceAll("[\\[\\]\\\\\"]","");
                        String shippingServiceCost = jsonItem.getString("shippingServiceCost").replaceAll("[\\[\\]\\\\\"]","");
                        String price = jsonItem.getString("price").replaceAll("[\\[\\]\\\\\"]","");
                        String productID = jsonItem.getString("itemId");
                        String viewItemURL = jsonItem.getString("viewItemURL");
                        JSONObject shippingInfo = jsonItem.getJSONObject("shippingInfo");
                        myIntent.putExtra("productID", productID);
                        myIntent.putExtra("shippingServiceCost", shippingServiceCost);
                        myIntent.putExtra("price", price);
                        myIntent.putExtra("title", title);
                        myIntent.putExtra("viewItemURL", viewItemURL);
                        ArrayList<String> tempas = new ArrayList<>();
                        Iterator<String> tempkeys = shippingInfo.keys();
                        while (tempkeys.hasNext()) {
                            String tempkey = (String) tempkeys.next();
                            tempas.add(tempkey + "53535353" + shippingInfo.getString(tempkey).replaceAll("[\\[\\]\\\\\"]", ""));
                        }
                        myIntent.putExtra("shippingInfo", tempas);
                        mContext.startActivity(myIntent);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            });

            if(itemsData.getJSONObject(position).has("topRatedListing")){
                holder.item_searchresult_recyclerview_toprating.setVisibility(View.VISIBLE);
                holder.item_searchresult_recyclerview_toprating.setText(Html.fromHtml(
                        "<font color='#a0a0a0'><b>"+
                                "Top Rated Listing"+
                                "</b></font>",Html.FROM_HTML_MODE_LEGACY
                ));
            }
//            Toast.makeText(mContext, "JSON parse success", Toast.LENGTH_SHORT).show();
        } catch (JSONException e) {
            e.printStackTrace();
//            Toast.makeText(mContext, "JSON parse error", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public SearchresultRecyclerViewAdapter.SearchresultRecycleAdapterHolder
    onCreateViewHolder(ViewGroup parent, int viewType) {
        View root = LayoutInflater.from(mContext).inflate(R.layout.item_searchresult_recyclerview, parent,
                    false);
        return new SearchresultRecycleAdapterHolder(root);
    }

    public class SearchresultRecycleAdapterHolder extends RecyclerView.ViewHolder{

        ImageView itemSearchresultRecyclerviewImage;
        TextView itemSearchresultRecyclerviewTitle;
        TextView itemSearchresultRecyclerviewShip;
        TextView itemSearchresultRecyclerviewCondition;
        TextView itemSearchresultRecyclerviewPrice;
        CardView itemSearchresultCard;
        TextView item_searchresult_recyclerview_toprating;

        public SearchresultRecycleAdapterHolder(View itemView) {
            super(itemView);
            itemSearchresultRecyclerviewPrice = itemView.findViewById(R.id.item_searchresult_recyclerview_price);
            itemSearchresultRecyclerviewCondition = itemView.findViewById(R.id.item_searchresult_recyclerview_condition);
            itemSearchresultRecyclerviewShip = itemView.findViewById(R.id.item_searchresult_recyclerview_ship);
            itemSearchresultRecyclerviewTitle = itemView.findViewById(R.id.item_searchresult_recyclerview_title);
            itemSearchresultRecyclerviewImage = itemView.findViewById(R.id.item_searchresult_recyclerview_image);
            itemSearchresultCard = itemView.findViewById(R.id.item_searchresult_card);
            item_searchresult_recyclerview_toprating = itemView.findViewById(R.id.item_searchresult_recyclerview_toprating);
        }
    }
}