import { Pays } from './../controller/model/Pays.model';
import { TypeVoyageService } from './../controller/service/TypeVoyage.service';
import { TypeVoyage } from './../controller/model/TypeVoyage.model';
import { PaysService } from './../controller/service/Pays.service';
import { Parcour } from './../controller/model/Parcours.model';
import { Ville } from './../controller/model/Ville.model';
import { Agence } from './../controller/model/Agence.model';
import { AgenceService } from './../controller/service/Agence.service';
import { VilleService } from './../controller/service/Ville.service';
import { OffreVoyageService } from './../controller/service/offre-voyage.service';
import { OffreVoyage } from './../controller/model/Offre-voyage.model';
import { Component, OnInit } from '@angular/core';
import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-offre-voyage',
  templateUrl: './offre-voyage.component.html',
  styleUrls: ['./offre-voyage.component.scss']
})


export class OffreVoyageComponent implements OnInit {
  
  private _pays_filter=new Pays();
  private _ville_filter: Ville;
  private _agence_filter: Agence;
  private _typeVoyage_filter: TypeVoyage;
  
  public get typeVoyage_filter(): TypeVoyage {
    return this._typeVoyage_filter;
  }
  public set typeVoyage_filter(value: TypeVoyage) {
    this._typeVoyage_filter = value;
  }


  public get agence_filter(): Agence {
    return this._agence_filter;
  }
  public set agence_filter(value: Agence) {
    this._agence_filter = value;
  }

  public get ville_filter(): Ville {
    return this._ville_filter;
  }
  public set ville_filter(value: Ville) {
    this._ville_filter = value;
  }



  
  private _value: number = 8000;
  public get value(): number {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }
  options: Options = {
    floor: 1000,
    ceil: 10000
  };
  constructor(private offreService : OffreVoyageService,private paysService: PaysService,private villeService: VilleService,private agenceService : AgenceService,private typeVoyageService : TypeVoyageService) { }

  public get pays_filter(): Pays {
    return this._pays_filter;
  }
  public set pays_filter(value: Pays) {
    this._pays_filter = value;
  }

  ngOnInit(): void {

    this.getAlloffres();
    this.getAllpays();
    this.getAllAgences();
    this.getAllTypeVoyage();

  }
  public get offres(): Array<OffreVoyage>{
   
    return this.offreService.offres;
  }
  public get typeVoyages(): Array<TypeVoyage>{
   
    return this.typeVoyageService.types;
  }
  public get agences(): Array<Agence>{
   
    return this.agenceService.agences;
  }
  public get pays(): Array<Pays>{
   
    return this.paysService.pays;
  }


  public  getAlloffres() {
    this.offreService.getAlloffres();
    
    }

    public  getAllpays() {
      this.paysService.getAllPays();
      
      }
    
    public  getAllAgences() {
      this.agenceService.getAllAgences();
        
      }
    public  getAllTypeVoyage() {
      this.typeVoyageService.getAllTypeVoyage();
          
        }
    
    public selectPays(pays : Pays){
     this.pays_filter=pays;

    }
  
    public selectAgence(a : Agence){
      this.agence_filter=a;
      this.filter(this.ville_filter,this.agence_filter,this.typeVoyage_filter,this.value);


    }
    
    public selectVille(a : Ville){
      this.ville_filter=a;
      this.filter(this.ville_filter,this.agence_filter,this.typeVoyage_filter,this.value);


    }
    
    public selectType(a : TypeVoyage){
      this.typeVoyage_filter=a;
      this.filter(this.ville_filter,this.agence_filter,this.typeVoyage_filter,this.value);


    }
    public filter(ville:Ville,agence :Agence,typeVoyage : TypeVoyage,prixmax :number){
      this.offreService.filter(this.ville_filter,this._agence_filter,this._typeVoyage_filter,this.value)
    }


   

}
