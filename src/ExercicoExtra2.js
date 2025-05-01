///O IMC - Indice de Massa Corporal é um critério da Organizacao Mundial de Saude para dar uma indicacao sobre
//a condição de peso de uma pessoa adulta.

//Formula do IMC:
//IMC = peso / (altura * altura)

//Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

//IMC em adultos Condição:
//- Abaixo de 18.5 Abaixo do peso;
//- Entre 18.5 e 25 Peso normal;
//- Entre 25 e 30 Acima do peso;
//- Entre 30 e 40 Obeso;
//- Acima de 40 Obsesidade Grave;

const peso = 140
const altura = 1.86
const imc = peso / (Math.pow(altura,2))

if (imc < 18.5){
    console.log (`IMC e ${imc.toFixed(1)} abaixo do peso`);
} else if (imc <=25 ){
    console.log (`IMC e ${imc.toFixed(1)} peso normal`);
} else if (imc <=30 ){
    console.log (`IMC e ${imc.toFixed(1)} acima do peso`);
} else if (imc <=40 ){
    console.log (`IMC e ${imc.toFixed(1)} obeso`);
} else {
    console.log (`IMC e ${imc.toFixed(1)} obesidade grave`);
}