import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

//Configuración del locale de la app
import localeEs from '@angular/common/locales/es'
import localeFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    SharedModule,

    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide:LOCALE_ID,useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
