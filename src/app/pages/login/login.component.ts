import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  progresso =  0;
  carregando = false ;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
     private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }


login(): void {

  if (this.loginForm.invalid) {
    return;
  }

  const { email, senha } = this.loginForm.value;

  this.authService.login(email, senha).subscribe({

    next: (usuarios) => {

      if (usuarios.length > 0) {

        this.carregando = true;
        this.progresso = 0;

        const intervalo = setInterval(() => {

          this.progresso += 2;

          if (this.progresso >= 100) {

            clearInterval(intervalo);

            this.router.navigate(['/dashboard']);
          }

        }, 100);

      } else {
        console.log('E-mail ou senha inválidos');
      }

    },

    error: (error) => {
      console.error(error);
    }

  });

}

}