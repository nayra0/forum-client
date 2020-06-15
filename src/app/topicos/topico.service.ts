import { HttpClient } from '@angular/common/http';

import { TopicosPaginated } from './topicosPaginated';
import { Injectable } from '@angular/core';

const API = 'http://localhost:8080';

@Injectable({
    providedIn: 'root'
})
export class TopicoService{

    page: number = 0;

    constructor(private http: HttpClient){}

    listTopicosPaginated(page: number) {
        return this.http
            .get<TopicosPaginated>(API + `/topicos?page=${page}&size=3`);
    }
    

}