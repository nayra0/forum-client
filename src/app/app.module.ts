import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicosModule } from './topicos/topicos.module';
import { TopicoListModule } from './topicos/topico-list/topico-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TopicosModule,
    TopicoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
