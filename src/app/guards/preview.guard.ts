import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { PreviewService } from "../shared/preview.service";

@Injectable()
export class PreviewGuard implements CanActivate{

    constructor(private router: Router,
                private previewService: PreviewService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if(this.previewService.isPreviewAvailable()){
            return true;
        }
        const redirectTo = route.data.redirectPreviewNotAvailableTo;

        this.router.navigate([redirectTo]);
        return false;
        
       //  const data = route.data;
       // if(data.isPreviewAvailable){
        //    return true;
       // }
        //this.router.navigate(['home']);
        //return false;
    }
}