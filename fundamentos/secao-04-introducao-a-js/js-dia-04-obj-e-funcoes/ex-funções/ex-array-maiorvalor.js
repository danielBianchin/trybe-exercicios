function arrayMaiorValorIndice (array) {
    let maiorValorIndice
    let maiorValor = array[0];
    for (index in array) {
        if (array[index] > maiorValor) {
            maiorValorIndice = index;
        }
    }
    return maiorValorIndice;
}

let array = [2,3,6,7,10,1];

console.log (arrayMaiorValorIndice(array))

function arrayMenorValorIndice (array) {
    let menorValorIndice = 0
    let menorValor = array[0];
    for (index in array) {
        if (array[index] < menorValor) {
            menorValorIndice = index;
        }
    }
    return menorValorIndice;
}

let array2 = [2, 4, 6, 7, 10, 0, -3];

console.log(arrayMenorValorIndice(array2));