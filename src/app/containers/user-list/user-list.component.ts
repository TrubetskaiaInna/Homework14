import {Component, OnInit} from '@angular/core';
import {UserService} from '../../rest/user/user.service';
import {User} from '../../rest/user/user.dto';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UserListComponent implements OnInit {
  public users: User[];
  public idUser;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      err => console.log('error', err.status),
      () => console.log('request completed'));
  }
}
