import { NestFactory, NestApplication } from '@nestjs/core';
import * as compression from 'compression';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);

  app.enableCors();
  app.use(compression());

  app.useStaticAssets(join(__dirname, '../../client/build'), {
    index: ['index.html'],
    redirect: false,
  });

  await app.listen(3000);
}
bootstrap();
