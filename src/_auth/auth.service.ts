import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersIdDTO } from "src/shared/dto/users/UserId.dto";
import { UsersService } from "src/_users/users.service";
import { secret } from "./JWT/secret";

@Injectable()
export class AuthService{

    constructor(
        private readonly usersServe : UsersService,
        private readonly jwtServe : JwtService
    ) { }


    async auth(userId : UsersIdDTO){

        let user = await this.usersServe.getOneUserById(userId.id)

        return {
            "access_token" : this.jwtServe.sign({ sub : user.id }, { secret : secret }) 
        }
    }
}