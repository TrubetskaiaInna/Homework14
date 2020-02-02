import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) {
  }

  public getUser(): Observable<User[]> {
    return this.myHttp.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
