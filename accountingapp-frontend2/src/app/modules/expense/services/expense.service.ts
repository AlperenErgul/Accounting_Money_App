import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {createExpense, deleteExpense, updateExpense} from "../interfaces/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) {
  }

  async createExpense(expense: createExpense){
    return await this.http.post(environment.apiUrl + "/expense/create", expense).toPromise();
  }

  async deleteExpense(id: deleteExpense) {
    return await this.http.post(environment.apiUrl + "/expense/delete", {id}).toPromise();
  }

  async updateExpense(expense: updateExpense) {
    return await this.http.post(environment.apiUrl + "/expense/update", expense).toPromise();
  }

  async getAllExpenses() {
    return await this.http.get(environment.apiUrl + "/expense/allExpenses").toPromise();
  }

  async getTotalExpenses() {
    return await this.http.get(environment.apiUrl + "/expense/totalExpenses").toPromise();
  }
}
