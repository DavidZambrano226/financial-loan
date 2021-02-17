import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number): string {
    console.log(value);
    let textToReturn = '';
    (value == 0) ? textToReturn = 'Rechazado' : textToReturn = 'Aprobado'; 
    return textToReturn;
  }

}
