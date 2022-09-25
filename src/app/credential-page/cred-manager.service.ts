import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, first } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { ConstantService } from '../constant.service';

@Injectable({
  providedIn: 'root',
})
export class CredManagerService {
  httpClient: HttpClient;
  constants: ConstantService;

  constructor(httpClient: HttpClient, constants: ConstantService) {
    this.httpClient = httpClient;
    this.constants = constants;
  }

  getErrorMessage(field: FormControl, type: string) {
    if (field.hasError('required')) {
      return type === 'email'
        ? 'You must enter an email'
        : 'You must enter a ' + type;
    }

    if (type === 'email') {
      return field.hasError('email') ? 'Not a valid email' : '';
    }
    if (type === 'username') {
      // TODO username validation
      // return this.email.hasError(') ? 'Not a valid username' : '';
    }

    if (type === 'password') {
      if (field.hasError('required')) {
        return 'You must enter an password';
      }
    }
    return '';
  }

  login(username: string, password: string) {
    return this.httpClient
      .post(this.constants.API_URL_LOGIN, {
        username: username,
        password: password,
      })
      .pipe(retry(1));
  }
}
