import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../shared/post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  //utilize the '!' symbol to indicate definite assignment 
  blogPosts!: Post[];

  constructor( private postService: PostService) { }

  ngOnInit(){
    //on init call service to populate array of posts
    this.blogPosts = this.postService.getPosts();

  }

}
