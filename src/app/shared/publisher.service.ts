import { Injectable, EventEmitter } from "@angular/core";


@Injectable({providedIn: 'root'})
export class PublisherService{

    eventEmitter = new EventEmitter<boolean>();

    notifyHeader(value: boolean): void{
        this.eventEmitter.emit(value);
    }

}