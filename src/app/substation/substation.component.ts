import { Component, OnInit } from "@angular/core";
import { Substation } from "./substation.model";
import { SubstationService } from "./substation.service";


@Component({
    selector: 'app-substation',
    templateUrl: './substation.component.html'
})
export class SubstationComponent implements OnInit{

    substations: Substation[] = [];

     constructor( private substationService: SubstationService) {}
    ngOnInit(): void {
        
    }

    getAll(){
        this.substationService.getAll().subscribe(data =>
           { this.substations = data; }
        )
    }

}