import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class SocketService {
  constructor(
    @Inject('ConfigService') private readonly configService: ConfigService,
  ) {
    console.log('CONFIG SERVICE SOCKET MODULE %o', configService.get('PORT'));
  }
}
