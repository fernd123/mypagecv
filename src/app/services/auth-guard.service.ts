import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let autenticado: boolean = this.auth.isAuthenticated();
    console.log(next);
    console.log(state);
    if (autenticado) {
      return true;
    } else {
      return false;
    }
  }
}
