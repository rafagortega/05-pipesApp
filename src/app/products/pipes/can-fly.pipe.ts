import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    let retorno;
    if(value){
      retorno="vuela";
    }else{
      retorno="no vuela";
    }
    return retorno;
  }
}
