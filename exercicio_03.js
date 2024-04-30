/*3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

const prompt = require('prompt-sync')();

let numero_01 = parseInt(prompt("Insira o número 1:"));

let numero_02 = parseInt(prompt("Insira o número 2:"));

let numero_03 = parseInt(prompt("Insira o número 3:"));

let numero_04 = (numero_01 + numero_02 + numero_03);

numero_01 = numero_01 + 25;

numero_02 = numero_02 *3;

numero_03 = (numero_03 * 12)/100

console.log(numero_01)

console.log(numero_02)

console.log(numero_03)

console.log(numero_04)