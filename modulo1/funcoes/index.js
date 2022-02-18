
/* function funcao(variavel) {
	return variavel * 5
}
console.log(funcao(2))
console.log(funcao(10)) - SERÁ IMPRESSO PRIMEIRO 10, QUE É O VALOR DO ARGUMENTO (2) MULTIPLICADO POR 5 E DEPOIS 50, QUE É O VALOR DO ARGUMENTO (10) POR 5.
JÁ SEM O CONSOLE.LOG, A FUNÇÃO SERIA CHAMADA, MAS NÃO IMPRESSA.
let textoUsuario = prompt('Insira um texto');
const outraFuncao = function(texto) {
	return texto.toLowerCase().includes('PEPINO')
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) - ESSA FUNÇÃO IRÁ TRANSFORMAR O TEXTO TODO EM CAIXA BAIXA E CHECAR SE INCLUI A PALAVRA "pepino", DEVOLVENDO UM VALOR BOOLEANO. PARA AS FRASES:
  i.   Eu adoro pepino
     ii.  PEPINO é bom pra pele
     iii. Pepinos crescem na horta
O RETORNO SERÁ  TRUE, JÁ QUE EM TODAS AS TRÊS TEMOS A PALAVRA "PEPINO" SEJA QUAL FOR O  FORMATO.*/

function minhasInformacoes() {
    console.log("Meu nome é Agatha, tenho 29 anos, moro em São Paulo e sou estagiaria.")
}

minhasInformacoes()

function informacoesDeAlguem(nome, idade, moradia, profissao){
    let seuNome = prompt("Qual seu nome?")
    let suaIdade = Number(prompt("Qual a sua idade?"))
    let suaMoradia = prompt("Em que cidade você mora?")
    let suaProfissao = prompt("Qual a sua profissao?")

    console.log(`Eu sou ${seuNome}, tenho ${suaIdade} anos, moro em ${suaMoradia} e sou ${suaProfissao}.`)
}

informacoesDeAlguem()


