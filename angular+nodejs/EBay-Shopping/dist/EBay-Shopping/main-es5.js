function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _searchform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./searchform */
    "./src/app/searchform.ts");
    /* harmony import */


    var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./search.service */
    "./src/app/search.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");

    var _c0 = ["keywordsdiv"];
    var _c1 = ["pricediv"];
    var _c2 = ["resultdiv"];
    var _c3 = ["hrline"];
    var _c4 = ["resultlists"];
    var _c5 = ["card1"];
    var _c6 = ["printresultdiv"];

    function AppComponent_mat_option_61_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 55);
      }
    }

    function AppComponent_mat_option_61_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 56);
      }
    }

    function AppComponent_mat_option_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_mat_option_61_img_1_Template, 1, 0, "img", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_mat_option_61_img_2_Template, 1, 0, "img", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sortitem_r11 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sortitem_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sortOrderValue == sortitem_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sortOrderValue != sortitem_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sortitem_r11, " ");
      }
    }

    function AppComponent_ng_template_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xAB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0\xA0Previous");
      }
    }

    function AppComponent_ng_template_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Next\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_1_img_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_1_img_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 85);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_1_img_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_1_img_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 85);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_1_img_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_1_img_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 85);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_1_img_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_1_img_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 85);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_1_img_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_1_img_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 85);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Condition");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ShippingType");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Shipping cost");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Shiptolocations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ExpeditedShipping");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AppComponent_div_90_div_18_mat_tab_group_1_img_40_Template, 1, 0, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AppComponent_div_90_div_18_mat_tab_group_1_img_41_Template, 1, 0, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "OneDayShippingAvailable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AppComponent_div_90_div_18_mat_tab_group_1_img_47_Template, 1, 0, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AppComponent_div_90_div_18_mat_tab_group_1_img_48_Template, 1, 0, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-tab", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "BestOfferEnabled");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AppComponent_div_90_div_18_mat_tab_group_1_img_56_Template, 1, 0, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AppComponent_div_90_div_18_mat_tab_group_1_img_57_Template, 1, 0, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "BuyItNowAvailable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AppComponent_div_90_div_18_mat_tab_group_1_img_63_Template, 1, 0, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AppComponent_div_90_div_18_mat_tab_group_1_img_64_Template, 1, 0, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "ListingType");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Gift");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AppComponent_div_90_div_18_mat_tab_group_1_img_76_Template, 1, 0, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, AppComponent_div_90_div_18_mat_tab_group_1_img_77_Template, 1, 0, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "WatchCount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.categoryName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.condition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.shippingType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.shippingServiceCost);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.shipToLocations);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r14.expeditedShipping);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.expeditedShipping);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.oneDayShippingAvailable == false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.oneDayShippingAvailable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r14.bestOfferEnabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.bestOfferEnabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r14.buyItNowAvailable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.buyItNowAvailable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.listingType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r14.gift);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.gift);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.watchCount);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_2_img_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_2_img_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 85);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_2_img_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_2_img_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 85);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_2_img_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_2_img_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 85);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_2_img_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_2_img_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 85);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_2_img_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_2_img_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 85);
      }
    }

    function AppComponent_div_90_div_18_mat_tab_group_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Condition");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ShippingType");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Shipping cost");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Shiptolocations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ExpeditedShipping");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AppComponent_div_90_div_18_mat_tab_group_2_img_40_Template, 1, 0, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AppComponent_div_90_div_18_mat_tab_group_2_img_41_Template, 1, 0, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "OneDayShippingAvailable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AppComponent_div_90_div_18_mat_tab_group_2_img_47_Template, 1, 0, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AppComponent_div_90_div_18_mat_tab_group_2_img_48_Template, 1, 0, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-tab", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "BestOfferEnabled");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AppComponent_div_90_div_18_mat_tab_group_2_img_56_Template, 1, 0, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AppComponent_div_90_div_18_mat_tab_group_2_img_57_Template, 1, 0, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "BuyItNowAvailable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AppComponent_div_90_div_18_mat_tab_group_2_img_63_Template, 1, 0, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AppComponent_div_90_div_18_mat_tab_group_2_img_64_Template, 1, 0, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "ListingType");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Gift");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AppComponent_div_90_div_18_mat_tab_group_2_img_76_Template, 1, 0, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, AppComponent_div_90_div_18_mat_tab_group_2_img_77_Template, 1, 0, "img", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "WatchCount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.categoryName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.condition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.shippingType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.shippingServiceCost);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.shipToLocations);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r14.expeditedShipping);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.expeditedShipping);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r14.oneDayShippingAvailable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.oneDayShippingAvailable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r14.bestOfferEnabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.bestOfferEnabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r14.buyItNowAvailable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.buyItNowAvailable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.listingType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r14.gift);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.gift);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.watchCount);
      }
    }

    function AppComponent_div_90_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_90_div_18_mat_tab_group_1_Template, 84, 17, "mat-tab-group", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_90_div_18_mat_tab_group_2_Template, 84, 17, "mat-tab-group", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.mat_lab_flag);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.mat_lab_flag);
      }
    }

    function AppComponent_div_90_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Price: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_90_Template_button_click_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var i_r15 = ctx.index;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.showHidDetail($event, i_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Show Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_div_90_div_18_Template, 3, 2, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r14 = ctx.$implicit;
        var i_r15 = ctx.index;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r14.galleryURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r14.viewItemURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", item_r14.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r14.location, "\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.isHidden[i_r15]);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(searchservice) {
        _classCallCheck(this, AppComponent);

        this.searchservice = searchservice;
        this.title = 'EBay-Shopping';
        this.searchform = new _searchform__WEBPACK_IMPORTED_MODULE_1__["Searchform"]();
        this.page = 1;
        this.collectionSize = 100;
        this.pageSize = 5;
        this.isHidden = [];
        this.paginationMaxSize = 8;
        this.mat_lab_flag = false;
        this.sortOrder = ['BestMatch', 'CurrentPriceHighest', 'PricePlusShippingHighest', 'PricePlusShippingLowest'];
        this.page = 1;
        this.collectionSize = 100;
        this.pageSize = 5;

        for (var i = 0; i < 5; i++) {
          this.isHidden.push(false);
        }

        this.onResize();
        this.sortOrderValue = this.sortOrder[0];
      }

      _createClass(AppComponent, [{
        key: "onResize",
        value: function onResize() {
          console.log(window.innerWidth);

          if (window.innerWidth > 780 && window.innerWidth < 1050) {
            this.paginationMaxSize = 5;
            this.mat_lab_flag = false;
          } else if (window.innerWidth > 1050) {
            this.paginationMaxSize = 8;
            this.mat_lab_flag = false;
          } else if (window.innerWidth < 780) {
            this.paginationMaxSize = 3;
            this.mat_lab_flag = true;
          } else {
            this.paginationMaxSize = 8;
            this.mat_lab_flag = false;
          }
        }
      }, {
        key: "searchSubmit",
        value: function searchSubmit() {
          var _this = this;

          this.clearTips();
          this.clearItems();
          this.hidLists();

          if (this.checkSearchform()) {
            console.log('checksuc');
            this.searchservice.searchItems(this.tidyParams()).subscribe(function (items) {
              _this.items = items;
              console.log('error:' + _this.items[0].error);

              if (_this.items[0].error == null || _this.items[0].error == undefined || _this.items[0].error == '') {
                // for(var itemtemp of items){
                // console.log(itemtemp.gift);
                // }
                var _iterator = _createForOfIteratorHelper(_this.items),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var itemtemp = _step.value;

                    _this.washData(itemtemp);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _this.hideHr();

                _this.printresultdiv.nativeElement.innerHTML = "Results for " + _this.searchform.keywords;
                _this.collectionSize = Number(_this.items.length);
                console.log(_this.items[0]);

                _this.showLists();
              } else {
                _this.showTip('result');
              }
            });
          } else {
            console.log('checkfai');
          }
        }
      }, {
        key: "washData",
        value: function washData(itemtemp) {
          itemtemp.expeditedShipping = this.getBoolean(itemtemp.expeditedShipping);
          itemtemp.oneDayShippingAvailable = this.getBoolean(itemtemp.oneDayShippingAvailable);
          itemtemp.bestOfferEnabled = this.getBoolean(itemtemp.bestOfferEnabled);
          itemtemp.buyItNowAvailable = this.getBoolean(itemtemp.buyItNowAvailable);
          itemtemp.gift = this.getBoolean(itemtemp.gift);
        }
      }, {
        key: "getBoolean",
        value: function getBoolean(value) {
          if (value == 'true') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "clearSubmit",
        value: function clearSubmit() {
          this.clearForm();
          this.clearTips();
          this.showHr();
          this.clearItems();
          this.hidLists();
        }
      }, {
        key: "onpagechange",
        value: function onpagechange() {
          for (var i = 0; i < 5; i++) {
            this.isHidden[i] = false;
          }
        }
      }, {
        key: "showHidDetail",
        value: function showHidDetail(event, i) {
          if (this.isHidden[i]) {
            event.target.innerHTML = "Show Details";
            this.isHidden[i] = false;
          } else {
            event.target.innerHTML = "Hide Details";
            this.isHidden[i] = true;
          }
        }
      }, {
        key: "clearForm",
        value: function clearForm() {
          this.searchform = new _searchform__WEBPACK_IMPORTED_MODULE_1__["Searchform"]();
          this.sortOrderValue = this.sortOrder[0];
        }
      }, {
        key: "clearTips",
        value: function clearTips() {
          this.keywordsdiv.nativeElement.style.display = "none";
          this.pricediv.nativeElement.style.display = "none";
          this.resultdiv.nativeElement.style.display = "none";
        }
      }, {
        key: "showTip",
        value: function showTip(key) {
          if (key == 'keywords') {
            this.keywordsdiv.nativeElement.style.display = "block";
          } else if (key == 'price') {
            this.pricediv.nativeElement.style.display = "block";
          } else if (key == 'result') {
            this.resultdiv.nativeElement.style.display = "block";
          }
        }
      }, {
        key: "hideHr",
        value: function hideHr() {
          this.hrline.nativeElement.style.display = "none";
        }
      }, {
        key: "showHr",
        value: function showHr() {
          this.hrline.nativeElement.style.display = "block";
        }
      }, {
        key: "clearItems",
        value: function clearItems() {
          this.items, length = 0;
          this.page = 1;
          this.collectionSize = 100;
          this.pageSize = 5;

          for (var i = 0; i < 100; i++) {
            this.isHidden[i] = false;
          }

          this.mat_lab_flag = false;
        }
      }, {
        key: "hidLists",
        value: function hidLists() {
          this.resultlists.nativeElement.style.display = "none";
        }
      }, {
        key: "showLists",
        value: function showLists() {
          this.resultlists.nativeElement.style.display = "block";
        }
      }, {
        key: "checkSearchform",
        value: function checkSearchform() {
          var tag = true;

          if (this.searchform.keywords == null || this.searchform.keywords == undefined || this.searchform.keywords == '') {
            this.showTip('keywords');
            tag = false;
          }

          if (this.searchform.MinPrice != null && this.searchform.MinPrice != undefined && this.searchform.MinPrice < 0) {
            this.showTip('price');
            tag = false;
          }

          if (this.searchform.MaxPrice != null && this.searchform.MaxPrice != undefined && this.searchform.MaxPrice < 0) {
            this.showTip('price');
            tag = false;
          }

          if (this.searchform.MinPrice != null && this.searchform.MinPrice != undefined && this.searchform.MaxPrice != null && this.searchform.MaxPrice != undefined && (this.searchform.MinPrice < 0 || this.searchform.MaxPrice < 0 || this.searchform.MinPrice > this.searchform.MaxPrice)) {
            this.showTip('price');
            tag = false;
          }

          return tag;
        }
      }, {
        key: "tidyParams",
        value: function tidyParams() {
          var paramstring = '';
          paramstring += 'keywords=' + this.searchform.keywords;

          if (this.searchform.MinPrice != null && this.searchform.MinPrice != undefined) {
            paramstring += '&MinPrice=' + this.searchform.MinPrice;
          }

          if (this.searchform.MaxPrice != null && this.searchform.MaxPrice != undefined) {
            paramstring += '&MaxPrice=' + this.searchform.MaxPrice;
          }

          paramstring += '&sortOrder=' + this.sortOrderValue;

          if (this.searchform.checknew != null && this.searchform.checknew != undefined && this.searchform.checknew != false) {
            paramstring += '&checknew=' + this.searchform.checknew;
          }

          if (this.searchform.checkused != null && this.searchform.checkused != undefined && this.searchform.checkused != false) {
            paramstring += '&checkused=' + this.searchform.checkused;
          }

          if (this.searchform.checkverygood != null && this.searchform.checkverygood != undefined && this.searchform.checkverygood != false) {
            paramstring += '&checkverygood=' + this.searchform.checkverygood;
          }

          if (this.searchform.checkgood != null && this.searchform.checkgood != undefined && this.searchform.checkgood != false) {
            paramstring += '&checkgood=' + this.searchform.checkgood;
          }

          if (this.searchform.checkacceptable != null && this.searchform.checkacceptable != undefined && this.searchform.checkacceptable != false) {
            paramstring += '&checkacceptable=' + this.searchform.checkacceptable;
          }

          if (this.searchform.ReturnsAcceptedOnly != null && this.searchform.ReturnsAcceptedOnly != undefined && this.searchform.ReturnsAcceptedOnly != false) {
            paramstring += '&ReturnsAcceptedOnly=' + this.searchform.ReturnsAcceptedOnly;
          }

          if (this.searchform.FreeShippingOnly != null && this.searchform.FreeShippingOnly != undefined && this.searchform.FreeShippingOnly != false) {
            paramstring += '&FreeShippingOnly=' + this.searchform.FreeShippingOnly;
          }

          if (this.searchform.ExpeditedShippingType != null && this.searchform.ExpeditedShippingType != undefined && this.searchform.ExpeditedShippingType != false) {
            paramstring += '&ExpeditedShippingType=' + 'Expedited';
          }

          console.log(paramstring);
          return paramstring;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.keywordsdiv = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pricediv = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resultdiv = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hrline = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resultlists = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.temp = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.printresultdiv = _t.first);
        }
      },
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler() {
            return ctx.onResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])],
      decls: 92,
      vars: 23,
      consts: [[1, "container", "searchformcont"], [1, "text-center"], ["src", "../../assets/header.png", "alt", "EBay"], [1, "searchform"], ["searchForm", "ngForm"], [1, "form-group", "row", "formrows"], [1, "col-sm-2", "fontbold"], [2, "color", "red"], [1, "col-sm-10"], ["type", "input", "id", "keywords", "placeholder", "Enter keywords", "autocomplete", "on", "name", "keywords", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-10", "nowrap"], [1, "minprice"], ["type", "number", "id", "MinPrice", "placeholder", "Min Price", "autocomplete", "on", "name", "MinPrice", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "maxprice"], ["type", "number", "id", "MaxPrice", "placeholder", "Max Price", "autocomplete", "on", "name", "MaxPrice", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "row", "formrows", "manychecks"], [1, "col-sm-10", "form-inline"], ["type", "checkbox", "id", "checknew", "name", "checknew", 3, "ngModel", "ngModelChange"], [1, "fontbold"], ["type", "checkbox", "id", "checkused", "name", "checkused", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "checkverygood", "name", "checkverygood", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "checkgood", "name", "checkgood", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "checkacceptable", "name", "checkacceptable", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "ReturnsAcceptedOnly", "name", "ReturnsAcceptedOnly", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "FreeShippingOnly", "name", "FreeShippingOnly", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "ExpeditedShippingType", "name", "ExpeditedShippingType", 3, "ngModel", "ngModelChange"], [1, "col-sm-10", "selectdiv"], ["disableOptionCentering", "", 1, "custom-select", "matselectself", 3, "value", "valueChange"], ["class", "selectOptions", 3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "row", "justify-content-end", "buttondiv"], ["id", "searchbtn", 1, "btn", "btn-primary", "searchbtn", 3, "click"], ["src", "../../assets/baseline_search_white_18dp.png", "alt", "s"], ["id", "clearbtn", 1, "btn", "btn-secondary", "clearbtn", 3, "click"], ["src", "../../assets/baseline_clear_all_white_18dp.png", "alt", "c"], [1, "text-center", "keywordsdiv"], ["keywordsdiv", ""], [1, "text-center", "pricediv"], ["pricediv", ""], [1, "text-center", "resultdiv"], ["resultdiv", ""], ["hrline", ""], [1, "container", "resultlists"], ["resultlists", ""], [1, "form-group", "row", "resultbar"], [1, "col-sm-6", "form-inline", "fontresultfor"], ["printresultdiv", ""], [1, "col-sm-6", "row", "justify-content-center", "paginationbar"], ["id", "pagination", "size", "sm", 3, "collectionSize", "page", "pageSize", "boundaryLinks", "maxSize", "pageChange", "collectionSizeChange", "pageSizeChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["id", "cardlist", 1, "cardlist"], ["class", "cardbody row", 4, "ngFor", "ngForOf"], [1, "selectOptions", 3, "value"], ["src", "../../assets/baseline_done_black_18dp.png", "alt", "yes", 4, "ngIf"], ["src", "../../assets/baseline_done_black_18dp_back.png", "alt", "yes", 4, "ngIf"], ["src", "../../assets/baseline_done_black_18dp.png", "alt", "yes"], ["src", "../../assets/baseline_done_black_18dp_back.png", "alt", "yes"], [2, "font-size", "0.5rem"], [1, "cardbody", "row"], [1, "cardimgdiv", "col-sm-2"], ["alt", "cardimg", 1, "cardimg", 3, "src"], [1, "carddetaildiv", "col-sm-10"], [1, "cardcontentdiv"], [1, "cardtitle"], ["target", "_blank", 3, "href"], [1, "cardprice"], [1, "cardl_b"], [1, "cardlocation"], [1, "fontoblique"], [1, "cardbutton", "btn", "btn-light", 3, "click"], ["class", "carddetailmain", 4, "ngIf"], [1, "carddetailmain"], ["mat-stretch-tabs", "", 4, "ngIf"], [4, "ngIf"], ["mat-stretch-tabs", ""], ["label", "Basic Info"], [1, "detailtab"], [1, "detailinfo"], [1, "detailtitle"], [1, "detailcontent"], ["label", "Shipping Info"], ["class", "hookcross", "src", "../../assets/no.png", "alt", "False", 4, "ngIf"], ["class", "hookcross", "src", "../../assets/yes.png", "alt", "True", 4, "ngIf"], ["label", "Listing Info"], ["src", "../../assets/no.png", "alt", "False", 1, "hookcross"], ["src", "../../assets/yes.png", "alt", "True", 1, "hookcross"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Key words");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.searchform.keywords = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price range");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.searchform.MinPrice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.searchform.MaxPrice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Condition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.searchform.checknew = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\xA0New\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.searchform.checkused = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\xA0Used\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.searchform.checkverygood = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\xA0Very Good\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.searchform.checkgood = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\xA0Good\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.searchform.checkacceptable = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\xA0Acceptable\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Seller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_43_listener($event) {
            return ctx.searchform.ReturnsAcceptedOnly = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\xA0Return Accepted\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Shipping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_50_listener($event) {
            return ctx.searchform.FreeShippingOnly = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\xA0Free\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_53_listener($event) {
            return ctx.searchform.ExpeditedShippingType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\xA0Expedited\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Sort Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-select", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AppComponent_Template_mat_select_valueChange_60_listener($event) {
            return ctx.sortOrderValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AppComponent_mat_option_61_Template, 4, 4, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_63_listener() {
            return ctx.searchSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_66_listener() {
            return ctx.clearSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Clear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Please enter a keyword");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Please use appropriate values for minPrice/maxPrice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "No exact matches found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr", null, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 41, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 44, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "nav", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ngb-pagination", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AppComponent_Template_ngb_pagination_pageChange_86_listener() {
            return ctx.onpagechange();
          })("collectionSizeChange", function AppComponent_Template_ngb_pagination_collectionSizeChange_86_listener($event) {
            return ctx.collectionSize = $event;
          })("pageChange", function AppComponent_Template_ngb_pagination_pageChange_86_listener($event) {
            return ctx.page = $event;
          })("pageSizeChange", function AppComponent_Template_ngb_pagination_pageSizeChange_86_listener($event) {
            return ctx.pageSize = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, AppComponent_ng_template_87_Template, 3, 0, "ng-template", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AppComponent_ng_template_88_Template, 3, 0, "ng-template", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, AppComponent_div_90_Template, 19, 6, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchform.keywords);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchform.MinPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchform.MaxPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchform.checknew);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchform.checkused);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchform.checkverygood);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchform.checkgood);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchform.checkacceptable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchform.ReturnsAcceptedOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchform.FreeShippingOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchform.ExpeditedShippingType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.sortOrderValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.collectionSize)("page", ctx.page)("pageSize", ctx.pageSize)("boundaryLinks", false)("maxSize", ctx.paginationMaxSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](91, 19, ctx.items, (ctx.page - 1) * 5, ctx.page * 5));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationPrevious"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationNext"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]],
      styles: ["@media screen and (max-width: 575px) and (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%], .resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.95rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n\t\r\n\t.manychecks[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 2.5rem;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 575px) and (max-width: 780px) and (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%], .resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5rem;\r\n\t\tmax-height: 5rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.5rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 780px) and (max-width: 900px) and (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 90%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 95%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.25rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 900px) and (max-width: 1050px) and (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 80%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 90%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.875rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 1050px) and (max-width: 1350px) and (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 65%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 75%;\r\n\t}\r\n\t\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.75rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 1350px) and (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 50%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 60%;\r\n\t}\r\n\t\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.45rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 575px) and (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%], .resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.95rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n\t\r\n\t.manychecks[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 2.5rem;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 575px) and (max-width: 780px) and (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%], .resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5rem;\r\n\t\tmax-height: 5rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.5rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 780px) and (max-width: 900px) and (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 90%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 95%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.25rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 900px) and (max-width: 1050px) and (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 80%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 90%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.875rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 1050px) and (max-width: 1350px) and (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 65%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 75%;\r\n\t}\r\n\t\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.75rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 1350px) and (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 50%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 60%;\r\n\t}\r\n\t\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.45rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 575px) and not (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%], .resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.95rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n\t\r\n\t.manychecks[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 2.5rem;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 575px) and (max-width: 780px) and not (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%], .resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5rem;\r\n\t\tmax-height: 5rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.5rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 780px) and (max-width: 900px) and not (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 90%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 95%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.25rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 900px) and (max-width: 1050px) and not (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 80%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 90%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.875rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 1050px) and (max-width: 1350px) and not (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 65%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 75%;\r\n\t}\r\n\t\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.75rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 1350px) and not (orientation: landscape) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 50%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 60%;\r\n\t}\r\n\t\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.45rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 575px) and not (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%], .resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.95rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n\t\r\n\t.manychecks[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 2.5rem;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 575px) and (max-width: 780px) and not (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%], .resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5rem;\r\n\t\tmax-height: 5rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.5rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 780px) and (max-width: 900px) and not (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 90%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 95%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 1.25rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 900px) and (max-width: 1050px) and not (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 80%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 90%;\r\n\t}\r\n\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.875rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 1050px) and (max-width: 1350px) and not (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 65%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 75%;\r\n\t}\r\n\t\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.75rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 1350px) and not (orientation: portrait) {\r\n\t.searchformcont[_ngcontent-%COMP%] {\r\n\t\twidth: 50%;\r\n\t}\r\n\t\r\n\t.resultlists[_ngcontent-%COMP%] {\r\n\t\twidth: 60%;\r\n\t}\r\n\t\r\n\t.cardimg[_ngcontent-%COMP%] {\r\n\t\tmax-width: 5.2rem;\r\n\t\tmax-height: 5.2rem;\r\n\t}\r\n\t\r\n\t.formrows[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 0.45rem;\r\n\t\talign-items: center !important;\r\n\t\theight: calc(2em + 1px) !important;\r\n\t}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t}\r\n\r\n\t.custom-select[_ngcontent-%COMP%] {\r\n\t\theight: calc(2em + 1px) !important;\r\n\t\tfont-size: 0.9rem !important;\r\n\t\tpadding-top: 0 !important;\r\n\t\tpadding-bottom: 0 !important;\r\n\t\tline-height: 2;\r\n\t}\r\n\r\n\t.selectOptions[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\twidth: 100% !important;\r\n\t\tbackground: rgba(123,123,127,0.9) !important;\r\n\t\theight: 1rem !important;\r\n\t\tline-height:1 !important;\r\n\t\tpadding-bottom:0.25rem !important;\r\n\t\tpadding-top:0.25rem !important; \r\n\t\tmargin-left: 0 !important;\r\n\t\tmargin-right: 0 !important;\r\n\t\tpadding-left: 0 !important;\r\n\t\tpadding-right: 0 !important;\r\n\t}\r\n}\r\n\r\n.selectOptions[_ngcontent-%COMP%]:focus, .selectOptions[_ngcontent-%COMP%]:checked, .selectOptions[_ngcontent-%COMP%]:hover {\r\n\tbackground-color: #4891FF !important;\r\n}\r\n\r\n.nowrap[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n}\r\n\r\n.minprice[_ngcontent-%COMP%] {\r\n flex: 0 0 50%;\r\n    max-width: 50%;\r\n\tpadding-right: 15px;\r\n}\r\n\r\n.maxprice[_ngcontent-%COMP%] {\r\n flex: 0 0 50%;\r\n    max-width: 50%;\r\n\tpadding-left: 15px;\r\n}\r\n\r\n[_nghost-%COMP%]   mat-select[_ngcontent-%COMP%]     .mat-select-arrow{\r\n\tborder:none !important;\r\n}\r\n\r\n.buttondiv[_ngcontent-%COMP%] {\r\n\tpadding-right: 15px;\r\n}\r\n\r\n.searchbtn[_ngcontent-%COMP%] {\r\n\tmargin-right: 2rem;\r\n\tbackground-color: #2A6FB1;\r\n}\r\n\r\n.clearbtn[_ngcontent-%COMP%]:active, .clearbtn[_ngcontent-%COMP%]:focus {\r\n\tcolor: black !important;\r\n}\r\n\r\n.searchbtn[_ngcontent-%COMP%]:focus, .searchbtn[_ngcontent-%COMP%]:hover {\r\n\tbackground-color: #1D5A7D;\r\n}\r\n\r\n.keywordsdiv[_ngcontent-%COMP%], .pricediv[_ngcontent-%COMP%], .resultdiv[_ngcontent-%COMP%] {\r\n\tbackground-color: #FBF6C5;\r\n\tpadding-top: calc(0.5rem + 1px);\r\n\tpadding-bottom: calc(0.5rem + 1px);\r\n\tfont-weight: 600;\r\n\tdisplay: none;\r\n\tmargin-bottom: calc(0.5rem + 1px);\r\n}\r\n\r\n.searchform[_ngcontent-%COMP%] {\r\n\tpadding-bottom: calc(2rem + 1px);\r\n}\r\n\r\n#resultsfordiv[_ngcontent-%COMP%] {\r\n\tpadding-left:0;\r\n}\r\n\r\n.resultbar[_ngcontent-%COMP%] {\r\n\tpadding-bottom: 0;\r\n\tmargin-bottom: 0.5rem;\r\n\tmargin-left: 0;\r\n\tmargin-right: 0;\r\n\tpadding-left: 0;\r\n\tpadding-right: 0;\r\n}\r\n\r\n.fontresultfor[_ngcontent-%COMP%] {\r\n\tfont-size: 1.5em;\r\n\tline-height: 1.5rem;\r\n\tmargin-left: 0;\r\n\tmargin-right: 0;\r\n\tpadding-left: 0;\r\n\tpadding-right: 0;\r\n}\r\n\r\n.paginationbar[_ngcontent-%COMP%] {\r\n\tmargin-left: 0;\r\n\tmargin-right: 0;\r\n\tpadding-left: 0;\r\n\tpadding-right: 0;\r\n}\r\n\r\n  .paginationbar > #pagination > ul > li:not(.active) > a {\r\n\tcolor: black !important;\r\n}\r\n\r\n  .paginationbar > #pagination > ul > li > a {\r\n\tborder: none !important;\r\n\toutline: none !important;\r\n\tbox-shadow: none !important;\r\n}\r\n\r\n  .paginationbar > #pagination > ul{\r\n\tmargin-bottom: 0 !important;\r\n}\r\n\r\n  .paginationbar > #pagination > ul > li.disabled > a {\r\n\tborder: none !important;\r\n\toutline: none !important;\r\n\tcolor: gray !important;\r\n}\r\n\r\n.resultlists[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n}\r\n\r\n.cardbody[_ngcontent-%COMP%] {\r\n\tbackground-color: #D9D8DA;\r\n\tborder: none;\r\n\tpadding-left:0;\r\n\tpadding-right:0;\r\n\tpadding-bottom:0;\r\n\tmargin-bottom: 1.5rem;\r\n}\r\n\r\n.cardimgdiv[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tjustify-content: center;\r\n\talign-items: flex-start;\r\n\tpadding-left:0.5rem;\r\n\tpadding-right:0;\r\n\tpadding-bottom:0;\r\n}\r\n\r\n.cardimg[_ngcontent-%COMP%] {\r\n\twidth: auto;\r\n\theight: auto;\r\n\tmargin-top: 0.75rem;\r\n\tpadding-bottom: 0;\r\n\tpadding-top: 0;\r\n\tmargin-bottom: 0.75rem;\r\n}\r\n\r\n.carddetaildiv[_ngcontent-%COMP%] {\r\n\tpadding-left:0.75rem;\r\n\tpadding-right:0.55rem;\r\n\tpadding-bottom: 0;\r\n}\r\n\r\n.cardtitle[_ngcontent-%COMP%] {\r\n\tfont-size: 1.25em;\r\n\tline-height: 1.25rem;\r\n}\r\n\r\n.cardtitle[_ngcontent-%COMP%], .cardprice[_ngcontent-%COMP%], .cardl_b[_ngcontent-%COMP%] {\r\n\tmargin-top: 0.5rem;\r\n}\r\n\r\n.cardl_b[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\talign-items: center;\r\n\tmargin-bottom: 0.5rem;\r\n}\r\n\r\n.cardbutton[_ngcontent-%COMP%] {\r\n\tline-height: 0.9rem;\r\n\tfont-size: 0.9em;\r\n}\r\n\r\n.cardbutton[_ngcontent-%COMP%]:focus {\r\n\tborder: 1px solid blue;\r\n}\r\n\r\n.fontoblique[_ngcontent-%COMP%] {\r\n\tfont-style: oblique;\r\n}\r\n\r\n.fontbold[_ngcontent-%COMP%] {\r\n\tfont-weight: 700;\r\n}\r\n\r\n.carddetailmain[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 0.5rem;\r\n}\r\n\r\n.detailtab[_ngcontent-%COMP%] {\r\n\tdisplay: table;\r\n}\r\n\r\n.detailinfo[_ngcontent-%COMP%] {\r\n\tdisplay: table-row;\r\n\tmargin-top: 0.5rem;\r\n}\r\n\r\n.detailtitle[_ngcontent-%COMP%] {\r\n\tdisplay: table-cell;\r\n}\r\n\r\n.detailcontent[_ngcontent-%COMP%] {\r\n\tdisplay: table-cell;\r\n\tpadding-left: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztFQUNDLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsa0NBQWtDO0NBQ25DOztDQUVBO0VBQ0Msa0NBQWtDO0VBQ2xDLDRCQUE0QjtDQUM3Qjs7Q0FFQTtFQUNDLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDRDQUE0QztFQUM1Qyx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0NBQzVCOztDQUVBO0VBQ0MscUJBQXFCO0NBQ3RCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLGtDQUFrQztDQUNuQzs7Q0FFQTtFQUNDLGtDQUFrQztFQUNsQyw0QkFBNEI7Q0FDN0I7O0NBRUE7RUFDQyxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsY0FBYztDQUNmOztDQUVBO0VBQ0MsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDJCQUEyQjtDQUM1QjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25C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O0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQsIC5yZXN1bHRsaXN0cyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEuOTVyZW07XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b20tc2VsZWN0IHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDogMjtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3RPcHRpb25zIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTI3LDAuOSkgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6MSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206MC4yNXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6MC4yNXJlbSAhaW1wb3J0YW50OyBcclxuXHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHQubWFueWNoZWNrcyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzVweCkgYW5kIChtYXgtd2lkdGg6IDc4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQsIC5yZXN1bHRsaXN0cyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5jYXJkaW1nIHtcclxuXHRcdG1heC13aWR0aDogNXJlbTtcclxuXHRcdG1heC1oZWlnaHQ6IDVyZW07XHJcblx0fVxyXG5cdFxyXG5cdC5mb3Jtcm93cyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b20tc2VsZWN0IHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDogMjtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3RPcHRpb25zIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTI3LDAuOSkgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6MSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206MC4yNXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6MC4yNXJlbSAhaW1wb3J0YW50OyBcclxuXHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcblx0LnNlYXJjaGZvcm1jb250IHtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0fVxyXG5cdFxyXG5cdC5yZXN1bHRsaXN0cyB7XHJcblx0XHR3aWR0aDogOTUlO1xyXG5cdH1cclxuXHJcblx0LmNhcmRpbWcge1xyXG5cdFx0bWF4LXdpZHRoOiA1LjJyZW07XHJcblx0XHRtYXgtaGVpZ2h0OiA1LjJyZW07XHJcblx0fVxyXG5cdFxyXG5cdC5mb3Jtcm93cyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuY3VzdG9tLXNlbGVjdCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI7XHJcblx0fVxyXG5cclxuXHQuc2VsZWN0T3B0aW9ucyB7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgxMjMsMTIzLDEyNywwLjkpICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OjEgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOjAuMjVyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOjAuMjVyZW0gIWltcG9ydGFudDsgXHJcblx0XHRtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTA1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQge1xyXG5cdFx0d2lkdGg6IDgwJTtcclxuXHR9XHJcblx0XHJcblx0LnJlc3VsdGxpc3RzIHtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0fVxyXG5cclxuXHQuY2FyZGltZyB7XHJcblx0XHRtYXgtd2lkdGg6IDUuMnJlbTtcclxuXHRcdG1heC1oZWlnaHQ6IDUuMnJlbTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDAuODc1cmVtO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuY3VzdG9tLXNlbGVjdCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI7XHJcblx0fVxyXG5cclxuXHQuc2VsZWN0T3B0aW9ucyB7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgxMjMsMTIzLDEyNywwLjkpICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OjEgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOjAuMjVyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOjAuMjVyZW0gIWltcG9ydGFudDsgXHJcblx0XHRtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNTBweCkgYW5kIChtYXgtd2lkdGg6IDEzNTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcblx0LnNlYXJjaGZvcm1jb250IHtcclxuXHRcdHdpZHRoOiA2NSU7XHJcblx0fVxyXG5cdFxyXG5cdC5yZXN1bHRsaXN0cyB7XHJcblx0XHR3aWR0aDogNzUlO1xyXG5cdH1cclxuXHRcclxuXHQuY2FyZGltZyB7XHJcblx0XHRtYXgtd2lkdGg6IDUuMnJlbTtcclxuXHRcdG1heC1oZWlnaHQ6IDUuMnJlbTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b20tc2VsZWN0IHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDogMjtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3RPcHRpb25zIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTI3LDAuOSkgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6MSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206MC4yNXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6MC4yNXJlbSAhaW1wb3J0YW50OyBcclxuXHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQge1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0XHJcblx0LnJlc3VsdGxpc3RzIHtcclxuXHRcdHdpZHRoOiA2MCU7XHJcblx0fVxyXG5cdFxyXG5cdC5jYXJkaW1nIHtcclxuXHRcdG1heC13aWR0aDogNS4ycmVtO1xyXG5cdFx0bWF4LWhlaWdodDogNS4ycmVtO1xyXG5cdH1cclxuXHRcclxuXHQuZm9ybXJvd3Mge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMC40NXJlbTtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZm9ybS1jb250cm9sIHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmN1c3RvbS1zZWxlY3Qge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyO1xyXG5cdH1cclxuXHJcblx0LnNlbGVjdE9wdGlvbnMge1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMTIzLDEyMywxMjcsMC45KSAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDoxICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTowLjI1cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXRvcDowLjI1cmVtICFpbXBvcnRhbnQ7IFxyXG5cdFx0bWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQsIC5yZXN1bHRsaXN0cyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEuOTVyZW07XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b20tc2VsZWN0IHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDogMjtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3RPcHRpb25zIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTI3LDAuOSkgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6MSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206MC4yNXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6MC4yNXJlbSAhaW1wb3J0YW50OyBcclxuXHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHQubWFueWNoZWNrcyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzVweCkgYW5kIChtYXgtd2lkdGg6IDc4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG5cdC5zZWFyY2hmb3JtY29udCwgLnJlc3VsdGxpc3RzIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmNhcmRpbWcge1xyXG5cdFx0bWF4LXdpZHRoOiA1cmVtO1xyXG5cdFx0bWF4LWhlaWdodDogNXJlbTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZm9ybS1jb250cm9sIHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmN1c3RvbS1zZWxlY3Qge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyO1xyXG5cdH1cclxuXHJcblx0LnNlbGVjdE9wdGlvbnMge1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMTIzLDEyMywxMjcsMC45KSAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDoxICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTowLjI1cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXRvcDowLjI1cmVtICFpbXBvcnRhbnQ7IFxyXG5cdFx0bWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG5cdC5zZWFyY2hmb3JtY29udCB7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdH1cclxuXHRcclxuXHQucmVzdWx0bGlzdHMge1xyXG5cdFx0d2lkdGg6IDk1JTtcclxuXHR9XHJcblxyXG5cdC5jYXJkaW1nIHtcclxuXHRcdG1heC13aWR0aDogNS4ycmVtO1xyXG5cdFx0bWF4LWhlaWdodDogNS4ycmVtO1xyXG5cdH1cclxuXHRcclxuXHQuZm9ybXJvd3Mge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZm9ybS1jb250cm9sIHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmN1c3RvbS1zZWxlY3Qge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyO1xyXG5cdH1cclxuXHJcblx0LnNlbGVjdE9wdGlvbnMge1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMTIzLDEyMywxMjcsMC45KSAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDoxICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTowLjI1cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXRvcDowLjI1cmVtICFpbXBvcnRhbnQ7IFxyXG5cdFx0bWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwNTBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQge1xyXG5cdFx0d2lkdGg6IDgwJTtcclxuXHR9XHJcblx0XHJcblx0LnJlc3VsdGxpc3RzIHtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0fVxyXG5cclxuXHQuY2FyZGltZyB7XHJcblx0XHRtYXgtd2lkdGg6IDUuMnJlbTtcclxuXHRcdG1heC1oZWlnaHQ6IDUuMnJlbTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDAuODc1cmVtO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuY3VzdG9tLXNlbGVjdCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI7XHJcblx0fVxyXG5cclxuXHQuc2VsZWN0T3B0aW9ucyB7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgxMjMsMTIzLDEyNywwLjkpICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OjEgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOjAuMjVyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOjAuMjVyZW0gIWltcG9ydGFudDsgXHJcblx0XHRtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNTBweCkgYW5kIChtYXgtd2lkdGg6IDEzNTBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQge1xyXG5cdFx0d2lkdGg6IDY1JTtcclxuXHR9XHJcblx0XHJcblx0LnJlc3VsdGxpc3RzIHtcclxuXHRcdHdpZHRoOiA3NSU7XHJcblx0fVxyXG5cdFxyXG5cdC5jYXJkaW1nIHtcclxuXHRcdG1heC13aWR0aDogNS4ycmVtO1xyXG5cdFx0bWF4LWhlaWdodDogNS4ycmVtO1xyXG5cdH1cclxuXHRcclxuXHQuZm9ybXJvd3Mge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZm9ybS1jb250cm9sIHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmN1c3RvbS1zZWxlY3Qge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyO1xyXG5cdH1cclxuXHJcblx0LnNlbGVjdE9wdGlvbnMge1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMTIzLDEyMywxMjcsMC45KSAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDoxICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTowLjI1cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXRvcDowLjI1cmVtICFpbXBvcnRhbnQ7IFxyXG5cdFx0bWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblx0LnNlYXJjaGZvcm1jb250IHtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG5cdFxyXG5cdC5yZXN1bHRsaXN0cyB7XHJcblx0XHR3aWR0aDogNjAlO1xyXG5cdH1cclxuXHRcclxuXHQuY2FyZGltZyB7XHJcblx0XHRtYXgtd2lkdGg6IDUuMnJlbTtcclxuXHRcdG1heC1oZWlnaHQ6IDUuMnJlbTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDAuNDVyZW07XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b20tc2VsZWN0IHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDogMjtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3RPcHRpb25zIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTI3LDAuOSkgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6MSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206MC4yNXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6MC4yNXJlbSAhaW1wb3J0YW50OyBcclxuXHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIGFuZCBub3QgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQsIC5yZXN1bHRsaXN0cyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEuOTVyZW07XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b20tc2VsZWN0IHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDogMjtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3RPcHRpb25zIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTI3LDAuOSkgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6MSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206MC4yNXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6MC4yNXJlbSAhaW1wb3J0YW50OyBcclxuXHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHQubWFueWNoZWNrcyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzVweCkgYW5kIChtYXgtd2lkdGg6IDc4MHB4KSBhbmQgbm90IChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcblx0LnNlYXJjaGZvcm1jb250LCAucmVzdWx0bGlzdHMge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQuY2FyZGltZyB7XHJcblx0XHRtYXgtd2lkdGg6IDVyZW07XHJcblx0XHRtYXgtaGVpZ2h0OiA1cmVtO1xyXG5cdH1cclxuXHRcclxuXHQuZm9ybXJvd3Mge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuY3VzdG9tLXNlbGVjdCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI7XHJcblx0fVxyXG5cclxuXHQuc2VsZWN0T3B0aW9ucyB7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgxMjMsMTIzLDEyNywwLjkpICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OjEgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOjAuMjVyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOjAuMjVyZW0gIWltcG9ydGFudDsgXHJcblx0XHRtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4MHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIGFuZCBub3QgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQge1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHR9XHJcblx0XHJcblx0LnJlc3VsdGxpc3RzIHtcclxuXHRcdHdpZHRoOiA5NSU7XHJcblx0fVxyXG5cclxuXHQuY2FyZGltZyB7XHJcblx0XHRtYXgtd2lkdGg6IDUuMnJlbTtcclxuXHRcdG1heC1oZWlnaHQ6IDUuMnJlbTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b20tc2VsZWN0IHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDogMjtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3RPcHRpb25zIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTI3LDAuOSkgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6MSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206MC4yNXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6MC4yNXJlbSAhaW1wb3J0YW50OyBcclxuXHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIGFuZCBub3QgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQge1xyXG5cdFx0d2lkdGg6IDgwJTtcclxuXHR9XHJcblx0XHJcblx0LnJlc3VsdGxpc3RzIHtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0fVxyXG5cclxuXHQuY2FyZGltZyB7XHJcblx0XHRtYXgtd2lkdGg6IDUuMnJlbTtcclxuXHRcdG1heC1oZWlnaHQ6IDUuMnJlbTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDAuODc1cmVtO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuY3VzdG9tLXNlbGVjdCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI7XHJcblx0fVxyXG5cclxuXHQuc2VsZWN0T3B0aW9ucyB7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgxMjMsMTIzLDEyNywwLjkpICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OjEgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOjAuMjVyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOjAuMjVyZW0gIWltcG9ydGFudDsgXHJcblx0XHRtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNTBweCkgYW5kIChtYXgtd2lkdGg6IDEzNTBweCkgYW5kIG5vdCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG5cdC5zZWFyY2hmb3JtY29udCB7XHJcblx0XHR3aWR0aDogNjUlO1xyXG5cdH1cclxuXHRcclxuXHQucmVzdWx0bGlzdHMge1xyXG5cdFx0d2lkdGg6IDc1JTtcclxuXHR9XHJcblx0XHJcblx0LmNhcmRpbWcge1xyXG5cdFx0bWF4LXdpZHRoOiA1LjJyZW07XHJcblx0XHRtYXgtaGVpZ2h0OiA1LjJyZW07XHJcblx0fVxyXG5cdFxyXG5cdC5mb3Jtcm93cyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuY3VzdG9tLXNlbGVjdCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI7XHJcblx0fVxyXG5cclxuXHQuc2VsZWN0T3B0aW9ucyB7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgxMjMsMTIzLDEyNywwLjkpICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OjEgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOjAuMjVyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOjAuMjVyZW0gIWltcG9ydGFudDsgXHJcblx0XHRtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNTBweCkgYW5kIG5vdCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG5cdC5zZWFyY2hmb3JtY29udCB7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdH1cclxuXHRcclxuXHQucmVzdWx0bGlzdHMge1xyXG5cdFx0d2lkdGg6IDYwJTtcclxuXHR9XHJcblx0XHJcblx0LmNhcmRpbWcge1xyXG5cdFx0bWF4LXdpZHRoOiA1LjJyZW07XHJcblx0XHRtYXgtaGVpZ2h0OiA1LjJyZW07XHJcblx0fVxyXG5cdFxyXG5cdC5mb3Jtcm93cyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwLjQ1cmVtO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuY3VzdG9tLXNlbGVjdCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI7XHJcblx0fVxyXG5cclxuXHQuc2VsZWN0T3B0aW9ucyB7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgxMjMsMTIzLDEyNywwLjkpICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OjEgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOjAuMjVyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOjAuMjVyZW0gIWltcG9ydGFudDsgXHJcblx0XHRtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSBhbmQgbm90IChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQsIC5yZXN1bHRsaXN0cyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEuOTVyZW07XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b20tc2VsZWN0IHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDogMjtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3RPcHRpb25zIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTI3LDAuOSkgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6MSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206MC4yNXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6MC4yNXJlbSAhaW1wb3J0YW50OyBcclxuXHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHQubWFueWNoZWNrcyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzVweCkgYW5kIChtYXgtd2lkdGg6IDc4MHB4KSBhbmQgbm90IChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQsIC5yZXN1bHRsaXN0cyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5jYXJkaW1nIHtcclxuXHRcdG1heC13aWR0aDogNXJlbTtcclxuXHRcdG1heC1oZWlnaHQ6IDVyZW07XHJcblx0fVxyXG5cdFxyXG5cdC5mb3Jtcm93cyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b20tc2VsZWN0IHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDogMjtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3RPcHRpb25zIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTI3LDAuOSkgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6MSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206MC4yNXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6MC4yNXJlbSAhaW1wb3J0YW50OyBcclxuXHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkgYW5kIG5vdCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblx0LnNlYXJjaGZvcm1jb250IHtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0fVxyXG5cdFxyXG5cdC5yZXN1bHRsaXN0cyB7XHJcblx0XHR3aWR0aDogOTUlO1xyXG5cdH1cclxuXHJcblx0LmNhcmRpbWcge1xyXG5cdFx0bWF4LXdpZHRoOiA1LjJyZW07XHJcblx0XHRtYXgtaGVpZ2h0OiA1LjJyZW07XHJcblx0fVxyXG5cdFxyXG5cdC5mb3Jtcm93cyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuY3VzdG9tLXNlbGVjdCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI7XHJcblx0fVxyXG5cclxuXHQuc2VsZWN0T3B0aW9ucyB7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgxMjMsMTIzLDEyNywwLjkpICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OjEgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOjAuMjVyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOjAuMjVyZW0gIWltcG9ydGFudDsgXHJcblx0XHRtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTA1MHB4KSBhbmQgbm90IChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQge1xyXG5cdFx0d2lkdGg6IDgwJTtcclxuXHR9XHJcblx0XHJcblx0LnJlc3VsdGxpc3RzIHtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0fVxyXG5cclxuXHQuY2FyZGltZyB7XHJcblx0XHRtYXgtd2lkdGg6IDUuMnJlbTtcclxuXHRcdG1heC1oZWlnaHQ6IDUuMnJlbTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDAuODc1cmVtO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuY3VzdG9tLXNlbGVjdCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI7XHJcblx0fVxyXG5cclxuXHQuc2VsZWN0T3B0aW9ucyB7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgxMjMsMTIzLDEyNywwLjkpICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OjEgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOjAuMjVyZW0gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOjAuMjVyZW0gIWltcG9ydGFudDsgXHJcblx0XHRtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNTBweCkgYW5kIChtYXgtd2lkdGg6IDEzNTBweCkgYW5kIG5vdCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblx0LnNlYXJjaGZvcm1jb250IHtcclxuXHRcdHdpZHRoOiA2NSU7XHJcblx0fVxyXG5cdFxyXG5cdC5yZXN1bHRsaXN0cyB7XHJcblx0XHR3aWR0aDogNzUlO1xyXG5cdH1cclxuXHRcclxuXHQuY2FyZGltZyB7XHJcblx0XHRtYXgtd2lkdGg6IDUuMnJlbTtcclxuXHRcdG1heC1oZWlnaHQ6IDUuMnJlbTtcclxuXHR9XHJcblx0XHJcblx0LmZvcm1yb3dzIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMmVtICsgMXB4KSAhaW1wb3J0YW50O1xyXG5cdFx0Zm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b20tc2VsZWN0IHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDogMjtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3RPcHRpb25zIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyMywxMjMsMTI3LDAuOSkgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0bGluZS1oZWlnaHQ6MSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206MC4yNXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy10b3A6MC4yNXJlbSAhaW1wb3J0YW50OyBcclxuXHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSBhbmQgbm90IChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHQuc2VhcmNoZm9ybWNvbnQge1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0XHJcblx0LnJlc3VsdGxpc3RzIHtcclxuXHRcdHdpZHRoOiA2MCU7XHJcblx0fVxyXG5cdFxyXG5cdC5jYXJkaW1nIHtcclxuXHRcdG1heC13aWR0aDogNS4ycmVtO1xyXG5cdFx0bWF4LWhlaWdodDogNS4ycmVtO1xyXG5cdH1cclxuXHRcclxuXHQuZm9ybXJvd3Mge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMC40NXJlbTtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZm9ybS1jb250cm9sIHtcclxuXHRcdGhlaWdodDogY2FsYygyZW0gKyAxcHgpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmN1c3RvbS1zZWxlY3Qge1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDJlbSArIDFweCkgIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyO1xyXG5cdH1cclxuXHJcblx0LnNlbGVjdE9wdGlvbnMge1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMTIzLDEyMywxMjcsMC45KSAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcblx0XHRsaW5lLWhlaWdodDoxICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTowLjI1cmVtICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXRvcDowLjI1cmVtICFpbXBvcnRhbnQ7IFxyXG5cdFx0bWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHRcdG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLnNlbGVjdE9wdGlvbnM6Zm9jdXMsIC5zZWxlY3RPcHRpb25zOmNoZWNrZWQsIC5zZWxlY3RPcHRpb25zOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDg5MUZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub3dyYXAge1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LW1zLWZsZXgtd3JhcDogbm93cmFwO1xyXG5cdGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4ubWlucHJpY2Uge1xyXG5cdC1tcy1mbGV4OiAwIDAgNTAlO1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tYXhwcmljZSB7XHJcblx0LW1zLWZsZXg6IDAgMCA1MCU7XHJcbiAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG46aG9zdCBtYXQtc2VsZWN0IDo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvd3tcclxuXHRib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uZGl2IHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoYnRuIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDJyZW07XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJBNkZCMTtcclxufVxyXG5cclxuLmNsZWFyYnRuOmFjdGl2ZSwgLmNsZWFyYnRuOmZvY3VzIHtcclxuXHRjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaGJ0bjpmb2N1cywgLnNlYXJjaGJ0bjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFENUE3RDtcclxufVxyXG5cclxuLmtleXdvcmRzZGl2LCAucHJpY2VkaXYsIC5yZXN1bHRkaXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGQkY2QzU7XHJcblx0cGFkZGluZy10b3A6IGNhbGMoMC41cmVtICsgMXB4KTtcclxuXHRwYWRkaW5nLWJvdHRvbTogY2FsYygwLjVyZW0gKyAxcHgpO1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRtYXJnaW4tYm90dG9tOiBjYWxjKDAuNXJlbSArIDFweCk7XHJcbn1cclxuXHJcbi5zZWFyY2hmb3JtIHtcclxuXHRwYWRkaW5nLWJvdHRvbTogY2FsYygycmVtICsgMXB4KTtcclxufVxyXG5cclxuI3Jlc3VsdHNmb3JkaXYge1xyXG5cdHBhZGRpbmctbGVmdDowO1xyXG59XHJcblxyXG4ucmVzdWx0YmFyIHtcclxuXHRwYWRkaW5nLWJvdHRvbTogMDtcclxuXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdHBhZGRpbmctbGVmdDogMDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZm9udHJlc3VsdGZvciB7XHJcblx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHRsaW5lLWhlaWdodDogMS41cmVtO1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdG1hcmdpbi1yaWdodDogMDtcclxuXHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0cGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLnBhZ2luYXRpb25iYXIge1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdG1hcmdpbi1yaWdodDogMDtcclxuXHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0cGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wYWdpbmF0aW9uYmFyID4gI3BhZ2luYXRpb24gPiB1bCA+IGxpOm5vdCguYWN0aXZlKSA+IGEge1xyXG5cdGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnBhZ2luYXRpb25iYXIgPiAjcGFnaW5hdGlvbiA+IHVsID4gbGkgPiBhIHtcclxuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnBhZ2luYXRpb25iYXIgPiAjcGFnaW5hdGlvbiA+IHVse1xyXG5cdG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wYWdpbmF0aW9uYmFyID4gI3BhZ2luYXRpb24gPiB1bCA+IGxpLmRpc2FibGVkID4gYSB7XHJcblx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXN1bHRsaXN0cyB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNhcmRib2R5IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOERBO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRwYWRkaW5nLWxlZnQ6MDtcclxuXHRwYWRkaW5nLXJpZ2h0OjA7XHJcblx0cGFkZGluZy1ib3R0b206MDtcclxuXHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkaW1nZGl2IHtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC1tcy1mbGV4LXdyYXA6IG5wd3JhcDtcclxuXHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRwYWRkaW5nLWxlZnQ6MC41cmVtO1xyXG5cdHBhZGRpbmctcmlnaHQ6MDtcclxuXHRwYWRkaW5nLWJvdHRvbTowO1xyXG59XHJcblxyXG4uY2FyZGltZyB7XHJcblx0d2lkdGg6IGF1dG87XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdG1hcmdpbi10b3A6IDAuNzVyZW07XHJcblx0cGFkZGluZy1ib3R0b206IDA7XHJcblx0cGFkZGluZy10b3A6IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxufVxyXG5cclxuLmNhcmRkZXRhaWxkaXYge1xyXG5cdHBhZGRpbmctbGVmdDowLjc1cmVtO1xyXG5cdHBhZGRpbmctcmlnaHQ6MC41NXJlbTtcclxuXHRwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNhcmR0aXRsZSB7XHJcblx0Zm9udC1zaXplOiAxLjI1ZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5jYXJkdGl0bGUsIC5jYXJkcHJpY2UsIC5jYXJkbF9iIHtcclxuXHRtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkbF9iIHtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uY2FyZGJ1dHRvbiB7XHJcblx0bGluZS1oZWlnaHQ6IDAuOXJlbTtcclxuXHRmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG4uY2FyZGJ1dHRvbjpmb2N1cyB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxufVxyXG5cclxuLmZvbnRvYmxpcXVlIHtcclxuXHRmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcblxyXG4uZm9udGJvbGQge1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5jYXJkZGV0YWlsbWFpbiB7XHJcblx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uZGV0YWlsdGFiIHtcclxuXHRkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLmRldGFpbGluZm8ge1xyXG5cdGRpc3BsYXk6IHRhYmxlLXJvdztcclxuXHRtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbi5kZXRhaWx0aXRsZSB7XHJcblx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuLmRldGFpbGNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblx0cGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          providers: [_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]]
        }]
      }], function () {
        return [{
          type: _search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
        }];
      }, {
        keywordsdiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['keywordsdiv']
        }],
        pricediv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['pricediv']
        }],
        resultdiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['resultdiv']
        }],
        hrline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['hrline']
        }],
        resultlists: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['resultlists']
        }],
        temp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['card1']
        }],
        printresultdiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['printresultdiv']
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./search.service */
    "./src/app/search.service.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js"); // import { HttpErrorHandler } from './http-error-handler.service';
    // import { MessageService } from './message.service';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_search_service__WEBPACK_IMPORTED_MODULE_10__["SearchService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"] // HttpErrorHandler,
      // MessageService
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"] // HttpErrorHandler,
        // MessageService
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"] // HttpErrorHandler,
          // MessageService
          ],
          providers: [_search_service__WEBPACK_IMPORTED_MODULE_10__["SearchService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/search.service.ts":
  /*!***********************************!*\
    !*** ./src/app/search.service.ts ***!
    \***********************************/

  /*! exports provided: SearchService */

  /***/
  function srcAppSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var SearchService = /*#__PURE__*/function () {
      // constructor(private http: HttpClient,
      // httpErrorHandler: HttpErrorHandler) {
      // this.handleError = httpErrorHandler.createHandleError('SearchService'); 
      // }
      function SearchService(http) {
        _classCallCheck(this, SearchService);

        this.http = http;
        this.searchUrl = 'https://csci571nodejsbackend.wl.r.appspot.com/search?'; // URL to web api
      }
      /* GET heroes whose name contains search term */


      _createClass(SearchService, [{
        key: "searchItems",
        value: function searchItems(params) {
          /* Handle the params */
          var searchUrl = this.searchUrl + params; // this.http.get(searchUrl).subscribe(res=> console.log(res));

          return this.http.get(searchUrl); // .pipe(
          // catchError(this.handleError('searchItems', []))
          // );
        }
      }]);

      return SearchService;
    }();

    SearchService.ɵfac = function SearchService_Factory(t) {
      return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SearchService,
      factory: SearchService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/searchform.ts":
  /*!*******************************!*\
    !*** ./src/app/searchform.ts ***!
    \*******************************/

  /*! exports provided: Searchform */

  /***/
  function srcAppSearchformTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Searchform", function () {
      return Searchform;
    });

    var Searchform = function Searchform() {
      _classCallCheck(this, Searchform);

      this.keywords = null;
      this.MinPrice = null;
      this.MaxPrice = null;
      this.sortOrder = null;
      this.checknew = null;
      this.checkused = null;
      this.checkverygood = null;
      this.checkgood = null;
      this.checkacceptable = null;
      this.ReturnsAcceptedOnly = null;
      this.FreeShippingOnly = null;
      this.ExpeditedShippingType = null;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\11877\Desktop\CSCI571\homework\hw8\EBay-Shopping\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map