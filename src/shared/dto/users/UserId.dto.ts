import { IsNumber } from "class-validator";
import { IsString } from "class-validator";

export class UsersIdDTO{

    @IsNumber()
    id : number
}