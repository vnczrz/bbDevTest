import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  
   post!: Post;
  
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {

    const uuid = this.route.snapshot.params['uuid']
    this.post = this.postService.getPost(uuid);
    console.log(this.post)

  }

}
