import {Pays} from './Pays.model';
import {Parcour} from './Parcours.model';

export class Ville{

    public  id :Number;
	public  libelle :String;
	public  pays :Pays;
    public  destinations: Array<Parcour>;
}