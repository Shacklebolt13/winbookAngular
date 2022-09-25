import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts = [1, 2, 3];
  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (typeof token !== undefined && token !== null) {
      console.log('token is defined');
    } else {
      console.log('token is not defined');
      this.router.navigateByUrl('/account/login');
    }
  }
}
