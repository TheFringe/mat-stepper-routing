import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router, RouterOutlet } from '@angular/router';
import { Step } from './step';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper') stepper: MatStepper | undefined;
  @ViewChildren(RouterOutlet) fooList: any;
  @ViewChildren('myStep') stepList: any;
  @Input()
  steps: Step[] = [];
  selectedStepIndex = 0;
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.stepList.changes.subscribe((t: any) => {
      this.ngForRendred();
    });
  }

  ngForRendred() {
    console.log('NgFor is Rendered', this.fooList);
  }

  move(index: number) {
    if (this.stepper) {
      console.log('move');
      this.stepper.selectedIndex = index;
    }
  }
  next() {
    if (this.stepper) {
      const currentIndex = this.stepper?.selectedIndex;
      const nextStep = !!this.steps ? 0 : this.steps[currentIndex + 1];
      this.stepper.selectedIndex = currentIndex + 1;
    }
  }
  selectionChanged(event: any) {
    this.selectedStepIndex = event.selectedIndex;
    const url = 'stepper/' + this.steps[this.selectedStepIndex].path;
    console.log(url, this.steps);
    this.router.navigate([url]); //using -> private router: Router
  }
}
