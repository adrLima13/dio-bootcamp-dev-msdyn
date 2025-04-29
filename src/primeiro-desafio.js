//Faça um programa para calcular o valor de uma viagem.

//Você terá 3 variáveis. Sendo elas:
//1 - Preço do combustível;
//2 - Gasto médio de combustível do carro por KM;
//3 - Distância em KM da viagem;

const precoCombustivel = 6.09;
const kmPorLitros= 12;
const distanciaEmKm = 1580;

const valorDaViagem = (distanciaEmKm/kmPorLitros) * precoCombustivel;

console.log(`O valor dar viagem e R$ ${valorDaViagem.toFixed(2)}`);
