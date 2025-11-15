import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-view',
  imports: [],
  templateUrl: './alert-view.html',
  styleUrl: './alert-view.css',
})
export class AlertView implements OnInit{

  @Output() onCancel = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<void>();

  public time: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
