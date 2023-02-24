import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersDTO } from "../shared/dto/users/Users.dto"
import { NewUserDTO } from "src/shared/dto/users/NewUser.dto";
import { UpdateUserDTO } from "src/shared/dto/users/UpdateUser.dto";
import { UsersIdDTO } from "src/shared/dto/users/UserId.dto";
import { ApiBearerAuth, ApiOperation, ApiParam, ApiProperty, ApiTags } from "@nestjs/swagger/dist";
import { UseGuards } from "@nestjs/common/decorators";
import { JwtAuthGuard } from "src/_auth/jwtAuthGuard";


@ApiTags("Users")
@Controller("api/v1/users")
export class UsersController{

    constructor(
        private readonly usersServe : UsersService,
    ) {}


    @ApiOperation({ summary : "Get All Users without gardens"})
    @Get()
    getAllUser() : Promise<UsersDTO[]>
    {
        return this.usersServe.getAllUser()
    }


    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth("access-token")
    @ApiOperation({ summary : "Get One User By his Id"})
    @Get(":id")
    @ApiParam({ name : "id", example : 1})
    getOneUserById(@Param('id', ParseIntPipe) userId : number) : Promise<UsersDTO>
    {
        return this.usersServe.getOneUserById(userId)
    }


    @ApiOperation({ summary : "Create new User"})
    @Post()
    createUser(@Body(ValidationPipe) newUser : NewUserDTO) : Promise<NewUserDTO>
    {
        return this.usersServe.createUser(newUser)
    }


    @ApiOperation({ summary : "Update user"})
    @Patch()
    updateUser(@Body(ValidationPipe) updateUser : UpdateUserDTO) : Promise<UpdateUserDTO>
    {
        return this.usersServe.updateUser(updateUser)
    }


    @ApiOperation({ summary : "Soft delete user by Id"})
    @Delete()
    deleteOneUser(@Body(ValidationPipe) deleteUser : UsersIdDTO) : Promise<UpdateUserDTO>
    {
        return this.usersServe.deleteUser(deleteUser)
    }


}