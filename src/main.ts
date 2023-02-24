import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configSwagger = new DocumentBuilder()
  .setTitle("Api REST usr users et ses potagers")
  .setDescription("Permet de faire des trucs")
  .setVersion("0.0.1")
  .addBearerAuth({
    type: "http",
    name : "Bearer",
    bearerFormat : "Bearer",
    in : "Header",
    scheme : "Bearer"
  }, "access-token")
  .build()
  

  const pageSwagger = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup('', app, pageSwagger)

 
  await app.listen(5500);
}
bootstrap();
