

import prompt from 'prompt-sync';
let ler = prompt();

console.log(`---------------------------------------`);
console.log(`-----------PROGRAMA DA MÉDIA-----------`);
console.log(`---------------------------------------`);

console.log(`INFORME A QUANTIDADE DE NOTAS QUE VOCÊ DESEJA INFORMAR:`);
let qtd = Number(ler());

let notas = [];
let soma = 0;

console.log(`AGORA INFORME AS NOTAS:`);

for (let cont = 0; cont < qtd; cont++) {
    let nota = Number(ler());
    notas.push(nota);
    soma += nota;
}

console.log(`\nNOTAS DIGITADAS:`);
for (let i = 0; i < notas.length; i++) {
    if (i === notas.length - 1) {
        process.stdout.write(notas[i].toString());
    } else {
        process.stdout.write(notas[i] + " - ");
    }
}
console.log(); 

let media = soma / qtd;
let menor = notas[0];
let maior = notas[0];

for (let i = 1; i < notas.length; i++) {
    if (notas[i] < menor) {
        menor = notas[i];
    }
    if (notas[i] > maior) {
        maior = notas[i];
    }
}

console.log(`A MÉDIA É: ${media.toFixed(1)}`);
console.log(`A MAIOR NOTA É: ${maior}`);
console.log(`A MENOR NOTA É: ${menor}`);

console.log(`\n---------------------------------------`);
console.log(`---------PROGRAMA FINALIZADO-----------`);
console.log(`---------------------------------------`);

