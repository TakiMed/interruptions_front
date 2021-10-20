import { Injectable, EventEmitter } from "@angular/core";


@Injectable({providedIn: 'root'})
export class PublisherAuthService{

    eventEmitter = new EventEmitter<boolean>();

    notifyLogin(value: boolean): void{
        this.eventEmitter.emit(value);
    }

}