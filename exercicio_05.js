/*Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0 */

const prompt = require('prompt-sync')();

let nota_01 = parseInt(prompt("Insira a primeira nota:"));

let nota_02 = parseInt(prompt("Insira a segunda nota:"));

let media_aluno = (nota_01 + nota_02) / 2;

if (media_aluno >= 6){
    console.log("PARABÉNS! Você foi aprovado")
} else {
    console.log("Você foi REPROVADO! Estude mais")
}