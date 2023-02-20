import { Module } from "@nestjs/common";
import { GardensController } from "./gardens.controller";
import { GardensService } from "./gardens.service";

@Module({
    imports : [],
    controllers : [GardensController],
    providers : [GardensService]
})
export class GardensModule{

}