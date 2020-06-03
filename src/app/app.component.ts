//Desenvolvido por: lucas Leite - INSTI
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;

  paginas: any [] = [
    {title: 'Logout',url: '/login', icon: 'person'}
  ]
  
  database: SQLiteObject;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sqlite: SQLite
  ) {
    this.getData();           
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getData() {
    this.sqlite.create({
      name: 'sanovo.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.database = db;

      //Tabela de parâmetros gerais
      db.sqlBatch(['CREATE TABLE IF NOT EXISTS param_gerais(id INTEGER PRIMARY KEY, web TEXT, estabel TEXT)'])
        .then(() => {
          
        }

        )
        .catch(e => { console.log(e); alert("Falha ao criar a tabela, erro:" + e); });

      this.insertDefaultItems(db);

    }).catch(e => console.log(e));
  }

  insertDefaultItems(db: SQLiteObject) {

    db.sqlBatch(['insert or IGNORE into param_gerais (id,web,estabel) values (1,"http://192.168.15.53:8080/wsexecbo/WebServiceExecBO?wsdl","1")'])
          .then(() => {
            console.log('Dados padrões incluídos');
          })
          .catch(e => alert('Erro ao incluir dados padrões' + e));    

  }

  ngOnInit() {

  }

}
