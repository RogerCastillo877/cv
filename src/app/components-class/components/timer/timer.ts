import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar';
import { Display } from '../display/display';
import { AsyncPipe, NgIf } from '@angular/common';
import { TimerService } from '../../services/timer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [ProgressBar, Display, NgIf],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Timer implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;

  private coundtdownEndSubscription: Subscription | null = null;
  private countdownSubscription: Subscription | null = null;
  public cowntdown: number = 0;

  get progress(): number {
    return (this.init - this.cowntdown) / this.init * 100;
  }

  constructor(public timerService: TimerService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.timerService.restartCountdown(this.init);

    this.coundtdownEndSubscription = this.timerService.countdownEnd$.subscribe(() => {
      this.onComplete.emit();
    });

    this.countdownSubscription = this.timerService.countdown$.subscribe((data) => {
      this.cowntdown = data;
      this.cdRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.timerService.destroy();
    this.coundtdownEndSubscription?.unsubscribe();
    this.countdownSubscription?.unsubscribe();
  }
}
