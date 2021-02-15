import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';
import { StatusPipe } from '../../shared/pipes/status.pipe';



@NgModule({
  declarations: [ RequestComponent ],
  imports: [
    CommonModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }
