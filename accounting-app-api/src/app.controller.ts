import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { AppService } from './app.service';
import { JwtAuthGuard } from "./modules/auth/jwt-auth/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get("test")
  getUser(@Request() req){
    return req.user;
  }
}
