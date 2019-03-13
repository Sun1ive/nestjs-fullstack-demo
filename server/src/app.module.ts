import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [ConfigModule, SocketModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
