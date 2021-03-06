import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { }

  async registerUser(registerUser: any):Promise<boolean>{

    return !!await this.http.post(environment.apiUrl+"/auth/register", registerUser).toPromise();

  }
}
