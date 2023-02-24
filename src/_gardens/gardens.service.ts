import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NewGardensDTO } from "src/shared/dto/gardens/NewGardens.dto";
import { UpdateGardensDTO } from "src/shared/dto/gardens/UpdateGarden.dto";
import { GardensEntity } from "src/shared/entities/Gardens.entity";
import { UsersEntity } from "src/shared/entities/Users.entity";
import { ErrorMessage, ErrorStatus } from "src/shared/utilities/error.enum";
import { UsersService } from "src/_users/users.service";
import { Repository } from "typeorm";

@Injectable()
export class GardensService{

    constructor(
        @InjectRepository(UsersEntity) private usersRepo : Repository<UsersEntity>,
        @InjectRepository(GardensEntity) private gardensRepo : Repository<GardensEntity>,
        private readonly usersServe : UsersService
    ){}
    
    async getAllGardens(userId : number) : Promise<any>
    {
        return this.usersRepo.findOneOrFail({
            where : { id : userId},
            relations : { gardens : true}
        })
        .catch((error) => {
            console.log(ErrorMessage.USER_NOT_FOUND)
            throw new HttpException(ErrorMessage.USER_NOT_FOUND, ErrorStatus.USER_NOT_FOUND)
        })
    }

    
    async getOneGardensById(userId : number, gardenId : number) : Promise<any>
    {
        return this.usersRepo.findOneOrFail({
            where : {
                id : userId,
                gardens : { id : gardenId}
            },
            relations : { gardens : true}
        })
        .catch((error) => {
            console.log(ErrorMessage.USER_NOT_FOUND)
            throw new HttpException(ErrorMessage.USER_NOT_FOUND, ErrorStatus.USER_NOT_FOUND)
        })
    }


    async createGardens(userId : number, gardenToCreate : NewGardensDTO) : Promise<any>
    {
        let user : UsersEntity = await this.usersRepo.findOneOrFail({
            where : { id : userId },
            relations : { gardens : true}
        })
        .catch((error) => {
            console.log(ErrorMessage.USER_NOT_FOUND)
            throw new HttpException(ErrorMessage.USER_NOT_FOUND, ErrorStatus.USER_NOT_FOUND)
        })

        let newGarden : GardensEntity = this.gardensRepo.create(gardenToCreate)
        await this.gardensRepo.save(newGarden)

        user.gardens.push(newGarden)

        return await this.usersRepo.save(user)
        .catch((error) => {
            console.log(error)
            console.log(ErrorMessage.GARDEN_NOT_ADD_TO_USER)
            throw new HttpException(ErrorMessage.GARDEN_NOT_ADD_TO_USER, ErrorStatus.GARDEN_NOT_ADD_TO_USER)
        })
    }


    async updateGardens(userId : number, gardenId : number, gardenToUpdate : UpdateGardensDTO) : Promise<any>
    {
        let user : UsersEntity = await this.usersRepo.findOneOrFail({
            where : {
                id : userId,
                gardens : {
                    id : gardenId
                }
            },
            relations : { gardens : true}
        })
        .catch((error) => {
            console.log(ErrorMessage.USER_NOT_FOUND)
            throw new HttpException(ErrorMessage.USER_NOT_FOUND, ErrorStatus.USER_NOT_FOUND)
        })

        user.gardens[0].taille = gardenToUpdate.taille


        return await this.usersRepo.save(user)
        .catch((error) => {
            console.log(error)
            console.log(ErrorMessage.GARDEN_NOT_ADD_TO_USER)
            throw new HttpException(ErrorMessage.GARDEN_NOT_ADD_TO_USER, ErrorStatus.GARDEN_NOT_ADD_TO_USER)
        })
    }


    async deleteGardens(userId : number, gardenId : any) : Promise<any>
    {
        let user : UsersEntity = await this.usersRepo.findOneOrFail({
            where : {
                id : userId,
                gardens : {
                    id : gardenId
                }
            },
            relations : { gardens : true}
        })
        .catch((error) => {
            console.log(ErrorMessage.USER_NOT_FOUND)
            throw new HttpException(ErrorMessage.USER_NOT_FOUND, ErrorStatus.USER_NOT_FOUND)
        })


        return await this.gardensRepo.softRemove(user.gardens[0])
    }
}