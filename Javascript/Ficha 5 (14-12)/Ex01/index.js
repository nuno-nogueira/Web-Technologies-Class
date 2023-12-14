function evenOrOdd(){
    /*Esta função pede ao utilizador para inserir um número
    De seguida, o algoritmo verifica se o número é par ou ímpar*/
    let num = Number(prompt('Insira um número!'));
    let par = 0;
    if (num % 2 == 0){
        par = true;
    } else{
        par = false;
    }
    if (par == true){
        window.alert('O número ' + num + ' é par');
        console.log(par);
    } 
    if (par == false){
        window.alert('O número ' + num + ' é ímpar');
        console.log(par);
    }
}