let Resposta = prompt("Você quer comer mais coxinha? S/N")
let Coxinhas

for(Coxinhas = 0; Resposta.toUpperCase() == "S"; Coxinhas += 2.5) {
    Resposta = prompt("Você quer comer mais coxinha? S/N")
}

console.log(`A conta ficou R$ ${Coxinhas}`)