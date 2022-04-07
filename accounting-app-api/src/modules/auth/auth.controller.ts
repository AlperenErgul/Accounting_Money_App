import { BadRequestException, Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./login auth/local-auth.guard";
import { AuthanticatedUser } from "./decorators/authanticated-user";
import { UserEntity } from "../../entity/user.entity";

@Controller("auth")
export class AuthController {

  constructor(private authService: AuthService) {
  }


  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Body() user) {
    return await this.authService.login(user);
  }

  @Post("/register")
  async register(@Body() newUser){
    const user = await UserEntity.findOne({where:{email:newUser.email}});
    if (user){
      throw new BadRequestException("Bu e-mail ile daha önce kayıt yapılmış!");
    }

    const user_ = await UserEntity.findOne({where:{username:newUser.username}});
    if(user_){
      throw new BadRequestException("Bu kullanıcı adı ile daha önce kayıt yapılmış!");
    }
    return this.authService.register(newUser);
  }


}
