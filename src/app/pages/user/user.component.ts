import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../core/transaction/transaction.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = [] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.transactionService.getAllUsers().subscribe(dataUsers => {
      this.users = dataUsers;
    });
  }

}
