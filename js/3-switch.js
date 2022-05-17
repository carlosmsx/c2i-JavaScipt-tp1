let estacion = prompt('Ingrese su estacion preferida: 1-Verano, 2-Otoño, 3-Invierno, 4-Primavera');

// if (estacion==='1') {
//     document.write('Sandwich de miga');
// } else if (estacion==='2') {
//     document.write('Locro');
// } else if (estacion==='3') {
//     document.write('Guiso');
// } else if (estacion==='4') {
//     document.write('Cerveza');
// } else {
//     document.write('Ingreso una opcion erronea');
// }

switch (estacion)
{
    case '1':
        document.write('Sandwich de miga');
        break;
    case '2':
        document.write('Locro');
        break;
    case '3':
        document.write('Guiso');
        break;
    case '4':
        document.write('Cerveza');
        break;
    default:
        document.write('Ingreso una opcion erronea');
}