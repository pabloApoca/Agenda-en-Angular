import { Component } from '@angular/core';
import {NgForm} from '@Angular/forms';
import { Credentials } from '../model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  creds: Credentials = {
    email: '',
    password: ''
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
  }

  login(form: NgForm) {
    console.log('form value', form.value);

    this.apiService.login(this.creds)
    .subscribe(response => {
      this.router.navigate(['/']);
    })
  }

}
