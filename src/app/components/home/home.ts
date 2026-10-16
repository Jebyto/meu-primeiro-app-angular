import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  meuBool = true;
  nome = 'Hello World!';
  descr = 'This is a description';

  private enviaFormularioService = inject(EnviaFormulario);

  deveMostrarTitulo = false;

  @Input("minhaProp") minhaProp!: string;

  @Output() meuEvento = new EventEmitter<string>();

  listItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  atualizarBool(valor: boolean) {
    this.meuBool = valor;

  }

  submit() {
    this.enviaFormularioService.enviaParaBackend(this.nome);
    this.deveMostrarTitulo = !this.deveMostrarTitulo;

    this.meuEvento.emit('Evento disparado!');
  }
}
