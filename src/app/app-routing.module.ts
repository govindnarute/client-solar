import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CustomersComponent } from "./customers/customers.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  {
  path:'',
  component: HomeComponent
},
  {
  path:'login',
  component: LoginComponent
},
{
  path:"customers",
  component:CustomersComponent
},
{
  path:"products",
  component:ProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
