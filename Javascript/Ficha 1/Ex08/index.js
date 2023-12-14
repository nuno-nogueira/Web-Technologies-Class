let num = prompt('Insira um número - ')
let nDigitos = num.length
let pos = 0
let sum = 0

for (let i = 0 ; nDigitos + 1 > i ; i++){
    // i começa em 0 e o ciclo vai até o i for maior que nDigitos + 1
    pos = num.slice(i,i+1) // Vai se buscar o digito em cada posição
    sum += Math.pow(pos,nDigitos) //Multiplicar o digito dessa posição pelo numero total de digitos do numero
}

if (sum == num){ //Se os numeros forem iguais:
    console.log('O número que inseriu é um número Armstrong!! :D')
} else{ //Senão:
    console.log('O número que inseriu não é um número Armstrong!! :(')
}