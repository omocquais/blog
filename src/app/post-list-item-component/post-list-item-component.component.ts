import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  @Input() index: number;
  @Input() loveIts: number;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  dontLoveIt() {
    this.postService.decrementLoveIt(this.index);
  }

  loveIt() {
    this.postService.incrementLoveIt(this.index);
  }

  getColor(): string {
    if (this.loveIts < 0) {
      return 'list-group-item-danger';
    } else if (this.loveIts === 0) {
      return 'list-group-item';
    } else {
      return 'list-group-item-success';
    }
  }

  deletePost() {
    this.postService.deletePost(this.index);
  }
}
