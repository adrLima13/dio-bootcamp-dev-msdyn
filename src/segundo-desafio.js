//Faça um programa para calcular o valor de uma viagem.

//Você terá 3 variáveis. Sendo elas:
//1 - Preço do etanol;
//2 - Preço do gasolina;
//3 - o tipo de combustível que está no seu carro;
//4 - Gasto médio de combustível do carro por KM;
//5 - Distância em KM da viagem;

//Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 5.79;
const precoGasolina = 6.09;
let ehGasolina = false;
const kmPorLitros= 12;
const distanciaEmKm = 1580;

if(ehGasolina){
    const valorDaViagem = (distanciaEmKm/kmPorLitros) * precoGasolina;
    console.log(`O valor da viagem em Gasolina e R$ ${valorDaViagem.toFixed(2)}`);
} else{
    const valorDaViagem = (distanciaEmKm/kmPorLitros) * precoEtanol;
    console.log(`O valor da viagem em Etanol e R$ ${valorDaViagem.toFixed(2)}`);
}
