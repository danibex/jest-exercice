const exercicio2 = require('../exercicios/exercicio2')

describe('Função triângulo', () => {
    test('Passado os valores 2, 2 e 2 deve retornar que o triângulo é Equilátero', () => {
        expect(exercicio2(2, 2, 2)).toContain('Equilátero')
    })
    test('Passado os valores 3, 3 e 5 deve retornar que o triângulo é Isósceles', () => {
        expect(exercicio2(3, 3, 5)).toContain('Isósceles')
    })
    test('Passado os valores 1, 2 e 3 deve retornar que o triângulo é Escaleno', () => {
        expect(exercicio2(1, 2, 3)).toContain('Escaleno')
    })
    test('Se algum dos valores passados for igual a 0 deve retornar null', () => {
        expect(exercicio2(1, 0, 2)).toBe(null)
    })
    test('Se algum dos valores for negativo deve retornar null', () => {
        expect(exercicio2(1, 1, -2)).toBe(null)
    })
})
