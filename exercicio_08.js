/*. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')();

let numero_01 = parseInt(prompt("Insira o primeiro número:"));

let numero_02 = parseInt(prompt("Insira o segundo número:"));

if(numero_01 != numero_02){
    if(numero_01 > numero_02){
        console.log(numero_02," - ", numero_01)
    } else if(numero_01 < numero_02) {
        console.log(numero_01," - ", numero_02)
        }
} else{
    console.log("Não é permnitido números iguais")
}