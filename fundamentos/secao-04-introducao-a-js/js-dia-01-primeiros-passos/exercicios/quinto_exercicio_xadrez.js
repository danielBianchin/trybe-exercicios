let peca = "RAINHA".toLowerCase();

switch (peca) {
    case 'peão':
        console.log("Anda uma casa somente para frente, pode comer outra peça em diagonal.")
        break;
    case 'cavalo':
        console.log("Anda em L");
        break;
    case 'bispo':
        console.log("Anda em diagonal");
        break;
    case 'torre':
        console.log("Anda em linha reta");
        break;
    case 'rainha':
        console.log("Anda na diagonal e também em linha reta.");
        break;
    case 'rei':
        console.log("Anda somente uma casa para frente, trás ou diagonal");
        break;
    default:
        console.log("Erro! Nenhuma peça correspondente.");
}