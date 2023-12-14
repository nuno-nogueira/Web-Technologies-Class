let callFunction = sumNumbers();

function sumNumbers(){
        /*Esta função permite o utilizador inserir um numero, e de seguida somar todos os números até ao número que o utilizador inseriu*/
    let num = Number(prompt('Indique um número')); //O utilizador insire um numero
    let sum = 0; //Criar a variavel sum onde irá calcular a soma de todos os numeros
    for (i = 1; i <= num;i++){ 
        /*Esta ciclo começa como i sendo igual a 1 e corre até i ser maior que o numero que o utilizador inseriu*/
        sum += i; //Vai se somando todos os numeros para a variavel "sum"
        console.log(sum) //Imprimir a variavel "sum" a cada vez que se somar um numero
    }
}