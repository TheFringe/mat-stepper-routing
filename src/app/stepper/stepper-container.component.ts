import { Component, OnInit } from '@angular/core';
import { Step } from './step';
@Component({
  selector: 'app-stepper-container',
  templateUrl: './stepper-container.component.html',
})
export class StepperContainerComponent implements OnInit {
  steps: Step[] = [
    { title: 'Stpe ett', index: 0, path: 'one' },
    { title: 'Two', index: 1, path: 'two' },
    { title: 'Third', index: 2, path: 'three' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
