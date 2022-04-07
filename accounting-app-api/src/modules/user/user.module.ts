import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { UserEntity } from "../../entity/user.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
  imports:[
    SequelizeModule.forFeature([UserEntity])
  ],
  controllers:[UserController],
  providers:[UserService],
  exports:[UserService]
})
export class UserModule {}
