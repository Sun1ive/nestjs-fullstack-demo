import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  getConfig() {
    return {
      PORT: 3000,
      HOST: '127.0.0.1',
    };
  }
}
