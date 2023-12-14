function adivinharNumero(){
    /*Esta função cria um jogo de adivinhar um número de 1 a 10 aleatoriamente escolhido!
    O programa vai ajudando o utilizador informando se o seu palpite é menor ou maior que o número secreto!
    O jogo apenas acaba quando o utilizador tiver descoberto o número secreto
    */
    let numSecreto = Math.floor(Math.random() * 10) + 1; //Variavel para escolher aleatoriamente o número secreto
    let palpite = 0; //Criar variavel para o palpite
    while (palpite != numSecreto){ //Enquanto o palpite do utilizador for diferente do nº secreto
        let palpite = prompt('Tente adivinhar o número secreto de 1 a 10!!'); //Para o utilizador inserir o seu palpite
        if (numSecreto > palpite){ //Se o número secreto for maior que o palpite do utilizador
            window.alert('O seu palpite é menor que o número secreto!!'); //Inserir a mensagem de ajuda
        }
        if (numSecreto < palpite){ //Se o número secreto for menor que o palpite do utilizador
            window.alert('O seu palpite é maior que o número secreto'); //Inserir a mensagem de ajuda
        }
        if (palpite == numSecreto){ //Quando o utilizador acertar o número secreto 
            window.alert('PARABENS!!! ACERTOU!! :DDDD'); //Imprimir esta mensagem!!
            { break; }
        }
    }
}