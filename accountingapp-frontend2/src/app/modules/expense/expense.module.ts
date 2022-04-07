import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './components/expense/expense.component';
import {ExpenseService} from "./services/expense.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    ExpenseComponent
  ],
  providers:[
    ExpenseService
  ]
})
export class ExpenseModule { }
