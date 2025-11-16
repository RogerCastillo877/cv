import { AfterContentInit, Component, ContentChild, Input, OnDestroy, OnInit } from '@angular/core';
import { Tab } from '../../interfaces/tab.interface';
import { NgClass, NgFor } from '@angular/common';
import { TabComponent } from '../tab/tab';


@Component({
  selector: 'app-tabs',
  imports: [NgFor, NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})

export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChild(TabComponent) tab?: TabComponent;

  public tabs: Tab[] = [];
  private tabClickSubscription:any;

  constructor() { }

  ngOnInit() {
    if (this.tab) {
      this.addTab(this.tab);
    }
  }

  ngAfterContentInit(): void {
    if (this.tab) {
      this.addTab(this.tab);
      this.tabClickSubscription = this.tab.onClick.subscribe(() => {
        console.log('Tab clicked:');
      });
    }
  }

  ngOnDestroy(): void {
    if(this.tabClickSubscription) {
      this.tabClickSubscription.unsubscribe();
    }
  }

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
//
