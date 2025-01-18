function encontrarElementoUnico(numeros) {
    const frequencias = {}
    
    numeros.forEach((numero) => {
        if (frequencias[numero]) {
            frequencias[numero]++
        } else {
            frequencias[numero] = 1
        }
    })
    
    for (const numero in frequencias) {
        if (frequencias[numero] === 1) {
            console.log("O elemento que aparece apenas uma vez é: " + numero)
            return numero
        }
    }
}