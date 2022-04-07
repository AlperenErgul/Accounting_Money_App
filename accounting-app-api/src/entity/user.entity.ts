import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique
} from "sequelize-typescript";
import { IncomeEntity } from "./income.entity";
import { ExpenseEntity } from "./expense.entity";

@Table
export class UserEntity extends Model {

  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Unique
  @Column(DataType.STRING)
  username: string;

  @Unique
  @Column(DataType.STRING)
  email: string;

  @Column(DataType.INTEGER)
  password: number;

  @HasMany(() => IncomeEntity, { foreignKey: "userId", as: "incomes" })
  incomes: IncomeEntity;

  @HasMany(() => ExpenseEntity, { foreignKey: "userId", as: "expenses" })
  expenses: IncomeEntity;
}
