import { IsDefined, IsNumber } from "class-validator"


export class UpdateGardensDTO{
    
    @IsDefined()
    @IsNumber()
    taille : number
}