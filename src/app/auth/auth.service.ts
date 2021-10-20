import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { JwtToken } from "./models/jwt.model";
import { Login } from "./models/login.model";
import { tap } from "rxjs/operators";
import { PublisherService } from "../shared/publisher.service";
import { PublisherAuthService } from "../shared/publisher.auth.service";

@Injectable({ providedIn: 'root'})
export class AuthService{

    isAuthenticated = new BehaviorSubject<boolean>(false);

    constructor(private httpClient: HttpClient,
                private publisherAuthService: PublisherAuthService){}

    authorize(loginData: Login): Observable<JwtToken> {
        const url=`${environment.apiUrl}/auth/login`;
        return this.httpClient.post<JwtToken>(
            url, loginData, {headers: this.getHeaders()}
        ).pipe(tap(data=>{
            this.isAuthenticated.next(true);
        })
        );
    }

    logout(){
        this.isAuthenticated.next(false);
        this.publisherAuthService.notifyLogin(this.isAuthenticated.value);
        localStorage.removeItem('token')
    }

    private getHeaders(): HttpHeaders{
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return httpHeaders;
    }
}