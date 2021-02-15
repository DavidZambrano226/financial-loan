import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../core/transaction/transaction.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {
  data = [
    { id: 1, date: '2020-12-01', ammount: 100000, status: 0 },
    { id: 2, date: '2020-12-01', ammount: 100000, status: 0 },
    { id: 3, date: '2020-12-01', ammount: 100000, status: 0 },
    { id: 4, date: '2020-12-01', ammount: 100000, status: 0 },
  ];
  dataRequests: [] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getResquestsData();
  }

  getResquestsData(): void {
    this.transactionService.getAllRequests().subscribe((data) => {
      console.log(data);
      this.dataRequests = data;
    });
  }
}
