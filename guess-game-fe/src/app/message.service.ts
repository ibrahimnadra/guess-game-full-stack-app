import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  postGuess(guess: number) {
    return this.http.post<{ message: string }>(`${this.baseUrl}/guess`, { guess }); // Send the user's guess dynamically
  }

  getWelcomeMessage() {
    return this.http.get(this.baseUrl, { responseType: 'text' }); // Specify responseType as 'text'
  }
}
