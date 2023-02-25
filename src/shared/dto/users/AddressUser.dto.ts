import { ApiProperty } from "@nestjs/swagger"
import { IsDefined, IsNumber, IsString } from "class-validator"

export class AddressUserDTO{
    
    @ApiProperty({ example : "test de rue"})
    @IsString()
    street : string

    @ApiProperty({ example : 58})
    @IsNumber()
    number : number

    @ApiProperty({ example : "A172839B"})
    @IsString()
    zip : string


    @ApiProperty({ example : "GodOfBatard City"})
    @IsString()
    city : string
}