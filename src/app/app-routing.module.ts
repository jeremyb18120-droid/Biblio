import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherLesLivresComponent } from './afficher-les-livres/afficher-les-livres.component';


const routes: Routes = [
  {path: 'livres-liste' , component: AfficherLesLivresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

