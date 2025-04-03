/*6 – Faça um programa que pergunte qual tabuada deseja exibir, e mostre essa tabuada
 (tente usar laço de repetição)*/

const teclado = require('prompt-sync')();
console.log (`Digite qual tabuada deseja exibir: `)

console.log("---------------");
console.log("Tabuada");
console.log("---------------");

let tabuada: number = parseInt(teclado("Por favor, informe a tabuada que deseja exibir: "));

for (let numero = 1; numero <= 10; numero++) {
    console.log(`${tabuada} x ${numero} = ${tabuada * numero}`);
}
