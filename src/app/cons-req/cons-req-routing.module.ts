import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsReqPage } from './cons-req.page';

const routes: Routes = [
  {
    path: '',
    component: ConsReqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsReqPageRoutingModule {}
