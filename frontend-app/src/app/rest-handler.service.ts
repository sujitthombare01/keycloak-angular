import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestHandlerService {

  constructor(private http: HttpClient) { }

  getUserRestAPI() {
    let API = 'http://localhost:3000/users'
    return this.http.get(API)
  }

  getUserDetailsRestAPI() {
    let API = 'http://localhost:3000/details/users'
    return this.http.get(API)
  }

  getCountriesRestAPI() {
    let API = 'http://localhost:3000/countries'
    return this.http.get(API)
  }
}
