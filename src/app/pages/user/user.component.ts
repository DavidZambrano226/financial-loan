import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../../core/transaction/transaction.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = [] = [];

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.transactionService.getAllUsers().subscribe(dataUsers => {
      this.users = dataUsers;
    });
  }
  goToRequests(email: string): void {
    // console.log(email);
    this.router.navigate(['/dashboard/request', email])
  }

}
