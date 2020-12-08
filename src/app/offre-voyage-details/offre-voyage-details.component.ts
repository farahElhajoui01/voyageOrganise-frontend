import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre-voyage-details',
  templateUrl: './offre-voyage-details.component.html',
  styleUrls: ['./offre-voyage-details.component.scss']
})
export class OffreVoyageDetailsComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
