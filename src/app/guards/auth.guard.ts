import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";



@Injectable({ providedIn:'root' })
export class AuthGuard implements CanActivate{

    constructor(
        private authService: AuthService,
        private router: Router
    ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const isAuthenticated: boolean = this.authService.isAuthenticated.getValue();
        if(isAuthenticated){
            // this.router.navigate(['home'])
            return true;
        }
        else{
            
            this.authService.logout();
            this.router.navigate(['login']);
            return false;
        }
    }


}