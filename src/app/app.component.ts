import {
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewContainerRef,
  Component,
  ViewChild,
  Output,
} from '@angular/core';
import { MessageComponent } from 'app/message/message.component';
import { RoomChannelSubscriptionService } from 'app/room-channel-subscription.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messageRef: ComponentRef<MessageComponent>;
  @ViewChild('message', { read: ViewContainerRef }) message: ViewContainerRef;

  title = 'app works!';

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private roomChannelSubscriptionService: RoomChannelSubscriptionService) {
  }

  public ngOnInit(): void {
    this.roomChannelSubscriptionService.initialize();
    this.roomChannelSubscriptionService.onMessageReceived.subscribe(
      messages => this.showMessage(messages),
      (error) => console.log(error)
    );
  }

  private showMessage(messagesString) {
    if (!this.messageRef) {
      const messageComponent = this.componentFactoryResolver.resolveComponentFactory(MessageComponent);
      this.messageRef = this.message.createComponent(messageComponent);
    }
    this.messageRef.instance.messages = messagesString;
    this.messageRef.changeDetectorRef.detectChanges();
  }
}
