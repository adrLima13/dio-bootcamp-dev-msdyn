// Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
// sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
// - Média menor que 5, reprovacão;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;

const nota1 = 7
const nota2 = 7
const nota3 = 8

const media = (nota1 + nota2 + nota3) / 3

if (media < 5){
    console.log (`O aluno foi reprovado sua nota final foi ${media.toFixed(1)}`);
} else if (media <=7 ){
    console.log (`O aluno esta de recuperacao sua nota final foi ${media.toFixed(1)}`);
} else {
    console.log (`O aluno passou de semestre sua nota final foi ${media.toFixed(1)}`);
}