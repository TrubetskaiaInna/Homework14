import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './post.dto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private myHttp: HttpClient) {
  }

  public getPost(id): Observable<Post[]> {
    return this.myHttp.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
