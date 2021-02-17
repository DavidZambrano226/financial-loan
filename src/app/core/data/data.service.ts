import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  initialBase = environment.bankbaseCapital;

  private emmitAmmountOfBank = new BehaviorSubject(this.initialBase);

  bankAmmount$ = this.emmitAmmountOfBank.asObservable();

  constructor() { }

  emmitAmmount(newAmmount: string = '1000000') {
    this.emmitAmmountOfBank.next(newAmmount);
  }
}
