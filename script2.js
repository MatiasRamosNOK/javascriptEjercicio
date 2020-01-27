var unNumero = prompt("Adivina cual es el numero: ");
var elNumero = 21;

unNumero = Number(unNumero);

if (unNumero === elNumero) {
    alert("Felicitaciones! adivinaste");
} else {
    alert("Te equivocaste :(");
    unNumero > elNumero ? alert("Te pasaste!") : alert("Te quedaste corto!");
}