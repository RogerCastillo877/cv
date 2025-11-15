import { ChangeDetectionStrategy, Component, EventEmitter, input, OnDestroy, OnInit, Output, output } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProgressBarS } from "../progress-bar-s/progress-bar-s";
import { DisplayS } from '../display-s/display-s';

@Component({
  selector: 'app-timer-s',
  imports: [ProgressBarS, DisplayS, NgIf, ProgressBarS],
  templateUrl: './timer-s.html',
  styleUrl: './timer-s.css',
})
export class TimerS implements OnInit, OnDestroy {

  Complete = output<void>();
  init = input<number>(20);

  private countdownTimerRef: any = null;
  public countdown: number = 0;
  public paused: boolean = false;

  ngOnInit(): void {
    const initVal = this.init?.();
    if (initVal && initVal > 0) {
      this.countdown = initVal;
    }
  }

  ngOnDestroy(): void {
    this.clearTimeout();
  }

  restartCountdown() {
    if (this.init && this.init() > 0) {
      this.paused = true;
      this.clearTimeout();
      this.countdown = this.init();
    }
  }

  toogleCountdown() {
    this.paused = !this.paused;
    if (this.paused == false) {
      this.doCountdown();
    } else {
      this.clearTimeout();
    }
  }

  private doCountdown() {
    this.countdownTimerRef = setTimeout(() => {
      this.countdown = this.countdown - 1;
      this.processCountdown();
    }, 1000);
  }

  private processCountdown() {
    if (this.countdown == 0) {
      this.Complete.emit();
    } else {
      this.doCountdown();
    }
  }

  private clearTimeout() {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
}
