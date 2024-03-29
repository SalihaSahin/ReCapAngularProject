import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44365/api/rentals/getrentaldetails";

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+'';
  return  this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
