import {Component, OnInit} from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'blog';
  posts = Array<Post>();

  ngOnInit(): void {

    let post = new Post();
    post.content = 'un super contenu';
    post.created_at = new Date(2018, 5, 7);
    post.title = 'mon premier post';
    post.loveIts = 0;

    this.posts[0] = post;

    post = new Post();
    post.content = 'un autre super contenu';
    post.created_at = new Date(2018, 6, 8);
    post.title = 'mon second post';
    post.loveIts = 0;

    this.posts[1] = post;

    post = new Post();
    post.content = 'encore un autre super contenu';
    post.created_at = new Date(2017, 5, 7);
    post.title = 'Encore un post';
    post.loveIts = 0;

    this.posts[2] = post;
  }


}
