import prompt from 'prompt-sync';
let ler = prompt();

console.log(`---------------------------------------`);
console.log(`------- PROGRAMA DIA DA SEMANA --------`);
console.log(`---------------------------------------`);

console.log(`INFORME UM NÚMERO DE 0 A 6:`);
let numero = Number(ler());

let dia = '';

if (numero === 0) {
    dia = 'Domingo';
} else if (numero === 1) {
    dia = 'Segunda';
} else if (numero === 2) {
    dia = 'Terça';
} else if (numero === 3) {
    dia = 'Quarta';
} else if (numero === 4) {
    dia = 'Quinta';
} else if (numero === 5) {
    dia = 'Sexta';
} else if (numero === 6) {
    dia = 'Sábado';
} else {
    dia = 'Número inválido! Informe um número entre 0 e 6.';
}

console.log(`DIA CORRESPONDENTE: ${dia}`);

console.log(`---------------------------------------`);
console.log(`--------- PROGRAMA FINALIZADO ---------`);
console.log(`---------------------------------------`);
