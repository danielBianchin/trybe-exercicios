const a = 30;
const b = 60;
const c = 90;

function maiorEntreDoisNumeros(primeiroNumero, segundoNumero) {
    if (a > b) {
        return ('O maior número é o:', a);
    } else {
        return ('O maior número é o:', b);
    }
}

console.log(maiorEntreDoisNumeros(a, b));


function maiorEntreTresNumeros (primeiroNumero, segundoNumero, terceiroNumero) {
    let numeros = [primeiroNumero,segundoNumero,terceiroNumero];
    let maiorNumeroAtual = primeiroNumero;
    for (let index = 1; index < numeros.length; index += 1) {
        if (numeros[index] > maiorNumeroAtual) {
            maiorNumeroAtual = numeros[index]
        }
    }
    return maiorNumeroAtual;
}
console.log(maiorEntreTresNumeros(a, b, c));


function positiveOrNegative (numero) {
    if (numero > 0) {
        return ('positive');
    } else {
        return ('negative');
    }
}
console.log(positiveOrNegative(-5));


function angulosTriangulos (primeiroAngulo, segundoAngulo, terceiroAngulo) {
    if (primeiroAngulo < 0 || segundoAngulo < 0 || terceiroAngulo < 0) {
        return ('Erro!');
    } else if (primeiroAngulo + segundoAngulo + terceiroAngulo === 180) {
        return (true);
    } else {
        return (false);
    }
}
console.log(angulosTriangulos(a, b, c));