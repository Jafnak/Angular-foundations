import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name1=""
  fun(){
    alert (this.name1)
  }

  num1:number=0;
  num2:number=0;
  result:number=0;

  addition(){
    this.result=this.num1+this.num2
  }

  substraction(){
    this.result=this.num1-this.num2
  }

  multiplication(){
    this.result=this.num1*this.num2
  }

  division(){
    this.result=this.num1/this.num2
  }
}
