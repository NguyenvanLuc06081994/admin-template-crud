import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userLogin = this.loginService.getUserLogin();
    if (!userLogin){
      this.router.navigate(['login']);
    }
    return true;
  }
}
