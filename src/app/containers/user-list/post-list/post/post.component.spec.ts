import {PostComponent} from './post.component';
import {Post} from '../../../../rest/post/post.dto';

describe('PostComponent', () => {
  it('should assign post', () => {
    const component = new PostComponent();
    const facePost: Post[] = [
      {userId: 1, id: 1, title: 'someTitle', body: 'some text'},
      {userId: 2, id: 2, title: 'someTitle2', body: 'some text2'}
    ];
    component.post = facePost;
    expect(component.post).toEqual(facePost);
  });
});
