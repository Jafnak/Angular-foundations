import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(marks:number): string {
    return marks>=50? 'pass': 'fail';
  }

}
