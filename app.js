//Dada las revoluciones por minuto de un auto en un juego de carreras, indique si el 
//conductor debe seguir con el mismo cambio, bajarlo o aumentarlo. Sabiendo que:
//Si las RPM son menores a 1000 debe bajar
//Si las RPM están entre 1000 y 3000 debe mantener
//Si las RPM son más de 3000 debe subir

let rpm = prompt("ingrese las RPM a las que va")

if(rpm <= 1000){
    console.log(`Baja un cambio`);
}
else if(rpm >= 1000 && rpm <= 3000){
    console.log(`Mantener`);
}
else{
    console.log(`subi un cambio`);
}