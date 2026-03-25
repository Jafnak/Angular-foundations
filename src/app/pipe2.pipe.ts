import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2'
})
export class Pipe2Pipe implements PipeTransform {

  transform(value:any,data:any,d:any,i:any): any {
    // return value + " "+data+" "+d+" "+i; 
    // return value;
    // return value.toUpperCase();
    // return value.toLowerCase();
    // return value.split("");
    // return value.split("").reverse();
    // return value.split("").reverse().join("");
    // return  value.length;
    // return value.charAt(2);
    // return value.charAt(2).toUpperCase();
    // return value.slice(1);
    // return value.slice(1).toUpperCase();

    // return data+5000
    // return d
    let a=new Date(d)
    // return a.getDate()
    // return a.getMonth()+1
    // return a.getFullYear()

    return `${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`
    
  }

}
