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

  dt_ini: string;
  dt_fim: string;
  doc_ini: number;
  doc_fim: number;
  req_ini: string;
  req_fim: string;
  tipo: string;
  estabel: string;

  constructor(public navCtrl: NavController) {     

    this.dt_ini  = AppModule.getDtIni();
    this.dt_fim  = AppModule.getDtFim();
    this.doc_ini = AppModule.getDocIni();
    this.doc_fim = AppModule.getDocFim();    
    this.req_ini = AppModule.getReqIni();
    this.req_fim = AppModule.getReqFim();
    this.tipo    = AppModule.getTipo();
    this.estabel = AppModule.getEstabel();    

  }
  

  filtrar(){
    
   /* if (this.estabel == "" || this.estabel == null){


      return;
    }*/
    
    AppModule.setData(this.dt_ini, this.dt_fim, this.doc_ini, this.doc_fim, this.req_ini, this.req_fim, this.tipo);

    this.navCtrl.navigateForward("consReq");

  }

  ngOnInit() {
    
    
  }

}
