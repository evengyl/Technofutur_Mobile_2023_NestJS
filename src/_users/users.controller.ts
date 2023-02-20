import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Ip, Next, Param, ParseIntPipe, Patch, Post, Query, Request, Response, Session, ValidationPipe } from "@nestjs/common";
import { UpdateUser_DTO } from "src/shared/dto/UpdateUser.dto";
import { UsersId_DTO } from "src/shared/dto/UserId.dto";
import { ErrorMessage, ErrorStatus } from "src/shared/utilities/error.enum";
import { SuccessMessage } from "src/shared/utilities/success.enum";

@Controller("api/v1/users")
export class UsersController{


    @Get()
    getAllUser()
    {
        return ["tata", "toto"]
    }


    @Get()
    getOneUserQuery(@Query() userId : any)
    {
        console.log(userId)
        if(userId.id)
            return ["real USer"]
        else
            return ["tata", "toto"]
    }


    @Get(":id")
    getOneUserById(@Param('id', ParseIntPipe) userId : number)
    {
        console.log("User id du get one :", userId)
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