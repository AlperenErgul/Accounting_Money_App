import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../../services/register.service";
import {Router} from "@angular/router";
import Swal  from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {

  }

  async registerUser():Promise<boolean> {
    if(await this.registerService.registerUser(this.form.value)){
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User Registered',
        showConfirmButton: false,
        timer: 1500
      });
      await this.router.navigate(["login"]);
      return true;
    }else{
      //Register işlemi gerçekleşmediği zaman bu bloğa girmiyor hata
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User Registered',
        showConfirmButton: false,
        timer: 1500
      });
      console.log("olumsuz")
      return false;
    }
  }
}
