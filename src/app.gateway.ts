import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('AppGateway');
  afterInit(server: any) {
    this.logger.log('initialized');
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`client disconnected:     ${client.id}`);
  }

  handleConnection(client: Socket) {
    this.logger.log(`client connected:     ${client.id}`);
  }

  @SubscribeMessage('messageToServer')
  handleMessage(client: Socket, text: string): WsResponse<string> {
    return { event: 'messageToClient', data: text };
  }
}
