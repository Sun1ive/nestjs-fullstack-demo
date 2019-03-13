import { Module } from '@nestjs/common';
import { SocketService } from './socket.service';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [SocketService],
})
export class SocketModule {}
