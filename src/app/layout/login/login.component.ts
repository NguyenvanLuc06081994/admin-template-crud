import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): any {
    const value = this.formLogin.value;
    if (this.loginService.findUser(value)){
      this.router.navigate(['admin']);
    }else{
      this.router.navigate(['login']);
    }
  }

}
