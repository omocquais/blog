import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import {PostService} from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const appPosts: Routes = [
  {path: 'posts', component: PostListComponentComponent},
  {path: 'new', component: NewPostComponent},
  {path: '', component: PostListComponentComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appPosts)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
