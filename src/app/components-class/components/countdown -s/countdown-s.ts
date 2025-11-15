import { Component, input, OnInit, output, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'countdown-s',
  imports: [],
  templateUrl: './countdown-s.html',
  styleUrl: './countdown-s.css',
})
export class CountdownS implements OnInit {

  init = input<number | null>(null);
  public counter = signal<number>(0);
  private coundownTimerRef: any = null;

  decrese = output<number>();
  complete = output<void>();

  ngOnInit() {
    this.startCountdownS();
  }

  ngOnDestroy() {
    this.clearTimeout();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['init']) {
      this.startCountdownS();
    }
  }

  startCountdownS() {
    if (this.init() && this.init()! > 0) {
      this.clearTimeout();
      this.counter.set(this.init()!);
      this.doCountdownS();
    }
  }

  doCountdownS() {
    this.coundownTimerRef = setTimeout(() => {
      this.counter.update(n => n - 1);
      this.processCountS();
    }, 1000);
  }

  private clearTimeout() {
    if (this.coundownTimerRef) {
      clearTimeout(this.coundownTimerRef);
      this.coundownTimerRef = null;
    }
  }

  processCountS() {
    this.decrese.emit(this.counter());

    if (this.counter() === 0) {
      this.complete.emit();
    } else {
      this.doCountdownS();
    }
  }
}
