import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostCrudService } from './post-crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any;
  constructor(private router: Router, private postCrud: PostCrudService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (typeof token !== undefined && token !== null) {
      console.log('token is defined');
    } else {
      console.log('token is not defined');
      this.router.navigateByUrl('/account/login');
    }
    this.postCrud.getAllPosts().subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
}
