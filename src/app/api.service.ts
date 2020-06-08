import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getLibrarys(){
  return this.httpClient.get("http://localhost:8080/api/v1/librarys");
}
}
