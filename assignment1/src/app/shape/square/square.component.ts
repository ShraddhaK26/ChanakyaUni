import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  circle :any=[]
  count=0

  square:any=[]
  count1=0

  add(){
 this.count++
 this.circle.push(this.count)
 console.log(this.circle);
 
  }


  add2(){
    this.count1++
    this.square.push(this.count1)
  }
}
