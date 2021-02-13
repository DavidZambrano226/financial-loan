import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterModule) },
  { path: '', loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingModule) },
  { 
    path: '**', 
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
