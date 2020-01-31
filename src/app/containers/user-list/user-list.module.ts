import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from './user-list.component';
import {UserModule} from './user/user.module';
import {HttpClientModule} from '@angular/common/http';
import {PostListModule} from './post-list/post-list.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserModule,
    HttpClientModule,
    PostListModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }


