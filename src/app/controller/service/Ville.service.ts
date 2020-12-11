import { Ville } from './../model/Ville.model';
import { Parcour } from '../model/Parcours.model';
import { Pays } from '../model/Pays.model';
import { TypeVoyage } from '../model/TypeVoyage.model';
import { OffreVoyage } from '../model/Offre-voyage.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class VilleService {
  private _ville: Ville;
  private _villes: Array<Ville>;

  public get villes(): Array<Ville> {
    return this._villes;
  }
  public set villes(value: Array<Ville>) {
    this._villes = value;
  }

  public get ville(): Ville {
    return this._ville;
  }
  public set ville(value: Ville) {
    this._ville = value;
  }

 // private _ : Array<OffreAccepte>;

 

  constructor(private http:HttpClient) {
  }

  private url1 = 'http://localhost:8090/api/Ville/id/';
  private url2 = 'http://localhost:8090/api/Ville/pays/id/';


  getVilleById(id : number) {
    this.http.get<Ville>(this.url1+id).subscribe(data =>{
    this.ville=data;
    alert(this.ville.libelle);

  });
  }

  getVilleByPaysId(id : number) {
    this.http.get<Array<Ville>>(this.url2+id).subscribe(data =>{
    this.villes=data;
    alert(this.villes[0].libelle);

  });

}

}
