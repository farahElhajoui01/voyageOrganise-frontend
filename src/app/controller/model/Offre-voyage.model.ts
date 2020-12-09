import { Parcour } from './Parcours.model';
import { TypeVoyage } from './TypeVoyage.model';
import { Agence } from './Agence.model';
import {Choix} from './Choix.model';
import {Commentaire} from './Commentaire.model';

export class OffreVoyage {

  public id: number;
  public description: string;
  public programme: string;
  public rating: number;
  public dateCreation: Date;
  public choix = new Array<Choix>();
  public agence: Agence;
  public typeVoyage :TypeVoyage;
  public commentaires = new Array<Commentaire>();
  public parcours = new Array<Parcour>();

}
