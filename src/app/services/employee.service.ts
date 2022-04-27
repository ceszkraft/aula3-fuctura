import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Employee } from '../models/employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = 'http://localhost:5000/api/v1/employees';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url).pipe(retry(2));
  }

  postEmployee(obj: Employee) {
    return this.httpClient.post(this.url, obj);
  }

  put(obj: Employee) {
    return this.httpClient.put(this.url + '/' + obj.id, obj);
  }

  delete(id: number | string) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
