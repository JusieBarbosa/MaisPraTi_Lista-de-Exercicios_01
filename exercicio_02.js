/*Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores. */

const prompt = require('prompt-sync')();

let eleitoresTotal= prompt("Digite a quantidade eleitores do municipio: ")

let votosValidos = parseInt(prompt("Digite o numero de votos válidos: "))

let votosNulos = parseInt(prompt("Digite o numero de votos nulos: "))

let votosBrancos = parseInt(prompt("Digite o numero de votos em brancos:"))

let votosTotal = (votosBrancos + votosNulos + votosValidos)

let votosAbstinentes = (eleitoresTotal - votosTotal)


if(eleitoresTotal == (votosTotal + votosAbstinentes)){
    percentualvValidos = (votosValidos * 100)/ eleitoresTotal
    percentualvBrancos = (votosBrancos * 100)/ eleitoresTotal
    percentualvNulos = (votosNulos * 100)/ eleitoresTotal
    percentualAbstinentes = (votosAbstinentes * 100) / eleitoresTotal

    
console.log("O percentual de votos validos: " + percentualvValidos +"%" )

console.log("O percentual de votos nulos: " + percentualvNulos +"%" )

console.log("O percentual de votos brancos: " + percentualvBrancos +"%" )

console.log("O percentual de votos abstinentes: " + percentualAbstinentes + "%")
}

else {
    console.log("Numeros de votos divergem do total de eleitores")
}




/* Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
*/