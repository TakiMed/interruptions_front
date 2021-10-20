import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  metaData: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    console.log(data); //  procitaj podatke 
    this.metaData = data;
  }

}
