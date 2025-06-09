import prompt from 'prompt-sync'
let ler=prompt()




console.log(`///// PROGRAMA DOS NUMEROS INVERTIDOS /////`)




console.log(`INFORME QUANTOS NUMEROS VOCÊ DEJA DIGITAR:`)
let num=Number(ler())


let array=[]

for(let cont=0;cont<num;cont++){
console.log(`INFORME MAIS UM NUMERO:`)
array.push(Number(ler()))
}

console.log(`ESSES FORAM OS NUMEROS INFORMADOS:`)
for(let cont=num-1;cont>=0;cont--){
    let item=array[cont]
    console.log(item)
}



console.log(`------------------------------------`)
console.log(`--------PROGRAMA FINALIZADO!!-------`)
console.log(`------------------------------------`)















