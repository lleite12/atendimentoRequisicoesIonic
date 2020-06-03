//Desenvolvido por: lucas Leite - INSTI
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController } from '@ionic/angular';
import { Location, formatDate } from'@angular/common'; 

import xml2js from 'xml2js';

@Component({
  selector: 'app-cons-req',
  templateUrl: './cons-req.page.html',
  styleUrls: ['./cons-req.page.scss'],
})

export class ConsReqPage implements OnInit {

  barcodeScannerOptions: BarcodeScannerOptions;

  headers: Headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
  testBaseURL;
  param: any;
  param2;
  token: any = null;

  loading: any;

  resultados: any;
  retorno: any;
  VALUE1: any;

  requisicoes: any[] = [];

  regSel: any;
  scannedData: {};
  requisicao: any;
  
  constructor(public alertController: AlertController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private barcodeScanner: BarcodeScanner,
    private nativeHttp: HTTP) {

    this.testBaseURL = AppModule.getBase();

    this.param = `<s11:Envelope xmlns:s11='http://schemas.xmlsoap.org/soap/envelope/'>
      <s11:Body>
        <ns1:userLogin xmlns:ns1='http://service.execbo.ws.framework.totvs.com'>
    <!-- optional -->
          <arg0>super</arg0>
        </ns1:userLogin>
      </s11:Body>
    </s11:Envelope>`;

    //this.getDataNative();

    // Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

  }

