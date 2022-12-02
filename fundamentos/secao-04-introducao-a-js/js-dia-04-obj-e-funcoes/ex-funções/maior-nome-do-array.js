function maiorNome (arrayDeNomes) {
    let maior = 0;
    let maiorNome = arrayDeNomes[0];
    for (index in arrayDeNomes) {
        if (arrayDeNomes[index].split('').length > maior) {
            maior = arrayDeNomes[index].split('').length;
            maiorNome = arrayDeNomes[index]
        }
    }
    return maiorNome;

}

array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorNome(array));