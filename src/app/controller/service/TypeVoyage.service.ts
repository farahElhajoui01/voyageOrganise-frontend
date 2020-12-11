import { Agence } from '../model/Agence.model';
import { Parcour } from '../model/Parcours.model';
import { Pays } from '../model/Pays.model';
import { TypeVoyage } from '../model/TypeVoyage.model';
import { OffreVoyage } from '../model/Offre-voyage.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class TypeVoyageService {
  private _types: Array<TypeVoyage>;

  public get types(): Array<TypeVoyage> {
    return this._types;
  }
  public set types(value: Array<TypeVoyage>) {
    this._types = value;
  }


 
  constructor(private http:HttpClient) {
  }

  private url1 = 'http://localhost:8090/api/TypeVoyage/';




getAllTypeVoyage() {
  this.http.get<Array<TypeVoyage>>(this.url1).subscribe(data =>{
  this.types=data;

});

alert(this.types.length);

}

}
