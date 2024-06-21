const exercicio4 = require('../exercicios/exercicio4')

describe('Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.', () => {
    test('10 / 3 resultado = 3 e resto = 1', () => {
        expect(exercicio4(10, 3)).toEqual({ resultado: 3, resto: 1 });
      });

    test('20 / 5 resultado = 4 e resto = 0', () => {
    expect(exercicio4(20, 5)).toEqual({ resultado: 4, resto: 0 });
    });
    
    test('7 / 2 resultado = 3 e resto = 1', () => {
    expect(exercicio4(7, 2)).toEqual({ resultado: 3, resto: 1 });
    });
})
