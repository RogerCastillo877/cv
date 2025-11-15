import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display implements OnChanges {

  @Input() time: number | null = null;

  public minutes: string = '00';
  public seconds: string = '00';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["time"]) {
      const minutes = Math.trunc(changes["time"].currentValue / 60);
      const seconds = changes["time"].currentValue - minutes * 60;
      this.minutes = ("0" + minutes).substring(-2);
      this.seconds = ("0" + seconds).substring(-2);
    }
  }
}
