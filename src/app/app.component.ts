import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Timer } from './components-class/components/timer/timer';
import { TimerS } from './components-class/components/timer-s/timer-s';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Timer, TimerS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  counterProgress: number = 0;
  totalCountdown: number = 10;

  counterProgressS = signal(0);
  totalCountdownS = signal(20);

  updateProgress($event: number) {
    this.counterProgress = (this.totalCountdown - $event) / this.totalCountdown * 100;
    console.log("Progress updated to", typeof $event);
  }

  updateProgressS($event: number) {
    this.counterProgressS.set((this.totalCountdownS() - $event) / this.totalCountdownS() * 100);
    console.log("Progress updated to",typeof $event);
  }

  CountdownFinished() {
    console.log("AppComponent: Countdown finished");
  }
}
