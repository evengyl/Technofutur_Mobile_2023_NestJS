import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GardensModule } from './_gardens/gardens.module';
import { MicroDocsModule } from './_microDocs/microDocs.module';
import { UsersModule } from './_users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "mysql",
      host : "localhost",
      port : 3306,
      username : "root",
      password : "legends",
      database : "demo_mobile_techno",
      entities : [__dirname + '/**/*.entity.{ts, js}'],
      autoLoadEntities : true,
      synchronize : true,
      //logging : "all"

    }),
    UsersModule,
    GardensModule,
    MicroDocsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
