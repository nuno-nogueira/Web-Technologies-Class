let num = prompt('Insira um número!!')
let pos = 0
nDigitos = num.length
let novoNum = ''

for (let i = nDigitos ; i >= 0; i-- ){
    //O ciclo começa com i sendo igual ao nº de caracteres enquanto i for maior ou igual que 0, indo diminuindo a cada ciclo
    pos = num.slice(i-1,i) //Buscar o ultimo digito do numero
    novoNum += pos //Adicionar esse digito ao numero novo
}

if (num == novoNum){ //Se o numero novo for igual ao numero inicial, significa que é capicua
    console.log('O número que inseriu é capicua! :D')
} else{ 
    console.log('O número que inseriu não é capicua!! :(')
}
