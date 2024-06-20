/* 
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
ATENÇÃO: A GRAFIA DA PALAVRA CONTA, SE "EQUILÁTERO, ISÓCELES E ESCALENO" ESTIVER ESCRITO ERRADO O TESTE IRÁ FALHAR
*/
// Exemplo de entrada: exercicio1(2, 2, 2)
// Exemplo de saída: `É um triângulo Equilátero`
function exercicio2(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) { 
        return 'Escaleno'
    } else {
        return null
    }
}

module.exports = exercicio2