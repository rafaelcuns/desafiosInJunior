let reais = parseFloat(window.prompt("Digite o valor em reais:"))

if (isNaN(reais)) {
    throw new Error("Número inválido")
}

let euro = reais / 6.10
let dolar = reais / 5.70

window.alert("Valor em reais (R$): " + reais + "\n" + "Valor em euro (€): " + euro.toFixed(2) + "\n" + "Valor em dolar ($): " + dolar.toFixed(2))