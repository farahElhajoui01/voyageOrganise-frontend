import { OffreVoyageComponent } from './offre-voyage/offre-voyage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffreVoyageDetailsComponent } from './offre-voyage-details/offre-voyage-details.component';

const routes: Routes = [{ path: 'OffreVoyage', component: OffreVoyageComponent },
{ path: 'OffreVoyageDetails', component: OffreVoyageDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
