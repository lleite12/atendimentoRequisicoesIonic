(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["params-params-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/params/params.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/params/params.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Parâmetros</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label position=\"floating\">Estebelecimento</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"estabel\" name=\"estabel\" id=\"estabel\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Webservice</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"webservice\" name=\"web\" id=\"web\"></ion-input>\n  </ion-item>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"updateData()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Salvar\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/params/params-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/params/params-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ParamsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamsPageRoutingModule", function() { return ParamsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _params_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./params.page */ "./src/app/params/params.page.ts");




const routes = [
    {
        path: '',
        component: _params_page__WEBPACK_IMPORTED_MODULE_3__["ParamsPage"]
    }
];
let ParamsPageRoutingModule = class ParamsPageRoutingModule {
};
ParamsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ParamsPageRoutingModule);



/***/ }),

/***/ "./src/app/params/params.module.ts":
/*!*****************************************!*\
  !*** ./src/app/params/params.module.ts ***!
  \*****************************************/
/*! exports provided: ParamsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamsPageModule", function() { return ParamsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _params_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./params-routing.module */ "./src/app/params/params-routing.module.ts");
/* harmony import */ var _params_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./params.page */ "./src/app/params/params.page.ts");







let ParamsPageModule = class ParamsPageModule {
};
ParamsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _params_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParamsPageRoutingModule"]
        ],
        declarations: [_params_page__WEBPACK_IMPORTED_MODULE_6__["ParamsPage"]]
    })
], ParamsPageModule);



/***/ }),

/***/ "./src/app/params/params.page.scss":
/*!*****************************************!*\
  !*** ./src/app/params/params.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmFtcy9wYXJhbXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/params/params.page.ts":
/*!***************************************!*\
  !*** ./src/app/params/params.page.ts ***!
  \***************************************/
/*! exports provided: ParamsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamsPage", function() { return ParamsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");

//Desenvolvido por: lucas Leite - INSTI





let ParamsPage = class ParamsPage {
    constructor(navCtrl, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.toast = toast;
        this.getCurrentData(1);
    }
    getCurrentData(id) {
        this.sqlite.create({
            name: 'sanovo.db',
            location: 'default'
        }).then((db) => {
            db.executeSql('select * from param_gerais where id = ?', [id])
                .then(res => {
                this.webservice = res.rows.item(0).web;
                this.estabel = res.rows.item(0).estabel;
            })
                .catch(e => {
                console.log(e);
                this.toast.show(e, '5000', 'center').subscribe(toast => {
                    console.log(toast);
                });
            });
        }).catch(e => {
            console.log(e);
            this.toast.show(e, '5000', 'center').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    updateData() {
        this.sqlite.create({
            name: 'sanovo.db',
            location: 'default'
        }).then((db) => {
            db.executeSql('UPDATE param_gerais SET web=?,estabel=? WHERE id=?', [this.webservice, this.estabel, 1])
                .then(res => {
                console.log(res);
                this.toast.show('Dados atualizados', '5000', 'center').subscribe(toast => {
                    _app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"].setParams(this.webservice, this.estabel);
                    this.navCtrl.navigateBack("login");
                });
            })
                .catch(e => {
                console.log(e);
                this.toast.show(e, '5000', 'center').subscribe(toast => {
                    console.log(toast);
                });
            });
        }).catch(e => {
            console.log(e);
            this.toast.show(e, '5000', 'center').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    ngOnInit() {
    }
};
ParamsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__["SQLite"] },
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__["Toast"] }
];
ParamsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-params',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./params.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/params/params.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./params.page.scss */ "./src/app/params/params.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__["SQLite"],
        _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_5__["Toast"]])
], ParamsPage);



/***/ })

}]);
//# sourceMappingURL=params-params-module-es2015.js.map