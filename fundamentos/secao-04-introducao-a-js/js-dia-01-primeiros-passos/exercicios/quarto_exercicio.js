const primeiro = 60;
const segundo = 10;
const terceiro = 60;

if (primeiro < 0 || segundo < 0 || terceiro < 0 ) {
    console.log ("Erro! Algum valor não está correto.")
} 

if (primeiro + segundo + terceiro === 180) {
    console.log (true);
} else {
    console.log(false);
}