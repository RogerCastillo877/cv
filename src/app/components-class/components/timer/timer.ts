import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar';
import { Display } from '../display/display';
import { AsyncPipe, NgIf } from '@angular/common';
import { TimerService } from '../../services/timer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [ProgressBar, Display, NgIf, AsyncPipe],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
  providers: [TimerService],
})
export class Timer implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;

  private coundtdownEndSubscription: Subscription | null = null;

  constructor(public timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.restartCountdown(this.init);

    this.coundtdownEndSubscription = this.timerService.countdownEnd$.subscribe(() => {
      this.onComplete.emit();
    });
  }

  ngOnDestroy(): void {
    this.timerService.destroy();
    this.coundtdownEndSubscription?.unsubscribe();
  }
}
