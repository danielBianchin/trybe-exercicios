let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmetica = 0;
let maiorValor = 0;
let qtdImpar = 0;
let menorValor = numbers[0];

for (let number of numbers) {
    // console.log(number);
    soma = soma + number;
    if (number > maiorValor) {
        maiorValor = number;
    }
    if (number % 2 != 0) {
        qtdImpar = qtdImpar + 1;
    }
    if (number < menorValor) {
        menorValor = number;
    }
    
}

console.log ("A soma de todos os valores contidos no array é:", soma);

mediaAritmetica = soma / numbers.length;

if (mediaAritmetica > 20) {
    console.log("Valor da media aritmética maior que 20");
} else {
    console.log("Valor da media aritmética menor ou igual a 20");
}

console.log ("O maior valor do array é:", maiorValor);

if (qtdImpar != 0) {
    console.log("A quantidade de valores ímpares no array é de:", qtdImpar);
} else {
    console.log("Nenhum valor ímpar encontrado");
}

console.log ("O menor valor do array é:", menorValor);

array25 = [];
for (index = 1; index <= 25; index +=1) {
    array25.push(index)
}
console.log(array25);
