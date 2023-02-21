import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Ip, Next, Param, ParseIntPipe, Patch, Post, Query, Request, Response, Session, ValidationPipe } from "@nestjs/common";
import { UpdateUser_DTO } from "src/shared/dto/UpdateUser.dto";
import { UsersId_DTO } from "src/shared/dto/UserId.dto";
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
        @Param('id', ParseIntPipe) userId : number //on a [0,1,2] +1 [1,2,3]
    ) : Promise<UsersEntity>
    {
        /*
        en query je recois un arrya [ userId : 1]
        alors que mon dto est type pour faire userId{ id : 1}
        */
        return this.usersServe.getOneUserById(userId)
    }


    // @Get(":id")
    // getOneUserById(@Param('id', ParseIntPipe) userId : number)
    // {
    //     console.log("User id du get one :", userId)
    // }


    // @Get(":id")
    // getOneUser(@Param() userId : any)
    // {
    //     console.log(userId)
    // }




    @Post()
    createUser(@Body() newUser : any)
    {
        console.log(newUser)
    }

    @Patch(":id")
    updateUser(
        @Param("id", ParseIntPipe) id : number,
        @Body(ValidationPipe) updateUser : UpdateUser_DTO
    )
    {
        let isOk = null
        if(!isOk){
            console.log("Log Error : ", ErrorMessage.USER_NOT_FOUND)
            throw new HttpException(ErrorMessage.USER_NOT_FOUND, ErrorStatus.USER_NOT_FOUND)

        }
        else{
            console.log("Log Success : ", SuccessMessage.USER_GRANTED)
            return ["user 1 blabla"]
        }
        console.log(updateUser)
    }

    @Delete()
    deleteOneUser(@Body() deleteUser : any)
    {
        console.log(deleteUser)
    }
}