import { Component } from '@angular/core';

@Component({
  selector: 'app-componenten-pai',
  templateUrl: './componenten-pai.component.html',
  styleUrls: ['./componenten-pai.component.css']
})
export class ComponentenPaiComponent {
sobrenome = " da SIlva"

mostrarNomeCompleto(nomeCompleto:any){
  alert (`O nome completo é:  $(nomeCompleto)`)
}


}
