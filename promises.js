function falarDepoisDe(segundos, frase) {
return new Promise((resolver, reject) => {
    setTimeout(() => {
        resolver(frase)
    }, segundos * 1000)
 })

}

falarDepoisDe(3, 'que legal!')
 .then(frase => frase.concat('?!?'))
 .then(outraFrase => console.log(outraFrase))
