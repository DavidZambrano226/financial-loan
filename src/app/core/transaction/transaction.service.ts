import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor( private http: HttpClient ) { }

  getAllRequests(): Observable<any> {
    const url = 'http://localhost:3000/requests';
    return this.http.get(url);
  }
}
