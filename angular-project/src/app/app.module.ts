import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Mandamos a llamar el componente creado.
import { UnoComponent } from "./Components/uno/uno.component"
//Lo añadimos también en @NgModule
//Luego vamos a app.component.html para irlo agregando.

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
