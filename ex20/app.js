import prompt from 'prompt-sync';
let ler = prompt();

console.log(`--------------------------------------------`);
console.log(`------ VERIFICAÇÃO DE APROVAÇÃO FINAL ------`);
console.log(`--------------------------------------------`);

console.log(`INFORME A QUANTIDADE DE ALUNOS:`); 
let qtd = Number(ler());

let notas = [];

console.log(`AGORA INFORME A MÉDIA FINAL DE CADA ALUNO:`);

for (let cont = 0; cont < qtd; cont++) {
    let nota = Number(ler());
    notas.push(nota);
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


let todosPassaram = true;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 6.0) {
        todosPassaram = false;
        break;
    }
}

if (todosPassaram) {
    console.log("Todos alunos passaram.");
} else {
    console.log("Não foram todos alunos que passaram.");
}

console.log(`\n--------------------------------------------`);
console.log(`------------- PROGRAMA FINALIZADO ----------`);
console.log(`--------------------------------------------`);
