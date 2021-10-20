import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Substation } from '../substation.model';
import { SubstationService } from '../substation.service';


@Component({
  selector: 'app-substation-update',
  templateUrl: './substation-update.component.html'
})
export class SubstationUpdateComponent implements OnInit {

  
  @Input("substationUpdate") substation: any;
  
  
  
  formGroup: FormGroup = new FormGroup({});
  regions: string[] = ["R1", "R2", "R3", "R4", "R5", "R6", "R7"];
  cities: string[] = ["NIKŠIĆ", "PODGORICA", "CETINJE", "BERANE", "ROŽAJE",
                       "BUDVA", "BAR", "ULCINJ", "KOTOR", "TIVAT", "HERCEG NOVI",
                      "BIJELO POLJE","KOLAŠIN", "MOJKOVAC", "ŽABLJAK", "PLJEVLJA"];
  municipalities: string[] = ["ANDRIJEVICA","BAR", "BERANE", "BIJELO POLJE","BUDVA", "CETINJE","DANILOVGRAD","GOLUBOVCI","GUSINJE",
  "HERCEG NOVI","KOLAŠIN","KOTOR","MOJKOVAC","NIKŠIĆ","PETNJICA", "PLAV","PLJEVLJA","PLUŽINE","PODGORICA", "ROŽAJE",  "ŠAVNIK",
  "TIVAT", "TUZI", "ULCINJ","ŽABLJAK"  ];
  substationId: number=0;
 // substation: Substation | undefined;
 
  
  constructor(
    private substationService: SubstationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.substationId = this.substation.id;
    this.initializeForm();
  }

  private initializeForm(): void {
    this.formGroup = new FormGroup({
      'region': new FormControl(this.substation.region, Validators.required),
      'city': new FormControl(this.substation.city, Validators.required),
      'municipality': new FormControl(this.substation.municipality),
      'issCode': new FormControl(this.substation.issCode, [Validators.maxLength(6), Validators.minLength(6)]),
      'voltageTransformation': new FormControl(this.substation.voltageTransformation),
      'name': new FormControl(this.substation.name, Validators.required),
      'fullName': new FormControl(this.substation.fullName, Validators.required)    })
  }

  onFormClear(): void{
      this.formGroup.reset();
  }

  onFormSubmit(): void{
    const values = this.formGroup.value;
    const substation: Substation = {
    region:	values.region,
    city: values.city,
    municipality: values.municipality,
    voltageTransformation: values.voltageTransformation,
    issCode: values.issCode,
    name: values.name,
    fullName: values.fullName
    }

    this.substationService.update(this.substationId, substation).subscribe(data=>{
      this.substation = data;
      location.reload();
    })

}

}
