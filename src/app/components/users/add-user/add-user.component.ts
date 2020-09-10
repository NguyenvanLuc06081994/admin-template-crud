import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoleService} from '../../../services/role.service';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formAddUser: FormGroup;
  roles = [];
  constructor(private roleService: RoleService,
              private userService: UserService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.roles = this.roleService.getAll();
    this.formAddUser = this.fb.group({
      id: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      role_id: ['']
    });
  }
  add(): void{
    console.log(this.formAddUser.value);
    this.userService.add(this.formAddUser.value);
    this.router.navigate(['']);
  }
}
