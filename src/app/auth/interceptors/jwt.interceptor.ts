import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isAuthenticated = this.authService.isAuthenticated.getValue(); // true | false
        const isApiRoute = req.url.startsWith(environment.apiUrl);
        if (isAuthenticated && isApiRoute) {
            const token = localStorage.getItem('token'); // token iz local storage-a
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`, // 'Bearer ' + token
                }
            });
        }
        return next.handle(req);
    }
}