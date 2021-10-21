// nao aceita repeticao/nao indexada

const times = new Set ()
times.add('Vasco')
times.add('Sao paulo').add('Palmeiras').add('Corinthia')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
