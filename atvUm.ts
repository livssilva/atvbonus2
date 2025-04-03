/* Crie um programa que simula a venda de combustíveis em um posto de gasolina. O usuário deverá informar que 
deseja abastecer:
para Gasolina
para Etanol

O programa deve calcular e exibir o de acordo com os seguintes preços:
R$ 5,50 por litro
R$ 4,00 por litro
 Se a quantidade abastecida for de 20 litros, aplique um desconto de 5%  sobre o valor total. 
 */

 const teclado = require("prompt-sync")();

 console.log("-----------------");
 console.log("Posto de Gasolina");
 console.log("-----------------");
 
 let gasolina: number = 5.5;
 let etanol: number = 4.0;
 
 let tipoCombustivel: string = teclado(
   `Digite G caso deseje Gasolina ou E para Etanol: `
 );
 
 let litros: number = parseFloat(teclado(`Digite a quantidade de litros: `));
 let preco: number = 0;
 
 if (tipoCombustivel == "G" || tipoCombustivel == "g") {
   preco = gasolina * litros;
   console.log(`O preço da Gasolina é 5.50`);
   console.log("-----------------");
 } else if (tipoCombustivel == "E" || tipoCombustivel == "e") {
   preco = etanol * litros;
   console.log(`O preço do Etanol é ${preco} R$. `);
   console.log("-----------------");
 } else {
   console.log(`Não temos esse combustível!`);
 }
 
 if (litros >= 20) {
   console.log("Você recebeu um desconto de 5%");
   let desconto = preco * 0.05;
   console.log(`o preço total é ${preco} R$.`);
   console.log("-----------------");
   console.log(`O preço com desconto é ${preco - desconto} R$.`);
 } else {
   console.log("Você não tem desconto no valor.");
   console.log("-----------------");
   console.log(`O preço total é ${preco} R$.`);
 }
 console.log("-----------------");
 console.log("Volte sempre ao nosso posto!");