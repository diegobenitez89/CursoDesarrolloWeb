/* Realizar programa que imprima 25 terminos de la serie 11-22-33-44,etc */

function ejercicio7() {
    var aux =1;
    var str = "";
    while (aux < 26){

        str += (11*aux) + " - ";
        aux += 1;

        str = recortarUltimoChar(str);
        alert(str);
    }
        function recortarUltimoChar(str)
        {
            return str.substr(0,str.length-2);
        
         }
}