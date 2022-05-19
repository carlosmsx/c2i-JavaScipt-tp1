let numero1 = parseInt(prompt("Ingrese el primer numero entero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero entero"));
let numero3 = parseInt(prompt("Ingrese el tercer numero entero"));
if (numero1==numero2 && numero2==numero3)
    document.write("los tres numeros ingresados son iguales");
else
{
    let mayor = numero1;
    if (numero2>mayor) 
        mayor=numero2;
    if (numero3>mayor)
        mayor=numero3;
        
    if (numero1==mayor && numero2==mayor)
        document.write("primer y segundo numeros son los mayores: "+mayor);
    else if (numero1==mayor && numero3==mayor)
        document.write("primer y tercer numeros son los mayores: "+mayor);
    else if (numero2==mayor && numero3==mayor)
        document.write("segundo y tercer numeros son los mayores: "+mayor);
    else
        document.write("el numero mas grande ingresado es "+mayor);
}
        
