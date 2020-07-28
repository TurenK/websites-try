package com.example.csci571hw9;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;

import org.json.JSONObject;

public class ViewPagerAdapter extends FragmentPagerAdapter {
    private static int NUM_ITEMS = 3;
    private JSONObject itemData;
    public ViewPagerAdapter(FragmentManager fm, int behavior,JSONObject itemData) {
        super(fm, behavior);
        this.itemData = itemData;
    }

    @NonNull
    @Override
    public Fragment getItem(int position) {
        switch (position) {
            case 0:
                return ProductFragment.newInstance(itemData);
            case 1:
                return SellerInfoFragment.newInstance(itemData);
            case 2:
                return ShippingFragment.newInstance(itemData);
            default:
                return ProductFragment.newInstance(itemData);
        }
    }

    @Override
    public int getCount() {
        return NUM_ITEMS;
    }
}
