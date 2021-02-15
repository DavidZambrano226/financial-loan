import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from './transaction/transaction.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [ TransactionService ]
})
export class CoreModule { }
