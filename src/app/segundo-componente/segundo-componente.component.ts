import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Michel";
  dataNascimento = "1981-09-04";
  urlImagem = "/assets/user.png";

  mostrarDataNascimento(){
    alert(`A data de nascimento é: ${this.dataNascimento}`);
  }
}
