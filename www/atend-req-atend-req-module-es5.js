function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["atend-req-atend-req-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/atend-req/atend-req.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/atend-req/atend-req.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAtendReqAtendReqPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Atendimento: {{requisicao[\"cod-doc\"]}}</ion-title>\n  </ion-toolbar>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\"><b>Req:</b> {{requisicao[\"nome-req\"]}}</ion-col>\n      <ion-col size=\"4\">{{requisicao[\"data-req\"]}}</ion-col>\n      <ion-col size=\"2\"><b>TP:</b> {{requisicao[\"tipo-req\"]}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"9\">\n        <ion-input type=\"text\" (dblclick)=\"scanCode()\" [(ngModel)]=\"item\" placeholder=\"Item\"></ion-input>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-button (click)=\"selecionar()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Buscar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n\n  <div style=\"overflow-x: scroll; overflow-y: scroll; max-height: 50%\">\n    <table id=\"tableItem\" style=\"min-width: 100%;\">\n      <thead>\n        <tr>\n          <th>Item</th>\n          <th>QTD.Tot</th>\n          <th>Atend</th>\n          <th>Local</th>\n          <th>UM</th>\n        <tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let it of itens\" (click)=\"selItem(it)\" [style.background-color]=\"it == regSel ? '#aff7ff':getColorItem(it)\">\n          <td>{{it[\"it-codigo\"]}}</td>\n          <td>{{it[\"requisitada\"]}}</td>\n          <td>{{it[\"atendida\"]}}</td>\n          <td>{{it[\"loc-item\"]}}</td>\n          <td>{{it[\"un\"]}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <br>\n  <div style=\"overflow-x: scroll; overflow-y: scroll; max-height: 27%;\">\n    <table id=\"tableSaldo\" style=\"min-width: 100%;\">\n      <thead>\n        <tr>\n          <th>Depos.</th>\n          <th>Local</th>\n          <th>Lote</th>\n          <th>QTD.Saldo</th>\n          <th>QTD.atender</th>\n        <tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let s of getSaldo(1)\">\n          <td>{{s[\"cod-depos\"]}}</td>\n          <td>{{s[\"cod-localiz\"]}}</td>\n          <td>{{s[\"lote\"]}}</td>\n          <td>{{s[\"qtd-disp\"]}}</td>\n          <td>\n            <ion-input type=\"number\" [(ngModel)]=\"s['qtd-atend']\"></ion-input>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div>\n\n    <ion-card>\n      <ion-card-content>\n        {{desc}}\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button (click)=\"Atender(1)\" expand=\"block\" shape=\"round\" color=\"warning\">\n            Parcial\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button (click)=\"Atender(2)\" expand=\"block\" shape=\"round\" color=\"primary\">\n            Total\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/atend-req/atend-req-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/atend-req/atend-req-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: AtendReqPageRoutingModule */

  /***/
  function srcAppAtendReqAtendReqRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AtendReqPageRoutingModule", function () {
      return AtendReqPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _atend_req_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./atend-req.page */
    "./src/app/atend-req/atend-req.page.ts");

    var routes = [{
      path: '',
      component: _atend_req_page__WEBPACK_IMPORTED_MODULE_3__["AtendReqPage"]
    }];

    var AtendReqPageRoutingModule = function AtendReqPageRoutingModule() {
      _classCallCheck(this, AtendReqPageRoutingModule);
    };

    AtendReqPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AtendReqPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/atend-req/atend-req.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/atend-req/atend-req.module.ts ***!
    \***********************************************/

  /*! exports provided: AtendReqPageModule */

  /***/
  function srcAppAtendReqAtendReqModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AtendReqPageModule", function () {
      return AtendReqPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _atend_req_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./atend-req-routing.module */
    "./src/app/atend-req/atend-req-routing.module.ts");
    /* harmony import */


    var _atend_req_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./atend-req.page */
    "./src/app/atend-req/atend-req.page.ts");

    var AtendReqPageModule = function AtendReqPageModule() {
      _classCallCheck(this, AtendReqPageModule);
    };

    AtendReqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _atend_req_routing_module__WEBPACK_IMPORTED_MODULE_5__["AtendReqPageRoutingModule"]],
      declarations: [_atend_req_page__WEBPACK_IMPORTED_MODULE_6__["AtendReqPage"]]
    })], AtendReqPageModule);
    /***/
  },

  /***/
  "./src/app/atend-req/atend-req.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/atend-req/atend-req.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAtendReqAtendReqPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\ntable {\n  margin: 0 auto;\n  border: 0;\n  box-shadow: 0 5px 30px darkgrey;\n  border-spacing: 0;\n}\ntable thead th {\n  font-weight: bold;\n  background-color: #2584bb;\n  color: white;\n  padding: 5px 10px;\n}\ntable tr td {\n  padding: 5px 10px;\n  text-align: center;\n  cursor: pointer;\n  /**importante para não mostrar cursor de texto**/\n}\ntable tr td:last-child {\n  text-align: right;\n}\n/**Cores**/\ntable tr:nth-child(odd) {\n  background-color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRlbmQtcmVxL2F0ZW5kLXJlcS5wYWdlLnNjc3MiLCJzcmMvYXBwL2F0ZW5kLXJlcS9DOlxcYXBwc1xcYXBwLXNhbm92b1xcYXBwUmVxL3NyY1xcYXBwXFxhdGVuZC1yZXFcXGF0ZW5kLXJlcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FERUo7QUNDRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7QURDSjtBQ0VFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFBaUIsZ0RBQUE7QURDckI7QUNFRTtFQUNFLGlCQUFBO0FEQ0o7QUNFRSxVQUFBO0FBQ0E7RUFDRSxzQkFBQTtBRENKIiwiZmlsZSI6InNyYy9hcHAvYXRlbmQtcmVxL2F0ZW5kLXJlcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG50YWJsZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggZGFya2dyZXk7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50YWJsZSB0aGVhZCB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU4NGJiO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG50YWJsZSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyoqaW1wb3J0YW50ZSBwYXJhIG7Do28gbW9zdHJhciBjdXJzb3IgZGUgdGV4dG8qKi9cbn1cblxudGFibGUgdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKipDb3JlcyoqL1xudGFibGUgdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufSIsInRhYmxle1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIGJvcmRlcjowO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCBkYXJrZ3JleTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB0aGVhZCB0aHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxMzIsIDE4Nyk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIFxyXG4gICAgcGFkZGluZzo1cHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUgdHIgdGR7XHJcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qKmltcG9ydGFudGUgcGFyYSBuw6NvIG1vc3RyYXIgY3Vyc29yIGRlIHRleHRvKiovXHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHRyIHRkOmxhc3QtY2hpbGR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLyoqQ29yZXMqKi9cclxuICB0YWJsZSB0cjpudGgtY2hpbGQob2RkKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgfVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/atend-req/atend-req.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/atend-req/atend-req.page.ts ***!
    \*********************************************/

  /*! exports provided: AtendReqPage */

  /***/
  function srcAppAtendReqAtendReqPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AtendReqPage", function () {
      return AtendReqPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var xml2js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! xml2js */
    "./node_modules/xml2js/lib/xml2js.js");
    /* harmony import */


    var xml2js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_6__); //Desenvolvido por: lucas Leite - INSTI


    var AtendReqPage = /*#__PURE__*/function () {
      function AtendReqPage(alertController, navCtrl, barcodeScanner, loadingCtrl, nativeHttp) {
        _classCallCheck(this, AtendReqPage);

        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.loadingCtrl = loadingCtrl;
        this.nativeHttp = nativeHttp;
        this.headers = new Headers({
          "Content-Type": "application/x-www-form-urlencoded"
        });
        this.token = null;
        this.fazendosinc = null;
        this.itens = [
          /*{ "nr-doc": '190032', "it-codigo": 'teste1', requisitada: 100, atendida: 20, "loc-item": "xs-td", un: "PC", descricao: "teste1" },
          { "nr-doc": '190032', "it-codigo": 'teste2', requisitada: 100, atendida: 20, "loc-item": "xs-td", un: "PC", descricao: "teste2" },
          { "nr-doc": '190032', "it-codigo": 'teste3', requisitada: 100, atendida: 20, "loc-item": "xs-td", un: "PC", descricao: "teste3" },
          { "nr-doc": '190032', "it-codigo": 'teste4', requisitada: 100, atendida: 20, "loc-item": "xs-td", un: "PC", descricao: "teste4" },
          { "nr-doc": '190032', "it-codigo": 'teste5', requisitada: 100, atendida: 20, "loc-item": "xs-td", un: "PC", descricao: "teste5" },
          { "nr-doc": '190032', "it-codigo": 'teste6', requisitada: 100, atendida: 20, "loc-item": "xs-td", un: "PC", descricao: "teste6" }*/
        ];
        this.saldos = [
          /* { "it-codigo": 'teste1', local: 'xs-tfr', lote: "12345", saldo: 50, qtd: 0 },
           { "it-codigo": 'teste1', local: 'xs-hfr', lote: "12345", saldo: 40, qtd: 0 },
           { "it-codigo": 'teste1', local: 'xs-hfk', lote: "12345", saldo: 50, qtd: 0 },
           { "it-codigo": 'teste2', local: 'xs-tfr', lote: "12345", saldo: 1000, qtd: 0 }*/
        ];
        this.requisicao = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getReg();
        this.testBaseURL = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getBase();
        this.usuario = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getUsuar();
        console.log(this.usuario);
        this.param = "<s11:Envelope xmlns:s11='http://schemas.xmlsoap.org/soap/envelope/'>\n      <s11:Body>\n        <ns1:userLogin xmlns:ns1='http://service.execbo.ws.framework.totvs.com'>\n    <!-- optional -->\n          <arg0>super</arg0>\n        </ns1:userLogin>\n      </s11:Body>\n    </s11:Envelope>";
        this.getDataNative(1);
      }

      _createClass(AtendReqPage, [{
        key: "erroAlert",
        value: function erroAlert(header, mes) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: header,
                      subHeader: '',
                      message: mes,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentConfirm",
        value: function presentConfirm(header, mes) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", new Promise(function (resolve) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return this.alertController.create({
                                  header: header,
                                  message: mes,
                                  buttons: [{
                                    text: 'Não',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function handler() {
                                      resolve('cancel');
                                    }
                                  }, {
                                    text: 'Sim',
                                    handler: function handler() {
                                      resolve('ok');
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context2.sent;
                                alert.present();

                              case 4:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "selItem",
        value: function selItem(linha) {
          this.desc = "";
          this.regSel = linha;
          if (this.regSel != null) this.desc = this.regSel.descricao;else this.desc = "";
        }
      }, {
        key: "getSaldo",
        value: function getSaldo(op) {
          if (this.regSel != null) {
            var item = this.regSel["it-codigo"];
            return this.saldos.filter(function (elemente) {
              if (op == 1) return elemente["it-codigo"] == item && elemente["qtd-disp"] > 0;else if (op == 2) return elemente["it-codigo"] == item && elemente["qtd-atend"] > 0;
            });
          } else return [];
        }
      }, {
        key: "getColorItem",
        value: function getColorItem(it) {
          var qtd = 0;
          var saldo = this.saldos.filter(function (elemente) {
            return elemente["it-codigo"] == it["it-codigo"];
          });
          if (saldo == null || saldo.length <= 0) return "rgb(192, 98, 98)";else {
            for (var i in saldo) {
              if (saldo.hasOwnProperty(i)) {
                qtd = qtd + saldo[i]["qtd-disp"];
              }
            }

            if (qtd >= it["requisitada"] - it["atendida"]) return "green";else return "yellow";
          }
          return "";
        }
      }, {
        key: "scanCode",
        value: function scanCode() {
          var _this2 = this;

          this.barcodeScanner.scan().then(function (barcodeData) {
            JSON.stringify(barcodeData);
            _this2.scannedData = barcodeData;
            _this2.item = _this2.scannedData["text"];

            if (_this2.item != null) {
              _this2.selecionar();
            }
          })["catch"](function (err) {
            console.log("Error", err);
          });
        }
      }, {
        key: "selecionar",
        value: function selecionar() {
          var item = this.item;
          var selecionado = this.itens.find(function (key) {
            if (item != null) return key.item == item.toString();
          });
          if (selecionado == null) this.erroAlert('Registro não encontrado!', 'Registro não encontrado para o item informado!');
          this.regSel = null;
          this.desc = "";
        }
      }, {
        key: "Atender",
        value: function Atender(tipo) {
          var _this3 = this;

          this.atender = [];
          var qtd;

          if (this.regSel == null) {
            this.erroAlert("Nenhum item selecionado!", "Favor selecionar um item antes de fazer o atendimento!");
            return;
          }

          if (tipo == 1) {
            this.presentConfirm("Atendimento Parcial!", "Deseja mesmo atender parcialmente esse item ?").then(function (res) {
              if (res == "ok") {
                _this3.atender = _this3.getSaldo(2);

                if (_this3.atender.length > 0) {
                  qtd = 0;

                  for (var i in _this3.atender) {
                    if (_this3.atender.hasOwnProperty(i)) {
                      qtd = qtd + _this3.atender[i]["qtd-atend"];
                    }
                  }

                  if (qtd <= _this3.regSel["requisitada"] - _this3.regSel["atendida"]) {
                    _this3.getDataNative(2);

                    console.log(_this3.atender);
                  } else _this3.erroAlert("Erro!", "Quantidade informada, maior que a quantidade necessária para o atendimento!");
                } else {
                  _this3.erroAlert("Quantidade não informada!", "Favor informar a quantidade a atender em algum saldo do item!");
                }
              }
            });
          } else if (tipo == 2) {
            var qtd_aux;
            this.presentConfirm("Atendimento Total!", "Deseja mesmo atender totalmente esse item?").then(function (res) {
              if (res == "ok") {
                _this3.atender = _this3.getSaldo(1);

                if (_this3.atender.length > 0) {
                  qtd_aux = _this3.regSel["requisitada"] - _this3.regSel["atendida"];

                  for (var i in _this3.atender) {
                    if (_this3.atender.hasOwnProperty(i)) {
                      _this3.atender[i]["qtd-atend"] = 0;

                      if (qtd_aux > 0) {
                        qtd_aux = qtd_aux - _this3.atender[i]["qtd-disp"];

                        if (qtd_aux <= 0) {
                          _this3.atender[i]["qtd-atend"] = qtd_aux + _this3.atender[i]["qtd-disp"];
                        } else _this3.atender[i]["qtd-atend"] = _this3.atender[i]["qtd-disp"];
                      }
                    }
                  }

                  _this3.atender = [];
                  _this3.atender = _this3.getSaldo(2);

                  if (_this3.atender.length > 0 && qtd_aux <= 0) {
                    _this3.getDataNative(2); //console.log(this.atender);

                  } else {
                    for (var i in _this3.atender) {
                      if (_this3.atender.hasOwnProperty(i)) {
                        _this3.atender[i]["qtd-atend"] = 0;
                      }
                    }

                    _this3.erroAlert("Saldo insuficiente!", "Não existe saldo suficiente para atender totalmente o item selecionado!");
                  }
                } else _this3.erroAlert("Saldo insuficiente!", "Não existe saldo suficiente para atender totalmente o item selecionado!");
              }
            });
          }
        }
      }, {
        key: "getDataNative",
        value: function getDataNative(op) {
          var _this4 = this;

          this.nativeHttp.setDataSerializer('utf8');
          var nativeCall = this.nativeHttp.post(this.testBaseURL, this.param, {
            'Content-Type': 'text/xml'
          }).then(function (data) {
            _this4.showSpinner();

            var aux = data.data;

            _this4.convertXmltoJson(aux, op);
          })["catch"](function (err) {
            _this4.hideSpinner();

            _this4.erroAlert("Erro na conexão!", "Houveram problemas na conexão com o webservice, favor verificar se está conectado na rede wifi/VPN correta ou verificar com a T.I!");
          });
          this.hideSpinner();
        }
      }, {
        key: "convertXmltoJson",
        value: function convertXmltoJson(data, op) {
          var _this5 = this;

          xml2js__WEBPACK_IMPORTED_MODULE_6___default.a.parseString(data, {
            explicitArray: false
          }, function (error, result) {
            if (error) {
              throw new Error(error);
            } else {
              _this5.token = result["env:Envelope"]["env:Body"]["ns2:userLoginResponse"]["return"];
              if (op == 1) _this5.getCallProcedureCons();else _this5.getCallProcedureAtend();
            }
          });
        }
      }, {
        key: "getCallProcedureCons",
        value: function getCallProcedureCons() {
          var _this6 = this;

          this.itens = [];
          this.saldos = [];
          this.param2 = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ser=\"http://service.execbo.ws.framework.totvs.com\">\n                  <soapenv:Header/>\n                  <soapenv:Body>\n                    <ser:callProcedureWithToken>\n                        <!--Optional:-->\n                        <arg0>" + this.token + "</arg0>\n                        <!--Optional:-->\n                        <arg1>esp/esapp001.p</arg1>\n                        <!--Optional:-->\n                        <arg2>pi-item-requisicao</arg2>\n                        <!--Optional:-->\n                        <arg3>\n                        [\n                        {\"dataType\":\"integer\",\"name\":\"p-cod-doc\",\"type\":\"input\",\"value\":" + this.requisicao["cod-doc"] + "},\n                        {\"dataType\":\"character\",\"name\":\"p-tipo-req\",\"type\":\"input\",\"value\":\"" + this.requisicao["tipo-req"] + "\"},\n                        {\"dataType\":\"character\",\"name\":\"p-c-ret\",\"type\":\"output\"},\n                        {\"dataType\":\"temptable\",\"name\":\"tt-saldo-item\",\"type\":\"output\",\"value\":{\"name\":\"tt-saldo-item\",\"fields\":[\n                                          {\"name\":\"it-codigo\",\"label\":\"it-codigo\",\"type\":\"character\"},\n                                          {\"name\":\"cod-depos\",\"label\":\"cod-depos\",\"type\":\"character\"},                                \n                                          {\"name\":\"cod-estabel\",\"label\":\"cod-estabel\",\"type\":\"character\"},\n                                          {\"name\":\"cod-localiz\",\"label\":\"cod-localiz\",\"type\":\"character\"},\n                                          {\"name\":\"lote\",\"label\":\"lote\",\"type\":\"character\"},\n                                          {\"name\":\"dt-vali-lote\",\"label\":\"dt-vali-lote\",\"type\":\"date\"},\n                                          {\"name\":\"qtd-disp\",\"label\":\"qtd-disp\",\"type\":\"decimal\"},\n                                          {\"name\":\"qtd-atend\",\"label\":\"qtd-atend\",\"type\":\"decimal\"}\n                          ],\"records\":[]}},\t\t \n                          {\"dataType\":\"temptable\",\"name\":\"tt-item-req\",\"type\":\"output\",\"value\":{\"name\":\"tt-item-req\",\"fields\":[\n                                          {\"name\":\"nr-doc\",\"label\":\"nr-doc\",\"type\":\"integer\"},\n                                          {\"name\":\"it-codigo\",\"label\":\"it-codigo\",\"type\":\"character\"},\n                                          {\"name\":\"descricao\",\"label\":\"descricao\",\"type\":\"character\"},\n                                          {\"name\":\"un\",\"label\":\"un\",\"type\":\"character\"},\n                                          {\"name\":\"requisitada\",\"label\":\"requisitada\",\"type\":\"decimal\"},\n                                          {\"name\":\"atendida\",\"label\":\"atendida\",\"type\":\"decimal\"},\n                                          {\"name\":\"sequencia\",\"label\":\"sequencia\",\"type\":\"integer\"},\n                                          {\"name\":\"loc-item\",\"label\":\"loc-item\",\"type\":\"character\"},\n                                          {\"name\":\"cod-dep\",\"label\":\"cod-dep\",\"type\":\"character\"},\n                                          {\"name\":\"cod-estabel\",\"label\":\"cod-estabel\",\"type\":\"character\"}\n                          ],\"records\":[]}}\n                    ]\n                        </arg3>\n                    </ser:callProcedureWithToken>\n                  </soapenv:Body>\n              </soapenv:Envelope>";
          this.nativeHttp.setDataSerializer('utf8');
          var nativeCall = this.nativeHttp.post(this.testBaseURL, this.param2, {
            'Content-Type': 'text/xml'
          }).then(function (data) {
            // this.fazendosinc = "Sincronizando o sistema... Aguarde!";
            console.log("Dados:" + data.data);
            var aux = data.data;
            xml2js__WEBPACK_IMPORTED_MODULE_6___default.a.parseString(aux, {
              explicitArray: false
            }, function (error, result) {
              if (error) {
                throw new Error(error);
              } else {
                _this6.resultados = result["env:Envelope"]["env:Body"]["ns2:callProcedureWithTokenResponse"]["return"];
                console.log("resultados:" + _this6.resultados);
                var encontrou = 0;
                _this6.retorno = JSON.parse(_this6.resultados);
                console.log(_this6.retorno);
                _this6.VALUE1 = JSON.parse(_this6.retorno[2].value);
                _this6.VALUE2 = JSON.parse(_this6.retorno[1].value);

                _this6.VALUE1.records.forEach(function (dtitens) {
                  encontrou = 1;

                  _this6.itens.push(dtitens);
                });

                _this6.VALUE2.records.forEach(function (dtsaldos) {
                  _this6.saldos.push(dtsaldos);
                });

                _this6.hideSpinner();

                if (encontrou == 0) {
                  _this6.navCtrl.navigateBack("consReq");
                }
              }
            });
          })["catch"](function (err) {
            _this6.hideSpinner();

            _this6.erroAlert("ERRO!", err);
          });
        }
      }, {
        key: "getCallProcedureAtend",
        value: function getCallProcedureAtend() {
          var _this7 = this;

          var l_ok = "";
          var tam;
          tam = this.atender.length - 1;
          l_ok = "";

          for (var i in this.atender) {
            if (this.atender.hasOwnProperty(i)) {
              this.param2 = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ser=\"http://service.execbo.ws.framework.totvs.com\">\n                      <soapenv:Header/>\n                      <soapenv:Body>\n                        <ser:callProcedureWithToken>\n                            <!--Optional:-->\n                            <arg0>" + this.token + "</arg0>\n                            <!--Optional:-->\n                            <arg1>esp/esapp001.p</arg1>\n                            <!--Optional:-->\n                            <arg2>pi-atend-req</arg2>\n                            <!--Optional:-->\n                            <arg3>\n                            [\n                                    {\"dataType\":\"integer\",\"name\":\"p-cod-doc\",\"type\":\"input\",\"value\":" + this.requisicao["cod-doc"] + "},\n                                    {\"dataType\":\"character\",\"name\":\"p-tipo-req\",\"type\":\"input\",\"value\":\"" + this.requisicao["tipo-req"] + "\"},\n                                    {\"dataType\":\"integer\",\"name\":\"p-sequen\",\"type\":\"input\", \"value\":" + this.regSel["sequencia"] + "},\n                                    {\"dataType\":\"temptable\",\"name\":\"tt-atend-req\",\"type\":\"input\",\"value\":{\"name\":\"tt-atend-req\",\"fields\":[\n                                                  {\"name\":\"cod-doc\",\"label\":\"cod-doc\",\"type\":\"integer\"},\n                                                  {\"name\":\"tipo-req\",\"label\":\"tipo-req\",\"type\":\"character\"},\n                                                  {\"name\":\"it-codigo\",\"label\":\"it-codigo\",\"type\":\"character\"},\n                                                  {\"name\":\"cod-depos\",\"label\":\"cod-depos\",\"type\":\"character\"},\n                                                  {\"name\":\"cod-estabel\",\"label\":\"cod-estabel\",\"type\":\"character\"},\n                                                  {\"name\":\"cod-localiz\",\"label\":\"cod-localiz\",\"type\":\"character\"},\n                                                  {\"name\":\"lote\",\"label\":\"lote\",\"type\":\"character\"},\n                                                  {\"name\":\"dt-vali-lote\",\"label\":\"dt-vali-lote\",\"type\":\"date\"},\n                                                  {\"name\":\"qtd-atend\",\"label\":\"qtd-atend\",\"type\":\"decimal\"},\n                                                  {\"name\":\"qtd-req\",\"label\":\"qtd-req\",\"type\":\"decimal\"},\n                                                  {\"name\":\"usuario\",\"label\":\"usuario\",\"type\":\"character\"},\n                                                  \n                                                        \n                                    ],\"records\":[\n                        {\"cod-doc\":" + this.requisicao["cod-doc"] + ", \"tipo-req\":\"" + this.requisicao["tipo-req"] + "\", \"it-codigo\":\"" + this.atender[i]["it-codigo"] + "\", \"cod-depos\":\"" + this.atender[i]["cod-depos"] + "\", \"cod-estabel\":\"" + this.atender[i]["cod-estabel"] + "\", \"cod-localiz\":\"" + this.atender[i]["cod-localiz"] + "\", \"lote\":\"" + this.atender[i]["lote"] + "\", \"dt-vali-lote\":\"" + this.atender[i]["dt-vali-lote"] + "\", \"qtd-atend\":" + this.atender[i]["qtd-atend"] + ", \"qtd-req\":" + this.regSel["requisitada"] + ", \"usuario\":\"" + this.usuario + "\"}\n                        ]}},\n                        {\"dataType\":\"temptable\",\"name\":\"tt-ret\",\"type\":\"output\",\"value\":{\"name\":\"tt-ret\",\"fields\":[\n                                                  {\"name\":\"cod\",\"label\":\"cod\",\"type\":\"integer\"},\n                                                  {\"name\":\"chave\",\"label\":\"chave\",\"type\":\"character\"},\n                                                  {\"name\":\"tipo\",\"label\":\"tipo\",\"type\":\"integer\"},\n                                                  {\"name\":\"c-desc\",\"label\":\"c-desc\",\"type\":\"character\"}\n                                    ],\"records\":[]}}\n                        ]\n                            </arg3>\n                        </ser:callProcedureWithToken>\n                      </soapenv:Body>\n                  </soapenv:Envelope>";
              this.nativeHttp.setDataSerializer('utf8');
              var nativeCall = this.nativeHttp.post(this.testBaseURL, this.param2, {
                'Content-Type': 'text/xml'
              }).then(function (data) {
                // this.fazendosinc = "Sincronizando o sistema... Aguarde!";
                var aux = data.data;
                var c_ret;
                xml2js__WEBPACK_IMPORTED_MODULE_6___default.a.parseString(aux, {
                  explicitArray: false
                }, function (error, result) {
                  if (error) {
                    throw new Error(error);
                  } else {
                    _this7.resultados = result["env:Envelope"]["env:Body"]["ns2:callProcedureWithTokenResponse"]["return"];
                    _this7.retorno = JSON.parse(_this7.resultados); //console.log(this.retorno);

                    _this7.VALUE1 = JSON.parse(_this7.retorno[0].value);

                    _this7.VALUE1.records.forEach(function (dtRet) {
                      c_ret = dtRet["c-desc"];
                    });

                    if (c_ret != "OK") {
                      _this7.erroAlert("Erro!", c_ret);
                    } else l_ok = "ok";

                    if (i == tam) _this7.hideSpinner();

                    if (l_ok == "ok" && i == tam) {
                      _this7.erroAlert("Atendimento realizado!", "");

                      _this7.getDataNative(1);

                      _this7.regSel = null;

                      _this7.getSaldo(1);
                    }
                  }
                });
              })["catch"](function (err) {
                _this7.hideSpinner();

                _this7.erroAlert("ERRO!", err);
              });
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showSpinner",
        value: function showSpinner() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingCtrl.create({
                      message: "Aguarde...",
                      spinner: "circles"
                    });

                  case 2:
                    this.loading = _context4.sent;
                    this.loading.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "hideSpinner",
        value: function hideSpinner() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.loading.dismiss();

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return AtendReqPage;
    }();

    AtendReqPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }];
    };

    AtendReqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-atend-req',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./atend-req.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/atend-req/atend-req.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./atend-req.page.scss */
      "./src/app/atend-req/atend-req.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]])], AtendReqPage);
    /***/
  }
}]);
//# sourceMappingURL=atend-req-atend-req-module-es5.js.map