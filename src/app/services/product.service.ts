import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient ) { }


  saveProducts(name,description,rate,discount,gst){
   return this.http.post("http://localhost:3000/api/products",{
      name:name,
      description:description,
      rate:rate,
      discount:discount,
      gst:gst
    })
  }
  getProducts(){
    return this.http.get("http://localhost:3000/api/products")
  }


}
