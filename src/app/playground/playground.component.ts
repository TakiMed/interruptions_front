import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubSink } from 'subsink';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnDestroy {

  private subSink = new SubSink();
  constructor() { }
  

  ngOnInit(): void {
    this.subSink.add(

    );
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
