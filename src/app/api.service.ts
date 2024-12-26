import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url=environment.url;

  constructor(private http:HttpClient) { }


  getProducts(){
  
  return this.http.get('https://dummyjson.com/products')
    
  }
  
  getProductsById(id:any){
  
  return this.http.get(`https://dummyjson.com/products/${id}`)
  
  }
}
