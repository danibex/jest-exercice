/* ESCREVA OS EXERCICIOS DENTRO DA FUNÇÃO ABAIXO */
/* PODE CRIAR PARÂMETROS */
/* NÃO PODE MUDAR O NOME DA FUNÇÃO */
/* A SENTENÇA SEMPRE ESTARÁ ANTES DA FUNÇÃO */

/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.  */
// Exemplo de entrada exercicio1(2, 3)
// Exemplo de saída 'Soma: 5, Subtração: -1, Multiplicação: 6, Divisão: 0.6666666666666666'
function exercicio1(x , y) {
  let soma = x + y
  let subtracao = x - y
  let multiplicacao = x * y
  let divisao = x / y
  return `Soma: ${soma}, Subtração: ${subtracao}, Multiplicação: ${multiplicacao}, Divisão: ${divisao}`;
  }


module.exports = exercicio1