import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RegisterService} from "./services/register.service";



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
  exports:[
    RegisterComponent
  ],
  providers:[
    RegisterService
  ]
})
export class RegisterModule { }
