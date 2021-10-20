import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class HeadersService{


    public getHeaders(): HttpHeaders{
        const httpHeaders  = new HttpHeaders();
        httpHeaders.set('Content-Type','application/json');
        return httpHeaders;
    }

    public headersObject = { headers: this.getHeaders() }
}