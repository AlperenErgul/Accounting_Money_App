import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthController } from "./modules/auth/auth.controller";
import { AuthService } from "./modules/auth/auth.service";
import { UserService } from "./modules/user/user.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { IncomeModule } from './modules/income/income.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { UserModule } from './modules/user/user.module';
import { IncomeController } from './modules/income/income.controller';
import { ExpenseController } from './modules/expense/expense.controller';
import { UserController } from './modules/user/user.controller';
import { IncomeService } from './modules/income/income.service';
import { ExpenseService } from './modules/expense/expense.service';

@Module({
  imports: [
    AuthModule,
    IncomeModule,
    ExpenseModule,
    UserModule,
    SequelizeModule.forRoot({
      dialect: "sqlite",
      storage: "db/db.sqlite3",
      autoLoadModels: true,
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
