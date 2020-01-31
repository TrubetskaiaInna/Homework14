import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from './user-list.component';
import {UserModule} from './user/user.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserModule,
    HttpClientModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }


