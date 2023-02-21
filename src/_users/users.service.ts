import { Injectable } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersId_DTO } from "src/shared/dto/UserId.dto";
import { UsersEntity } from "src/shared/entities/Users.entity";
import { ErrorMessage, ErrorStatus } from "src/shared/utilities/error.enum";
import { Repository } from "typeorm";

@Injectable()
export class UsersService{

    userList : string[] = ["tata", "toto", "tutu"]

    constructor(
        @InjectRepository(UsersEntity) private usersRepo : Repository<UsersEntity>
    ){}
    
    getAllUser() : Promise<UsersEntity[]>
    {
        return this.usersRepo.find({
            select : {
                name : true,
                pseudo : true,
                id : true
            }
        })
    }

    getOneUserById(userId : number) : Promise<UsersEntity>
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
}