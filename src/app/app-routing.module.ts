import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { 
    path: 'dashboard', 
    loadChildren: () => import('./pages/pages-routing.module').then( m => m.PagesRoutingModule )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      { preloadingStrategy: PreloadAllModules, useHash: true},
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
