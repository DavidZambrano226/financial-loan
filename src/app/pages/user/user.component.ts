import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = [
    { 
      name: 'Jhon Due',
      identification: '123455667'
    },
    { 
      name: 'Jhon Due',
      identification: '123455667'
    },
    { 
      name: 'Jhon Due',
      identification: '123455667'
    },
    { 
      name: 'Jhon Due',
      identification: '123455667'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
