function somatorio (n) {
    soma = n;
    for (let index = 1; index < n; index += 1) {
        soma += index;
    }
    return soma;
}

console.log(somatorio(5));