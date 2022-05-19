let numero = parseInt(prompt("Ingrese un numero entero"));
let lista = '';

if (numero%2==0)
    lista = lista + '2, ';
if (numero%3==0)
    lista = lista + '3, ';
if (numero%5==0)
    lista = lista + '5, ';
if (numero%7==0)
    lista = lista + '7, ';

if (lista.length==0)
    document.write(numero+' no es divisible por ninguno');    
else if (lista.length==3)
    document.write(numero+' es divisible por '+lista.charAt(0)); //elimino coma y espacio innecesarios
else 
{
    lista = lista.substring(0, lista.length-5) + ' y ' + lista.charAt(lista.length-3); //elimino coma y espacio innecesarios y concateno el último número con una 'y'
    document.write(numero+' es divisible por '+lista);
}
