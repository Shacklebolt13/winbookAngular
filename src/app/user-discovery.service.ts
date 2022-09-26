import { Injectable } from '@angular/core';
import { ConstantService } from './constant.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDiscoveryService {
  searchList = new Subject<any>();

  constructor(
    private constants: ConstantService,
    private httpClient: HttpClient
  ) {
    this.searchList.subscribe((data) => {
      console.log('gotData: ', data.results);
    });
  }

  getUserByUserName(userName: string) {
    this.httpClient
      .get(this.constants.API_URL_GET_USER_BY_USERNAME + userName, {
        headers: new HttpHeaders().set('Authorization', 'Token ' + 'token'),
      })
      .pipe(first());
  }

  searchUsers(searchTerm: string) {
    return this.httpClient
      .get(this.constants.API_URL_SEARCH_USERS + searchTerm, {
        headers: new HttpHeaders().set(
          'Authorization',
          'Token ' + localStorage.getItem('token')
        ),
      })
      .pipe(first());
  }
}
