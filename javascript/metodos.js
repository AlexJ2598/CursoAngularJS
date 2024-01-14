'use strict';

function muestraOpcion(){
    var opciones = document.getElementsByName('eleccion');
    console.log(opciones);

    for(let i = 0; i < opciones.length; i++){
        if(opciones[i].checked){
            alert(opciones[i].value);
        }
    }
}

function calculo(){
    var no1 = Number(document.getElementById('num1').value);
    var no2 = Number(document.getElementById('num2').value);
    var resultado;
    var option = document.getElementById('operacion').value.toString();
    //console.log(option); para verificar si ya habiamos obtenido las operaciones.
    switch(option){
        case 'suma':
            resultado = no1 + no2;
            document.getElementById('resultado').innerHTML = resultado;
            break;
        case 'resta':
            resultado = no1 - no2;
            document.getElementById('resultado').innerHTML = resultado;
            break;
        case 'multiplicacion':
            resultado = no1 * no2;
            document.getElementById('resultado').innerHTML = resultado;
            break;
        case 'division':
            try{
                resultado = no1/no2;
                document.getElementById('resultado').innerHTML = resultado;
            }catch{
                alert('No puedes dividir entre 0');
            }
            break;
    }
}