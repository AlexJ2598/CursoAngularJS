import { Component, Input, Output, EventEmitter } from "@angular/core";
//Ponemos declarador de Input para indicar que vamos a recibir datos.
//Añadimos Output y Even para enviar datos del hijo al padre.

@Component({
    selector: "dosComponent",
    templateUrl: "./dos.component.html", //Mandamos a llamar al archivo HTML. Editamos todo desde el HTML.
    styleUrls: ["./dos.component.css"] //Lo mismo, mandamos el archivo css. //No es necesario tener todas las hojas de estilo. Podemos con una oja de estilo manejar todo el css.
})

export class DosComponent{
    //@Input para indicar que vamos a recibir las variables
    @Input() nombre: string;
    precio: number;
    marca: string;
    status: boolean;
    categoria: string;
    //Output
    @Output() datoPasar = new EventEmitter();

    constructor(){
        this.nombre = 'PC Gamer';
        this.precio = 20000;
        this.marca = 'Asus';
        this.status = true;
        this.categoria = 'Computación';
    }
    //Creamos el evento emitirEvento para el button que agregamos:
    //Es una función junto con el parametro del evento.
    //tienes que especificar el tipo de objeto que va a recibir la función, 
    //si no tienes claro el tipado que estas recibiendo lo que debes hacer es lo siguiente:
    //Mismo error en los proyectos que corregimos poniendo :any para indicar que podría ser cualquier tipo de dato.
    //Bucar más info porque de nuestro lado truena. Pasar info de nodo padre a hijo y viciversa.
    emitirEvento(event: any){
        this.datoPasar.emit({
            //Pasamos un evento, por eso seguimos está estructura ({})
            nombre: this.nombre,
            precio: this.precio,
            marca: this.marca,
            status: this.status,
            categoria: this.categoria
        });
    }
}