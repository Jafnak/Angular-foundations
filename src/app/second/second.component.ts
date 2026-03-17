import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  data:boolean=true

  value:number=4

  fruits:string[]=["apple","orange","grapes","mango"]

  numbers:number[]=[-1,2,-5,8,-3,6,-7] 

  day:number=9

  choice=""


}
