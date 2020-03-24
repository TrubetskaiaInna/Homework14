import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {PostService} from './post.service';
import {Post} from './post.dto';

describe('PostService', () => {
  let postService: PostService;
  let httpControllers: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    postService = TestBed.get(PostService);
    httpControllers = TestBed.get(HttpTestingController);
  });
  it('should return posts list', () => {
    const facePost: Post[] = [
      {userId: 1, id: 1, title: 'someTitle', body: 'some text'}
    ];
    const faceUserId = 1;
    postService.getPost(faceUserId).subscribe(data => {
      expect(data).toEqual(facePost);
    });
    const request = httpControllers.expectOne(`https://jsonplaceholder.typicode.com/posts?userId=${faceUserId}`);
    expect(request.request.method).toBe('GET');
    request.flush(facePost);
  });
});
