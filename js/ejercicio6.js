/* Muestra la tabla de multiplicar del numero ingresado */
function ejercicio6(){

        numero = prompt("Introduce un número: ");
        document.write("<table border='1'><tr><td> Número </td><td> Resultado </td></tr>");
                for(i=0; i<=10; i++)
                {
                        document.write("<tr><td>"+numero+" x " + i +"</td><td>" + numero * i + "</td></tr>");
                }
        document.write("</table>");
     }