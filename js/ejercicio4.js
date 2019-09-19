/*  Se ingresa un numero y se muestra el calculo de la suma de todos los numeros pares */
function ejercicio4(){
        
var num=0;
var suma=0;

    for (var i =1; i <=3; i++)
    {
        var num= parseInt(prompt("ingrese numero :"));
        
        if (num % 2 == 0 )
        {
        suma += num;       
        }
       
    }       
           alert("la suma de los numeros pares es :"+ suma)
}