import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {RouterModule, Routes} from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import { InputSearchComponent } from './input-search/input-search.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: UserListComponent
      },
      {
        path: 'add', component: AddUserComponent
      },
      {
        path: ':id/edit', component: EditUserComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
    InputSearchComponent,
    MessageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
