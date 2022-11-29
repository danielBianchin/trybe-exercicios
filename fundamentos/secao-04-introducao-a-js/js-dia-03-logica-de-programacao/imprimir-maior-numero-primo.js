let maiorPrimo = 0;
let numerosPrimos = [];
let ehPrimo = true;
for (let index = 2; index <= 50; index += 1) {
    for (let segundoIndex = 2; segundoIndex < index; segundoIndex += 1) {
        if (index % segundoIndex === 0) {
                ehPrimo = false;
        } 
    }
    if (ehPrimo === true) {
        numerosPrimos.push(index)
        maiorPrimo = index;
    }
    ehPrimo = true
}

console.log(numerosPrimos);
console.log('O maior número primo é o:',maiorPrimo);