import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicoListComponent } from './topico-list.component';
import { TopicoTabelaComponent } from './topico-tabela/topico-tabela.component';
import { PageNextComponent } from './topico-tabela/page-next/page-next.component';
import { PagePrevComponent } from './topico-tabela/page-prev/page-prev.component';

@NgModule({
    declarations: [
        TopicoListComponent,
        TopicoTabelaComponent,
        PageNextComponent,
        PagePrevComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        TopicoListComponent
    ]
})
export class TopicoListModule{

}