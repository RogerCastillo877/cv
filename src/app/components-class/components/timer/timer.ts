import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar';
import { Display } from '../display/display';
import { NgIf } from '@angular/common';
import { TimerService } from '../../services/timer';

@Component({
  selector: 'app-timer',
  imports: [ProgressBar, Display, NgIf],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
  providers: [TimerService],
})
export class Timer implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;

  constructor(public timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.restartCountdown(this.init);
  }

  ngOnDestroy(): void {
    this.timerService.destroy();
  }
}
