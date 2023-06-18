import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multipplicaPorPipe'
})
export class MultipplicaPorPipePipe implements PipeTransform {

  transform(valor: number, multiplicador: number): unknown {
    return valor * multiplicador;
  }

}
