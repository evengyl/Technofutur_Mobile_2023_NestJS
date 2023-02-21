import { IsNumber } from "class-validator";
import { IsString } from "class-validator";

export class UsersId_DTO{

    @IsNumber()
    id : number
}