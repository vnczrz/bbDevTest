import { Component, Input, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  //post is passed down using @input property binding from parent component postList
  @Input() post!: Post;

  constructor( ) { }

  ngOnInit(){
  }

}
