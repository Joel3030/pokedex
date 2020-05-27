import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'space',
})
export class SpacePipe implements PipeTransform {
  transform(value: string): string {
    const remplace = '-';
    const newStr = value.replace(remplace, ' ');
    return newStr;
  }
}
