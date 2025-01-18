function fibonacci(n) {
    if (n == 0) {
        return [0]
    } else if (n == 1) {
        return [0, 1]
    }
    
    let sequencia = fibonacci(n - 1)
    sequencia.push(sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2])
    return sequencia
}


let numero = parseInt(window.prompt("Digite um número inteiro positivo:"))
if (isNaN(numero) || numero <= 0) {
    throw new Error("Número inválido")
} else {
    const sequence = fibonacci(numero)
    window.alert("Os " + numero + " primeiros termos da sequência de Fibonacci são: " + sequence.join(', '))
}

