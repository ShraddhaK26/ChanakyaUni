import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapeRoutingModule } from './shape-routing.module';
import { SquareComponent } from './square/square.component';


@NgModule({
  declarations: [
    SquareComponent
  ],
  imports: [
    CommonModule,
    ShapeRoutingModule
  ]
})
export class ShapeModule { }
