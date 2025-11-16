import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tab } from '../../interfaces/tab.interface';
import { TabsComponent } from '../tabs/tabs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tab',
  imports: [NgIf],
  templateUrl: './tab.html',
  styleUrl: './tab.css',
})
export class TabComponent implements OnInit, Tab {

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() title!:string;
  public isActive:boolean = false;

  constructor() {}

  ngOnInit() {
  }

  clicktabContent(){
    this.onClick.emit();
  }
}
