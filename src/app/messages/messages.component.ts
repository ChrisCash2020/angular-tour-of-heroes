import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  // set the parameter to public to bind to the component
  // the data from the message service is synchronous so this is a shortcut method to display the data in the component
  constructor(public messageService: MessageService) {}
}
