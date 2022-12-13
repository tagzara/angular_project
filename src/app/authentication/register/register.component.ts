import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator, passwordMatchValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['', [Validators.required, appEmailValidator(this.fb.control)]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['']
    }, {
      validators: [passwordMatchValidator('password', 'repeatPassword')]
    }),
    gender: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }
    registerHandler() {
      console.log(this.form.value);
    }
}
