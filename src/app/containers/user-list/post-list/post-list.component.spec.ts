import {PostListComponent} from './post-list.component';
import {of} from 'rxjs';
import {Post} from '../../../rest/post/post.dto';

describe('PostListComponent', () => {
  it('should assign post in the items variable', () => {
    const postService = jasmine.createSpyObj('PostService', ['getPost']);
    const component = new PostListComponent(postService);
    const facePost: Post[] = [
      {userId: 1, id: 1, title: 'someTitle', body: 'some text'},
      {userId: 2, id: 2, title: 'someTitle2', body: 'some text2'}
    ];
    postService.getPost.and.returnValue(of(facePost));
    component.ngOnChanges();
    expect(component.posts).toEqual(facePost);
  });
});
