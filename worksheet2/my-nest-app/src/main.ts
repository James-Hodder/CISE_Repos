import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { dot } from 'node:test/reporters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  const PORT = process.env.PORT || 5000;
  await app.listen(3000);
}
bootstrap();
