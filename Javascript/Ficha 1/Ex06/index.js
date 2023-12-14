let num = Number(prompt('Insira um número -'))

for (let i = 2; num+1 > i; i++){
    if ( i == num){ 
        /*
    Para parar o ciclo pois se de 2 até chegar ao próprio número não encontrou nenhuma divisão com resto 0
    Quer dizer que o número inserido é um número primo!
    */
        console.log('O número que inseriu é um número primo :D')
        { break; } //Parar o ciclo
    }
    if (num % i == 0){ 
        /*
        Se se encontrar um número onde tenha resto zero (exceto 1 (que não está no ciclo) 
        e o próprio número (que quando é encontrado, o ciclo para)) quer dizer que o número inserido
        é um número primo!
        */
        console.log('O número que inseriu não é um número primo! D:')
        { break; }
    } 
}