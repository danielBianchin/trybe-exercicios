const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const splitada = frase.split(' ');
    for (index in splitada) {
        if (splitada[index] == 'x') {
        splitada[index] = nome;
        }
    }
   console.log(splitada.join(' '));
}

substituaX('Bebeto');
