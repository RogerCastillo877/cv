import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../interfaces/tab.interface';
import { NgClass, NgFor } from '@angular/common';


@Component({
  selector: 'app-tabs',
  imports: [NgFor, NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})

export class TabsComponent implements OnInit {

  public tabs: Tab[] = [];

  constructor() { }

  ngOnInit() {}

  addTab(tab:Tab){
    if (this.tabs.length === 0) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab:Tab) {
    for (let tab of this.tabs){
      tab.isActive = false;
    }
    tab.isActive = true;
  }
}
