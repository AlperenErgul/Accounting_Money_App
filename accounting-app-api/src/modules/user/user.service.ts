import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserEntity } from "../../entity/user.entity";
import { IncomeEntity } from "../../entity/income.entity";
import { ExpenseEntity } from "../../entity/expense.entity";

@Injectable()
export class UserService {

  constructor(
    @InjectModel(UserEntity)
    private userRepository: typeof UserEntity
  ) {
  }

  async findOne(username: string): Promise<any> {
    return await this.userRepository.findOne({
      where: {
        username:username
      }
    });
  }


  async getUserMoney(user): Promise<any> {
    const totalIncome = await IncomeEntity.sum("income", {where: {userId: user.id}});
    const totalExpense = await ExpenseEntity.sum("expense", {where: {userId: user.id}});

    return totalIncome - totalExpense;
  }

  async updateUser(user, body): Promise<any> {
    return await UserEntity.update(body, {where:{username: user.username}});
  }
}
