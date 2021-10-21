for (let letra of "Cod3r") {
    console.log(letra)
}

const asuntosEcma = ['Map', 'Set', 'Promise']

for (let i in asuntosEcma) {
    console.log(i)
}
for (let assuntos of asuntosEcma) {
    console.log(assuntos)
}    
const assuntosMap = new Map([
    ['Map',{abordado: true }],
    ['Set',{abordado: true}],
    ['Promise', { abordado: false }]
])

for(let assunto of assuntosMap) {
    console.log(assunto)
}

for (let assunto of assuntosMap) {
    console.log(assunto)
}
for (let chave of assuntosMap) {
    console.log(chave)
}
for (let valor of assuntosMap) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log (ch, vl)
}

