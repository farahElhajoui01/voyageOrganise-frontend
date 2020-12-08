import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffreVoyageComponent } from './offre-voyage/offre-voyage.component';
import {NgbModule,NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { OffreVoyageDetailsComponent } from './offre-voyage-details/offre-voyage-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreVoyageComponent,
    OffreVoyageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
