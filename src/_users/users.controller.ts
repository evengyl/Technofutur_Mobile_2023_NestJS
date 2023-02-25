import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersDTO } from "../shared/dto/users/Users.dto"
import { NewUserDTO } from "src/shared/dto/users/NewUser.dto";
import { UpdateUserDTO } from "src/shared/dto/users/UpdateUser.dto";
import { UsersIdDTO } from "src/shared/dto/users/UserId.dto";
import { ApiBearerAuth, ApiOperation, ApiParam, ApiProperty, ApiTags } from "@nestjs/swagger/dist";
import { UseGuards } from "@nestjs/common/decorators";
import { JwtAuthGuard } from "src/_auth/jwtAuthGuard";
import { AddressUserDTO } from "src/shared/dto/users/AddressUser.dto";


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


    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth("access-token")
    @ApiOperation({ summary : "Create new User"})
    @Post()
    createUser(@Body(ValidationPipe) newUser : NewUserDTO) : Promise<NewUserDTO>
    {
        return this.usersServe.createUser(newUser)
    }


    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth("access-token")
    @ApiOperation({ summary : "Update user"})
    @Patch()
    updateUser(@Body(ValidationPipe) updateUser : UpdateUserDTO) : Promise<UpdateUserDTO>
    {
        return this.usersServe.updateUser(updateUser)
    }


    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth("access-token")
    @ApiOperation({ summary : "Soft delete user by Id"})
    @Delete()
    deleteOneUser(@Body(ValidationPipe) deleteUser : UsersIdDTO) : Promise<UpdateUserDTO>
    {
        return this.usersServe.deleteUser(deleteUser)
    }



    @Post(":userId/address")
    @ApiParam({
        name: 'userId',
        type: 'number',
        example : 42
    })
    addAddressUser(
        @Param("userId", ParseIntPipe) userId : number,
        @Body(ValidationPipe) addressUser : AddressUserDTO
    )
    {
        return this.usersServe.addAddressUser(userId, addressUser)
    }


    @Get(":userId/address")
    @ApiParam({
        name: 'userId',
        type: 'number',
        example : 42
    })
    getAddressUser(
        @Param("userId", ParseIntPipe) userId : number
    )
    {
        return this.usersServe.getAddressUser(userId)
    }


}