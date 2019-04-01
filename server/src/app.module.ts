import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { SocketModule } from './socket/socket.module';
import { CacheModule } from './cache/cache.module';
import { AppService } from './app.service';
import { OrdersGateway } from './orders/orders.gateway';

@Module({
  imports: [ConfigModule, SocketModule, CacheModule],
  controllers: [AppController],
  providers: [AppService, OrdersGateway],
})
export class AppModule {}
