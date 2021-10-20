import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Role } from "./role.model";


@Injectable({providedIn:'root'})
export class RoleService{
    constructor(private httpClient: HttpClient){}

    getAll():Observable<Role[]>{
        const apiUrl = `${environment.apiUrl}/role`;
        return this.httpClient.get<Role[]>(
            apiUrl, {headers: this.getHeaders() }
        );
    }

    private getHeaders(): HttpHeaders{
        const httpHeaders  = new HttpHeaders();
        httpHeaders.set('Content-Type','application/json');
        return httpHeaders;
    }
}