//Desenvolvido por: lucas Leite - INSTI
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.page.html',
  styleUrls: ['./filtros.page.scss'],
})
export class FiltrosPage implements OnInit {

  dt_ini: any;
  dt_fim: any;
  doc_ini: number;
  doc_fim: number;
  req_ini: string;
  req_fim: string;
  tipo: string;
  estabel: string;

  constructor(public navCtrl: NavController) {     

    var date = new Date();

    date.setDate(date.getDate() - 30);

    this.dt_ini  = date.toISOString();
    this.dt_fim  = new Date().toISOString();
    this.doc_ini = 0;
    this.doc_fim = 99999999;    
    this.req_ini = "";
    this.req_fim = "ZZZZZZZZZZZZ";
    this.tipo    = "1";
    this.estabel = AppModule.getEstabel();    

  }
  

  filtrar(){
    
    AppModule.setData(this.dt_ini, this.dt_fim, this.doc_ini, this.doc_fim, this.req_ini, this.req_fim, this.tipo);

    this.navCtrl.navigateForward("consReq");

  }

  ngOnInit() {
    
    
  }

}
