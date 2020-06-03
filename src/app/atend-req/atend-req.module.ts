import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtendReqPageRoutingModule } from './atend-req-routing.module';

import { AtendReqPage } from './atend-req.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtendReqPageRoutingModule
  ],
  declarations: [AtendReqPage]
})
export class AtendReqPageModule {}
