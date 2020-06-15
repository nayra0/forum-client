import { Component, Input } from '@angular/core';

import { Topico } from '../../topico';

@Component({
    selector: 'ma-tabela-topico',
    templateUrl: 'topico-tabela.component.html'
})
export class TopicoTabelaComponent{

    @Input() topicos: Topico[] = [];

}