let numero = parseInt(prompt("Ingrese un numero entero"));
if (numero%2==0 || numero%3==0 || numero%5==0 || numero%7==0)
    document.write(numero+' es divisible por alguno de estos numeros: 2, 3, 5, 7');
else
    document.write(numero+' no es divisible por ninguno de estos numeros: 2, 3, 5, 7')