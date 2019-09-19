 function ejercicio3() {
    
    var num=0;
    var multiplo=0;
    var c=0;

        for (var i =1; i <=3; i++)
        {
            var num= prompt("ingrese numero :")
            multiplo= num % 15
            if (multiplo == 0)
            {
               c++;         
            }
           
        }       
                alert("cantidad de numeros multiplos de 15: "+ c)
    }