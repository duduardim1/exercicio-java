import prompt from 'prompt-sync';
let ler = prompt()





console.log(`---------------------------------------`)
console.log(`-----PROGRAMA DA SELEÇÃO DE LETRAS-----`)
console.log(`---------------------------------------`)




console.log(`INFORME A QUANTIDADE DE NOMES QUE VOCÊ DESEJA INFORMAR:`)
let qtd = Number(ler());


let nome=[]
let l=[]

console.log(`AGORA INFORME OS NOMES`)

for(let cont=0;cont<qtd;cont++){
nome.push(ler())

}


console.log(`ESSES FORAM OS NOMES INFORMADOS:`)
for(let item of nome){
    console.log(item)
}
console.log(`\nOS NOMES QUE COMEÇAM COM L SÃO:`);
for (let cont = 0; cont < qtd; cont++) {
    
    let primeiraLetra = nome[cont][0].toUpperCase();
    if (primeiraLetra === 'L') {
        l.push(nome[cont]);
    }
}


if (l.length > 0) {
    for (let item of l) {
        console.log(item);
    }
} else {
    console.log("Nenhum nome começa com L.");
}



console.log();


console.log(`---------------------------------------`)
console.log(`---------PROGRAMA FINALIZADO-----------`)
console.log(`---------------------------------------`)




