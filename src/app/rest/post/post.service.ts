import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private myHttp: HttpClient) {
  }

  public getPost(id) {
    return this.myHttp.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
