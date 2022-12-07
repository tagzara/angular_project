import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

 get user() {
    return this.authService.user;
  }

  constructor(private authService: AuthService, private router: Router) { }

}
