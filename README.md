
```
@Input
@Input() inputName: string = '';

Input Signal
inputName = input.required<string>('');
```

```
@Output
@Output() outputName = new EventEmitter<number>();

Output Signal
outputName = output<number>();
```

```
Html
<componentName #countdown
  [inputName]="variableName"
  (outputName)="functionName($event)"
></componentName>

Html Signals
<countdown-s
  [inputName]="siganalName()"
  (outputName)="functionName($event)"
></countdown-s>
```

```
Template reference variable (referencia a un elemento que permite usar sus métodos en otro)
<countdown #countdown
  [init]="totalCountdown"
  (onDecrese)="updateProgress($event)"
  (onComplete)="CountdownFinished()"
></countdown>
<button
  (click)="countdown.startCountdown() ; counterProgress=0;"
>Restart</button>
```

```
Lifecycle hooks
OnInit() {}
OnChange() {}
OnDestroy() {}
```

```
Providers component level
providers: [TimerService]
As tool used only for the component
Example: When using more than one, each one has a start time and actions such as play, pause, and restart.


Module level
providers: [TimerService]
Comumnicate several components

Example: When using more than one timer, they all share the initial time and actions such as play, pause, and restart.
```

```
Default change detection strategy
changeDetection: ChangeDetectionStrategy.Default
When more than one timer is used, the check cycle is activated on all timers.

Push change detection strategy
***changeDetection: ChangeDetectionStrategy.OnPush***
When more than one timer is used, the check cycle is only activated when an internal change (inmutable change) in the component is detected.
constructor(private cdRef: ChangeDetectorRef) {}
ChangeDetectorRef tells the component to check the cycle again.
```

```
Style encapsulation

encapsulation: ViewEncapsulation.Emulated
***#shadow-root***
Angular modifies the component's CSS selectors so that they are only applied to the component's view and do not affect other elements in the application, emulating Shadow DOM behavior

encapsulation: ViewEncapsulation.none
***Remove selector :host {}***
Angular does not apply any sort of view encapsulation meaning that any styles specified for the component are actually globally applied and can affect any HTML element present within the application. This mode is essentially the same as including the styles into the HTML itself.

encapsulation: ViewEncapsulation.ShadowDom
***_nghost / _ngcontent***
Angular uses the browser's built-in Shadow DOM API to enclose the component's view inside a ShadowRoot, used as the component's host element, and apply the provided styles in an isolated manner.
```

```
ng-content
<ng-content></ng-content>

Content slots
In this case, use a property of the HTML element, in this example the heading.
<div header>Add Timer</div>
<ng-content select="[header]"></ng-content>

In this case, select all the HTML elements of the component with that tag.
<button >Ok</button>
<ng-content select="button"></ng-content>
```
