import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from './transaction/transaction.service';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './data/data.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [ TransactionService, DataService ]
})
export class CoreModule { }
