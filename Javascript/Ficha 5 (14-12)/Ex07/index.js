let showTime = document.getElementById('time') //Criar variavel para depois mostrar a hora atual
const d = new Date(); //Variavel para detetar hora atual
hour = d.getHours(); //Variavel para detetar as horas que são
minutes = d.getMinutes(); //Variavel para detetar os minutos que são
seconds = d.getSeconds(); //Variavel para detetar os segundos que são
let horaAtual = hour + ':' + minutes + ':' + seconds //Variavel que junta todo o conteudo num formato organizado
showTime.innerHTML = horaAtual //Para mostrar a hora atual no paragrafo presente no documento HTML
