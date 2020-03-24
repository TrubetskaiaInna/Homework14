import {UserListComponent} from './user-list.component';
import {of} from 'rxjs';
import {User} from '../../rest/user/user.dto';

describe('UserListComponent', () => {
  it('should assign user in the items variable', () => {
    const userService = jasmine.createSpyObj('UserService', ['getUser']);
    const component = new UserListComponent(userService);
    const faceUser: User[] = [
      {
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
      },
      {
        id: 2,
        name: 'someName2',
        username: 'someUserName2',
        email: 'someEmail2',
        address: {
          street: 'someStreet2',
          suite: 'someSuite2',
          city: 'someCity2',
          zipcode: 'someZipcode2',
          geo: {lat: 'someLat2', lng: 'someLng2'}
        },
        phone: 'somePhone2',
        website: 'someWebsite2',
        company: {name: 'someName2', catchPhrase: 'someCatchPhrase2', bs: 'someBs2'}
      }
    ];
    userService.getUser.and.returnValue(of(faceUser));
    component.ngOnInit();
    expect(component.users).toEqual(faceUser);
  });
});
