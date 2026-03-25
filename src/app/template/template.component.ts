import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  name:string=""
  age:number=0
  email:string=""
  // student:{name:string,email:string,age:number}={}

  // display(data:any){
  //   alert("Form submitted successfully");
  //   console.log(data)
  // }

    // display(){
    // // alert("Form submitted successfully");
    // alert(JSON.stringify(this.student))
    // // console.log(this.name,this.age,this.email)
    // this.student={name:this.name,age:this.age,email:this.email}
  }

