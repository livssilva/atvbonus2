/*
 1 - Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
equilátero, isósceles ou escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.
*/

const teclado = require('prompt-sync')();
console.log(`Digite os valores do angulo do triangulo: `);

let anguloUm = parseInt(teclado("Digite o primeiro ângulo: "));
let anguloDois = parseInt(teclado("Digite o segundo ângulo: "));
let anguloTres = parseInt(teclado("Digite o terceiro ângulo: "));

let somaAngulos = anguloUm + anguloDois + anguloTres;
if(somaAngulos == 180) { 
    if(anguloUm == anguloDois && anguloUm == anguloTres && anguloDois == anguloTres) {
        console.log("Triângulo Equilátero");
    } else if(anguloUm == anguloDois || anguloUm == anguloTres || anguloDois == anguloTres) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else 
    console.log("Os ângulos informados não formam um triângulo."); 
    