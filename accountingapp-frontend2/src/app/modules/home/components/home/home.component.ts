import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async goContactUs() {
    await this.router.navigate(["/contactUs"]);
  }

  async goLogin() {
    await this.router.navigate(["/login"]);
  }

  async goRegister() {
    await this.router.navigate(["/register"]);
  }

}
