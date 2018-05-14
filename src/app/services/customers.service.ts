import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CustomersService {

  constructor(private http: HttpClient) { }


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



}
