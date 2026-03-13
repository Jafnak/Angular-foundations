import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {

  name:string="Samrood"
  firstName:string="Husna"
  lastname:string="Munawer"

  num:number=100

  message(){
    return "Hello welcome to Angular"
  }

  age:number=10

  student:{name:string,age:number}={name:"Misna",age:28}

  colors:string[]=["red","blue","green"]
}
