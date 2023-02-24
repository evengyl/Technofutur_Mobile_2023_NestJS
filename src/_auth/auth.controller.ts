import { Body, Controller, Get, Query, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { UsersIdDTO } from "src/shared/dto/users/UserId.dto";
import { AuthService } from "./auth.service";


@ApiTags("Authentification")
@Controller("api/v1/auth")
export class AuthController{

    constructor(private readonly authServe: AuthService) {}


    @Get()
    auth(@Query(ValidationPipe) userId : UsersIdDTO) : Promise<any>
    {
        return this.authServe.auth(userId)
    }
}