import { Agence } from './../model/Agence.model';
import { Parcour } from '../model/Parcours.model';
import { Pays } from '../model/Pays.model';
import { TypeVoyage } from '../model/TypeVoyage.model';
import { OffreVoyage } from '../model/Offre-voyage.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class AgenceService {
  private _agence: Agence;
  private _agences: Array<Agence>;

  public get agences(): Array<Agence> {
    return this._agences;
  }
  public set agences(value: Array<Agence>) {
    this._agences = value;
  }
 


  public get agence(): Agence {
    return this._agence;
  }
  public set agence(value: Agence) {
    this._agence = value;
  }

 
  constructor(private http:HttpClient) {
  }

  private url1 = 'http://localhost:8090/api/Agence/id/';
  private url2 = 'http://localhost:8090/api/Agence/';


  getAgenceById(id : number) {
    this.http.get<Agence>(this.url1+id).subscribe(data =>{
    this.agence=data;
    console.log(this.agence.raisonSociale);

  });

}

getAllAgences() {
  this.http.get<Array<Agence>>(this.url2).subscribe(data =>{
  this.agences=data;
});

}

}
