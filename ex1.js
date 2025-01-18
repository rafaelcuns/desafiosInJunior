// 1
let a = parseFloat(window.prompt("Digite o valor de a:"), 10)
let b = parseFloat(window.prompt("Digite o valor de b:"), 10)
let c = parseFloat(window.prompt("Digite o valor de c:"), 10)
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  window.alert("Coenficiente inválido")
} else {
  delta = b ** 2 - 4 * a * c
  if (delta > 0) {
    let x1 = ((-b) + Math.sqrt(delta)) / 2 * a
    let x2 = ((-b) - Math.sqrt(delta)) / 2 * a

    window.alert("Raiz 1 = " + x1 + "\n" + "Raiz 2 = " + x2)
  } else if (delta == 0) {
    let x = (-b) / 2 * a
    window.alert("O valor das duas raizes é " + x)
  } else if (delta < 0) {
    window.alert("A equação não possui raizes reais")
  }
}

// 2
function calcularFatorial(n) {
  if (n === 0 || n === 1) {
      return 1
  } else {
      return n * calcularFatorial(n - 1)
  }
}

function deNovo() {
  let novoFatorial = window.prompt("Deseja calcular um novo fatorial? (s/n)")
  if (novoFatorial.toLowerCase() == "s") {
    main()
  } else if (novoFatorial.toLowerCase() != "n") {
    window.alert("Resposta inválida")
    deNovo()
  }
}

function main() {
  let numero = parseInt(window.prompt("Digite um numero:"), 10)
  if (!isNaN(numero) && numero > 0) {
    window.alert("O fatorial de " + numero + " é " + calcularFatorial(numero))
    deNovo()
  } else {
    window.alert("Número inválido")
    main()
  }
}

main()

