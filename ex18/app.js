import prompt from 'prompt-sync';
let ler = prompt();

console.log(`---------------------------------------`);
console.log(`-----------PROGRAMA DA MÉDIA-----------`);
console.log(`---------------------------------------`);

console.log(`INFORME A QUANTIDADE DE NOTA QUE VOCÊ DESEJA INFORMAR:`);
let qtd = Number(ler());

let not = [];
let soma = 0;
let meno=[];

console.log(`AGORA INFORME AS NOTAS:`);

for (let cont = 0; cont < qtd; cont++) {
    let nota = Number(ler());
    not.push(nota);
    soma = soma + nota;
}

let menor = not[0];

for (let i = 1; i < not.length; i++) {
    if (not[i] < menor) {
        menor = not[i];
    }
}

console.log(`A MENOR NOTA FOI:`);
console.log(menor);


console.log(`---------------------------------------`)
console.log(`---------PROGRAMA FINALIZADO-----------`)
console.log(`---------------------------------------`)


