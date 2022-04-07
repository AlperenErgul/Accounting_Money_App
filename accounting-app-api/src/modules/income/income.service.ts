import { Injectable } from '@nestjs/common';
import { IncomeEntity } from "../../entity/income.entity";

@Injectable()
export class IncomeService {

  async getAllIncome(user) {
    return await IncomeEntity.findAll({
      where:{
        userId: user.id
      }
    })
  }

  async getTotalIncome(user) {
    return await IncomeEntity.sum("income" , {where:{userId:user.id}});
  }

  async createIncome(user, body) {
    return await IncomeEntity.create({
      title: body.title,
      description: body.description,
      income: body.income,
      userId: user.id
    })
  }

  async deleteIncome(body) {
    return await IncomeEntity.destroy({where:{id : body.id}});
  }

  async updateIncome(income) {
    return await IncomeEntity.update(income , {where: {id: income.id}})
  }

}
