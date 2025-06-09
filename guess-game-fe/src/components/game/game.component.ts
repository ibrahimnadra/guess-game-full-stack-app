import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MessageService } from '../../app/message.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  // submitGuess(): void {
  //   if (this.guess === null) {
  //     this.error = 'Please enter a valid number.';
  //     return;
  //   }

  //   this.numberGuessingService.submitGuess(this.guess).subscribe(
  //     (response) => {
  //       this.feedback = response.message;
  //       this.error = '';
  //       if (response.reset) {
  //         this.guess = null; // Reset the guess input
  //       }
  //     },
  //     (err) => {
  //       this.error = err.error.message || 'An error occurred.';
  //       this.feedback = '';
  //     }
  //   );

  // 
  // } welcomeMessage: string = '';
  
  //   ngOnInit() {
  //     this.messageService.getMessagesFromApi().subscribe({
  //       next: (response) => {
  //         this.welcomeMessage = response; // Directly assign the plain text response to the message
  //         console.log('Welcome message:', response);
  //       },
  //       error: (err) => {
  //         console.error('Error fetching welcome message:', err);
  //         this.welcomeMessage = 'Failed to fetch the welcome message.';
  //       }
  //     });
  //   }





  guess: number | null = null;
  feedback: string = '';
  error: string = '';
  welcomeMessage: string = '';

  messageService = inject(MessageService);

  submitGuess(): void {
    if (this.guess === null) {
      this.error = 'Please enter a valid number.';
      return;
    }

    this.messageService.postGuess(this.guess).subscribe({
      next: (response) => {
        this.feedback = response.message;
        this.error = '';
        console.log('Guess response:', response);

        // Reset the guess input if needed
        this.guess = null;
      },
      error: (err) => {
        this.error = err.error?.message || 'An error occurred.';
        this.feedback = '';
        console.error('Error submitting guess:', err);
      },
    });
  }
}