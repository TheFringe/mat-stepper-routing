import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperContainerComponent } from './stepper-container.component';
import { StepOneComponent } from './steps/step-one/step-one.component';
import { StepTwoComponent } from './steps/step-two/step-two.component';
import { StepThreeComponent } from './steps/step-three/step-three.component';
@NgModule({
  declarations: [StepperComponent, StepperContainerComponent, StepOneComponent, StepTwoComponent, StepThreeComponent],
  imports: [CommonModule, MatStepperModule, StepperRoutingModule],
})
export class StepperModule {}
