let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

// console.log('Bem-vinda', info.personagem);

info['recorrente'] = 'Sim';

// for (chaves in info) {
//     console.log(chaves);
// }

for (chaves in info) {
    if (info[chaves] === info2[chaves]) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[chaves], 'e', info2[chaves]);
    } 
    

}