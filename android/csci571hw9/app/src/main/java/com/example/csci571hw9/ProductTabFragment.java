package com.example.csci571hw9;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ProductTabFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ProductTabFragment extends Fragment {

    public static ProductTabFragment newInstance() {
        return new ProductTabFragment();
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_product_tab, container, false);
    }
}