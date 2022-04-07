import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from "sequelize-typescript";
import { UserEntity } from "./user.entity";

@Table
export class ExpenseEntity extends Model{

  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.STRING)
  description: string;

  @Column(DataType.INTEGER)
  expense: number;

  @ForeignKey(() => UserEntity)
  @Column(DataType.INTEGER)
  userId: number;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

}
