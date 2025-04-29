//Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
//Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
//Código Condição de pagamento:
//- À vista Débito, recebe 10% de desconto;
//- À vista no Dinheiro ou PIX, recebe 15% de desconto;
//- Em duas vezes, preço normal de etiqueta sem juros;
//- Acima de duas vezes, preco normal de etiqueta mais juros de 10%;

const precoEtiqueta = 1000;

const condicaoPagamento = {
    0: ['Debito', 0.10],
    1: ['Dinheiro', 0.15],
    2: ['PIX', 0.15],
    3: ['1x', 0.10],
    4: ['2x', 0],
    5: ['3x ou maior', 0.10]
};
let tipoPagamento = '3x ou maior';
let precoFinal;
let precoParcelado;
let qtdeParcelas = 12

if (tipoPagamento === 'Debito'){
    precoFinal = precoEtiqueta - (precoEtiqueta*condicaoPagamento[0][1]);
    console.log(`O valor no ${condicaoPagamento[0][0]} com 10% de desconto do produto: R$ ${precoFinal.toFixed(2)}`);

} else if(tipoPagamento === 'Dinheiro'){
    precoFinal = precoEtiqueta - (precoEtiqueta*condicaoPagamento[1][1]);
    console.log(`O valor no ${condicaoPagamento[1][0]} com 15% de desconto do produto: R$ ${precoFinal.toFixed(2)}`);

} else if(tipoPagamento === 'PIX'){
    precoFinal = precoEtiqueta - (precoEtiqueta*condicaoPagamento[2][1]);
    console.log(`O valor no ${condicaoPagamento[2][0]} com 15% de desconto do produto: R$ ${precoFinal.toFixed(2)}`);

} else if(tipoPagamento === '1x' && qtdeParcelas === 1){
    precoFinal = precoEtiqueta - (precoEtiqueta*condicaoPagamento[3][1]);
    precoParcelado = precoFinal / qtdeParcelas
    console.log(`O valor no cartao de credito em ${condicaoPagamento[3][0]} com 10% de desconto do produto: R$ ${precoFinal.toFixed(2)}`);

} else if(tipoPagamento === '2x' && qtdeParcelas === 2){
    precoFinal = precoEtiqueta;
    precoParcelado = precoFinal / qtdeParcelas
    console.log(`O valor no cartao de credito em ${condicaoPagamento[4][0]} e: R$ ${precoFinal.toFixed(2)} com ${qtdeParcelas} parcelas de R$ ${precoParcelado.toFixed(2)}`);

} else if (tipoPagamento === '3x ou maior' && qtdeParcelas >= 3){
    precoFinal = precoEtiqueta + (precoEtiqueta*condicaoPagamento[5][1]);
    precoParcelado = precoFinal / qtdeParcelas
    console.log(`O valor no cartao de credito em ${qtdeParcelas}x e: R$ ${precoFinal.toFixed(2)} com ${qtdeParcelas} parcelas de R$ ${precoParcelado.toFixed(2)}`);

} else {
    console.log(`Condicao de pagamento invalida`);
}