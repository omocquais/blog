import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Post} from '../post';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }

  onSubmitForm() {
    const formValue = this.postForm.value;

    const newPost = new Post();
    newPost.content = formValue['content'];
    newPost.title = formValue['title'];
    newPost.created_at = new Date();
    newPost.loveIts = 0;

    this.postService.newPost(newPost);

    this.router.navigate(['/posts']);
  }

}
