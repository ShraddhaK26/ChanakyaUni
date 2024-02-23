import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCircleComponent } from './add-circle/add-circle.component';

const routes: Routes = [
  {path:"",component:AddCircleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircleRoutingModule { }
