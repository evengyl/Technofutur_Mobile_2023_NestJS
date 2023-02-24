import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GardensEntity } from "src/shared/entities/Gardens.entity";
import { UsersEntity } from "src/shared/entities/Users.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    imports : [
        TypeOrmModule.forFeature([
            UsersEntity,
            GardensEntity
        ])
    ],
    controllers : [UsersController],
    providers : [UsersService]
})
export class UsersModule{}