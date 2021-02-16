import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandingComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
