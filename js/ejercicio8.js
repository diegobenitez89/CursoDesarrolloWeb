/* Mostrar los multiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8-16-24,etc  */
function ejercicio8(){

  
    var multiplo= 8;
    var str= "";

            while(multiplo < 500) 
            {
                str += (multiplo + "-");
                multiplo += 8;
            }

            str=recortarUltimosChar(str);
            alert(str);
            

        function recortarUltimosChar(str){
        return str.substr(0,str.length-2);
    }
}