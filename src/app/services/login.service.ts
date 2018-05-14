import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {APIConstant} from '../constant/api.constant';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  logMeIn(userName,pwd){
    return this.http.post("http://localhost:3000/api/users/login"  ,{
      userName:userName,
      pwd:pwd
    })
  }

}
