import { Injectable, Output, EventEmitter } from '@angular/core';
import * as ActionCable from 'actioncable';

@Injectable()
export class RoomChannelSubscriptionService {
  @Output() onMessageReceived: EventEmitter<string> = new EventEmitter<string>();

  private url = 'wss://limitless-chamber-47297.herokuapp.com/cable';
  private cable: ActionCable.Cable;
  private subscription: ActionCable.Channel;

  messages: string[] = [];

  constructor() { }

  initialize() {
    this.cable = ActionCable.createConsumer(this.url);
    this.subscription = this.cable.subscriptions.create(
      'RoomChannel',
      {
        connected: this.connected,
        disconnected: this.disconnected,
        received: (data) => this.received(data)
      });
  }

  private connected() {
    console.log('connected!');
  }

  private disconnected() {
    console.log('disconnected!');
  }

  private received(data: any) {
    console.log('received');
    this.messages.push(data.message);
    this.onMessageReceived.emit(this.messages.join('\n'));
  }

}
