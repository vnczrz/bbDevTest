import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../shared/post.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  
  // datePipeString: string;
  post!: Post;
  id!: number;
  
  constructor(private route: ActivatedRoute,
              private router: Router, 
              private postService: PostService, 
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']
          this.post = this.postService.getPost(this.id);
        }
      )
    
  }

  onEdit(){
    this.router.navigate(['create', this.id])
  }

  onDelete() {
    this.postService.deletePost(this.id);
    this.router.navigate(['']);
  }

}


    // const uuid = this.route.snapshot.params['uuid']
    // this.post = this.postService.getPost(uuid);
    // console.log(this.post)