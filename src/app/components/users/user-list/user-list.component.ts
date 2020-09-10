import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {RoleService} from '../../../services/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  roles = [];

  constructor(private userService: UserService,
              private roleService: RoleService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.roles = this.roleService.getAll();
  }

  delete(id): void {
    if (confirm('are you sure?')) {
      this.userService.delete(id);
    }
  }

  search(value): any {
    this.users = value ? this.filterUser(value) : this.userService.getAll();
  }

  filterUser(keyword): any {
    return this.userService.getAll().filter(user => {
      return user.username.toLowerCase().indexOf(keyword) !== -1;
    });
  }

}
