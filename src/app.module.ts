import { Module } from '@nestjs/common';
import { GardensModule } from './_gardens/gardens.module';
import { MicroDocsModule } from './_microDocs/microDocs.module';
import { UsersModule } from './_users/users.module';

@Module({
  imports: [
    UsersModule,
    GardensModule,
    MicroDocsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
