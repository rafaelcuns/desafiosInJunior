function verificarIdades(anos) {
    let situacoes = []
    let anoAtual = parseInt(window.prompt("Digite o ano atual:"))
    if (isNaN(anoAtual)) {
        throw new Error("Número inválido")
    }
    anos.forEach(ano => {
        let idade = anoAtual - ano
        if (idade >= 18) {
        situacoes.push("maior")
        } else  if (idade < 18) {
        situacoes.push("menor")
        }
    })
    return situacoes
}

let situacoes = verificarIdades([2005, 2013])
let mensagem = ""
situacoes.forEach((situacao, index) => {
    mensagem += "Pessoa " + (index+1) + ": " + situacao.charAt(0).toUpperCase() + situacao.slice(1) + " de idade\n"
})
window.alert(mensagem)