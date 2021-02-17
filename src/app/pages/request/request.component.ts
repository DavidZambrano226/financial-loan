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
  search: number | string | any;
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
      console.log(param.search);
      console.log(typeof param.search);
      if (param.search === '0' || param.search === '1' ) {
        this.search = param.search;    
        this.getResquestsData();
      } else if(param.search !== '0' && param.search !== '1' && Object.keys(param).length > 0) {
        this.search = param.search;
        this.getRequestByUser();
      } else {
        this.getPendingRequests();
        this.pendingPaied = true;
      }
      
    });
  }
  
  getResquestsData(): void {
    this.transactionService.getRequestByStatus(this.search)
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

  getRequestByUser() {
    this.transactionService.getRequestByUser(this.search)
      .subscribe(request => {
        this.dataRequests = request;
      })
  }
}
