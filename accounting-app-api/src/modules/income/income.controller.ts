import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth/jwt-auth.guard";
import { AuthanticatedUser } from "../auth/decorators/authanticated-user";
import { IncomeService } from "./income.service";

@UseGuards(JwtAuthGuard)
@Controller('income')
export class IncomeController {

  constructor(private incomeService: IncomeService) {
  }

  @Get("/allIncomes")
  async getAllIncome(@AuthanticatedUser() user): Promise<any>{
    return this.incomeService.getAllIncome(user);
  }

  @Get("/totalIncomes")
  async getTotalIncome(@AuthanticatedUser() user):Promise<any>{
    return this.incomeService.getTotalIncome(user);
  }

  @Post("/create")
  async createIncome(@AuthanticatedUser() user, @Body() body): Promise<any>{
    return this.incomeService.createIncome(user, body)
  }

  @Post("/delete")
  async deleteIncome(@Body() body): Promise<any>{
    return this.incomeService.deleteIncome(body)
  }

  @Post("/update")
  async updateIncome(@Body() body): Promise<any>{
    return this.incomeService.updateIncome(body);
  }
}
