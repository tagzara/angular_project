import { Component } from '@angular/core';

import { AuthService } from '../authentication/auth.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  constructor(private authService: AuthService) { }

}
