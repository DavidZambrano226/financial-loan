import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RequestModel } from '../../models/request.model';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: `root`
})
export class TransactionService {

  pathApi: string = environment.api;

  constructor( private http: HttpClient ) { 
    console.log(this.pathApi);
    
  }

  getAllRequests(): Observable<any> {
    const url = `${this.pathApi}requests`;
    return this.http.get(url);
  }
  getRequestByStatus(status: number | string): Observable<Object> {
    const url = `${this.pathApi}requests?status=${status}`;
    return this.http.get(url);
  }
  getRequestPaid(loanPay: number = 0, status: number | string = 1): Observable<any> {
    const url = `${this.pathApi}requests?loanPay=${loanPay}&status=${status}`;
    return this.http.get(url);
  }
  getAllUsers(): Observable<Object> {
    const url = `${this.pathApi}users`;
    return this.http.get(url);
  }
  getRequestByUser(email: string): Observable<Object> {
    const url = `${this.pathApi}requests?applicant=${email}`;
    return this.http.get(url);
  }
  saveUser(user: UserModel): Observable<Object> {
    const url = `${this.pathApi}users`;
    return this.http.post(url, user);
  }
  saveRequest(request: RequestModel): Observable<Object> {
    const url = `${this.pathApi}requests`;
    return this.http.post(url, request);
  }
  updatePaySatatusRequest(request: RequestModel, id: string): Observable<Object> {
    const url = `${this.pathApi}requests/${id}/`;
    return this.http.put(url, request);
  }
}