  scanCode() {

    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        JSON.stringify(barcodeData);
        this.scannedData = barcodeData;
        this.requisicao = this.scannedData["text"];
        if (this.requisicao != null) {
          this.selecionar();
        }

      })
      .catch(err => {
        console.log("Error", err);
      });

  }

  selecionar() {

    var requisicao = this.requisicao;

    var selecionado = this.requisicoes.find(function (key) {
      // key: the name of the object key
      // index: the ordinal position of the key within the object 

      if (requisicao != null)
        return key["cod-doc"] == requisicao.toString();

    });

    if (selecionado == null)
      this.erroAlert('Registro não encontrado!','Registro não encontrado para o documento informado!');

    this.selLinha(selecionado);

    if(this.regSel != null)
      this.atender();

  };

  async erroAlert(header,mes) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: '',
      message: mes,
      buttons: ['OK']
    });

    await alert.present();
  }

  selLinha(linha) {

    this.regSel = linha;

  }

  atender() {

    if (this.regSel == null) {
      this.erroAlert('Nenhum registro!','Favor selecionar um registro do browse!');
      return "NOK";
    }

    AppModule.setReg(this.regSel);

    this.navCtrl.navigateForward("atendReq");

  }

  getDataNative() {

    this.nativeHttp.setDataSerializer('utf8');

    let nativeCall = this.nativeHttp.post(this.testBaseURL, this.param, {
      'Content-Type': 'text/xml'
    }).then(data => {      

      this.showSpinner();
      let aux: string = data.data;

       this.convertXmltoJson(aux, 0);

    }).catch(err => {

      this.hideSpinner();
      this.erroAlert("Erro na conexão!","Houveram problemas na conexão com o webservice, favor verificar se está conectado na rede wifi/VPN correta ou verificar com a T.I!")

    }
    );

    this.hideSpinner();

  }

  convertXmltoJson(data, op): void {
    xml2js.parseString(data, { explicitArray: false }, (error, result) => {
      if (error) {
        throw new Error(error);
      } else {

        this.token = result["env:Envelope"]["env:Body"]["ns2:userLoginResponse"].return;

        this.getCallProcedure();

      }
    });
  }

  getCallProcedure(){

    this.requisicoes = [];
    
    this.param2 = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.execbo.ws.framework.totvs.com">
                  <soapenv:Header/>
                  <soapenv:Body>
                    <ser:callProcedureWithToken>
                        <arg0>` + this.token + `</arg0>
                        <!--Optional:-->
                        <arg1>esp/esapp001.p</arg1>
                        <!--Optional:-->
                        <arg2>busca-requisicao</arg2>
                        <!--Optional:-->
                        <arg3>
                        [
                                {"dataType":"temptable","name":"tt-param","type":"input","value":{"name":"tt-param","fields":[
                                              {"name":"data-ini","label":"data-ini","type":"date"},
                                              {"name":"data-fim","label":"data-fim","type":"date"},
                                              {"name":"cod-doc-ini","label":"cod-doc-ini","type":"integer"},
                                              {"name":"cod-doc-fim","label":"cod-doc-fim","type":"integer"},
                                              {"name":"tipo-doc","label":"tipo-doc","type":"integer"},
                                              {"name":"nome-req-ini","label":"nome-req-ini","type":"character"},
                                              {"name":"nome-req-fim","label":"nome-req-fim","type":"character"},                                
                                              {"name":"cd-estab","label":"cd-estab","type":"character"}
                                ],"records":[
                                              {"data-ini":"` + formatDate(AppModule.getDtIni(), 'dd/MM/yyyy', 'en-US') + `", "data-fim":"` + formatDate(AppModule.getDtFim(), 'dd/MM/yyyy', 'en-US') + `", "cod-doc-ini":` + AppModule.getDocIni() + `, "cod-doc-fim":` + AppModule.getDocFim() + `, "tipo-doc":` + AppModule.getTipo() + `, "nome-req-ini":"` + AppModule.getReqIni() + `", "nome-req-fim":"` + AppModule.getReqFim() + `", "cd-estab":"` + AppModule.getEstabel() + `"}
                                ]}},
                                {"dataType":"temptable","name":"tt-requisicao","type":"output","value":{"name":"tt-requisicao","fields":[
                                  {"name":"tipo-req","label":"tipo-req","type":"character"},
                                  {"name":"cod-doc","label":"cod-doc","type":"integer"},
                                  {"name":"cod-estabel","label":"cod-estabel","type":"character"},
                                  {"name":"data-req","label":"data-req","type":"date"},
                                  {"name":"nome-req","label":"nome-req","type":"character"}
                                ],"records":[]}},
                                {"dataType":"character","name":"p-c-ret","type":"output"}
                    ]
                        </arg3><!--Optional:-->
                        
                    </ser:callProcedureWithToken>
                  </soapenv:Body>
              </soapenv:Envelope>`;

    this.nativeHttp.setDataSerializer('utf8');

    let nativeCall = this.nativeHttp.post(this.testBaseURL, this.param2, {
      'Content-Type': 'text/xml'
    }).then(data => {
      // this.fazendosinc = "Sincronizando o sistema... Aguarde!";

      console.log("Dados:" + data.data);

      let aux: string = data.data;

      xml2js.parseString(aux, { explicitArray: false }, (error, result) => {
        if (error) {
          throw new Error(error);
        } else {

          this.resultados = result["env:Envelope"]["env:Body"]["ns2:callProcedureWithTokenResponse"].return;

          console.log("resultados:" + this.resultados);

          let encontrou = 0


          this.retorno = JSON.parse(this.resultados);
          console.log(this.retorno);

          this.VALUE1 = JSON.parse(this.retorno[0].value);

          var i = 0;          
          this.VALUE1.records.forEach(dtDocs => {
            
            encontrou = 1;            
            
            dtDocs["data-req"] = dtDocs["data-req"].substring(0,10);
            this.requisicoes.push(dtDocs);
          });

          this.hideSpinner();

          if (encontrou == 0) {            
            this.erroAlert("Erro!",this.retorno[1].value);
          }

        }
      });
    
    }).catch(err => {

      this.hideSpinner();
      this.erroAlert("ERRO!", err)

    }
    );

  }

  ngOnInit() {

    //this.getDataNative();

  }

  ionViewWillEnter() {

    this.getDataNative();

  }

  async showSpinner() {
    this.loading = await this.loadingCtrl.create({
      message: "Aguarde...",
      spinner: "circles",
    });

    this.loading.present();
    
  }

  async hideSpinner() {

    this.loading.dismiss();

  }

}