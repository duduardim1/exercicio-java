import prompt from 'prompt-sync';
let ler = prompt();

console.log(`---------------------------------------`);
console.log(`-----------PROGRAMA DA MÉDIA-----------`);
console.log(`---------------------------------------`);

console.log(`INFORME A QUANTIDADE DE NOTA QUE VOCÊ DESEJA INFORMAR:`);
let qtd = Number(ler());

let not = [];
let soma = 0;
let maior=[];

console.log(`AGORA INFORME AS NOTAS:`);

for (let cont = 0; cont < qtd; cont++) {
    let nota = Number(ler());
    not.push(nota);
    soma = soma + nota;
}

console.log(`ESSAS FORAM AS NOTAS INFORMADAS:`);

let texto = "";
for (let cont = 0; cont < qtd; cont++) {
    texto = texto + not[cont];
    if (cont < qtd - 1) {
        texto = texto + " - ";
    }
}
console.log(texto);

let maiorNota = not[0];


for (let i = 1; i < not.length; i++) {
    if (not[i] > maiorNota) {
        maiorNota = not[i];
    }
}

console.log(`A MAIOR NOTA FOI:`);
console.log(maiorNota);



console.log();


console.log(`---------------------------------------`)
console.log(`---------PROGRAMA FINALIZADO-----------`)
console.log(`---------------------------------------`)


