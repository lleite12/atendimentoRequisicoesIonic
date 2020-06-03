//Desenvolvido por: lucas Leite - INSTI
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { AlertController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController } from '@ionic/angular';
import { Platform, LoadingController } from '@ionic/angular';

import xml2js from 'xml2js';

@Component({
  selector: 'app-atend-req',
  templateUrl: './atend-req.page.html',
  styleUrls: ['./atend-req.page.scss'],
})
export class AtendReqPage implements OnInit {

  barcodeScannerOptions: BarcodeScannerOptions

  regSel: any;
  requisicao: any;
  desc: any;
  item: any;
  usuario: any;

  headers: Headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
  testBaseURL;
  param: any;
  param2;
  token: any = null;
  fazendosinc: string = null;

  resultados: any;
  VALUE1: any;
  VALUE2: any;
  retorno: any;
  loading: any;

  scannedData: {};

  itens: any[] = [];


  saldos: any[] = [];

  atender: any[];

  constructor(public alertController: AlertController,
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    public loadingCtrl: LoadingController,
    private nativeHttp: HTTP) {

    this.requisicao = AppModule.getReg();

    this.testBaseURL = AppModule.getBase();

    this.usuario = AppModule.getUsuar();

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

  async erroAlert(header, mes) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: '',
      message: mes,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentConfirm(header, mes) {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
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

  getColorItem(it){

    var qtd = 0;

    let saldo = this.saldos.filter(function(elemente){

      return elemente["it-codigo"] == it["it-codigo"];

    })

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

  };

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
                    
                if(this.atender[i]["qtd-disp"] < this.atender[i]["qtd-atend"]){
                  this.erroAlert("Erro!", "Quantidade informada, maior que a quantidade disponivel no saldo!");
                  return;
                }

                qtd = qtd + this.atender[i]["qtd-atend"];

              }
            }

            if (qtd <= (this.regSel["requisitada"] - this.regSel["atendida"])){

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
                    this.atender[i]["qtd-atend"] = this.atender[i]["qtd-disp"]
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
      let aux: string = data.data;
      this.convertXmltoJson(aux, op);

    }).catch(err => {

      this.hideSpinner();
      this.erroAlert("Erro na conexão!", "Houveram problemas na conexão com o webservice, favor verificar se está conectado na rede wifi/VPN correta ou verificar com a T.I!")

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

    }).catch(err =>{

      this.hideSpinner();
      this.erroAlert("ERRO!", err)

    }
    );
    

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
            let aux: string = data.data;

            var c_ret;

            xml2js.parseString(aux, { explicitArray: false }, (error, result) => {
              if (error) {
                throw new Error(error);
              } else {
            
                this.resultados = result["env:Envelope"]["env:Body"]["ns2:callProcedureWithTokenResponse"].return;
        
                this.retorno = JSON.parse(this.resultados);
                //console.log(this.retorno);
                this.VALUE1 = JSON.parse(this.retorno[0].value);
                
                this.VALUE1.records.forEach(dtRet => {
                
                    c_ret = dtRet["c-desc"];
                });

                if (c_ret != "OK"){
                  this.erroAlert("Erro!", c_ret);

                }
                else 
                  l_ok = "ok";                      

                if ( i == tam)
                  this.hideSpinner();
                
                if (l_ok == "ok" && i == tam){
                  
                  this.erroAlert("Atendimento realizado!","");      

                  this.getDataNative(1);
                  this.regSel = null;
                  this.getSaldo(1);

                }

              }
            });

        }).catch(err =>{

          this.hideSpinner();
          this.erroAlert("ERRO!", err)

        }

        );

      }

    }


  }

  ngOnInit() {

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
