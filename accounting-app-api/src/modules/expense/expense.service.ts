import { Injectable } from '@nestjs/common';
import { ExpenseEntity } from "../../entity/expense.entity";

@Injectable()
export class ExpenseService {

  async getAllExpense(user): Promise<any> {
    return ExpenseEntity.findAll({ where:{userId: user.id}});
  }

  async getTotalExpense(user): Promise<any> {
    return ExpenseEntity.sum("expense" , {where:{userId:user.id}});
  }

  async createExpense(user, body): Promise<any> {
    return ExpenseEntity.create({
      title: body.title,
      description: body.description,
      expense: body.expense,
      userId: user.id
    })
  }

  async deleteExpense(body): Promise<any> {
    return ExpenseEntity.destroy({where:{id:body.id}});
  }

  async updateExpense(expense): Promise<any> {
    return ExpenseEntity.update(expense, {where:{id:expense.id}})
  }
}
