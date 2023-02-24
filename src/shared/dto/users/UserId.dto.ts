import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNumberString } from "class-validator";
import { IsString } from "class-validator";

export class UsersIdDTO{

    @ApiProperty({ example : 1})
    @IsNumberString()
    id : number
}