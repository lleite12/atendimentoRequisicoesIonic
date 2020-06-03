//Desenvolvido por: lucas Leite - INSTI
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppModule } from '../app.module';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-params',
  templateUrl: './params.page.html',
  styleUrls: ['./params.page.scss'],
})
export class ParamsPage implements OnInit {

  database: SQLiteObject;

  estabel:any;
  webservice:any;

  constructor(public navCtrl: NavController,
    private sqlite: SQLite,
    private toast: Toast) {

      this.getCurrentData(1);
    
  }

  getCurrentData(id) {
    this.sqlite.create({
      name: 'sanovo.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('select * from param_gerais where id = ?', [id])
        .then(res => {
            this.webservice= res.rows.item(0).web;
            this.estabel = res.rows.item(0).estabel;
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

  updateData() {
    
    this.sqlite.create({
      name: 'sanovo.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('UPDATE param_gerais SET web=?,estabel=? WHERE id=?', [this.webservice, this.estabel, 1])
        .then(res => {
          console.log(res);
          this.toast.show('Dados atualizados', '5000', 'center').subscribe(
            toast => {
              AppModule.setParams(this.webservice,this.estabel);
              this.navCtrl.navigateBack("login");
            }
          );
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

  ngOnInit() {
  }
}
