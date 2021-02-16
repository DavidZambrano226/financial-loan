import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../core/transaction/transaction.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {
  dataRequests: [] = [];
  status: number = 0;
  pendingPaied = false;

  constructor(
    private transactionService: TransactionService, 
    private routeActive: ActivatedRoute) {

    }
    
  ngOnInit(): void {
    this.getRouteParams();
  }

  getRouteParams(): void {
    this.routeActive.params.subscribe(param => {
      console.log(Object.keys(param).length);
      if (Object.keys(param).length > 0) {
        this.status = param.status;    
        this.getResquestsData();
      } else {
        this.getPendingRequests();
        this.pendingPaied = true;
      }
      
    });
  }
  
  getResquestsData(): void {
    this.transactionService.getRequestByStatus(this.status)
    .subscribe((data) => {
      this.dataRequests = data;
    });
  }
  getPendingRequests(): void {
    this.transactionService.getRequestPaid()
      .subscribe(pendingRequests => {
        this.dataRequests = pendingRequests
      });
  }
}
