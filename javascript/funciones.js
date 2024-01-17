//Repaso para creacion de funciones
var nombre = 'Alexis Jonathan';
var edad = 25;

function MuestraNombre(nombre, edad){
    //Bloque de instrucciones.
    var datosCaja = 
    `<h2>Caja imprimir</h2>
    <p>Mi nombre es: ${nombre}</p>
    <p>Mi edad es: ${edad}</p>`;

    return datosCaja;
}


function ImprimirPantalla(){
    var cajaImprimir = document.getElementById('impresion'); //Con eso mandamos a traer un elemento del HTML al JS.
    //Imprimimos con el uso de una funcion (MuestraNombre). Esta retorna el bloque de datosCaja y lo asigna a la variable cajaImprimir
    cajaImprimir.innerHTML = MuestraNombre(nombre,edad); //Las variables al ser globales las toma.


}

//Invocamos la funcion
ImprimirPantalla();

//Se puede practicar haciendo una calculadora sencilla declarando función suma y retornando un valor (para practicar)

//Arreglos y colección de datos.
var Productos = ['Telefono', 'Mac', 'PC', 'PS5', 'SWTICH', 'XBOX', 'TV']; //Este es un array.
//Mandamos a consola
console.log('Productos del array: ' + Productos);
//Podemos hacer un document.write para verlos en el navegador.
//document.write(Productos);
//Vamos a llamar por posición en el array. Por ejemplo, quiero la SWITCH.
//document.write(Productos[4]);
//Recorremos arreglo.
/*
for(let i = 0; i < Productos.length; i++){
    document.write(Productos[i], `<br>`);
}
*/
//También se puede con forech.
/*
Productos.forEach(function(producto){
    console.log('Dentro del forech',producto);
    document.write(producto, `<br>`);
    //Esto solo pasamos la informacion dentro de la función.
})
*/


//La diferencia es que forEach es que es un método que itera solamente sobre los elementos que contiene un array. 
//En el caso de for of, este iteraba sobre otro tipo de objetos que no sean necesariamente arrays sobre las propiedades del mismo. 
//También con esto puedes iterar por cada caracter de un string

//Las fuciones de flecha
Productos.forEach((producto) => {
    console.log('Dentro del forech',producto);
    document.write(producto, `<br>`);
})