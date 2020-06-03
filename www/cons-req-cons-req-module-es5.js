function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cons-req-cons-req-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cons-req/cons-req.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cons-req/cons-req.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConsReqConsReqPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Consulta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card-content>\n\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"9\">\n          <ion-input type=\"number\" (dblclick)=\"scanCode()\" [(ngModel)]=\"requisicao\" placeholder=\"Documento\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button (click)=\"selecionar()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n            Buscar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-card-content>\n\n  <div style=\"overflow-x: scroll;\">\n    <table id='minhaTabela' style=\"min-width: 100%;\">\n      <thead>\n        <tr>\n          <th>T</th>\n          <th>Doc.</th>\n          <th>Est</th>\n          <th>Data</th>\n          <th>Req</th>\n        <tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let r of requisicoes\" (click)=\"selLinha(r)\" [style.background-color]=\"r == regSel ? '#aff7ff':''\">\n          <td>{{r[\"tipo-req\"]}}</td>\n          <td>{{r[\"cod-doc\"]}}</td>\n          <td>{{r[\"cod-estabel\"]}}</td>\n          <td>{{r[\"data-req\"]}}</td>\n          <td>{{r[\"nome-req\"]}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</ion-content>\n<br>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"atender()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Atender\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/cons-req/cons-req-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/cons-req/cons-req-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ConsReqPageRoutingModule */

  /***/
  function srcAppConsReqConsReqRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsReqPageRoutingModule", function () {
      return ConsReqPageRoutingModule;
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


    var _cons_req_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cons-req.page */
    "./src/app/cons-req/cons-req.page.ts");

    var routes = [{
      path: '',
      component: _cons_req_page__WEBPACK_IMPORTED_MODULE_3__["ConsReqPage"]
    }];

    var ConsReqPageRoutingModule = function ConsReqPageRoutingModule() {
      _classCallCheck(this, ConsReqPageRoutingModule);
    };

    ConsReqPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConsReqPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/cons-req/cons-req.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/cons-req/cons-req.module.ts ***!
    \*********************************************/

  /*! exports provided: ConsReqPageModule */

  /***/
  function srcAppConsReqConsReqModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsReqPageModule", function () {
      return ConsReqPageModule;
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


    var _cons_req_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cons-req-routing.module */
    "./src/app/cons-req/cons-req-routing.module.ts");
    /* harmony import */


    var _cons_req_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cons-req.page */
    "./src/app/cons-req/cons-req.page.ts");

    var ConsReqPageModule = function ConsReqPageModule() {
      _classCallCheck(this, ConsReqPageModule);
    };

    ConsReqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cons_req_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsReqPageRoutingModule"]],
      declarations: [_cons_req_page__WEBPACK_IMPORTED_MODULE_6__["ConsReqPage"]]
    })], ConsReqPageModule);
    /***/
  },

  /***/
  "./src/app/cons-req/cons-req.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/cons-req/cons-req.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppConsReqConsReqPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n#minhaTabela {\n  margin: 0 auto;\n  border: 0;\n  box-shadow: 0 5px 30px darkgrey;\n  border-spacing: 0;\n}\n#minhaTabela thead th {\n  font-weight: bold;\n  background-color: #2584bb;\n  color: white;\n  padding: 5px 10px;\n}\n#minhaTabela tr td {\n  width: 80%;\n  padding: 5px 10px;\n  text-align: center;\n  cursor: pointer;\n  /**importante para não mostrar cursor de texto**/\n}\n#minhaTabela tr td:last-child {\n  text-align: right;\n}\n/**Cores**/\n#minhaTabela tr:nth-child(odd) {\n  background-color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ucy1yZXEvY29ucy1yZXEucGFnZS5zY3NzIiwic3JjL2FwcC9jb25zLXJlcS9DOlxcYXBwc1xcYXBwLXNhbm92b1xcQXV0b21hY2FvTWF0ZXJpYWlzL3NyY1xcYXBwXFxjb25zLXJlcVxcY29ucy1yZXEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBREVKO0FDQ0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0FEQ0o7QUNFRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUFpQixnREFBQTtBRENyQjtBQ0VFO0VBQ0UsaUJBQUE7QURDSjtBQ0VFLFVBQUE7QUFDQTtFQUNFLHNCQUFBO0FEQ0oiLCJmaWxlIjoic3JjL2FwcC9jb25zLXJlcS9jb25zLXJlcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4jbWluaGFUYWJlbGEge1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IGRhcmtncmV5O1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuI21pbmhhVGFiZWxhIHRoZWFkIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTg0YmI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbiNtaW5oYVRhYmVsYSB0ciB0ZCB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyoqaW1wb3J0YW50ZSBwYXJhIG7Do28gbW9zdHJhciBjdXJzb3IgZGUgdGV4dG8qKi9cbn1cblxuI21pbmhhVGFiZWxhIHRyIHRkOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLyoqQ29yZXMqKi9cbiNtaW5oYVRhYmVsYSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59IiwiI21pbmhhVGFiZWxhe1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIGJvcmRlcjowO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCBkYXJrZ3JleTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICAjbWluaGFUYWJlbGEgdGhlYWQgdGh7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgMTMyLCAxODcpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNtaW5oYVRhYmVsYSB0ciB0ZHtcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyoqaW1wb3J0YW50ZSBwYXJhIG7Do28gbW9zdHJhciBjdXJzb3IgZGUgdGV4dG8qKi9cclxuICB9XHJcbiAgXHJcbiAgI21pbmhhVGFiZWxhIHRyIHRkOmxhc3QtY2hpbGR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLyoqQ29yZXMqKi9cclxuICAjbWluaGFUYWJlbGEgdHI6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIH1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cons-req/cons-req.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/cons-req/cons-req.page.ts ***!
    \*******************************************/

  /*! exports provided: ConsReqPage */

  /***/
  function srcAppConsReqConsReqPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsReqPage", function () {
      return ConsReqPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var xml2js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! xml2js */
    "./node_modules/xml2js/lib/xml2js.js");
    /* harmony import */


    var xml2js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_7__); //Desenvolvido por: lucas Leite - INSTI


    var ConsReqPage = /*#__PURE__*/function () {
      function ConsReqPage(alertController, navCtrl, loadingCtrl, barcodeScanner, nativeHttp) {
        _classCallCheck(this, ConsReqPage);

        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.nativeHttp = nativeHttp;
        this.headers = new Headers({
          "Content-Type": "application/x-www-form-urlencoded"
        });
        this.token = null;
        this.requisicoes = [];
        this.testBaseURL = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getBase();
        this.param = "<s11:Envelope xmlns:s11='http://schemas.xmlsoap.org/soap/envelope/'>\n      <s11:Body>\n        <ns1:userLogin xmlns:ns1='http://service.execbo.ws.framework.totvs.com'>\n    <!-- optional -->\n          <arg0>super</arg0>\n        </ns1:userLogin>\n      </s11:Body>\n    </s11:Envelope>"; //this.getDataNative();
        // Options

        this.barcodeScannerOptions = {
          showTorchButton: true,
          showFlipCameraButton: true
        };
      }

      _createClass(ConsReqPage, [{
        key: "scanCode",
        value: function scanCode() {
          var _this = this;

          this.barcodeScanner.scan().then(function (barcodeData) {
            JSON.stringify(barcodeData);
            _this.scannedData = barcodeData;
            _this.requisicao = _this.scannedData["text"];

            if (_this.requisicao != null) {
              _this.selecionar();
            }
          })["catch"](function (err) {
            console.log("Error", err);
          });
        }
      }, {
        key: "selecionar",
        value: function selecionar() {
          var requisicao = this.requisicao;
          var selecionado = this.requisicoes.find(function (key) {
            // key: the name of the object key
            // index: the ordinal position of the key within the object 
            if (requisicao != null) return key["cod-doc"] == requisicao.toString();
          });
          if (selecionado == null) this.erroAlert('Registro não encontrado!', 'Registro não encontrado para o documento informado!');
          this.selLinha(selecionado);
          if (this.regSel != null) this.atender();
        }
      }, {
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
        key: "selLinha",
        value: function selLinha(linha) {
          this.regSel = linha;
        }
      }, {
        key: "atender",
        value: function atender() {
          if (this.regSel == null) {
            this.erroAlert('Nenhum registro!', 'Favor selecionar um registro do browse!');
            return "NOK";
          }

          _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].setReg(this.regSel);

          this.navCtrl.navigateForward("atendReq");
        }
      }, {
        key: "getDataNative",
        value: function getDataNative() {
          var _this2 = this;

          this.nativeHttp.setDataSerializer('utf8');
          var nativeCall = this.nativeHttp.post(this.testBaseURL, this.param, {
            'Content-Type': 'text/xml'
          }).then(function (data) {
            _this2.showSpinner();

            var aux = data.data;

            _this2.convertXmltoJson(aux, 0);
          })["catch"](function (err) {
            _this2.hideSpinner();

            _this2.erroAlert("Erro na conexão!", "Houveram problemas na conexão com o webservice, favor verificar se está conectado na rede wifi/VPN correta ou verificar com a T.I!");
          });
          this.hideSpinner();
        }
      }, {
        key: "convertXmltoJson",
        value: function convertXmltoJson(data, op) {
          var _this3 = this;

          xml2js__WEBPACK_IMPORTED_MODULE_7___default.a.parseString(data, {
            explicitArray: false
          }, function (error, result) {
            if (error) {
              throw new Error(error);
            } else {
              _this3.token = result["env:Envelope"]["env:Body"]["ns2:userLoginResponse"]["return"];

              _this3.getCallProcedure();
            }
          });
        }
      }, {
        key: "getCallProcedure",
        value: function getCallProcedure() {
          var _this4 = this;

          this.requisicoes = [];
          this.param2 = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ser=\"http://service.execbo.ws.framework.totvs.com\">\n                  <soapenv:Header/>\n                  <soapenv:Body>\n                    <ser:callProcedureWithToken>\n                        <arg0>" + this.token + "</arg0>\n                        <!--Optional:-->\n                        <arg1>esp/esapp001.p</arg1>\n                        <!--Optional:-->\n                        <arg2>busca-requisicao</arg2>\n                        <!--Optional:-->\n                        <arg3>\n                        [\n                                {\"dataType\":\"temptable\",\"name\":\"tt-param\",\"type\":\"input\",\"value\":{\"name\":\"tt-param\",\"fields\":[\n                                              {\"name\":\"data-ini\",\"label\":\"data-ini\",\"type\":\"date\"},\n                                              {\"name\":\"data-fim\",\"label\":\"data-fim\",\"type\":\"date\"},\n                                              {\"name\":\"cod-doc-ini\",\"label\":\"cod-doc-ini\",\"type\":\"integer\"},\n                                              {\"name\":\"cod-doc-fim\",\"label\":\"cod-doc-fim\",\"type\":\"integer\"},\n                                              {\"name\":\"tipo-doc\",\"label\":\"tipo-doc\",\"type\":\"integer\"},\n                                              {\"name\":\"nome-req-ini\",\"label\":\"nome-req-ini\",\"type\":\"character\"},\n                                              {\"name\":\"nome-req-fim\",\"label\":\"nome-req-fim\",\"type\":\"character\"},                                \n                                              {\"name\":\"cd-estab\",\"label\":\"cd-estab\",\"type\":\"character\"}\n                                ],\"records\":[\n                                              {\"data-ini\":\"" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getDtIni(), 'dd/MM/yyyy', 'en-US') + "\", \"data-fim\":\"" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getDtFim(), 'dd/MM/yyyy', 'en-US') + "\", \"cod-doc-ini\":" + _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getDocIni() + ", \"cod-doc-fim\":" + _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getDocFim() + ", \"tipo-doc\":" + _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getTipo() + ", \"nome-req-ini\":\"" + _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getReqIni() + "\", \"nome-req-fim\":\"" + _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getReqFim() + "\", \"cd-estab\":\"" + _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].getEstabel() + "\"}\n                                ]}},\n                                {\"dataType\":\"temptable\",\"name\":\"tt-requisicao\",\"type\":\"output\",\"value\":{\"name\":\"tt-requisicao\",\"fields\":[\n                                  {\"name\":\"tipo-req\",\"label\":\"tipo-req\",\"type\":\"character\"},\n                                  {\"name\":\"cod-doc\",\"label\":\"cod-doc\",\"type\":\"integer\"},\n                                  {\"name\":\"cod-estabel\",\"label\":\"cod-estabel\",\"type\":\"character\"},\n                                  {\"name\":\"data-req\",\"label\":\"data-req\",\"type\":\"date\"},\n                                  {\"name\":\"nome-req\",\"label\":\"nome-req\",\"type\":\"character\"}\n                                ],\"records\":[]}},\n                                {\"dataType\":\"character\",\"name\":\"p-c-ret\",\"type\":\"output\"}\n                    ]\n                        </arg3><!--Optional:-->\n                        \n                    </ser:callProcedureWithToken>\n                  </soapenv:Body>\n              </soapenv:Envelope>";
          this.nativeHttp.setDataSerializer('utf8');
          var nativeCall = this.nativeHttp.post(this.testBaseURL, this.param2, {
            'Content-Type': 'text/xml'
          }).then(function (data) {
            // this.fazendosinc = "Sincronizando o sistema... Aguarde!";
            console.log("Dados:" + data.data);
            var aux = data.data;
            xml2js__WEBPACK_IMPORTED_MODULE_7___default.a.parseString(aux, {
              explicitArray: false
            }, function (error, result) {
              if (error) {
                throw new Error(error);
              } else {
                _this4.resultados = result["env:Envelope"]["env:Body"]["ns2:callProcedureWithTokenResponse"]["return"];
                console.log("resultados:" + _this4.resultados);
                var encontrou = 0;
                _this4.retorno = JSON.parse(_this4.resultados);
                console.log(_this4.retorno);
                _this4.VALUE1 = JSON.parse(_this4.retorno[0].value);
                var i = 0;

                _this4.VALUE1.records.forEach(function (dtDocs) {
                  encontrou = 1;
                  dtDocs["data-req"] = dtDocs["data-req"].substring(0, 10);

                  _this4.requisicoes.push(dtDocs);
                });

                _this4.hideSpinner();

                if (encontrou == 0) {
                  _this4.erroAlert("Erro!", _this4.retorno[1].value);
                }
              }
            });
          })["catch"](function (err) {
            _this4.hideSpinner();

            _this4.erroAlert("ERRO!", err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {//this.getDataNative();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getDataNative();
        }
      }, {
        key: "showSpinner",
        value: function showSpinner() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      message: "Aguarde...",
                      spinner: "circles"
                    });

                  case 2:
                    this.loading = _context2.sent;
                    this.loading.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "hideSpinner",
        value: function hideSpinner() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.loading.dismiss();

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ConsReqPage;
    }();

    ConsReqPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }];
    };

    ConsReqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cons-req',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cons-req.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cons-req/cons-req.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cons-req.page.scss */
      "./src/app/cons-req/cons-req.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]])], ConsReqPage);
    /***/
  }
}]);
//# sourceMappingURL=cons-req-cons-req-module-es5.js.map