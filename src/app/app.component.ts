import { Component } from '@angular/core';
import { Livre } from './livre.model';
import { LivresService } from './livres.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Biblio';
  _ListeLivres!: Livre[];
constructor (private livreService: LivresService)
{
  livreService.ajouter(new Livre('Le Guide du voyageur galactique','037','Douglas Noel Adams'))
  livreService.ajouter(new Livre('Le Dernier Restaurant avant la fin du monde','038','Douglas Noel Adams'))
  livreService.ajouter(new Livre("La Vie, l'Univers et le Reste",'039','Douglas Noel Adams'))
  livreService.ajouter(new Livre('Salut, et encore merci pour le poisson','040','Douglas Noel Adams'))
  livreService.ajouter(new Livre('Globalement inoffensive','041','Douglas Noel Adams'))
  livreService.ajouter(new Livre('Encore une chose…','042','Eoin Colfer'))

  this._ListeLivres = livreService.lister()
}

}
