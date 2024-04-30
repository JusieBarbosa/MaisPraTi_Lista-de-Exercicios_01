/*Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos. */

const prompt = require('prompt-sync')();

let numero;
let peso;
let somaNumero = 0;
let somaPeso= 0;
let contador = 0;
let mediaPonderada;

while (true) {
    numero = parseFloat(prompt("Digite um número:"));
    if (numero === 0) {
        if (contador === 0) {
            console.log("numero 0 inserido");
        } else {
            mediaPonderada = somaPeso / somaNumero;
            console.log("A média ponderada é: " + mediaPonderada);
            
        }
        break;
     } else if (numero > 0) {
        peso = parseFloat(prompt("Digite um Peso:")); 
        contador++;
        somaNumero = numero + somaNumero;
        somaPeso = (peso * numero) + somaPeso
    }
}