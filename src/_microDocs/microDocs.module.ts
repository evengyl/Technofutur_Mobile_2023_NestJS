import { Module } from "@nestjs/common";
import { MicroDocsController } from "./microDocs.controller";
import { MicroDocsService } from "./microDocs.service";

@Module({
    imports : [],
    controllers : [MicroDocsController],
    providers : [MicroDocsService]
})
export class MicroDocsModule{

}