import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsReqPageRoutingModule } from './cons-req-routing.module';

import { ConsReqPage } from './cons-req.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsReqPageRoutingModule
  ],
  declarations: [ConsReqPage]
})
export class ConsReqPageModule {}
