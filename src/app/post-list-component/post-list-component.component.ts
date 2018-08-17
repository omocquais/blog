import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostService) {
  }

  ngOnInit() {
    this.postsSubscription = this.postsService.getPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );

    this.postsService.emitPosts();
  }
}
