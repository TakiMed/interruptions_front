import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HeadersService } from "../shared/headers.service";

@Injectable({providedIn:'root'})
export class InterruptionService{

    constructor(
        private httpClient: HttpClient,
        private headersService: HeadersService ){}
    
    getAll():Observable<any[]>{
        const apiUrl = `${environment.apiUrl}/interruptions/dto`;
        return this.httpClient.get<any[]>(
            apiUrl, this.headersService.headersObject
        );
    }

}