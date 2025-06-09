import { Routes } from '@angular/router';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { GameComponent } from '../components/game/game.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Default route for the welcome page
  { path: 'game', component: GameComponent }, // Route for the game page
];
