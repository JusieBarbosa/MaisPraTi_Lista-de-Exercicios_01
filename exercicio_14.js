/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

const prompt = require('prompt-sync')();

let numero;
let soma = 0;
let contador = 0;
let media;

while (true) {
    numero = parseFloat(prompt("Digite um número:"));
    if (numero === 0) {
        if (contador === 0) {
            console.log("numero 0 inserido");
        } else {
            media = soma / contador;
            console.log("A média aritmética é: " + media);
        }
        break;
     } else if (numero > 0) {
        contador++;
        soma = numero + soma;
    }
}