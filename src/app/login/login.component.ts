import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService ,private router:Router ) { }

  userName:String;
  password:String;
  ngOnInit() {
  }



  login(){
   
    if(this.userName==""||this.password==""
    ||this.userName==undefined ||this.password==""){
      alert("please enter username & password");
      return
    }

    this.loginService.logMeIn(this.userName,this.password).subscribe(res=>{
      console.log(res)
      console.log("success")
      this.router.navigateByUrl("/customers")
    },
    err=>{
      console.log(err)
      console.log("success")
    })

  }

}
