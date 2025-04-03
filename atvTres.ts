/* 3 -Faça um programa que receba 5 números e retorne o número maior e o número menor.
Nome aluno: Lívia Azevedo
*/

const teclado = require('prompt-sync')();

let n1: number = parseInt(teclado(`Digite o primeiro número: `));
let n2: number = parseInt(teclado(`Digite o segundo número: `));
let n3: number = parseInt(teclado(`Digite o terceiro número: `));
let n4: number = parseInt(teclado(`Digite o quarto número: `));
let n5: number = parseInt(teclado(`Digite o quinto número: `));
let maior: number = n1;
let menor: number = n1;

if (n2 > maior) {
    maior = n2;
} else if (n2 < menor) {
    menor = n2;
}

if (n3 > maior) {
    maior = n3;
} else if (n3 < menor) {
    menor = n3;
}

if (n4 > maior) {
    maior = n4;
} else if (n4 < menor) {
    menor = n4;
}

if (n5 > maior) {
    maior = n5;
} else if (n5 < menor) {
    menor = n5;
}

console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);