import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getAllProduct(){
    return this.http.get("https://fakestoreapi.com/products")

  }

  getAllcategory(){
    return this.http.get("https://fakestoreapi.com/products/categories")
  }

  getProductByCategory(keyword:string){
    return this.http.get("https://fakestoreapi.com/products/category/" + keyword)
  }
  getProductDeltails(id:number){
    return this.http.get("https://fakestoreapi.com/products/" + id)
  }
}
