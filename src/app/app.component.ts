import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Winbook';
  isDarkMode = localStorage.getItem('theme') === 'dark-theme' ? true : false;

  @HostBinding('class') get themeMode() {
    return this.isDarkMode ? 'dark-theme' : 'light-theme';
  }
}
