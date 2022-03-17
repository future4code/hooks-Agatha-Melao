/* 1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?
Serve para incrementar, ou no caso, somar um valor. 
Somando a variavel i, sendo que i precisa ser menor que 5.
O resultado será 10

2 - Leia o código abaixo:
a) O que vai ser impresso no console?
Vai ser impresso 19, 21, 23, 25, 27, 30

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
Não teria como, é necessário adicionar .entries() logo depois da const array para então possa receber o que deseja.

3 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
Quatro linhas, cada uma com 1 * por linha
Na primeira linha *
Segunda linha **
Terceira linha ***
Quarta linha ****

EXERCÍCIO 1//
const bichosDeEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?")) //recebo o número de pets//
if (bichosDeEstimacao === 0) { 
	//se o número de pets for 0, imprimo a seguinte mensagem//
  console.log("Que pena! Você pode adotar um pet!")
} else {
	//se o número de pets for maior do que zero, ele armazenará os nomes numa array e imprimirá//
  const nomesDeBichos = prompt("Quais os nomes?")
  const listaDeNomes = [ ]
  listaDeNomes.push(nomesDosBichos)
  console.log(listaDeNomes)
}