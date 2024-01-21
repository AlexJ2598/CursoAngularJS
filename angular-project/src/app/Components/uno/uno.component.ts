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
    public nombreProducto:string;
    //Tenemos que indicar que vamos a trabajar con un nuevo modulo en app.module
    constructor(){
        this.titulo = 'Mis tiendas'; //Inicializamos los valores
        this.nombreProducto ='Producto';
    }
    //Oriendato a objetos como JAVA y C#
    //Vamos a mandar info al hijo.

}
//Para poder usarlo es necesario ir a ver el archivo AppModule para indicarlo.
//Las paginas en Angular son reactivas. Los cambios se ven reflejados.
