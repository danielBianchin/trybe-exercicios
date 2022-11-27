const custoProduto = 100;
const valorVenda = 140;

if (custoProduto < 0 || valorVenda < 0) {
    console.log("Erro!");
}

console.log((valorVenda - custoProduto * 1.20) * 1000 );