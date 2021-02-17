import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../../core/transaction/transaction.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.transactionService.getAllUsers().subscribe((dataUsers: UserModel[]) => {
      this.users = dataUsers;
    });
  }
  goToRequests(email: string): void {
    this.router.navigate(['/dashboard/request', email])
  }

}
