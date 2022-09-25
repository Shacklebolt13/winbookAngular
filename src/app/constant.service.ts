import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantService {
  public readonly API_URL = 'https://winbookbackend.d3m0n1k.engineer/';
  public readonly API_URL_LOGIN = this.API_URL + 'login/';
  public readonly API_URL_SIGNUP = this.API_URL + 'signup/';
  public readonly API_URL_FORGOT = this.API_URL + 'forgot/';

  constructor() {}
}
