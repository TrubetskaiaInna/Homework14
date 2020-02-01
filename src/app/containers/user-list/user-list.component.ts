import {Component, OnInit} from '@angular/core';
import {UserService} from '../../rest/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UserListComponent implements OnInit {
  public users;
  public idUser;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(
      users => this.users = users,
      err => console.log('error', err.status),
      () => console.log('request completed'));
  }
}
