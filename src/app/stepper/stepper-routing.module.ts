import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { StepperContainerComponent } from './stepper-container.component';
import { StepOneComponent } from './steps/step-one/step-one.component';
import { StepThreeComponent } from './steps/step-three/step-three.component';
import { StepTwoComponent } from './steps/step-two/step-two.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/stepper', pathMatch: 'full' },
    {
      path: 'stepper',
      component: StepperContainerComponent,
      children: [
        {
          path: '',
          component: StepOneComponent,
        },
        { path: 'one', component: StepOneComponent },
        { path: 'two', component: StepTwoComponent },
        { path: 'three', component: StepThreeComponent },
        { path: 'four', component: StepThreeComponent },
      ],
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class StepperRoutingModule {}
