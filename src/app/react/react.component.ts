import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent {

  // form1:FormGroup
  // constructor(){
  //   this.form1=new FormGroup(
  //     {
  //       name:new FormControl(),
  //       email:new FormControl(),
  //       password:new FormControl()
  //     }
  //   )
  // }
  //   form1:FormGroup
  // constructor(){
  //   this.form1=new FormGroup(
  //     {
  //       name:new FormControl("Anu"),
  //       email:new FormControl("anu@gmail.com"),
  //       password:new FormControl("1234")
  //     }
  //   )
  // }

      form1:FormGroup
  // constructor(){
  //   this.form1=new FormGroup(
  //     {
  //       name:new FormControl("",[Validators.required,Validators.minLength(2)]),
  //       age:new FormControl("",[Validators.required,Validators.min(18),Validators.max(50)]),
  //       email:new FormControl("",[Validators.required,Validators.email]),
  //       password:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(6)])
  //     }
  //   )
  // }

  constructor(public fb:FormBuilder){
    this.form1=this.fb.group({

      
    name:new FormControl("",[Validators.required,Validators.minLength(2)]),
        age:new FormControl("",[Validators.required,Validators.min(18),Validators.max(50)]),
     email:new FormControl("",[Validators.required,Validators.email]),
       password:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(6)])

    })
  }
  register(){
    console.log(this.form1.value)
  }

}
