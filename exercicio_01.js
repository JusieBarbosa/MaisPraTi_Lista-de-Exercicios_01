/*Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit. */

const prompt = require('prompt-sync')();

let celsius= prompt("Digite a temperatura em Celsius: ")

let fahrenheit = ((celsius * 9)/5) + 32;

console.log(fahrenheit + "º F")