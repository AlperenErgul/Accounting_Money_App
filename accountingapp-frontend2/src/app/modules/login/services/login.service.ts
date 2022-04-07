import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  isLogin: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  async loginUser(loginUser: any){
      return await this.http.post(environment.apiUrl+"/auth/login", loginUser).toPromise();
  }

  async loggedIn():Promise<boolean>{
    const token = await localStorage.getItem("token");
    if(!token){
      return false;
    }
    else{
      this.isLogin = true;
      const session = await this.http.get(environment.apiUrl+"/test").toPromise();
      return !!session;
    }
  }

  async logout(){
    await localStorage.clear();
    this.isLogin = false;
    await this.router.navigate(["/login"]);
  }

}
