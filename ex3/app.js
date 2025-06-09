import prompt from 'prompt-sync'
let ler = prompt()



console.log(`///// PROGRAMA DOS NUMEROS 2 /////`)


console.log(`informe a quantidade de numeros que você deseja digitar`)
let qtd=Number(ler())


let array=[]

for(let cont=0;cont<qtd;cont++){
    console.log(`informe mais um numero:`)
array.push(Number(ler()))
}

console.log(`esses foram os numeros informados:`)
for(let item of array){
    console.log(item)
}





console.log(`------------------------------------`)
console.log(`--------PROGRAMA FINALIZADO!!-------`)
console.log(`------------------------------------`)



















