let resultado = 0; //Inserir a variavel resultado

function readUserInput(){
    /*
    Esta função pede ao utilizador para inserir dois números e um operador para realizar o calculo mais tarde!
    Se os números e/ou o operador não forem válidos, aparecerá uma mensagem de alerta e o cálculo já não será válido!
    */
    let num1 = prompt('Indique o primeiro número!'); //Pede para o utilizador inserir o 1º número
    if (isNaN(num1)){ //Se o 1º número não for válido!!
        window.alert('Não inseriu um número! Tente novamente!!');}
    let operador = String(prompt('Indique um operador')); //Pede para o utilizador inserir o operador de cálculo
    if (operador != '+' && operador!= '-' && operador!= '*' && operador!= '/'){ //Se o operador não for válido
        window.alert('O operador que inseriu não é válido!!');}
    let num2 = prompt('Indique o segundo número!'); //Pede para o utilizador inserir o 2º número
    if (isNaN(num2)){
        window.alert('Não inseriu um número! Tente novamente!!')}
    let callFunction = calculate(num1,num2,operador); //Chamar a função "calculate" com a variavel callFunction
    let callFunction2 = main(num1,num2,operador,resultado); //Chamar a função "main" com a variavel callFunction2
}

function calculate(num1,num2,operador){
    /*Esta função permite fazer o cálculo entre dois números inseridos pelo utilizador por um operador também inserido pelo utilizador
    De seguida retorna o resultado */
    if (operador === '+'){ //Se o operador for um "+"
        resultado = num1 + num2; //Soma os dois numeros
    }
    if (operador ==='-'){ //Se o operador for um "-"
        resultado = num1 - num2; //Subtrai os dois numeros
    }
    if (operador === '/'){ //Se o operador for um "/"
        resultado = num1 / num2; //Subtrai o 1º número pelo 2º
    }
    if (operador === '*'){ //Se o operafor for um "*"
        resultado = num1 * num2; //Multiplica os dois números
    }
    return (resultado); //Retornar o resultado
}

function main(num1,num2,operador,resultado){
    /*Esta função permite mandar uma mensagem para a consola com os números e operador inseridos, com o resultado*/
    console.log(num1 + operador + num2 + '=' + resultado);
}



