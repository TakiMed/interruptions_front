import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SubstationService } from '../substation.service';


@Component({
  selector: 'app-substation-list',
  templateUrl: './substation-list.component.html',
  styleUrls: ['./substation-list.component.css']
})
export class SubstationListComponent implements OnInit {
  selectedSubstation:any;
  showModal: boolean = false;
  showUpdate: boolean = false;
  showDetail: boolean = false;
  showDelete: boolean = false;
  vTs : string[] = ['35/10','35/6,3', '35/6', '35/0,4', '35/35'];
  filterControl:FormControl = new FormControl('Prenosni odnos');
  toggleDropdown: boolean = false;
  
  substations: any[] = [
    {	id: 1, region:	"R1",	city: "NIKŠIĆ", municipality:"PLUŽINE",
    voltageTransformation:"35/10", issCode:	"HBREZN", name:"BREZNA", fullName:"35/10 BREZNA"},
   {	id: 2, region:	"R1",	city: "NIKŠIĆ", municipality:"PLUŽINE",
    voltageTransformation:"35/35", issCode:	"HGORAN", name:"RP GORANSKO", fullName:"35/35 RP GORANSKO"},
    {	id: 3, region:	"R1",	city: "NIKŠIĆ", municipality:"PLUŽINE",
    voltageTransformation:"35/6,3", issCode:	"HWVRBN", name:"MHE VRBNICA", fullName:"35/6,3 MHE VRBNICA"},
    {	id: 4, region:	"R1",	city: "NIKŠIĆ", municipality:"PLUŽINE",
    voltageTransformation:"35/10", issCode:	"HPLUZI", name:"PLUŽINE", fullName:"35/10 PLUŽINE"}
  ];
  
  
  constructor(
     private substationService: SubstationService,
  ) { }

  ngOnInit(): void {
    this.substationService.getAll()
                          .subscribe(data=>{this.substations = data;} 
    );
  }

  onSelectedSubstation(substation:any):void{
    this.selectedSubstation = substation;
  }

  search(event:any){
    this.substationService.searchByName(event.target.value)
                          .subscribe(data=>{ this.substations = data;}
    );
  }

  filter(){
    this.substationService.filterByVT(this.filterControl.value)
                          .subscribe(data => {this.substations = data;}
    )
  }

  onSubstationClosed(event:any):void{
    let index=0;
    for(let sub of this.substations){
      if(event.id == sub.id){
        this.substations[index].fullName = sub.fullName;
        break;
      }
      index++;
    }
  }

  toggleDropdownValue(){
    this.toggleDropdown = !this.toggleDropdown;
  }

  onShowUModal(selectedSubstation :any){
    this.selectedSubstation = selectedSubstation;
    this.showModal = true;
    this.showUpdate = true;
  }
  onShowModal(selectedSubstation :any){
    this.selectedSubstation = selectedSubstation;
    this.showModal = true;
    this.showDetail = true;
  }
  onShowDeleteModal(selectedSubstation :any){
    this.selectedSubstation = selectedSubstation;
    this.showModal = true;
    this.showDelete = true;
  }

  onCloseModal(){
    this.showModal = false;
    this.showDetail = false;
    this.showUpdate = false;
    this.showDelete = false;
  }

  onDelete(selectedSubstation:any){
    this.substationService.deleteById(selectedSubstation.id)
                          .subscribe(()=>{ console.log("substation deleted");});
     location.reload();
  }

}
