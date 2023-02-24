import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from "@nestjs/common";
import { NewUserDTO } from "src/shared/dto/NewUser.dto";
import { UpdateUserDTO } from "src/shared/dto/UpdateUser.dto";
import { UsersIdDTO } from "src/shared/dto/UserId.dto";
import { UsersDTO } from "src/shared/dto/Users.dto";
import { UsersService } from "./users.service";

@Controller("api/v1/users")
export class UsersController{

    constructor(
        private readonly usersServe : UsersService
    ) {}


    @Get()
    getAllUser() : Promise<UsersDTO[]>
    {
        return this.usersServe.getAllUser()
    }


    @Get(":id")
    getOneUserById(@Param('id', ParseIntPipe) userId : number) : Promise<UsersDTO>
    {
        return this.usersServe.getOneUserById(userId)
    }


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