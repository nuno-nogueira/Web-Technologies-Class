let num1 = Number(prompt('Insira o 1º número - '))
let num2 = Number(prompt('Insira o 2º número - '))
let num3 = Number(prompt('Insira o 3º número - '))

if (num1 > num2 && num1 > num3){
    console.log('O 1º número é o maior!')
} else if (num2 > num1 && num2 > num3){
    console.log('O 2º número é o maior!')
} else if (num3 > num1 && num3 > num2){
    console.log('O 3º número é o maior!')
}