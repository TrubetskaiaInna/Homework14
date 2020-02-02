import {Component, Input, OnChanges} from '@angular/core';
import {PostService} from '../../../rest/post/post.service';
import {Post} from '../../../rest/post/post.dto';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.scss']
})
export class PostListComponent implements OnChanges {
  public posts: Post[];
  @Input() idUser;

  constructor(private postService: PostService) {
  }

  ngOnChanges() {
    this.postService.getPost(this.idUser).subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      },
      err => console.log('error', err.status),
      () => console.log('request completed'));
  }
}
