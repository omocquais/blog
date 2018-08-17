import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from './post';
import {Subscription} from 'rxjs';
import {PostService} from './services/post.service';
import {Routes} from '@angular/router';
import {PostListComponentComponent} from './post-list-component/post-list-component.component';
import {NewPostComponent} from './new-post/new-post.component';

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

    // let post = new Post();
    // post.content = 'un super contenu';
    // post.created_at = new Date(2018, 5, 7);
    // post.title = 'mon premier post';
    // post.loveIts = 0;
    //
    // this.posts[0] = post;
    //
    // post = new Post();
    // post.content = 'un autre super contenu';
    // post.created_at = new Date(2018, 6, 8);
    // post.title = 'mon second post';
    // post.loveIts = 0;
    //
    // this.posts[1] = post;
    //
    // post = new Post();
    // post.content = 'encore un autre super contenu';
    // post.created_at = new Date(2017, 5, 7);
    // post.title = 'Encore un post';
    // post.loveIts = 0;
    //
    // this.posts[2] = post;
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

}
