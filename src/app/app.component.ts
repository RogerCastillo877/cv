import { AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, ElementRef, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Timer } from './components-class/components/timer/timer';
import { TimerS } from './components-class/components/timer-s/timer-s';
import { AlertView } from './components-class/components/alert-view/alert-view';
import { NgFor } from '@angular/common';
import { TabsComponent } from "./components-class/components/tabs/tabs";
import { TabComponent } from './components-class/components/tab/tab';
import { SimpleAlertView } from './components-class/components/simple-alert-view/simple-alert-view';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, Timer, TimerS, AlertView, NgFor, TabComponent, TabsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public isAddTimerVisible: boolean = false;
  // public isAddTimerVisibleS = signal(false);
  public time : number = 0;
  public timers: number[] = [];
  private simpleAlert: ComponentRef<SimpleAlertView> | undefined;

  @ViewChild("timeInput") timeInput?: ElementRef;
  @ViewChild("alert", {read: ViewContainerRef}) alertContainer?: ViewContainerRef;

  constructor(private renderer: Renderer2) {
    this.timers = [2, 20, 30];
  }

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.timeInput?.nativeElement, "placeholder", "Enter seconds");
    this.renderer.addClass(this.timeInput?.nativeElement, "time-in");
  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
    setTimeout(() => {
      this.renderer.selectRootElement(this.timeInput?.nativeElement).focus();
    });
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
    this.simpleAlert = this.alertContainer?.createComponent(SimpleAlertView);
    if (this.simpleAlert) {
      this.simpleAlert.instance.title = "Dynamic Alert";
      this.simpleAlert.instance.message = "This alert was created dynamically using ViewContainerRef.";
      this.simpleAlert.instance.onDismiss.subscribe(() => {
        this.simpleAlert?.destroy();
      });
    }
    this.simpleAlert?.instance?.show();
  }

  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }
}
