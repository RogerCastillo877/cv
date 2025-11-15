
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
