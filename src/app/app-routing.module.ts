import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './layout/login/login.component';
import {MasterComponent} from './layout/master/master.component';
import {DashBoardComponent} from './layout/dash-board/dash-board.component';
import {UserListComponent} from './components/users/user-list/user-list.component';

const routes: Routes = [
  {path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: MasterComponent,
    children: [
      {path: 'dashboard', component: DashBoardComponent
      },
      {path: 'users', children: [
          {path: '', component : UserListComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
