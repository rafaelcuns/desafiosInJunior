let quantidade = parseInt(window.prompt("Digite a quantidade de números que deseja inserir:"))
let numeros = []

for (let i = 0; i < quantidade; i++) {
    numeros.push(parseInt(window.prompt("Insira o numero " + (i + 1))))
}

let contagem = 0
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[i - 1]) {
        contagem++
    }
}

window.alert("Número de elementos em ordem crescente: " + contagem)

