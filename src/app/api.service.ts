import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto, Credentials } from './model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private urlApi = 'http://localhost:8080/api/contactos';
    private urlApi2 = 'http://localhost:8080/login';

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    getContactos(): Observable<Contacto[]> {
        return this.http.get<Contacto[]>(this.urlApi);
    }

    login(creds: Credentials){
        return this.http.post(this.urlApi2, creds, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            const body = response.body;
            const headers = response.headers;

            const bearerToken = headers.get('Authorization')!;
            const token = bearerToken.replace('Bearer ', '');
            const user = headers.get('user')!;
            const name = headers.get('name')!;
            const email = headers.get('email')!;

            localStorage.setItem('token', token);
            localStorage.setItem('user', user);
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);

            return body;
        }))
    }

    getToken() {
        return localStorage.getItem('token');
    }

    getName():string | null {
        const name = localStorage.getItem('name');
        return name;
    }

    getUser(): string | null {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        console.log(user);
        return user;
    }

    removeToken(){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}