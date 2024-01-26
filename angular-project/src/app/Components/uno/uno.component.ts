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
export class UnoComponent{
    //Podemos agregar logica desde aquí.
    //Tenmos que asignarle el tipo de variable que es.
    //Esto es porque es Typescript
    public titulo:string;
    //Hacemos un databin desde TS hacia HTML. Ver uno.Component.html
    //Un constructor sirve para inicializar nuestro componente
    //Vamos a mandar info al hijo.
    public nombreProducto:string; //Nombre de la variable en el input del HTML. [(ngModel)]="nombreProducto
    //Tenemos que indicar que vamos a trabajar con un nuevo modulo en app.module
    constructor(){
        this.titulo = 'Mis tiendas'; //Inicializamos los valores
        this.nombreProducto ='Producto'; //Tenmos que inicializarlo para que no de error.
    }
    //Oriendato a objetos como JAVA y C#

}
//Para poder usarlo es necesario ir a ver el archivo AppModule para indicarlo.
//Las paginas en Angular son reactivas. Los cambios se ven reflejados.
