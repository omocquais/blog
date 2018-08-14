import {Component, Input, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  dontLoveIt() {
    console.log('dontLoveIt');
    this.loveIts = this.loveIts - 1;
    console.log('loveIts' + this.loveIts);

  }

  loveIt() {
    console.log('loveIt');
    this.loveIts = this.loveIts + 1;
    console.log('loveIts' + this.loveIts);

  }

  getColor(): string {
    if (this.loveIts < 0) {
      return 'list-group-item-danger';
    } else {
      return 'list-group-item-success';
    }
  }
}
