import { NzMessageService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /* if (sessionStorage.getItem('currentUser')) {
            // logged in so return true

            return true;
        }

        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});

        this.router.navigate(['/login']);
        console.error('AUTH GUARD ACTIVATED - UNAUTHORIZED ACCESS');
        return false; */
        return true;
    }
}
