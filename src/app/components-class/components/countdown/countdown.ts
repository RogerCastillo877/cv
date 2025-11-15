import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'countdown',
  imports: [],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class Countdown implements OnInit, OnDestroy, OnChanges {

  @Input() init: number | null = null;
  public counter: number = 0;
  private coundownTimerRef: any = null;

  @Output() onDecrese = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.clearTimeout();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['init']) {
      this.startCountdown();
    }
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.coundownTimerRef = setTimeout(() => {
      this.counter--;
      this.processCount();
    }, 1000);
  }

  private clearTimeout() {
    if (this.coundownTimerRef) {
      clearTimeout(this.coundownTimerRef);
      this.coundownTimerRef = null;
    }
  }

  processCount() {
    this.onDecrese.emit(this.counter);

    if (this.counter === 0) {
      this.onComplete.emit();
    } else {
      this.doCountdown();
    }
  }
}
