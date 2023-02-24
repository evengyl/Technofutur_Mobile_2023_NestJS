import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersDTO } from "../shared/dto/users/Users.dto"
import { NewUserDTO } from "src/shared/dto/users/NewUser.dto";
import { UpdateUserDTO } from "src/shared/dto/users/UpdateUser.dto";
import { UsersIdDTO } from "src/shared/dto/users/UserId.dto";

@Controller("api/v1/users")
export class UsersController{

    constructor(
        private readonly usersServe : UsersService,
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