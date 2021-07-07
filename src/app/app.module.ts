import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AfficherLesLivresComponent } from './afficher-les-livres/afficher-les-livres.component';
import { AfficherLivreComponent } from './afficher-livre/afficher-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficherLesLivresComponent,
    AfficherLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
