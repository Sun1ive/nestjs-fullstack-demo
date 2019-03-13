import { Controller, Get, Render, Headers, Query } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/api/test')
  handler(@Headers() headers, @Query() query) {
    return { data: 'hello' };
  }

  @Get('*')
  @Render('index.html')
  root() {}
}
