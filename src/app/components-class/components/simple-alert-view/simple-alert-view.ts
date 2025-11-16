import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-alert-view',
  imports: [NgIf],
  templateUrl: './simple-alert-view.html',
  styleUrl: './simple-alert-view.css',
})
export class SimpleAlertView implements OnInit {

  constructor() { }

  @Input() message?:string;
  @Input() title?:string;
  public visible:boolean = false;

  ngOnInit() {
  }

  public dismiss(){
    this.visible = false;
  }

  public show(){
    this.visible = true;
  }

}
