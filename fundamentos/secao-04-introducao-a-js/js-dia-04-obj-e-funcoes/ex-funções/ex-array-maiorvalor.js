function arrayMaiorValorIndice (array) {
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


