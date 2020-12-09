import { OffreVoyage } from './../model/Offre-voyage.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class OffreVoyageService {
  private _offre: OffreVoyage;
  private _offres: Array<OffreVoyage>;
  public get offres(): Array<OffreVoyage> {
    return this._offres;
  }
  public set offres(value: Array<OffreVoyage>) {
    this._offres = value;
  }
  
  public get offre(): OffreVoyage {
    return this._offre;
  }
  public set offre(value: OffreVoyage) {
    this._offre = value;
  }

  constructor(private http:HttpClient) {
  }

  private url1 = 'http://localhost:8090/api/OffreVoyage/ordered/';
   

  getAlloffres() {
    this.http.get<Array<OffreVoyage>>(this.url1).subscribe(data =>{
    this.offres=data;
    alert(this.offres[0].description);

  });

}

}
