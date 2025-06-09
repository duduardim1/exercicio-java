import prompt from "prompt-sync"
let ler = prompt ();


console.log(`------------------------------`)
console.log(`---- PROGRAMA DA FORMULA 1----`)
console.log(`------------------------------`)






console.log("Informe o limite de pilotos")
let limit = Number(ler());

let posicao = []
let chegada = []
let nomes = []

console.log("Informe as posições iniciais")
for (let i = 0; i < limit; i++) {
    let pos = Number(ler())
    posicao.push(pos)
}

console.log("Informe a chegada")
for (let i = 0; i < limit; i++) {
    let che = Number(ler())
    chegada.push(che)
}

for (let i = 0; i < limit; i++) {
    let inicial = posicao[i];
    let final = chegada[i];

    if (inicial > final) {
        console.log(`O piloto: ${inicial} avançou ${inicial - final} posições.`);
    } else if (inicial < final) {
        console.log(`O piloto: ${inicial} perdeu ${final - inicial} posições.`);
    } else if (inicial = inicial) {
        console.log(`O piloto: ${inicial} manteve sua posição.`);
    }
}




console.log();
console.log(`-------------------------------`)
console.log(`---- PROGRAMA FINALIZADO :)----`)
console.log(`-------------------------------`)
