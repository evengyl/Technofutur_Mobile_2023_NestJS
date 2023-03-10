import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './_auth/auth.module';
import { GardensModule } from './_gardens/gardens.module';
import { UsersModule } from './_users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "mysql",
      host : "localhost",
      port : 3306,
      username : "root",
      password : "",
      database : "demo_mobile_techno",
      entities : [__dirname + '/**/*.entity.{ts, js}'],
      autoLoadEntities : true,
      synchronize : true,
      //logging : "all"

    }),
    AuthModule,
    UsersModule,
    GardensModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
