import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantService } from '../constant.service';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostCrudService {
  constructor(
    private httpClient: HttpClient,
    private constants: ConstantService
  ) {}

  getAllPosts() {
    return this.httpClient
      .get(this.constants.API_URL_POST, {
        headers: new HttpHeaders().set(
          'Authorization',
          'Token ' + localStorage.getItem('token')
        ),
      })
      .pipe(first());
  }

  getPostById(id: number) {
    return this.httpClient
      .get(this.constants.API_URL_POST + id, {
        headers: new HttpHeaders().set(
          'Authorization',
          'Token ' + localStorage.getItem('token')
        ),
      })
      .pipe(first());
  }
  createPost(post: any) {}
  deletePost(id: number) {
    return this.httpClient
      .delete(this.constants.API_URL_POST, {
        headers: new HttpHeaders().set(
          'Authorization',
          'Token ' + localStorage.getItem('token')
        ),
      })
      .pipe(first());
  }
  toggleLike(id: number) {
    return this.httpClient
      .post(
        this.constants.API_URL_POST + id + '/like/',
        {},
        {
          headers: new HttpHeaders().set(
            'Authorization',
            'Token ' + localStorage.getItem('token')
          ),
        }
      )
      .pipe(first());
  }
}
