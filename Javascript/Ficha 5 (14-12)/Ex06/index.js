let contagem = 0; //Variavel para contar o nº de cliques
let button = document.getElementById("myButton"); //Variavel para ir buscar o butão
let resultado = document.getElementById("result"); //Variavel para depois imprimir o nº de cliques
button.onclick = function(){ //Esta função conta o nº de cliques no botaoão
    contagem++; //Incrementar o nº de cliques a cada clique
    resultado.innerHTML = contagem; //Imprimir nº de cliques
}
