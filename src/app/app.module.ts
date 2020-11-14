import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BiensComponent } from './biens/biens.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {KeycloakSecurityService} from './service/keycloak-security.service';


// initialisation de la service keycloakSecurity avant la demarrage de l'appli
export function keycloakSecurityFactory(keycloaksecurityService:KeycloakSecurityService) {
  return ()=> keycloaksecurityService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    BiensComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [
    {provide:APP_INITIALIZER, deps:[KeycloakSecurityService], useFactory:keycloakSecurityFactory, multi:true},// initialisation de keycloakSecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
