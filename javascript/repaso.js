'use strict';

//Archivo de referencia para repaso.
/*
Comentario de bloque
*/
//Declaración de variables
var nombre = 'Alexis';
var edad = 25;

//Let es una variable donde asigna un valor pero solo para ese bloque de codigo.
//Constante es un valor que nunca va a cambiar. Una vez declarado y asignado un valor no se va a poder cambiar su valor.
const pi = 3.1416;

//Para hacer referencia que vamos a mandar valores del javascript al HTML (doom)
//document.write(nombre);
//Al poner el javascript antes que los elementos HTML se ejecuta primero todo el JS.
//No es recomendable, poner siempre al final, para dejar que se ejecuten los elementos HTML.
//alert('La edad del programador es: ' + edad);
//otra manera es mandar a la consola el valor que estamos asignado o retornando en una variable.
//console.log(nombre)
//También se puede mandar al document wriete.
//document.write('El nombre del empleado es: ' + nombre);
//Lo mismo con la edad, adjuntamos variables.
var concatenacion = nombre + ' ' + edad;
document.write('El usuario logeado es: ' + concatenacion);
//Para mandar por ID.
//Se le pone el mismo elemento que está en el HTML.
var cajaImprimir = document.getElementById('impresion');
//Mandamos el valor al HTML, asignado al id impresion
//cajaImprimir.innerHTML = concatenacion;
//en el inner le pasamos un valor, le podemos agregar una plantilla.
//se sacan en mac option + ]
cajaImprimir.innerHTML = `<h2>Variable caja imprimir</h2>
                          <p>El nombre del programador es: ${nombre}</p>
                          <p>Su edad es: ${edad}</p>`;
//Así es como mandamos valores de variables al doc.
//Ciclos if, while, for, do while, switch, igual a C# o Java.
if(edad <= 45){
    cajaImprimir.innerHTML += `<p style"color: red">Eres muy joven aún</p>`
    //si dejamos con el valor = despues del inner nos va a borrar el primer inner que hicimos. Mejor += para concatenar
}else{
    cajaImprimir.innerHTML += `<p style = "color: red">Vamos por ese retiro con pención</p>`

}
//Solo ver estructura. Recorremos con for(var i = 0; i <= 100; i++)
cajaImprimir.innerHTML += `<h2>Ciclo sencillo</h2>`
for(var i = 0; i <= 100; i++){
    cajaImprimir.innerHTML += `<span>Esta es la iteración ${i}</span><br>`
}                           