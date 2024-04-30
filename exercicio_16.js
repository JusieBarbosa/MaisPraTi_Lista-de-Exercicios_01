/*Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. */

let quntPrimos = 0
let numeroInicial = 100


while (quntPrimos <= 50) {
    if(numeroInicial %2 != 0 && numeroInicial %3 != 0 && numeroInicial %5 != 0 && numeroInicial %7 != 0){
        console.log(numeroInicial)
        numeroInicial++;
        quntPrimos++
    }else {
        numeroInicial++;
    }
}
