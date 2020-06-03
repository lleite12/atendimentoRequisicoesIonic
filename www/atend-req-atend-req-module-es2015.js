(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["atend-req-atend-req-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/atend-req/atend-req.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/atend-req/atend-req.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Atendimento: {{requisicao[\"cod-doc\"]}}</ion-title>\n  </ion-toolbar>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\"><b>Req:</b> {{requisicao[\"nome-req\"]}}</ion-col>\n      <ion-col size=\"4\">{{requisicao[\"data-req\"]}}</ion-col>\n      <ion-col size=\"2\"><b>TP:</b> {{requisicao[\"tipo-req\"]}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"9\">\n        <ion-input type=\"text\" (dblclick)=\"scanCode()\" [(ngModel)]=\"item\" placeholder=\"Item\"></ion-input>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-button (click)=\"selecionar()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Buscar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n\n  <div style=\"overflow-x: scroll; overflow-y: scroll; max-height: 50%\">\n    <table id=\"tableItem\" style=\"min-width: 100%;\">\n      <thead>\n        <tr>\n          <th>Item</th>\n          <th>QTD.Tot</th>\n          <th>Atend</th>\n          <th>Local</th>\n          <th>UM</th>\n        <tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let it of itens\" (click)=\"selItem(it)\" [style.background-color]=\"it == regSel ? '#aff7ff':getColorItem(it)\">\n          <td>{{it[\"it-codigo\"]}}</td>\n          <td>{{it[\"requisitada\"]}}</td>\n          <td>{{it[\"atendida\"]}}</td>\n          <td>{{it[\"loc-item\"]}}</td>\n          <td>{{it[\"un\"]}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <br>\n  <div style=\"overflow-x: scroll; overflow-y: scroll; max-height: 27%;\">\n    <table id=\"tableSaldo\" style=\"min-width: 100%;\">\n      <thead>\n        <tr>\n          <th>Depos.</th>\n          <th>Local</th>\n          <th>Lote</th>\n          <th>QTD.Saldo</th>\n          <th>QTD.atender</th>\n        <tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let s of getSaldo(1)\">\n          <td>{{s[\"cod-depos\"]}}</td>\n          <td>{{s[\"cod-localiz\"]}}</td>\n          <td>{{s[\"lote\"]}}</td>\n          <td>{{s[\"qtd-disp\"]}}</td>\n          <td>\n            <ion-input type=\"number\" min=0 [(ngModel)]=\"s['qtd-atend']\"></ion-input>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div>\n\n    <ion-card>\n      <ion-card-content>\n        {{desc}}\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button (click)=\"Atender(1)\" expand=\"block\" shape=\"round\" color=\"warning\">\n            Parcial\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button (click)=\"Atender(2)\" expand=\"block\" shape=\"round\" color=\"primary\">\n            Total\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/atend-req/atend-req-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/atend-req/atend-req-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AtendReqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtendReqPageRoutingModule", function() { return AtendReqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _atend_req_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atend-req.page */ "./src/app/atend-req/atend-req.page.ts");




const routes = [
    {
        path: '',
        component: _atend_req_page__WEBPACK_IMPORTED_MODULE_3__["AtendReqPage"]
    }
];
let AtendReqPageRoutingModule = class AtendReqPageRoutingModule {
};
AtendReqPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AtendReqPageRoutingModule);



/***/ }),

/***/ "./src/app/atend-req/atend-req.module.ts":
/*!***********************************************!*\
  !*** ./src/app/atend-req/atend-req.module.ts ***!
  \***********************************************/
/*! exports provided: AtendReqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtendReqPageModule", function() { return AtendReqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _atend_req_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./atend-req-routing.module */ "./src/app/atend-req/atend-req-routing.module.ts");
/* harmony import */ var _atend_req_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./atend-req.page */ "./src/app/atend-req/atend-req.page.ts");







let AtendReqPageModule = class AtendReqPageModule {
};
AtendReqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _atend_req_routing_module__WEBPACK_IMPORTED_MODULE_5__["AtendReqPageRoutingModule"]
        ],
        declarations: [_atend_req_page__WEBPACK_IMPORTED_MODULE_6__["AtendReqPage"]]
    })
], AtendReqPageModule);



