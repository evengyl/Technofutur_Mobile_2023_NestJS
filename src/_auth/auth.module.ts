import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist/jwt.module";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AddressUserEntity } from "src/shared/entities/AddressUser.entity";
import { UsersEntity } from "src/shared/entities/Users.entity";
import { UsersService } from "src/_users/users.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { secret } from "./secret";

@Module({
    imports : [
        TypeOrmModule.forFeature([
            UsersEntity,
            AddressUserEntity
        ]),
        JwtModule.register({
            secret : secret,
            signOptions : { expiresIn : '3600s' }
        })
    ],
    controllers : [AuthController],
    providers : [
        AuthService,
        UsersService,
    ]
})
export class AuthModule{}