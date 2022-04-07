import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../../modules/login/services/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  async canActivate(){
    if(await this.loginService.loggedIn()){
      return true;
    }else {
     await this.router.navigate(["login"]);
      return false;
    }
  }

}
