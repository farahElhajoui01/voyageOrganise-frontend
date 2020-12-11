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
export class PaysService {
  private _pays: Array<Pays>;
  private _villes: Array<Ville>;
  
  
  public get villes(): Array<Ville> {
        return this._villes;
    }
    public set villes(value: Array<Ville>) {
        this._villes = value;
    }

  

    public get pays(): Array<Pays> {
        return this._pays;
    }
    public set pays(value: Array<Pays>) {
        this._pays = value;
    }
  

  constructor(private http:HttpClient) {
  }

  private url1 = 'http://localhost:8090/api/Pays/';
  private url2 = 'http://localhost:8090/api/Ville/pays/id/';


  

  getAllPays() {
    this.http.get<Array<Pays>>(this.url1).subscribe(data =>{
    this.pays=data;
    for (let i = 0; i < this.pays.length; i++) {
        this.getVilleByPaysId(this.pays[i].id);
        }

    });
  }

  getVilleByPaysId(id : Number) {
    this.http.get<Array<Ville>>(this.url2+id).subscribe(data =>{
    this.villes=data;
    for (let i = 0; i < this.pays.length; i++) {
        if( this.pays[i].id==id)
      {
          this.pays[i].villes=this.villes;
          console.log("pays"+this.pays[i].libelle);
          for (let j = 0; j < this.villes.length; j++) {
          console.log("ville"+ this.pays[i].villes[j].id);
          console.log(this.pays[i].villes[j].libelle);
          }
        }
      }
  });

}




}
