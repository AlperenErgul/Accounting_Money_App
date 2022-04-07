import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  loginUser = {
    username:"",
    password:0
  }

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async controlUser() {
    this.loginUser.username = this.form.value.username;
    this.loginUser.password = +this.form.value.password;

    let token:any = await this.loginService.loginUser(this.loginUser);

    await localStorage.setItem("token", token.acces_token);
    await this.router.navigate(["/income"])
    await this.form.reset();
  }
}
