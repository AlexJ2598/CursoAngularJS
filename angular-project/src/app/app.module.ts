import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Mandamos a llamar el componente creado.
import { UnoComponent } from "./Components/uno/uno.component"
import { DosComponent } from './Components/dos/dos.component';
//Lo añadimos también en @NgModule
//Luego vamos a app.component.html para irlo agregando.

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Para que no de error el ngModel
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
