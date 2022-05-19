let numero1 = parseInt(prompt("Ingrese un numero entero"));
let numero2 = parseInt(prompt("Ingrese otro numero entero"));
if (numero1>numero2)
    document.write("El primer numero ingresado es el mayor: <b>"+numero1+"</b> &gt; "+numero2);
else if (numero2>numero1)
    document.write("El segundo numero ingresado es el mayor: "+numero1+" &lt; <b>"+numero2+"</b>");
else
    document.write("Ninguno es mayor, los numeros ingresados son iguales" );