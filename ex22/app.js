import prompt from 'prompt-sync';
let ler = prompt();

console.log(`---------------------------------------`);
console.log(`-------- PROGRAMA MÊS POR NÚMERO ------`);
console.log(`---------------------------------------`);

console.log(`INFORME UM NÚMERO DE 0 A 11:`);
let numero = Number(ler());

let meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
];

if (numero >= 0 && numero <= 11) {
    console.log(`MÊS CORRESPONDENTE: ${meses[numero]}`);
} else {
    console.log(`Número inválido! Informe um número entre 0 e 11.`);
}

console.log(`---------------------------------------`);
console.log(`--------- PROGRAMA FINALIZADO ---------`);
console.log(`---------------------------------------`);
