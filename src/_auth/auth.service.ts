import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy as passPortJwtStrategy } from "passport-jwt";
import { UsersIdDTO } from "src/shared/dto/users/UserId.dto";
import { UsersService } from "src/_users/users.service";
import { secret } from "./secret";

@Injectable()
export class AuthService extends PassportStrategy(passPortJwtStrategy)
{

    constructor(
        private readonly usersServe : UsersService,
        private readonly jwtServe : JwtService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret,
          });
    }


    async auth(userId : UsersIdDTO){

        let user = await this.usersServe.getOneUserById(userId.id)

        return {
            "access_token" : this.jwtServe.sign({ sub : user.id }, { secret : secret }) 
        }
    }

    async validate(payload: any) {
        return { userId: payload.sub }
      }
}