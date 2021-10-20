import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interruption-detail',
  templateUrl: './interruption-detail.component.html',
  styleUrls: ['./interruption-detail.component.css']
})
export class InterruptionDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// GET /api/interruption ----ALL
// DELETE interrption/id
// GET /by-voltage/:voltage
// GET /api/interruption/dto
// GET /dto/:id
// POST /dto
// GET /interruptions/rae

