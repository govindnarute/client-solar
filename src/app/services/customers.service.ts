import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from "@angular/common/http";

import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';

@Injectable()
export class CustomersService {

  constructor(private http: HttpClient, private _http:Http) { }


  saveCustomer(firstName,lastName,mobile,email,address){
   return this.http.post("http://localhost:3000/api/customers",{
      firstName:firstName,
      lastName:lastName,
      mobile:mobile,
      email:email,
      address:address
    })
  }
  getCustomers(){
    return this.http.get("http://localhost:3000/api/customers")
  }
  deleteCustomer(id){
    return this.http.delete("http://localhost:3000/api/customers/"+id,{})
  }
 downloadPdf(){
   let headers = new Headers({ 
      'Content-Type': 'application/json', 
      'Accept': 'application/pdf'
     
    });
    let options = new RequestOptions({ headers: headers });        
    options.responseType = ResponseContentType.Blob;
    return this._http.get("http://localhost:3000/api/customers/pdf",options)
  }


}
