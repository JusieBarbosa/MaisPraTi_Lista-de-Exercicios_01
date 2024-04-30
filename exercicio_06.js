/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

const prompt = require('prompt-sync')();

let lado_A = parseInt(prompt("Insira o primeiro lado do triângulo:"));

let lado_B = parseInt(prompt("Insira o segundo lado do trinângulo:"));

let lado_C = parseInt(prompt("Insira o terceiro lado do trinângulo:"));

if(lado_A < lado_B + lado_C && lado_B < lado_A + lado_C && lado_C < lado_A + lado_C){
    if((lado_A == lado_B && lado_B != lado_C ) ||
        lado_A == lado_C && lado_B != lado_C && 
        lado_C == lado_B && lado_A != lado_B){
        console.log("Triângulo Isósceles")
    } else if(lado_A!= lado_B && lado_B != lado_C){
        console.log("Triângulo Escaleno")
    } else {
        console.log("Triângulo Equilátero")
    }
}