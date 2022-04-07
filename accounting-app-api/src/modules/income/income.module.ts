import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { IncomeEntity } from "../../entity/income.entity";
import { IncomeController } from "./income.controller";
import { IncomeService } from "./income.service";


@Module({
  imports:[SequelizeModule.forFeature([IncomeEntity])],
  controllers:[IncomeController],
  providers:[IncomeService]
})
export class IncomeModule {}
