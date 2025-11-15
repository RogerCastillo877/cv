import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar {

  @Input() progress: number = 0;
}
