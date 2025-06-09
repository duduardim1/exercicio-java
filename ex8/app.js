import prompt from 'prompt-sync'
let ler = prompt()



console.log(`//////////// PROGRAMA DOS NUMEROS ALEATÓRIOS ////////////`)


console.log(`INFORME QUANTOS NUMEROS ALEATÓRIOS VOCÊ DESEJA:`)
let num = Number(ler());

let numeros=[]

for(let cont=0;cont<num;cont++){
let num = parseInt(Math.random()*100);
numeros.push(num)
}


console.log(`Os números gerados aleatoriamente foram:`)
for(let item of numeros){
    console.log(item)
}




console.log(`------------------------------------`)
console.log(`--------PROGRAMA FINALIZADO!!-------`)
console.log(`------------------------------------`)










