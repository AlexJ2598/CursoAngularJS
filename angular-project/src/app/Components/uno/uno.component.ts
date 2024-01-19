//Esta parte es con TS. Esta sobrecargado, se tipan cada variable.
//Leer documentación adicional.
import { Component } from "@angular/core";

//El componente es un decorador.
@Component({
    selector: "unoComponent",
    templateUrl: "./unoComponent.component.html", //Mandamos a llamar al archivo HTML. Editamos todo desde el HTML.
    styleUrls: ["./uno.component.css"] //Lo mismo, mandamos el archivo css
})

//Exportamos como una clase al componente:
export class UnoComponent{}
//Para poder usarlo es necesario ir a ver el archivo AppModule para indicarlo.
//Las paginas en Angular son reactivas. Los cambios se ven reflejados.
