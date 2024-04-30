/*Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO. */

const prompt = require('prompt-sync')();

let numero;

do {
    numero = parseInt(prompt("Digite um número:"));
    if (numero <= 0){
        console.log("Numero Invalido")
        break;
    }
    else if(numero %2 === 0){
        console.log("Par")
    }  else if( numero%2 !== 0) {
        console.log("Impar")
    }
} while (numero > 0)
