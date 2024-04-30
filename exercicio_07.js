/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')();

let numeroMacas = parseInt(prompt("Insira a quantidade de maçãs: "));

if (numeroMacas < 12){
    let valorCompra = numeroMacas * 0.30 ;
    console.log(valorCompra)
} else {
    let valorCompra = numeroMacas * 0.25;
    console.log(valorCompra)
}