import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Message } from '../models/message';
import {ChatService} from '../services/chat.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
public messages: Observable<Array<Message>>;

constructor(private chatService: ChatService) {
 this.messages = new Observable<Array<Message>>();
}
public ngOnInit(): void {
  this.messages = this.chatService.getMessages();
}

public gererNouveauMessage(message: Message): void {
  this.messages = this.chatService.addMessage(message);
}

}
