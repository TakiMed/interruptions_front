import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Substation } from '../substation.model';

@Component({
  selector: 'app-substation-detail',
  templateUrl: './substation-detail.component.html',
})
export class SubstationDetailComponent implements OnInit {
  
  substationId: number=0;
  @Input("substationDetail") substation: any;
  @Output("substationDetailClosed") eventEmitter = new EventEmitter<any>();

  constructor( private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    console.log(this.substation);
   /* this.activatedRoute.params.subscribe(data=>
      { console.log(data);
        this.substationId = data.id;}
    )
    */
      // from resolver
      /*
    this.activatedRoute.data.subscribe(data=>{
      console.log("detail, " + data);
      this.substation = data.substation;
     })
     */

  }

  onSubstationOpen(){
    this.substation = null;
    this.eventEmitter.emit(this.substation);
  }

}