/***/ }),

/***/ "./src/app/atend-req/atend-req.page.scss":
/*!***********************************************!*\
  !*** ./src/app/atend-req/atend-req.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\ntable {\n  margin: 0 auto;\n  border: 0;\n  box-shadow: 0 5px 30px darkgrey;\n  border-spacing: 0;\n}\ntable thead th {\n  font-weight: bold;\n  background-color: #2584bb;\n  color: white;\n  padding: 5px 10px;\n}\ntable tr td {\n  padding: 5px 10px;\n  text-align: center;\n  cursor: pointer;\n  /**importante para não mostrar cursor de texto**/\n}\ntable tr td:last-child {\n  text-align: right;\n}\n/**Cores**/\ntable tr:nth-child(odd) {\n  background-color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRlbmQtcmVxL2F0ZW5kLXJlcS5wYWdlLnNjc3MiLCJzcmMvYXBwL2F0ZW5kLXJlcS9DOlxcYXBwc1xcYXBwLXNhbm92b1xcQXV0b21hY2FvTWF0ZXJpYWlzL3NyY1xcYXBwXFxhdGVuZC1yZXFcXGF0ZW5kLXJlcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FERUo7QUNDRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7QURDSjtBQ0VFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFBaUIsZ0RBQUE7QURDckI7QUNFRTtFQUNFLGlCQUFBO0FEQ0o7QUNFRSxVQUFBO0FBQ0E7RUFDRSxzQkFBQTtBRENKIiwiZmlsZSI6InNyYy9hcHAvYXRlbmQtcmVxL2F0ZW5kLXJlcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG50YWJsZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggZGFya2dyZXk7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50YWJsZSB0aGVhZCB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU4NGJiO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG50YWJsZSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyoqaW1wb3J0YW50ZSBwYXJhIG7Do28gbW9zdHJhciBjdXJzb3IgZGUgdGV4dG8qKi9cbn1cblxudGFibGUgdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKipDb3JlcyoqL1xudGFibGUgdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufSIsInRhYmxle1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIGJvcmRlcjowO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCBkYXJrZ3JleTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB0aGVhZCB0aHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxMzIsIDE4Nyk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIFxyXG4gICAgcGFkZGluZzo1cHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUgdHIgdGR7XHJcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qKmltcG9ydGFudGUgcGFyYSBuw6NvIG1vc3RyYXIgY3Vyc29yIGRlIHRleHRvKiovXHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHRyIHRkOmxhc3QtY2hpbGR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLyoqQ29yZXMqKi9cclxuICB0YWJsZSB0cjpudGgtY2hpbGQob2RkKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/atend-req/atend-req.page.ts":
/*!*********************************************!*\
  !*** ./src/app/atend-req/atend-req.page.ts ***!
  \*********************************************/
/*! exports provided: AtendReqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtendReqPage", function() { return AtendReqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_6__);

//Desenvolvido por: lucas Leite - INSTI








let AtendReqPage = class AtendReqPage {
    constructor(alertController, navCtrl, barcodeScanner, loadingCtrl, nativeHttp) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.loadingCtrl = loadingCtrl;
        this.nativeHttp = nativeHttp;
        this.headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
        this.token = null;
        this.fazendosinc = null;
        this.itens = [];
        this.saldos = [];
        this.requisicao = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getReg();
        this.testBaseURL = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getBase();
        this.usuario = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getUsuar();
        console.log(this.usuario);
        this.param = `<s11:Envelope xmlns:s11='http://schemas.xmlsoap.org/soap/envelope/'>
      <s11:Body>
        <ns1:userLogin xmlns:ns1='http://service.execbo.ws.framework.totvs.com'>
    <!-- optional -->
          <arg0>super</arg0>
        </ns1:userLogin>
      </s11:Body>
    </s11:Envelope>`;
        this.getDataNative(1);
    }
    erroAlert(header, mes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                subHeader: '',
                message: mes,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentConfirm(header, mes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: header,
                    message: mes,
                    buttons: [
                        {
                            text: 'Não',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                resolve('cancel');
                            }
                        },
                        {
                            text: 'Sim',
                            handler: () => {
                                resolve('ok');
                            }
                        }
                    ]
                });
                alert.present();
            }));
        });
    }
    selItem(linha) {
        this.desc = "";
        this.regSel = linha;
        if (this.regSel != null)
            this.desc = this.regSel.descricao;
        else
            this.desc = "";
    }
    getSaldo(op) {
        if (this.regSel != null) {
            var item = this.regSel["it-codigo"];
            return this.saldos.filter(function (elemente) {
                if (op == 1)
                    return elemente["it-codigo"] == item && elemente["qtd-disp"] > 0;
                else if (op == 2)
                    return elemente["it-codigo"] == item && elemente["qtd-atend"] > 0;
            });
        }
        else
            return [];
    }
    getColorItem(it) {
        var qtd = 0;
        let saldo = this.saldos.filter(function (elemente) {
            return elemente["it-codigo"] == it["it-codigo"];
        });
        if (saldo == null || saldo.length <= 0)
            return "rgb(192, 98, 98)";
        else {
            for (var i in saldo) {
                if (saldo.hasOwnProperty(i)) {
                    qtd = qtd + saldo[i]["qtd-disp"];
                }
            }
            if (qtd >= (it["requisitada"] - it["atendida"]))
                return "rgb(105, 221, 111)";
            else
                return "yellow";
        }
        return "";
    }
    scanCode() {
        this.barcodeScanner
            .scan()
            .then(barcodeData => {
            JSON.stringify(barcodeData);
            this.scannedData = barcodeData;
            this.item = this.scannedData["text"];
            if (this.item != null) {
                this.selecionar();
            }
        })
            .catch(err => {
            console.log("Error", err);
        });
    }
    selecionar() {
        var item = this.item;
        var selecionado = this.itens.find(function (key) {
            if (item != null)
                return key.item == item.toString();
        });
        if (selecionado == null)
            this.erroAlert('Registro não encontrado!', 'Registro não encontrado para o item informado!');
        this.regSel = null;
        this.desc = "";
    }
    ;
    Atender(tipo) {
        this.atender = [];
        var qtd;
        var l_ok = true;
        if (this.regSel == null) {
            this.erroAlert("Nenhum item selecionado!", "Favor selecionar um item antes de fazer o atendimento!");
            return;
        }
        if (tipo == 1) {
            this.presentConfirm("Atendimento Parcial!", "Deseja mesmo atender parcialmente esse item ?").then((res) => {
                if (res == "ok") {
                    this.atender = this.getSaldo(2);
                    if (this.atender.length > 0) {
                        qtd = 0;
                        for (var i in this.atender) {
                            if (this.atender.hasOwnProperty(i)) {
                                if (this.atender[i]["qtd-disp"] < this.atender[i]["qtd-atend"]) {
                                    this.erroAlert("Erro!", "Quantidade informada, maior que a quantidade disponivel no saldo!");
                                    return;
                                }
                                qtd = qtd + this.atender[i]["qtd-atend"];
                            }
                        }
                        if (qtd <= (this.regSel["requisitada"] - this.regSel["atendida"])) {
                            this.getDataNative(2);
                            console.log(this.atender);
                        }
                        else
                            this.erroAlert("Erro!", "Quantidade informada, maior que a quantidade necessária para o atendimento!");
                    }
                    else {
                        this.erroAlert("Quantidade não informada!", "Favor informar a quantidade a atender em algum saldo do item!");
                    }
                }
            });
        }
        else if (tipo == 2) {
            var qtd_aux;
            this.presentConfirm("Atendimento Total!", "Deseja mesmo atender totalmente esse item?").then((res) => {
                if (res == "ok") {
                    this.atender = this.getSaldo(1);
                    if (this.atender.length > 0) {
                        qtd_aux = this.regSel["requisitada"] - this.regSel["atendida"];
                        for (var i in this.atender) {
                            if (this.atender.hasOwnProperty(i)) {
                                this.atender[i]["qtd-atend"] = 0;
                                if (qtd_aux > 0) {
                                    qtd_aux = qtd_aux - this.atender[i]["qtd-disp"];
                                    if (qtd_aux <= 0) {
                                        this.atender[i]["qtd-atend"] = qtd_aux + this.atender[i]["qtd-disp"];
                                    }
                                    else
                                        this.atender[i]["qtd-atend"] = this.atender[i]["qtd-disp"];
                                }
                            }
                        }
                        this.atender = [];
                        this.atender = this.getSaldo(2);
                        if (this.atender.length > 0 && qtd_aux <= 0) {
                            this.getDataNative(2);
                            //console.log(this.atender);
                        }
                        else {
                            for (var i in this.atender) {
                                if (this.atender.hasOwnProperty(i)) {
                                    this.atender[i]["qtd-atend"] = 0;
                                }
                            }
                            this.erroAlert("Saldo insuficiente!", "Não existe saldo suficiente para atender totalmente o item selecionado!");
                        }
                    }
                    else
                        this.erroAlert("Saldo insuficiente!", "Não existe saldo suficiente para atender totalmente o item selecionado!");
                }
            });
        }
    }
    getDataNative(op) {
        this.nativeHttp.setDataSerializer('utf8');
        let nativeCall = this.nativeHttp.post(this.testBaseURL, this.param, {
            'Content-Type': 'text/xml'
        }).then(data => {
            this.showSpinner();
            let aux = data.data;
            this.convertXmltoJson(aux, op);
        }).catch(err => {
            this.hideSpinner();
            this.erroAlert("Erro na conexão!", "Houveram problemas na conexão com o webservice, favor verificar se está conectado na rede wifi/VPN correta ou verificar com a T.I!");
        });
        this.hideSpinner();
    }
    convertXmltoJson(data, op) {
        xml2js__WEBPACK_IMPORTED_MODULE_6___default.a.parseString(data, { explicitArray: false }, (error, result) => {
            if (error) {
                throw new Error(error);
            }
            else {
                this.token = result["env:Envelope"]["env:Body"]["ns2:userLoginResponse"].return;
                if (op == 1)
                    this.getCallProcedureCons();
                else
                    this.getCallProcedureAtend();
            }
        });
    }
    getCallProcedureCons() {
        this.itens = [];
        this.saldos = [];
        this.param2 = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.execbo.ws.framework.totvs.com">
                  <soapenv:Header/>
                  <soapenv:Body>
                    <ser:callProcedureWithToken>
                        <!--Optional:-->
                        <arg0>` + this.token + `</arg0>
                        <!--Optional:-->
                        <arg1>esp/esapp001.p</arg1>
                        <!--Optional:-->
                        <arg2>pi-item-requisicao</arg2>
                        <!--Optional:-->
                        <arg3>
                        [
                        {"dataType":"integer","name":"p-cod-doc","type":"input","value":` + this.requisicao["cod-doc"] + `},
                        {"dataType":"character","name":"p-tipo-req","type":"input","value":"` + this.requisicao["tipo-req"] + `"},
                        {"dataType":"character","name":"p-c-ret","type":"output"},
                        {"dataType":"temptable","name":"tt-saldo-item","type":"output","value":{"name":"tt-saldo-item","fields":[
                                          {"name":"it-codigo","label":"it-codigo","type":"character"},
                                          {"name":"cod-depos","label":"cod-depos","type":"character"},                                
                                          {"name":"cod-estabel","label":"cod-estabel","type":"character"},
                                          {"name":"cod-localiz","label":"cod-localiz","type":"character"},
                                          {"name":"lote","label":"lote","type":"character"},
                                          {"name":"dt-vali-lote","label":"dt-vali-lote","type":"date"},
                                          {"name":"qtd-disp","label":"qtd-disp","type":"decimal"},
                                          {"name":"qtd-atend","label":"qtd-atend","type":"decimal"}
                          ],"records":[]}},		 
                          {"dataType":"temptable","name":"tt-item-req","type":"output","value":{"name":"tt-item-req","fields":[
                                          {"name":"nr-doc","label":"nr-doc","type":"integer"},
                                          {"name":"it-codigo","label":"it-codigo","type":"character"},
                                          {"name":"descricao","label":"descricao","type":"character"},
                                          {"name":"un","label":"un","type":"character"},
                                          {"name":"requisitada","label":"requisitada","type":"decimal"},
                                          {"name":"atendida","label":"atendida","type":"decimal"},
                                          {"name":"sequencia","label":"sequencia","type":"integer"},
                                          {"name":"loc-item","label":"loc-item","type":"character"},
                                          {"name":"cod-dep","label":"cod-dep","type":"character"},
                                          {"name":"cod-estabel","label":"cod-estabel","type":"character"}
                          ],"records":[]}}
                    ]
                        </arg3>
                    </ser:callProcedureWithToken>
                  </soapenv:Body>
              </soapenv:Envelope>`;
        this.nativeHttp.setDataSerializer('utf8');
        let nativeCall = this.nativeHttp.post(this.testBaseURL, this.param2, {
            'Content-Type': 'text/xml'
        }).then(data => {
            // this.fazendosinc = "Sincronizando o sistema... Aguarde!";
            console.log("Dados:" + data.data);
            let aux = data.data;
            xml2js__WEBPACK_IMPORTED_MODULE_6___default.a.parseString(aux, { explicitArray: false }, (error, result) => {
                if (error) {
                    throw new Error(error);
                }
                else {
                    this.resultados = result["env:Envelope"]["env:Body"]["ns2:callProcedureWithTokenResponse"].return;
                    console.log("resultados:" + this.resultados);
                    let encontrou = 0;
                    this.retorno = JSON.parse(this.resultados);
                    console.log(this.retorno);
                    this.VALUE1 = JSON.parse(this.retorno[2].value);
                    this.VALUE2 = JSON.parse(this.retorno[1].value);
                    this.VALUE1.records.forEach(dtitens => {
                        encontrou = 1;
                        this.itens.push(dtitens);
                    });
                    this.VALUE2.records.forEach(dtsaldos => {
                        this.saldos.push(dtsaldos);
                    });
                    this.hideSpinner();
                    if (encontrou == 0) {
                        this.navCtrl.navigateBack("consReq");
                    }
                }
            });
        }).catch(err => {
            this.hideSpinner();
            this.erroAlert("ERRO!", err);
        });
    }
    getCallProcedureAtend() {
        var l_ok = "";
        var tam;
        tam = this.atender.length - 1;
        l_ok = "";
        for (var i in this.atender) {
            if (this.atender.hasOwnProperty(i)) {
                this.param2 = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.execbo.ws.framework.totvs.com">
                      <soapenv:Header/>
                      <soapenv:Body>
                        <ser:callProcedureWithToken>
                            <!--Optional:-->
                            <arg0>` + this.token + `</arg0>
                            <!--Optional:-->
                            <arg1>esp/esapp001.p</arg1>
                            <!--Optional:-->
                            <arg2>pi-atend-req</arg2>
                            <!--Optional:-->
                            <arg3>
                            [
                                    {"dataType":"integer","name":"p-cod-doc","type":"input","value":` + this.requisicao["cod-doc"] + `},
                                    {"dataType":"character","name":"p-tipo-req","type":"input","value":"` + this.requisicao["tipo-req"] + `"},
                                    {"dataType":"integer","name":"p-sequen","type":"input", "value":` + this.regSel["sequencia"] + `},
                                    {"dataType":"temptable","name":"tt-atend-req","type":"input","value":{"name":"tt-atend-req","fields":[
                                                  {"name":"cod-doc","label":"cod-doc","type":"integer"},
                                                  {"name":"tipo-req","label":"tipo-req","type":"character"},
                                                  {"name":"it-codigo","label":"it-codigo","type":"character"},
                                                  {"name":"cod-depos","label":"cod-depos","type":"character"},
                                                  {"name":"cod-estabel","label":"cod-estabel","type":"character"},
                                                  {"name":"cod-localiz","label":"cod-localiz","type":"character"},
                                                  {"name":"lote","label":"lote","type":"character"},
                                                  {"name":"dt-vali-lote","label":"dt-vali-lote","type":"date"},
                                                  {"name":"qtd-atend","label":"qtd-atend","type":"decimal"},
                                                  {"name":"qtd-req","label":"qtd-req","type":"decimal"},
                                                  {"name":"usuario","label":"usuario","type":"character"},
                                                  
                                                        
                                    ],"records":[
                        {"cod-doc":` + this.requisicao["cod-doc"] + `, "tipo-req":"` + this.requisicao["tipo-req"] + `", "it-codigo":"` + this.atender[i]["it-codigo"] + `", "cod-depos":"` + this.atender[i]["cod-depos"] + `", "cod-estabel":"` + this.atender[i]["cod-estabel"] + `", "cod-localiz":"` + this.atender[i]["cod-localiz"] + `", "lote":"` + this.atender[i]["lote"] + `", "dt-vali-lote":"` + this.atender[i]["dt-vali-lote"] + `", "qtd-atend":` + this.atender[i]["qtd-atend"] + `, "qtd-req":` + this.regSel["requisitada"] + `, "usuario":"` + this.usuario + `"}
                        ]}},
                        {"dataType":"temptable","name":"tt-ret","type":"output","value":{"name":"tt-ret","fields":[
                                                  {"name":"cod","label":"cod","type":"integer"},
                                                  {"name":"chave","label":"chave","type":"character"},
                                                  {"name":"tipo","label":"tipo","type":"integer"},
                                                  {"name":"c-desc","label":"c-desc","type":"character"}
                                    ],"records":[]}}
                        ]
                            </arg3>
                        </ser:callProcedureWithToken>
                      </soapenv:Body>
                  </soapenv:Envelope>`;
                this.nativeHttp.setDataSerializer('utf8');
                let nativeCall = this.nativeHttp.post(this.testBaseURL, this.param2, {
                    'Content-Type': 'text/xml'
                }).then(data => {
                    // this.fazendosinc = "Sincronizando o sistema... Aguarde!";
                    let aux = data.data;
                    var c_ret;
                    xml2js__WEBPACK_IMPORTED_MODULE_6___default.a.parseString(aux, { explicitArray: false }, (error, result) => {
                        if (error) {
                            throw new Error(error);
                        }
                        else {
                            this.resultados = result["env:Envelope"]["env:Body"]["ns2:callProcedureWithTokenResponse"].return;
                            this.retorno = JSON.parse(this.resultados);
                            //console.log(this.retorno);
                            this.VALUE1 = JSON.parse(this.retorno[0].value);
                            this.VALUE1.records.forEach(dtRet => {
                                c_ret = dtRet["c-desc"];
                            });
                            if (c_ret != "OK") {
                                this.erroAlert("Erro!", c_ret);
                            }
                            else
                                l_ok = "ok";
                            if (i == tam)
                                this.hideSpinner();
                            if (l_ok == "ok" && i == tam) {
                                this.erroAlert("Atendimento realizado!", "");
                                this.getDataNative(1);
                                this.regSel = null;
                                this.getSaldo(1);
                            }
                        }
                    });
                }).catch(err => {
                    this.hideSpinner();
                    this.erroAlert("ERRO!", err);
                });
            }
        }
    }
    ngOnInit() {
    }
    showSpinner() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: "Aguarde...",
                spinner: "circles",
            });
            this.loading.present();
        });
    }
    hideSpinner() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading.dismiss();
        });
    }
};
AtendReqPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] }
];
AtendReqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-atend-req',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./atend-req.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/atend-req/atend-req.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./atend-req.page.scss */ "./src/app/atend-req/atend-req.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]])
], AtendReqPage);



/***/ })

}]);
//# sourceMappingURL=atend-req-atend-req-module-es2015.js.map