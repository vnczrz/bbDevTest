import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from '../post.service';
import { UuidService } from '../uuid.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  id: number;
  blogForm: FormGroup;
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private uuid: UuidService,

  ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  private initForm() {
    let uuid = '';
    let title = '';
    let author = '';
    let published = '';
    let heroImg = '';
    let body = '';

    if (this.editMode) {
      const post = this.postService.getPost(this.id);
      uuid = post.uuid;
      title = post.title;
      author = post.author;
      published = post.published;
      heroImg = post.heroImg;
      body = post.body;
    } else {
      uuid = this.uuid.generate()
    }

    this.blogForm = new FormGroup({
      'uuid' : new FormControl(uuid, Validators.required),
      'title': new FormControl(title, Validators.required),
      'author': new FormControl(author, Validators.required),
      'published': new FormControl(published, Validators.required),
      'heroImg': new FormControl(heroImg, Validators.required),
      'body': new FormControl(body, Validators.required)
    })
  }

  onSubmit() {
    if (this.editMode) {
      this.postService.updatePost(this.id, this.blogForm.value);
    } else {
      this.postService.createPost(this.blogForm.value);
    }
  }

  onCancel() {
    this.router.navigate([''])
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


// this.blogForm = new FormGroup ({
//   blogInfo: new FormGroup ({
//     'uuid': new FormControl(),
//     'title': new FormControl(),
//     'author': new FormControl(),
//     'published': new FormControl() 
//   }),
//   blogContent: new FormGroup ({
//     'heroImg': new FormControl(),
//     'body': new FormControl(),
//   })
// });