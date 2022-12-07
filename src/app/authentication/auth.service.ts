import { Injectable } from '@angular/core';

import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  get isAuthenticated() {
    return this.user !== null;
  }

  constructor() { }
}
