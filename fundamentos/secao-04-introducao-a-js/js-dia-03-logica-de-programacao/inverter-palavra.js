//Tentei resolver dessa forma, no entanto parece que Strings não podem ter os indices reatribuidos, a ideia no entanto é bastante válida, visto que tentei utilizando arrays numéricos de qualquer tamanho, e funciona perfeitamente invertendo todos os números.

// este não funciona
// let word = 'trybe';

// for (let index = 0; index <= word.lenght/2 - 1 ; index += 1) {
    
//     let aux = word[word.length - 1 - index];
//     word[word.length - 1 - index] = word[index]; 
//     word[index] = aux;
    
// }
// console.log(word);

// este funciona
// let array = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];

// for (let index = 0; index <= array.length/2 - 1 ; index += 1) {
    
//     let aux = array[array.length - 1 - index];
//     array[array.length - 1 - index] = array[index]; 
//     array[index] = aux;
    
// }
// console.log(array);

let word = 'tryber';
let invertedWord = '';

for (index = word.length - 1; index >= 0; index -= 1) {
    invertedWord = invertedWord + (word[index])
}

console.log(invertedWord);





