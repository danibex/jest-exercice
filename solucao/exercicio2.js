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
console.log(exercicio2(1,2,0))
module.exports = exercicio2