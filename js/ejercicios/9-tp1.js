let frase = prompt ('Ingrese una frase de 5 caracteres');
if (frase.length==5)
{
    //primer caracter
    let b=frase.charAt(0);
    let c=b.toUpperCase();
    if (c=='A' || c=='E' || c=='I' || c=='O' || c=='U')
        document.write(b);
    //segundo caracter
    b=frase.charAt(1);
    c=b.toUpperCase();
    if (c=='A' || c=='E' || c=='I' || c=='O' || c=='U')
    document.write(b);
    //tercer caracter
    b=frase.charAt(2);
    c=b.toUpperCase();
    if (c=='A' || c=='E' || c=='I' || c=='O' || c=='U')
    document.write(b);
    //cuarto caracter
    b=frase.charAt(3);
    c=b.toUpperCase();
    if (c=='A' || c=='E' || c=='I' || c=='O' || c=='U')
    document.write(b);
    //quinto caracter
    b=frase.charAt(4);
    c=b.toUpperCase();
    if (c=='A' || c=='E' || c=='I' || c=='O' || c=='U')
    document.write(b);
}
else {
    document.write("la frase debe tener 5 caracteres");
}
