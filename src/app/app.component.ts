import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, signal, ViewChild } from '@angular/core';
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
  public isEndTimerAlertVisible: boolean = false;
  // public isAddTimerVisibleS = signal(false);
  public time : number = 0;
  public timers: number[] = [];

  @ViewChild(SimpleAlertView) alert!: SimpleAlertView;

  constructor() {
    this.timers = [10, 20, 30];
  }

  ngAfterViewInit(): void {
    console.log(this.alert);
    this.alert.show();
    this.alert.title = "Welcome!";
    this.alert.message = "This is a simple alert view.";
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
    this.isEndTimerAlertVisible = true;
  }

  public hideEndTimerAlert() {
    this.isEndTimerAlertVisible = false;
  }

  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }
}
