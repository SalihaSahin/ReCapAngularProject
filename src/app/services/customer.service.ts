import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44365/api/customers/getall";

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Customer>>{
  return  this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
