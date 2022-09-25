import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { UserDiscoveryService } from 'src/app/user-discovery.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  searchForm: FormGroup;
  searchInput: FormControl;

  constructor(private userDiscovery: UserDiscoveryService) {
    this.searchInput = new FormControl('');
    this.searchForm = new FormGroup({
      searchInput: this.searchInput,
    });
  }

  search() {
    function errorHandler() {
      return throwError(() => new Error('Error'));
    }

    this.userDiscovery
      .searchUsers(this.searchInput.value)
      .pipe(catchError(errorHandler))
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnInit(): void {}
}
