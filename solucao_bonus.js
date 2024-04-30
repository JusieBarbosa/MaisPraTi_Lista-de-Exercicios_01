const prompt = require('prompt-sync')();

let exercicio = parseInt(prompt("Insira o número do exercício (1 a 16):"))

let exercicioNumero;
switch (exercicio) {
    case 1:
        exercicioNumero = "1";  

let celsius= prompt("Digite a temperatura em Celsius: ")

let fahrenheit = ((celsius * 9)/5) + 32;

console.log(fahrenheit + "º F")
        break;

    case 2:
        exercicioNumero = "2";
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

        break;

    case 3:
        exercicioNumero = "3";

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

        break;
    
    case 4:
        exercicioNumero = "4";
        
        let nota_01 = parseInt(prompt("Insira a primeira nota:"));

        let nota_02 = parseInt(prompt("Insira a segunda nota:"));

        let media_aluno = (nota_01 + nota_02) / 2;

            if (media_aluno >= 6){
                console.log("PARABÉNS! Você foi aprovado")
            }
        
        break;

    case 5:
        exercicioNumero = "5";
        
        let nota01 = parseInt(prompt("Insira a primeira nota:"));

        let nota02 = parseInt(prompt("Insira a segunda nota:"));

        let mediaAluno = (nota01 + nota02) / 2;

        if (mediaAluno >= 6){
            console.log("PARABÉNS! Você foi aprovado")
        } else {
            console.log("Você foi REPROVADO! Estude mais")
        }
        
        break;

        case 6:
        exercicioNumero = "6";

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

        break;

        case 7:
        exercicioNumero = "7";

        let numeroMacas = parseInt(prompt("Insira a quantidade de maçãs: "));

        if (numeroMacas < 12){
        let valorCompra = numeroMacas * 0.30 ;
            console.log(valorCompra)
        } else {
        let valorCompra = numeroMacas * 0.25;
            console.log(valorCompra)
        }

        break;

        case 8:
        exercicioNumero = "8";

        let numero01 = parseInt(prompt("Insira o primeiro número:"));

        let numero02 = parseInt(prompt("Insira o segundo número:"));

        if(numero01 != numero02){
            if(numero01 > numero02){
                console.log(numero02," - ", numero01)
        } else if(numero01 < numero02) {
            console.log(numero01," - ", numero02)
        }
        } else{
            console.log("Não é permnitido números iguais")
        }

        break;

        case 9:
        exercicioNumero = "9";
        let codigoOrigem = parseInt(prompt("Insira o código de origem (0 a 50):"));

        if(codigoOrigem == 1){
            console.log("Sul")
        } else if(codigoOrigem == 2){
            console.log("Norte")
        } else if(codigoOrigem == 3){
            console.log("Leste")
        } else if(codigoOrigem == 4){
            console.log("Oeste")
        } else if(codigoOrigem == 5 || codigoOrigem == 6){
            console.log("Nordeste")
        } else if(codigoOrigem == 7  || codigoOrigem ==8 || codigoOrigem ==9){
            console.log("Sudeste")
        } else if(codigoOrigem >=10 && codigoOrigem <= 20 ){
            console.log("Centro-Oeste")
        } else if(codigoOrigem >=25 && codigoOrigem <= 50){
            console.log("Nordeste")
        } else {
            console.log("Produto Importado")
        }
        break;

        case 10:
        exercicioNumero = "10";

        let numero = parseInt(prompt("Insira o primeiro número:"));

        for (let i = 0; i <= 10; i++) {
            console.log(numero);
        }        

        break;

        case 11:
        exercicioNumero = "11";

        let number;

        do {
            number = parseInt(prompt("Digite um número:"));
            if (number <= 0){
                console.log("Numero Invalido")
            break;
            }
            else if(number %2 === 0){
                console.log("Par")
            }  else if( number%2 !== 0) {
                    console.log("Impar")
            }
        } while (number > 0)

        break;

        case 12:
        exercicioNumero = "12";

        let numero_001;

        for (numero_001 = 1000; numero_001 <= 1999; numero_001++) {
            if (numero_001 % 11 === 5) {
                console.log(numero_001);
            }
        }

        break;

        case 13:
        exercicioNumero = "13";
        let contador
        let valorN
        
        for (contador = 0; contador < 5; contador++) {
            valorN = parseInt(prompt("Digite o valor de N:"))
        
            console.log("Tabuada para " + valorN + ":")
        
            for (i = 1; i <= valorN; i++) {
                console.log(`${i} x ${valorN} =`, valorN * i);
            }
        }
        break;

        case 14:
        exercicioNumero = "14";
        let number_01;
        let soma = 0;
        let contador_01 = 0;
        let media;
        
        while (true) {
            number_01 = parseFloat(prompt("Digite um número:"));
            if (number_01 === 0) {
                if (contador_01 === 0) {
                    console.log("numero 0 inserido");
                } else {
                    media = soma / contador_01;
                    console.log("A média aritmética é: " + media);
                }
                break;
             } else if (number_01 > 0) {
                contador_01++;
                soma = number_01 + soma;
            }
        }
        break;

        case 15:
        exercicioNumero = "15";
        let num;
        let peso;
        let somaNumero = 0;
        let somaPeso= 0;
        let cont = 0;
        let mediaPonderada;
        
        while (true) {
            num = parseFloat(prompt("Digite um número:"));
            if (num === 0) {
                if (cont === 0) {
                    console.log("numero 0 inserido");
                } else {
                    mediaPonderada = somaPeso / somaNumero;
                    console.log("A média ponderada é: " + mediaPonderada);
                    
                }
                break;
             } else if (num > 0) {
                peso = parseFloat(prompt("Digite um Peso:")); 
                cont++;
                somaNumero = num + somaNumero;
                somaPeso = (peso * num) + somaPeso
            }
        }
        break;

        case 16:
        exercicioNumero = "16";
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
        
        break;

}