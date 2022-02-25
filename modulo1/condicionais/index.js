/* EXERCÍCIO 1

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Se d o número é par ou não, iniciando a divisão por 2.
b) Nos que forem divisiveis por 2.
c) Nos que não são divisiveis por 2.


EXERCÍCIO 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

A) Mostrar o preco da fruta digitada pelo usuário.
B) "O preço da fruta maçã é R$2.25"
C) "O preço da fruta pêra é R$ 5"


EXERCÍCIO 3

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) Pedindo o número que vai ser processado pela condicional do tipo Number.
b) Se for 10, ele verá a mensagem "Esse número passou no teste". Se for -10, vai dar erro, já que a variável não foi definida fora da condicional estabelecida.
c) Tera um erro, porque a variável precisa ser definida fora do escopo do bloco if, para que ela seja uma variável global e possa funcionar em diferentes blocos. */

//EXERCICIO 1
const  maiorIdade = Number(prompt("Qual a sua idade?"))

if (maiorIdade > 18) {

	console.log("Você pode dirigir")
} else {
	console.log("Você não pode dirigir")
}

//EXERCICIO 2
const horarioDeEstudo =  prompt("Qual horário você estuda? Digite, M, V ou N para matutino, vespertino e noturno, respectivamente")

if (horarioDeEstudo === "M") {
	console.log("Bom dia!");
} else if (horarioDeEstudo === "V") {
	console.log("Boa tarde!");
} else {
	console.log("Boa noite!");
}

//EXERCICIO 3
let horário = prompt("Em que momento você estuda? Digite, M, V ou N para matutino, vespertino e noturno, respectivamente")
switch (horário) {
	case 'M':
		console.log("Bom dia!")
		break
	case 'V':
		console.log("Boa tarde!")
		break
	case 'N':
		console.log("Boa noite!")
		break

}

//EXERCICIO 4
const generoDeFilme = prompt("Qual o tipo de filme que vamos ver?")
const valorDoIngresso = Number(prompt("Qual o preco do ingresso?"))

if (generoDeFilme === "Fantasia" && valorDoIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
