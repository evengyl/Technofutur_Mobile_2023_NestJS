import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AddressUserEntity } from "src/shared/entities/AddressUser.entity";
import { GardensEntity } from "src/shared/entities/Gardens.entity";
import { UsersEntity } from "src/shared/entities/Users.entity";
import { UsersService } from "src/_users/users.service";
import { GardensController } from "./gardens.controller";
import { GardensService } from "./gardens.service";

@Module({
    imports : [
        TypeOrmModule.forFeature([
            UsersEntity,
            GardensEntity,
            AddressUserEntity
        ])
    ],
    controllers : [GardensController],
    providers : [GardensService, UsersService]
})
export class GardensModule{

}