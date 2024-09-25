import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  http = inject(HttpClient);

  constructor() { }

  getAllCategories(){
    return this.http.get(Constant.API_ENDPOINT + Constant.METHODS.GET_ALL_CATEGORY);
  }
}
