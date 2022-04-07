import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserEntity } from "../../../entity/user.entity";

export const AuthanticatedUser = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  const user: UserEntity = req.user;
  //Bu dekaratörü kullandığımızda isteği atan kullanıcıyı döndürür
  return data ? user && user[data] : user;
});
