import { Component } from "@angular/core";

@Component({
    selector: "dosComponent",
    templateUrl: "./dos.component.html", //Mandamos a llamar al archivo HTML. Editamos todo desde el HTML.
    styleUrls: ["./dos.component.css"] //Lo mismo, mandamos el archivo css. //No es necesario tener todas las hojas de estilo. Podemos con una oja de estilo manejar todo el css.
})

export class DosComponent{
    nombre: string;
    precio: number;
    marca: string;
    status: boolean;
    categoria: string;

    constructor(){
        this.nombre = 'PC Gamer';
        this.precio = 20000;
        this.marca = 'Asus';
        this.status = true;
        this.categoria = 'Computación';
    }
}