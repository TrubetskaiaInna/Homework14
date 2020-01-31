import {Component, OnInit} from '@angular/core';
import {UserService} from '../../rest/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UserListComponent implements OnInit {
  public users;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.get().subscribe(users => this.users = users);
  }
}
