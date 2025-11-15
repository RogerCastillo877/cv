import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'progress-bar-s',
  imports: [],
  templateUrl: './progress-bar-s.html',
  styleUrl: './progress-bar-s.css',
})
export class ProgressBarS {

  progress = input<number>(0);
}
