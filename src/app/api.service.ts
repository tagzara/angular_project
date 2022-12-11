import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPost } from './shared/interfaces/post';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadPosts() {
    return this.httpClient.get<IPost[]>(`${apiURL}/posts`);
  }

  loadPost(id: number) {
    return this.httpClient.get<IPost>(`${apiURL}/posts/${id}`);
  }

  // loadPosts(limit?: number) {
  //   return this.httpClient.get<IPost[]>(`${apiURL}/posts${limit ? `?limit=${limit}` : ``}`);
  // }

}
