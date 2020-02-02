export class User {
  readonly id: number;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  };
  readonly phone: string;
  readonly website: string;
  readonly company: {
    name: string,
    catchPhrase: string,
    bs: string
  };
}

