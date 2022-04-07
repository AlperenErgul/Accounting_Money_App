import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './components/income/income.component';
import {IncomeService} from "./services/income.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    IncomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    IncomeComponent,
  ],
  providers:[
    IncomeService
  ]
})
export class IncomeModule { }
