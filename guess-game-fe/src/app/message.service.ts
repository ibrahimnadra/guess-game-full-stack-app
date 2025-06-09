import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  http = inject(HttpClient);

  postGuess(guess: number) {
    const url = `http://localhost:8080/guess`; // Update to match the Flask endpoint
    return this.http.post<{ message: string }>(url, { guess }); // Send the user's guess dynamically
  }

  getWelcomeMessage() {
    const url = `http://localhost:8080/`; // Flask endpoint for the welcome message
    return this.http.get(url, { responseType: 'text' }); // Specify responseType as 'text'
  }
}
