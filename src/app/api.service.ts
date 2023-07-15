import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from './model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private urlApi = 'api/contactos';

    constructor(
        private http: HttpClient
    ) { }

    getContactos(): Observable<Contacto[]> {
        const con = this.http.get<Contacto[]>('http://localhost:8080/api/contactos');
        console.log(con);
        return this.http.get<Contacto[]>(this.urlApi);
    }
}