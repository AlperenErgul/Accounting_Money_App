import {Component, OnInit} from '@angular/core';
import {ExpenseService} from "../../services/expense.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {deleteExpense} from "../../interfaces/expense";
import {Router} from "@angular/router";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenseList: any = []
  totalExpense: any = 0

  form = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    expense: new FormControl("", [Validators.required])
  });

  updateForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    expense: new FormControl("", [Validators.required])
  });

  updatingItem = {
    id: 1,
    title: "",
    description: "",
    expense: 1
  }

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  });

  constructor(private expenseService: ExpenseService, private router: Router) {
  }

  async ngOnInit() {
    this.expenseList = await this.getAllExpenses();
    this.totalExpense = await this.getTotalExpenses();
  }

  async createExpense() {
    await Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Income created',
      showConfirmButton: false,
      timer: 1500
    })
    return await this.expenseService.createExpense(this.form.value).then(() => {
      this.ngOnInit();
    });
  }

  async deleteExpense(id: deleteExpense) {
    await this.swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        this.expenseService.deleteExpense(id).then(() => {
          this.ngOnInit();
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  async updatingExpense(expense: any) {
    this.updatingItem.id = expense.id;
    this.updatingItem.title = expense.title;
    this.updatingItem.description = expense.description;
    this.updatingItem.expense = expense.expense;
  }

  async updateExpense() {
    return await this.expenseService.updateExpense(this.updatingItem).then(() => {
      this.ngOnInit();
    });
  }

  async getAllExpenses() {
    return await this.expenseService.getAllExpenses();
  }

  async getTotalExpenses() {
    return await this.expenseService.getTotalExpenses();
  }

  async goIncomes() {
    await this.router.navigate(["/income"]);
  }
}
