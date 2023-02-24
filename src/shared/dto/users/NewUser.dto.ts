import { ApiProperty } from "@nestjs/swagger"
import { IsDefined, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator"


export class NewUserDTO{
    

    @ApiProperty({ example : "Loic"})
    @IsDefined()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    //@Length(3,50) same que Minlength et MaxLength
    name : string


    @ApiProperty({ example : "Evengyl"})
    @IsDefined()
    @IsString()
    @MinLength(6)
    @MaxLength(15)
    pseudo : string


    @ApiProperty({ example : "Test1234__"})
    @IsDefined()
    @IsStrongPassword({
        minLength : 8,
        minLowercase : 1,
        minUppercase : 1,
        minNumbers : 1,
        minSymbols : 1
    })
    // Upper lette, number, char, symbol
    password : string
}