import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bankAmmount: string;

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.getAmmount();
  }

  getAmmount() {
    this.dataService.bankAmmount$.subscribe(ammount => this.bankAmmount = ammount);
  }

}
