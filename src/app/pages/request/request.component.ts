import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/data/data.service';
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
  baseBankAmmount: number;

  constructor(
    private transactionService: TransactionService, 
    private routeActive: ActivatedRoute,
    private dataService: DataService) {

    }
    
  ngOnInit(): void {
    this.getRouteParams();
    this.getBaseAmmount();
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

  getRequestByUser(): void {
    this.transactionService.getRequestByUser(this.search)
      .subscribe(request => {
        this.dataRequests = request;
      })
  }
  getBaseAmmount(): void {
    this.dataService.bankAmmount$.subscribe((baseAmmount: number) => {
      this.baseBankAmmount = baseAmmount;
    })
  }

  payRequest(item: any): void {
    const newValue = this.baseBankAmmount - parseInt(item.ammount);
    this.dataService.emmitAmmount(newValue);
    const dateToUpdate = new Date();
    const requestToSave = {
      date: dateToUpdate,
      ammount: item.ammount,
      status: item.status,
      loanPay: 1,
      applicant: item.applicant
    };
    this.transactionService.updatePaySatatusRequest(requestToSave, item.id)
      .subscribe(response => {
        this.getPendingRequests();
      })
  }
}
