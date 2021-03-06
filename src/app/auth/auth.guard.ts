import { Injectable } from '@angular/core';
import {
  CanActivate, CanLoad, Router, Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  UrlTree
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canLoad(route: Route): true | UrlTree {
    const url = `/${route.path}`;

    return this.checkLogin(url);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    console.log('AuthGuard#canActivate called');

    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    return this.canActivate(next, state);
  }

  checkLogin(url: string): true | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    }

    // Create a dummy session id.
    const sessionId = 123456789;

    // Set out navigation extras object that contains our
    // global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId },
      fragment: 'anchor'
    };

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Redirect to the login page with extras
    return this.router.createUrlTree(['/login'], navigationExtras);
  }

}
