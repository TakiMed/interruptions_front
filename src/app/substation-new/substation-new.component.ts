import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Substation } from '../substation/substation.model';
import { SubstationService } from '../substation/substation.service';

@Component({
  selector: 'app-substation-new',
  templateUrl: './substation-new.component.html',
  styleUrls: ['./substation-new.component.css']
})
export class SubstationNewComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  substations: any[] = [];
  regions: string[] = ["R1", "R2", "R3", "R4", "R5", "R6", "R7"];
  cities: string[] = ["NIKŠIĆ", "PODGORICA", "CETINJE", "BERANE", "ROŽAJE",
                       "BUDVA", "BAR", "ULCINJ", "KOTOR", "TIVAT", "HERCEG NOVI",
                      "BIJELO POLJE","KOLAŠIN", "MOJKOVAC", "ŽABLJAK", "PLJEVLJA"];
  municipalities: string[] = ["ANDRIJEVICA","BAR", "BERANE", "BIJELO POLJE","BUDVA", "CETINJE","DANILOVGRAD","GOLUBOVCI","GUSINJE",
  "HERCEG NOVI","KOLAŠIN","KOTOR","MOJKOVAC","NIKŠIĆ","PETNJICA", "PLAV","PLJEVLJA","PLUŽINE","PODGORICA", "ROŽAJE",  "ŠAVNIK",
  "TIVAT", "TUZI", "ULCINJ","ŽABLJAK"  ];
  
  constructor(
    private substationService: SubstationService
  ) { }

  ngOnInit(): void {
    this.substationService.getAll().subscribe(data=>{
      console.log(data);
        this.substations = data;
    })
    this.initializeForm();
  }

  private initializeForm(): void {
    this.formGroup = new FormGroup({
      'region': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'municipality': new FormControl(null),
      'issCode': new FormControl(null, [Validators.maxLength(6), Validators.minLength(6)]),
      'voltageTransformation': new FormControl(null),
      'name': new FormControl(null, Validators.required),
      'fullName': new FormControl(null, Validators.required)    })
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
    console.log(substation);
    this.substationService.create(substation).subscribe(data=>{
      console.log(data);
    })

}

}
