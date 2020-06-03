//Desenvolvido por: lucas Leite - INSTI
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppModule } from '../app.module';
import { AlertController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { Platform, LoadingController } from '@ionic/angular';

const { Network } = Plugins;

let handler = Network.addListener('networkStatusChange', (status) => {
  console.log("Network status changed", status);
});

import xml2js from 'xml2js';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;

  user: any;
  pass: any;
  temInternet: any;

  headers: Headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
  testBaseURL;
  param: any;
  param2: any;
  token: any = null;
  resultados: any;
  retorno: any;
  VALUE1: any;

  loading: any;

  database: SQLiteObject;

  constructor(//http: HttpClient,
    private nativeHttp: HTTP,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public alertController: AlertController,
    private sqlite: SQLite,
    private toast: Toast
  ) {

    this.param = `<s11:Envelope xmlns:s11='http://schemas.xmlsoap.org/soap/envelope/'>
      <s11:Body>
        <ns1:userLogin xmlns:ns1='http://service.execbo.ws.framework.totvs.com'>
    <!-- optional -->
          <arg0>super</arg0>
        </ns1:userLogin>
      </s11:Body>
    </s11:Envelope>`;


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

  login() {

    if (this.networkStatus && this.networkStatus.connected) {

      if (this.user == "admin" && this.pass == "sanovo2020") {
        this.user = "";
        this.pass = "";
        this.navCtrl.navigateForward("params");
      }
      else {

        this.testBaseURL = AppModule.getBase();

        this.getDataNative();

      }
    }
    else
      this.erroAlert('Sem conexão com a internet!', 'É necessária uma conexão com a internet para o funcionamento do aplicativo!');

  }

  getDataNative() {
    
    this.nativeHttp.setDataSerializer('utf8');
    
    let nativeCall = this.nativeHttp.post(this.testBaseURL, this.param, {
      'Content-Type': 'text/xml'
    }).then(data => {
      this.showSpinner();
      
      let aux: string = data.data;

      //alert(aux);
      this.convertXmltoJson(aux, 0);

    }).catch(err => {
      this.hideSpinner();   
      //alert("ERRO: " + JSON.stringify(err))     
      this.erroAlert("Erro na conexão!", "Houveram problemas na conexão com o webservice, favor verificar se está conectado na rede wifi/VPN correta ou verificar com a T.I!");
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

        //alert(this.token);

        this.getCallProcedure();

      }
    });
  }

  getCallProcedure() {

    this.param2 = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.execbo.ws.framework.totvs.com">
                  <soapenv:Header/>
                  <soapenv:Body>
                    <ser:callProcedureWithToken>
                        <arg0>` + this.token + `</arg0>
                        <!--Optional:-->
                        <arg1>esp/es-login.p</arg1>
                        <!--Optional:-->
                        <arg2>pi-login</arg2>
                        <!--Optional:-->
                        <arg3>
                        [
                          {"dataType":"character","name":"p-usuario","type":"input","value":"` + this.user + `"},
                          {"dataType":"character","name":"p-senha","type":"input","value":"` + this.pass + `"},
                          {"dataType":"character","name":"c-ret","type":"output"}
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

          this.retorno = JSON.parse(this.resultados);

          this.VALUE1 = this.retorno[0].value;

          console.log(this.VALUE1);

          if (this.VALUE1 == "OK") {

           this.hideSpinner();
            AppModule.setUsuar(this.user);

            this.user = "";
            this.pass = "";
            this.navCtrl.navigateForward("filtros");

          }
          else {

            this.hideSpinner();
            this.pass = "";
            this.erroAlert("ERRO!", this.VALUE1);

          }

        }
      });

    }).catch(err => {

      this.hideSpinner();      
      this.erroAlert("ERRO!", JSON.stringify(err))

    }

    );

  }

  getCurrentData(id) {
    this.sqlite.create({
      name: 'sanovo.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('select * from param_gerais where id = ?', [id])
        .then(res => {
          AppModule.setParams(res.rows.item(0).web, res.rows.item(0).estabel);
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

  async ngOnInit() {

    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      console.log("Network status changed", status);
      this.networkStatus = status;
    });

    this.networkStatus = await Network.getStatus();

    if (!this.networkStatus && !this.networkStatus.connected)
      this.erroAlert('Sem conexão com a internet!', 'É necessária uma conexão com a internet para o funcionamento do aplicativo!');

    this.getCurrentData(1);
    //AppModule.setParams("http://192.168.15.53:8080/wsexecbo/WebServiceExecBO?wsdl", "1");

  }

  ngOnDestroy() {
    this.networkListener.remove();
  }

  ionViewWillEnter() {
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
