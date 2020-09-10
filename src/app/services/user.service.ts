import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      username: 'Van Luc',
      email: 'nvluc0608@gmail.com',
      password: '123456',
      role_id: 1
    },
    {
      id: 2,
      username: 'Thanh Tung',
      email: 'thanhtungmarine@gmail.com',
      password: '123456',
      role_id: 2
    },
    {
      id: 3,
      username: 'Xuan Duong',
      email: 'duongbui1997@gmail.com',
      password: '123456',
      role_id: 3
    }
  ];

  constructor() {
  }

  getAll(): IUser[] {
    return this.users;
  }
}
