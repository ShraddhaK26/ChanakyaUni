import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SquareComponent } from './square/square.component';

const routes: Routes = [
  {path:'square',component:SquareComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShapeRoutingModule { }
