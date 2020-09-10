import {Injectable} from '@angular/core';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private userService: UserService) {
  }

  findUser(data): boolean {
    for (let user of this.userService.getAll()) {
      if (data.email === user.email && data.password === user.password) {
        localStorage.setItem('userLogin', JSON.stringify(user));
        return true;
      }
    }
    return false;
  }

  getUserLogin(): any {
    return JSON.parse(localStorage.getItem('userLogin'));
  }
}
