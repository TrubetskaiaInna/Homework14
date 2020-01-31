import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) {
  }

  public get(): any {
    return this.myHttp.get('https://jsonplaceholder.typicode.com/users');
  }
}
