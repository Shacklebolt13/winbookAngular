import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostCrudService {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  getAllPosts() {}
  getPostById(id: number) {}
  createPost(post: any) {}
  deletePost(id: number) {}
}
