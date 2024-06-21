const exercicio3 = require('../exercicios/exercicio3')

describe('Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.', () => {
    test('2^3 = 8', () => {
        expect(exercicio3(2, 3)).toBe(8);
      });
      
      test('5^0 = 1', () => {
        expect(exercicio3(5, 0)).toBe(1);
      });
      
      test('3^4 = 81', () => {
        expect(exercicio3(3, 4)).toBe(81);
      });
})
