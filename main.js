const nomeUtente = prompt('come ti chiami?')
console.log(nomeUtente)

const cognomeUtente = prompt('qual è il tuo cognome?')
console.log(cognomeUtente)

const colorePreferito = prompt('qual è il tuo cognome preferito?')
console.log(colorePreferito)

const password = nomeUtente + cognomeUtente + colorePreferito + 23
console.log(password)

const generaPassword = document.getElementById('main-title')
generaPassword.innerText = 'La tua password è:' + password