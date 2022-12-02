function verificaFimPalavra (stringWord, stringEnding) {
    const splitWord = stringWord.split('').reverse();
    const splitEnding = stringEnding.split('').reverse();
    let verificacao = true;
    for (let index = 0; index < splitEnding.length; index += 1) {
        if (splitEnding[index] != splitWord[index]) {
            return false;
        }
        
    }
    return true;
}


console.log(verificaFimPalavra('trybe','be'));
