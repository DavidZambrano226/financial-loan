import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private emmitAmmountOfBank = new BehaviorSubject('1000000');

  bankAmmount$ = this.emmitAmmountOfBank.asObservable();

  constructor() { }

  emmitAmmount(newAmmount: string = '1000000') {
    this.emmitAmmountOfBank.next(newAmmount);
  }
}
