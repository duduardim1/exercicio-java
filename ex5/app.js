import prompt from 'prompt-sync'
let ler = prompt()



console.log(`////// PROGRAMA DA TABUADA //////`)

console.log(`INFORME QUAL TABUADA VOCÊ DESEJA VER A RESPOSTA`)
let tipo=Number(ler())

let array=[]


for(let cont=0;cont<=10;cont++){
    array.push(tipo*cont)
}


console.log(`ESSE FOI O RESULTADO DA TABUADA DO ${tipo}:`)
for(let cont=0;cont<=10;cont++){
    console.log(`${tipo}X${cont}= ${array[cont]}`)
}

console.log(`------------------------------------`)
console.log(`--------PROGRAMA FINALIZADO!!-------`)
console.log(`------------------------------------`)



















