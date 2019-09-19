function ejercicio1_2(){

    var num=0;
    var pos=0;
    var neg=0;

        for (var i =1; i <=10; i++)
        {
            var num= prompt("ingrese numero :")
            if (num > 0 )
            {
              pos++;         
            }
                else
            {
               neg++;
            }
        }       
                alert("cantidad de numeros positivos: "+ pos)
                alert("cantidad de numeros negativos: "+ neg)
}