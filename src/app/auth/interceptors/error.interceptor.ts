import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(err => {
            if (err.status === 401) {
                this.authService.logout(); // 1. logout
                this.router.navigate(['login']); // 2. redirect to login   
            }
            //const error = err.error.message || err.statusText;
            if(err.status==404 || err.status ==500 || err.status==0) {
                window.alert(err.message);
            }
            return throwError(err);
            // {error: {message: "string", statusText: ""}}
        }));
    }
}