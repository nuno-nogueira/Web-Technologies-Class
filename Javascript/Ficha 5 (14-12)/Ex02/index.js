let callFunction = concatenate();

function concatenate(){
    let string1 = String(prompt('Insira qualquer coisa!!'));
    let string2 = String(prompt('Insira outra coisa!!'));
    let novaString = string1.concat(' ',string2);
    console.log(novaString)
}