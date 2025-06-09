import prompt from 'prompt-sync'
let ler = prompt();


console.log(`------------------------------------`)
console.log(`-----PROGRAMA DOS NUMEROS PARES-----`)
console.log(`------------------------------------`)


console.log(`INFORME QUANTOS NUMEROS VOCÊ DESEJA:`)
let qtd = Number(ler())

let espaco = []
let num = []

for(let cont=0;cont<qtd;cont++){
console.log(`INFORME UM NUMERO:`)
let pos=Number(ler())
espaco.push(pos)
}


console.log(`ESSES FORAM OS NUMEROS INFORMADOS:`)
for(let item of espaco){
    console.log(item)
}

console.log(`ESSES SÃO OS NUMEROS PARES:`)
for(let cont=0;cont<qtd;cont++){
    let valor=espaco[cont]
if(valor %2==0){
    console.log(valor)
}
}





console.log(`------------------------------------`)
console.log(`------  PROGRAMA  FINALIZADO  ------`)
console.log(`------------------------------------`)




