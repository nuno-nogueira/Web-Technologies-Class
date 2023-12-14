let texto = prompt('Insira um texto!!'); //Variavel onde o utilizador insere o texto
let nCaracteres = texto.length;; //Variavel que conta o nº de caracteres do texto inserido para depois ser usado no ciclo for
let textoInverso = ''; //Variavel que será utilizada para guardar o texto inverso

for (i = nCaracteres-1; i>= 0 ; i--){
    /* i começa por ser igual ao nº de caracteres do texto -1 (pois o indice começa por 0)
    O ciclo corre enquanto i for maior ou igual a 0 indo o i decrementando */
    textoInverso += texto[i]; //Indo adicionando os caracteres em ordem inversa
}

console.log('Texto que inseriu:' + texto + '\n'); 
console.log('Texto inverso: ' + textoInverso);