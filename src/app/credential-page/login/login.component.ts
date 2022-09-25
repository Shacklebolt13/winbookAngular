import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CredManagerService } from '../cred-manager.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, first } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: FormControl;
  password: FormControl;

  loginForm: FormGroup;
  loadingState: string;

  get submitEnabled() {
    return !(this.username.valid && this.password.valid);
  }

  getErrorMessage(type: string) {
    return this.credman.getErrorMessage(
      type === 'username' ? this.username : this.password,
      type
    );
  }

  constructor(
    private credman: CredManagerService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.username = new FormControl('', [
      Validators.required,
      Validators.required,
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.required,
    ]);
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password,
    });
    this.credman = credman;
    this.loadingState = 'hide';
  }

  tryLogIn() {
    console.log('trying to log in');

    this.loadingState = '';
    this.credman
      .login(this.username.value, this.password.value)
      .pipe(first(), catchError(this.handleError.bind(this)))
      .subscribe((data: any) => {
        if (data.status === 'success') {
          console.log('logged in', data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', this.username.value);
          this.router.navigateByUrl('');
        } else {
          console.log('error occured, data:', data);
        }
        this.loadingState = 'hide';
      });
  }

  ngOnInit(): void {
    console.log(this.loginForm);
  }

  handleError(error: any) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (error.status === 401) {
        this._snackBar.open(error.error.message, 'Close', {
          duration: 2000,
          verticalPosition: 'top',
        });
      }
    }
    // return an observable with a user-facing error message
    this.loadingState = 'hide';
    return throwError(() => new Error('error occured'));
  }
}
