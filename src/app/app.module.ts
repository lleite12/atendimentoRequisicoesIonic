//Desenvolvido por: lucas Leite - INSTI oiiiiiiiii
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Toast } from '@ionic-native/toast/ngx';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    BarcodeScanner,
    SQLite, 
    Toast,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  database: SQLiteObject;

  private static dtIni: string = "2019-01-01";
  private static dtFim: string =  "2020-01-01";

  private static docIni: number = 0;
  private static docFim: number = 99999999;
  private static reqIni: string = "";
  private static reqFim: string = "ZZZZZZZZZZZ";
  private static tipo: string = "1";

  private static baseHttp: any;
  private static estabel: any;

  private static reg: any;

  private static usuar: any;

  static getDtIni(){
    return this.dtIni;
  }
  static getDtFim(){
    return this.dtFim;
  }
  static getDocIni(){
    return this.docIni;
  }
  static getDocFim(){
    return this.docFim;
  }
  static getReqIni(){
    return this.reqIni;
  }
  static getReqFim(){
    return this.reqFim;
  }
  static getTipo(){
    return this.tipo;
  }

  static setData(dtIni: string, dtFim: string, docIni: number, docFim: number, reqIni: string, reqFim: string, tipo: string){
    
    this.dtIni = dtIni;
    this.dtFim = dtFim;
    this.docIni = docIni;
    this.docFim = docFim;
    this.reqIni = reqIni;
    this.reqFim = reqFim;
    this.tipo = tipo;

    return;

  }

  static getReg(){
    return this.reg;
  }

  static setReg(reg: any){
    this.reg = reg;

    return;
  }

  static getBase(){
    return this.baseHttp;
  }

  static getEstabel(){
    return this.estabel;
  }

  static setParams(web: any, estabel: any){
    
    this.baseHttp = web;
    this.estabel = estabel;

    return;

  }

  static getUsuar(){
    return this.usuar;
  }

  static setUsuar(usuar){
    this.usuar = usuar;

    return;
  }

}
