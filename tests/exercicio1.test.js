const exercicio1 = require('../exercicios/exercicio1');

describe('Função calculadora', () => {
  test('Passando os parametros 2 e 3, deve ser retornado 5, -1, 6, 0.6666666666666666', () => {
    expect(exercicio1(2, 3)).toContain('5', '-1', '6', '0.6666666666666666')
  });
  test('Passando os parametros 5 e 3, deve ser retornado 8, 2, 15, 1.6666666666666667', () => {
    expect(exercicio1(5, 3)).toContain('8', '2', '15', '1.6666666666666667')
  });
  test('Passando os parametros 6 e 6, deve ser retornado 12, 0, 36, 1', () => {
    expect(exercicio1(6, 6)).toContain('12', '0', '36', '1')
  });
});