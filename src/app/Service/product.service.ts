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

  getAllProducts(){
    return this.http.get(Constant.API_ENDPOINT + Constant.METHODS.GET_ALL_PRODUCT);
  }

  saveProducts(obj:any){
    return this.http.post(Constant.API_ENDPOINT + Constant.METHODS.CREATE_PRODUCT, obj);
  }
  updateProducts(obj:any){
    return this.http.post(Constant.API_ENDPOINT + Constant.METHODS.UPDATE_PRODUCT, obj);
  }
  deleteProducts(id:number){
    return this.http.get(Constant.API_ENDPOINT + Constant.METHODS.Delete_PRODUCT+ id);
  }
  deleteCategory(id:number){
    return this.http.get(Constant.API_ENDPOINT + Constant.METHODS.DELETE_CATEGORY_BY_ID+ id);
  }
}
