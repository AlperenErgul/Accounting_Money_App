import {Component, OnInit} from '@angular/core';
import {IncomeService} from "../../services/income.service";
import {createIncome, deleteIncome, income, updateIncome} from "../../interfaces/income";
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  incomeList: any = []
  totalIncome: any = 0

  form = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    income: new FormControl("", [Validators.required])
  });

  updateForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    income: new FormControl("", [Validators.required])
  });

  updatingItem = {
    id: 1,
    title: "",
    description: "",
    income: 1
  }



  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  });

  constructor(private incomeService: IncomeService, private  router: Router) {
  }

  async ngOnInit() {
    this.incomeList = await this.getAllIncomes();
    this.totalIncome = await this.getTotalIncomes();
  }

  async createIncome() {
    await Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Income created',
      showConfirmButton: false,
      timer: 1500
    })
    return await this.incomeService.createIncome(this.form.value).then(() => {
      this.ngOnInit();
    });
  }

  async deleteIncome(id: deleteIncome) {
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
        this.incomeService.deleteIncome(id).then(() => {
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

  async updatingIncome(income: any) {
    this.updatingItem.id = income.id;
    this.updatingItem.title = income.title;
    this.updatingItem.description = income.description;
    this.updatingItem.income = income.income;
  }

  async updateIncome() {
    return await this.incomeService.updateIncome(this.updatingItem).then(() => {
      this.ngOnInit();
    });
  }

  async getAllIncomes() {
    return await this.incomeService.getAllIncomes();
  }

  async getTotalIncomes() {
    return  await this.incomeService.getTotalIncomes();
  }

  async goExpenses() {
    await this.router.navigate(["expense"])
  }
}
