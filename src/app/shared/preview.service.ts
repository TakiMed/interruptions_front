import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PreviewService{
    constructor(){}
    isPreviewAvailable(): boolean{
        return true;
    }
}