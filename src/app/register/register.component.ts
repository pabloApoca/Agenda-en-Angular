import { Component } from '@angular/core';
import { NgForm } from '@Angular/forms';
import { User } from '../model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  user: User = {
    nombre: '',
    apellido: '',
    dni: null,
    email: '',
    password: '',
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
  }



  register(form: NgForm) {
    console.log('form value', form.value);

    this.apiService.register(this.user)
    .subscribe(response => {
      this.router.navigate(['/']);
    })
  }

}
