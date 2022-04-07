import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ExpenseModule} from "./modules/expense/expense.module";
import {HomeModule} from "./modules/home/home.module";
import {IncomeModule} from "./modules/income/income.module";
import {LoginModule} from "./modules/login/login.module";
import {NavbarModule} from "./modules/navbar/navbar.module";
import {RegisterModule} from "./modules/register/register.module";
import { AppRoutingModule } from './app-routing.module';
import {ContactModule} from "./modules/contact/contact.module";
import { FooterComponent } from './shareds/components/footer/footer.component';
import {AuthGuard} from "./core/guards/auth.guard";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./core/interceptors/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ExpenseModule,
    HomeModule,
    IncomeModule,
    LoginModule,
    NavbarModule,
    RegisterModule,
    AppRoutingModule,
    ContactModule
  ],
  providers: [AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
