// ordem crescente

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = 0;
for (let index = 0; index < numbers.length; index += 1) {
    for (let segundoIndex = 0; segundoIndex < numbers.length - index; segundoIndex += 1) {
        if (numbers[segundoIndex] > numbers[segundoIndex + 1]) {
            aux = numbers[segundoIndex];
            numbers[segundoIndex] = numbers[segundoIndex + 1];
            numbers[segundoIndex + 1] = aux;
        }
    }
}

console.log(numbers);

//ordem decrescente

for (let index = 0; index < numbers.length; index += 1) {
    for (let segundoIndex = 0; segundoIndex < numbers.length - index; segundoIndex += 1) {
        if (numbers[segundoIndex] < numbers[segundoIndex + 1]) {
            aux = numbers[segundoIndex];
            numbers[segundoIndex] = numbers[segundoIndex + 1];
            numbers[segundoIndex + 1] = aux;
        }
    }
}

console.log(numbers);