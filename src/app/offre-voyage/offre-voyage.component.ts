import { OffreVoyageService } from './../controller/service/offre-voyage.service';
import { OffreVoyage } from './../controller/model/Offre-voyage.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre-voyage',
  templateUrl: './offre-voyage.component.html',
  styleUrls: ['./offre-voyage.component.scss']
})
export class OffreVoyageComponent implements OnInit {

  constructor(private offreService : OffreVoyageService) { }

  ngOnInit(): void {
    this.getAlloffres();
  }

  public  getAlloffres() {
    console.log("heey");
    this.offreService.getAlloffres();
}

public get offres(): Array<OffreVoyage>{

  return this.offreService.offres;
}

}
