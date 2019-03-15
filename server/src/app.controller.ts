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
import { AuthGuard } from 'shared/auth.guard';

@Controller('/api')
export class AppController {
  constructor() {}

  @Get('/test')
  handler(@Headers() headers, @Query() query) {
    return { data: 'hello' };
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
