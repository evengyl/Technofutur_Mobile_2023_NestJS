import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from "@nestjs/common";
import { GardensService } from "./gardens.service";

@Controller("api/v1/gardens")
export class GardensController{

    constructor(
        private readonly gardensServe : GardensService
    ) {}


    @Get()
    getAllGardens() : Promise<any>
    {
        return this.gardensServe.getAllGardens()
    }


    @Get(":id")
    getOneGardensById(@Param('id', ParseIntPipe) gardenId : number) : Promise<any>
    {
        return this.gardensServe.getOneGardensById(gardenId)
    }


    @Post()
    createGardens(@Body(ValidationPipe) newGarden : any) : Promise<any>
    {
        return this.gardensServe.createGardens(newGarden)
    }


    @Patch()
    updateGardens(@Body(ValidationPipe) updateGarden : any) : Promise<any>
    {
        return this.gardensServe.updateGardens(updateGarden)
    }


    @Delete()
    deleteOneGardens(@Body(ValidationPipe) deleteGarden : any) : Promise<any>
    {
        return this.gardensServe.deleteGardens(deleteGarden)
    }
}