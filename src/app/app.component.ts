import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Timer } from './components-class/components/timer/timer';
import { TimerS } from './components-class/components/timer-s/timer-s';
import { AlertView } from './components-class/components/alert-view/alert-view';
import { NgFor } from '@angular/common';
import { TabsComponent } from "./components-class/components/tabs/tabs";
import { TabComponent } from './components-class/components/tab/tab';
import { SimpleAlertView } from "./components-class/components/simple-alert-view/simple-alert-view";

@Component({
  selector: 'app-root',
  imports: [FormsModule, Timer, TimerS, AlertView, NgFor, TabComponent, TabsComponent, SimpleAlertView],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  public isAddTimerVisible: boolean = false;
  // public isAddTimerVisibleS = signal(false);
  public time : number = 0;
  public timers: number[] = [];

  @ViewChildren(SimpleAlertView) alerts!: QueryList<SimpleAlertView>;

  constructor(private cdRef: ChangeDetectorRef) {
    this.timers = [10, 20, 30];
  }

  ngAfterViewInit(): void {
    this.alerts.forEach((alert) => {
      if (!alert.title) {
        alert.title = "Default Title";
        alert.message = "Default Message";
      }
      alert.show();
    });
    this.cdRef.detectChanges();
  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
    // this.isAddTimerVisibleS.set(true);
  }

  public hideAddTimer() {
    this.isAddTimerVisible = false;
    // this.isAddTimerVisibleS.set(false);
  }

  CountdownFinished() {
    console.log("AppComponent: Countdown finished");
  }

  public showEndTimerAlert() {
    this.alerts.first.show();
  }

  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }
}
