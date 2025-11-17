import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-alert-view',
  imports: [NgIf],
  templateUrl: './simple-alert-view.html',
  styleUrl: './simple-alert-view.css',
})
export class SimpleAlertView implements OnInit {

  constructor() { }

  @Output() onDismiss: EventEmitter<void> = new EventEmitter<void>();
  @Input() message?:string;
  @Input() title?:string;
  public visible:boolean = false;

  ngOnInit() {
  }

  public dismiss(){
    this.visible = false;
    this.onDismiss.emit();
  }

  public show(){
    this.visible = true;
  }

}
