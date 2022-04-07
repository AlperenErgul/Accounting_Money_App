import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "../../entity/user.entity";
import { use } from "passport";

@Injectable()
export class AuthService {

  constructor(private userService: UserService,
              private jwtService: JwtService) {
  }

  async validateUser(username: string, pass: number): Promise<any> {
    const user = await this.userService.findOne(username);


    if (user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {

    let user2 = await this.userService.findOne(user.username)
    const payload = {username: user2.username, id: user2.id};

    return{
      acces_token: this.jwtService.sign(payload)
    }

  }


  async register(newUser:any) {
    return UserEntity.create(newUser)
  }
}
