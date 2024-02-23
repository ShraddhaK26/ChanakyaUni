import { Component } from '@angular/core';

@Component({
  selector: 'app-add-circle',
  templateUrl: './add-circle.component.html',
  styleUrls: ['./add-circle.component.scss']
})
export class AddCircleComponent {
allCircle:any=[]
count=0
changebgcolor=false
addcircle(){
  this.count++
  this.allCircle.push(this.count)
}

changecolor(id:any){
this.changebgcolor=!this.changebgcolor
const selectcolor=document.getElementById(id)
if(this.changebgcolor){
  selectcolor!.style.background="red"
}
else{
  selectcolor!.style.background= "rgb(144, 72, 180)";
}
}
}
