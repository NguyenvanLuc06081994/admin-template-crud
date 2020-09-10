import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  userLogin;
  constructor(private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.userLogin = this.loginService.getUserLogin();
  }

  logout(): any {
    localStorage.removeItem('userLogin');
    this.router.navigate(['login']);
  }

}
