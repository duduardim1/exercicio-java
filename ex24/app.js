import prompt from 'prompt-sync';
let ler = prompt();

console.log(`-------------------------------------------`);
console.log(`------- PROGRAMA DE GESTÃO DE DOAÇÕES ------`);
console.log(`-------------------------------------------`);

console.log(`INFORME O NOME DO PROJETO:`);
let projeto = ler();

console.log(`INFORME A QUANTIDADE DE DOAÇÕES:`);
let qtd = Number(ler());

console.log(`INFORME A META DO PROJETO (em reais):`);
let meta = Number(ler());

let doacoes = [];
let total = 0;

console.log(`AGORA INFORME OS VALORES DAS DOAÇÕES:`);

for (let i = 0; i < qtd; i++) {
    let valor = Number(ler());
    doacoes.push(valor);
    total += valor;
}

let maior = doacoes[0];
for (let i = 1; i < doacoes.length; i++) {
    if (doacoes[i] > maior) {
        maior = doacoes[i];
    }
}

console.log(`\nO projeto ${projeto} recebeu ${qtd} doações,`);
console.log(`totalizando ${total} reais.`);

console.log(`As doações recebidas foram:`);

for (let i = 0; i < doacoes.length; i++) {
    process.stdout.write(doacoes[i].toString());
    process.stdout.write(" – ");
}

console.log(`\nA maior doação foi ${maior} reais.`);

if (total >= meta) {
    console.log(`A meta foi atingida!`);
} else {
    console.log(`A meta não foi atingida.`);
}

console.log(`\n-------------------------------------------`);
console.log(`------------- PROGRAMA FINALIZADO ---------`);
console.log(`-------------------------------------------`);
