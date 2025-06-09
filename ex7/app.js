import prompt from 'prompt-sync';
let ler=prompt();



console.log(`//////PROGRAMA DOS INGRSSOS//////`)



console.log(`INFORME QUANTOS INGRESSOS VOCÊ VAI QUERER:`)
let qtd=Number(ler());

console.log(`AGORA INFORME A SIGLA DOS INGRESSOS:`)
let letra=ler()


let fr=[]
    
    for(let cont=1;cont<=qtd;cont++){
        fr.push(`${letra}${cont}`)
    }



console.log(`Os ingressos gerados foram:`)
    for(let item of fr){
        console.log(item)
    }





console.log(`------------------------------------`)
console.log(`--------PROGRAMA FINALIZADO!!-------`)
console.log(`------------------------------------`)



