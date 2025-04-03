/* 4 - Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino
ou V-Vespertino ou N- Noturno. Imprima a mensagem &quot;Bom Dia!&quot;, &quot;Boa Tarde!&quot; ou &quot;Boa
Noite!&quot; ou &quot;Valor Inválido!&quot;, conforme o caso.*/

const teclado = require('prompt-sync')();
let turno: string = teclado(`Digite M para Matutino, V para Vespertino ou N para Noturno: `);

if (turno === `M`) {
    console.log(`Bom Dia!`);
} else if (turno === `V`) {
    console.log(`Boa Tarde!`);
} else if (turno === `N`) {
    console.log(`Boa Noite!`);
} else {
    console.log(`Valor Inválido!`);
}
