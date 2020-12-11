import { Agence } from './../model/Agence.model';
import { Extra } from './../model/Extra.model';
import { Parcour } from './../model/Parcours.model';
import { Pays } from './../model/Pays.model';
import { TypeVoyage } from './../model/TypeVoyage.model';
import { Ville } from './../model/Ville.model';
import { OffreVoyage } from './../model/Offre-voyage.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OffreVoyageService {
  private _offre: OffreVoyage;
  private _offres: Array<OffreVoyage>;
  private _extras: Array<Extra>;
  public get extras(): Array<Extra> {
    return this._extras;
  }
  public set extras(value: Array<Extra>) {
    this._extras = value;
  }

  private _typeVoyage :TypeVoyage;
  private _parcours = new Array<Parcour>();
  public get parcours() {
    return this._parcours;
  }
  public set parcours(value) {
    this._parcours = value;
  }



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
  private url2 = 'http://localhost:8090/api/Parcour/id/';
  private url3 = 'http://localhost:8090/api/Extra/id/';
  private url4 = 'http://localhost:8090/api/OffreVoyage/id/';




  getAlloffres() {
    this.http.get<Array<OffreVoyage>>(this.url1).subscribe(data =>{
    this.offres=data;
    for (let i = 0; i < this.offres.length; i++) {
    this.getParcoursByOffreId(this.offres[i].id);
    this.getExtraByOffreId(this.offres[i].id) ;

    }
  });
  

}
getParcoursByOffreId(id :number) {
  
  this.http.get<Array<Parcour>>(this.url2+id).subscribe(data =>{
  this.parcours=data;
 

  for (let i = 0; i < this.offres.length; i++) {
  if( this.offres[i].id==id)
{
    this.offres[i].parcours=this.parcours;
    console.log("offre"+this.offres[i].id);
    for (let j = 0; j < this.parcours.length; j++) {
    console.log("parcours"+ this.offres[i].parcours[j].id);
    console.log(this.offres[i].parcours[j].ville.id);
    }
  }
}

});


}

getExtraByOffreId(id :number) {
  
  this.http.get<Array<Extra>>(this.url3+id).subscribe(data =>{
  this.extras=data;
 

  for (let i = 0; i < this.offres.length; i++) {
  if( this.offres[i].id==id)
{
    this.offres[i].extras=this.extras;
    console.log("offre"+this.offres[i].id);
    for (let j = 0; j < this.extras.length; j++) {
    console.log("extra"+ this.offres[i].extras[j].id);
    console.log(this.offres[i].extras[j].libelle);
    }
  }
}

});


}



public filter(ville:Ville,agence :Agence,typeVoyage : TypeVoyage,prixmax :number){
let id_v:Number;
let id_a:Number;
let id_t:Number;

  if(ville===undefined)
   id_v=-1;
   else
   id_v=ville.id;
   if(agence===undefined)
   id_a=-1;
   else
   id_a=agence.id;
   if(typeVoyage===undefined)
   id_t=-1;
   else
   id_t=typeVoyage.id;
  
  this.http.get<Array<OffreVoyage>>('http://localhost:8090/api/OffreVoyage/ville/'+id_v+'/agence/'+id_a+'/type/'+id_t+'/prixMax/'+prixmax).subscribe(data =>{
    this.offres=data;

  });
}

}
