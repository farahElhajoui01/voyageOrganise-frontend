import { Choix } from './Choix.model';
import { OffreVoyage } from './Offre-voyage.model';
export class Extra{
 
	public  id : Number;
	public  libelle : String;
	public  tarif : Number;
    public  choix : Choix ;
    public  offreVoyage :OffreVoyage;
   // public  typeExtra : TypeExtra;
}