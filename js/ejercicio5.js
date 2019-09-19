/* Desarrollar un programa que solicite la carga de 10 numeros e imprima la suma de los ultimos 5 valores ingresados*/

function ejercicio5(){
var suma= 0;

for(i=0; i<10 ; i++){

    var num = parseInt(prompt("ingrese el "+(i+1)+ "°numero"));
    if(i >4)
        suma +=num;

}
alert("la suma de los ultimos 5 numeros ingresados es :" + suma);
}