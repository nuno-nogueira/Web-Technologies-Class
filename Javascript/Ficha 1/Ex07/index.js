let num = Number(prompt('Insira um número - '))
let sum = 0

for (let i = 1; num + 1 > i; i++){
    if (num % i == 0){
        sum +=i
        if (sum == num){
            console.log('O número que inseriu é um número perfeito!')
            {break;}
        } else if (sum > num){
            console.log('O número que inseriu não é um número perfeito! D:')
            {break;}
        }
    }
    if (i == num && sum < num){
        console.log('O número que inseriu não é um número perfeito! D:')
        {break;}
    }
}