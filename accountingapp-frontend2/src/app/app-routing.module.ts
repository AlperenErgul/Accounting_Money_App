import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from "./modules/navbar/components/navbar/navbar.component";
import {HomeComponent} from "./modules/home/components/home/home.component";
import {LoginComponent} from "./modules/login/components/login/login.component";
import {RegisterComponent} from "./modules/register/components/register/register.component";
import {ContactUsComponent} from "./modules/contact/components/contact-us/contact-us.component";
import {IncomeComponent} from "./modules/income/components/income/income.component";
import {ExpenseComponent} from "./modules/expense/components/expense/expense.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path:"" ,
    component: HomeComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"contactUs",
    component: ContactUsComponent
  },
  {
    path:"income",
    component: IncomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"expense",
    component: ExpenseComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
