package com.example.csci571hw9;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.constraintlayout.widget.ConstraintLayout;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnCheckedChanged;
import butterknife.OnClick;

public class MainActivity extends AppCompatActivity implements AdapterView.OnItemSelectedListener {
    @BindView(R.id.main_toolbar)
    Toolbar mainToolbar;
    @BindView(R.id.main_spinner_sort_by)
    Spinner mainSpinnerSortBy;
    @BindView(R.id.main_textView_keyword)
    TextView mainTextViewKeyword;
    @BindView(R.id.main_editText_keyword)
    EditText mainEditTextKeyword;
    @BindView(R.id.main_textView_validate_keyword)
    TextView mainTextViewValidateKeyword;
    @BindView(R.id.main_textView_price_range)
    TextView mainTextViewPriceRange;
    @BindView(R.id.main_editText_maximum_price)
    EditText mainEditTextMaximumPrice;
    @BindView(R.id.main_editText_minimum_price)
    EditText mainEditTextMinimumPrice;
    @BindView(R.id.main_layout_price_range)
    LinearLayout mainLayoutPriceRange;
    @BindView(R.id.main_textView_validate_price)
    TextView mainTextViewValidatePrice;
    @BindView(R.id.main_textView_condition)
    TextView mainTextViewCondition;
    @BindView(R.id.main_checkbox_new)
    CheckBox mainCheckboxNew;
    @BindView(R.id.main_checkbox_used)
    CheckBox mainCheckboxUsed;
    @BindView(R.id.main_checkbox_unspecified)
    CheckBox mainCheckboxUnspecified;
    @BindView(R.id.main_layout_checkbox)
    ConstraintLayout mainLayoutCheckbox;
    @BindView(R.id.main_textView_sort_by)
    TextView mainTextViewSortBy;
    @BindView(R.id.main_button_search)
    Button mainButtonSearch;
    @BindView(R.id.main_button_clear)
    Button mainButtonClear;
    @BindView(R.id.main_layout_buttons)
    LinearLayout mainLayoutButtons;
    @BindView(R.id.main_layout)
    RelativeLayout mainLayout;
    @BindView(R.id.main_title)
    TextView mainTitle;

