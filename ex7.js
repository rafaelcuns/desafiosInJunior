let frase = window.prompt("Digite a frase:")
let novaFrase = ""
let invertida = ""

for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== " ") {
        novaFrase += frase[i].toLowerCase()
    }
}

for (let i = novaFrase.length - 1; i >= 0; i--) {
    invertida += novaFrase[i]
}

if (novaFrase === invertida) {
    window.alert("É um palíndromo")
} else {
    window.alert("Não é um palíndromo")
}