import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { 
    path: 'dashboard', 
    loadChildren: () => import('./pages/pages-routing.module').then( m => m.PagesRoutingModule )
  },
  { 
    path: 'landing', 
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingModule )
  },
  { 
    path: '', 
    redirectTo: 'landing',
    pathMatch: 'full'
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
