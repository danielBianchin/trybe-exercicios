let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    
    if (index + 1 < numbers.length) {
        multiplicacao = numbers[index + 1]
    } else {
        multiplicacao = 2
    }
    
    novoArray.push(numbers[index] * multiplicacao);
}

console.log(novoArray);