import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth/jwt-auth.guard";
import { ExpenseService } from "./expense.service";
import { AuthanticatedUser } from "../auth/decorators/authanticated-user";

@UseGuards(JwtAuthGuard)
@Controller('expense')
export class ExpenseController {

  constructor(private expenseServices: ExpenseService) {
  }

  @Get("/allExpenses")
  async getAllExpense(@AuthanticatedUser() user):Promise<any>{
    return this.expenseServices.getAllExpense(user);
  }

  @Get("/totalExpenses")
  async getTotalExpense(@AuthanticatedUser() user): Promise<any>{
    return this.expenseServices.getTotalExpense(user);
  }

  @Post("/create")
  async createExpense(@AuthanticatedUser() user, @Body() body):Promise<any>{
    return this.expenseServices.createExpense(user, body);
  }

  @Post("/delete")
  async deleteExpense(@Body() body):Promise<any>{
    return this.expenseServices.deleteExpense(body);
  }

  @Post("/update")
  async updateExpense(@Body() body):Promise<any>{
    return this.expenseServices.updateExpense(body);
  }


}
