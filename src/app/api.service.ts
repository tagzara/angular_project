import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPost } from './shared/interfaces/post';
import { ITheme } from './shared/interfaces/theme';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  // loadThemes() {
  //   return this.httpClient.get<ITheme[]>(`${apiURL}/themes`);
  // }

  // loadPosts(limit?: number) {
  //   return this.httpClient.get<IPost[]>(`${apiURL}/posts${limit ? `?limit=${limit}` : ``}`);
  // }

}
