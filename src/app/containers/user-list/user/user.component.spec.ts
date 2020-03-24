import {UserComponent} from './user.component';

describe('UserComponent', () => {
  it('should raises the selected event when clicked', () => {
    const component = new UserComponent();
    const faceUser = {
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
    };
    component.user = faceUser;
    component.getingSingleUserId.subscribe((getingSingleUserId) =>
      expect(getingSingleUserId).toBe(faceUser));
    component.getSingleUserId();
  });
});
