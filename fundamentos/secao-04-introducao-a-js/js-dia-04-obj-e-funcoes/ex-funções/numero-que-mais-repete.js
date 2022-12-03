function numeroQueMaisRepete (array) {
    let numeroMaisRepetido = array[0];
    let vezesRepetidas = 0;
    for (index in array) {
        let vezesQueNumeroAtualRepete = 0;
        for (index2 in array) {
            if (array[index] == array[index2]) {
                vezesQueNumeroAtualRepete += 1;
            } 
        }
        if (vezesQueNumeroAtualRepete > vezesRepetidas) {
            vezesRepetidas = vezesQueNumeroAtualRepete;
            numeroMaisRepetido = array[index];
        }
    }
    return numeroMaisRepetido;
}

console.log(numeroQueMaisRepete([2, 3, 2, 5, 8, 2, 3]));

