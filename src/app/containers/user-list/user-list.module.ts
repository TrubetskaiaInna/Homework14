import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from './user-list.component';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }


