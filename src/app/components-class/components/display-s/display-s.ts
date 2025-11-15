import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-s',
  imports: [],
  templateUrl: './display-s.html',
  styleUrl: './display-s.css',
})
export class DisplayS implements OnChanges {

  time = input<number | null>(null);

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
