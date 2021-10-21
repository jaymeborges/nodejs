// com promise...
const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
        
            res.on('data',dados => {
                resultado += dados
            })
    
            res.on('end',() => {
                try {
                resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })       
    })
}

let nomes = []
getTurma('A').then( alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
})    
    getTurma('B').then ( alunos => {
        nomes = nomes.concat(alunos.map(B => `B: ${B.nome}`))
        console.log(nomes)
})


Promise.all([getTurma('A'), getTurma('B')])
    .then(x => console.log(x))
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => [].concat(nomes))
    .catch(e => console.log(e.message))

 getTurma('D').catch(e => console.log(e.message))   

   