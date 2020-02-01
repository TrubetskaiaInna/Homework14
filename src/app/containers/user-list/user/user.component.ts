import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html'
})
export class UserComponent implements OnInit {
  @Input() user;
  @Output() getingSingleUserId: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  getSingleUserId() {
    this.getingSingleUserId.emit();
  }
}
