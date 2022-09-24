import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public activeLink: number;
  constructor(private router: Router) {
    this.activeLink = this.router.url === '/discover' ? 2 : 1;
  }
  ngOnInit(): void {}
}
