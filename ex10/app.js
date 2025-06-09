import prompt from 'prompt-sync'
let ler = prompt()





console.log(`//////////// PROGRAMA DO DOBRO ////////////`)



console.log(`INFORME A QUANTIDADES DE NUMEROS QUE VOCÊ DESEJA INFORMAR:`)
let qtd=Number(ler())


let num=[]


console.log(`INFORME OS NUMEROS`)
for(let cont=0;cont<qtd;cont++){
    num.push(Number(ler()))
}




for(let item of num){
    let call=item*2
    console.log(`o dobro de ${item} é =${call}`)
}




console.log(`------------------------------------`)
console.log(`---------PROGRAMA FINALIZADO!!------`)
console.log(`------------------------------------`)

