import { Module } from '@nestjs/common';
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./login auth/local.strategy";
import { UserModule } from "../user/user.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constant/constants";
import { JwtStrategy } from "./jwt-auth/jwt.strategy";

@Module({
  imports:[
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "1d" }
    })
  ],
  providers:[
    AuthService,
    LocalStrategy,
    JwtStrategy,

  ],
  controllers:[
    AuthController
  ],
  exports:[
    AuthService
  ]
})
export class AuthModule {}
