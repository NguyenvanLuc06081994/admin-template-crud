import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../../services/role.service';
import {UserService} from '../../../services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  roles = [];
  id = +this.active.snapshot.paramMap.get('id');
  formEditUSer: FormGroup;

  constructor(private roleService: RoleService,
              private userService: UserService,
              private fb: FormBuilder,
              private router: Router,
              private active: ActivatedRoute) {
  }

  ngOnInit(): void {
    const user = this.userService.users[this.userService.getIndexUser(this.id)];
    this.roles = this.roleService.getAll();
    this.formEditUSer = this.fb.group({
      id: [user.id],
      username: [user.username],
      email: [user.email],
      password: [user.password],
      role_id: [user.role_id]
    });
  }

  edit(): void {
    this.userService.edit(this.formEditUSer.value, this.id);
    this.router.navigate(['']);
  }
}
