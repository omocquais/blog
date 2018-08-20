import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from './post';
import {Subscription} from 'rxjs';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  title = 'blog';
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postsSubscription = this.postService.getPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      });

    this.postService.emitPosts();

  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

}
