import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicoListModule } from './topico-list/topico-list.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        TopicoListModule,
        CommonModule,
        HttpClientModule
    ]
})
export class TopicosModule{

}