import { Component, OnInit } from '@angular/core';
import { InterruptionService } from '../interruption.service';

@Component({
  selector: 'app-interruption-list',
  templateUrl: './interruption-list.component.html',
  styleUrls: ['./interruption-list.component.css']
})
export class InterruptionListComponent implements OnInit {

  constructor(private interruptionService: InterruptionService) { }
  interruptions : any[] =[];
  ngOnInit(): void {
    this.interruptionService.getAll()
                            .subscribe(data=>{
                              console.log(data);
                              this.interruptions = data
                            });

  }


}
