import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user.model";


@Injectable({providedIn:'root'})
export class UserService{
    // za komunikaciju sa serverom HTTP CLIENT
    constructor(
        private httpClient: HttpClient
    ){}

    getAll(): Observable<User[]>{
        const url = 'http://localhost:8080/api/users'
        const httpHeaders  = new HttpHeaders();
        httpHeaders.set('Content-Type','application/json');

        return this.httpClient.get<User[]>(
            url,{ headers: httpHeaders }
        );
    }



}