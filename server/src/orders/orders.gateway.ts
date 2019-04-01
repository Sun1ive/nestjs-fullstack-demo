import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { Observable, Observer, Subject, BehaviorSubject } from 'rxjs';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class OrdersGateway implements NestGateway {
  @WebSocketServer()
  ws: Server;

  public isWsAvailable: BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor() {
    this.isWsAvailable.subscribe(val => {
      console.log('isWaislchagned', val);
      if (this.ws) {
        this.ws.emit('hello', { data: val });
      }
    });

    setInterval(() => {
      this.isWsAvailable.next(Math.random());
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
