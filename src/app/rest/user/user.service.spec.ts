import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UserService} from './user.service';
import {User} from './user.dto';

describe('UserService', () => {
  let userService: UserService;
  let httpControllers: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    userService = TestBed.get(UserService);
    httpControllers = TestBed.get(HttpTestingController);
  });
  it('should return users list', () => {
    const faceUser: User[] = [{
      id: 1,
      name: 'someName',
      username: 'someUserName',
      email: 'someEmail',
      address: {
        street: 'someStreet',
        suite: 'someSuite',
        city: 'someCity',
        zipcode: 'someZipcode',
        geo: {lat: 'someLat', lng: 'someLng'}
      },
      phone: 'somePhone',
      website: 'someWebsite',
      company: {name: 'someName', catchPhrase: 'someCatchPhrase', bs: 'someBs'}
    }];
    userService.getUser().subscribe(data => {
      expect(data).toEqual(faceUser);
    });
    const request = httpControllers.expectOne(`https://jsonplaceholder.typicode.com/users`);
    expect(request.request.method).toBe('GET');
    request.flush(faceUser);
  });
});
