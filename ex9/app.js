import prompt from 'prompt-sync';
let ler=prompt();





console.log(`//////////// PROGRAMA DO DOBRO ////////////`)



console.log(`INFORME A QUANTIDADE DE NUMEROS QUE VOCÊ DESEJA:`)
let qtd=Number(ler());




let array=[]
let dobro=[]


console.log(`INFORME OS NUMEROS:`)
for(let cont=0;cont<qtd;cont++){
    let valor=Number(ler())
    array.push(valor)
    dobro.push(valor*2)
}



console.log(`OS NUMEROS INFORMADOS FORAM ESSES:`)

for(let item of array){
    console.log(item)
}
console.log(`O dobro de cada número é::`)
for(let item of dobro){
    console.log(item)
}







console.log(`------------------------------------`)
console.log(`---------PROGRAMA FINALIZADO!!------`)
console.log(`------------------------------------`)









