import { Component, Input, OnInit } from '@angular/core';
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

  @Input() title!:string;
  public isActive:boolean = false;

  constructor(public tabs: TabsComponent) {}

  ngOnInit() {
    this.tabs.addTab(this);
  }
}
