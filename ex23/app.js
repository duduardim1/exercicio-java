import prompt from 'prompt-sync';
let ler = prompt();

console.log(`---------------------------------------`);
console.log(`-------- PROGRAMA DE DOAÇÕES ----------`);
console.log(`---------------------------------------`);

console.log(`INFORME O NOME DO PROJETO:`);
let projeto = ler();

let doacoes = [];
let valor = 0;

console.log(`INFORME O VALOR DAS DOAÇÕES (digite -1 para encerrar):`);

while (true) {
    let doacao = Number(ler());
    if (doacao === -1) {
        break;
    }
    doacoes.push(doacao);
    valor += doacao;
}

console.log(`\nO projeto ${projeto} recebeu ${doacoes.length} doações,`);
console.log(`totalizando ${valor} reais.`);

console.log(`As doações recebidas foram:`);

for (let i = 0; i < doacoes.length; i++) {
    process.stdout.write(doacoes[i].toString());
    if (i < doacoes.length - 1) {
        process.stdout.write(" – ");
    } else {
        process.stdout.write(" –"); 
    }
}

console.log(`\n---------------------------------------`);
console.log(`--------- PROGRAMA FINALIZADO ---------`);
console.log(`---------------------------------------`);
