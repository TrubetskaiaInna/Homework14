import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../../../rest/user/user.dto';

@Component({
  selector: 'app-user',
  templateUrl: './user.html'
})
export class UserComponent implements OnInit {
  @Input() user;
  @Output() getingSingleUserId: EventEmitter<User> = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit() {
  }

  getSingleUserId() {
    this.getingSingleUserId.emit();
  }
}
