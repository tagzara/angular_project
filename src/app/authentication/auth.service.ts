import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string, rePassword: string, tel: string) {
    return this.http.post<any>('/api/register', { username, email, password, rePassword, tel });
  }

  login(username: string, password: string,) {
    return this.http.post<any>('/api/register', { username, password });
  }
  
}
