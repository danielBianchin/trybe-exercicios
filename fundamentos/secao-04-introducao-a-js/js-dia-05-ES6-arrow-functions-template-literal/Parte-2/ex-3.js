const longestWord = (string) => {
    const wordArray = string.split(' ');
    let maiorPalavra = '';
    for (const word of wordArray) {
        if (word.length > maiorPalavra.length)  {
            maiorPalavra = word;
        }
    }
    return maiorPalavra;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));