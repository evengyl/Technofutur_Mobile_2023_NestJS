import { Body, Controller, Get, Ip, Next, Param, Query, Session, Request, Response, HttpCode } from "@nestjs/common";


@Controller("api/v1/docs")
export class MicroDocsController{
    
    @Get("decoratorsBase")
    infoDecorators(
            @Request() req : any,
            @Response() res : any,
            @Next() next : any,
            @Session() session : any,
            @Ip() ip : any,
            @Param() params : any,
            @Body() body : any,
            @Query() query : any
        ) : null
    {
        //console.log("Req", req)
        //console.log("Res", res)
        console.log("Next", next)
        console.log("Session", session)
        console.log("Ip", ip)
        console.log("Param", params)
        console.log("Body", body)
        console.log("Query", query)

        return null
    }

    
    //@HttpCode(404) -> force la route à retourner une 404 dans tout les cas !!!
    @Get("404")
    forofor(){

    }
}