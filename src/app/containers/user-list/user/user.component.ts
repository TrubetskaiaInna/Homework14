import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html'
})
export class UserComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}
