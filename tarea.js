// var distancia;

// distancia=prompt("Ingeese los metros a recorrer");

// if (distancia > 0 && distancia <=1000){
//     document.write("Debe ir a pie");
// } 
// else if (distancia > 1000 && distancia <=10000){
//     document.write("Debe ir en bicicleta");
// } 
// else if (distancia > 10000 && distancia <=30000){
//     document.write("Debe ir en colectivo");
// } 
// else if (distancia > 30000 && distancia <=100000){
//     document.write("Debe ir en auto");
// } 
// else {
//     document.write("Debe ir en avión");
// } 

var nros = [5, 7, 3, 11, 8, 10, 15, 12];
var mayor = 0;


for(var i=0; i<nros.length; i++){
    if (nros[i] > mayor) {
        mayor = nros[i];
    }
}

console.log("El número mayor es " + mayor);





