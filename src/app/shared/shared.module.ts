import { NgModule } from '@angular/core';
import { StatusPipe } from './pipes/status.pipe';



@NgModule({
  declarations: [
    StatusPipe
  ],
  imports: [],
  exports: [
    StatusPipe
  ]
})
export class SharedModule { }
