import { IsDefined, IsNumber } from "class-validator"


export class NewGardensDTO{
    
    @IsDefined()
    @IsNumber()
    taille : number

    @IsDefined()
    @IsNumber()
    x : number

    @IsDefined()
    @IsNumber()
    y : number
}