import {Injectable} from '@angular/core';
import {Post} from '../post';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private subject = new Subject<Post[]>();
  private posts: Post[];

  newPost(aPost: Post) {
    this.posts.push(aPost);
    this.emitPosts();
  }

  emitPosts() {
    this.subject.next(this.posts.slice());
  }

  getPosts(): Observable<Post[]> {
    return this.subject.asObservable();
  }

  constructor() {
    this.posts = [];
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.emitPosts();
  }

  incrementLoveIt(index: number) {
    this.posts[index].loveIts = this.posts[index].loveIts + 1;
    this.emitPosts();
  }

  decrementLoveIt(index: number) {
    this.posts[index].loveIts = this.posts[index].loveIts - 1;
    this.emitPosts();
  }
}
