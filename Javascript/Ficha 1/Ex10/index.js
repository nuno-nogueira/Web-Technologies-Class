let num = prompt('Indique um número!!');
let nDigitos = num.length;
let digito = 0;
let sum = Number;
let primeiroDigito = Number

for (let i = 0; 10 > i; i++){
    primeiroDigito = num.slice(0, 1)
    if (primeiroDigito == '1'){
            console.log('O número que inseriu é um número feliz! :D')
            { break; }
    } 
    for (let j = 0; nDigitos+1 > j; j++){
        digito = num.slice(j,j+1);
        sum += Math.pow(num,2);
    }
    num = sum;
}

if (primeiroDigito != 1){
    console.log('O número que inseriu não é um número feliz!! :-(')
}