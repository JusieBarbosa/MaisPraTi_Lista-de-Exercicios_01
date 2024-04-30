/*4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).*/

const prompt = require('prompt-sync')();

let nota_01 = parseInt(prompt("Insira a primeira nota:"));

let nota_02 = parseInt(prompt("Insira a segunda nota:"));

let media_aluno = (nota_01 + nota_02) / 2;

if (media_aluno >= 6){
    console.log("PARABÉNS! Você foi aprovado")
}