import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'consReq',
    loadChildren: () => import('./cons-req/cons-req.module').then( m => m.ConsReqPageModule)
  },
  {
    path: 'filtros',
    loadChildren: () => import('./filtros/filtros.module').then( m => m.FiltrosPageModule)
  },
  {
    path: 'atendReq',
    loadChildren: () => import('./atend-req/atend-req.module').then( m => m.AtendReqPageModule)
  },
  {
    path: 'params',
    loadChildren: () => import('./params/params.module').then( m => m.ParamsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
