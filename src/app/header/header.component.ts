import { Component, OnInit } from "@angular/core";
import { PublisherService } from "../shared/publisher.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class HeaderComponent implements OnInit {
    links: any[] = [
        {name: "Početna ", route: "home"},
        {name: "Prekidi", route: "interruption-list"},
        {name: "Trafostanice", route: "substation"},
   //     {name: "O meni", route: "contact"},
        {name: "Motivacija ", route: "notes"},
        
    ];

    toggleDropdown: boolean = false;
    loginActivePage: boolean = false;
    constructor( private publisherService : PublisherService ){
    }
    ngOnInit(): void {
        this.publisherService.eventEmitter.subscribe(
            data => {this.loginActivePage = data;}
        )
    }
    

    toggleDropdownValue():void{
        this.toggleDropdown =!this.toggleDropdown;
    }
    
}