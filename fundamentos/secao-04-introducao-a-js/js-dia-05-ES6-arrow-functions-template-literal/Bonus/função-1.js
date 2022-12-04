const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const splitada = frase.split(' ');
    for (index in splitada) {
        if (splitada[index] == 'x') {
        splitada[index] = nome;
        }
    }
   return (splitada.join(' '));
}

const minhasSkills = (retornoFuncao1) => {
    const skills = ['bash', 'git', 'js'];
    let concatenacao = `${retornoFuncao1}
    Minhas três principais habilidades são:
    ${skills[0]}
    ${skills[1]}
    ${skills[2]}`
    return concatenacao;
}

console.log(minhasSkills(substituaX('Bebeto')));


