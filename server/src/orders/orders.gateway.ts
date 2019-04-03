import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { Subject, BehaviorSubject } from 'rxjs';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class OrdersGateway implements NestGateway {
  @WebSocketServer()
  ws: Server;

  public isWs: Subject<any> = new Subject();

  constructor() {
    this.isWs.subscribe(console.log);

    setInterval(() => {
      this.isWs.next({
        a: Math.random() * 100,
        b: Math.random() * 100,
      });
    }, 5000);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  handleConnection(socket: Socket) {
    console.log('Client connected %s', socket.id);

    socket.emit('hello', { data: 'world' });
  }

  afterInit() {
    console.log('INIT GATEWAY');
  }

  handleDisconnect() {
    console.log('Client disconnected');
  }
}
