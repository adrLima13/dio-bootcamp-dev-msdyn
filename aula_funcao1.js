function escreverMeuNome (nome){
    return `Meu nome e ${nome}`;
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escreverMeuNome('Adriano Lima') + ` ${idade} de idade e maior de idade`)
    } else {
        console.log(escreverMeuNome('Adriano Lima') + ` ${idade} de idade e menor de idade`)
    }
}

verificarIdade(11)