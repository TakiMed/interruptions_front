import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Substation } from "./substation.model";
import { SubstationService } from "./substation.service";
 
@Injectable({ providedIn: 'root'})
export class SubstationResolver implements Resolve<Substation | undefined>{

    constructor(
        private substationService: SubstationService
    ){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const substationId = route.params.id; // value of pathVariable
        return this.substationService.getById(substationId);
    }

    
} 