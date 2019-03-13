import { Controller, Get, Render, Headers, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/test')
  handler(@Headers() headers, @Query() query) {
    return { data: 'hello' };
  }

  @Get('*')
  @Render('index.html')
  root() {}
}
