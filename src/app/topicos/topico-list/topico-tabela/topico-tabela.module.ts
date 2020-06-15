import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicoTabelaComponent } from './topico-tabela.component';
import { PageNextComponent } from './page-next/page-next.component';
import { PagePrevComponent } from './page-prev/page-prev.component';

@NgModule({
    declarations: [
        TopicoTabelaComponent,
        PageNextComponent,
        PagePrevComponent
    ],
    imports:[
        CommonModule
    ]
})
export class TopicoTabelaModule{

}