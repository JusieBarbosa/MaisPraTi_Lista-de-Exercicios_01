/*Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N */
const prompt = require('prompt-sync')();

let contador
let valorN

for (contador = 0; contador < 5; contador++) {
    valorN = parseInt(prompt("Digite o valor de N:"))

    console.log("Tabuada para " + valorN + ":")

    for (i = 1; i <= valorN; i++) {
        console.log(`${i} x ${valorN} =`, valorN * i);
    }
}

