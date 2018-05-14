import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  name:any;
  description:any;
  rate:any;
  discount:any;
  gst:any;
  products:any;
  

  ngOnInit() {
    this.getProducts();
  }

  saveProduct(){
    if(this.name==undefined||this.description==undefined||
    this.gst==undefined||this.discount==undefined){
      alert("Please enter mandatory information.")
      return
    }
    alert("test")
    this.productService.saveProducts(this.name,this.description,this.rate,this.discount,this.gst).subscribe(res=>{
      console.log(res)
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(res=>{
  this.products=res
    })
  }
}
