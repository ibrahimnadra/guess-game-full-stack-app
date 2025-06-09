import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../app/message.service';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  welcomeMessage: string = '';
  messageService = inject(MessageService);

  ngOnInit() {
    this.messageService.getWelcomeMessage().subscribe({
      next: (response) => {
        this.welcomeMessage = response; // Directly assign the plain text response to the message
        console.log('Welcome message:', response);
      },
      error: (err) => {
        console.error('Error fetching welcome message:', err);
        this.welcomeMessage = 'Failed to fetch the welcome message.';
      }
    });
  }
}
