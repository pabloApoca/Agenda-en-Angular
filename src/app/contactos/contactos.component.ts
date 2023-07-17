import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Contacto } from '../model';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
})
export class ContactosComponent implements OnInit {
  contactos?: Contacto[];

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.getContactos()
    .subscribe(contactos => {
      this.contactos = contactos;
    })
  }

  removeToken(){
    this.apiService.removeToken();
  }

}
