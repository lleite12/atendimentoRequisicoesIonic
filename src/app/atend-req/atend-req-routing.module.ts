import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtendReqPage } from './atend-req.page';

const routes: Routes = [
  {
    path: '',
    component: AtendReqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendReqPageRoutingModule {}
