import prompt from 'prompt-sync'
let ler = prompt()





console.log(`//////////// PROGRAMA DA SOMA DOS VETORES ////////////`)




console.log(`INFORME A QUANTIDADE DE NUMEROS QUE VOCÊ DESEJA:`)
let qtd=Number(ler());


let array=[]
let dobro=[]
let soma=[]


console.log(`INFORME OS NUMEROS:`)
for(let cont=0;cont<qtd;cont++){
    array.push(Number(ler()))
}


console.log(`INFORME OS NUMEROS:`)
for(let cont=0;cont<qtd;cont++){
    dobro.push(Number(ler()))
}


console.log(`INFORME OS NUMEROS:`)
for(let cont=0;cont<qtd;cont++){
    let total=array[cont]+dobro[cont]
    soma.push(total)
}




console.log(`OS NUMEROS INFORMADOS FORAM ESSES:`)

for(let item of array){
    console.log(item)
}
console.log(`SEGUNDO VETOR:`)
for(let item of dobro){
    console.log(item)
}


console.log(`A SOMA DOS VETORE, RESULTA NO TERCEIRO:`)
for(let item of soma){
    console.log(item)
}






console.log(`------------------------------------`)
console.log(`---------PROGRAMA FINALIZADO!!------`)
console.log(`------------------------------------`)









