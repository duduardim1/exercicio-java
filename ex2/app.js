import prompt from 'prompt-sync'
let ler = prompt()


console.log(`
    /////PROGRAMA DOS NOMES/////`
)



console.log(`inoforme 5 NOMES:`)

let array=[]

for(let cont=0;cont<5;cont++){
array.push((ler()))
}


console.log(`ESSES FORAM OS NOMES INFORMADOS:`)
for (let item of array){
    console.log(item)
}



console.log(`------------------------------------`)
console.log(`--------PROGRAMA FINALIZADO!!-------`)
console.log(`------------------------------------`)
