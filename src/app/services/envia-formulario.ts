import { Service } from '@angular/core';

@Service()
export class EnviaFormulario {

    enviaParaBackend(dado: string) {
        alert('Formulário ' + dado + ' enviado!');
    }
}