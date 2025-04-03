/* 
7- Faça um programa que pergunte qual número deseja calcular o fatorial, e exiba o resultado
*/

const input = require(`prompt-sync`)(); 

console.log("---------------");
console.log("Cálculo de Fatorial ");
console.log("---------------");

let numero: number = parseInt(input("Por favor, informe o número que deseja calcular o fatorial: "));
let fatorial: number = 1;

if (numero < 0) {
    console.log("Não é possível calcular o fatorial de um número negativo.");
} else {
    for (let contador: number = 1; contador <= numero; contador++) {
        fatorial *= contador;
    }
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}
