import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './layout/login/login.component';
import {MasterComponent} from './layout/master/master.component';
import {DashBoardComponent} from './layout/dash-board/dash-board.component';
import {IsAuthGuard} from './is-auth.guard';

const routes: Routes = [
  {path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full'},
  {path: '', redirectTo: 'admin/dashboard', pathMatch: 'full'},
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
      {path: 'users',
        loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
      }
    ],
    canActivate: [IsAuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
