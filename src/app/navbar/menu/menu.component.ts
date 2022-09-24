import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isdark = localStorage.getItem('theme') === 'dark-theme' ? true : false;
  constructor() {}

  ngOnInit(): void {}

  toggleTheme() {
    if (this.isdark) {
      localStorage.setItem('theme', 'light-theme');
    } else {
      localStorage.setItem('theme', 'dark-theme');
    }
  }
  checktheme() {}
}
