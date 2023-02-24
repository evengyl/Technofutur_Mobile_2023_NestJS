import { Injectable } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { NewUserDTO } from "src/shared/dto/users/NewUser.dto";
import { UpdateUserDTO } from "src/shared/dto/users/UpdateUser.dto";
import { UsersIdDTO } from "src/shared/dto/users/UserId.dto";
import { UsersDTO } from "src/shared/dto/users/Users.dto";
import { UsersEntity } from "src/shared/entities/Users.entity";
import { ErrorMessage, ErrorStatus } from "src/shared/utilities/error.enum";
import { Repository } from "typeorm";

@Injectable()
export class UsersService{


    constructor(
        @InjectRepository(UsersEntity) private usersRepo : Repository<UsersEntity>
    ){}
    
    async getAllUser() : Promise<UsersDTO[]>
    {
        return this.usersRepo.find({
            select : {
                name : true,
                pseudo : true,
                id : true
            }
        })
    }


    async getAllUserWithDelete() : Promise<UsersDTO[]>
    {
        return this.usersRepo.find({
            select : {
                name : true,
                pseudo : true,
                id : true
            },
            withDeleted : true
        })
    }

    async getOneUserById(userId : number) : Promise<UsersDTO>
    {

        return this.usersRepo.findOneOrFail({
            select : { id : true},
            where : { id : userId }
        })
        .catch((error) => {
            console.log(ErrorMessage.USER_NOT_FOUND)
            throw new HttpException(ErrorMessage.USER_NOT_FOUND, ErrorStatus.USER_NOT_FOUND)
        })

    }

    async checkUserByPseudo(pseudo : string) : Promise<boolean>
    {
        return this.usersRepo.findOneOrFail({
            select : { id : true},
            where : { pseudo : pseudo }
        })
        .then(_ => {
            return true
        })
        .catch(_ => {
            return false
        })
    }


    async checkUserById(userId : number) : Promise<boolean>
    {
        return this.usersRepo.findOneOrFail({
            select : { id : true},
            where : { id : userId }
        })
        .then(_ => {
            return true
        })
        .catch(_ => {
            return false
        })
    }

    async createUser(newUser : NewUserDTO) : Promise<NewUserDTO>
    {
        if(await this.checkUserByPseudo(newUser.pseudo))
            throw new HttpException(ErrorMessage.USER_ALREADY_EXIST, ErrorStatus.USER_ALREADY_EXIST)
        
        let createdUser : UsersEntity = this.usersRepo.create(newUser)
        
        return this.usersRepo.save(createdUser)
        .catch(_ => { 
            throw new HttpException(ErrorMessage.ERROR_UNKNOW, ErrorStatus.ERROR_UNKNOW)
        })
    }


    async updateUser(updateUser : UpdateUserDTO) : Promise<UpdateUserDTO>
    {
        if(!await this.checkUserById(updateUser.id))
            throw new HttpException(ErrorMessage.USER_NOT_FOUND, ErrorStatus.USER_NOT_FOUND)

        return await this.usersRepo.save(updateUser)
        .catch(_ => { 
            throw new HttpException(ErrorMessage.ERROR_UNKNOW, ErrorStatus.ERROR_UNKNOW)
        })

        //moins utiliser mais malheureusement un poil plus performant
        //let res = await this.usersRepo.update({ id : updateUser.id }, { name : updateUser.name, pseudo : updateUser.pseudo})
    }


    async deleteUser(userId : UsersIdDTO) : Promise<UpdateUserDTO>{
        
        if(!await this.checkUserById(userId.id))
            throw new HttpException(ErrorMessage.USER_NOT_FOUND, ErrorStatus.USER_NOT_FOUND)
        

        let userToDelete = this.usersRepo.create({ id : userId.id})
        
        // return this.usersRepo.remove(userToDelete)
        // .catch(_ => { 
        //     throw new HttpException(ErrorMessage.ERROR_UNKNOW, ErrorStatus.ERROR_UNKNOW)
        // })

        // return this.usersRepo.delete({ id : userId.id })
        // .then((res) => {
        //     console.log(res)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })


        return this.usersRepo.softRemove(userToDelete)
        .then((res) => {
            return res
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
            throw new HttpException(ErrorMessage.ERROR_UNKNOW, ErrorStatus.ERROR_UNKNOW)
        })

        // return this.usersRepo.softDelete({ id : userId.id })
        // .then((res) => {
        //     console.log(res)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })

    }
}


