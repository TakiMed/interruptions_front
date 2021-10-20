import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Substation } from "./substation.model";


@Injectable({ providedIn: 'root'})
export class SubstationService{

    constructor(private httpClient: HttpClient){}

    getAll():Observable<any[]>{
        const apiUrl = `${environment.apiUrl}/substations`;
        return this.httpClient.get<Substation[]>(
            apiUrl, {headers: this.getHeaders() }
        );
    }

    getById(id: number):Observable<Substation>{
        const apiUrl = `${environment.apiUrl}/substations/${id}`;
        return this.httpClient.get<Substation>(
            apiUrl, {headers: this.getHeaders() }
        );
    }

    searchByName(name: string):Observable<Substation[]>{
        const apiUrl = `${environment.apiUrl}/substations/search?name=${name}`;
        return this.httpClient.get<Substation[]>(
            apiUrl, {headers: this.getHeaders() }
        );
    }

    filterByVT(hvlv: string):Observable<Substation[]>{
        const apiUrl = `${environment.apiUrl}/substations/filter?voltageTransformation=${hvlv}`;
        return this.httpClient.get<Substation[]>(
            apiUrl, {headers: this.getHeaders() }
        );
    }

    create(substation: Substation):Observable<Substation>{
        const apiUrl = `${environment.apiUrl}/substations/dto`;
        return this.httpClient.post<Substation>(
            apiUrl, substation, {headers: this.getHeaders() }
        );
    }

    update(id: number, substation: Substation):Observable<Substation>{
        const apiUrl = `${environment.apiUrl}/substations/${id}`;
        return this.httpClient.put<Substation>(
            apiUrl, substation, {headers: this.getHeaders() }
        );
    }

    deleteById(id: number):Observable<void>{
        const apiUrl = `${environment.apiUrl}/substations/${id}`;
        return this.httpClient.delete<void>(
            apiUrl, { headers: this.getHeaders() }
        );
    }

    private getHeaders(): HttpHeaders{
        const httpHeaders  = new HttpHeaders();
        httpHeaders.set('Content-Type','application/json');
        return httpHeaders;
    }

}