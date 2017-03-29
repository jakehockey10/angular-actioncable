import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { RoomChannelSubscriptionService } from './room-channel-subscription.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  entryComponents: [MessageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [RoomChannelSubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
