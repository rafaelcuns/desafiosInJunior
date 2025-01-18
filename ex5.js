let numero = parseInt(window.prompt("Insira o número inteiro"))

if (isNaN(numero)) {
    throw new Error("Número inválido")
}

if (numero % 3 == 0 && numero % 5 == 0) {
    window.alert("fizzbuzz")
} else if (numero % 3 == 0) {
    window.alert("fizz")
} else if (numero % 5 == 0) {
    window.alert("buzz")
}