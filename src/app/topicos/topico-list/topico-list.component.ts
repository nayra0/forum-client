import { Component, OnInit, OnDestroy } from '@angular/core';

import { Topico } from '../topico';
import { TopicoService } from '../topico.service';

@Component({
  selector: 'ma-topico-list',
  templateUrl: './topico-list.component.html'
})
export class TopicoListComponent implements OnInit {

  topicos: Topico[] = [];
  totalPages: number = 0;
  currentPage: number = 0;

  constructor(private topicoService: TopicoService){}
  
  ngOnInit(): void {
    this.topicoService
      .listTopicosPaginated(this.currentPage)
      .subscribe(topicoPaginated => {
        this.topicos = topicoPaginated.content;
        this.totalPages = topicoPaginated.totalPages;
        this.currentPage = topicoPaginated.number;
      })

  }

  nextPage(){
    this.goToPage(++this.currentPage);
  }

  prevPage(){
    this.goToPage(--this.currentPage);
  }

  goToPage(page: number){
    this.topicoService
      .listTopicosPaginated(page)
      .subscribe(topicoPaginated => {
        this.topicos = topicoPaginated.content;
      })
  }

}