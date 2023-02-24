import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from "@nestjs/common";
import { NewGardensDTO } from "src/shared/dto/gardens/NewGardens.dto";
import { UpdateGardensDTO } from "src/shared/dto/gardens/UpdateGarden.dto";
import { GardensService } from "./gardens.service";

@Controller("api/v1/users/:userId/gardens")
export class GardensController{

    constructor(
        private readonly gardensServe : GardensService
    ) {}

    @Get()
    getAllGardens(@Param("userId", ParseIntPipe) userId : number) : Promise<any>
    {
        return this.gardensServe.getAllGardens(userId)
    }


    @Get(":gardenId")
    getOneGardensById(
        @Param("userId", ParseIntPipe) userId : number,
        @Param('gardenId', ParseIntPipe) gardenId : number
    ) : Promise<any>
    {
        return this.gardensServe.getOneGardensById(userId, gardenId)
    }


    @Post()
    createGardens(
        @Param("userId", ParseIntPipe) userId : number,
        @Body(ValidationPipe) newGarden : NewGardensDTO
    ) : Promise<any>
    {
        return this.gardensServe.createGardens(userId, newGarden)
    }


    @Patch(":gardenId")
    updateGardens(
        @Param("userId", ParseIntPipe) userId : number,
        @Param('gardenId', ParseIntPipe) gardenId : number,
        @Body(ValidationPipe) updateGarden : UpdateGardensDTO
    ) : Promise<any>
    {
        return this.gardensServe.updateGardens(userId, gardenId, updateGarden)
    }


    @Delete(":gardenId")
    deleteOneGardens(
        @Param("userId", ParseIntPipe) userId : number,
        @Param('gardenId', ParseIntPipe) gardenId : number
    ) : Promise<any>
    {
        return this.gardensServe.deleteGardens(userId, gardenId)
    }

}