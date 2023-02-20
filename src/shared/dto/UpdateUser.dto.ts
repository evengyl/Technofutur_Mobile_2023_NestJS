import { IsAlphanumeric, IsDefined, IsNumber, IsString, IsStrongPassword, Length, MaxLength, MinLength } from "class-validator"

export class UpdateUser_DTO{

    @IsDefined()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    //@Length(3,50) same que Minlength et MaxLength
    name : string

    @IsDefined()
    @IsString()
    @MinLength(6)
    @MaxLength(15)
    pseudo : string


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