import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostCrudService } from '../post-crud.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  caption!: string;
  image!: string;
  likes!: number;
  liked!: boolean;
  id!: number;
  ownername!: string;
  ownerid!: number;
  ownerimage!: string;
  created!: string;
  @Input() data: any;

  constructor(private postCrudService: PostCrudService) {}

  ngOnInit(): void {
    this.caption = this.data.caption;
    this.image = this.data.url;
    this.likes = this.data.liked_cnt;
    this.liked = this.data.likedStatus;
    this.id = this.data.pk;
    this.ownername = this.data.userName;
    this.ownerimage = this.data.userDp;
    this.ownerid = this.data.user;
    var days_ago =
      new Date().getDate() - new Date(this.data.created_at).getDate();
    if (days_ago == 0) {
      this.created = 'Today';
    } else if (days_ago == 1) {
      this.created = 'Yesterday';
    } else {
      this.created =
        '' +
        new Date(this.data.created_at).getDate() +
        '/' +
        new Date(this.data.created_at).getMonth() +
        '/' +
        new Date(this.data.created_at).getFullYear();
    }
    console.log(this.data.liked);
  }
  toggleLike() {
    this.postCrudService.toggleLike(this.id).subscribe((data: any) => {
      console.log(data);
      this.liked = data.liked_status;
      this.likes = data.likes_count;
    });
  }
}
