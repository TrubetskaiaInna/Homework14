import {Component, Input, OnChanges} from '@angular/core';
import {PostService} from '../../../rest/post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.scss']
})
export class PostListComponent implements OnChanges {
  public posts;
  @Input() idUser;

  constructor(private postService: PostService) {
  }

  ngOnChanges() {
    this.postService.getPost(this.idUser).subscribe(
      posts => this.posts = posts,
      err => console.log('error', err.status),
      () => console.log('request completed'));
  }
}
