import {
  Controller,
  Get,
  Render,
  Request,
  Headers,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {}

  @Get('/api/test')
  handler(@Headers() headers, @Query() query) {
    console.log({
      headers,
      query,
    });
    return { data: 'hello' };
  }
}
