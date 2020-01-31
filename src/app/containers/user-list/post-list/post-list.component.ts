import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../../rest/post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.scss']
})
export class PostListComponent implements OnInit {
  public posts;
  @Input() idUser;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.get(1).subscribe(posts => this.posts = posts);
  }
}
