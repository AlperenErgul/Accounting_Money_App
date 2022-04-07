import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {createIncome, deleteIncome, updateIncome} from "../interfaces/income";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http: HttpClient) { }

  async createIncome(income: createIncome){
    return await this.http.post(environment.apiUrl+"/income/create", income).toPromise();
  }

  async deleteIncome(id: deleteIncome){
    return await this.http.post(environment.apiUrl + "/income/delete", {id}).toPromise();
  }

  async updateIncome(income: updateIncome){
    return await this.http.post(environment.apiUrl + "/income/update", income).toPromise();
  }

  async getAllIncomes(){
    return await this.http.get(environment.apiUrl + "/income/allIncomes").toPromise();
  }

  async getTotalIncomes(){
    return await this.http.get(environment.apiUrl + "/income/totalIncomes").toPromise();
  }
}
