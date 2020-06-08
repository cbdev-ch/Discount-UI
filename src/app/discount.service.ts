import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product/product.model';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  baseURL = 'https://api.cbdev.ch/v1/discounts/';

  constructor(private httpClient: HttpClient) { }

  getCategories(){
    return this.httpClient.get<string[]>(this.baseURL + 'categories');
  }

  getProducts(category: string){
    return this.httpClient.get<Product[]>(this.baseURL + category);
  }

}
