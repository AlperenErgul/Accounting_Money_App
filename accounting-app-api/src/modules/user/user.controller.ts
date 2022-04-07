import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth/jwt-auth.guard";
import { AuthanticatedUser } from "../auth/decorators/authanticated-user";
import { UserService } from "./user.service";
import { UserEntity } from "../../entity/user.entity";

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get("/money")
  async getUserMoney(@AuthanticatedUser() user): Promise<any>{
    return await this.userService.getUserMoney(user);
  }

  @Post()
  async updateUser(@AuthanticatedUser() user, @Body() body): Promise<any>{
    return this.userService.updateUser(user,body);
  }



}
