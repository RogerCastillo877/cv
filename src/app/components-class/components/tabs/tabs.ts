import { AfterContentInit, Component, ContentChildren, Input, OnDestroy, OnInit, QueryList } from '@angular/core';
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

  @ContentChildren(TabComponent) public tabs!: QueryList<TabComponent>;
  private tabClickSubscription:any[] = [];

  constructor() { }

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.tabs.forEach((tab) => {
      const subscription = tab.onClick.subscribe(() => {
        console.log(`Tab clicked: ${tab.title}`);
      });
      this.tabClickSubscription.push(subscription);
    });
    this.selectTab(this.tabs.first);
  }

  ngOnDestroy(): void {
    if (this.tabClickSubscription) {
      this.tabClickSubscription.forEach(sub => sub.unsubscribe());
    }
  }

  addTab(tab:Tab){
    // if (this.tabs.length === 0) {
    //   tab.isActive = true;
    // }
    // this.tabs.push(tab);
  }

  selectTab(tab:Tab) {
    this.tabs.forEach((tabItem) => {
      tabItem.isActive = false;
    });
    tab.isActive = true;
  }
}
//
