import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/images';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl = "https://localhost:44365/api/carimages/"
  constructor(private httpClient : HttpClient) { }

  getImageByCarId(id : number) : Observable<ListResponseModel<Image>>{
    let newPath = this.apiUrl + "getimagesbycarid?carId=" + id
    return this.httpClient.get<ListResponseModel<Image>>(newPath)
  }

}
