import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircleRoutingModule } from './circle-routing.module';
import { AddCircleComponent } from './add-circle/add-circle.component';


@NgModule({
  declarations: [
    AddCircleComponent
  ],
  imports: [
    CommonModule,
    CircleRoutingModule
  ]
})
export class CircleModule { }
