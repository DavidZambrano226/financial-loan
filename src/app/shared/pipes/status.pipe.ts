import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number): string {
    let textToReturn = '';
    (value == 0) ? textToReturn = 'Rechazado' : textToReturn = 'Aprobado'; 
    return textToReturn;
  }

}
