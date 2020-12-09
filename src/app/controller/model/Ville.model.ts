import {Pays} from './Pays.model';
import {Parcour} from './Parcours.model';

export class Ville{

    private  id :Number;
	private  libelle :String;
	private  pays :Pays;
    private  destinations: Array<Parcour>;
}