import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatModule } from './chat/chat.module';
import { ChatService} from './chat/services/chat.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    AppRoutingModule
],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
