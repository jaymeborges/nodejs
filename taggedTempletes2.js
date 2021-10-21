
function real(partes, ...valores) {
    const resulatado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resulatado.push(partes[indice], valor)
    })
    return resulatado.join('')
}
const preco = 29.99
const precoParcela = 11
console. log(real `1X de ${preco} ou 3x de ${precoParcela}.`)