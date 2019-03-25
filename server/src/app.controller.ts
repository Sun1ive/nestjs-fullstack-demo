import {
  Controller,
  Get,
  Render,
  Headers,
  Query,
  Body,
  UseGuards,
} from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { AuthGuard } from '../shared/auth.guard';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  async handler(@Headers() headers, @Query() query) {
    const data = this.appService.fetch(query.id);
    return { data };
  }

  @Get('/login')
  @UseGuards(new AuthGuard())
  loginHandler(@Body() body) {
    const token = sign(
      {
        email: body.email,
      },
      'VERY_SECRET_KEY',
      { expiresIn: '1s' },
    );

    return {
      message: 'OK',
      token,
    };
  }

  @Get('*')
  @Render('index.html')
  root() {}
}
