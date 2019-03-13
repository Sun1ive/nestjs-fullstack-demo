import { NestFactory } from '@nestjs/core';
import { renderFile } from 'ejs';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app
    .engine('html', renderFile)
    .setBaseViewsDir(join(__dirname, '../../client/build'));

  app.useStaticAssets(join(__dirname, '../../client/build'), {
    index: false,
    redirect: false,
  });
  // app.setBaseViewsDir(join(__dirname, '../../client/build'));

  await app.listen(3000);
}
bootstrap();
