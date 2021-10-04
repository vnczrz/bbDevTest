import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { UuidService } from '../uuid.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  blogForm: FormGroup;
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private uuid: UuidService,

  ) { }

  ngOnInit() {
    this.blogForm = new FormGroup ({
      blogInfo: new FormGroup ({
        'uuid': new FormControl(),
        'title': new FormControl(),
        'author': new FormControl(),
        'published': new FormControl() 
      }),
      blogContent: new FormGroup ({
        'heroImg': new FormControl(),
        'body': new FormControl(),
      })
    });

  }

}

// export class Post {
//   public uuid: string;
//   public title: string;
//   public author: string;
//   public published: string;
//   public heroImg: string;
//   public body: string;

//   constructor(uuid: string, title: string, author: string, published: string, heroImg: string, body: string){
//       this.uuid = uuid;
//       this.title = title;
//       this.author = author;
//       this.published = published;
//       this.heroImg = heroImg;
//       this.body = body;

//   }
// }
