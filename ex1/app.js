import prompt from 'prompt-sync'
let ler = prompt()


console.log(`
    /////PROGRAMA DOS NUMEROS/////`
)



console.log(`inoforme 5 numeros:`)

let array=[]

for(let cont=0;cont<5;cont++){
array.push(Number(ler()))
}


console.log(`ESSES FORAM OS NUMEROS INFORMADOS:`)
for (let item of array){
    console.log(item)
}





console.log(`------------------------------------`)
console.log(`--------PROGRAMA FINALIZADO!!-------`)
console.log(`------------------------------------`)


















