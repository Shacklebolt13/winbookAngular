import { Component, OnInit } from '@angular/core';
import { UserDiscoveryService } from 'src/app/user-discovery.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css'],
})
export class SearchresultsComponent implements OnInit {
  searchResultData = new Array();

  constructor(private userDiscovery: UserDiscoveryService) {
    this.userDiscovery.searchList.subscribe((data) =>
      this.searchResultData.push(data)
    );
  }

  ngOnInit(): void {}
}
