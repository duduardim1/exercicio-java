import prompt from 'prompt-sync'
let ler=prompt();





console.log(`PROGRAMA DAS FRASES`)


console.log(`INFORME UMA FRASE QUALQUER:`)
let frase=ler()

let array=[]

for(let cont=0;cont<frase.length;cont++){
array.push(frase[cont])
}

for(let item of array){
    console.log(item)
}

console.log(`------------------------------------`)
console.log(`--------PROGRAMA FINALIZADO!!-------`)
console.log(`------------------------------------`)






