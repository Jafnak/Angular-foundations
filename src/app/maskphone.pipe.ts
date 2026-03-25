import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskphone'
})
export class MaskphonePipe implements PipeTransform {

  transform(phone:string): string {
    return phone.substring(0,2) + "****" +phone.substring(6);
  }

}
