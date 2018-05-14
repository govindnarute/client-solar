import { Component, OnInit } from '@angular/core';
import { CustomersService } from "../services/customers.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

firstName:any;
lastName:any;
mobile:number;
address:any;
email:string;
customers:any;
custId:any;

  constructor(private customersService: CustomersService ) { }

  ngOnInit() {
    this.getCustomers();
  }

addCustomer(){
  if(this.address==undefined||this.email==undefined
  ||this.mobile==undefined||this.firstName==undefined
  || this.lastName==undefined){
    alert("Please enter mandatory information.")
    return
  }
this.customersService.saveCustomer(this.firstName,this.lastName,this.mobile,this.email,this.address).subscribe(res=>{
  console.log(res)
})
  
}


getCustomers(){
this.customersService.getCustomers().subscribe(res=>{
this.customers=res
})
}
setCustID(id){
this.custId=id
console.log(this.custId)
}

deleteCustomer(id){
  this.customersService.deleteCustomer(this.custId).subscribe(res=>{
    
  })
}

}
