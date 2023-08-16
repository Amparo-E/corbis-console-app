import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse }from '@angular/common/http';
import { Observable } from 'rxjs';
import { DB, Objective, Perspective } from './model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private baseUrl = 'https://raw.githubusercontent.com/pyorlano/cst-frontend-test/master/db.json';

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get<HttpResponse<DB>>(this.baseUrl)
  }
}
