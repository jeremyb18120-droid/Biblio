
import { ReactiveFormsModule } from '@angular/forms';
import { AfficherLesLivresComponent } from "./afficher-les-livres/afficher-les-livres.component";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
      AppComponent,
      AfficherLesLivresComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }


export class Livre {
    titre:string;
    numeroISBN: string;
    auteur:string;

    constructor(pTitre:string, PnumeroISBN: string,pAuteur:string)
    {
        this.titre = pTitre;
        this.numeroISBN = PnumeroISBN;
        this.auteur = pAuteur;
    }

}
