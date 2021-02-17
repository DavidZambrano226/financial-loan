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
  getRequestByStatus(status: number | string): Observable<any> {
    const url = `http://localhost:3000/requests?status=${status}`;
    return this.http.get(url);
  }
  getRequestPaid(loanPay: number = 0, status: number | string = 1): Observable<any> {
    const url = `http://localhost:3000/requests?loanPay=${loanPay}&status=${status}`;
    return this.http.get(url);
  }
  getAllUsers(): Observable<any> {
    const url = 'http://localhost:3000/users';
    return this.http.get(url);
  }
  getRequestByUser(email: string): Observable<any> {
    const url = `http://localhost:3000/requests?applicant=${email}`;
    return this.http.get(url);
  }
  saveUser(user: any): Observable<Object> {
    const url = `http://localhost:3000/users`;
    return this.http.post(url, user);
  }
  saveRequest(request: any): Observable<Object> {
    const url = 'http://localhost:3000/requests';
    return this.http.post(url, request);
  }
  updatePaySatatusRequest(request: any, id: string): Observable<Object> {
    const url = `http://localhost:3000/requests/${id}/`;
    return this.http.put(url, request);
  }
}
