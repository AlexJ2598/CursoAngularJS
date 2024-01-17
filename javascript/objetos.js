//Un objeto tiene propiedades y metodos.
//Un objeto carro tiene propiedades como nombre, modelo, peso.
//Un objeto tiene distintas propiedades, ya que tiene distinto nombre, peso, etc.
//Como metodos podemos tener el de arrancar, manejar, etc.

//Declaramos objeto producto.
/*
var producto = {
    //Le ponemos propiedades
    nombre : 'Licuadora',
    precio : 500,
    categoria: 'Electrodomestico',
    status: false,
    marca: 'Oster'
}
//En un constructor podemos poner variables. Como en C#
//Pedimos el objeto
console.log(producto);
//Lo imprimimos en el Front.
var cajaImprimir = document.getElementById('impresion');
cajaImprimir.innerHTML = `<h1>${producto.nombre}</h1>
                        <p>Precio del producto: ${producto.precio}</p>
                        <p>Categoria del producto: ${producto.categoria}</p>
                        <p>Marca del producto: ${producto.marca}</p>`;


if(producto.status != null){
    cajaImprimir.innerHTML += `<p>El producto esta diponible</p>`;
}else{
    cajaImprimir.innerHTML += `<p>El producto no esta diponible</p>`;
}
*/
//Ahora declaramos un array de arreglos.
var producto = [
    {nombre : 'Licuadora',
    precio : 500,
    categoria: 'Electrodomestico',
    status: false,
    marca: 'Oster'},

    {nombre : 'PC Asus Game True',
    precio : 11500,
    categoria: 'Electronica',
    status: true,
    marca: 'ASUS'},
    
    {nombre : 'Smarthphone Galaxy A55',
    precio : 10000,
    categoria: 'Telefonia',
    status: false,
    marca: 'Samsung'},

    {nombre : 'Smarthphone Galaxy S23',
    precio : 20000,
    categoria: 'Telefonia',
    status: false,
    marca: 'Samsung'}
];
console.log('Arreglo de objetos', producto);
//Vamos a mostrarlo en el front.
function MuestraProducto(producto){
    var cajaImprimir = document.getElementById('impresion');
    cajaImprimir.innerHTML += `<p>${producto.nombre}</p>
    <p>Su precio es: ${producto.precio}</p>
    <p>Su categoriaes: ${producto.categoria}</p>
    <p>Su marca es: ${producto.marca}</p>
    <hr>`;
}
//Se itera el objeto con un foreach llamando a la funcion que imprime los elementos en pantalla (muestraProducto)
producto.forEach(producto => MuestraProducto(producto));
//Tambien se puede con un for.
for(let i = 0; i < producto.length; i++){
    console.log(producto[i].nombre); //aquí se ven los nombre, agregar los demás datos.
}

//EJ1. Se tiene un input, insertar texto en un input y con un boton de agregar texto se pone en un div.
//Ej2 Se tiene un select que se va llenar cuado le demos generar lista con nuermos al azar al darle click al boton generar lista.
//Ej3 Insertar un nombre se agrega en una listaal darle al boton agregar a lista y lo muestra en el div (cada que se inserte mandar un alert).


