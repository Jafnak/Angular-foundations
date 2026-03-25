import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,DoCheck,AfterViewInit,OnDestroy{
  message:string="hello angular"
  constructor(){
    console.log("constructor called")
  }
  ngOnInit(): void {
    console.log("ngoninit called")
  }
  ngDoCheck(): void {
    console.log("ngdoCheck called")
  }
  ngAfterViewInit(): void {
    console.log("ngafterviewinit called")
  }
  ngOnDestroy(): void {
    console.log("onDestroy called")
  }
}