    private String[] spinnerRealValues;
    private String sortOrder = "BestMatch";
    private boolean[] checkboxChecked = new boolean[3];
    private String keywords = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        this.setTitle(R.string.app_name);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
//TODO Auto-generated catch block
            e.printStackTrace();
        }
        setTheme(R.style.AppTheme);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
        initialize();
    }

    private void initialize() {
        setSupportActionBar(mainToolbar);
        setTitle("");
        mainTitle.setText(getString(R.string.app_name));
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,
                R.array.main_spinner_sort_by_display, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        mainSpinnerSortBy.setAdapter(adapter);
        mainSpinnerSortBy.setSelection(0);
        mainSpinnerSortBy.setOnItemSelectedListener(this);
        spinnerRealValues = getResources().getStringArray(R.array.main_spinner_sort_by_real);
    }

    @Override
    protected void onStart() {
        super.onStart();
    }

    @OnClick(R.id.main_button_search)
    public void onMainButtonSearchClicked() {
        clearValidationTextView();
        if (checkForm()) {
//            Toast.makeText(getApplicationContext(), "Check Success", Toast.LENGTH_SHORT).show();

            Intent myIntent = new Intent(getApplicationContext(), SearchresultActivity.class);
            String url = "https://csci571nodejsbackend.wl.r.appspot.com/itemlist?" + handleRequestParameters();
            myIntent.putExtra("url", url);
            myIntent.putExtra("keywords", keywords);
            startActivity(myIntent);
        } else {
//            Toast.makeText(getApplicationContext(), "Check Fail", Toast.LENGTH_SHORT).show();
        }
    }

    private String handleRequestParameters() {
        String paramstring = "";
        paramstring += "keywords=" + keywords;
        if (!mainEditTextMinimumPrice.getText().toString().isEmpty()) {
            paramstring += "&MinPrice=" + mainEditTextMinimumPrice.getText().toString();
        }
        if (!mainEditTextMaximumPrice.getText().toString().isEmpty()) {
            paramstring += "&MaxPrice=" + mainEditTextMaximumPrice.getText().toString();
        }
        paramstring += "&sortOrder=" + sortOrder;
        if (checkboxChecked[0]) {
            paramstring += "&checknew=" + Boolean.toString(true);
        }
        if (checkboxChecked[1]) {
            paramstring += "&checkused=" + Boolean.toString(true);
        }
        if (checkboxChecked[2]) {
            paramstring += "&checkunspecified=" + Boolean.toString(true);
        }

        return paramstring;
    }

    private boolean checkForm() {
        boolean testFlag = true;
        keywords = mainEditTextKeyword.getText().toString().replaceAll("[!@#$%^&*()_+=/`~<>?:}{']", "");
        if (keywords.isEmpty()) {
            testFlag = false;
            mainTextViewValidateKeyword.setVisibility(View.VISIBLE);
        }
        String tempMax = mainEditTextMaximumPrice.getText().toString();
        if (!tempMax.isEmpty() && Double.parseDouble(tempMax) < 0.0) {
            testFlag = false;
            mainTextViewValidatePrice.setVisibility(View.VISIBLE);
        }
        String tempMin = mainEditTextMinimumPrice.getText().toString();
        if (!tempMin.isEmpty() && Double.parseDouble(tempMin) < 0.0) {
            testFlag = false;
            mainTextViewValidatePrice.setVisibility(View.VISIBLE);
        }
        if (!tempMax.isEmpty() && !tempMin.isEmpty() && Double.parseDouble(tempMax) < Double.parseDouble(tempMin)) {
            testFlag = false;
            mainTextViewValidatePrice.setVisibility(View.VISIBLE);
        }
        if(!testFlag){
            Toast.makeText(getApplicationContext(), "Please fix all fields with errors", Toast.LENGTH_SHORT).show();
        }

        return testFlag;
    }

    @OnClick(R.id.main_button_clear)
    public void onMainButtonClearClicked() {
        mainSpinnerSortBy.setSelection(0);
        mainCheckboxNew.setChecked(false);
        mainCheckboxUsed.setChecked(false);
        mainCheckboxUnspecified.setChecked(false);
        mainTextViewValidatePrice.setVisibility(View.GONE);
        mainTextViewValidateKeyword.setVisibility(View.GONE);
        keywords = "";
        mainEditTextKeyword.setText("");
        double minPrice = -1.0;
        mainEditTextMinimumPrice.setText("");
        double maxPrice = -1.0;
        mainEditTextMaximumPrice.setText("");
    }

    private void clearValidationTextView() {
        mainTextViewValidatePrice.setVisibility(View.GONE);
        mainTextViewValidateKeyword.setVisibility(View.GONE);
    }

    @OnCheckedChanged(R.id.main_checkbox_new)
    void onCheckboxChecked1(CompoundButton button, boolean checked) {
        checkboxChecked[0] = checked;
//        Toast.makeText(getApplicationContext(), "1"+Boolean.toString(checkboxChecked[0]), Toast.LENGTH_SHORT).show();
    }

    @OnCheckedChanged(R.id.main_checkbox_used)
    void onCheckboxChecked2(CompoundButton button, boolean checked) {
        checkboxChecked[1] = checked;
//        Toast.makeText(getApplicationContext(), "2"+Boolean.toString(checkboxChecked[1]), Toast.LENGTH_SHORT).show();
    }

    @OnCheckedChanged(R.id.main_checkbox_unspecified)
    void onCheckboxChecked3(CompoundButton button, boolean checked) {
        checkboxChecked[2] = checked;
//        Toast.makeText(getApplicationContext(), "3"+Boolean.toString(checkboxChecked[2]), Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        sortOrder = spinnerRealValues[i];
    }

    @Override
    public void onNothingSelected(AdapterView<?> arg0) {
        // TODO Auto-generated method stub
        mainSpinnerSortBy.setSelection(0);
    }
}