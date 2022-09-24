import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  caption: string;
  image: string;
  likes: number;
  liked: boolean;
  id: number;
  ownername: string;
  ownerimage: string;
  created: Date;

  constructor() {
    this.caption = 'This is a caption';
    this.image = 'https://picsum.photos/200/300';
    this.likes = 0;
    this.liked = false;
    this.id = 0;
    this.ownername = 'John Doe';
    this.ownerimage = 'https://picsum.photos/200/300';
    this.created = new Date();
  }

  ngOnInit(): void {}
}
