function convertCelsiusToFahrenheit(){
    /*Esta função permite converter um valor em graus Celsius para Fahrenheit*/
    let celsius = Number(prompt('Insira um valor de uma temperatura em graus Celsius!!')); //O utilizador insere um valor
    let fahrenheit = (celsius * (9/5)) + 32 //Fórmula de conversão de Celsius para Fahrenheit
    window.alert(celsius + 'º graus Celsius, convertido em Fahrenheit é igual a: ' + fahrenheit + 'º') //Mensagem com valor já invertido
}