// Exercícios de interpretação de código

// Exercício 01
//   a) O que vai ser impresso no console?
//   Vai ser impresso no console: 
//   Matheus Nachtergaele
//   Virgínia Cavendish
//   Canal: Globo
//   Horário: 14h

// Exercicío 02
//   a) O que vai ser impresso no console?
//   Nome: Juca, Idade: 3, raca: SRD
//   Nome: Juba, Idade: 3, raca: SRD
//   Nome: Juca, Idade: 3, raca: SRD

//   b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//   Ele serve pra repetir o que já foi escrito anteriormente sem precisar reescrever.
//   Também é chamado de spread.

// Exercicío 03
//   a) O que vai ser impresso no console?
//   false
//   b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//   foi impresso "undefined" por não ter sido declarado nada que se relacionasse ao quesito "Altura", dai o console não teria o que retornar ao ser chamado.


// Exercícios de interpretação de código
//   1.
//   a) 
const pessoa = {
  nome: "Eliana",
  apelidos: ["Eli", "Li", "Ana"]
}
function imprimeInformacoes(info){
  return [
   info.nome,
   info.nome.length
  ]
}
console.log(`Eu sou ${pessoa.nome} , mas pode me chamar de: ${pessoa.apelidos}.`)

//   b)
const pessoa = {
  nome: "Eliana",
  apelidos: ["El", "Iana", "Na"]
}
function imprimeInformacoes(info){
  return [
   info.nome,
   info.nome.length
  ]
}
console.log(`Eu sou ${pessoa.nome} , mas pode me chamar de: ${pessoa. ..}.`)

//   2.
//   a) 
const usuário01 = {
  nome: "Renato",
  idade: 35,
  profissão: "Engenheiro de Software"
}
const usuário02 = {
  nome: "Felipe",
  idade: 26,
  profissão: "Desenvolvedor Web"
}
function imprime (usuário01, usuário02){
  let arr01 = [usuario01.nome, usuario01.nome.length, usuario01.idade, usuario01.profissão, usuario01.profissão.length]
  let arr02 = [usuario02.nome, usuario02.nome.length, usuario02.idade, usuario02.profissão, usuario02.profissão.length]

  return console.log(arr01) + console.log(arr02)
}
imprime(usuario01,usuario02)

//   3.
//   a) - b) - c)
const carrinho = []

const fruta = {
    nome: "cereja",
    disponibilidade: true
}

const fruta1 = {
    nome: "caju",
    disponibilidade: true
}

const fruta2 = {
    nome: "lichia",
    disponibilidade: true
}

function adicionarCarrinho(objeto, objeto1, objeto2){
    carrinho.push(objeto, objeto1, objeto2)
    return carrinho 
}
console.log(adicionarCarrinho(fruta, fruta1, fruta2))

//Desafio 3).

const estoqueCarrinhoDeFruta = (objeto3) =>{
    return carrinho[objeto3.disponibilidade = !fruta2.disponibilidade]
}

estoqueCarrinhoDeFruta(fruta2) 
