import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      { 
        path: 'users', 
        loadChildren: () => import('./user/user.module').then( m => m.UserModule )
      },
      { 
        path: 'request', 
        loadChildren: () => import('./request/request.module').then( m => m.RequestModule )
      },
      { 
        path: '', 
        redirectTo: '/dashboard/request',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
