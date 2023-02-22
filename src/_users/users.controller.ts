import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Ip, Next, Param, ParseIntPipe, Patch, Post, Query, Request, Response, Session, ValidationPipe } from "@nestjs/common";
import { NewUserDTO } from "src/shared/dto/NewUser.dto";
import { UpdateUserDTO } from "src/shared/dto/UpdateUser.dto";
import { UsersIdDTO } from "src/shared/dto/UserId.dto";
import { UsersEntity } from "src/shared/entities/Users.entity";
import { ErrorMessage, ErrorStatus } from "src/shared/utilities/error.enum";
import { SuccessMessage } from "src/shared/utilities/success.enum";
import { UsersService } from "./users.service";

@Controller("api/v1/users")
export class UsersController{

    constructor(
        private readonly usersServe : UsersService
    ) {}



    @Get()
    getAllUser() : Promise<UsersEntity[]>
    {
        return this.usersServe.getAllUser()
    }


    @Get(":id")
    getOneUserById(
        @Param('id', ParseIntPipe) userId : number
    ) : Promise<UsersEntity>
    {
        return this.usersServe.getOneUserById(userId)
    }



    //vlaidation pipe dans ce cas, a besoin d'avoir class validator decorator dans le dto ! sinon ne sers à rien
    @Post()
    createUser(@Body(ValidationPipe) newUser : NewUserDTO) : Promise<NewUserDTO>
    {
        return this.usersServe.createUser(newUser)
    }


    @Patch()
    updateUser(@Body(ValidationPipe) updateUser : UpdateUserDTO) : Promise<UpdateUserDTO>
    {
        return this.usersServe.updateUser(updateUser)
    }

    @Delete()
    deleteOneUser(@Body(ValidationPipe) deleteUser : UsersIdDTO) : Promise<UpdateUserDTO>
    {
        return this.usersServe.deleteUser(deleteUser)
    }
}